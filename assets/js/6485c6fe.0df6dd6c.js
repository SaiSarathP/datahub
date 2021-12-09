"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[565],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4538:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(4137)),i=["components"],o={title:"Redshift",sidebar_label:"Redshift",slug:"/metadata-ingestion/source_docs/redshift",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/redshift.md"},s="Redshift",d={unversionedId:"metadata-ingestion/source_docs/redshift",id:"metadata-ingestion/source_docs/redshift",isDocsHomePage:!1,title:"Redshift",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/redshift.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/redshift",permalink:"/docs/metadata-ingestion/source_docs/redshift",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/redshift.md",tags:[],version:"current",frontMatter:{title:"Redshift",sidebar_label:"Redshift",slug:"/metadata-ingestion/source_docs/redshift",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/redshift.md"},sidebar:"overviewSidebar",previous:{title:"Redash",permalink:"/docs/metadata-ingestion/source_docs/redash"},next:{title:"S3",permalink:"/docs/metadata-ingestion/source_docs/s3"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Lineage",id:"lineage",children:[{value:"stl_scan_based",id:"stl_scan_based",children:[],level:3},{value:"sql_based",id:"sql_based",children:[],level:3},{value:"mixed",id:"mixed",children:[],level:3}],level:2},{value:"Sample usage recipe",id:"sample-usage-recipe",children:[{value:"Config details",id:"config-details-1",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],u={toc:p};function m(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redshift"},"Redshift"),(0,r.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[redshift]'"),"."),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This plugin extracts the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata for databases, schemas, views and tables"),(0,r.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,r.kt)("li",{parentName:"ul"},"Also supports PostGIS extensions"),(0,r.kt)("li",{parentName:"ul"},"Table, row, and column statistics via optional ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiling")),(0,r.kt)("li",{parentName:"ul"},"Table lineage")),(0,r.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: redshift\n  config:\n    # Coordinates\n    host_port: example.something.us-west-2.redshift.amazonaws.com:5439\n    database: DemoDatabase\n\n    # Credentials\n    username: user\n    password: pass\n\n    # Options\n    options:\n      # driver_option: some-option\n\n    include_views: True # whether to include views, defaults to True\n    include_tables: True # whether to include views, defaults to True\n\nsink:\n  # sink configs\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Extra options when running Redshift behind a proxy"),(0,r.kt)("p",null,"This requires you to have already installed the Microsoft ODBC Driver for SQL Server.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?view=sql-server-ver15"},"https://docs.microsoft.com/en-us/sql/connect/python/pyodbc/step-1-configure-development-environment-for-pyodbc-python-development?view=sql-server-ver15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: redshift\n  config:\n    host_port: my-proxy-hostname:5439\n\n    options:\n      connect_args:\n        sslmode: "prefer" # or "require" or "verify-ca"\n        sslrootcert: ~ # needed to unpin the AWS Redshift certificate\n\nsink:\n  # sink configs\n'))),(0,r.kt)("h2",{id:"config-details"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("p",null,"As a SQL-based service, the Athena integration is also supported by our SQL profiler. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"here")," for more details on configuration."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host_port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift host URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database_alias")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Alias to apply to database when ingesting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for schemas to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to include in ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for views to exclude from ingestion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view_pattern.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_tables")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether tables should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_views")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether views should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_table_lineage")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether table lineage should be ingested.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table_lineage_mode")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"stl_scan_based"')),(0,r.kt)("td",{parentName:"tr",align:null},"Which table lineage collector mode to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"include_copy_lineage")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether lineage should be collected from copy commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default_schema")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"public"')),(0,r.kt)("td",{parentName:"tr",align:null},"The default schema to use if the sql parser fails to parse the schema with ",(0,r.kt)("inlineCode",{parentName:"td"},"sql_based")," lineage collector")))),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Coming soon!"),(0,r.kt)("h2",{id:"lineage"},"Lineage"),(0,r.kt)("p",null,"There are multiple lineage collector implementations as Redshift does not support table lineage out of the box."),(0,r.kt)("h3",{id:"stl_scan_based"},"stl_scan_based"),(0,r.kt)("p",null,"The stl_scan based collector uses Redshift's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_STL_INSERT.html"},"stl_insert")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_STL_SCAN.html"},"stl_scan")," system tables to\ndiscover lineage between tables.\nPros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fast"),(0,r.kt)("li",{parentName:"ul"},"Reliable")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does not work with Spectrum/external tables because those scans do not show up in stl_scan table."),(0,r.kt)("li",{parentName:"ul"},"If a table is depending on a view then the view won't be listed as dependency. Instead the table will be connected with the view's dependencies.")),(0,r.kt)("h3",{id:"sql_based"},"sql_based"),(0,r.kt)("p",null,"The sql_based based collector uses Redshift's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_STL_INSERT.html"},"stl_insert")," to discover all the insert queries\nand uses sql parsing to discover the dependecies."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Works with Spectrum tables"),(0,r.kt)("li",{parentName:"ul"},"Views are connected properly if a table depends on it")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slow."),(0,r.kt)("li",{parentName:"ul"},"Less reliable as the query parser can fail on certain queries")),(0,r.kt)("h3",{id:"mixed"},"mixed"),(0,r.kt)("p",null,"Using both collector above and first applying the sql based and then the stl_scan based one."),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Works with Spectrum tables"),(0,r.kt)("li",{parentName:"ul"},"Views are connected properly if a table depends on it"),(0,r.kt)("li",{parentName:"ul"},"A bit more reliable than the sql_based one only")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slow"),(0,r.kt)("li",{parentName:"ul"},"May be incorrect at times as the query parser can fail on certain queries")),(0,r.kt)("h1",{id:"note"},"Note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The redshift stl redshift tables which are used for getting data lineage only retain approximately two to five days of log history. This means you cannot extract lineage from queries issued outside that window.")),(0,r.kt)("h1",{id:"redshift-usage"},"Redshift-Usage"),(0,r.kt)("p",null,"This plugin extracts usage statistics for datasets in Amazon Redshift. For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("p",null,"Note: Usage information is computed by querying the following system tables - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"stl_scan"),(0,r.kt)("li",{parentName:"ol"},"svv_table_info"),(0,r.kt)("li",{parentName:"ol"},"stl_query"),(0,r.kt)("li",{parentName:"ol"},"svl_user_info")),(0,r.kt)("p",null,"##Setup\nTo install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[redshift-usage]'"),"."),(0,r.kt)("p",null,"##Capabilities\nThis plugin has the below functionalities -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For a specific dataset this plugin ingests the following statistics - ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"top n queries."),(0,r.kt)("li",{parentName:"ol"},"top users."),(0,r.kt)("li",{parentName:"ol"},"usage of each column in the dataset."))),(0,r.kt)("li",{parentName:"ol"},"Aggregation of these statistics into buckets, by day or hour granularity.")),(0,r.kt)("h2",{id:"sample-usage-recipe"},"Sample usage recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: redshift-usage\n  config:\n    # Coordinates\n    host_port: db_host:port\n    database: dev\n    email_domain: acryl.io\n\n    # Credentials\n    username: username\n    password: "password"\n\nsink:\n# sink configs\n')),(0,r.kt)("h3",{id:"config-details-1"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("p",null,"By default, we extract usage stats for the last day, with the recommendation that this source is executed every day."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host_port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift host URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Redshift database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"options.<option>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any options specified here will be passed to SQLAlchemy's ",(0,r.kt)("inlineCode",{parentName:"td"},"create_engine")," as kwargs.",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email_domain")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Email domain of your organisation so users can be displayed on UI appropriately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Earliest date of usage to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end_time")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Last full day in UTC (or hour, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest date of usage to consider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"top_n_queries")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of top queries to save to each table.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bucket_duration")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"DAY"')),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the time window to aggregate usage stats.")))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}m.isMDXComponent=!0}}]);