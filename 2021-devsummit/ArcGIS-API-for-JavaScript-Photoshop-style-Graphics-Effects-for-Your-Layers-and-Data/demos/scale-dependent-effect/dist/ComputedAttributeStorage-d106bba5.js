import { c as e, ak as t$1, bC as z, bD as o, bE as a$1, I as i$1, w as t$2, bF as l$1, bG as D$1, bH as ee, bI as J, bJ as Q, bK as ge, bL as ie, i as i$3, aK as a$2, bM as y, t as t$3, r as f, aQ as G, a as u, T, h as s$1, U as U$1, bx as h$1, by as y$1, bN as N$1, br as d$1, bu as f$1, d as e$1 } from './index.js';
import { i as i$2 } from './quantizationUtils-6bdc869a.js';
import { n as n$1 } from './FeatureSetReader-955e7708.js';
import { N, O, K, c, J as J$1 } from './definitions-6994070a.js';
import { H } from './Utils-663f8528.js';
import { n as n$2, l as l$2, r as r$1 } from './CircularArray-be7a7775.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class l{constructor(e$1,t){this.key=new e(0,0,0,0),this.bounds=t$1(),this.objectIds=new Set,this.key.set(t);const s=e$1.getLODInfoAt(this.key);this.tileInfoView=e$1,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.scale=s.scale,this.level=s.level,this.needsClear=!0;}get id(){return this.key.id}get extent(){return z.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return {originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}get bbox(){const e=this.bounds;return {minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}clone(){return new l(this.tileInfoView,this.key)}createChildTiles(){const t=this.key.getChildKeys(),i=o.acquire();for(let e=0;e<t.length;e++)i[e]=new l(this.tileInfoView,t[e]);return i}getQuantizationParameters(){return a$1.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const h={added:[],removed:[]},r=new Set,d=new e(0,0,0,0);class L extends i$1{constructor(t){super(),this._tiles=new Map,this._index=i$2(9,t$2("csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=t;}destroy(){this.clear();}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear();}has(e){return this._tiles.has(e)}get(e){return this._tiles.get(e)}findByKey(e){return this._tiles.get(e.id)}intersections(e,t){const s="string"==typeof e?this.get(e):e;if(!s)return [];const i=t*s.resolution,o=s.bounds[0]-i,n=s.bounds[1]-i,h=s.bounds[2]+i,r=s.bounds[3]+i,d=[];for(const e of this._index.search({minX:o,minY:n,maxX:h,maxY:r})){const t=e.bounds.slice();t[0]=Math.max(t[0],o),t[1]=Math.max(t[1],n),t[2]=Math.min(t[2],h),t[3]=Math.min(t[3],r),t[2]-t[0]>0&&t[3]-t[1]>0&&d.push({bounds:t,tile:e});}return d}boundsIntersections(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})}updateTiles(e){const t={added:[],removed:[]};for(const s of e.added)if(!this.has(s)){const e=new l(this.tileScheme,s);this._tiles.set(s,e),this._index.insert(e),t.added.push(e);}for(const s of e.removed)if(this.has(s)){const e=this.get(s);this._tiles.delete(s),this._index.remove(e),t.removed.push(e);}this.tiles.length=0,this._tiles.forEach((e=>this.tiles.push(e))),(t.added.length||t.removed.length)&&this.emit("update",t);}setViewState(e){const t=this.tileScheme.getTileCoverage(e,0);if(!t)return;const{spans:s,lodInfo:o}=t,{level:l$2}=o;if(s.length>0)for(const{row:e,colFrom:t,colTo:i}of s)for(let s=t;s<=i;s++){const t=d.set(l$2,e,o.normalizeCol(s),o.getWorldForColumn(s)).id;if(r.add(t),!this.has(t)){const e=new l(this.tileScheme,t);this._tiles.set(t,e),this._index.insert(e),this.tiles.push(e),h.added.push(e);}}for(let e=this.tiles.length-1;e>=0;e--){const t=this.tiles[e];r.has(t.id)||(this._tiles.delete(t.id),this.tiles.splice(e,1),this._index.remove(t),h.removed.push(t));}(h.added.length||h.removed.length)&&this.emit("update",h),l$1.pool.release(t),r.clear(),h.added.length=0,h.removed.length=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a extends n$1{constructor(t,e,r){super(t),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=r,this._features=e;}static fromFeatures(e,r,s){const i=D$1([],e,r,!1,!1,s);for(let t=0;t<i.length;t++)i[t].displayId=e[t].displayId;return a.fromOptimizedFeatures(i,r)}static fromFeatureSet(t,r){const s=ee(t,r);return a.fromOptimizedFeatureSet(s)}static fromOptimizedFeatureSet(t){const{features:e,geometryType:r}=t,s=a.fromOptimizedFeatures(e,r);s._exceededTransferLimit=t.exceededTransferLimit,s._transform=t.transform;for(const e of t.fields)"esriFieldTypeDate"===e.type&&s._dateFields.add(e.name);return s}static fromOptimizedFeatures(t,e,r){const s=n$1.createInstance(),i=new a(s,t,e);return i._transform=r,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return !!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return !1}get hasM(){return !1}getApproximateSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t;}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t;}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t;}copy(){const t=new a(this.instance,this._features,this.geometryType);return this.copyInto(t),t}next(){if(!this._hasFilter)return ++this._featureIndex<this._features.length;for(;++this._featureIndex<this._features.length&&!this._passesFilter(););return this._featureIndex<this._features.length}readLegacyFeature(){return J(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){const t=this.readGeometry();return t?{x:t.coords[0],y:t.coords[1]}:null}readLegacyGeometry(){const t=this.readGeometry();return Q(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return t?{x:t.coords[0],y:t.coords[1]}:null}readGeometryArea(){return ge(this._current.geometry,2)}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function({coords:t,lengths:e}){let r=0;for(const s of e){for(let e=1;e<s;e++)t[2*(r+e)]+=t[2*(r+e)-2],t[2*(r+e)+1]+=t[2*(r+e)-1];r+=s;}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if(!t)return null;const e=t.clone();return ie(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrate(){const t=this._current.geometry.coords[0]+this._tx,e=this.getQuantizationTransform();return t*e.scale[0]+e.translate[0]}getYHydrate(){const t=this._current.geometry.coords[1]+this._ty,e=this.getQuantizationTransform();return e.translate[1]-t*e.scale[1]}readGeometry(){if(!this._current.hasGeometry)return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]+=this._tx,t.coords[1]+=this._ty,t;let e=0;for(const r of t.lengths)t.coords[2*e]+=this._tx,t.coords[2*e+1]+=this._ty,e+=r;return t}readCentroid(){if(!this._current.hasGeometry)return null;if(!this._current.centroid){const t=this._computeCentroid();if(!t)return null;t.coords[0]-=this._tx,t.coords[1]-=this._ty,this._current.centroid=t;}const t=this._current.centroid.clone();return t.coords[0]+=this._tx,t.coords[1]+=this._ty,t}_readAttribute(t,e){const r=this._current.attributes[t];if(void 0!==r)return e&&this._dateFields.has(t)?new Date(r):r;const s=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const t in s)if(t.toLocaleLowerCase().trim()===i){const e=this._current.attributes[t];return this._dateFields.has(t)?new Date(e):e}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields;}_readAttributes(){return this._current.attributes}_passesFilter(){if(!this._hasFilter)return !0;let t=0,e=0;switch(this.geometryType){case"esriGeometryPoint":{const r=this._current.geometry;if(!r)return !1;[t,e]=r.coords;break}case"esriGeometryPolygon":{const r=this.readCentroid();if(!r)return !1;[t,e]=r.coords,t-=this._tx,e-=this._ty;break}default:return !1}return t>=this._xmin&&t<=this._xmax&&e>=this._ymin&&e<=this._ymax}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const k=i$3.getLogger("esri.views.layers.2d.features.support.AttributeStore"),D=n$2(l$2,k),U=t=>(2147483648&t)>>>31,R=t=>2147483647&t;function C(t){return 1===U(t)}const M={sharedArrayBuffer:t$2("esri-shared-array-buffer"),atomics:t$2("esri-atomics")};function B(t,e){return i=>e(t(i))}class v{constructor(t,e,i,s){this.size=0,this.texelSize=4;const{pixelType:r,layout:a,textureOnly:o}=s;this.textureOnly=o||!1,this.pixelType=r,this._ctype=e,this.layout=a,this._resetRange(),this._shared=t,this.size=i,o||(this.data=this._initData(r,i,t,e));}get buffer(){return d$1(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const i=f$1(this.data);for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1;}setComponentAllTexels(t,e){const i=f$1(this.data);for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1;}setComponent(t,e,i){const s=f$1(this.data);for(const r of i)s[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r);}setComponentTexel(t,e,i){f$1(this.data)[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i);}unsetComponentTexel(t,e,i){f$1(this.data)[i*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i);}getData(t,e){const i=R(t);return f$1(this.data)[i*this.texelSize+e]}setData(t,e,i){const s=R(t),r=1<<e;0!=(this.layout&r)?(this.data[s*this.texelSize+e]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)):k.error("mapview-attributes-store","Tried to set a value for a texel's readonly component");}lock(){5121===this.pixelType&&this._shared&&M.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1);}unlock(){5121===this.pixelType&&this._shared&&M.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0);}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),i=f$1(this.data);e.set(i),this.data=e;}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,i=this.texelSize;if(t>e)return null;this._resetRange();const s=!(this._shared||"local"===this._ctype),r=this.pixelType,a=this.layout,n=f$1(this.data);if(!n.slice){if(!s)return {start:t,end:e,data:null,pixelType:r,layout:a};return {start:t,end:e,data:new(H(this.pixelType))(Array.prototype.slice.call(this.data,t*i,(e+1)*i)),pixelType:r,layout:a}}return {start:t,end:e,data:s&&n.slice(t*i,(e+1)*i)||null,pixelType:r,layout:a}}_initData(t,e,i,s){const r=i&&"local"!==s?SharedArrayBuffer:ArrayBuffer,a=H(t),o=new a(new r(e*e*4*a.BYTES_PER_ELEMENT));for(let t=0;t<o.length;t+=4)o[t+1]=255;return o}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}}class k$1{constructor(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(N),this._targetType=0,this._abortController=a$2(),this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const i=e.supportsTextureFloat?5126:5121;D(`Creating AttributeStore ${M.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:i,layout:15},{pixelType:i,layout:15}],this._blocks=this._blockDescriptors.map((()=>null));}destroy(){this._abortController.abort();}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}update(i,s){this.config=s;const r=s.schema.processors[0].storage,a=y(this._schema,r);if((i.targets.feature||i.targets.aggregate)&&(i.storage.data=!0),a&&(t$2("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",a),i.storage.data=!0,this._schema=r,this._attributeComputeMap.clear(),!t$3(r))){switch(r.target){case"feature":this._targetType=0;break;case"aggregate":this._targetType=1;}for(const t of r.mapping)this._bindAttribute(t);}}onTileData(t,i){if(t$3(i.addOrUpdate))return;const s=i.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s);}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=a$2();}async setHighlight(t,e){const i=this._getBlock(0),s=e.map((t=>R(t)));i.lock(),i.unsetComponentAllTexels(0,1),i.setComponent(0,1,s),i.unlock(),this._idsToHighlight.clear();for(const e of t)this._idsToHighlight.add(e);await this.sendUpdates();}async updateFilters(e,i){const{config:s,service:r,spatialReference:a}=i,{filters:o}=s,n=o.map(((t,e)=>this._updateFilter(t,e,r,a)));(await f(n)).some((t=>t))&&(e.storage.filters=!0,t$2("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"));}setData(t,e,i,s){const r=R(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,i,s);}getData(t,e,i){return this._getBlock(e).getData(t,i)}getHighlightFlag(t){return this._idsToHighlight.has(t)?O:0}unsetAttributeData(t){const e=R(t);this._getBlock(0).setData(e,0,0);}setAttributeData(t,e){const i=R(t);if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(e)),this._targetType!==U(t))return;const s=this._attributeComputeMap,r=this.config.supportsTextureFloat?1:2;s.size&&s.forEach(((t,s)=>{const a=s*r%4,o=Math.floor(s*r/4),n=this._getBlock(o+K),l=t(e);if(this.config.supportsTextureFloat)n.setData(i,a,l);else if(l===c)n.setData(i,a,255),n.setData(i,a+1,255);else {const t=e$1(Math.round(l),-32767,32766)+32768,e=255&t,s=(65280&t)>>8;n.setData(i,a,e),n.setData(i,a+1,s);}}));}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=G(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>u(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()));}},i=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),i})).catch((t=>T(t)?(this._createResourcesPromise=null,this._createResources()):(k.error(new s$1("mapview-attribute-store","Encountered an error during client update",t)),U$1()))),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&k.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else {if(!t.field)return;e=t.normalizationField?e=>{const i=e.readAttribute(t.normalizationField);return i?e.readAttribute(t.field)/i:null}:e=>e.readAttribute(t.field);}if(t.valueRepresentation){e=B(e,(e=>r$1(e,t.valueRepresentation)));}this._attributeComputeMap.set(t.binding,B(e,(t=>null===t||isNaN(t)||t===1/0?c:t)));}_createResources(){if(u(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(J$1),D("Initializing AttributeStore");const t={shared:M.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:h$1(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},r=this._client.initialize(t,this._signal).catch((t=>{T(t)?this._createResourcesPromise=null:k.error(new s$1("mapview-attribute-store","Encountered an error during client initialization",t));}));return this._createResourcesPromise=r,r.then((()=>t$3(this._createResourcesPromise)?this._createResources():void 0)),r}_getBlock(t){const e=this._blocks[t];if(u(e))return e;D(`Initializing AttributeBlock at index ${t}`);const s=M.sharedArrayBuffer,r=this._client.type,a=new v(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=a,this._createResourcesPromise=null,a}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return D("Expanding block size to",t,this._blocks),y$1(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return k.error(new s$1("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,s,r,a){const o=this._filters[s],n=u(o)&&o.hash;if(!o&&!t)return !1;if(n===JSON.stringify(t))return !1;if(t$3(t)){const t=1<<s+1,e=this._getBlock(0);return this._filters[s]=null,e.setComponentAllTexels(0,t),this.sendUpdates(),!0}const l=await this._getFilter(s,r);return await l.update(t,a),!0}async _getFilter(t,e){const s=this._filters[t];if(u(s))return s;const{default:r}=await import('./FeatureFilter-81fb5062.js'),a=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new N$1(e.fields)});return this._filters[t]=a,a}isVisible(t){return !!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let i=0;const s=(r=t.getDisplayId(),1===U(r)?254:255);var r;for(let r=0;r<this._filters.length;r++){const a=!!(s&1<<r),o=this._filters[r];i|=(!a||t$3(o)||o.check(t)?1:0)<<r;}let a=0;if(this._idsToHighlight.size){const e=t.getObjectId();a=this.getHighlightFlag(e);}return i<<1|a}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{constructor(){this._freeIds=[],this._idCounter=1;}createId(e=!1){return function(e,t){return ((t?2147483648:0)|e)>>>0}(this._getFreeId(),e)}releaseId(e){this._freeIds.push(e);}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._mask=0,this._buf=t,this._mask=e;}static fromBuffer(e,s){return new t(e,s)}static create(e,s=4294967295){const h=new Uint32Array(Math.ceil(e/32));return new t(h,s)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return !!(this._buf[this._getIndex(e)]&1<<e%32)}set(t){const e=this._mask&t,s=this._getIndex(e),h=1<<e%32;this._buf[s]|=h;}unset(t){const e=this._mask&t,s=this._getIndex(e),h=1<<e%32;this._buf[s]&=4294967295^h;}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s;}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return !0;return !1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new t(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0;}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],h=32*e;if(s)for(;s;){1&s&&t(h),s>>>=1,h++;}}}countSet(){let t=0;return this.forEachSet((e=>{t++;})),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function s(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s);}class i{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new n,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[];}createBitset(){const t$1=this._bitsets.length;return this._bitsets.push(t.create(this._allocatedSize,2147483647)),t$1+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize);}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);s(this._numerics[t],e,0);}_ensureInstanceId(t){s(this._instanceIds,t,0);}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);s(this._strings[t],e,null);}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),((t,e)=>((e?2147483648:0)|t)>>>0)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(2147483647&t)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(2147483647&t,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(2147483647&t,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(2147483647&t,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(2147483647&t,0,s)}getComputedNumericAtIndex(t,e){const s=2147483647&t;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const i=2147483647&t;this._ensureNumeric(e,i),this._numerics[e][i]=s;}getInstanceId(t){const e=2147483647&t;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=2147483647&t;this._ensureInstanceId(s),this._instanceIds[s]=e;}getComputedStringAtIndex(t,e){const s=2147483647&t;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const i=2147483647&t;this._ensureString(e,i),this._strings[e][i]=s;}getXMin(t){return this._bounds[4*(2147483647&t)]}getYMin(t){return this._bounds[4*(2147483647&t)+1]}getXMax(t){return this._bounds[4*(2147483647&t)+2]}getYMax(t){return this._bounds[4*(2147483647&t)+3]}setBounds(t,e){const i=e.readHydratedGeometry();if(!i||!i.coords.length)return !1;let n=1/0,r=1/0,u=-1/0,h=-1/0;i.forEachVertex(((t,e)=>{n=Math.min(n,t),r=Math.min(r,e),u=Math.max(u,t),h=Math.max(h,e);}));const d=2147483647&t;return s(this._bounds,4*d+4,0),this._bounds[4*d]=n,this._bounds[4*d+1]=r,this._bounds[4*d+2]=u,this._bounds[4*d+3]=h,!0}}

export { C, L, a, i, k$1 as k, l };
