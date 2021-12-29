package datahub.client;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.linkedin.data.DataMap;
import com.linkedin.data.template.JacksonDataTemplateCodec;
import com.linkedin.mxe.MetadataChangeProposal;
import datahub.event.EventFormatter;
import datahub.event.MetadataChangeProposalWrapper;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpResponse;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.concurrent.FutureCallback;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.nio.client.CloseableHttpAsyncClient;
import org.apache.http.impl.nio.client.HttpAsyncClientBuilder;


@Slf4j
public class RestEmitter implements Emitter {

  private final RestEmitterConfig config;
  private final String ingestProposalUrl;
  private final String configUrl;

  private final ObjectMapper objectMapper = new ObjectMapper().setSerializationInclusion(JsonInclude.Include.NON_NULL);
  private final JacksonDataTemplateCodec dataTemplateCodec = new JacksonDataTemplateCodec(objectMapper.getFactory());
  private final CloseableHttpAsyncClient httpClient;
  private final EventFormatter eventFormatter;

  public RestEmitter(
      RestEmitterConfig config
  ) {
    this.config = config;
    // Override httpClient settings with RestEmitter configs if present
    if (config.getTimeoutSec() != null) {
      HttpAsyncClientBuilder httpClientBuilder = this.config.getAsyncHttpClientBuilder();
        httpClientBuilder.setDefaultRequestConfig(RequestConfig.custom()
          .setConnectTimeout(config.getTimeoutSec() * 1000)
          .setSocketTimeout(config.getTimeoutSec() * 1000)
          .build());
    }
    this.httpClient = this.config.getAsyncHttpClientBuilder().build();
    this.httpClient.start();
    this.ingestProposalUrl = this.config.getGmsUrl() + "/aspects?action=ingestProposal";
    this.configUrl = this.config.getGmsUrl() + "/config";
    this.eventFormatter = this.config.getEventFormatter();
  }

  @Override
  public Future<MetadataWriteResponse> emit(MetadataChangeProposalWrapper mcpw, Callback<MetadataWriteResponse> callback) throws IOException {
    return emit(this.eventFormatter.convert(mcpw), callback);
  }

  @Override
  public Future<MetadataWriteResponse> emit(MetadataChangeProposal mcp, Callback<MetadataWriteResponse> callback) throws IOException {
    DataMap map = new DataMap();
    map.put("proposal", mcp.data());
    String serializedMCP = dataTemplateCodec.mapToString(map);
    log.debug("Emit: URL: {}, Payload: {}\n", this.ingestProposalUrl, serializedMCP);
    return this.postGeneric(this.ingestProposalUrl, serializedMCP, mcp, callback);
  }

  private Future<MetadataWriteResponse> postGeneric(String urlStr, String payloadJson, Object originalRequest, Callback<MetadataWriteResponse> callback) throws IOException {
    HttpPost httpPost = new HttpPost(urlStr);
    httpPost.setHeader("Content-Type", "application/json");
    httpPost.setHeader("X-RestLi-Protocol-Version", "2.0.0");
    httpPost.setHeader("Accept", "application/json");
    this.config.getExtraHeaders().forEach((k, v) -> httpPost.setHeader(k, v));
    if (this.config.getToken() != null) {
      httpPost.setHeader("Authorization", "Bearer " + this.config.getToken());
    }
    httpPost.setEntity(new StringEntity(payloadJson));
    AtomicReference<MetadataWriteResponse> responseAtomicReference = new AtomicReference<>();
    CountDownLatch responseLatch = new CountDownLatch(1);
    FutureCallback<HttpResponse> httpCallback = new FutureCallback<HttpResponse>() {
      @Override
      public void completed(HttpResponse response) {
        MetadataWriteResponse writeResponse = null;
        try {
          writeResponse = mapResponse(response);
          responseAtomicReference.set(writeResponse);
        } catch (Exception e) {
          // do nothing
        }
        responseLatch.countDown();
        if (callback != null) {
          callback.onCompletion(writeResponse);
        }
      }

      @Override
      public void failed(Exception ex) {
        callback.onFailure(ex);
      }

      @Override
      public void cancelled() {
        callback.onFailure(new RuntimeException("Cancelled"));
      }
    };
    Future<HttpResponse> requestFuture = httpClient.execute(httpPost, httpCallback);
    return new MetadataResponseFuture(requestFuture, responseAtomicReference, responseLatch);
  }

  private static MetadataWriteResponse mapResponse(HttpResponse response) {
      MetadataWriteResponse.MetadataWriteResponseBuilder builder = MetadataWriteResponse.builder()
          .underlyingResponse(response);
      if ((response!= null) && (response.getStatusLine()!=null) && (response.getStatusLine().getStatusCode() == 200 || response.getStatusLine().getStatusCode() == 201)) {
        builder.success(true);
      } else {
        builder.success(false);
        try {
          ByteArrayOutputStream result = new ByteArrayOutputStream();
          InputStream contentStream = response.getEntity().getContent();
          byte[] buffer = new byte[1024];
          for (int length; (length = contentStream.read(buffer)) != -1; ) {
            result.write(buffer, 0, length);
          }
          builder.serverException(result.toString("UTF-8"));
        }
        catch (Exception e) {
          // Catch all exceptions and still return a valid response object
          log.warn("Wasn't able to convert response into a string", e);
        }
      }
      return builder.build();
  }


  private Future<MetadataWriteResponse> getGeneric(String urlStr) throws IOException {
    HttpGet httpGet = new HttpGet(urlStr);
    httpGet.setHeader("Content-Type", "application/json");
    httpGet.setHeader("X-RestLi-Protocol-Version", "2.0.0");
    httpGet.setHeader("Accept", "application/json");
    Future<HttpResponse> response = this.httpClient.execute(httpGet, null);
    return new MetadataResponseFuture(response, RestEmitter::mapResponse);
  }

  @Override
  public boolean testConnection() throws IOException, ExecutionException, InterruptedException {
    return this.getGeneric(this.configUrl).get().isSuccess();
  }

  public static RestEmitter create(Consumer<RestEmitterConfig.RestEmitterConfigBuilder> builderSupplier) {
    RestEmitter restEmitter = new RestEmitter(RestEmitterConfig.builder().with(builderSupplier).build());
    return restEmitter;
  }

  public static RestEmitter createWithDefaults() {
    // No-op creator -> creates RestEmitter using default settings
    return create(b -> {});
  }

  @Override
  public void close() throws IOException {
    this.httpClient.close();
  }
}