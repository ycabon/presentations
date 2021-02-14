import { L as L$1, cC as d, s, a as s$1, x as i, cD as i$1, e, y, cE as i$2, i as i$3, M as p, aw as u, bG as t, a6 as d$1, O, U, h, R as d$2, T as m, W as T, a$ as a, cF as g, X as j, cx as C } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40;}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let i=0;i<t.length;i++){const e=i%8;t[i]?(l=!1,n[r]|=1<<e):a=!1,7===e&&++r;}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length);}static fromDefinition(t,o){const r=t.service.request||L$1,{row:s$1,col:h,width:c,height:m}=t,d$1={query:{f:"json"}};return o=o?{...d$1,...o}:d$1,r(n(t),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return {location:{top:s$1,left:h,width:c,height:m},valid:!0,data:d(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s$1||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new s("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s$1,left:h,width:c,height:m}});return l.fromJSON(t)}))}static fromJSON(i){l.validateJSON(i);const e=new l;return e.location=Object.freeze(s$1(i.location)),e._updateFromData(i.data),Object.freeze(e)}static validateJSON(t){if(!t||!t.location)throw new s("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new s("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new s("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new s("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new s("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function o(t){return `${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else {const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;}const e=t.service.query;return e&&(i=`${i}?${e}`),i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var z;const A=i.getLogger("esri.layers.support.TilemapCache");let L=z=class extends p{constructor(e){super(e),this._handles=new u,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=L$1,this._prefetchingEnabled=!0;}initialize(){this._tilemapCache=new t(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),d$1(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition();}destroy(){this._handles&&(this._handles.destroy(),this._handles=null);}castLevels(e){return e<=2?(A.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l$1){if(!this._availableLevels[e])return O(new s("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,r);if(a)return U(a);const o$1=l$1&&l$1.signal;return l$1={...l$1,signal:null},h(((e,t)=>{d$2(o$1,(()=>t(m())));const i=o(r);let s=this._pendingTilemapRequests[i];if(!s){s=l.fromDefinition(r,l$1).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e);}s.then(e,t);}))}getAvailability(e,t,i){if(!this._availableLevels[e])return "unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,l){l.level=e,l.row=t,l.col=i;const r=this.layer.tileInfo;for(r.updateTileInfo(l);;){const e=this.getAvailability(l.level,l.row,l.col);if("unavailable"!==e)return e;if(!r.upsampleTile(l))return "unavailable"}}fetchAvailability(e,t,i,l$1){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l$1).catch((e=>e)).then((l$1=>{if(l$1 instanceof l){const r=l$1.getAvailability(t,i);return "unavailable"===r?O(new s("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(T(l$1))throw l$1;return "unknown"})):O(new s("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,l,r){l.level=e,l.row=t,l.col=i;const s=this.layer.tileInfo;s.updateTileInfo(l);const a=this.fetchAvailability(e,t,i,r).catch((e=>{if(T(e))throw e;if(s.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,r,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,r,s){if(!this._prefetchingEnabled)return;const a$1=`prefetch-${e}`;if(this._handles.has(a$1))return;const o=a();s.then((()=>o.abort()),(()=>o.abort()));let n=!1;const h={remove(){n||(n=!0,o.abort());}};if(this._handles.add(h,a$1),await g(10,o.signal).catch((()=>{})),n||(n=!0,this._handles.remove(a$1)),j(o))return;const c={id:e,level:t,row:i,col:l},p={...r,signal:o.signal},m=this.layer.tileInfo;for(let e=0;z._prefetches.length<z._maxPrefetch&&m.upsampleTile(c);++e){const e=this.fetchAvailability(c.level,c.row,c.col,p);z._prefetches.push(e);const t=()=>{z._prefetches.removeUnordered(e);};e.then(t,t);}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?C(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0};}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const r=o(l);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0));}get test(){const e=this;return {get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t;},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};L._maxPrefetch=4,L._prefetches=new i$1({initialSize:z._maxPrefetch}),e([y({constructOnly:!0,type:Number})],L.prototype,"levels",void 0),e([i$2("levels")],L.prototype,"castLevels",null),e([y({readOnly:!0,dependsOn:["levels"],type:Number})],L.prototype,"size",null),e([y({constructOnly:!0,type:Number})],L.prototype,"cacheByteSize",void 0),e([y({constructOnly:!0})],L.prototype,"layer",void 0),e([y({constructOnly:!0})],L.prototype,"request",void 0),L=z=e([i$3("esri.layers.support.TilemapCache")],L);

export { L };
