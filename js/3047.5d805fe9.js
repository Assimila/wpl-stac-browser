(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[3047,5428],{75428:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return k}});var r=function(){var t=this,e=t._self._c;return t.formattedData.length>0?e("section",{staticClass:"metadata"},[t.title?e(t.headerTag,{tag:"component"},[t._v(t._s(t.titleText))]):t._e(),e("b-card-group",{class:`count-${t.formattedData.length}`,attrs:{columns:""}},t._l(t.formattedData,(function(a){return e("MetadataGroup",t._b({key:a.extension},"MetadataGroup",a,!1))})),1)],1):t._e()},n=[],s=(a(44114),a(74870)),i=function(){var t=this,e=t._self._c;return e("b-card",{key:t.extension,class:["metadata-card",`ext-${t.extension}`],attrs:{"no-body":""}},[e("b-card-title",[t.label?e("span",{domProps:{innerHTML:t._s(t.label)}}):[t._v(t._s(t.$t("metadata.general")))]],2),e("section",{staticClass:"border metadata-rows"},t._l(t.properties,(function(a,r){return e("MetadataEntry",t._b({key:r,attrs:{field:r}},"MetadataEntry",a,!1))})),1)],1)},o=[],l=function(){var t=this,e=t._self._c;return e("b-row",[e("b-col",{staticClass:"label",attrs:{md:t.showTable?12:3,title:t.field}},[e("span",{domProps:{innerHTML:t._s(t.label)}})]),t.showTable?e("b-col",{staticClass:"value mt-2",attrs:{md:"12"}},[e("MetadataTable",t._b({},"MetadataTable",t.$props,!1))],1):e("b-col",{staticClass:"value",attrs:{md:"9"}},[e("div",{domProps:{innerHTML:t._s(t.formatted)}})])],1)},d=[],u=a(8315),c=a(2566);const p=["languages","eo:bands","raster:bands","bands"];var f={name:"MetadataEntry",components:{MetadataTable:()=>a.e(6780).then(a.bind(a,66780))},mixins:[u.A],computed:{showTable(){return p.includes(this.field)||this.itemOrder.length>0&&c.Ay.size(this.value)>=3}}},m=f,h=a(81656),b=(0,h.A)(m,l,d,!1,null,null,null),g=b.exports,y={name:"MetadataGroup",components:{MetadataEntry:g},props:{label:{type:String,default:""},extension:{type:String,default:""},properties:{type:Object,required:!0}}},_=y,x=(0,h.A)(_,i,o,!1,null,null,null),j=x.exports,v=a(99710),C=a(95353),M={name:"Metadata",components:{MetadataGroup:j},props:{data:{type:Object,required:!0},type:{type:String,required:!0},context:{type:Object,default:null},ignoreFields:{type:Array,default:()=>[]},title:{type:[Boolean,String],default:!0},headerTag:{type:String,default:"h2"}},data(){return{formattedData:[]}},computed:{...(0,C.aH)(["uiLanguage"]),titleText(){return"string"===typeof this.title?this.title:this.$t("metadata.title")}},watch:{uiLanguage:{immediate:!0,async handler(t){if(!t)return;const e=(await a(47768)(`./${t}/duration.js`)).default;v.isoDuration.setLocales({en:e}),this.formattedData=this.formatData()}}},methods:{formatData(){let t=t=>!t.startsWith("_")&&!this.ignoreFields.includes(t);switch(this.type){case"Asset":return(0,s.formatAsset)(this.data,this.context,t);case"Link":return(0,s.formatLink)(this.data,this.context,t);case"Provider":return(0,s.formatProvider)(this.data,this.context,t);case"Item":return(0,s.formatItemProperties)(this.data,t);case"Catalog":return(0,s.formatCatalog)(this.data,t);case"Collection":{let e=(0,s.formatCollection)(this.data,t),a=(0,s.formatSummaries)(this.data,t);return a.forEach((t=>{let a=e.findIndex((e=>t.extension===e.extension));-1!==a?Object.assign(e[a].properties,t.properties):e.push(t)})),e.sort(((t,e)=>t.label.localeCompare(e.label,this.uiLanguage)))}case"FeatureCollection":return{};default:return(0,s.formatGrouped)(this.context,this.data,this.type,t)}}}},w=M,T=(0,h.A)(w,r,n,!1,null,null,null),k=T.exports},8315:function(t,e){"use strict";e.A={props:{field:{type:String,required:!0},label:{type:String,required:!0},value:{},formatted:{type:String},spec:{type:Object,required:!0},itemOrder:{},items:{}}}},47768:function(t,e,a){var r={"./de-CH/duration.js":[49637,9637],"./de/duration.js":[54511,4511],"./en-GB/duration.js":[47843,7843],"./en/duration.js":[86855,6855],"./es/duration.js":[46046,6046],"./fr-CA/duration.js":[27003,7003],"./fr-CH/duration.js":[67286,7286],"./fr/duration.js":[93658,3658],"./it-CH/duration.js":[44567,4567],"./it/duration.js":[67905,7905],"./ro/duration.js":[65583,5583]};function n(t){if(!a.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],n=e[0];return a.e(e[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(r)},n.id=47768,t.exports=n}}]);
//# sourceMappingURL=3047.5d805fe9.js.map