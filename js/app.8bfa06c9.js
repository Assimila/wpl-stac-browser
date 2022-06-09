(function(){var t={8217:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.component,t._b({tag:"component",staticClass:"stac-link",attrs:{title:t.tooltip}},"component",t.attributes,!1),[t.icon?[r("img",{staticClass:"icon mr-2",attrs:{src:t.icon.href,alt:t.icon.title,title:t.icon.title}})]:t._e(),r("span",{staticClass:"title"},[t._v(t._s(t.displayTitle))]),t.isStacBrowserLink?t._e():[r("small",[r("b-icon-box-arrow-up-right",{staticClass:"ml-1 align-baseline"})],1)]],2)},i=[],s=r(629),o=r(7637),l=r(7387),n=r(8019),c=r(4998),u=r.n(c),h={name:"StacLink",components:{BIconBoxArrowUpRight:n.eK4},props:{data:{type:[Object,Array],default:null},title:{type:String,default:null},fallbackTitle:{type:[String,Function],default:null},tooltip:{type:String,default:null}},computed:{...(0,s.rn)(["privateQueryParameters"]),...(0,s.Se)(["toBrowserPath","getRequestUrl"]),icon(){if(this.stac){let t=this.stac.getIcons();if(t.length>0)return t[0]}return null},stac(){return this.data instanceof l.Z?this.data:Array.isArray(this.data)?this.data.find((t=>t instanceof l.Z)):null},link(){return this.isLink(this.data)?this.data:Array.isArray(this.data)&&this.data.find((t=>this.isLink(t)))||{}},isStacBrowserLink(){if(this.stac)return!0;if(!o.Z.isStacMediaType(this.link.type,!0))return!1;switch(this.link.rel){case"root":case"child":case"parent":case"item":case"collection":case"related":case"derived_from":case"canonical":case"latest-version":case"predecessor-version":case"successor-version":case"source":case"first":case"prev":case"previous":case"next":case"last":return!0;default:return!1}},attributes(){return this.isStacBrowserLink?{to:this.href,rel:this.rel}:{href:this.href,target:"_blank",rel:this.rel}},component(){return this.isStacBrowserLink?"router-link":"a"},href(){let t;if(t=this.stac?this.stac.getBrowserPath():this.isStacBrowserLink?this.toBrowserPath(this.link.href):this.getRequestUrl(this.link.href),o.Z.size(this.privateQueryParameters)>0){let e=new(u())(t);for(let t in this.privateQueryParameters)e.addQuery(`~${t}`,this.privateQueryParameters[t]);t=e.toString()}return t},displayTitle(){if(this.title)return this.title;let t="function"===typeof this.fallbackTitle?this.fallbackTitle():this.fallbackTitle;return l.Z.getDisplayTitle(this.data,t)}},methods:{isLink(t){return o.Z.isObject(t)&&!(t instanceof l.Z)}}},d=h,p=r(1001),f=(0,p.Z)(d,a,i,!1,null,null,null),g=f.exports},1054:function(t){t.exports={catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,useTileLayerAsFallback:!0,tileSourceTemplate:null,buildTileUrlTemplate:({href:t,asset:e})=>"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url="+encodeURIComponent(e.href.startsWith("/vsi")?e.href:t),stacProxyUrl:null,pathPrefix:"/",historyMode:"history",cardViewMode:"cards",showThumbnailsAsAssets:!1,stacLint:!0,geoTiffResolution:128,redirectLegacyUrls:!1,itemsPerPage:12,crossOriginMedia:null,requestHeaders:{},requestQueryParameters:{}}},1377:function(t,e,r){"use strict";var a=r(144),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"stac-browser"}},[r("b-sidebar",{attrs:{id:"sidebar",title:"Browse",shadow:"",lazy:""}},[r("Sidebar")],1),r("header",[r("div",{staticClass:"logo"},[t._v(t._s(t.catalogTitle))]),r("StacHeader")],1),r("main",[t.globalError?r("ErrorAlert",t._b({staticClass:"global-error",on:{close:t.hideError}},"ErrorAlert",t.globalError,!1)):t._e(),r("router-view")],1),r("footer",[r("small",{staticClass:"poweredby text-muted"},[t._v(" Powered by "),r("a",{attrs:{href:"https://github.com/radiantearth/stac-browser"}},[t._v("STAC Browser")]),t._v(" v"+t._s(t.browserVersion)+" ")])])],1)},s=[],o=(r(6699),r(8345)),l=r(629),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[!t.allowExternalAccess&&t.isExternal?r("b-alert",[r("p",[t._v("Accessing external catalogs is not allowed!")])]):t._e(),t.error?r("ErrorAlert",{attrs:{dismissible:!1,url:t.url,description:t.errorDescription,id:t.errorId}}):t.loading?r("div",{staticClass:"loading text-center"},[r("b-spinner",{attrs:{label:"Loading..."}})],1):r(t.component,{tag:"component"})],1)},c=[],u=(r(1703),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-alert",{attrs:{variant:"danger",show:"",dismissible:t.dismissible},on:{dismissed:function(e){return t.$emit("close")}}},[r("p",{staticClass:"message"},[t._v(t._s(t.message))]),t.error&&t.error.message?r("dl",{staticClass:"error"},[r("dt",[t._v("Caused by:")]),r("dd",[t._v(t._s(t.error.message))])]):t._e(),t.description?r("dl",{staticClass:"description"},[r("dt",[t._v("Reasoning:")]),r("dd",[t._v(t._s(t.description))])]):t._e(),t.id?r("dl",{staticClass:"id"},[r("dt",[t._v("Error code:")]),r("dd",[r("code",[t._v(t._s(t.id))])])]):t._e(),t.url?r("dl",{staticClass:"url"},[r("dt",[t._v("Requested URL:")]),r("dd",[r("code",[t._v(t._s(t.url))])])]):t._e()])}),h=[],d={name:"ErrorAlert",props:{message:{type:String,default:"Sorry, the requested page could not be loaded."},description:{type:String,default:""},error:{type:[Object,Error],required:!0},id:{type:[String,Number],default:null},url:{type:String,default:""},dismissible:{type:Boolean,default:!0}}},p=d,f=r(1001),g=(0,f.Z)(p,u,h,!1,null,"62db6052",null),m=g.exports,b=r(7637),y={name:"Browse",components:{ErrorAlert:m,Item:()=>Promise.all([r.e(808),r.e(447),r.e(178)]).then(r.bind(r,3681)),Catalog:()=>Promise.all([r.e(808),r.e(447),r.e(701)]).then(r.bind(r,8408))},props:{path:{type:String,default:""}},computed:{...(0,l.rn)(["allowExternalAccess","url","redirectUrl","data"]),...(0,l.Se)(["isItem","error","loading"]),errorId(){if(this.error instanceof Error&&this.error.isAxiosError&&b.Z.isObject(this.error.response)){let t=this.error.response;return b.Z.isObject(t.data)&&t.data.code?t.data.code:t.status}return null},errorDescription(){let t=" Please contact the service operator to resolve this issue.";if(this.error instanceof Error&&this.error.isAxiosError&&b.Z.isObject(this.error.response)){let e=this.error.response;if(b.Z.isObject(e.data)){if("string"===typeof e.data.description)return e.data.description;if("string"===typeof e.data.detail)return e.data.detail}if(401===e.status)return"The request lacks credentials, e.g. an API token. Please provide your credentials and try again.";if(403===e.status)return"The credentials specified for this request are invalid, e.g. an expired or invalid API token. Please provide other credentials and try again.";if(404===e.status)return"The requested resource does not exist."+t;if(e.status>500)return"The server encountered an issue."+t;if(e.status>400)return"The request is invalid. This might be due to invalid parameters, e.g. in a search request, or could be a bug in STAC Browser."}return"This issue may occur when servers don't allow external access via web browsers (e.g., when CORS headers are not present)."+t},component(){return this.isItem?"Item":"Catalog"},isExternal(){return b.Z.urlType(this.path,"absolute")}},watch:{path:{immediate:!0,handler(t,e){t!==e&&this.$store.dispatch("load",{url:t||"/",fromBrowser:!0,show:!0,loadApi:!0})}},redirectUrl:{immediate:!0,handler(t){t&&this.$router.replace({path:t})}}}},v=y,w=(0,f.Z)(v,n,c,!1,null,null,null),A=w.exports;function k(t){let e=[];return t.allowExternalAccess&&e.push({path:"/external/(.*)",name:"browseExternal",component:A,props:t=>({path:`/external/${t.params.pathMatch}`})}),t.catalogUrl?e.push({path:"/search",name:"search",component:()=>r.e(85).then(r.bind(r,7085))}):(e.push({path:"/",name:"select",component:()=>Promise.all([r.e(808),r.e(150),r.e(602)]).then(r.bind(r,6900))}),e.push({path:"/search/external/(.*)",name:"search",component:()=>r.e(85).then(r.bind(r,7085)),props:t=>({loadRoot:`/external/${t.params.pathMatch}`})})),e.push({path:"/(.*)",name:"browse",component:A,props:t=>({path:t.params.pathMatch})}),e}var Z=k,C=r(9669),L=r.n(C),x=r(7387),_=r(7191),S=r.n(_);class T{constructor(t=!1,e=!1){this.show=Boolean(t),this.loadApi=Boolean(e)}}async function P(t,e){let r;if(b.Z.isObject(e)){let a="string"===typeof e.method?e.method.toLowerCase():"get";r={method:a,url:t.getters.getRequestUrl(e.href),headers:Object.assign({},t.state.requestHeaders,e.headers),data:e.body}}else r="string"===typeof e?{method:"get",url:t.getters.getRequestUrl(e),headers:t.state.requestHeaders}:e;return await L()(r)}var U=r(4998),j=r.n(U);function O(t){const e=()=>({url:"",title:t.catalogTitle,data:null,valid:null,parents:null,globalError:null,stateQueryParameters:{},apiItems:[],apiItemsLink:null,apiItemsFilter:{},apiItemsPagination:{}}),r=()=>({database:{},queue:[],redirectUrl:null,privateQueryParameters:{},apiCollections:[],nextCollectionsLink:null});return new l.ZP.Store({strict:!0,state:Object.assign({},t,e(),r(),{allowSelectCatalog:!t.catalogUrl,stacIndex:[],supportedRelTypes:["child","collection","data","first","icon","item","items","last","license","next","prev","parent","root","search","self"]}),getters:{loading:t=>!t.url||!t.data||t.database[t.url]instanceof T,error:t=>t.database[t.url]instanceof Error?t.database[t.url]:null,getStac:t=>(e,r=!1)=>{if(!e)return null;let a=b.Z.toAbsolute(e,t.url),i=t.database[a];return i instanceof x.Z||r&&i instanceof Error?i:null},getStacFromLink:(t,e)=>(r,a=null)=>{var i;let s=(null===(i=t.data)||void 0===i?void 0:i.getLinkWithRel(r))||{href:a};return e.getStac(s.href)},displayCatalogTitle:(t,e)=>x.Z.getDisplayTitle(e.root,t.catalogTitle),isCollection:t=>{var e;return(null===(e=t.data)||void 0===e?void 0:e.isCollection())||!1},isCatalog:t=>{var e;return(null===(e=t.data)||void 0===e?void 0:e.isCatalog())||!1},isCatalogLike:t=>{var e;return(null===(e=t.data)||void 0===e?void 0:e.isCatalogLike())||!1},isItem:t=>{var e;return(null===(e=t.data)||void 0===e?void 0:e.isItem())||!1},stacVersion:t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.stac_version},root:(t,e)=>{let r;return t.catalogUrl?r=t.catalogUrl:t.url&&t.data instanceof x.Z&&t.data.getLinksWithRels(["conformance","service-desc","service-doc","data","search"]).length>0&&(r=t.url),e.getStacFromLink("root",r)},parent:(t,e)=>e.getStacFromLink("parent"),collection:(t,e)=>e.getStacFromLink("collection"),getLink:(t,e)=>r=>{var a;let i=null===(a=t.data)||void 0===a?void 0:a.getLinkWithRel(r),s=e[r],o=x.Z.getDisplayTitle([s,i]);if(i)i=Object.assign({},i),i.title=o;else if(s instanceof x.Z)return{href:s.getAbsoluteUrl(),title:o,rel:r};return i},parentLink:(t,e)=>e.getLink("parent"),collectionLink:(t,e)=>e.getLink("collection"),searchLink:(t,e)=>{let r=[];return e.root?r=e.root.getLinksWithRels(["search"]):t.data instanceof x.Z&&(r=t.data.getLinksWithRels(["search"])),r.find((t=>b.Z.isStacMediaType(t.type,!0)&&"POST"!==t.method))},supportsSearch:(t,e)=>Boolean(e.searchLink),supportsConformance:(t,e)=>r=>{let a=[];e.root&&Array.isArray(e.root.conformsTo)?a=e.root.conformsTo:t.data instanceof x.Z&&Array.isArray(t.data.conformsTo)&&(a=t.data.conformsTo);let i=new RegExp("^"+r.replace("*","[^/]+").replace(/\/?#/,"/?#")+"$");return!!a.find((t=>t.match(i)))},tileRendererType:t=>!t.tileSourceTemplate&&!t.buildTileUrlTemplate||t.useTileLayerAsFallback?"client":"server",items:t=>t.apiItems.length>0?t.apiItems:t.data?t.data.getLinksWithRels(["item"]).filter((t=>b.Z.isStacMediaType(t.type,!0))):[],catalogs:t=>{let e=[];return t.data.getApiCollectionsLink()&&t.apiCollections.length>0&&(e=e.concat(t.apiCollections)),t.data&&(e=x.Z.addMissingChildren(e,t.data)),e},hasMoreCollections:t=>Boolean(t.nextCollectionsLink),hasAssets:(t,e)=>Object.values(e.assets).find((t=>b.Z.isObject(t)&&"string"===typeof t.href)),assets:(t,e)=>{var r;if(b.Z.isObject(null===(r=t.data)||void 0===r?void 0:r.assets)){if(t.showThumbnailsAsAssets)return t.data.assets;{let r={},a=e.thumbnails;for(let e in t.data.assets){let i=t.data.assets[e];a.includes(i)||(r[e]=i)}return r}}return{}},thumbnails:t=>t.data?t.data.getThumbnails(!0):[],additionalLinks:t=>t.data?t.data.getLinksWithOtherRels(t.supportedRelTypes).filter((t=>"preview"!==t.rel||!b.Z.canBrowserDisplayImage(t))):[],toBrowserPath:(t,e)=>r=>{b.Z.hasText(r)||(r="/");let a,i=b.Z.toAbsolute(e.unproxyUrl(r),t.url,!1);if(!t.allowSelectCatalog&&t.catalogUrl&&(a=i.relativeTo(t.catalogUrl)),"undefined"===typeof a||e.isExternalUrl(i)){if(!t.allowExternalAccess)return i.toString();let e=["/external"],r=i.protocol();"https"!==r&&e.push(r+":"),e.push(i.authority()),e.push(i.path().replace(/^\//,""));let a=e.join("/"),s=i.query();return s&&(a+=`?${s}`),a}return"/"+a},fromBrowserPath:(t,e)=>r=>{if(b.Z.hasText(r)&&"/"!==r)if(r.startsWith("/external/")){let t,e=r.replace(/^\/external\//,"").split("/");t=e[0].endsWith(":")?e.shift():"https:",r=`${t}//${e.join("/")}`}else!t.allowSelectCatalog&&t.catalogUrl&&(r=b.Z.toAbsolute(r,t.catalogUrl,!1));else r=t.catalogUrl;return e.getRequestUrl(r)},unproxyUrl:t=>e=>(e instanceof j()&&(e=e.toString()),"string"===typeof e&&Array.isArray(t.stacProxyUrl)?e.replace(t.stacProxyUrl[1],t.stacProxyUrl[0]):e),proxyUrl:t=>e=>(e instanceof j()&&(e=e.toString()),"string"===typeof e&&Array.isArray(t.stacProxyUrl)?e.replace(t.stacProxyUrl[0],t.stacProxyUrl[1]):e),isExternalUrl:t=>e=>!!t.catalogUrl&&e.relativeTo(t.catalogUrl)===e,getRequestUrl:(t,e)=>(r,a=null,i=!0)=>{let s=b.Z.toAbsolute(e.proxyUrl(r),a||t.url,!1);return e.isExternalUrl(s)||(b.Z.size(t.privateQueryParameters)>0&&s.addQuery(t.privateQueryParameters),i&&b.Z.size(t.requestQueryParameters)>0&&s.addQuery(t.requestQueryParameters)),s.toString()}},mutations:{config(t,e){for(let r in e){let a=e[r];switch(r){case"catalogTitle":t.catalogTitle=a;break;case"catalogUrl":if("string"===typeof a){let e=new(j())(a);t.requestQueryParameters=Object.assign({},t.requestQueryParameters,e.query(!0)),e.query(""),t.catalogUrl=e.toString()}break;case"stacProxyUrl":"string"===typeof a&&a.includes(";")?t[r]=a.split(";"):t[r]=a;break;default:t[r]=a}}},queryParameters(t,e){for(let r in e)t[`${r}QueryParameters`]=e[r]},stacIndex(t,e){t.stacIndex=Object.freeze(e)},tileSourceTemplate(t,e){t.tileSourceTemplate=e},updateLoading(t,{url:e,show:r,loadApi:i}){let s=t.database[e];a.Z.set(s,"show",r||s.show),a.Z.set(s,"loadApi",i||s.loadApi)},loading(t,{url:e,loading:r}){a.Z.set(t.database,e,r),r.show&&(t.url=e)},loaded(t,{url:e,data:r}){a.Z.set(t.database,e,Object.freeze(r))},resetCatalog(t){Object.assign(t,r())},resetPage(t){Object.assign(t,e())},showPage(t,{url:e,title:r,stac:a}){a||(a=t.database[e]||null),t.url=e||null,t.data=a instanceof x.Z?a:null,t.valid=null,t.title=r||x.Z.getDisplayTitle(a,t.catalogTitle)},errored(t,{url:e,error:r}){r instanceof Error||(r=new Error(r)),a.Z.set(t.database,e,r)},valid(t,e){t.valid=e},queue(t,e){t.queue.push(e)},unqueue(t,e){let r=t.queue.indexOf(e);-1!==r&&t.queue.splice(r,1)},removeFromQueue(t,e){t.queue.splice(0,e)},setApiItemsLink(t,e){t.apiItemsLink=e},setApiItems(t,{data:e,stac:r,show:a}){if(!b.Z.isObject(e)||!Array.isArray(e.features))return;let i=e.features.map((t=>Object.freeze(t)));a&&(t.apiItems=i);let s=b.Z.getLinksWithRels(e.links,["first","prev","previous","next","last"]),o={};for(let l of s){let t="previous"===l.rel?"prev":l.rel;o[t]=l}a&&(t.apiItemsPagination=o),r instanceof x.Z&&(r._apiChildren.prev=o.prev,r._apiChildren.next=o.next,r._apiChildren.list=i)},addApiCollections(t,{data:e,stac:r,show:a}){if(!b.Z.isObject(e)||!Array.isArray(e.collections))return;let i=e.collections.map((t=>Object.freeze(t))),s=b.Z.getLinkWithRel(e.links,"next");a&&(t.nextCollectionsLink=s,t.apiCollections=t.apiCollections.concat(i)),r instanceof x.Z&&(r._apiChildren.next=s,r._apiChildren.list=i)},setApiItemsFilter(t,e){t.apiItemsFilter=e},resetApiItems(t){t.apiItems=[],t.apiItemsPagination={}},redirectLegacyUrl(t,e){if(!e)return;let r=e.split("/").filter((t=>t.length>0&&"item"!==t&&"collection"!==t));if(r.length>0&&r.every((t=>t.match(/^[123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ]+$/)))){let e=S().decode(r[r.length-1]).toString();e&&(t.redirectUrl="/"+e)}},parents(t,e){t.parents=e},showGlobalError(t,e){console.error(e),t.globalError=e}},actions:{async loadBackground(t,e){let r=t.state.queue.slice(0,e);if(r.length>0){let a=[];for(let e of r)a.push(t.dispatch("load",{url:e}));return t.commit("removeFromQueue",e),await Promise.all(a)}},async loadStacIndex(t){try{let e=await L().get("https://stacindex.org/api/catalogs");Array.isArray(e.data)&&t.commit("stacIndex",e.data)}catch(e){console.error(e)}},async loadParents(t){if(!(t.state.data instanceof x.Z))return void t.commit("parents",[]);let e=[],r=t.state.data;while(r){let a=r.getLinkWithRel("parent")||r.getLinkWithRel("root");if(!a)break;let i=b.Z.toAbsolute(a.href,r.getAbsoluteUrl());await t.dispatch("load",{url:i,loadApi:!0});let s=t.getters.getStac(i,!0);if(s instanceof Error)return void t.commit("parents",s);if(s===r)break;e.push(s),r=s}t.commit("parents",e)},async load(t,{url:e,fromBrowser:r,show:a,loadApi:i}){let s;r?(s=e.startsWith("/")?e:"/"+e,e=t.getters.fromBrowserPath(e)):(e=b.Z.toAbsolute(e,t.state.url),s=t.getters.toBrowserPath(e)),a&&t.commit("resetPage");let o=new T(a,i),l=t.state.database[e];if(l instanceof T)t.commit("updateLoading",{url:e,show:a,loadApi:i});else{if(!l){t.commit("loading",{url:e,loading:o});try{let r=await P(t,e);if(!b.Z.isObject(r.data))throw new Error("The response is not a valid STAC JSON");if(l=new x.Z(r.data,e,s),t.commit("loaded",{url:e,data:l}),!t.getters.root){let r=l.getLinkWithRel("root");r&&t.commit("config",{catalogUrl:b.Z.toAbsolute(r.href,e)})}}catch(n){console.error(n),t.commit("errored",{url:e,error:n}),t.state.redirectLegacyUrls&&r&&a&&t.commit("redirectLegacyUrl",s)}}if(o.loadApi&&l instanceof x.Z){if(l.getApiCollectionsLink())try{await t.dispatch("loadNextApiCollections",{stac:l,show:o.show})}catch(n){t.commit("showGlobalError",{message:"Sorry, the API Collections could not be loaded.",error:n})}if(l.getApiItemsLink())try{await t.dispatch("loadApiItems",{stac:l,show:o.show})}catch(n){t.commit("showGlobalError",{message:"Sorry, the API Items could not be loaded.",error:n})}}o.show&&t.commit("showPage",{url:e})}},async loadApiItems(t,{link:e,stac:r,show:a,filters:i}){let s=t.state.url;r instanceof x.Z&&(e=r.getApiItemsLink(),s=r.getAbsoluteUrl()),b.Z.isObject(i)||(i={}),"number"!==typeof i.limit&&(i.limit=t.state.itemsPerPage),t.commit("setApiItemsFilter",i),e=b.Z.addFiltersToLink(e,i);let o=await P(t,e);if(b.Z.isObject(o.data)&&Array.isArray(o.data.features))return o.data.features=o.data.features.map((e=>{let r,a=b.Z.getLinkWithRel(e.links,"self");return r=null!==a&&void 0!==a&&a.href?b.Z.toAbsolute(a.href,s):b.Z.toAbsolute(`./collections/${t.state.data.id}/items/${e.id}`,t.state.catalogUrl||s),new x.Z(e,r,t.getters.toBrowserPath(r))})),a&&t.commit("setApiItemsLink",e),t.commit("setApiItems",{data:o.data,stac:r,show:a}),o;throw new Error("The API response is not a valid list of STAC Items")},async loadNextApiCollections(t,{stac:e,show:r}){let a;if(e){if(t.state.apiCollections.length>0)return;a=e.getLinkWithRel("data")}else e=t.state.data,a=t.state.nextCollectionsLink;if(!a)return;let i=await P(t,a);if(!b.Z.isObject(i.data)||!Array.isArray(i.data.collections))throw new Error("The API response is not a valid list of STAC Collections");i.data.collections=i.data.collections.map((r=>{let a,i=b.Z.getLinkWithRel(r.links,"self");return a=null!==i&&void 0!==i&&i.href?b.Z.toAbsolute(i.href,t.state.url||e.getAbsoluteUrl()):b.Z.toAbsolute(`collections/${r.id}`,t.state.catalogUrl||e.getAbsoluteUrl()),new x.Z(r,a,t.getters.toBrowserPath(a))})),t.commit("addApiCollections",{data:i.data,stac:e,show:r})},async validate(t,e){if("boolean"!==typeof t.state.valid)try{var r,a;let i=new(j())("https://api.staclint.com/url");i.addSearch("stac_url",e);let s=await L().get(i.toString());t.commit("valid",Boolean(null===(r=s.data)||void 0===r||null===(a=r.body)||void 0===a?void 0:a.valid_stac))}catch(i){t.commit("valid",i)}}}})}a.Z.use(l.ZP);var I=O,E=r(4063),B=r(3800),R=r(1869),$=r(2026),q=r(2926),W=r(8824),F=r(1777),M=r(1899),Q=r(3661),z=r(3028),D=r(8290),H=(r(44),r(7906)),N=r.n(H),G=r(5834),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar"},[t.parents?t.root?r("Tree",{attrs:{item:t.root,path:t.parents}}):t._e():r("div",{staticClass:"loading text-center"},[r("b-spinner",{attrs:{label:"Loading..."}})],1),t.allowSelectCatalog?r("b-button",{staticClass:"mt-4",attrs:{variant:"light"}},[r("router-link",{attrs:{to:"/"}},[r("b-icon-arrow-left-right"),t._v(" Switch Catalog")],1)],1):t._e()],1)},J=[],K=r(8019),X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{directives:[{name:"b-visible",rawName:"v-b-visible",value:t.load,expression:"load"}],staticClass:"tree"},[r("li",[t.pagination?r("b-button",{attrs:{size:"sm",variant:"light",disabled:!0}},[r("b-icon-three-dots")],1):t.mayHaveChildren?[r("b-button",{attrs:{size:"sm",variant:"light"},on:{click:t.toggle}},[t.expanded?r("b-icon-folder-minus"):r("b-icon-folder-plus")],1)]:r("b-button",{attrs:{size:"sm",variant:"light",disabled:!0}},[r("b-icon-file-earmark-richtext")],1),r("b-button",{class:{path:t.onPath||t.active},attrs:{size:"sm",variant:"light",disabled:t.active||!t.to,to:t.to}},[t._v(" "+t._s(t.title)+" ")]),t.expanded&&t.mayHaveChildren?[t.loading?r("ul",{staticClass:"tree"},[r("li",[r("b-spinner",{attrs:{label:"Loading...",small:""}})],1)]):0===t.childs.length?r("ul",{staticClass:"tree"},[r("li",[r("b-button",{attrs:{size:"sm",variant:"light",disabled:""}},[t._v(" No children available. ")])],1)]):t._l(t.childs,(function(e,a){return r("Tree",{key:a,attrs:{item:e,parent:t.stac,path:t.path}})}))]:t._e()],2)])},Y=[],tt={name:"Tree",components:{BIconFileEarmarkRichtext:K.sox,BIconFolderMinus:K.GUc,BIconFolderPlus:K.RLE,BIconThreeDots:K.H7n},props:{item:{type:Object,required:!0},parent:{type:Object,default:null},path:{type:Array,default:()=>[]}},data(){return{expanded:!1,loading:!1}},computed:{...(0,l.rn)(["data"]),...(0,l.Se)(["getStac"]),stac(){if(this.pagination)return null;if(this.item instanceof x.Z){let t=this.getStac(this.item.getAbsoluteUrl());return!this.loading&&t?t:this.item}return this.getStac(this.link)},link(){return this.pagination?this.parent?this.parent.getAbsoluteUrl():null:b.Z.isObject(this.item)&&"string"===typeof this.item.href?this.parent?b.Z.toAbsolute(this.item.href,this.parent.getAbsoluteUrl()):this.item.href:null},mayHaveChildren(){return this.item instanceof x.Z?this.item.isCatalogLike():!!this.link&&"item"!==this.item.rel},to(){return this.pagination?this.parent&&this.parent.getAbsoluteUrl()!==this.data.getAbsoluteUrl()?this.parent.getBrowserPath():null:this.stac instanceof x.Z?this.stac.getBrowserPath():null},title(){return this.pagination?"more pages available for Collection":x.Z.getDisplayTitle([this.item,this.stac])},childs(){return this.stac?this.stac.getChildren():[]},onPath(){return!(!Array.isArray(this.path)||!this.stac)&&this.path.includes(this.stac)},active(){return this.stac===this.data},pagination(){return["next","prev","previous"].includes(this.item.rel)}},watch:{onPath:{immediate:!0,handler(){this.onPath&&(this.expanded=!0)}}},methods:{load(t){this.stac||!this.link||this.pagination||this.$store.commit(t?"queue":"unqueue",this.link)},async toggle(){if(this.expanded=!this.expanded,this.expanded&&!this.pagination){this.loading=!0;let t=this.item instanceof x.Z?this.item.getAbsoluteUrl():this.item.href;await this.$store.dispatch("load",{url:t,loadApi:!0}),this.loading=!1}}}},et=tt,rt=(0,f.Z)(et,X,Y,!1,null,"09702ad7",null),at=rt.exports,it={name:"Sidebar",components:{BIconArrowLeftRight:K.jwx,Tree:at},computed:{...(0,l.rn)(["allowSelectCatalog","parents"]),...(0,l.Se)(["root"])},async created(){await this.$store.dispatch("loadParents")}},st=it,ot=(0,f.Z)(st,V,J,!1,null,"90c532e2",null),lt=ot.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{md:"12"}},[r("Share",{staticClass:"float-right",attrs:{title:t.title,stacUrl:t.url,stacVersion:t.stacVersion}}),r("h1",[t.icon?[r("img",{staticClass:"icon mr-2",attrs:{src:t.icon.href,alt:t.icon.title,title:t.icon.title}})]:t._e(),r("span",{staticClass:"title"},[t._v(t._s(t.title))])],2),t.url||t.isSearchPage()?r("p",{staticClass:"lead"},[t.containerLink?r("span",{staticClass:"in mr-3"},[t._v("in "),r("StacLink",{attrs:{data:t.containerLink}})],1):t._e(),r("b-button-group",[t.parentLink?r("b-button",{attrs:{to:t.toBrowserPath(t.parentLink.href),title:"Go to parent > "+t.parentLink.title,variant:"outline-primary",size:"sm"}},[r("b-icon-arrow-90deg-up"),t._v(" "),r("span",{staticClass:"button-label prio"},[t._v("Go to Parent")])],1):t._e(),t.collectionLink?r("b-button",{attrs:{to:t.toBrowserPath(t.collectionLink.href),title:"Go to collection > "+t.collectionLink.title,variant:"outline-primary",size:"sm"}},[r("b-icon-folder-symlink"),t._v(" "),r("span",{staticClass:"button-label prio"},[t._v("Go to Collection")])],1):t._e(),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],attrs:{variant:"outline-primary",size:"sm",title:"Browse"}},[r("b-icon-book"),t._v(" "),r("span",{staticClass:"button-label prio"},[t._v("Browse")])],1),t.supportsSearch&&!t.isSearchPage()?r("b-button",{attrs:{variant:"outline-primary",size:"sm",to:t.searchBrowserLink,title:"Search"}},[r("b-icon-search"),t._v(" "),r("span",{staticClass:"button-label prio"},[t._v("Search")])],1):t._e()],1)],1):t._e()],1)],1)},ct=[],ut=r(8217),ht={name:"StacHeader",components:{BIconArrow90degUp:K.sDn,BIconBook:K.$ek,BIconFolderSymlink:K.y5,BIconSearch:K.Lln,StacLink:ut["default"],Share:()=>Promise.all([r.e(150),r.e(652)]).then(r.bind(r,6652))},computed:{...(0,l.rn)(["allowSelectCatalog","catalogUrl","data","url","title"]),...(0,l.Se)(["root","parentLink","collectionLink","stacVersion","supportsSearch","toBrowserPath"]),icon(){if(this.data instanceof x.Z){let t=this.data.getIcons();if(t.length>0)return t[0]}return null},searchBrowserLink(){return this.allowSelectCatalog?this.supportsSearch&&this.root?`/search${this.root.getBrowserPath()}`:this.supportsSearch&&this.url?`/search${this.toBrowserPath(this.url)}`:null:"/search"},containerLink(){return this.catalogUrl&&this.url===this.catalogUrl?null:this.root?b.Z.equalUrl(this.root.getAbsoluteUrl(),this.url)?null:{href:this.root.getAbsoluteUrl(),rel:"root",title:x.Z.getDisplayTitle(this.root)}:this.collectionLink||this.parentLink}},methods:{isSearchPage(){return"search"===this.$router.currentRoute.name}}},dt=ht,pt=(0,f.Z)(dt,nt,ct,!1,null,"50c497dc",null),ft=pt.exports;const gt=r(1054);a.Z.use(N()),a.Z.use(E.F),a.Z.use(B.d),a.Z.use(R.SY),a.Z.use($.T),a.Z.use(q.xL),a.Z.use(W.A6),a.Z.use(F.J),a.Z.use(M.s),a.Z.use(Q.lF),a.Z.directive("b-toggle",z.M),a.Z.directive("b-visible",D.z);for(let Ct in G.Formatters)Ct.startsWith("format")&&a.Z.filter(Ct.replace(/^format/,""),G.Formatters[Ct]);const mt=Object.assign(gt,{pathPrefix:"/stac-browser",historyMode:"hash"});a.Z.use(o.Z);const bt=new o.Z({mode:mt.historyMode,base:mt.pathPrefix,routes:Z(mt)});let yt={},vt={};for(let Ct in mt)yt[Ct]={default:["object","function"].includes(typeof mt[Ct])?()=>mt[Ct]:mt[Ct]},vt[Ct]={immediate:!0,handler:function(t){this.$store.commit("config",{[Ct]:t})}};var wt={name:"StacBrowser",router:bt,store:I(mt),components:{ErrorAlert:m,Sidebar:lt,StacHeader:ft},props:{...yt},data(){return{error:null}},computed:{...(0,l.rn)(["title","globalError"]),...(0,l.rn)({catalogUrlFromVueX:"catalogUrl"}),...(0,l.Se)(["displayCatalogTitle"]),browserVersion(){return"3.0.0-alpha.9"}},watch:{...vt,title(t){document.title=t},catalogUrlFromVueX(t){t&&this.$store.dispatch("load",{url:t,loadApi:!0})}},created(){this.$router.onReady((()=>this.parseQuery(this.$route))),this.$router.afterEach((t=>this.parseQuery(t))),this.catalogUrl&&this.$store.dispatch("load",{url:this.catalogUrl,loadApi:!0})},mounted(){this.$root.$on("error",this.showError),setInterval((()=>this.$store.dispatch("loadBackground",3)),200)},methods:{parseQuery(t){let e={};if("history"===this.historyMode){let r=new(j())(t.hash.replace(/^#/,""));e=r.query(!0)}let r=Object.assign({},t.query,e),a={};for(let i in r)i.startsWith("~")?(a.private=b.Z.isObject(a.private)?a.private:{},a.private[i.substr(1)]=r[i],delete r[i]):i.startsWith(".")?(a.state=b.Z.isObject(a.state)?a.state:{},a.state[i.substr(1)]=r[i]):(a.catalog=b.Z.isObject(a.catalog)?a.catalog:{},a.catalog[i]=r[i]);b.Z.size(a)>0&&this.$store.commit("queryParameters",a),b.Z.size(a.private)>0&&this.$router.replace({...t,query:r})},showError(t,e){this.$store.commit("showGlobalError",{error:t,message:e})},hideError(){this.$store.commit("showGlobalError",null)}}},At=wt,kt=(0,f.Z)(At,i,s,!1,null,null,null),Zt=kt.exports;a.Z.config.productionTip=!1,new a.Z({render:t=>t(Zt)}).$mount("#stac-browser")},7387:function(t,e,r){"use strict";r(6699);var a=r(7637),i=r(5019),s=r.n(i);let o=0;class l{constructor(t,e,r,a=!0){this._id=o++,this._url=e,this._path=r,this._apiChildren={list:[],prev:!1,next:!1},a&&("FeatureCollection"===t.type?t.features=t.features.map((t=>s().item(t,!1))):t=s().stac(t,!1));for(let i in t)"undefined"===typeof this[i]&&(this[i]=t[i])}isItem(){return"Feature"===this.type}isCatalog(){return"Catalog"===this.type}isCatalogLike(){return this.isCatalog()||this.isCollection()}isCollection(){return"Collection"===this.type}isItemCollection(){return"FeatureCollection"===this.type}hasApiData(){return this._apiChildren.list.length>0}getChildren(){if(!this.isCatalogLike())return[];let t=[];return this._apiChildren.prev&&t.push(this._apiChildren.prev),this._apiChildren.list.length>0&&(t=this._apiChildren.list),t=l.addMissingChildren(t,this).concat(this.getLinksWithRels(["item"])),this._apiChildren.next&&t.push(this._apiChildren.next),t}static addMissingChildren(t,e){let r=e.getLinksWithRels(["child"]).filter((r=>{if(!a.Z.isStacMediaType(r.type,!0))return!1;let i=a.Z.toAbsolute(r.href,e.getAbsoluteUrl());return!t.find((t=>t.getAbsoluteUrl()===i))}));return t.concat(r)}getApiCollectionsLink(){return this.getLinkWithRel("data")}getApiItemsLink(){return this.getLinkWithRel("items")}getMetadata(t){return this.isItem()?this.properties[t]:this.isCatalogLike()?this[t]:null}getBrowserPath(){return this._path}getAbsoluteUrl(){return this._url}getLinkWithRel(t){return a.Z.getLinkWithRel(this.links,t)}getLinksWithRels(t){return a.Z.getLinksWithRels(this.links,t)}getLinksWithOtherRels(t){return a.Z.getLinksWithOtherRels(this.links,t)}getAssetsWithRoles(t){let e=[];if(a.Z.isObject(this.assets))for(let r in this.assets){let i=this.assets[r];a.Z.isObject(i)&&"string"===typeof i.href&&Array.isArray(i.roles)&&i.roles.find((e=>t.includes(e)))&&e.push(i)}return e}static getDisplayTitle(t,e=null){Array.isArray(t)||(t=[t]);let r=t.find((t=>t instanceof l)),i=t.find((t=>a.Z.isObject(t)&&!(t instanceof l)));return r&&a.Z.hasText(r.getTitle())?r.getTitle():i&&a.Z.hasText(i.title)?i.title:r&&a.Z.hasText(r.id)?r.id:a.Z.hasText(e)?e:r?a.Z.titleForHref(r.getAbsoluteUrl(),!0):i&&a.Z.hasText(i.href)?a.Z.titleForHref(i.href,!0):"Untitled"}getTitle(){return this.isItem()?this.properties.title:this.title}_linkToAbsolute(t){return Object.assign({},t,{href:a.Z.toAbsolute(t.href,this.getAbsoluteUrl())})}getIcons(){return this.getLinksWithRels(["icon"]).filter((t=>a.Z.canBrowserDisplayImage(t))).map((t=>this._linkToAbsolute(t)))}getThumbnails(t=!1,e=null){let r=this.getAssetsWithRoles(["thumbnail","overview"]);return e&&r.length>1&&r.sort((t=>t.roles.includes(e)?-1:1)),0===r.length&&(r=this.getLinksWithRels(["preview"])),0===r.length&&a.Z.isObject(this.assets)&&a.Z.isObject(this.assets.thumbnail)&&(r=[this.assets.thumbnail]),t&&(r=r.filter((t=>a.Z.canBrowserDisplayImage(t)))),r.map((t=>this._linkToAbsolute(t)))}equals(t){return!!a.Z.isObject(t)&&(this===t||this.id===t.id&&this.type==t.type)}}e["Z"]=l},7637:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});r(6699);var a=r(4998),i=r.n(a);const s=["catalog","collection","item"],o=["application/json","application/geo+json","text/json"],l=["gif","jpg","jpeg","png","webp"],n=new RegExp(`^image/(${l.join("|")})`,"i"),c=["http","https"];class u{static isObject(t){return"object"===typeof t&&t===Object(t)&&!Array.isArray(t)}static size(t){return"object"===typeof t&&null!==t?Array.isArray(t)?t.length:Object.keys(t).length:0}static isStacMediaType(t,e=!1){return!(!e||t)||"string"===typeof t&&o.includes(t.toLowerCase())}static hasText(t){return"string"===typeof t&&t.length>0}static urlType(t,e){let r=i()(t);return r.is(e)}static isGdalVfsUri(t){return"string"===typeof t&&t.startsWith("/vsi")&&!t.startsWith("/vsicurl/")}static toAbsolute(t,e,r=!0){"string"===typeof t&&t.startsWith("/vsicurl/")&&(t=t.replace(/^\/vsicurl\//,""));let a=i()(t);return a.is("relative")&&!u.isGdalVfsUri(t)&&(e.endsWith("/")||e.endsWith(".json")||(e+="/"),a=a.absoluteTo(e)),r?a.toString():a}static getLinkWithRel(t,e){return Array.isArray(t)?t.find((t=>u.isObject(t)&&"string"===typeof t.href&&t.rel===e)):null}static getLinksWithRels(t,e){return Array.isArray(t)?t.filter((t=>u.isObject(t)&&"string"===typeof t.href&&e.includes(t.rel))):[]}static getLinksWithOtherRels(t,e){return Array.isArray(t)?t.filter((t=>u.isObject(t)&&"string"===typeof t.href&&!e.includes(t.rel))):[]}static equalUrl(t,e){try{let r=i()(t),a=i()(e);return r.path(r.path().replace(/\/$/,"")),a.path(a.path().replace(/\/$/,"")),r.equals(a)}catch(r){return!1}}static scrollTo(t){if(t){var e=t.getBoundingClientRect(),r=e.top<window.innerHeight&&e.bottom>=0;r||t.scrollIntoView({behavior:"smooth",block:"start"})}}static addFiltersToLink(t,e={}){let r=Object.assign({},t),a=new(i())(r.href);for(let i in e){let t=e[i];if(t){if("datetime"===i)t=t.map((t=>t instanceof Date?t.toISOString():t||"..")).join("/");else if("bbox"===i)t="function"===typeof t.toBBoxString?t.toBBoxString():t.join(",");else if("collections"===i||"ids"===i){if(!(Array.isArray(t)&&t.length>0))continue;t=t.join(",")}a.setQuery(i,t)}else a.removeQuery(i)}return r.href=a.toString(),r}static titleForHref(t,e=!1){let r=i()(t),a=r.authority(),o=r.filename().replace(/^(.{1,})\.\w+$/,"$1"),l=r.directory().replace(/^\//,"");if(a&&o&&!e){let t=r.path().replace(/^\//,"");return"doi.org"===a&&t.startsWith("10.")?`DOI ${t}`:`${o} at ${a}`}return o&&!s.includes(o)?o:a||(l||t)}static canBrowserDisplayImage(t){if("string"!==typeof t.href)return!1;let e=new(i())(t.href),r=e.protocol().toLowerCase();return!(r&&!c.includes(r))&&(!!n.test(t.type)||(!!l.includes(e.suffix().toLowerCase())||!t.type))}}}},e={};function r(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=t,function(){var t=[];r.O=function(e,a,i,s){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var l=!0,n=0;n<a.length;n++)(!1&s||o>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[n])}))?a.splice(n--,1):(l=!1,s<o&&(o=s));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+({178:"item",701:"catalog"}[t]||t)+"."+{68:"aafbd127",81:"f3f8e6ec",85:"79d2f004",150:"d1b1778b",155:"13c98b60",178:"147fb7aa",196:"2a8aefdf",362:"aaa6e465",383:"c373f79f",400:"9cfc05cf",447:"0a1e1b63",463:"daa3e5e7",467:"e52a03ec",602:"b8c040ce",652:"73e9e433",701:"80c2a45c",703:"df512a99",808:"ea453cf6",867:"255a09ad",870:"d7aa2004",891:"526246a3"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+({178:"item",701:"catalog"}[t]||t)+"."+{81:"4d1fa7cd",85:"cd8ba8b3",178:"7b427565",196:"b6975faf",362:"8490e023",383:"6fd11ab7",400:"370c024f",463:"ca3fc0e4",602:"65069a4d",652:"af6a60e5",701:"7fbacabc",867:"8388a9b2",870:"081b4583",891:"4e3e5304"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="@radiantearth/stac-browser:";r.l=function(a,i,s,o){if(t[a])t[a].push(i);else{var l,n;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var h=c[u];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==e+s){l=h;break}}l||(n=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",e+s),l.src=a),t[a]=[i];var d=function(e,r){l.onerror=l.onload=null,clearTimeout(p);var i=t[a];if(delete t[a],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),n&&document.head.appendChild(l)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){r.p="/stac-browser/"}(),function(){var t=function(t,e,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=function(s){if(i.onerror=i.onload=null,"load"===s.type)r();else{var o=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||e,n=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=o,n.request=l,i.parentNode.removeChild(i),a(n)}};return i.onerror=i.onload=s,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var i=r[a],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===t||s===e))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],s=i.getAttribute("data-href");if(s===t||s===e)return i}},a=function(a){return new Promise((function(i,s){var o=r.miniCssF(a),l=r.p+o;if(e(o,l))return i();t(a,l,i,s)}))},i={143:0};r.f.miniCss=function(t,e){var r={81:1,85:1,178:1,196:1,362:1,383:1,400:1,463:1,602:1,652:1,701:1,867:1,870:1,891:1};i[t]?e.push(i[t]):0!==i[t]&&r[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var i=r.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var s=new Promise((function(r,a){i=t[e]=[r,a]}));a.push(i[2]=s);var o=r.p+r.u(e),l=new Error,n=function(a){if(r.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,i[1](l)}};r.l(o,n,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,o=a[0],l=a[1],n=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(n)var u=n(r)}for(e&&e(a);c<o.length;c++)s=o[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},a=self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1377)}));a=r.O(a)})();
//# sourceMappingURL=app.8bfa06c9.js.map