import { e, y as y$1, z, cB as x$1, i as i$1, cn as a$1, cm as e$1, E as E$1, h6 as r, h7 as u$1, aW as y$2, al as w, s as s$1, fr as t$1, fu as o, ft as s$2, cu as l$1, cv as d$1, cw as l$2, cA as b, aw as u$2, U, cq as t$2, L, a as s$3, cr as U$1, bq as o$1 } from './index.js';
import { a as a$2, E as E$2 } from './WebTileLayer-22edd2aa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let l=p=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null;}clone(){const t=new p;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};e([y$1({type:z,json:{read:{source:"fullExtent"}}})],l.prototype,"fullExtent",void 0),e([y$1({type:String,json:{read:{source:"id"}}})],l.prototype,"id",void 0),e([y$1({type:x$1,json:{read:{source:"tileInfo"}}})],l.prototype,"tileInfo",void 0),l=p=e([i$1("esri.layer.support.TileMatrixSet")],l);var n=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t;let i=t=class extends a$1{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null;}clone(){const r=new t;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};e([y$1({json:{read:{source:"id"}}})],i.prototype,"id",void 0),e([y$1({json:{read:{source:"title"}}})],i.prototype,"title",void 0),e([y$1({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),e([y$1({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),e([y$1({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),e([y$1({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=t=e([i$1("esri.layer.support.WMTSStyle")],i);var p$1=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p$2;let m=p$2=class extends a$1{constructor(t){super(t),this.fullExtent=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null;}get description(){return this._get("description")}set description(t){this._set("description",t);}readFullExtent(t,e){return (t=e.fullExtent)?z.fromJSON(t):null}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.indexOf("image/")>-1||e&&-1===e.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),e&&-1===e.indexOf(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t);}get styleId(){let t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t}set styleId(t){this._set("styleId",t);}get title(){return this._get("title")}set title(t){this._set("title",t);}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new p$2;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};e([y$1()],m.prototype,"description",null),e([y$1()],m.prototype,"fullExtent",void 0),e([e$1("fullExtent",["fullExtent"])],m.prototype,"readFullExtent",null),e([y$1({dependsOn:["imageFormats"]})],m.prototype,"imageFormat",null),e([y$1({json:{read:{source:"formats"}}})],m.prototype,"imageFormats",void 0),e([y$1()],m.prototype,"id",void 0),e([y$1()],m.prototype,"layer",void 0),e([y$1({dependsOn:["styles"]})],m.prototype,"styleId",null),e([y$1({type:E$1.ofType(p$1),json:{read:{source:"styles"}}})],m.prototype,"styles",void 0),e([y$1({value:null,json:{write:{ignoreOrigin:!0}}})],m.prototype,"title",null),e([y$1()],m.prototype,"tileMatrixSetId",void 0),e([y$1({readOnly:!0,dependsOn:["tileMatrixSetId"]})],m.prototype,"tileMatrixSet",null),e([y$1({type:E$1.ofType(n),json:{read:{source:"tileMatrixSets"}}})],m.prototype,"tileMatrixSets",void 0),m=p$2=e([i$1("esri.layers.support.WMTSSublayer")],m);var h=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function a(t,l){t=t.replace(/ows:/gi,"");const a=(new DOMParser).parseFromString(t,"text/xml").documentElement,p=new Map,d=new Map,g=c("Contents",a);if(!g)throw new s$1("wmtslayer:wmts-capabilities-xml-is-not-valid");const x=c("OperationsMetadata",a),y=x&&x.querySelector("[name='GetTile']"),T=y&&y.getElementsByTagName("Get"),w$1=T&&Array.prototype.slice.call(T),M=l&&l.url&&l.url.indexOf("https")>-1;let E,S,V=l.serviceMode,b=l&&l.url;if(w$1&&w$1.length&&w$1.some((e=>{const t=c("Constraint",e);return !t||f("AllowedValues","Value",V,t)?(b=e.attributes[0].nodeValue,!0):(!t||f("AllowedValues","Value","RESTful",t)||f("AllowedValues","Value","REST",t)?S=e.attributes[0].nodeValue:t&&!f("AllowedValues","Value","KVP",t)||(E=e.attributes[0].nodeValue),!1)})),!b)if(S)b=S,V="RESTful";else if(E)b=E,V="KVP";else {const e=c("ServiceMetadataURL",a);b=e&&e.getAttribute("xlink:href");}const A=b.indexOf("1.0.0/");-1===A&&"RESTful"===V?b+="/":A>-1&&(b=b.substring(0,A)),"KVP"===V&&(b+=A>-1?"":"?"),M&&(b=b.replace(/^http:/i,"https:"));return {copyright:m$1("ServiceIdentification>AccessConstraints",a),layers:Array.prototype.slice.call(g.getElementsByTagName("Layer")).map((e=>{const t=m$1("Identifier",e);return p.set(t,e),function(e,t,l,a){const p=m$1("Abstract",t),d=u("Format",t),g=function(e){const t=c("WGS84BoundingBox",e),i=t?m$1("LowerCorner",t).split(" "):["-180","-90"],n=t?m$1("UpperCorner",t).split(" "):["180","90"];return {xmin:parseFloat(i[0]),ymin:parseFloat(i[1]),xmax:parseFloat(n[0]),ymax:parseFloat(n[1]),spatialReference:{wkid:4326}}}(t),x=function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map((e=>{const i=c("LegendURL",e),n=c("Keywords",e),r=n&&u("Keyword",n);let l=i&&i.getAttribute("xlink:href");t&&(l=l&&l.replace(/^http:/i,"https:"));return {abstract:m$1("Abstract",e),id:m$1("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:l,title:m$1("Title",e)}}))}(t,a),y=m$1("Title",t),T=function(e,t){return u("TileMatrixSet",e).map((l=>function(e,t,l){const a=u("TileMatrix",f("TileMatrixSetLink","TileMatrixSet",e,t)),p=f("TileMatrixSet","Identifier",e,l),d=function(e){let t=m$1("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let l=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,l=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,l=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,l=!0);const o=new y$2({wkid:r}),a=m$1("TopLeftCorner",c("TileMatrix",e)).split(" "),p=a[0].split("E").map((e=>Number(e))),u=a[1].split("E").map((e=>Number(e)));let f,d=p[0],g=u[0];p.length>1&&(d=p[0]*Math.pow(10,p[1]));u.length>1&&(g=u[0]*Math.pow(10,u[1]));const x=l&&4326===r&&90===d&&-180===g;return s.some(((e,i)=>{const a=Number(t.split(":").pop());return a>=e[0]&&a<=e[1]||4326===r&&(!l||x)?(f=new w(g,d,o),!0):(i===s.length-1&&(f=new w(d,g,o)),!1)})),f}(p),g=d.spatialReference,x=g.wkid,y=c("TileMatrix",p),T=[parseInt(m$1("TileWidth",y),10),parseInt(m$1("TileHeight",y),10)],w$1=[];if(a.length)a.forEach(((t,i)=>{const n=f("TileMatrix","Identifier",t,p);w$1.push(h$1(n,x,i,e));}));else {Array.prototype.slice.call(p.getElementsByTagName("TileMatrix")).forEach(((t,i)=>{w$1.push(h$1(t,x,i,e));}));}const M=function(e,t,i,n){const l=c("BoundingBox",e);let o,s,a,p,u,f;l&&(o=m$1("LowerCorner",l).split(" "),s=m$1("UpperCorner",l).split(" "));if(o&&o.length>1&&s&&s.length>1)a=parseFloat(o[0]),u=parseFloat(o[1]),p=parseFloat(s[0]),f=parseFloat(s[1]);else {const r=c("TileMatrix",e),l=parseFloat(m$1("MatrixWidth",r)),o=parseFloat(m$1("MatrixHeight",r));a=t.x,f=t.y,p=a+l*i[0]*n.resolution,u=f-o*i[1]*n.resolution;}return new z(a,u,p,f,t.spatialReference)}(p,d,T,w$1[0]);return {id:e,fullExtent:M.toJSON(),tileInfo:new x$1({dpi:96,spatialReference:g,size:T,origin:d,lods:w$1}).toJSON()}}(l,e,t)))}(t,l);return {id:e,fullExtent:g,description:p,formats:d,styles:x,title:y,tileMatrixSets:T}}(t,e,g,M)})),tileUrl:b,serviceMode:V,layerMap:p,dimensionMap:d}}function p$3(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((i=>{i.scale=96*i.scale/t.dpi,i.resolution=y(t.spatialReference.wkid,90.71428571428571*i.scale/96,e.id);})),t.dpi=96);}));})),e}function c(e,t){const i=t.getElementsByTagName(e);return i&&i.length>0?i[0]:null}function u(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map((e=>e.textContent))}function m$1(e,t){return e.split(">").forEach((e=>{t&&(t=c(e,t));})),t&&t.textContent}function f(e,t,i,n){let r;return Array.prototype.slice.call(n.childNodes).some((n=>{if(n.nodeName.indexOf(e)>-1){const e=c(t,n),l=e&&e.textContent;if(l===i||i.split(":")&&i.split(":")[1]===l)return r=n,!0}return !1})),r}function d(e,t){const i=[],n=e.layerMap.get(t);if(!n)return;const r=Array.prototype.slice.call(n.getElementsByTagName("ResourceURL")),l=n.getElementsByTagName("Dimension");let o,s,a,p;return l.length&&(o=m$1("Identifier",l[0]),s=u("Default",l[0])||u("Value",l[0])),l.length>1&&(a=m$1("Identifier",l[1]),p=u("Default",l[1])||u("Value",l[1])),e.dimensionMap.set(t,{dimensions:s,dimensions2:p}),r.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&s.length)if(t.indexOf("{"+o+"}")>-1)t=t.replace("{"+o+"}","{dimensionValue}");else {const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2));}if(a&&p.length)if(t.indexOf("{"+a+"}")>-1)t=t.replace("{"+a+"}","{dimensionValue2}");else {const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2));}i.push({template:t,format:e.getAttribute("format"),resourceType:"tile"});}})),i}function g(e,t,i,n,r,l,o,s){const{dimensionMap:a}=e,p=d(e,t),c=a.get(t).dimensions&&a.get(t).dimensions[0],u=a.get(t).dimensions2&&a.get(t).dimensions2[0];let m="";if(p&&p.length>0){let e=null;p.some((t=>t.format===n&&(e=t,!0))),e||(e=p[o%p.length]),m=e.template.replace(/\{Style\}/gi,r).replace(/\{TileMatrixSet\}/gi,i).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+o).replace(/\{TileCol\}/gi,""+s).replace(/\{dimensionValue\}/gi,c).replace(/\{dimensionValue2\}/gi,u);}return m}function x(e,t,i,n){const{dimensionMap:r}=e,l=d(e,t);let o="";if(l&&l.length>0){const e=r.get(t).dimensions&&r.get(t).dimensions[0],s=r.get(t).dimensions2&&r.get(t).dimensions2[0];o=l[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,o.length-4)),o=o.replace(/\{Style\}/gi,n),o=o.replace(/\{TileMatrixSet\}/gi,i),o=o.replace(/\{TileMatrix\}/gi,"{level}"),o=o.replace(/\{TileRow\}/gi,"{row}"),o=o.replace(/\{TileCol\}/gi,"{col}"),o=o.replace(/\{dimensionValue\}/gi,e),o=o.replace(/\{dimensionValue2\}/gi,s);}return o}function h$1(e,t,i,n){const r=m$1("Identifier",e),l=m$1("ScaleDenominator",e).split("E").map((e=>Number(e)));let o;o=l.length>1?l[0]*Math.pow(10,l[1]):l[0];const s=y(t,o,n);return o*=1.058267716535433,{level:i,levelValue:r,scale:o,resolution:s}}function y(e,i,n){let r$1;return r$1=r.hasOwnProperty(String(e))?r.values[r[e]]:"default028mm"===n?6370997*Math.PI/180:u$1(e).metersPerDegree,7*i/25e3/r$1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const E={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},_=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let O=class extends(t$1(o(s$2(l$1(d$1(l$2(b))))))){constructor(...e){super(...e),this._sublayersHandles=new u$2,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.watch("activeLayer",((e,t)=>{t&&(t.layer=null),e&&(e.layer=this);}),!0),this.watch("sublayers",((e,t)=>{t&&(t.forEach((e=>{e.layer=null;})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.layer=this;})),this._sublayersHandles||(this._sublayersHandles=new u$2),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.layer=this;})),e.on("after-remove",(({item:e})=>{e.layer=null;}))]));}),!0);}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new s$1("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),U(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'");}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e);}readActiveLayerFromService(e,t,r){let s;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(s=e,!0))):(this.activeLayer=new h,s=t.layers[0]),this.activeLayer.read(s,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:s}=t,i=r?this._getLowerCasedUrlParams(r):null,a=s&&s.layerIdentifier;let o=null;const l=s&&s.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=i&&i.format,m=i&&i.style;return new h({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t,s,i){const a=this.activeLayer;t.templateUrl=this.getUrlTemplate(a.id,a.tileMatrixSetId,a.imageFormat,a.styleId);const o=t$2("tileMatrixSet.tileInfo",a);t.tileInfo=o?o.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:a.id,tileMatrixSet:a.tileMatrixSetId};}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent);})),e}readServiceMode(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new h;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}get title(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"}set title(e){e?this._override("title",e):this._clearOverride("title");}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e);}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,s=e.fullExtent,i=new a$2({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(i.customLayerParameters=this.customLayerParameters),this.customParameters&&(i.customParameters=this.customParameters),new E$2({fullExtent:s,urlTemplate:t,tileInfo:r,wmtsInfo:i})}fetchTile(e,t,r){const s=this.getTileUrl(e,t,r);return L(s,{responseType:"image"}).then((e=>e.data))}findSublayerById(e){return this.sublayers.find((t=>t.id===e))}getTileUrl(e,t,r){const s=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],i=s?s.levelValue?s.levelValue:`${s.level}`:`${e}`;let a=this.resourceInfo?"":g({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,i,t,r);if(!a){a=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,i).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`);}return a=this._appendCustomLayerParameters(a),a}getUrlTemplate(e,t,r,s){if(!this.resourceInfo){const r=x({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,s);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+s+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let i="";return E[r.toLowerCase()]&&(i=E[r.toLowerCase()]),this.url+e+"/"+s+"/"+t+"/{level}/{row}/{col}"+i}return ""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e);}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r;}catch(e){throw new s$1("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=p$3(t.data):t.data=a(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"});}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await L(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))}_appendCustomParameters(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e}_appendCustomLayerParameters(e){if(this.customLayerParameters||this.customParameters){const r={...s$3(this.customParameters||{}),...this.customLayerParameters};for(const t in r)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(r[t]);}return e}_getCapabilitiesUrl(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t}_getLowerCasedUrlParams(e){if(!e)return null;const t=U$1(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e];})),r}_mergeParams(e,r){const s=this._getLowerCasedUrlParams(r);if(s){const r=Object.keys(s);r.length&&(e=e?s$3(e):{},r.forEach((t=>{e.hasOwnProperty(t)||_.has(t)||(e[t]=s[t]);})));}return e}};e([y$1()],O.prototype,"dimensionMap",void 0),e([y$1()],O.prototype,"layerMap",void 0),e([y$1({type:h,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],O.prototype,"activeLayer",null),e([e$1("service","activeLayer",["layers"])],O.prototype,"readActiveLayerFromService",null),e([e$1(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],O.prototype,"readActiveLayerFromItemOrWebDoc",null),e([o$1(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:x$1},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],O.prototype,"writeActiveLayer",null),e([y$1({type:String,value:"",json:{write:!0}})],O.prototype,"copyright",void 0),e([y$1({type:["show","hide"]})],O.prototype,"listMode",void 0),e([y$1({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],O.prototype,"customParameters",void 0),e([e$1("web-document","customParameters"),e$1("portal-item","customParameters")],O.prototype,"readCustomParameters",null),e([y$1({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],O.prototype,"customLayerParameters",void 0),e([y$1({type:z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],O.prototype,"fullExtent",void 0),e([y$1({readOnly:!0,dependsOn:["activeLayer"]})],O.prototype,"fullExtents",null),e([y$1({type:["WebTiledLayer"]})],O.prototype,"operationalLayerType",void 0),e([y$1()],O.prototype,"resourceInfo",void 0),e([y$1()],O.prototype,"serviceMode",void 0),e([e$1(["portal-item","web-document"],"serviceMode",["templateUrl"])],O.prototype,"readServiceMode",null),e([y$1({type:E$1.ofType(h)})],O.prototype,"sublayers",void 0),e([e$1("service","sublayers",["layers"])],O.prototype,"readSublayersFromService",null),e([y$1({readOnly:!0,dependsOn:["activeLayer"]})],O.prototype,"supportedSpatialReferences",null),e([y$1({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],O.prototype,"title",null),e([y$1({json:{read:!1},readOnly:!0,value:"wmts"})],O.prototype,"type",void 0),e([y$1({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],O.prototype,"url",null),e([y$1()],O.prototype,"version",void 0),O=e([i$1("esri.layers.WMTSLayer")],O);var C=O;

export default C;
