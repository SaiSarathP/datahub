"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6460],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},949:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],s={title:"Adding a Metadata Ingestion Source",sidebar_label:"Adding a Metadata Ingestion Source",slug:"/metadata-ingestion/adding-source",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/adding-source.md"},d="Adding a Metadata Ingestion Source",l={unversionedId:"metadata-ingestion/adding-source",id:"metadata-ingestion/adding-source",isDocsHomePage:!1,title:"Adding a Metadata Ingestion Source",description:"There are two ways of adding a metadata ingestion source.",source:"@site/genDocs/metadata-ingestion/adding-source.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/adding-source",permalink:"/docs/metadata-ingestion/adding-source",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/adding-source.md",tags:[],version:"current",frontMatter:{title:"Adding a Metadata Ingestion Source",sidebar_label:"Adding a Metadata Ingestion Source",slug:"/metadata-ingestion/adding-source",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/adding-source.md"},sidebar:"overviewSidebar",previous:{title:"Using Docker Images During Development",permalink:"/docs/docker/development"},next:{title:"S3",permalink:"/docs/metadata-ingestion/source_docs/s3"}},c=[{value:"1. Set up the configuration model",id:"1-set-up-the-configuration-model",children:[],level:3},{value:"2. Set up the reporter",id:"2-set-up-the-reporter",children:[],level:3},{value:"3. Implement the source itself",id:"3-implement-the-source-itself",children:[],level:3},{value:"4. Set up the dependencies",id:"4-set-up-the-dependencies",children:[],level:3},{value:"5. Enable discoverability",id:"5-enable-discoverability",children:[],level:3},{value:"6. Write tests",id:"6-write-tests",children:[],level:3},{value:"7. Write docs",id:"7-write-docs",children:[],level:3},{value:"8. Add SQL Alchemy mapping (if applicable)",id:"8-add-sql-alchemy-mapping-if-applicable",children:[],level:3},{value:"9. Add logo",id:"9-add-logo",children:[],level:3}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-a-metadata-ingestion-source"},"Adding a Metadata Ingestion Source"),(0,o.kt)("p",null,"There are two ways of adding a metadata ingestion source."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You are going to contribute the custom source directly to the Datahub project."),(0,o.kt)("li",{parentName:"ol"},"You are writing the custom source for yourself and are not going to contribute back (yet).")),(0,o.kt)("p",null,"If you are going for case (1) just follow the steps 1 to 9 below. In case you are building it for yourself you can skip\nsteps 4-9 (but maybe write tests and docs for yourself as well) and follow the documentation\non ",(0,o.kt)("a",{parentName:"p",href:"/docs/how/add-custom-ingestion-source"},"how to use custom ingestion sources"),"\nwithout forking Datahub."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide assumes that you've already followed the metadata ingestion ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing guide")," to set up\nyour local environment."))),(0,o.kt)("h3",{id:"1-set-up-the-configuration-model"},"1. Set up the configuration model"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io/"},"pydantic")," for configuration, and all models must inherit\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigModel"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"file source")," is a good example."),(0,o.kt)("h3",{id:"2-set-up-the-reporter"},"2. Set up the reporter"),(0,o.kt)("p",null,"The reporter interface enables the source to report statistics, warnings, failures, and other information about the run.\nSome sources use the default ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceReport")," class, but others inherit and extend that class."),(0,o.kt)("h3",{id:"3-implement-the-source-itself"},"3. Implement the source itself"),(0,o.kt)("p",null,"The core for the source is the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_workunits")," method, which produces a stream of MCE objects.\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/file.py"},"file source")," is a good and simple example."),(0,o.kt)("p",null,"The MetadataChangeEventClass is defined in the metadata models which are generated\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata-ingestion/src/datahub/metadata/schema_classes.py"),". There are also\nsome ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/emitter/mce_builder.py"},"convenience methods")," for commonly used operations."),(0,o.kt)("h3",{id:"4-set-up-the-dependencies"},"4. Set up the dependencies"),(0,o.kt)("p",null,"Declare the source's pip dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," variable of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/setup.py"},"setup script"),"."),(0,o.kt)("h3",{id:"5-enable-discoverability"},"5. Enable discoverability"),(0,o.kt)("p",null,"Declare the source under the ",(0,o.kt)("inlineCode",{parentName:"p"},"entry_points")," variable of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/setup.py"},"setup script"),". This enables the source to be\nlisted when running ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub check plugins"),", and sets up the source's shortened alias for use in recipes."),(0,o.kt)("h3",{id:"6-write-tests"},"6. Write tests"),(0,o.kt)("p",null,"Tests go in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," directory. We use the ",(0,o.kt)("a",{parentName:"p",href:"https://pytest.org/"},"pytest framework"),"."),(0,o.kt)("h3",{id:"7-write-docs"},"7. Write docs"),(0,o.kt)("p",null,"Add the plugin to the table at the top of the README file, and add the source's documentation underneath the sources\nheader."),(0,o.kt)("h3",{id:"8-add-sql-alchemy-mapping-if-applicable"},"8. Add SQL Alchemy mapping (if applicable)"),(0,o.kt)("p",null,"Add the source in ",(0,o.kt)("inlineCode",{parentName:"p"},"get_platform_from_sqlalchemy_uri")," function\nin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/sql/sql_common.py"},"sql_common.py")," if the source has an sqlalchemy source"),(0,o.kt)("h3",{id:"9-add-logo"},"9. Add logo"),(0,o.kt)("p",null,"Add logo image in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-web-react/src/images"},"images folder")," and add it to be ingested\nin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-service/war/src/main/resources/boot/data_platforms.json"},"boot")))}p.isMDXComponent=!0}}]);