import { n as e, y, p as i$1, cn as a$1, aW as s, fl as t, fn as o, fm as s$1, dT as l, dU as d, dV as l$1, dY as b, bC as z, aF as y$1, cS as x, a4 as w, gH as i$2, dz as l$2, dy as $, h as s$2, U, gI as _, dC as z$1, L as L$1, gJ as r, dQ as e$1, ba as o$1 } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i;let p=i=class extends a$1{constructor(r){super(r);}clone(){return new i({customLayerParameters:s(this.customLayerParameters),customParameters:s(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};e([y({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),e([y({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),e([y({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),e([y({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),e([y({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=e([i$1("esri.layer.support.WMTSLayerInfo")],p);var a=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let L=class extends(t(o(s$1(l(d(l$1(b))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,y$1.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=y$1.WebMercator,this.subDomains=null,this.tileInfo=new x({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new w({x:-20037508.342787,y:20037508.342787,spatialReference:y$1.WebMercator}),spatialReference:y$1.WebMercator,lods:[new i$2({level:0,scale:591657527.591555,resolution:156543.033928}),new i$2({level:1,scale:295828763.795777,resolution:78271.5169639999}),new i$2({level:2,scale:147914381.897889,resolution:39135.7584820001}),new i$2({level:3,scale:73957190.948944,resolution:19567.8792409999}),new i$2({level:4,scale:36978595.474472,resolution:9783.93962049996}),new i$2({level:5,scale:18489297.737236,resolution:4891.96981024998}),new i$2({level:6,scale:9244648.868618,resolution:2445.98490512499}),new i$2({level:7,scale:4622324.434309,resolution:1222.99245256249}),new i$2({level:8,scale:2311162.217155,resolution:611.49622628138}),new i$2({level:9,scale:1155581.108577,resolution:305.748113140558}),new i$2({level:10,scale:577790.554289,resolution:152.874056570411}),new i$2({level:11,scale:288895.277144,resolution:76.4370282850732}),new i$2({level:12,scale:144447.638572,resolution:38.2185141425366}),new i$2({level:13,scale:72223.819286,resolution:19.1092570712683}),new i$2({level:14,scale:36111.909643,resolution:9.55462853563415}),new i$2({level:15,scale:18055.954822,resolution:4.77731426794937}),new i$2({level:16,scale:9027.977411,resolution:2.38865713397468}),new i$2({level:17,scale:4513.988705,resolution:1.19432856685505}),new i$2({level:18,scale:2256.994353,resolution:.597164283559817}),new i$2({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null;}normalizeCtorArgs(e,r){return "string"==typeof e?l$2({urlTemplate:e},r||{}):e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new $(this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property");}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s$2("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),U(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&y$1.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new $(t),o=l.scheme?l.scheme+"://":"//",s=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(s);else if(r&&r.length>0&&l.authority.split(".").length>1)for(const t of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new $(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&_(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=z$1(e)),t.templateUrl=e;}fetchTile(e,t,r,l={}){const{signal:o,timestamp:s}=l,i=this.getTileUrl(e,t,r),n={responseType:"image",signal:o};return null!=s&&(n.query={_ts:l.timestamp}),L$1(i,n).then((e=>e.data))}getTileUrl(e,t,l){const o=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+r(this.urlPath,{level:o,z:o,col:l,x:l,row:t,y:t})}};e([y({type:String,value:"",json:{write:!0}})],L.prototype,"copyright",void 0),e([y({type:z,json:{write:!0}})],L.prototype,"fullExtent",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],L.prototype,"listMode",void 0),e([y({dependsOn:["tileInfo"]})],L.prototype,"levelValues",null),e([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],L.prototype,"isReference",void 0),e([y({type:["WebTiledLayer"],value:"WebTiledLayer"})],L.prototype,"operationalLayerType",void 0),e([y({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"popupEnabled",void 0),e([y({type:y$1})],L.prototype,"spatialReference",void 0),e([e$1("spatialReference",["spatialReference","fullExtent.spatialReference"])],L.prototype,"readSpatialReference",null),e([y({type:[String],json:{write:!0}})],L.prototype,"subDomains",void 0),e([y({type:x,json:{write:!0}})],L.prototype,"tileInfo",void 0),e([y({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],L.prototype,"tileServers",null),e([y({json:{read:!1}})],L.prototype,"type",void 0),e([y({dependsOn:["urlTemplate"]})],L.prototype,"urlPath",null),e([y({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],L.prototype,"urlTemplate",void 0),e([e$1("urlTemplate",["urlTemplate","templateUrl"])],L.prototype,"readUrlTemplate",null),e([o$1("urlTemplate",{templateUrl:{type:String}})],L.prototype,"writeUrlTemplate",null),e([y({type:a,json:{write:!0}})],L.prototype,"wmtsInfo",void 0),L=e([i$1("esri.layers.WebTileLayer")],L);var E=L;

var WebTileLayer = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': E
});

export { E, WebTileLayer as W, a };
