import { y as e, z as y$1, d6 as e$1, hV as i, A as i$1, gJ as O, aA as u$1, c6 as z, df as g, cE as E, bA as t, gD as t$1, hW as f, gF as o, gE as s, gH as l, gW as d$1, gI as l$1, gG as b, gX as l$2, C as u$2, U, a_ as y$2, L, cH as n, ew as M, ir as O$1, bj as d$2, dC as $, N as s$2, bf as s$3, bv as o$1, hc as c, gi as k$1, is as p, g$ as p$1 } from './_virtual:index-1982596a.js';
import { e as e$2 } from './scaleUtils-a6ac05a8.js';
import { y as y$3, w, l as l$3, s as s$1 } from './ExportWMSImageParameters-938b2c11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var u;let y=0,d=u=class extends O{constructor(e){super(e),this._sublayersHandles=new u$1,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null;}get description(){return this._get("description")}set description(e){this._set("description",e);}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e);}readExtent(e,t){return (e=t.extent)?z.fromJSON(e):null}get id(){const e=this._get("id");return null==e?y++:e}set id(e){this._set("id",e);}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e));}get name(){return this._get("name")}set name(e){this._set("name",e);}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))])),this._set("sublayers",e);}castSublayers(e){return g(E.ofType(u),e)}get title(){return this._get("title")}set title(e){this._set("title",e);}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e);}clone(){const e=new u;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}));}};e([y$1()],d.prototype,"description",null),e([y$1({readOnly:!0})],d.prototype,"dimensions",void 0),e([y$1({value:null})],d.prototype,"fullExtent",null),e([e$1("fullExtent",["extent"])],d.prototype,"readExtent",null),e([y$1()],d.prototype,"fullExtents",void 0),e([y$1()],d.prototype,"featureInfoFormat",void 0),e([y$1()],d.prototype,"featureInfoUrl",void 0),e([y$1({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],d.prototype,"id",null),e([y$1({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],d.prototype,"legendUrl",void 0),e([e$1(["web-document"],"legendUrl")],d.prototype,"readLegendUrl",null),e([y$1({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],d.prototype,"legendEnabled",void 0),e([y$1({value:null})],d.prototype,"layer",null),e([y$1()],d.prototype,"maxScale",void 0),e([y$1()],d.prototype,"minScale",void 0),e([y$1({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],d.prototype,"name",null),e([y$1()],d.prototype,"parent",void 0),e([y$1({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],d.prototype,"popupEnabled",void 0),e([y$1({type:Boolean,json:{write:{ignoreOrigin:!0}}})],d.prototype,"queryable",void 0),e([y$1()],d.prototype,"sublayers",null),e([i("sublayers")],d.prototype,"castSublayers",null),e([y$1({type:[Number],json:{read:{source:"spatialReferences"}}})],d.prototype,"spatialReferences",void 0),e([y$1({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],d.prototype,"title",null),e([y$1({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],d.prototype,"visible",null),d=u=e([i$1("esri.layers.support.WMSSublayer")],d);var h=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const N=new t({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let B=class extends(t$1(f(o(s(l(d$1(l$1(b)))))))){constructor(...e){super(...e),this._sublayersHandles=new u$1,this.allSublayers=new l$2({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",((e,r)=>{r&&(r.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this;})),this._sublayersHandles||(this._sublayersHandles=new u$1),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))]));}),!0);}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){var e;null==(e=this._exportWMSImageParameters)||e.destroy();}load(e){const r=u$2(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then((()=>this._fetchService(r)),(()=>this._fetchService(r)))),U(this)}readFullExtentFromItemOrMap(e,r){const t=r.extent;return new z({xmin:t[0][0],ymin:t[0][1],xmax:t[1][0],ymax:t[1][1]})}writeFullExtent(e,r){r.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]];}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("image/png")>-1?"image/png":t&&t[0]}readSpatialReferenceFromItemOrDocument(e,r){return new y$2(r.spatialReferences[0])}writeSpatialReferences(e,r){const t=this.spatialReference&&this.spatialReference.wkid;e&&t?(r.spatialReferences=e.filter((e=>e!==t)),r.spatialReferences.unshift(t)):r.spatialReferences=e;}readSublayersFromItemOrMap(e,r,t){return k(r.layers,t,r.visibleLayers)}readSublayers(e,r,t){return k(r.layers,t)}writeSublayers(e,r,t,s){r.layers=[];const o=new Map,i=e.flatten((({sublayers:e})=>e&&e.toArray())).toArray();i.forEach((e=>{"number"==typeof e.parent.id&&(o.has(e.parent.id)?o.get(e.parent.id).push(e.id):o.set(e.parent.id,[e.id]));})),i.forEach((e=>{const t={sublayer:e,...s},i=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},t);if(o.has(e.id)&&(i.sublayerIds=o.get(e.id)),!e.sublayers&&e.name){const s=e.write({},t);delete s.id,r.layers.push(s);}})),r.visibleLayers=i.filter((e=>e.visible&&!e.sublayers)).map((e=>e.name));}createExportImageParameters(e,r,t,s){var o;const i=s&&s.pixelRatio||1,a=e$2({extent:e,width:r})*i;null==(o=this._exportWMSImageParameters)||o.destroy(),this._exportWMSImageParameters=new y$3({layer:this,extent:e,scale:a});return this._exportWMSImageParameters.toJSON()}async fetchImage(e,r,t,s){var o,i;const a=this.mapUrl,n=this.createExportImageParameters(e,r,t,s);if(!n.layers){const e=document.createElement("canvas");return e.width=r,e.height=t,e}const l=null==s||null==(o=s.timeExtent)?void 0:o.start,p=null==s||null==(i=s.timeExtent)?void 0:i.end,m=l&&p?l.getTime()===p.getTime()?w(l):`${w(l)}/${w(p)}`:void 0,u={responseType:"image",query:this._mixCustomParameters({width:r,height:t,...n,time:m}),signal:null==s?void 0:s.signal};return null!=s&&s.timestamp&&(u.query={_ts:s.timestamp,...u.query}),L(a,u).then((e=>e.data))}fetchFeatureInfo(e,r,t,s,o){const i=l$3(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!i)return null;const a="1.3.0"===this.version?{I:s,J:o}:{x:s,y:o},n$1={query_layers:i,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:r,height:t,...a};let l={...this.createExportImageParameters(e,r,t),...n$1};return l=this._mixCustomParameters(l),L(this.featureInfoUrl,{query:l,responseType:"text"}).then((e=>{let r=this.featureInfoUrl;r+=-1===r.indexOf("?")?"?":"";for(const e in l)r+="?"===r.substring(r.length-1,r.length)?"":"&",r+=e+"="+l[e];const t=document.createElement("iframe");return t.src=r,t.frameBorder="0",t.marginHeight="0",t.marginWidth="0",t.innerHTML=e.data,t.style.width="100%",new n({sourceLayer:this,popupTemplate:new M({title:this.title,content:t})})}))}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}findSublayerByName(e){return this.allSublayers.find((r=>r.name===e))}supportsSpatialReference(e){return O$1(this.url)||this.spatialReferences.some((r=>{const t=900913===r?y$2.WebMercator:new y$2({wkid:r});return d$2(t,e)}))}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const r=await L(this.parsedUrl.path,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...this.parsedUrl.query,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=s$1(r.data);}if(this.parsedUrl){const e=new $(this.parsedUrl.path);"https"!==e.scheme||e.port&&"443"!==e.port||-1!==s$2.request.httpsDomains.indexOf(e.host)||s$2.request.httpsDomains.push(e.host);}this.read(this.resourceInfo,{origin:"service"});}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const r={...this.customParameters,...this.customLayerParameters};for(const t in r)e[t.toLowerCase()]=r[t];return e}};function k(e,t,s){const o=new Map;e.every((e=>null==e.id))&&(e=s$3(e)).forEach(((e,r)=>e.id=r));for(const r of e){const e=new h;e.read(r,t),-1===(null==s?void 0:s.indexOf(e.name))&&(e.visible=!1),o.set(e.id,e);}const i=[];for(const r of e){const e=o.get(r.id);if(null!=r.parentLayerId&&r.parentLayerId>=0){const t=o.get(r.parentLayerId);t.sublayers||(t.sublayers=new E),t.sublayers.unshift(e);}else i.unshift(e);}return i}e([y$1({readOnly:!0})],B.prototype,"allSublayers",void 0),e([y$1({json:{type:Object,write:!0}})],B.prototype,"customParameters",void 0),e([y$1({json:{type:Object,write:!0}})],B.prototype,"customLayerParameters",void 0),e([y$1({type:String,json:{write:!0}})],B.prototype,"copyright",void 0),e([y$1()],B.prototype,"description",void 0),e([y$1({readOnly:!0})],B.prototype,"dimensions",void 0),e([y$1({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],B.prototype,"fullExtent",void 0),e([e$1(["web-document","portal-item"],"fullExtent",["extent"])],B.prototype,"readFullExtentFromItemOrMap",null),e([o$1(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],B.prototype,"writeFullExtent",null),e([y$1()],B.prototype,"fullExtents",void 0),e([y$1({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"featureInfoFormat",void 0),e([y$1({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"featureInfoUrl",void 0),e([y$1({type:String,json:{origins:{"web-document":{default:"image/png",type:N.jsonValues,read:{reader:N.read,source:"format"},write:{writer:N.write,target:"format"}}}}})],B.prototype,"imageFormat",void 0),e([e$1("imageFormat",["supportedImageFormatTypes"])],B.prototype,"readImageFormat",null),e([y$1({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],B.prototype,"imageMaxHeight",void 0),e([y$1({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],B.prototype,"imageMaxWidth",void 0),e([y$1()],B.prototype,"imageTransparency",void 0),e([y$1(c)],B.prototype,"legendEnabled",void 0),e([y$1({type:["show","hide","hide-children"]})],B.prototype,"listMode",void 0),e([y$1({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"mapUrl",void 0),e([y$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],B.prototype,"isReference",void 0),e([y$1({type:["WMS"]})],B.prototype,"operationalLayerType",void 0),e([y$1({type:y$2,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],B.prototype,"spatialReference",void 0),e([e$1(["web-document","portal-item"],"spatialReference",["spatialReferences"])],B.prototype,"readSpatialReferenceFromItemOrDocument",null),e([y$1({type:[k$1],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],B.prototype,"spatialReferences",void 0),e([o$1(["web-document","portal-item"],"spatialReferences")],B.prototype,"writeSpatialReferences",null),e([y$1({type:E.ofType(h),json:{write:{target:"layers",overridePolicy(e,r,t){if(function(e,r){return e.some((e=>{for(const t in e)if(p(e,t,null,r))return !0;return !1}))}(this.allSublayers,t))return {ignoreOrigin:!0}}}}})],B.prototype,"sublayers",void 0),e([e$1(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],B.prototype,"readSublayersFromItemOrMap",null),e([e$1("service","sublayers",["layers"])],B.prototype,"readSublayers",null),e([o$1("sublayers",{layers:{type:[h]},visibleLayers:{type:[String]}})],B.prototype,"writeSublayers",null),e([y$1({json:{read:!1},readOnly:!0,value:"wms"})],B.prototype,"type",void 0),e([y$1(p$1)],B.prototype,"url",void 0),e([y$1({type:String,json:{write:{ignoreOrigin:!0}}})],B.prototype,"version",void 0),B=e([i$1("esri.layers.WMSLayer")],B);var A=B;

export default A;