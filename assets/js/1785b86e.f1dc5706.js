"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3920],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),s=(n(7294),n(4137)),i=["components"],o={title:"Business Glossary",sidebar_label:"Business Glossary",slug:"/metadata-ingestion/source_docs/business_glossary",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/business_glossary.md"},l="Business Glossary",u={unversionedId:"metadata-ingestion/source_docs/business_glossary",id:"metadata-ingestion/source_docs/business_glossary",isDocsHomePage:!1,title:"Business Glossary",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/business_glossary.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/business_glossary",permalink:"/datahub/docs/metadata-ingestion/source_docs/business_glossary",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/business_glossary.md",tags:[],version:"current",frontMatter:{title:"Business Glossary",sidebar_label:"Business Glossary",slug:"/metadata-ingestion/source_docs/business_glossary",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/business_glossary.md"},sidebar:"overviewSidebar",previous:{title:"BigQuery",permalink:"/datahub/docs/metadata-ingestion/source_docs/bigquery"},next:{title:"dbt",permalink:"/datahub/docs/metadata-ingestion/source_docs/dbt"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[{value:"Business Glossary File Format",id:"business-glossary-file-format",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"business-glossary"},"Business Glossary"),(0,s.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,s.kt)("a",{parentName:"p",href:"/datahub/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,s.kt)("h2",{id:"setup"},"Setup"),(0,s.kt)("p",null,"Works with ",(0,s.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," out of the box."),(0,s.kt)("h2",{id:"capabilities"},"Capabilities"),(0,s.kt)("p",null,"This plugin pulls business glossary metadata from a yaml-formatted file. An example of one such file is located in the examples directory ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/business_glossary.yml"},"here"),"."),(0,s.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,s.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,s.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,s.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,s.kt)("a",{parentName:"p",href:"/datahub/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: datahub-business-glossary\n  config:\n    # Coordinates\n    file: /path/to/business_glossary_yaml\n\nsink:\n  # sink configs\n")),(0,s.kt)("h2",{id:"config-details"},"Config details"),(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Default"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"file")),(0,s.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null},"Path to business glossary file to ingest.")))),(0,s.kt)("h3",{id:"business-glossary-file-format"},"Business Glossary File Format"),(0,s.kt)("p",null,"The business glossary source file should be a ",(0,s.kt)("inlineCode",{parentName:"p"},".yml")," file with the following top-level keys:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Glossary"),": the top level keys of the business glossary file"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"version"),": the version of business glossary file config the config conforms to. Currently the only version released is ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"source"),": the source format of the terms. Currently only supports ",(0,s.kt)("inlineCode",{parentName:"li"},"DataHub")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"owners"),": (optional) owners contains two nested fields",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"users"),": (optional) a list of user ids"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"groups"),": (optional) a list of group ids"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"url"),": (optional) external url pointing to where the glossary is defined externally, if applicable."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"nodes"),": (optional) list of child ",(0,s.kt)("strong",{parentName:"li"},"GlossaryNode")," objects"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"terms"),": (optional) list of child ",(0,s.kt)("strong",{parentName:"li"},"GlossaryTerm")," objects")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"GlossaryNode"),": a container of ",(0,s.kt)("strong",{parentName:"p"},"GlossaryNode")," and ",(0,s.kt)("strong",{parentName:"p"},"GlossaryTerm")," objects"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"name"),": name of the node"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"description"),": (optional) description of the node"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"owners"),": (optional) owners contains two nested fields",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"users"),": (optional) a list of user ids"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"groups"),": (optional) a list of group ids"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"terms"),": (optional) list of child ",(0,s.kt)("strong",{parentName:"li"},"GlossaryTerm")," objects"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"nodes"),": (optional) list of child ",(0,s.kt)("strong",{parentName:"li"},"GlossaryNode")," objects")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"GlossaryTerm"),": a term in your business glossary"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"name"),": name of the term"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"description"),": (optional) description of the term"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"owners"),": (optional) owners contains two nested fields",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"users"),": (optional) a list of user ids"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"groups"),": (optional) a list of group ids"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"term_source"),": One of ",(0,s.kt)("inlineCode",{parentName:"li"},"EXTERNAL")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"INTERNAL"),". Whether the term is coming from an external glossary or one defined in your organization."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"source_ref"),": (optional) If external, what is the name of the source the glossary term is coming from?"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"source_url"),": (optional) If external, what is the url of the source definition?"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"inherits"),": (optional) List of ",(0,s.kt)("strong",{parentName:"li"},"GlossaryTerm")," that this term inherits from"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"contains"),": (optional) List of ",(0,s.kt)("strong",{parentName:"li"},"GlossaryTerm")," that this term contains"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"custom_properties"),": A map of key/value pairs of arbitrary custom properties")),(0,s.kt)("p",null,"You can also view an example business glossary file checked in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/business_glossary.yml"},"here")),(0,s.kt)("h2",{id:"compatibility"},"Compatibility"),(0,s.kt)("p",null,"Compatible with version 1 of business glossary format.\nThe source will be evolved as we publish newer versions of this format."),(0,s.kt)("h2",{id:"questions"},"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}c.isMDXComponent=!0}}]);