"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4871],{4137:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},l),{},{components:a})):r.createElement(h,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},166:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(4137)),o=["components"],s={title:"What is Generalized Metadata Service (GMS)?",sidebar_label:"What is Generalized Metadata Service (GMS)?",slug:"/what/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md"},c="What is Generalized Metadata Service (GMS)?",d={unversionedId:"docs/what/gms",id:"docs/what/gms",isDocsHomePage:!1,title:"What is Generalized Metadata Service (GMS)?",description:"Metadata for entities onboarded to GMA is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a Rest.li API and must access the metadata using GMA DAOs.",source:"@site/genDocs/docs/what/gms.md",sourceDirName:"docs/what",slug:"/what/gms",permalink:"/datahub/docs/what/gms",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md",tags:[],version:"current",frontMatter:{title:"What is Generalized Metadata Service (GMS)?",sidebar_label:"What is Generalized Metadata Service (GMS)?",slug:"/what/gms",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/gms.md"}},l=[],u={toc:l};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-generalized-metadata-service-gms"},"What is Generalized Metadata Service (GMS)?"),(0,i.kt)("p",null,"Metadata for ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/entity"},"entities")," ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/metadata-modeling/metadata-model"},"onboarded")," to ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/gma"},"GMA")," is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a ",(0,i.kt)("a",{parentName:"p",href:"http://rest.li"},"Rest.li")," API and must access the metadata using ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/architecture/metadata-serving"},"GMA DAOs"),". "),(0,i.kt)("p",null,"While a GMS is completely free to define its public APIs, we do provide a list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub-gma/tree/master/restli-resources/src/main/java/com/linkedin/metadata/restli"},"resource base classes")," to leverage for common patterns."),(0,i.kt)("p",null,"GMA is designed to support a distributed fleet of GMS, each serving a subset of the ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/graph"},"GMA graph"),". However, for simplicity we include a single centralized GMS (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms"},"datahub-gms"),") that serves all entities."))}p.isMDXComponent=!0}}]);