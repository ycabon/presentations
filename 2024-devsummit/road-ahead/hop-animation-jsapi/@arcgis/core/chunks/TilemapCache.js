/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../request.js";import i from"../core/Accessor.js";import{B as a}from"./ByteSizeUnit.js";import l from"../core/Error.js";import{m as r}from"./handleUtils.js";import{L as s}from"./LRUCache.js";import{P as o,waitTicks as n}from"../core/scheduling.js";import{onAbort as h,createAbortError as c,isAbortError as m,isAborted as p}from"../core/promiseUtils.js";import{watch as f,initial as u}from"../core/reactiveUtils.js";import{objectToQuery as v}from"../core/urlUtils.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import{n as y,clone as w,m as b,A as g}from"../core/lang.js";import"./Logger.js";import{subclass as _}from"../core/accessorSupport/decorators/subclass.js";import{T}from"./TileKey.js";class A{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze(w(t));const a=this.location.width,l=this.location.height;let r=!0,s=!0;const o=function(e,t=!1){return e<=y?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(a*l/32));let n=0;for(let e=0;e<i.length;e++){const t=e%32;i[e]?(s=!1,o[n]|=1<<t):r=!1,31===t&&++n}s?(this._availability="unavailable",this.byteSize=40):r?(this._availability="available",this.byteSize=40):(this._availability=o,this.byteSize=40+b(o))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%32,l=i>>5,r=this._availability;return l<0||l>r.length?"unknown":r[l]&1<<a?"available":"unavailable"}static fromDefinition(e,i){const a=e.service.request||t,{row:r,col:s,width:o,height:n}=e,h={query:{f:"json"}};return i=i?{...h,...i}:h,a(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),i).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:s,width:o,height:n},valid:!0,data:g(o*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==s||e.location.width!==o||e.location.height!==n))throw new l("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:s,width:o,height:n}});return A.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new A(e))}_validateJSON(e){if(!e?.location)throw new l("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new l("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new l("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new l("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new l("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function O(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var D;let j=D=class extends i{constructor(e){super(e),this._pendingTilemapRequests={},this.request=t,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new s(2*a.MEGABYTES),this.addHandles([f((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),u)])}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new l("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,r);if(s)return Promise.resolve(s);const o=a?.signal;return a={...a,signal:null},new Promise(((e,t)=>{h(o,(()=>t(c())));const i=O(r);let l=this._pendingTilemapRequests[i];if(!l){l=A.fromDefinition(r,a).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new l("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,a).catch((e=>e)).then((a=>{if(a instanceof A){const r=a.getAvailability(t,i);if("unavailable"===r)throw new l("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}if(m(a))throw a;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const r=this.layer.tileInfo;r.updateTileInfo(a);const s=this.fetchAvailability(e,t,i,l).catch((e=>{if(m(e))throw e;if(r.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,l,s){if(!this._prefetchingEnabled||null==e)return;const o=`prefetch-${e}`;if(this.hasHandles(o))return;const h=new AbortController;s.then((()=>h.abort()),(()=>h.abort()));let c=!1;const m=r((()=>{c||(c=!0,h.abort())}));if(this.addHandles(m,o),await n(10,h.signal).catch((()=>{})),c||(c=!0,this.removeHandles(o)),p(h))return;const f=new T(e,t,i,a),u={...l,signal:h.signal},v=this.layer.tileInfo;for(let e=0;D._prefetches.length<D._maxPrefetch&&v.upsampleTile(f);++e){const e=this.fetchAvailability(f.level,f.row,f.col,u);D._prefetches.push(e);const t=()=>{D._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:v({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=O(a);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};j._maxPrefetch=4,j._prefetches=new o({initialSize:D._maxPrefetch}),e([d({constructOnly:!0})],j.prototype,"layer",void 0),e([d({constructOnly:!0})],j.prototype,"minLOD",void 0),e([d({constructOnly:!0})],j.prototype,"maxLOD",void 0),e([d({constructOnly:!0})],j.prototype,"request",void 0),e([d({constructOnly:!0})],j.prototype,"size",void 0),j=D=e([_("esri.layers.support.TilemapCache")],j);export{j as T};