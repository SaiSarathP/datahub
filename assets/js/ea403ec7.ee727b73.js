"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8387],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6418:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(4137)),r=["components"],l={title:"DataHub CLI",sidebar_label:"CLI",slug:"/cli",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/cli.md"},s="DataHub CLI",u={unversionedId:"docs/cli",id:"docs/cli",isDocsHomePage:!1,title:"DataHub CLI",description:"DataHub comes with a friendly cli called datahub that allows you to perform a lot of common operations using just the command line.",source:"@site/genDocs/docs/cli.md",sourceDirName:"docs",slug:"/cli",permalink:"/datahub/docs/cli",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/cli.md",tags:[],version:"current",frontMatter:{title:"DataHub CLI",sidebar_label:"CLI",slug:"/cli",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/cli.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart Guide",permalink:"/datahub/docs/quickstart"},next:{title:"Metadata Ingestion",permalink:"/datahub/docs/metadata-ingestion"}},d=[{value:"Release Notes",id:"release-notes",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Using pip",id:"using-pip",children:[],level:3},{value:"Using docker",id:"using-docker",children:[],level:3}],level:2},{value:"User Guide",id:"user-guide",children:[{value:"docker",id:"docker",children:[],level:3},{value:"ingest",id:"ingest",children:[],level:3},{value:"check",id:"check",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"telemetry",id:"telemetry",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"get",id:"get",children:[],level:3},{value:"put",id:"put",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-cli"},"DataHub CLI"),(0,i.kt)("p",null,"DataHub comes with a friendly cli called ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," that allows you to perform a lot of common operations using just the command line."),(0,i.kt)("h2",{id:"release-notes"},"Release Notes"),(0,i.kt)("p",null,"You can find the release notes in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/releases"},"github releases"),". If you wish release notes for each bug-fix release you can find them in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub/releases"},"acryldata releases"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"using-pip"},"Using pip"),(0,i.kt)("p",null,"We recommend python virtual environments (venv-s) to namespace pip modules. Here's an example setup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m venv datahub-env             # create the environment\nsource datahub-env/bin/activate         # activate the environment\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," If you install ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," in a virtual environment, that same virtual environment must be re-activated each time a shell window or session is created."),(0,i.kt)("p",null,"Once inside the virtual environment, install ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," using the following commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'# Requires Python 3.6+\npython3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n# If you see "command not found", try running this instead: python3 -m datahub version\n')),(0,i.kt)("p",null,"If you run into an error, try checking the ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/metadata-ingestion/developing#Common-setup-issues"},(0,i.kt)("em",{parentName:"a"},"common setup issues")),"."),(0,i.kt)("h3",{id:"using-docker"},"Using docker"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-ingestion")," docker image as explained in ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/docker"},"Docker Images"),". In case you are using Kubernetes you can start a pod with the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-ingestion")," docker image, log onto a shell on the pod and you should have the access to datahub CLI in your kubernetes cluster."),(0,i.kt)("h2",{id:"user-guide"},"User Guide"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," cli allows you to do many things, such as quickstarting a DataHub docker instance locally, ingesting metadata from your sources, as well as retrieving and modifying metadata.\nLike most command line tools, ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," is your best friend. Use it to discover the capabilities of the cli and the different commands and sub-commands that are supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Usage: datahub [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n  --debug / --no-debug\n  --version             Show the version and exit.\n  --help                Show this message and exit.\n\nCommands:\n  check      Helper commands for checking various aspects of DataHub.\n  delete     Delete metadata from datahub using a single urn or a combination of filters\n  docker     Helper commands for setting up and interacting with a local DataHub instance using Docker.\n  get        Get metadata for an entity with an optional list of aspects to project\n  ingest     Ingest metadata into DataHub.\n  init       Configure which datahub instance to connect to\n  put        Update a single aspect of an entity\n  telemetry  Toggle telemetry.\n  version    Print version number and exit.\n")),(0,i.kt)("p",null,"The following top-level commands listed below are here mainly to give the reader a high-level picture of what are the kinds of things you can accomplish with the cli.\nWe've ordered them roughly in the order we expect you to interact with these commands as you get deeper into the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub"),"-verse."),(0,i.kt)("h3",{id:"docker"},"docker"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," command allows you to start up a local DataHub instance using ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub docker quickstart"),". You can also check if the docker cluster is healthy using ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub docker check"),"."),(0,i.kt)("h3",{id:"ingest"},"ingest"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ingest")," command allows you to ingest metadata from your sources using ingestion configuration files, which we call recipes. The main ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/metadata-ingestion"},"ingestion page")," contains detailed instructions about how you can use the ingest command and perform advanced operations like rolling-back previously ingested metadata through the ",(0,i.kt)("inlineCode",{parentName:"p"},"rollback")," sub-command."),(0,i.kt)("h3",{id:"check"},"check"),(0,i.kt)("p",null,"The datahub package is composed of different plugins that allow you to connect to different metadata sources and ingest metadata from them.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"check")," command allows you to check if all plugins are loaded correctly as well as validate an individual MCE-file."),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"The init command is used to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," about where your DataHub instance is located. The CLI will point to localhost DataHub by default.\nRunning ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub init")," will allow you to customize the datahub instance you are communicating with."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note")),": Provide your GMS instance's host when the prompt asks you for the DataHub host."),(0,i.kt)("p",null,"Alternatively, you can set the following env variables if you don't want to use a config file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"DATAHUB_SKIP_CONFIG=True\nDATAHUB_GMS_HOST=http://localhost:8080\nDATAHUB_GMS_TOKEN= # Used for communicating with DataHub Cloud\nThe env variables take precedence over what is in the config.\n")),(0,i.kt)("h3",{id:"telemetry"},"telemetry"),(0,i.kt)("p",null,"To help us understand how people are using DataHub, we collect anonymous usage statistics on actions such as command invocations via Google Analytics.\nWe do not collect private information such as IP addresses, contents of ingestions, or credentials.\nThe code responsible for collecting and broadcasting these events is open-source and can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/telemetry/telemetry.py"},"within our GitHub"),"."),(0,i.kt)("p",null,"Telemetry is enabled by default, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"telemetry")," command lets you toggle the sending of these statistics via ",(0,i.kt)("inlineCode",{parentName:"p"},"telemetry enable/disable"),".\nYou can also disable telemetry by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"DATAHUB_TELEMETRY_ENABLED")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," command allows you to delete metadata from DataHub. Read this ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/how/delete-metadata"},"guide")," to understand how you can delete metadata from DataHub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'datahub delete --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --soft\n')),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," command allows you to easily retrieve metadata from DataHub, by using the REST API.\nFor example the following command gets the ownership aspect from the dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --aspect ownership | jq                                                                       put_command\n{\n  "value": {\n    "com.linkedin.metadata.snapshot.DatasetSnapshot": {\n      "aspects": [\n        {\n          "com.linkedin.metadata.key.DatasetKey": {\n            "name": "SampleHiveDataset",\n            "origin": "PROD",\n            "platform": "urn:li:dataPlatform:hive"\n          }\n        },\n        {\n          "com.linkedin.common.Ownership": {\n            "lastModified": {\n              "actor": "urn:li:corpuser:jdoe",\n              "time": 1581407189000\n            },\n            "owners": [\n              {\n                "owner": "urn:li:corpuser:jdoe",\n                "type": "DATAOWNER"\n              },\n              {\n                "owner": "urn:li:corpuser:datahub",\n                "type": "DATAOWNER"\n              }\n            ]\n          }\n        }\n      ],\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)"\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"put"},"put"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," command allows you to write metadata into DataHub. This is a flexible way for you to issue edits to metadata from the command line.\nFor example, the following command instructs ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ownership")," aspect of the dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)")," to the value in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"ownership.json"),".\nThe JSON in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ownership.json")," file needs to conform to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/common/Ownership.pdl"},(0,i.kt)("inlineCode",{parentName:"a"},"Ownership"))," Aspect model as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owners": [\n    {\n      "owner": "urn:li:corpuser:jdoe",\n      "type": "DEVELOPER"\n    },\n    {\n      "owner": "urn:li:corpuser:jdub",\n      "type": "DATAOWNER"\n    }\n  ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'datahub --debug put --urn "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)" --aspect ownership -d ownership.json\n\n[DATE_TIMESTAMP] DEBUG    {datahub.cli.cli_utils:340} - Attempting to emit to DataHub GMS; using curl equivalent to:\ncurl -X POST -H \'User-Agent: python-requests/2.26.0\' -H \'Accept-Encoding: gzip, deflate\' -H \'Accept: */*\' -H \'Connection: keep-alive\' -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'Content-Type: application/json\' --data \'{"proposal": {"entityType": "dataset", "entityUrn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)", "aspectName": "ownership", "changeType": "UPSERT", "aspect": {"contentType": "application/json", "value": "{\\"owners\\": [{\\"owner\\": \\"urn:li:corpuser:jdoe\\", \\"type\\": \\"DEVELOPER\\"}, {\\"owner\\": \\"urn:li:corpuser:jdub\\", \\"type\\": \\"DATAOWNER\\"}]}"}}}\' \'http://localhost:8080/aspects/?action=ingestProposal\'\nUpdate succeeded with status 200\n')))}p.isMDXComponent=!0}}]);