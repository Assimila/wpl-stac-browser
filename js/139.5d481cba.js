"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[139,175],{754:function(t,e,i){i.d(e,{Z:function(){return x}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"items mb-4"},[i("h2",[i("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():i("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():i("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?i("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[i("b-icon-search"),t._v(" Filter ")],1):t._e(),i("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?i("ItemFilter",{attrs:{stac:t.stac,value:t.filters,extents:t.canFilterExtents,sort:t.canSort,filter:t.canFilterCql,collectionOnly:!0},on:{input:t.emitFilter}}):t._e()],1)]:t._e(),t.chunkedItems.length>0?i("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return i("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):i("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v("No items found for the given filters.")]:[t._v("No items available for this collection.")]],2),t.showPagination?i("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?i("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?i("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),i("b-card-body",[i("b-card-title",[i("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),i("b-card-text",[i("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?i("b-card-text",[t._l(t.fileFormats,(function(e){return i("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),t.isDeprecated?i("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},r=[],o=(i(6699),i(629)),l=i(1317),c=i(8909),h={name:"Item",components:{StacLink:l["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:()=>[]}},data(){return{showThumbnail:!1}},computed:{...(0,o.rn)(["crossOriginMedia"]),...(0,o.Se)(["getStac"]),cardProps(){let t={};return Array.isArray(this.selected)&&this.selected.find((t=>this.data.equals(t)))&&(t["border-variant"]="danger"),t},data(){return this.item instanceof c.Z?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,i)=>i.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof c.Z&&Boolean(this.data.properties.deprecated)}},methods:{load(t){t&&(this.showThumbnail=!0),this.item instanceof c.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=h,u=i(1001),d=(0,u.Z)(p,n,r,!1,null,null,null),m=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-button-group",{class:t.classes},[i("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),i("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),i("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?i("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},g=[],v={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},b=v,w=(0,u.Z)(b,f,g,!1,null,null,null),y=w.exports,_=i(1688),k=i(8019),I=i(7637),O=i(753),P={name:"Items",mixins:[(0,O.ZP)(!0)],components:{BCollapse:_.k,BIconSearch:k.Lln,Item:m,ItemFilter:()=>Promise.all([i.e(85),i.e(981),i.e(404),i.e(175)]).then(i.bind(i,9404)),Pagination:y,SortButtons:()=>i.e(703).then(i.bind(i,4703))},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90},selected:{type:Array,default:()=>[]}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===I.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>c.Z.getDisplayTitle(t).localeCompare(c.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&I.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},S=P,C=(0,u.Z)(S,s,a,!1,null,"6ccbf1ec",null),x=C.exports},5250:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search d-flex flex-column"},[t.root?t.supportsSearch?i("b-row",[i("b-col",{staticClass:"left"},[i("ItemFilter",{attrs:{stac:t.root,title:"",value:t.filters,extents:t.canFilterExtents,sort:t.canSort,filter:t.canFilterCql},on:{input:t.setFilters}})],1),i("b-col",{staticClass:"right"},[null===t.loading?i("b-alert",{attrs:{variant:"info",show:""}},[t._v("Please modify the search criteria.")]):!0===t.loading?i("Loading"):0===t.apiItems.length?i("b-alert",{attrs:{variant:"warning",show:""}},[t._v("No items found for the given filters.")]):[i("Map",{attrs:{stac:t.root,stacLayerData:t.itemCollection},on:{mapClicked:t.mapClicked}}),i("Items",{attrs:{stac:t.root,items:t.apiItems,api:!0,allowFilter:!1,selected:t.selected,pagination:t.itemPages},on:{paginate:t.paginateItems}})]],2)],1):i("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Item Search is not supported by the API.")]):i("Loading",{attrs:{stretch:""}})],1)},a=[],n=i(754),r=i(629),o=i(7637),l=i(753),c=i(9404),h=i(5937);const p="Search";var u={name:"Search",mixins:[(0,l.ZP)(!1)],components:{ItemFilter:c["default"],Items:n.Z,Loading:h.Z,Map:()=>i.e(505).then(i.bind(i,3505))},props:{loadRoot:{type:String,default:null}},data(){return{loading:null,filters:{},selected:[]}},computed:{...(0,r.rn)(["apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"]),...(0,r.Se)(["root","searchLink","supportsSearch","fromBrowserPath"]),itemCollection(){return{type:"FeatureCollection",features:this.apiItems,links:[]}},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&(t.first=o.ZP.addFiltersToLink(this.apiItemsLink,this.apiItemsFilter)),t}},watch:{supportsSearch:{immediate:!0,handler(){this.supportsSearch&&this.showPage()}}},created(){if(this.loadRoot&&!this.root){let t=this.fromBrowserPath(this.loadRoot);this.$store.commit("config",{catalogUrl:t})}},methods:{async setFilters(t,e=!1){this.filters=t,e?(this.$store.commit("resetApiItems"),this.loading=null):await this.filterItems(t)},showPage(){this.$store.commit("showPage",{title:p}),this.$store.commit("setApiItemsLink",this.searchLink)},async paginateItems(t){try{let e=await this.$store.dispatch("loadApiItems",{link:t,show:!0});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,"Sorry, loading the list of STAC Items failed.")}},async filterItems(t){this.loading=!0;try{let e=await this.$store.dispatch("loadApiItems",{link:this.searchLink,show:!0,filters:t});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,"Sorry, loading a filtered list of STAC Items failed.")}finally{this.loading=!1}},handleResponse(t){t&&this.$store.commit("showPage",{title:p,url:t.config.url})},mapClicked(t){"Feature"===t.type&&(this.selected=[t.data])}}},d=u,m=i(1001),f=(0,m.Z)(d,s,a,!1,null,"71f598ac",null),g=f.exports},1688:function(t,e,i){i.d(e,{k:function(){return R}});var s,a=i(144),n=i(4689),r="show",o=i(3935),l=i(3294),c=i(2299),h=i(494),p=i(1440),u=i(8415),d=i(4602),m=i(7040),f=i(451),g=i(3727),v=i(8596),b=i(8280),w=i(9558),y=function(t){(0,p.A_)(t,"height",0),(0,p.bz)((function(){(0,p.nq)(t),(0,p.A_)(t,"height","".concat(t.scrollHeight,"px"))}))},_=function(t){(0,p.jo)(t,"height")},k=function(t){(0,p.A_)(t,"height","auto"),(0,p.A_)(t,"display","block"),(0,p.A_)(t,"height","".concat((0,p.Zt)(t).height,"px")),(0,p.nq)(t),(0,p.A_)(t,"height",0)},I=function(t){(0,p.jo)(t,"height")},O={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},P={enter:y,afterEnter:_,leave:k,afterLeave:I},S={appear:(0,f.pi)(c.U5,!1)},C=a.Z.extend({name:n.gt,functional:!0,props:S,render:function(t,e){var i=e.props,s=e.data,a=e.children;return t("transition",(0,w.b)(s,{props:O,on:P},{props:i}),a)}});function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){$(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var A=(0,u.gA)(n.gr,"toggle"),E=(0,u.gA)(n.gr,"request-state"),j=(0,u.J3)(n.gr,"accordion"),T=(0,u.J3)(n.gr,"state"),q=(0,u.J3)(n.gr,"sync-state"),D=(0,d.l)("visible",{type:c.U5,defaultValue:!1}),L=D.mixin,Z=D.props,M=D.prop,N=D.event,B=(0,f.y2)((0,m.GE)(F(F(F({},g.N),Z),{},{accordion:(0,f.pi)(c.N0),appear:(0,f.pi)(c.U5,!1),isNav:(0,f.pi)(c.U5,!1),tag:(0,f.pi)(c.N0,"div")})),n.gr),R=a.Z.extend({name:n.gr,mixins:[g.t,L,b.Z,v.E],props:B,data:function(){return{show:this[M],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(s={},$(s,M,(function(t){t!==this.show&&(this.show=t)})),$(s,"show",(function(t,e){t!==e&&this.emitState()})),s),created:function(){this.show=this[M]},mounted:function(){var t=this;this.show=this[M],this.listenOnRoot(A,this.handleToggleEvent),this.listenOnRoot(j,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(E,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o.Qg&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){(0,u.tU)(t,window,"resize",this.handleResize,l.IJ),(0,u.tU)(t,window,"orientationchange",this.handleResize,l.IJ)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(l.l0)},onAfterEnter:function(){this.transitioning=!1,this.$emit(l.AS)},onLeave:function(){this.transitioning=!0,this.$emit(l.yM)},onAfterLeave:function(){this.transitioning=!1,this.$emit(l.v6)},emitState:function(){var t=this.show,e=this.accordion,i=this.safeId();this.$emit(N,t),this.emitOnRoot(T,i,t),e&&t&&this.emitOnRoot(j,i,e)},emitSync:function(){this.emitOnRoot(q,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=(0,p.pv)(t,r);(0,p.IV)(t,r);var i="block"===(0,p.yD)(t).display;return e&&(0,p.cn)(t,r),i},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===(0,p.yD)(this.$el).display&&(!(0,p.wB)(e,".nav-link,.dropdown-item")&&!(0,p.oq)(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var i=this.accordion,s=this.show;if(i&&i===e){var a=t===this.safeId();(a&&!s||!a&&s)&&this.toggle()}},handleResize:function(){this.show="block"===(0,p.yD)(this.$el).display}},render:function(t){var e=this.appear,i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(h.Pq,this.slotScope));return t(C,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}})},7130:function(t,e,i){i.d(e,{n:function(){return o}});var s=i(7040);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));(0,s.f0)(this,t.Defaults,this.constructor.Defaults,i,{type:e}),(0,s.hc)(this,{type:(0,s.MB)(),cancelable:(0,s.MB)(),nativeEvent:(0,s.MB)(),target:(0,s.MB)(),relatedTarget:(0,s.MB)(),vueTarget:(0,s.MB)(),componentId:(0,s.MB)()});var n=!1;this.preventDefault=function(){this.cancelable&&(n=!0)},(0,s._x)(this,"defaultPrevented",{enumerable:!0,get:function(){return n}})}return r(t,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),t}()},753:function(t,e,i){i(6699);var s=i(629);const a="http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core",n="http://www.opengis.net/spec/cql2/1.*/conf/cql2-text",r="http://www.opengis.net/spec/cql2/1.*/conf/cql2-json",o="https://api.stacspec.org/v1.*/item-search#sort",l="https://api.stacspec.org/v1.*/ogcapi-features#sort",c="https://api.stacspec.org/v1.*/item-search#filter*",h="http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter";e["ZP"]=t=>({computed:{...(0,s.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(a)},canFilterCql(){return this.supportsConformance(t?h:c)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(n)&&t.push("Text"),this.supportsConformance(r)&&t.push("JSON"),t}}})}}]);
//# sourceMappingURL=139.5d481cba.js.map