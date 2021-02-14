import { fr as t, ft as s, fu as o, cu as l, cv as d, ct as p, cw as l$1, J as a$1, fv as e, cA as b, u as u$1, U, aW as y, cr as U$1, L, cx as C, h, s as s$1, dj as p$1, f7 as v, f_ as f$1, O, d5 as T, e as e$1, y as y$1, cm as e$2, bq as o$1, cE as i, cz as p$2, i as i$1 } from './index.js';
import { a } from './ArcGISCachedService-2f93f23d.js';
import { f, u, H } from './SublayersOwner-de17784c.js';
import './serviceTileInfoProperty-1eaff548.js';
import './TilemapCache-0d65488c.js';
import './sublayerUtils-1c37287c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const M=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let N=class extends(t(f(s(o(l(d(a(u(p(l$1(a$1(e(b))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const t=u$1(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),U(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&y.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const o=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),i=[],a={writeSublayerStructure:!1,...s};o.forEach((e=>{const r=e.write({},a);i.push(r);}));i.some((e=>Object.keys(e).length>1))&&(r.layers=i);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>U$1(e).path)):null}fetchTile(e,r,t,s={}){const{signal:o,timestamp:i}=s,a=this.getTileUrl(e,r,t),l={responseType:"image",signal:o};return null!=i&&(l.query={_ts:s.timestamp}),L(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,o=C({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters}),i=this.tileServers;return `${i&&i.length?i[r%i.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}_fetchService(e){return h(((t,s)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s$1("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new s$1("tile-layer:undefined-url","layer's url is not defined");const o=p$1(this.parsedUrl.path);if(u$1(o)&&"ImageServer"===o.serverType)throw new s$1("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");L(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,s);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!v(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!f$1(e))return O();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return L(t,{query:{f:"json",...this.customParameters},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s$1("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=M.length;t<s;t++)if(r=M[t],r.toLowerCase().indexOf(e)>-1)return T("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}};e$1([y$1({readOnly:!0,dependsOn:["parsedUrl"]})],N.prototype,"attributionDataUrl",null),e$1([y$1({type:["show","hide","hide-children"]})],N.prototype,"listMode",void 0),e$1([y$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],N.prototype,"isReference",void 0),e$1([y$1({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],N.prototype,"operationalLayerType",void 0),e$1([y$1({type:Boolean})],N.prototype,"resampling",void 0),e$1([y$1()],N.prototype,"sourceJSON",void 0),e$1([y$1({type:y})],N.prototype,"spatialReference",void 0),e$1([e$2("spatialReference",["spatialReference","tileInfo"])],N.prototype,"readSpatialReference",null),e$1([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),e$1([y$1({readOnly:!0})],N.prototype,"sublayers",void 0),e$1([o$1("sublayers",{layers:{type:[H]}})],N.prototype,"writeSublayers",null),e$1([y$1({json:{read:!1,write:!1}})],N.prototype,"popupEnabled",void 0),e$1([y$1({dependsOn:["parsedUrl"]})],N.prototype,"tileServers",null),e$1([i("tileServers")],N.prototype,"castTileServers",null),e$1([y$1({readOnly:!0,json:{read:!1}})],N.prototype,"type",void 0),e$1([y$1(p$2)],N.prototype,"url",void 0),N=e$1([i$1("esri.layers.TileLayer")],N);var P=N;

export default P;
