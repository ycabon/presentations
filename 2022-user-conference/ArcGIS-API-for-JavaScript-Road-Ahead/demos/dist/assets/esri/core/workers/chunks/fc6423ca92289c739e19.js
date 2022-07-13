"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1938],{43090:(e,t,i)=>{function l(e){return 32+e.length}function s(e){if(!e)return 0;let t=32;for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];switch(typeof s){case"string":t+=l(s);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function r(e,t){return 32+e.length*t}var o;i.d(t,{Y8:()=>o,do:()=>r,f2:()=>s}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(o||(o={}))},16859:(e,t,i)=>{i.d(t,{I:()=>w});var l=i(43697),s=i(40330),r=i(3172),o=i(66643),a=i(20102),n=i(92604),h=i(70586),c=i(95330),p=i(17452),u=i(5600),d=(i(67676),i(80442),i(75215),i(71715)),f=i(52011),m=i(30556),v=i(65587),y=i(15235),g=i(86082);const w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new y.default({id:t.itemId,portal:i&&i.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const l=await i.e(8062).then(i.bind(i,18062));return(0,c.k_)(t),await l.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,c.D_)(e)||n.Z.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const i=b.credential===t?b.user:await this._fetchEditingUser(e);return b.credential=t,b.user=i,(0,h.Wi)(i)||null==i.privileges||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const i=s.id.findServerInfo(this.url);if(!i?.owningSystemUrl)return null;const l=`${i.owningSystemUrl}/sharing/rest`,a=v.Z.getDefault();if(a&&a.loaded&&(0,p.Fv)(a.restUrl)===(0,p.Fv)(l))return a.user;const n=`${l}/community/self`,c=(0,h.pC)(e)?e.signal:null,u=await(0,o.q6)((0,r.default)(n,{authMode:"no-prompt",query:{f:"json"},signal:c}));return u.ok?g.default.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const i=t&&t.portal,l=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||v.Z.getDefault());return i&&l&&!(0,p.tm)(l.restUrl,i.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,l._)([(0,u.Cb)({type:y.default})],t.prototype,"portalItem",null),(0,l._)([(0,d.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,l._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,l._)([(0,u.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,l._)([(0,f.j)("esri.layers.mixins.PortalLayer")],t),t},b={credential:null,user:null}},39450:(e,t,i)=>{i.d(t,{Z:()=>c});var l,s=i(43697),r=i(96674),o=i(5600),a=(i(67676),i(80442),i(75215)),n=i(52011);let h=l=class extends r.wq{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new l({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,s._)([(0,o.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"cols",void 0),(0,s._)([(0,o.Cb)({type:a.z8,json:{write:!0}})],h.prototype,"level",void 0),(0,s._)([(0,o.Cb)({type:String,json:{write:!0}})],h.prototype,"levelValue",void 0),(0,s._)([(0,o.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"origin",void 0),(0,s._)([(0,o.Cb)({type:Number,json:{write:!0}})],h.prototype,"resolution",void 0),(0,s._)([(0,o.Cb)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"rows",void 0),(0,s._)([(0,o.Cb)({type:Number,json:{write:!0}})],h.prototype,"scale",void 0),h=l=(0,s._)([(0,n.j)("esri.layers.support.LOD")],h);const c=h},11145:(e,t,i)=>{i.d(t,{Z:()=>z});var l,s=i(43697),r=i(35454),o=i(96674),a=i(70586),n=i(67900),h=i(5600),c=(i(67676),i(80442),i(75215)),p=i(71715),u=i(52011),d=i(30556),f=i(13473),m=i(82971),v=i(24470),y=i(8744),g=i(40488),w=i(39450),b=i(43077);const _=new r.X({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let S=l=class extends o.wq{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:i,size:s=256,spatialReference:r=m.Z.WebMercator,numLODs:o=24}=e;if(!(0,y.JY)(r)){const e=[];if(i)for(let t=0;t<i.length;t++){const l=i[t];e.push({level:t,scale:l,resolution:l})}else{let t=5e-4;for(let i=o-1;i>=0;i--)e.unshift({level:i,scale:t,resolution:t}),t*=2}return new l({dpi:96,lods:e,origin:new f.Z(0,0,r),size:[s,s],spatialReference:r})}const a=(0,y.C5)(r),h=e.origin?new f.Z({x:e.origin.x,y:e.origin.y,spatialReference:r}):new f.Z(a?{x:a.origin[0],y:a.origin[1],spatialReference:r}:{x:0,y:0,spatialReference:r}),c=1/(39.37*(0,n.c9)(r)*96),p=[];if(i)for(let e=0;e<i.length;e++){const t=i[e],l=t*c;p.push({level:e,scale:t,resolution:l})}else{let e=(0,y.sT)(r)?512/s*591657527.5917094:256/s*591657527.591555;const i=Math.ceil(o/t);p.push({level:0,scale:e,resolution:e*c});for(let l=1;l<i;l++){const i=e/2**t,s=i*c;p.push({level:l,scale:i,resolution:s}),e=i}}return new l({dpi:96,lods:p,origin:h,size:[s,s],spatialReference:r})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const i=(0,y.C5)(e);return e.isWrappable&&Math.abs(i.origin[0]-t.x)<=i.dx}return!1}readOrigin(e,t){return f.Z.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,i=0;const l=[];this._levelToLOD={},e&&(t=-1/0,i=1/0,e.forEach((e=>{l.push(e.scale),t=e.scale>t?e.scale:t,i=e.scale<i?e.scale:i,this._levelToLOD[e.level]=e}))),this._set("scales",l),this._set("minScale",t),this._set("maxScale",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const i=Math.floor(e),l=i+1;return t[i]/(t[i]/t[l])**(e-i)}scaleToZoom(e){const t=this.scales,i=t.length-1;let l=0;for(;l<i;l++){const i=t[l],s=t[l+1];if(i<=e)return l;if(s===e)return l+1;if(i>e&&s<e)return l+Math.log(i/e)/Math.log(i/s)}return l}snapScale(e,t=.95){const i=this.scaleToZoom(e);return i%Math.floor(i)>=t?this.zoomToScale(Math.ceil(i)):this.zoomToScale(Math.floor(i))}tileAt(e,t,i,l){const s=this.lodAt(e);if(!s)return null;let r,o;if("number"==typeof t)r=t,o=i;else if((0,y.fS)(t.spatialReference,this.spatialReference))r=t.x,o=t.y,l=i;else{const e=(0,g.iV)(t,this.spatialReference);if((0,a.Wi)(e))return null;r=e.x,o=e.y,l=i}const n=s.resolution*this.size[0],h=s.resolution*this.size[1];return l||(l=new b.f(null,0,0,0,(0,v.Ue)())),l.level=e,l.row=Math.floor((this.origin.y-o)/h+.001),l.col=Math.floor((r-this.origin.x)/n+.001),this.updateTileInfo(l),l}updateTileInfo(e,t=l.ExtrapolateOptions.NONE){let i=this.lodAt(e.level);if(!i&&t===l.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(i=t)}if(!i)return;const s=e.level-i.level,r=i.resolution*this.size[0]/2**s,o=i.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,v.Ue)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*o,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+o}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const{resolution:i}=this.lodAt(t.level),l=i*this.size[0],s=i*this.size[1];return e[0]=this.origin.x+t.col*l,e[1]=this.origin.y-(t.row+1)*s,e[2]=e[0]+l,e[3]=e[1]+s,e}lodAt(e){return this._levelToLOD&&this._levelToLOD[e]||null}clone(){return l.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;const i=[],s=this.lods.length;for(let e=0;e<s;e++){const l=this.lods[e],s=l.resolution*t;i.push(new w.Z({level:l.level,scale:l.scale,resolution:s}))}return new l({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:i})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let i=0;i<e.length;i++){const l=e[i];this._upsampleLevels[l.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/l.resolution:0},t=l}}};var O,T;(0,s._)([(0,h.Cb)({type:Number,json:{write:!0}})],S.prototype,"compressionQuality",void 0),(0,s._)([(0,h.Cb)({type:Number,json:{write:!0}})],S.prototype,"dpi",void 0),(0,s._)([(0,h.Cb)({type:String,json:{read:_.read,write:_.write,origins:{"web-scene":{read:!1,write:!1}}}})],S.prototype,"format",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],S.prototype,"isWrappable",null),(0,s._)([(0,h.Cb)({type:f.Z,json:{write:!0}})],S.prototype,"origin",void 0),(0,s._)([(0,p.r)("origin")],S.prototype,"readOrigin",null),(0,s._)([(0,h.Cb)({type:[w.Z],value:null,json:{write:!0}})],S.prototype,"lods",null),(0,s._)([(0,h.Cb)({readOnly:!0})],S.prototype,"minScale",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],S.prototype,"maxScale",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],S.prototype,"scales",void 0),(0,s._)([(0,h.Cb)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],S.prototype,"size",void 0),(0,s._)([(0,p.r)("size",["rows","cols"])],S.prototype,"readSize",null),(0,s._)([(0,d.c)("size",{cols:{type:c.z8},rows:{type:c.z8}})],S.prototype,"writeSize",null),(0,s._)([(0,h.Cb)({type:m.Z,json:{write:!0}})],S.prototype,"spatialReference",void 0),S=l=(0,s._)([(0,u.j)("esri.layers.support.TileInfo")],S),(T=(O=S||(S={})).ExtrapolateOptions||(O.ExtrapolateOptions={}))[T.NONE=0]="NONE",T[T.POWER_OF_TWO=1]="POWER_OF_TWO";const z=S},43077:(e,t,i)=>{i.d(t,{f:()=>l});class l{constructor(e,t,i,l,s){this.id=e,this.level=t,this.row=i,this.col=l,this.extent=s}}},56608:(e,t,i)=>{i.d(t,{y:()=>z});var l,s=i(43697),r=i(3172),o=i(15923),a=i(43090),n=i(20102),h=i(3920),c=i(92604),p=i(13867),u=i(44553),d=i(95330),f=i(17445),m=i(1654),v=i(17452),y=i(5600),g=i(67676),w=(i(80442),i(90578)),b=i(52011),_=i(43077),S=i(22974);class O{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%8,s=i>>3,r=this._tileAvailabilityBitSet;return s<0||s>r.length?"unknown":r[s]&1<<l?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let l=!0,s=!0;const r=Math.ceil(t*i/8),o=new Uint8Array(r);let a=0;for(let t=0;t<e.length;t++){const i=t%8;e[t]?(s=!1,o[a]|=1<<i):l=!1,7===i&&++a}s?this._allAvailability="unavailable":l?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=o,this.byteSize+=o.length)}static fromDefinition(e,t){const i=e.service.request||r.default,{row:l,col:s,width:o,height:a}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:s,width:o,height:a},valid:!0,data:(0,g.a9)(o*a,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==s||e.location.width!==o||e.location.height!==a))throw new n.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:s,width:o,height:a}});return O.fromJSON(e)}))}static fromJSON(e){O._validateJSON(e);const t=new O;return t.location=Object.freeze((0,S.d9)(e.location)),t._updateFromData(e.data),Object.freeze(t)}static _validateJSON(e){if(!e||!e.location)throw new n.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new n.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new n.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new n.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new n.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function T(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let z=l=class extends((0,h.p)(o.Z)){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2*a.Y8.MEGABYTES,this.request=r.default,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p.Z(this.cacheByteSize),this.addHandles([(0,f.YP)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition())),(0,f.YP)((()=>this.layer?.tileInfo?.lods),(e=>this._initializeAvailableLevels(e)),f.tX)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(c.Z.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l){if(!this._availableLevels[e])return Promise.reject(new n.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const s=this._tmpTilemapDefinition,r=this._tilemapFromCache(e,t,i,s);if(r)return Promise.resolve(r);const o=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,d.fu)(o,(()=>t((0,d.zE)())));const i=T(s);let r=this._pendingTilemapRequests[i];if(!r){r=O.fromDefinition(s,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof O){const s=l.getAvailability(t,i);if("unavailable"===s)throw new n.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}if((0,d.D_)(l))throw l;return"unknown"})):Promise.reject(new n.Z("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,l,s){l.level=e,l.row=t,l.col=i;const r=this.layer.tileInfo;r.updateTileInfo(l);const o=this.fetchAvailability(e,t,i,s).catch((e=>{if((0,d.D_)(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,s,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,i,s,r,o){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this.handles.has(a))return;const n=new AbortController;o.then((()=>n.abort()),(()=>n.abort()));let h=!1;const c={remove(){h||(h=!0,n.abort())}};if(this.handles.add(c,a),await(0,m.MU)(10,n.signal).catch((()=>{})),h||(h=!0,this.handles.remove(a)),(0,d.Hc)(n))return;const p=new _.f(e,t,i,s),u={...r,signal:n.signal},f=this.layer.tileInfo;for(let e=0;l._prefetches.length<l._maxPrefetch&&f.upsampleTile(p);++e){const e=this.fetchAvailability(p.level,p.row,p.col,u);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,v.B7)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const s=T(l);return this._tilemapCache.get(s)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};z._maxPrefetch=4,z._prefetches=new u.Z({initialSize:l._maxPrefetch}),(0,s._)([(0,y.Cb)({constructOnly:!0,type:Number})],z.prototype,"levels",void 0),(0,s._)([(0,w.p)("levels")],z.prototype,"castLevels",null),(0,s._)([(0,y.Cb)({readOnly:!0,type:Number})],z.prototype,"size",null),(0,s._)([(0,y.Cb)({constructOnly:!0,type:Number})],z.prototype,"cacheByteSize",void 0),(0,s._)([(0,y.Cb)({constructOnly:!0})],z.prototype,"layer",void 0),(0,s._)([(0,y.Cb)({constructOnly:!0})],z.prototype,"request",void 0),z=l=(0,s._)([(0,b.j)("esri.layers.support.TilemapCache")],z)},45322:(e,t,i)=>{i.d(t,{d:()=>r,h:()=>s});var l=i(11145);const s={type:l.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:r}}}}};function r(e,t,i,s){if(!e)return null;const{minScale:r,maxScale:o,minLOD:a,maxLOD:n}=t;if(null!=a&&null!=n)return s&&s.ignoreMinMaxLOD?l.Z.fromJSON(e):l.Z.fromJSON({...e,lods:e.lods.filter((({level:e})=>null!=e&&e>=a&&e<=n))});if(0!==r&&0!==o){const t=e=>Math.round(1e4*e)/1e4,i=r?t(r):1/0,s=o?t(o):-1/0;return l.Z.fromJSON({...e,lods:e.lods.filter((e=>{const l=t(e.scale);return l<=i&&l>=s}))})}return l.Z.fromJSON(e)}}}]);