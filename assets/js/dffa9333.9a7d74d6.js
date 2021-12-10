"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9564],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9491:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),s=["components"],o={title:"Metadata Service Developer Guide",sidebar_label:"Metadata Service Developer Guide",slug:"/how/build-metadata-service",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/build-metadata-service.md"},l="Metadata Service Developer Guide",d={unversionedId:"docs/how/build-metadata-service",id:"docs/how/build-metadata-service",isDocsHomePage:!1,title:"Metadata Service Developer Guide",description:"This guide assumes that you are already familar with the architecture of DataHub's Metadata Serving Layer, as described here.",source:"@site/genDocs/docs/how/build-metadata-service.md",sourceDirName:"docs/how",slug:"/how/build-metadata-service",permalink:"/datahub/docs/how/build-metadata-service",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/build-metadata-service.md",tags:[],version:"current",frontMatter:{title:"Metadata Service Developer Guide",sidebar_label:"Metadata Service Developer Guide",slug:"/how/build-metadata-service",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/build-metadata-service.md"}},c=[{value:"Using DAOs to store and query Metadata",id:"using-daos-to-store-and-query-metadata",children:[{value:"Key-value DAO (Local DAO)",id:"key-value-dao-local-dao",children:[],level:3},{value:"Search DAO",id:"search-dao",children:[],level:3},{value:"Query DAO",id:"query-dao",children:[],level:3},{value:"Remote DAO",id:"remote-dao",children:[],level:3}],level:2},{value:"Customizing Search and Graph Index Updates",id:"customizing-search-and-graph-index-updates",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metadata-service-developer-guide"},"Metadata Service Developer Guide"),(0,i.kt)("p",null,"This guide assumes that you are already familar with the architecture of DataHub's Metadata Serving Layer, as described ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/architecture/metadata-serving"},"here"),". "),(0,i.kt)("p",null,"Read on to understand how to build and extend the DataHub service tier for your specific needs."),(0,i.kt)("h2",{id:"using-daos-to-store-and-query-metadata"},"Using DAOs to store and query Metadata"),(0,i.kt)("p",null,"DataHub metadata service uses the excellent ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-gma")," library to store and query metadata in a standard way.\nThere are four types of Data Access Objects (",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_access_object"},"DAO"),") that standardize the way metadata is accessed.\nThis section describes each type of DAO, its purpose, and the interface. "),(0,i.kt)("p",null,"These DAOs rely heavily on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/extra/generics/index.html"},"Java Generics")," so that the core logics can remain type-neutral.\nHowever, as there\u2019s no inheritance in ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"Pegasus"),", the generics often fallback to extending ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/blob/master/data/src/main/java/com/linkedin/data/template/RecordTemplate.java"},"RecordTemplate")," instead of the desired types (i.e. ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/entity"},"entity"),", ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/relationship"},"relationship"),", metadata ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/aspect"},"aspect")," etc). Additional runtime type checking has been added to the DAOs to avoid binding to unexpected types. We also cache the type checking result to minimize runtime overhead."),(0,i.kt)("h3",{id:"key-value-dao-local-dao"},"Key-value DAO (Local DAO)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/gms"},"GMS")," use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/BaseLocalDAO.java"},"Local DAO")," to store and retrieve metadata ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/aspect"},"aspect"),"s from the local document store.\nBelow shows the base class and its simple key-value interface.\nAs the DAO is a generic class, it needs to be bound to specific type during instantiation.\nEach entity type will need to instantiate its own version of DAO."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class BaseLocalDAO<ASPECT extends UnionTemplate> {\n\n public abstract <URN extends Urn, METADATA extends RecordTemplate> void \n  add(Class<METADATA> type, URN urn, METADATA value);\n\n public abstract <URN extends Urn, METADATA extends RecordTemplate> \n  Optional<METADATA> get(Class<METADATA> type, URN urn, int version);\n\n public abstract <URN extends Urn, METADATA extends RecordTemplate> \n  ListResult<Integer> listVersions(Class<METADATA> type, URN urn, int start, \n    int pageSize);\n\n public abstract <METADATA extends RecordTemplate> ListResult<Urn> listUrns( \n  Class<METADATA> type, int start, int pageSize);\n\n public abstract <URN extends Urn, METADATA extends RecordTemplate> \n  ListResult<METADATA> list(Class<METADATA> type, URN urn, int start, int pageSize);\n}\n")),(0,i.kt)("p",null,"Another important function of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/BaseLocalDAO.java"},"Local DAO")," is to automatically emit ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/mxe#metadata-audit-event-mae"},"MAE"),"s whenever the metadata is updated.\nThis is doable because MAE effectively use the same ",(0,i.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"Pegasus")," models so ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/blob/master/data/src/main/java/com/linkedin/data/template/RecordTemplate.java"},"RecordTemplate")," can be easily converted into the corresponding ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/avro/blob/master/lang/java/avro/src/main/java/org/apache/avro/generic/GenericRecord.java"},"GenericRecord"),"."),(0,i.kt)("h3",{id:"search-dao"},"Search DAO"),(0,i.kt)("p",null,"Search DAO is also a generic class that can be bound to a specific type of search document.\nThe DAO provides 3 APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"search")," API that takes the search input, a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/pegasus/com/linkedin/metadata/query/Filter.pdl"},"Filter"),", a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/pegasus/com/linkedin/metadata/query/SortCriterion.pdl"},"SortCriterion"),", some pagination parameters, and returns a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/SearchResult.java"},"SearchResult"),". "),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"autoComplete")," API which allows typeahead-style autocomplete based on the current input and a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/pegasus/com/linkedin/metadata/query/Filter.pdl"},"Filter"),", and returns ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/pegasus/com/linkedin/metadata/query/AutoCompleteResult.pdl"},"AutocompleteResult"),"."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"filter")," API which allows for filtering only without a search input. It takes a a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/pegasus/com/linkedin/metadata/query/Filter.pdl"},"Filter")," and a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/pegasus/com/linkedin/metadata/query/SortCriterion.pdl"},"SortCriterion")," as input and returns ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/SearchResult.java"},"SearchResult"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class BaseSearchDAO<DOCUMENT extends RecordTemplate> {\n\n  public abstract SearchResult<DOCUMENT> search(String input, Filter filter, \n        SortCriterion sortCriterion, int from, int size);\n\n  public abstract AutoCompleteResult autoComplete(String input, String field,\n        Filter filter, int limit);\n\n  public abstract SearchResult<DOCUMENT> filter(Filter filter, SortCriterion sortCriterion, \n        int from, int size);\n}\n")),(0,i.kt)("h3",{id:"query-dao"},"Query DAO"),(0,i.kt)("p",null,"Query DAO allows clients, e.g. ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/gms"},"GMS"),", ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/architecture/metadata-serving#metadata-index-applier-mae-consumer-job"},"MAE Consumer Job")," etc, to perform both graph & non-graph queries against the metadata graph.\nFor instance, a GMS can use the Query DAO to find out \u201call the dataset owned by the users who is part of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," and report to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),",\u201d which naturally translates to a graph query.\nAlternatively, a client may wish to retrieve \u201call the datasets that stored under /jobs/metrics\u201d, which doesn\u2019t involve any graph traversal."),(0,i.kt)("p",null,"Below is the base class for Query DAOs, which contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"findEntities")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findRelationships")," methods.\nBoth methods also have two versions, one involves graph traversal, and the other doesn\u2019t.\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"findMixedTypesEntities")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"findMixedTypesRelationships")," for queries that return a mixture of different types of entities or relationships.\nAs these methods return a list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/blob/master/data/src/main/java/com/linkedin/data/template/RecordTemplate.java"},"RecordTemplate"),", callers will need to manually cast them back to the specific entity type using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html#isInstance-java.lang.Object-"},"isInstance()")," or reflection."),(0,i.kt)("p",null,"Note that the generics (ENTITY, RELATIONSHIP) are purposely left untyped, as these types are native to the underlying graph DB and will most likely differ from one implementation to another."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class BaseQueryDAO<ENTITY, RELATIONSHIP> {\n\n public abstract <ENTITY extends RecordTemplate> List<ENTITY> findEntities(\n  Class<ENTITY> type, Filter filter, int offset, int count);\n\n public abstract <ENTITY extends RecordTemplate> List<ENTITY> findEntities(\n  Class<ENTITY> type, Statement function);\n\n public abstract List<RecordTemplate> findMixedTypesEntities(Statement function);\n\n public abstract <ENTITY extends RecordTemplate, RELATIONSHIP extends RecordTemplate> List<RELATIONSHIP> \n  findRelationships(Class<ENTITY> entityType, Class<RELATIONSHIP> relationshipType, Filter filter, int offset, int count);\n\n public abstract <RELATIONSHIP extends RecordTemplate> List<RELATIONSHIP> \n  findRelationships(Class<RELATIONSHIP> type, Statement function);\n\n public abstract List<RecordTemplate> findMixedTypesRelationships(\n  Statement function);\n}\n")),(0,i.kt)("h3",{id:"remote-dao"},"Remote DAO"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/BaseRemoteDAO.java"},"Remote DAO")," is nothing but a specialized readonly implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/BaseLocalDAO.java"},"Local DAO"),".\nRather than retrieving metadata from a local storage, Remote DAO will fetch the metadata from another ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/gms"},"GMS"),".\nThe mapping between ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/entity"},"entity")," type and GMS is implemented as a hard-coded map."),(0,i.kt)("p",null,"To prevent circular dependency (",(0,i.kt)("a",{parentName:"p",href:"https://rest.li"},"rest.li")," service depends on remote DAO, which in turn depends on rest.li client generated by each rest.li service),\nRemote DAO will need to construct raw rest.li requests directly, instead of using each entity\u2019s rest.li request builder."),(0,i.kt)("h2",{id:"customizing-search-and-graph-index-updates"},"Customizing Search and Graph Index Updates"),(0,i.kt)("p",null,"In addition to storing and querying metadata, a common requirement is to customize and extend the fields that are being stored in the search or the graph index. "),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/metadata-modeling/metadata-model"},"Metadata Modelling")," section, ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/entity"},"Entity"),", ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/relationship"},"Relationship"),", and ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/search-document"},"Search Document")," models do not directly encode the logic of how each field should be derived from metadata.\nInstead, this logic needs to be provided in the form of a Java class: a graph or search index builder."),(0,i.kt)("p",null,"The builders register the ",(0,i.kt)("a",{parentName:"p",href:"/datahub/docs/what/aspect"},"metadata aspect"),"s of their interest against ",(0,i.kt)("a",{parentName:"p",href:"#mae-consumer-job"},"MAE Consumer Job")," and will be invoked whenever a MAE involving the corresponding aspect is received.\nIf the MAE itself doesn\u2019t contain all the metadata needed, builders can use Remote DAO to fetch from GMS directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class BaseIndexBuilder<DOCUMENT extends RecordTemplate> {\n\n BaseIndexBuilder(@Nonnull List<Class<? extends RecordTemplate>> snapshotsInterested);\n\n @Nullable\n public abstract List<DOCUMENT> getDocumentsToUpdate(@Nonnull RecordTemplate snapshot);\n\n @Nonnull\n public abstract Class<DOCUMENT> getDocumentType();\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface GraphBuilder<SNAPSHOT extends RecordTemplate> {\n GraphUpdates build(SNAPSHOT snapshot);\n\n @Value\n class GraphUpdates {\n   List<? extends RecordTemplate> entities;\n   List<RelationshipUpdates> relationshipUpdates;\n }\n\n @Value\n class RelationshipUpdates {\n   List<? extends RecordTemplate> relationships;\n   BaseGraphWriterDAO.RemovalOption preUpdateOperation;\n }\n}\n")))}u.isMDXComponent=!0}}]);