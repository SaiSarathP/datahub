"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5507],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(4137)),r=["components"],l={title:"Configuring Database Retention",sidebar_label:"Configuring Database Retention",slug:"/advanced/db-retention",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/db-retention.md"},s="Configuring Database Retention",p={unversionedId:"docs/advanced/db-retention",id:"docs/advanced/db-retention",isDocsHomePage:!1,title:"Configuring Database Retention",description:"Goal",source:"@site/genDocs/docs/advanced/db-retention.md",sourceDirName:"docs/advanced",slug:"/advanced/db-retention",permalink:"/datahub/docs/advanced/db-retention",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/advanced/db-retention.md",tags:[],version:"current",frontMatter:{title:"Configuring Database Retention",sidebar_label:"Configuring Database Retention",slug:"/advanced/db-retention",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/db-retention.md"},sidebar:"overviewSidebar",previous:{title:"No Code Metadata",permalink:"/datahub/docs/advanced/no-code-modeling"},next:{title:"Aspect Versioning",permalink:"/datahub/docs/advanced/aspect-versioning"}},c=[{value:"Goal",id:"goal",children:[],level:2},{value:"What type of retention policies are supported?",id:"what-type-of-retention-policies-are-supported",children:[],level:2},{value:"When is the retention policy applied?",id:"when-is-the-retention-policy-applied",children:[],level:2},{value:"How to configure?",id:"how-to-configure",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-database-retention"},"Configuring Database Retention"),(0,a.kt)("h2",{id:"goal"},"Goal"),(0,a.kt)("p",null,"DataHub stores different versions of ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"metadata aspects")," as they are ingested\nusing a database (or key-value store).  These multiple versions allow us to look at an aspect's historical changes and\nrollback to a previous version if incorrect metadata is ingested. However, every stored version takes additional storage\nspace, while possibly bringing less value to the system. We need to be able to impose a ",(0,a.kt)("strong",{parentName:"p"},"retention")," policy on these\nrecords to keep the size of the DB in check."),(0,a.kt)("p",null,"Goal of the retention system is to be able to ",(0,a.kt)("strong",{parentName:"p"},"configure and enforce retention policies")," on documents at each of these\nvarious levels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"global"),(0,a.kt)("li",{parentName:"ul"},"entity-level"),(0,a.kt)("li",{parentName:"ul"},"aspect-level")),(0,a.kt)("h2",{id:"what-type-of-retention-policies-are-supported"},"What type of retention policies are supported?"),(0,a.kt)("p",null,"We support 3 types of retention policies for aspects:\nPolicy | Versions Kept |\n--- | --- |\nIndefinite | All versions\nVersion-based | Latest ",(0,a.kt)("em",{parentName:"p"},"N")," versions\nTime-based |  Versions ingested in last ",(0,a.kt)("em",{parentName:"p"},"N")," seconds"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The latest version (version 0) is never deleted. This ensures core functionality of DataHub is not impacted while applying retention."),(0,a.kt)("h2",{id:"when-is-the-retention-policy-applied"},"When is the retention policy applied?"),(0,a.kt)("p",null,"As of now, retention policies are applied in two places:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"GMS boot-up"),": A bootstrap step ingests the predefined set of retention policies. If no policy existed before or the existing policy\nwas updated, an asynchronous call will be triggered.  It will apply the retention policy (or policies) to ",(0,a.kt)("strong",{parentName:"li"},"all")," records in the database."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Ingest"),": On every ingest, if an existing aspect got updated, it applies the retention policy to the urn-aspect pair being ingested.")),(0,a.kt)("p",null,"We are planning to support a cron-based application of retention in the near future to ensure that the time-based retention is applied correctly."),(0,a.kt)("h2",{id:"how-to-configure"},"How to configure?"),(0,a.kt)("p",null,"For the initial iteration, we have made this feature opt-in. Please set ",(0,a.kt)("strong",{parentName:"p"},"ENTITY_SERVICE_ENABLE_RETENTION=true")," when\ncreating the datahub-gms container/k8s pod."),(0,a.kt)("p",null,"On GMS start up, retention policies are initialized with:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, the default provided ",(0,a.kt)("strong",{parentName:"li"},"version-based")," retention to keep ",(0,a.kt)("strong",{parentName:"li"},"20 latest aspects")," for all entity-aspect pairs. "),(0,a.kt)("li",{parentName:"ol"},"Second, we read YAML files from the ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/datahub/plugins/retention")," directory and overlay them on the default set of policies we provide.")),(0,a.kt)("p",null,"For docker, we set docker-compose to mount ",(0,a.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins")," directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins")," directory\nwithin the containers, so you can customize the initial set of retention policies by creating\na ",(0,a.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins/retention/retention.yaml")," file."),(0,a.kt)("p",null,"We will support a standardized way to do this in Kubernetes setup in the near future. "),(0,a.kt)("p",null,"The format for the YAML file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- entity: "*" # denotes that policy will be applied to all entities\n  aspect: "*" # denotes that policy will be applied to all aspects\n  config:\n    retention:\n      version:\n        maxVersions: 20\n- entity: "dataset"\n  aspect: "datasetProperties"\n  config:\n    retention:\n      version:\n        maxVersions: 20\n      time:\n        maxAgeInSeconds: 2592000 # 30 days\n')),(0,a.kt)("p",null,"Note, it searches for the policies corresponding to the entity, aspect pair in the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"entity, aspect"),(0,a.kt)("li",{parentName:"ol"},"*, aspect"),(0,a.kt)("li",{parentName:"ol"},"entity, *"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},", "))),(0,a.kt)("p",null,"By restarting datahub-gms after creating the plugin yaml file, the new set of retention policies will be applied."))}u.isMDXComponent=!0}}]);