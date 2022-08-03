import { mU as p, mV as c, mW as w$1, mX as O, mY as n, jm as p$1, r, s as s$1, c0 as w$2, h as L, lt as I, aB as f, B as e, C as d, mZ as v, m_ as f$1, mr as o, D as n$1, j$ as b } from './_virtual_index-9b831d4a.js';
import { s } from './ArcGISCachedService-d76be191.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let S=class extends(s(p(c(w$1(O(b)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=n();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=p$1(this._lercDecoder);}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$1("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(w$2).then((()=>this._fetchImageService(r$1)))),Promise.resolve(this)}fetchTile(e,t,o,s){const a=r((s=s||{signal:null}).signal)?s.signal:s.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:a},p={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,o,s))).then((()=>L(this.getTileUrl(e,t,o),l))).then((e=>this._lercDecoder.decode(e.data,p,a))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,r,t){const o=!this.tilemapCache&&this.supportsBlankTile,i=I({...this.parsedUrl.query,blankTile:!o&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-0edbd23a.js');f(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-0edbd23a.js');f(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},o=await L(this.parsedUrl.path,t);o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d({json:{read:{source:"copyrightText"}}})],S.prototype,"copyright",void 0),e([d({readOnly:!0,type:v})],S.prototype,"heightModelInfo",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],S.prototype,"path",void 0),e([d({type:["show","hide"]})],S.prototype,"listMode",void 0),e([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"minScale",void 0),e([d({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"maxScale",void 0),e([d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"opacity",void 0),e([d({type:["ArcGISTiledElevationServiceLayer"]})],S.prototype,"operationalLayerType",void 0),e([d()],S.prototype,"sourceJSON",void 0),e([d({json:{read:!1},value:"elevation",readOnly:!0})],S.prototype,"type",void 0),e([d(f$1)],S.prototype,"url",void 0),e([d()],S.prototype,"version",void 0),e([o("version",["currentVersion"])],S.prototype,"readVersion",null),S=e([n$1("esri.layers.ElevationLayer")],S),S.prototype.fetchTile.__isDefault__=!0;const w=S;

export { w as default };