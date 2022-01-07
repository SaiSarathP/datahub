"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5977],{4137:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||l;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9914:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(4137)),o=["components"],i={title:"Removing Metadata from DataHub",sidebar_label:"Removing Metadata from DataHub",slug:"/how/delete-metadata",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/delete-metadata.md"},d="Removing Metadata from DataHub",u={unversionedId:"docs/how/delete-metadata",id:"docs/how/delete-metadata",isDocsHomePage:!1,title:"Removing Metadata from DataHub",description:"There are a two ways to delete metadata from DataHub.",source:"@site/genDocs/docs/how/delete-metadata.md",sourceDirName:"docs/how",slug:"/how/delete-metadata",permalink:"/datahub/docs/how/delete-metadata",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/delete-metadata.md",tags:[],version:"current",frontMatter:{title:"Removing Metadata from DataHub",sidebar_label:"Removing Metadata from DataHub",slug:"/how/delete-metadata",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/delete-metadata.md"},sidebar:"overviewSidebar",previous:{title:"How to Extract Logs from DataHub Containers",permalink:"/datahub/docs/how/extract-container-logs"},next:{title:"React Analytics",permalink:"/datahub/docs/datahub-web-react/src/app/analytics"}},s=[{value:"Delete By Urn",id:"delete-by-urn",children:[{value:"Soft Delete (the default)",id:"soft-delete-the-default",children:[],level:3},{value:"Hard Delete",id:"hard-delete",children:[],level:3}],level:2},{value:"Delete using Broader Filters",id:"delete-using-broader-filters",children:[{value:"Delete all datasets in the DEV environment",id:"delete-all-datasets-in-the-dev-environment",children:[],level:3},{value:"Delete all bigquery datasets in the PROD environment",id:"delete-all-bigquery-datasets-in-the-prod-environment",children:[],level:3},{value:"Delete all looker dashboards and charts",id:"delete-all-looker-dashboards-and-charts",children:[],level:3},{value:"Delete all datasets that match a query",id:"delete-all-datasets-that-match-a-query",children:[],level:3}],level:2},{value:"Rollback Ingestion Batch Run",id:"rollback-ingestion-batch-run",children:[],level:2}],c={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"removing-metadata-from-datahub"},"Removing Metadata from DataHub"),(0,l.kt)("p",null,"There are a two ways to delete metadata from DataHub. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Delete metadata attached to entities by providing a specific urn or a filter that identifies a set of entities"),(0,l.kt)("li",{parentName:"ul"},"Delete metadata affected by a single ingestion run")),(0,l.kt)("p",null,"To follow this guide you need to use ",(0,l.kt)("a",{parentName:"p",href:"/datahub/docs/cli"},"DataHub CLI"),"."),(0,l.kt)("p",null,"Read on to find out how to perform these kinds of deletes."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: Deleting metadata should only be done with care. Always use ",(0,l.kt)("inlineCode",{parentName:"em"},"--dry-run")," to understand what will be deleted before proceeding. Prefer soft-deletes (",(0,l.kt)("inlineCode",{parentName:"em"},"--soft"),") unless you really want to nuke metadata rows. Hard deletes will actually delete rows in the primary store and recovering them will require using backups of the primary metadata store. Make sure you understand the implications of issuing soft-deletes versus hard-deletes before proceeding.")," "),(0,l.kt)("h2",{id:"delete-by-urn"},"Delete By Urn"),(0,l.kt)("p",null,"To delete all the data related to a single entity, run"),(0,l.kt)("h3",{id:"soft-delete-the-default"},"Soft Delete (the default)"),(0,l.kt)("p",null,"This sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"Status")," aspect of the entity to ",(0,l.kt)("inlineCode",{parentName:"p"},"Removed"),", which hides the entity and all its aspects from being returned by the UI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'datahub delete --urn "<my urn>"\n')),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'datahub delete --urn "<my urn>" --soft\n')),(0,l.kt)("h3",{id:"hard-delete"},"Hard Delete"),(0,l.kt)("p",null,"This physically deletes all rows for all aspects of the entity. This action cannot be undone, so execute this only after you are sure you want to delete all data associated with this entity. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'datahub delete --urn "<my urn>" --hard\n')),(0,l.kt)("p",null,"You can optionally add ",(0,l.kt)("inlineCode",{parentName:"p"},"-n")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--dry-run")," to execute a dry run before issuing the final delete command.\nYou can optionally add ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," to skip confirmations"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: make sure you surround your urn with quotes! If you do not include the quotes, your terminal may misinterpret the command.")),(0,l.kt)("h2",{id:"delete-using-broader-filters"},"Delete using Broader Filters"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: All these commands below support the soft-delete option (",(0,l.kt)("inlineCode",{parentName:"em"},"-s/--soft"),") as well as the dry-run option (",(0,l.kt)("inlineCode",{parentName:"em"},"-n/--dry-run"),").")," "),(0,l.kt)("h3",{id:"delete-all-datasets-in-the-dev-environment"},"Delete all datasets in the DEV environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub delete --env DEV --entity_type dataset\n")),(0,l.kt)("h3",{id:"delete-all-bigquery-datasets-in-the-prod-environment"},"Delete all bigquery datasets in the PROD environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub delete --env PROD --entity_type dataset --platform bigquery\n")),(0,l.kt)("h3",{id:"delete-all-looker-dashboards-and-charts"},"Delete all looker dashboards and charts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub delete --entity_type dashboard --platform looker\ndatahub delete --entity_type chart --platform looker\n")),(0,l.kt)("h3",{id:"delete-all-datasets-that-match-a-query"},"Delete all datasets that match a query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'datahub delete --entity_type dataset --query "_tmp" -n\n')),(0,l.kt)("h2",{id:"rollback-ingestion-batch-run"},"Rollback Ingestion Batch Run"),(0,l.kt)("p",null,"The second way to delete metadata is to identify entities (and the aspects affected) by using an ingestion ",(0,l.kt)("inlineCode",{parentName:"p"},"run-id"),". Whenever you run ",(0,l.kt)("inlineCode",{parentName:"p"},"datahub ingest -c ..."),", all the metadata ingested with that run will have the same run id."),(0,l.kt)("p",null,"To view the ids of the most recent set of ingestion batches, execute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub ingest list-runs\n")),(0,l.kt)("p",null,"That will print out a table of all the runs. Once you have an idea of which run you want to roll back, run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub ingest show --run-id <run-id>\n")),(0,l.kt)("p",null,"to see more info of the run."),(0,l.kt)("p",null,"Alternately, you can execute a dry-run rollback to achieve the same outcome. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub ingest rollback --dry-run --run-id <run-id>\n")),(0,l.kt)("p",null,"Finally, once you are sure you want to delete this data forever, run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datahub ingest rollback --run-id <run-id>\n")),(0,l.kt)("p",null,"to rollback all aspects added with this run and all entities created by this run."))}p.isMDXComponent=!0}}]);