import { mg as O$2, B as e, C as d$1, w as w$1, e5 as S$1, D as n$1, dm as l$2, eG as o$1, j, mh as r, mi as s, s as s$1, b1 as b$1, r as r$1, kk as a, km as n$2, kl as t, f4 as c$1, f5 as w$2, f6 as O$3, fa as b$2, be as t$1, aP as l$3, ea as U$1, bE as w$3, dx as t$2, h as L$1, y as y$1, z as j$1, du as I$1, cy as r$2 } from './_virtual_index-4b72c57d.js';
import { p as p$4, x as x$1 } from './WebTileLayer-1118ee2d.js';
import { o as o$3 } from './crsUtils-79de1412.js';
import { o as o$2 } from './xmlUtils-37ff00c9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class l$1{constructor(i,l=0,a=i.lods.length-1){this.tileInfo=i,this.minLOD=l,this.maxLOD=a;}getAvailability(i,l,a){const t=this.tileInfo.lodAt(i);return !t||i<this.minLOD||i>this.maxLOD?"unavailable":t.cols&&t.rows?a>=t.cols[0]&&a<=t.cols[1]&&l>=t.rows[0]&&l<=t.rows[1]?"available":"unavailable":"available"}async fetchAvailability(l,a,t,e){return await O$2(e),this.getAvailability(l,a,t)}async fetchAvailabilityUpsample(l,a,t,e,s){await O$2(s),e.level=l,e.row=a,e.col=t;const o=this.tileInfo;for(o.updateTileInfo(e);;){const i=this.getAvailability(e.level,e.row,e.col);if("unavailable"!==i)return i;if(!o.upsampleTile(e))return "unavailable"}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var l;let n=l=class extends l$2{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null;}clone(){const t=new l;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};e([d$1({type:w$1,json:{read:{source:"fullExtent"}}})],n.prototype,"fullExtent",void 0),e([d$1({type:String,json:{read:{source:"id"}}})],n.prototype,"id",void 0),e([d$1({type:S$1,json:{read:{source:"tileInfo"}}})],n.prototype,"tileInfo",void 0),n=l=e([n$1("esri.layer.support.TileMatrixSet")],n);const p$3=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var o;let i=o=class extends l$2{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null;}clone(){const r=new o;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};e([d$1({json:{read:{source:"id"}}})],i.prototype,"id",void 0),e([d$1({json:{read:{source:"title"}}})],i.prototype,"title",void 0),e([d$1({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),e([d$1({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),e([d$1({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),e([d$1({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=o=e([n$1("esri.layer.support.WMTSStyle")],i);const p$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p$1;let h$1=p$1=class extends l$2{constructor(t){super(t),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null;}get description(){return this._get("description")}set description(t){this._set("description",t);}readFullExtent(t,e){return (t=e.fullExtent)?w$1.fromJSON(t):null}readFullExtents(t,e){return e.fullExtents?.length?e.fullExtents.map((t=>w$1.fromJSON(t))):e.tileMatrixSets.map((t=>w$1.fromJSON(t.fullExtent))).filter((t=>t))}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.includes("image/")||e&&!e.includes(t))&&(t.includes("image/")||(t="image/"+t),e&&!e.includes(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t);}get styleId(){let t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t}set styleId(t){this._set("styleId",t);}get title(){return this._get("title")}set title(t){this._set("title",t);}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new p$1;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};e([d$1()],h$1.prototype,"description",null),e([d$1()],h$1.prototype,"fullExtent",void 0),e([o$1("fullExtent",["fullExtent"])],h$1.prototype,"readFullExtent",null),e([d$1({readOnly:!0})],h$1.prototype,"fullExtents",void 0),e([o$1("fullExtents",["fullExtents","tileMatrixSets"])],h$1.prototype,"readFullExtents",null),e([d$1()],h$1.prototype,"imageFormat",null),e([d$1({json:{read:{source:"formats"}}})],h$1.prototype,"imageFormats",void 0),e([d$1()],h$1.prototype,"id",void 0),e([d$1()],h$1.prototype,"layer",void 0),e([d$1()],h$1.prototype,"styleId",null),e([d$1({type:j.ofType(p$2),json:{read:{source:"styles"}}})],h$1.prototype,"styles",void 0),e([d$1({value:null,json:{write:{ignoreOrigin:!0}}})],h$1.prototype,"title",null),e([d$1()],h$1.prototype,"tileMatrixSetId",void 0),e([d$1({readOnly:!0})],h$1.prototype,"tileMatrixSet",null),e([d$1({type:j.ofType(p$3),json:{read:{source:"tileMatrixSets"}}})],h$1.prototype,"tileMatrixSets",void 0),h$1=p$1=e([n$1("esri.layers.support.WMTSSublayer")],h$1);const m$1=h$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c=90.71428571428571;function u(t){const n=t.replace(/ows:/gi,"");if(!m("Contents",(new DOMParser).parseFromString(n,"text/xml").documentElement))throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:t})}function p(t,n){t=t.replace(/ows:/gi,"");const i=(new DOMParser).parseFromString(t,"text/xml").documentElement,r=new Map,o=new Map,l=m("Contents",i);if(!l)throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid");const s=m("OperationsMetadata",i)?.querySelector("[name='GetTile']"),a=s?.getElementsByTagName("Get"),c=a&&Array.prototype.slice.call(a),u=n?.url?.indexOf("https")>-1??!1;let p,f,d=n.serviceMode,x=n&&n.url;if(c&&c.length&&c.some((e=>{const t=m("Constraint",e);return !t||w("AllowedValues","Value",d,t)?(x=e.attributes[0].nodeValue,!0):(!t||w("AllowedValues","Value","RESTful",t)||w("AllowedValues","Value","REST",t)?f=e.attributes[0].nodeValue:t&&!w("AllowedValues","Value","KVP",t)||(p=e.attributes[0].nodeValue),!1)})),!x)if(f)x=f,d="RESTful";else if(p)x=p,d="KVP";else {const e=m("ServiceMetadataURL",i);x=e&&e.getAttribute("xlink:href");}const M=x.indexOf("1.0.0/");-1===M&&"RESTful"===d?x+="/":M>-1&&(x=x.substring(0,M)),"KVP"===d&&(x+=M>-1?"":"?"),u&&(x=x.replace(/^http:/i,"https:"));const T=h("ServiceIdentification>ServiceTypeVersion",i),y=h("ServiceIdentification>AccessConstraints",i),S=/^none$/i.test(y)?null:y,R=g("Layer",l),V=g("TileMatrixSet",l),b=R.map((e=>{const t=h("Identifier",e);return r.set(t,e),C(t,e,V,u,T)}));return {copyright:S,dimensionMap:o,layerMap:r,layers:b,serviceMode:d,tileUrl:x}}function f(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((n=>{n.scale=96*n.scale/t.dpi,n.resolution=U(t.spatialReference.wkid,n.scale*c/96,e.id);})),t.dpi=96);}));})),e}function d(e){return e.nodeType===Node.ELEMENT_NODE}function m(e,t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(d(i)&&i.nodeName===e)return i}return null}function g(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];d(r)&&r.nodeName===e&&n.push(r);}return n}function x(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];d(r)&&r.nodeName===e&&n.push(r);}return n.map((e=>e.textContent))}function h(e,t){return e.split(">").forEach((e=>{t&&(t=m(e,t));})),t&&t.textContent}function w(e,t,n,i){let r;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=m(t,i),o=e&&e.textContent;if(o===n||n.split(":")&&n.split(":")[1]===o)return r=i,!0}return !1})),r}function C(e,t,n,i,r){const o=h("Abstract",t),l=x("Format",t);return {id:e,fullExtent:R(t),fullExtents:V$1(t),description:o,formats:l,styles:b(t,i),title:h("Title",t),tileMatrixSets:E(r,t,n)}}function M(e,t){const n=[],i=e.layerMap?.get(t);if(!i)return;const r=g("ResourceURL",i),o=g("Dimension",i);let l,s,a,c;return o.length&&(l=h("Identifier",o[0]),s=x("Default",o[0])||x("Value",o[0])),o.length>1&&(a=h("Identifier",o[1]),c=x("Default",o[1])||x("Value",o[1])),e.dimensionMap.set(t,{dimensions:s,dimensions2:c}),r.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(l&&s.length)if(t.includes("{"+l+"}"))t=t.replace("{"+l+"}","{dimensionValue}");else {const e=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+l.length+2));}if(a&&c.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue2}");else {const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2));}n.push({template:t,format:e.getAttribute("format"),resourceType:"tile"});}})),n}function T(e,t,n,i,r,o,l,s){const a=y(e,t,i);if(!(a?.length>0))return "";const{dimensionMap:c}=e,u=c.get(t).dimensions?.[0],p=c.get(t).dimensions2?.[0];return a[l%a.length].template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,n).replace(/\{TileMatrix\}/gi,o).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,p)}function y(e,t,n){const i=M(e,t),r=i.filter((e=>e.format===n));return r.length?r:i}function S(e,t,n,i){const{dimensionMap:r}=e,o=M(e,t);let l="";if(o&&o.length>0){const e=r.get(t).dimensions&&r.get(t).dimensions[0],s=r.get(t).dimensions2&&r.get(t).dimensions2[0];l=o[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,n),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,e),l=l.replace(/\{dimensionValue2\}/gi,s);}return l}function R(e){const t=m("WGS84BoundingBox",e),n=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return {xmin:parseFloat(n[0]),ymin:parseFloat(n[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function V$1(e){const t=[];return o$2(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const n=e.getAttribute("crs").toLowerCase(),i=I(n),r=n.includes("epsg")&&o$3(i.wkid);let o,a,c,u;o$2(e,{LowerCorner:e=>{[o,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([o,a]=[a,o]);},UpperCorner:e=>{[c,u]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([c,u]=[u,c]);}}),t.push({xmin:o,ymin:a,xmax:c,ymax:u,spatialReference:i});}}),t}function b(e,t){return g("Style",e).map((e=>{const n=m("LegendURL",e),i=m("Keywords",e),r=i&&x("Keyword",i);let o=n&&n.getAttribute("xlink:href");t&&(o=o&&o.replace(/^http:/i,"https:"));return {abstract:h("Abstract",e),id:h("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:o,title:h("Title",e)}}))}function E(e,t,n){return g("TileMatrixSetLink",t).map((t=>L(e,t,n)))}function L(e,t,n){const i=m("TileMatrixSet",t).textContent,r=x("TileMatrix",t),o=n.find((e=>{const t=m("Identifier",e),n=t&&t.textContent;return !!(n===i||i.split(":")&&i.split(":")[1]===n)})),l=m("TileMatrixSetLimits",t),s=l&&g("TileMatrixLimits",l),c=new Map;if(s?.length)for(const a of s){const e=m("TileMatrix",a).textContent,t=+m("MinTileRow",a).textContent,n=+m("MaxTileRow",a).textContent,i=+m("MinTileCol",a).textContent,r=+m("MaxTileCol",a).textContent;c.set(e,{minCol:i,maxCol:r,minRow:t,maxRow:n});}const u=h("SupportedCRS",o).toLowerCase(),p=N(o,u),f=p.spatialReference,d=m("TileMatrix",o),C=[parseInt(h("TileWidth",d),10),parseInt(h("TileHeight",d),10)],M=[];if(r.length)r.forEach(((e,t)=>{const n=w("TileMatrix","Identifier",e,o);M.push(D(n,u,t,i,c));}));else {g("TileMatrix",o).forEach(((e,t)=>{M.push(D(e,u,t,i,c));}));}const T=F$1(e,o,p,C,M[0]).toJSON(),y=new S$1({dpi:96,spatialReference:f,size:C,origin:p,lods:M}).toJSON();return {id:i,fullExtent:T,tileInfo:y}}function I(e){e=e.toLowerCase();let n=parseInt(e.split(":").pop(),10);900913!==n&&3857!==n||(n=102100);const i=k(e);return r$1(i)&&(n=i),{wkid:n}}function N(e,t){return A$1(m("TileMatrix",e),t)}function A$1(e,t){const n=I(t),[r,o]=h("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),s=t.includes("epsg")&&o$3(n.wkid);return new b$1(s?{x:o,y:r,spatialReference:n}:{x:r,y:o,spatialReference:n})}function F$1(e,t,i,r,o){const l=m("BoundingBox",t);let s,a,c,u,p,f;if(l&&(s=h("LowerCorner",l).split(" "),a=h("UpperCorner",l).split(" ")),s&&s.length>1&&a&&a.length>1)c=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(a[0]),f=parseFloat(a[1]);else {const e=m("TileMatrix",t),n=parseInt(h("MatrixWidth",e),10),l=parseInt(h("MatrixHeight",e),10);c=i.x,f=i.y,u=c+n*r[0]*o.resolution,p=f-l*r[1]*o.resolution;}return v(e,i.spatialReference)?new w$1(p,c,f,u,i.spatialReference):new w$1(c,p,u,f,i.spatialReference)}function v(e,t){return "1.0.0"===e&&o$3(t.wkid)}var O$1;function k(e){return e.includes("crs84")||e.includes("crs:84")?O$1.CRS84:e.includes("crs83")||e.includes("crs:83")?O$1.CRS83:e.includes("crs27")||e.includes("crs:27")?O$1.CRS27:null}function D(e,t,n,i,r){const o=I(t),l=h("Identifier",e);let s=parseFloat(h("ScaleDenominator",e));const a=U(o.wkid,s,i);s*=96/c;const u=+h("MatrixWidth",e),p=+h("MatrixHeight",e),{maxCol:f=u-1,maxRow:d=p-1,minCol:m=0,minRow:g=0}=r.get(l)??{},{x,y:w}=A$1(e,t);return {cols:[m,f],level:n,levelValue:l,origin:[x,w],scale:s,resolution:a,rows:[g,d]}}function U(e,t,n){let i;return i=r.hasOwnProperty(""+e)?r.values[r[e]]:"default028mm"===n?6370997*Math.PI/180:s(e).metersPerDegree,7*t/25e3/i}!function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27";}(O$1||(O$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const O={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},W=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let A=class extends(a(n$2(t(c$1(w$2(O$3(b$2))))))){constructor(...e){super(...e),this._sublayersHandles=new t$1,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([l$3((()=>this.activeLayer),((e,t)=>{t&&(t.layer=null),e&&(e.layer=this);}),U$1),l$3((()=>this.sublayers),((e,t)=>{t&&(t.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this;})),this._sublayersHandles||(this._sublayersHandles=new t$1),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this;})),e.on("after-remove",(({item:e})=>{e.layer=null;}))]));}),U$1)]);}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(w$3).then((()=>this._fetchService(e))).catch((e=>{throw w$3(e),new s$1("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'");}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e);}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new m$1);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i?.layerIdentifier;let o=null;const l=i?.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=s?.format,m=s?.style;return new m$1({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=t$2("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId};}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return F(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return new l$1(e)}get title(){return this.activeLayer?.title??"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title");}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e);}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,s=new p$4({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new x$1({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}fetchTile(e,r,i){const s=this.getTileUrl(e,r,i);return L$1(s,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let a=this.resourceInfo?"":T({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);if(!a){a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`);}return a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=S({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return O[r.toLowerCase()]&&(s=O[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return ""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),u(t.data);}catch{const s="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(s,e),u(t.data),this.serviceMode=s;}catch(r){throw new s$1("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=f(t.data):t.data=p(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"});}async _getCapabilities(e,r){const i=this._getCapabilitiesUrl(e);return await L$1(i,{...r,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...y$1(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=j$1(e),i={...r.query,...t},s=I$1(i);return ""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=this.url.split("?")[0];const t="KVP"===e?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=j$1(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e];})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?y$1(e):{},t.forEach((t=>{e.hasOwnProperty(t)||W.has(t)||(e[t]=r[t]);})));}return e}};function F(e,t){return e.map((e=>{const r=new m$1;return r.read(e,t),r}))}e([d$1()],A.prototype,"dimensionMap",void 0),e([d$1()],A.prototype,"layerMap",void 0),e([d$1({type:m$1,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],A.prototype,"activeLayer",null),e([o$1("service","activeLayer",["layers"])],A.prototype,"readActiveLayerFromService",null),e([o$1(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],A.prototype,"readActiveLayerFromItemOrWebDoc",null),e([r$2(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:S$1},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],A.prototype,"writeActiveLayer",null),e([d$1({type:String,value:"",json:{write:!0}})],A.prototype,"copyright",void 0),e([d$1({type:["show","hide"]})],A.prototype,"listMode",void 0),e([d$1({json:{read:!0,write:!0}})],A.prototype,"blendMode",void 0),e([d$1({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],A.prototype,"customParameters",void 0),e([o$1(["portal-item","web-document"],"customParameters")],A.prototype,"readCustomParameters",null),e([d$1({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],A.prototype,"customLayerParameters",void 0),e([d$1({type:w$1,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],A.prototype,"fullExtent",void 0),e([d$1({readOnly:!0})],A.prototype,"fullExtents",null),e([d$1({type:["WebTiledLayer"]})],A.prototype,"operationalLayerType",void 0),e([d$1()],A.prototype,"resourceInfo",void 0),e([d$1()],A.prototype,"serviceMode",void 0),e([o$1(["portal-item","web-document"],"serviceMode",["templateUrl"])],A.prototype,"readServiceMode",null),e([d$1({type:j.ofType(m$1)})],A.prototype,"sublayers",void 0),e([o$1("service","sublayers",["layers"])],A.prototype,"readSublayersFromService",null),e([d$1({readOnly:!0})],A.prototype,"supportedSpatialReferences",null),e([d$1({readOnly:!0})],A.prototype,"tilemapCache",null),e([d$1({json:{read:{source:"title"}}})],A.prototype,"title",null),e([d$1({json:{read:!1},readOnly:!0,value:"wmts"})],A.prototype,"type",void 0),e([d$1({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],A.prototype,"url",null),e([d$1()],A.prototype,"version",void 0),A=e([n$1("esri.layers.WMTSLayer")],A);const V=A;

export { V as default };
