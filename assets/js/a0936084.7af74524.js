"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1366],{4137:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(b,i(i({ref:t},s),{},{components:a})):n.createElement(b,i({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5348:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],l={title:"metadata-jobs:mce-consumer-job",sidebar_label:"metadata-jobs:mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},c="MetadataChangeEvent (MCE) Consumer Job",u={unversionedId:"metadata-jobs/mce-consumer-job/README",id:"metadata-jobs/mce-consumer-job/README",isDocsHomePage:!1,title:"metadata-jobs:mce-consumer-job",description:"MCE Consumer is a Kafka Streams job. Its main function is to listen",source:"@site/genDocs/metadata-jobs/mce-consumer-job/README.md",sourceDirName:"metadata-jobs/mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",permalink:"/datahub/docs/metadata-jobs/mce-consumer-job",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md",tags:[],version:"current",frontMatter:{title:"metadata-jobs:mce-consumer-job",sidebar_label:"metadata-jobs:mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},sidebar:"overviewSidebar",previous:{title:"metadata-jobs:mae-consumer-job",permalink:"/datahub/docs/metadata-jobs/mae-consumer-job"},next:{title:"No Code Metadata",permalink:"/datahub/docs/advanced/no-code-modeling"}},s=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Start via Docker image",id:"start-via-docker-image",children:[],level:2},{value:"Start via command line",id:"start-via-command-line",children:[],level:2},{value:"Debugging",id:"debugging",children:[],level:2},{value:"Endpoints",id:"endpoints",children:[],level:2}],m={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metadatachangeevent-mce-consumer-job"},"MetadataChangeEvent (MCE) Consumer Job"),(0,o.kt)("p",null,"MCE Consumer is a ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/streams/"},"Kafka Streams")," job. Its main function is to listen\n",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," Kafka topic for messages and process those messages and writes new metadata to ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub GMS"),".\nAfter every successful update of metadata, GMS fires a ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," and this is consumed by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE Consumer Job"),"."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8")," installed on your machine to be\nable to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub GMS"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:build\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms"},"DataHub GMS")," Docker containers are up and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"Quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-mce-consumer"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:bootRun\n")),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"To debug with an IDE (i.e. IntelliJ), run the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootRun")," task with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-jvm")," flag. This will launch the app and\nlisten on port 5005 for a remote debugger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:bootRun --debug-jvm\n")),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Spring boot actuator has been enabled for MCE Application.\n",(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9090/actuator/health"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9090/actuator/metrics"),(0,o.kt)("p",null,"To retrieve a specific metric - http://localhost:9090/actuator/metrics/kafka.consumer.records.consumed.total"))}d.isMDXComponent=!0}}]);