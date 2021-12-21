package datahub.client;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.linkedin.data.template.JacksonDataTemplateCodec;
import com.linkedin.mxe.MetadataChangeProposal;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
public class RESTEmitter {

  private static final JacksonDataTemplateCodec DATA_TEMPLATE_CODEC = new JacksonDataTemplateCodec();

  @Getter
  private final String gmsUrl;

  @Getter
  private final int connectTimeoutSec;

  @Getter
  private final int readTimeoutSec;

  @Getter
  private final String token;

  public void emit(MetadataChangeProposal mcp) throws IOException {
    String payloadJson = DATA_TEMPLATE_CODEC.mapToString(mcp.data());
    ObjectMapper om = new ObjectMapper();
    TypeReference<HashMap<String, Object>> typeRef = new TypeReference<HashMap<String, Object>>() {
    };
    HashMap<String, Object> o = om.readValue(payloadJson, typeRef);
    while (o.values().remove(null)) {
    }
    payloadJson = om.writeValueAsString(o);
    payloadJson = "{" + "  \"proposal\" :" + payloadJson + "}";
    log.debug("Emitting payload: " + payloadJson + "\n to URL " + this.gmsUrl + "/aspects?action=ingestProposal");
    this.makeRequest(this.gmsUrl + "/aspects?action=ingestProposal", "POST", payloadJson);
  }

  public boolean makeRequest(String urlStr, String method, String payloadJson) throws IOException {
    URL url = new URL(urlStr);
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
    con.setConnectTimeout(this.connectTimeoutSec * 1000);
    con.setReadTimeout(this.connectTimeoutSec * 1000);
    con.setRequestMethod(method);
    con.setRequestProperty("Content-Type", "application/json");
    con.setRequestProperty("X-RestLi-Protocol-Version", "2.0.0");
    if (this.token != null) {
      con.setRequestProperty("Authorization", "Bearer " + token);
    }
//        con.setRequestProperty("Accept", "application/json");
    con.setDoOutput(true);
    if (payloadJson != null) {
      try (OutputStream os = con.getOutputStream()) {
        byte[] input = payloadJson.getBytes("utf-8");
        os.write(input, 0, input.length);
      }
    }
    try (BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"))) {
      StringBuilder response = new StringBuilder();
      String responseLine = null;
      while ((responseLine = br.readLine()) != null) {
        response.append(responseLine.trim());
      }
      log.debug("URL: " + urlStr + " Response: " + response.toString());
    }
    return true;

  }

  public boolean testConnection() {
    try {
      this.makeRequest(this.gmsUrl + "/config", "GET", null);
      return true;

    } catch (IOException e) {
      e.printStackTrace();
      return false;
    }
  }

  public static RESTEmitter create(String gmsUrl) {
    // setting default connect time out to 30 seconds. should be plenty to connect
    // setting default readTimeoutSec to 30 sec
    return new RESTEmitter(gmsUrl, 30, 30, null);
  }

  public static RESTEmitter create(String gmsUrl, int connectTimeoutSec, int readTimeoutSec) {
    return new RESTEmitter(gmsUrl, connectTimeoutSec, readTimeoutSec, null);
  }

  public static RESTEmitter create(String gmsUrl, String token) {
    return new RESTEmitter(gmsUrl, 30, 30, token);
  }

  public static RESTEmitter create(String gmsUrl, int connectTimeoutSec, int readTimeoutSec, String token) {
    return new RESTEmitter(gmsUrl, connectTimeoutSec, readTimeoutSec, token);
  }

}