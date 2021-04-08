import { j as e, y as y$1, bz as M$1, cq as x$2, k as i$1, c9 as a$1, c6 as e$1, b$ as L$1, hB as r, hC as u$1, s, a3 as j, aP as k, r as r$1, fK as t$1, fM as o, fL as s$1, cj as l$1, ck as u$2, cl as l$2, cp as b$1, af as u$3, ce as t$2, U, b3 as y$2, c5 as U$1, bi as o$1 } from './_virtual_index-634cbc09.js';
import { a as a$2, x as x$3 } from './WebTileLayer-97a441b8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$2;let l=p$2=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null;}clone(){const t=new p$2;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};e([y$1({type:M$1,json:{read:{source:"fullExtent"}}})],l.prototype,"fullExtent",void 0),e([y$1({type:String,json:{read:{source:"id"}}})],l.prototype,"id",void 0),e([y$1({type:x$2,json:{read:{source:"tileInfo"}}})],l.prototype,"tileInfo",void 0),l=p$2=e([i$1("esri.layer.support.TileMatrixSet")],l);var n$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var t;let i=t=class extends a$1{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null;}clone(){const r=new t;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};e([y$1({json:{read:{source:"id"}}})],i.prototype,"id",void 0),e([y$1({json:{read:{source:"title"}}})],i.prototype,"title",void 0),e([y$1({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),e([y$1({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),e([y$1({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),e([y$1({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=t=e([i$1("esri.layer.support.WMTSStyle")],i);var p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n;let m$1=n=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null;}get description(){return this._get("description")}set description(t){this._set("description",t);}readFullExtent(t,e){return (t=e.fullExtent)?M$1.fromJSON(t):null}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.indexOf("image/")>-1||e&&-1===e.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),e&&-1===e.indexOf(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t);}get styleId(){let t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t}set styleId(t){this._set("styleId",t);}get title(){return this._get("title")}set title(t){this._set("title",t);}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new n;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};e([y$1()],m$1.prototype,"description",null),e([y$1()],m$1.prototype,"fullExtent",void 0),e([e$1("fullExtent",["fullExtent"])],m$1.prototype,"readFullExtent",null),e([y$1()],m$1.prototype,"imageFormat",null),e([y$1({json:{read:{source:"formats"}}})],m$1.prototype,"imageFormats",void 0),e([y$1()],m$1.prototype,"id",void 0),e([y$1()],m$1.prototype,"layer",void 0),e([y$1()],m$1.prototype,"styleId",null),e([y$1({type:L$1.ofType(p$1),json:{read:{source:"styles"}}})],m$1.prototype,"styles",void 0),e([y$1({value:null,json:{write:{ignoreOrigin:!0}}})],m$1.prototype,"title",null),e([y$1()],m$1.prototype,"tileMatrixSetId",void 0),e([y$1({readOnly:!0})],m$1.prototype,"tileMatrixSet",null),e([y$1({type:L$1.ofType(n$1),json:{read:{source:"tileMatrixSets"}}})],m$1.prototype,"tileMatrixSets",void 0),m$1=n=e([i$1("esri.layers.support.WMTSSublayer")],m$1);var h$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a=90.71428571428571,c=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function u(e,i){var n,r;e=e.replace(/ows:/gi,"");const l=(new DOMParser).parseFromString(e,"text/xml").documentElement,o=new Map,s$1=new Map,a=f("Contents",l);if(!a)throw new s("wmtslayer:wmts-capabilities-xml-is-not-valid");const c=f("OperationsMetadata",l),u=null==c?void 0:c.querySelector("[name='GetTile']"),p=null==u?void 0:u.getElementsByTagName("Get"),d=p&&Array.prototype.slice.call(p),g=null!=(n=(null==i||null==(r=i.url)?void 0:r.indexOf("https"))>-1)&&n;let T,y,M=i.serviceMode,S=i&&i.url;if(d&&d.length&&d.some((e=>{const t=f("Constraint",e);return !t||x$1("AllowedValues","Value",M,t)?(S=e.attributes[0].nodeValue,!0):(!t||x$1("AllowedValues","Value","RESTful",t)||x$1("AllowedValues","Value","REST",t)?y=e.attributes[0].nodeValue:t&&!x$1("AllowedValues","Value","KVP",t)||(T=e.attributes[0].nodeValue),!1)})),!S)if(y)S=y,M="RESTful";else if(T)S=T,M="KVP";else {const e=f("ServiceMetadataURL",l);S=e&&e.getAttribute("xlink:href");}const V=S.indexOf("1.0.0/");-1===V&&"RESTful"===M?S+="/":V>-1&&(S=S.substring(0,V)),"KVP"===M&&(S+=V>-1?"":"?"),g&&(S=S.replace(/^http:/i,"https:"));const E=h("ServiceIdentification>ServiceTypeVersion",l),b=h("ServiceIdentification>AccessConstraints",l),C=m("Layer",a),N=m("TileMatrixSet",a);return {copyright:b,layers:C.map((e=>{const t=h("Identifier",e);return o.set(t,e),w(t,e,N,g,E)})),tileUrl:S,serviceMode:M,layerMap:o,dimensionMap:s$1}}function p(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((i=>{i.scale=96*i.scale/t.dpi,i.resolution=A(t.spatialReference.wkid,i.scale*a/96,e.id);})),t.dpi=96);}));})),e}function d(e){return e.nodeType===Node.ELEMENT_NODE}function f(e,t){for(let i=0;i<t.childNodes.length;i++){const n=t.childNodes[i];if(d(n)&&n.nodeName===e)return n}return null}function m(e,t){const i=[];for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];d(r)&&r.nodeName===e&&i.push(r);}return i}function g(e,t){const i=[];for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];d(r)&&r.nodeName===e&&i.push(r);}return i.map((e=>e.textContent))}function h(e,t){return e.split(">").forEach((e=>{t&&(t=f(e,t));})),t&&t.textContent}function x$1(e,t,i,n){let r;return Array.prototype.slice.call(n.childNodes).some((n=>{if(n.nodeName.indexOf(e)>-1){const e=f(t,n),l=e&&e.textContent;if(l===i||i.split(":")&&i.split(":")[1]===l)return r=n,!0}return !1})),r}function w(e,t,i,n,r){const l=h("Abstract",t),o=g("Format",t);return {id:e,fullExtent:S(t),description:l,formats:o,styles:V(t,n),title:h("Title",t),tileMatrixSets:E$1(r,t,i)}}function T(e,t){const i=[],n=e.layerMap.get(t);if(!n)return;const r=m("ResourceURL",n),l=m("Dimension",n);let o,s,a,c;return l.length&&(o=h("Identifier",l[0]),s=g("Default",l[0])||g("Value",l[0])),l.length>1&&(a=h("Identifier",l[1]),c=g("Default",l[1])||g("Value",l[1])),e.dimensionMap.set(t,{dimensions:s,dimensions2:c}),r.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&s.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue}");else {const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2));}if(a&&c.length)if(t.indexOf("{"+a+"}")>-1)t=t.replace("{"+a+"}","{dimensionValue2}");else {const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2));}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"});}})),i}function y(e,t,i,n,r,l,o,s){const{dimensionMap:a}=e,c=T(e,t),u=a.get(t).dimensions&&a.get(t).dimensions[0],p=a.get(t).dimensions2&&a.get(t).dimensions2[0];let d="";if(c&&c.length>0){let e=null;c.some((t=>t.format===n&&(e=t,!0))),e||(e=c[o%c.length]),d=e.template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,i).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p);}return d}function M(e,t,i,n){const{dimensionMap:r}=e,l=T(e,t);let o="";if(l&&l.length>0){const e=r.get(t).dimensions&&r.get(t).dimensions[0],s=r.get(t).dimensions2&&r.get(t).dimensions2[0];o=l[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=o.replace(/\{Style\}/gi,n),o=o.replace(/\{TileMatrixSet\}/gi,i),o=o.replace(/\{TileMatrix\}/gi,"{level}"),o=o.replace(/\{TileRow\}/gi,"{row}"),o=o.replace(/\{TileCol\}/gi,"{col}"),o=o.replace(/\{dimensionValue\}/gi,e),o=o.replace(/\{dimensionValue2\}/gi,s);}return o}function S(e){const t=f("WGS84BoundingBox",e),i=t?h("LowerCorner",t).split(" "):["-180","-90"],n=t?h("UpperCorner",t).split(" "):["180","90"];return {xmin:parseFloat(i[0]),ymin:parseFloat(i[1]),xmax:parseFloat(n[0]),ymax:parseFloat(n[1]),spatialReference:{wkid:4326}}}function V(e,t){return m("Style",e).map((e=>{const i=f("LegendURL",e),n=f("Keywords",e),r=n&&g("Keyword",n);let l=i&&i.getAttribute("xlink:href");t&&(l=l&&l.replace(/^http:/i,"https:"));return {abstract:h("Abstract",e),id:h("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:l,title:h("Title",e)}}))}function E$1(e,t,i){return m("TileMatrixSetLink",t).map((e=>f("TileMatrixSet",e).textContent)).map((n=>b(e,n,t,i)))}function b(e,t,i,n){const r=g("TileMatrix",x$1("TileMatrixSetLink","TileMatrixSet",t,i)),l=n.find((e=>{const i=f("Identifier",e),n=i&&i.textContent;return !!(n===t||t.split(":")&&t.split(":")[1]===n)})),o=C$1(l),a=o.spatialReference,c=a.wkid,u=f("TileMatrix",l),p=[parseInt(h("TileWidth",u),10),parseInt(h("TileHeight",u),10)],d=[];if(r.length)r.forEach(((e,i)=>{const n=x$1("TileMatrix","Identifier",e,l);d.push(L(n,c,i,t));}));else {m("TileMatrix",l).forEach(((e,i)=>{d.push(L(e,c,i,t));}));}const w=N(e,l,o,p,d[0]);return {id:t,fullExtent:w.toJSON(),tileInfo:new x$2({dpi:96,spatialReference:a,size:p,origin:o,lods:d}).toJSON()}}function C$1(t){let i=h("SupportedCRS",t);i&&(i=i.toLowerCase());let l=parseInt(i.split(":").pop(),10);900913!==l&&3857!==l||(l=102100);const o=v(i);r$1(o)&&(l=o);const s=new k({wkid:l}),a=h("TopLeftCorner",f("TileMatrix",t)).split(" "),c=a[0].split("E").map((e=>Number(e))),u=a[1].split("E").map((e=>Number(e)));let p=c[0],d=u[0];return c.length>1&&(p=c[0]*10**c[1]),u.length>1&&(d=u[0]*10**u[1]),I(l)?new j(d,p,s):new j(p,d,s)}function N(e,t,i,n,r){const o=f("BoundingBox",t);let s,a,c,u,p,d;if(o&&(s=h("LowerCorner",o).split(" "),a=h("UpperCorner",o).split(" ")),s&&s.length>1&&a&&a.length>1)c=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(a[0]),d=parseFloat(a[1]);else {const e=f("TileMatrix",t),l=parseFloat(h("MatrixWidth",e)),o=parseFloat(h("MatrixHeight",e));c=i.x,d=i.y,u=c+l*n[0]*r.resolution,p=d-o*n[1]*r.resolution;}return R$1(e,i.spatialReference)?new M$1(p,c,d,u,i.spatialReference):new M$1(c,p,u,d,i.spatialReference)}function R$1(e,t){return "1.0.0"===e&&I(t.wkid)}function I(e){return c.some((([t,i])=>e>=t&&e<=i))}function v(e){return e.includes("crs84")||e.includes("crs:84")?4326:e.includes("crs83")||e.includes("crs:83")?4269:e.includes("crs27")||e.includes("crs:27")?4267:null}function L(e,t,i,n){const r=h("Identifier",e),l=h("ScaleDenominator",e).split("E").map((e=>Number(e)));let o;o=l.length>1?l[0]*10**l[1]:l[0];const s=A(t,o,n);return o*=96/a,{level:i,levelValue:r,scale:o,resolution:s}}function A(e,t,n){let r$1;return r$1=r.hasOwnProperty(String(e))?r.values[r[e]]:"default028mm"===n?6370997*Math.PI/180:u$1(e).metersPerDegree,7*t/25e3/r$1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const x={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},E=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let _=class extends(t$1(o(s$1(l$1(u$2(l$2(b$1))))))){constructor(...e){super(...e),this._sublayersHandles=new u$3,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this);}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this;})),this._sublayersHandles||(this._sublayersHandles=new u$3),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this;})),e.on("after-remove",(({item:e})=>{e.layer=null;}))]));}),!0);}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new s("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'");}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e);}readActiveLayerFromService(e,t,r){let s;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(s=e,!0))):(this.activeLayer=new h$1,s=t.layers[0]),this.activeLayer.read(s,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:s}=t,i=r?this._getLowerCasedUrlParams(r):null,a=s&&s.layerIdentifier;let o=null;const l=s&&s.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=i&&i.format,m=i&&i.style;return new h$1({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t,s,i){const a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);const o=t$2("tileMatrixSet.tileInfo",a);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId};}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent);})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return C(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title");}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e);}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,s=e.fullExtent,i=new a$2({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(i.customLayerParameters=this.customLayerParameters),this.customParameters&&(i.customParameters=this.customParameters),new x$3({fullExtent:s,urlTemplate:t,tileInfo:r,wmtsInfo:i})}fetchTile(e,t,r){const s=this.getTileUrl(e,t,r);return U(s,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const s=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],i=s?s.levelValue?s.levelValue:`${s.level}`:`${e}`;let a=this.resourceInfo?"":y({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,i,t,r);if(!a){a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,i).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`);}return a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,s){if(!this.resourceInfo){const r=M({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,s);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+s+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let i="";return x[r.toLowerCase()]&&(i=x[r.toLowerCase()]),this.url+e+"/"+s+"/"+t+"/{level}/{row}/{col}"+i}return ""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e);}catch{const s$1="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(s$1,e),this.serviceMode=s$1;}catch(r){throw new s("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=p(t.data):t.data=u(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"});}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await U(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const r={...y$2(this.customParameters),...this.customLayerParameters};for(const t in r)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(r[t]);}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=U$1(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e];})),r}_mergeParams(e,r){const s=this._getLowerCasedUrlParams(r);if(s){const r=Object.keys(s);r.length&&(e=e?y$2(e):{},r.forEach((t=>{e.hasOwnProperty(t)||E.has(t)||(e[t]=s[t]);})));}return e}};function C(e,t){return e.map((e=>{const r=new h$1;return r.read(e,t),r}))}e([y$1()],_.prototype,"dimensionMap",void 0),e([y$1()],_.prototype,"layerMap",void 0),e([y$1({type:h$1,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],_.prototype,"activeLayer",null),e([e$1("service","activeLayer",["layers"])],_.prototype,"readActiveLayerFromService",null),e([e$1(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],_.prototype,"readActiveLayerFromItemOrWebDoc",null),e([o$1(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:x$2},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],_.prototype,"writeActiveLayer",null),e([y$1({type:String,value:"",json:{write:!0}})],_.prototype,"copyright",void 0),e([y$1({type:["show","hide"]})],_.prototype,"listMode",void 0),e([y$1({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],_.prototype,"customParameters",void 0),e([e$1("web-document","customParameters"),e$1("portal-item","customParameters")],_.prototype,"readCustomParameters",null),e([y$1({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],_.prototype,"customLayerParameters",void 0),e([y$1({type:M$1,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],_.prototype,"fullExtent",void 0),e([y$1({readOnly:!0})],_.prototype,"fullExtents",null),e([y$1({type:["WebTiledLayer"]})],_.prototype,"operationalLayerType",void 0),e([y$1()],_.prototype,"resourceInfo",void 0),e([y$1()],_.prototype,"serviceMode",void 0),e([e$1(["portal-item","web-document"],"serviceMode",["templateUrl"])],_.prototype,"readServiceMode",null),e([y$1({type:L$1.ofType(h$1)})],_.prototype,"sublayers",void 0),e([e$1("service","sublayers",["layers"])],_.prototype,"readSublayersFromService",null),e([y$1({readOnly:!0})],_.prototype,"supportedSpatialReferences",null),e([y$1({json:{read:{source:"title"}}})],_.prototype,"title",null),e([y$1({json:{read:!1},readOnly:!0,value:"wmts"})],_.prototype,"type",void 0),e([y$1({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],_.prototype,"url",null),e([y$1()],_.prototype,"version",void 0),_=e([i$1("esri.layers.WMTSLayer")],_);var R=_;

export default R;
