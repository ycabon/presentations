import { a as e, d, n, i as l, bo as y, ne as a, ng as n$1, nf as t, jV as c, jW as w, jX as O, ij as b, eP as w$1, ba as k, ji as S, aw as b$1, n5 as p$1, y as y$1, s, op as ft, F, L, oq as n$2, iA as o, bY as r } from './_virtual_index-64b818a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var i;let p=i=class extends l{constructor(r){super(r);}clone(){return new i({customLayerParameters:y(this.customLayerParameters),customParameters:y(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};e([d({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),e([d({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),e([d({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=e([n("esri.layer.support.WMTSLayerInfo")],p);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let R=class extends(a(n$1(t(c(w(O(b))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new w$1(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,k.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=k.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new b$1({x:-20037508.342787,y:20037508.342787,spatialReference:k.WebMercator}),spatialReference:k.WebMercator,lods:[new p$1({level:0,scale:591657527.591555,resolution:156543.033928}),new p$1({level:1,scale:295828763.795777,resolution:78271.5169639999}),new p$1({level:2,scale:147914381.897889,resolution:39135.7584820001}),new p$1({level:3,scale:73957190.948944,resolution:19567.8792409999}),new p$1({level:4,scale:36978595.474472,resolution:9783.93962049996}),new p$1({level:5,scale:18489297.737236,resolution:4891.96981024998}),new p$1({level:6,scale:9244648.868618,resolution:2445.98490512499}),new p$1({level:7,scale:4622324.434309,resolution:1222.99245256249}),new p$1({level:8,scale:2311162.217155,resolution:611.49622628138}),new p$1({level:9,scale:1155581.108577,resolution:305.748113140558}),new p$1({level:10,scale:577790.554289,resolution:152.874056570411}),new p$1({level:11,scale:288895.277144,resolution:76.4370282850732}),new p$1({level:12,scale:144447.638572,resolution:38.2185141425366}),new p$1({level:13,scale:72223.819286,resolution:19.1092570712683}),new p$1({level:14,scale:36111.909643,resolution:9.55462853563415}),new p$1({level:15,scale:18055.954822,resolution:4.77731426794937}),new p$1({level:16,scale:9027.977411,resolution:2.38865713397468}),new p$1({level:17,scale:4513.988705,resolution:1.19432856685505}),new p$1({level:18,scale:2256.994353,resolution:.597164283559817}),new p$1({level:19,scale:1128.497176,resolution:.298582141647617}),new p$1({level:20,scale:564.248588,resolution:.14929107082380833}),new p$1({level:21,scale:282.124294,resolution:.07464553541190416}),new p$1({level:22,scale:141.062147,resolution:.03732276770595208}),new p$1({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null;}normalizeCtorArgs(e,t){return "string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new y$1(this.urlTemplate);!(!!this.subDomains&&this.subDomains.length>0)&&t.authority.includes("{subDomain}")&&(e="is missing 'subDomains' property");}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&k.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new y$1(t),o=l.scheme?l.scheme+"://":"//",i=o+l.authority+"/";if(l.authority.includes("{subDomain}")){if(r&&r.length>0&&l.authority.split(".").length>1)for(const s of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/");}else e.push(i);return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new y$1(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&ft(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=F(e)),t.templateUrl=e;}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return L(i,n).then((e=>e.data))}getTileUrl(e,t,r){const l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+n$2(this.urlPath,{level:l,z:l,col:r,x:r,row:t,y:t})}};e([d({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),e([d({type:w$1,json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),e([d({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],R.prototype,"listMode",void 0),e([d({json:{read:!0,write:!0}})],R.prototype,"blendMode",void 0),e([d()],R.prototype,"levelValues",null),e([d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),e([d({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),e([d({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),e([d({type:k})],R.prototype,"spatialReference",void 0),e([o("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),e([d({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),e([d({type:S,json:{write:!0}})],R.prototype,"tileInfo",void 0),e([d({readOnly:!0})],R.prototype,"tileServers",null),e([d({json:{read:!1}})],R.prototype,"type",void 0),e([d()],R.prototype,"urlPath",null),e([d({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),e([o("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),e([r("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),e([d({type:p,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=e([n("esri.layers.WebTileLayer")],R);const x=R;

var WebTileLayer = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': x
});

export { WebTileLayer as W, p, x };
