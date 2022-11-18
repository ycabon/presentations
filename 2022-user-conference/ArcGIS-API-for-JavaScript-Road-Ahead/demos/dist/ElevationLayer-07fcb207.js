import { mC as p, my as c, mD as v, mz as O, nb as n, k8 as w$1, m as r, E as s$1, c1 as w$2, U, mh as I, aB as f, u as e, y, mH as o, mX as v$1, mY as f$1, z as n$1, eb as b } from './_virtual_index-1ea2035a.js';
import { s } from './ArcGISCachedService-f86b71aa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let j=class extends(s(p(c(v(O(b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=w$1(this._lercDecoder);}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$1("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(w$2).then((()=>this._fetchImageService(r$1)))),Promise.resolve(this)}fetchTile(e,t,o,s){const a=r((s=s||{signal:null}).signal)?s.signal:s.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},p={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,s))).then((()=>U(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,p,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo?.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=I({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-c4ed647d.js');f(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-c4ed647d.js');f(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await U(this.parsedUrl.path,t);o.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([y({json:{read:{source:"copyrightText"}}})],j.prototype,"copyright",void 0),e([y({readOnly:!0,type:v$1})],j.prototype,"heightModelInfo",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],j.prototype,"path",void 0),e([y({type:["show","hide"]})],j.prototype,"listMode",void 0),e([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],j.prototype,"minScale",void 0),e([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],j.prototype,"maxScale",void 0),e([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],j.prototype,"opacity",void 0),e([y({type:["ArcGISTiledElevationServiceLayer"]})],j.prototype,"operationalLayerType",void 0),e([y()],j.prototype,"sourceJSON",void 0),e([y({json:{read:!1},value:"elevation",readOnly:!0})],j.prototype,"type",void 0),e([y(f$1)],j.prototype,"url",void 0),e([y()],j.prototype,"version",void 0),e([o("version",["currentVersion"])],j.prototype,"readVersion",null),j=e([n$1("esri.layers.ElevationLayer")],j),j.prototype.fetchTile.__isDefault__=!0;const w=j;

export { w as default };