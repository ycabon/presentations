import { F as has, r as r$2, b as ne, T as d$2, t as t$1, aK as c$2, bl as t$2, cx as W, cy as ce, cz as ee, cA as e$1, cB as be, m as me, Z as s, cC as m$1, c7 as D, ar as j, s as s$1, cD as v$1, cE as A, cF as d$3, aJ as o, al as e$3, aT as o$1 } from './_virtual_index-a68dd1ed.js';
import { e } from './centroid-6ca6c7bb.js';
import { S, T, P, w as c$4, N, O } from './definitions-20a531fc.js';
import { c as c$3, u as u$1, f as f$1, e as e$2, i, n as n$1, l as l$1, r as r$3, s as s$2, a as n$2 } from './visualVariablesUtils-9ffa569b.js';
import { m as me$1 } from './Utils-13ecd570.js';
import { G } from './enums-fb707d37.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._mask=0,this._buf=t,this._mask=e;}static fromBuffer(e,s){return new t(e,s)}static create(e,s=4294967295){const r=new Uint32Array(Math.ceil(e/32));return new t(r,s)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return !!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return !0;s++;}for(;r%32&&s!==r;){if(this.has(s))return !0;r--;}if(s===r)return !1;for(let h=s/32;h!==r/32;h++){if(this._buf[h])return !0}return !1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r;}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let h=s/32;h!==r/32;h++)this._buf[h]=4294967295;}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r;}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s;}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return !0;return !1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new t(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0;}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;){1&s&&t(r),s>>>=1,r++;}}}countSet(){let t=0;return this.forEachSet((e=>{t++;})),t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let d$1=0;const h=has("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],u=h[0],l=h[1],c$1=h[2],m=h[3],g=has("featurelayer-simplify-payload-size-factors")??[1,2,4],_=g[0],y=g[1],p=g[2],f=has("featurelayer-simplify-mobile-factor")??2,I=has("esri-mobile");class x{constructor(e,t){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=e,this._layerSchema=t;}static createInstance(){return d$1++,d$1=d$1>65535?0:d$1,d$1}get isEmpty(){return r$2(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e;}getAreaSimplificationThreshold(e,t){let r=1;const s=I?f:1;t>4e6?r=p*s:t>1e6?r=y*s:t>5e5?r=_*s:t>1e5&&(r=s);let i=0;e>4e3?i=m*r:e>2e3?i=c$1*r:e>100?i=l:e>15&&(i=u);let o=8;return this._level<4?o=1:this._level<5?o=2:this._level<6&&(o=4),i*o}setArcadeSpatialReference(e){this._arcadeSpatialReference=e;}attachStorage(e){this._storage=e;}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t);}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,r,s){const i=this.copy();return i._tx+=e,i._ty+=t,i._sx*=r,i._sy*=s,i}readAttribute(e,t=!1){const r=this._readAttribute(e,t);if(void 0!==r)return r;for(const s of this._joined){s.setIndex(this.getIndex());const r=s._readAttribute(e,t);if(void 0!==r)return r}}readAttributes(){const e=this._readAttributes();for(const t of this._joined){t.setIndex(this.getIndex());const r=t._readAttributes();for(const t of Object.keys(r))e[t]=r[t];}return e}joinAttributes(e){this._joined.push(e);}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=ne(e,this.geometryType,this.hasZ,this.hasM),r=d$2(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}field(e){if(this.hasField(e))return this.readAttribute(e,!0);for(const t of this._joined)if(t.setIndex(this.getIndex()),t.hasField(e)){return t._readAttribute(e,!0)}throw new Error(`Field ${e} does not exist`)}setField(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.getFieldNames()}castToText(){return JSON.stringify(this.readLegacyFeature())}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(e=null){return {attributes:this._readAttributes(),geometry:!0===e?.keepGeometryType?this.geometry():this.geometry().toJSON()}}castAsJsonAsync(e=null,t=null){return Promise.resolve(this.castAsJson(t))}removeIds(e){if(t$1(this._objectIdToIndex)){const e=new Map,t=this.getCursor();for(;t.next();)e.set(t.getObjectId(),t.getIndex());this._objectIdToIndex=e;}const r=this._objectIdToIndex;for(const t of e)r.has(t)&&this.removeAtIndex(r.get(t));}removeAtIndex(e){t$1(this._deleted)&&(this._deleted=t.create(this.getSize())),this._deleted.set(e);}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor();for(;e.next();)yield e.readOptimizedFeature();}_getExists(){return t$1(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const e$1=this.readUnquantizedGeometry();if(!e$1||e$1.hasIndeterminateRingOrder)return null;const t=c$2(this.getQuantizationTransform(),null);return e(new t$2,e$1,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c({coords:t,lengths:e}){let r=0;for(const s of e){for(let e=1;e<s;e++)t[2*(r+e)]+=t[2*(r+e)-2],t[2*(r+e)+1]+=t[2*(r+e)-1];r+=s;}}class d extends x{constructor(t,e,r){super(t,r),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=r?.geometryType,this._features=e;}static fromFeatures(t,e){const{objectIdField:s,geometryType:i}=e,n=W([],t,i,!1,!1,s);for(let r=0;r<n.length;r++)n[r].displayId=t[r].displayId;return d.fromOptimizedFeatures(n,e)}static fromFeatureSet(t,e){const r=ce(t,e.objectIdField);return d.fromOptimizedFeatureSet(r,e)}static fromOptimizedFeatureSet(t,e){const{features:r}=t,s=d.fromOptimizedFeatures(r,e);s._exceededTransferLimit=t.exceededTransferLimit,s._transform=t.transform;for(const i of t.fields)"esriFieldTypeDate"===i.type&&s._dateFields.add(i.name);return s}static fromOptimizedFeatures(t,e,r){const s=x.createInstance(),i=new d(s,t,e);return i._transform=r,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return !!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return !1}get hasM(){return !1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)));}append(t){for(const e of t)this._features.push(e);}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t;}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t;}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t;}copy(){const t=new d(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return ee(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return ne(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const e=this.readCentroid();return t$1(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}readGeometryArea(){return e$1(this._current)?be(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return c(e),e}readHydratedGeometry(){const r=this._current.geometry;if(t$1(r))return null;const s=r.clone();return r$2(this._transform)&&me(s,s,this.hasZ,this.hasM,this._transform),s}getXHydrated(){if(!e$1(this._current))return 0;const e=this._current.geometry.coords[0],r=this.getQuantizationTransform();return t$1(r)?e:e*r.scale[0]+r.translate[0]}getYHydrated(){if(!e$1(this._current))return 0;const e=this._current.geometry.coords[1],r=this.getQuantizationTransform();return t$1(r)?e:r.translate[1]-e*r.scale[1]}getX(){return e$1(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return e$1(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!e$1(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const r of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=r;return t}readCentroid(){if(!e$1(this._current))return null;if(t$1(this._current.centroid)){const e=this._computeCentroid();if(t$1(e))return null;e.coords[0]=(e.coords[0]-this._tx)/this._sx,e.coords[1]=(e.coords[1]-this._ty)/this._sy,this._current.centroid=e;}const e=this._current.centroid.clone();return e.coords[0]=e.coords[0]*this._sx+this._tx,e.coords[1]=e.coords[1]*this._sx+this._ty,e}hasField(t){if(t in this._current.attributes)return !0;return this.getFieldNames().map((t=>t.toLowerCase())).includes(t.toLowerCase())}getFieldNames(){return Object.keys(this._current.attributes)}_readAttribute(t,e){const r=this._current.attributes[t];if(void 0!==r)return null!=r&&e&&this._dateFields.has(t)?new Date(r):r;const s=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in s)if(n.toLocaleLowerCase().trim()===i){const t=this._current.attributes[n];return null!=t&&e&&this._dateFields.has(n)?new Date(t):t}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields;}_readAttributes(){return this._current.attributes}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const k=s.getLogger("esri.views.layers.2d.features.support.AttributeStore"),C=n$1(l$1,k),F={sharedArrayBuffer:has("esri-shared-array-buffer"),atomics:has("esri-atomics")};function M(t,e){return i=>e(t(i))}class B{constructor(t,e,i,s){this.size=0,this.texelSize=4;const{pixelType:r,layout:a,textureOnly:o}=s;this.textureOnly=o||!1,this.pixelType=r,this._ctype=e,this.layout=a,this._resetRange(),this._shared=t,this.size=i,o||(this.data=this._initData(r,i,t,e));}get buffer(){return o(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const i=e$3(this.data);for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1;}setComponentAllTexels(t,e){const i=e$3(this.data);for(let s=0;s<this.size*this.size;s++)i[s*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1;}setComponent(t,e,i){const s=e$3(this.data);for(const r of i)s[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r);}setComponentTexel(t,e,i){e$3(this.data)[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i);}unsetComponentTexel(t,e,i){e$3(this.data)[i*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i);}getData(t,e){const i=f$1(t);return e$3(this.data)[i*this.texelSize+e]}setData(t,e,i){const s=f$1(t),r=1<<e;0!=(this.layout&r)?(this.data[s*this.texelSize+e]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)):k.error("mapview-attributes-store","Tried to set a value for a texel's readonly component");}lock(){this.pixelType===G.UNSIGNED_BYTE&&this._shared&&F.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1);}unlock(){this.pixelType===G.UNSIGNED_BYTE&&this._shared&&F.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0);}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),i=e$3(this.data);e.set(i),this.data=e;}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,i=this.texelSize;if(t>e)return null;this._resetRange();const s=!(this._shared||"local"===this._ctype),r=this.pixelType,a=this.layout,o=e$3(this.data);return {start:t,end:e,data:s&&o.slice(t*i,(e+1)*i)||null,pixelType:r,layout:a}}_initData(t,e,i,s){const r=i&&"local"!==s?SharedArrayBuffer:ArrayBuffer,a=me$1(t),o=new a(new r(e*e*4*a.BYTES_PER_ELEMENT));for(let n=0;n<o.length;n+=4)o[n+1]=255;return o}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}}class v{constructor(t,e,i=(()=>{})){this._client=t,this.config=e,this._notifyChange=i,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(S),this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?G.FLOAT:G.UNSIGNED_BYTE;C(`Creating AttributeStore ${F.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:G.UNSIGNED_BYTE,layout:1},{pixelType:G.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:G.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null));}destroy(){this._abortController.abort();}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){return !!this._currUpdate||!!this._nextUpdate}update(t,e){this.config=e;const i=e.schema.processors[0].storage,a=m$1(this._schema,i);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),a&&(has("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",a),t.storage.data=!0,this._schema=i,this._attributeComputeMap.clear(),!t$1(i))){switch(i.target){case"feature":this._targetType=u$1;break;case"aggregate":this._targetType=c$3;}if("subtype"===i.type)for(const t in i.mapping){const e=i.mapping[t];if(r$2(e)&&r$2(e.vvMapping))for(const t of e.vvMapping)this._bindAttribute(t);}else {if(r$2(i.vvMapping))for(const t of i.vvMapping)this._bindAttribute(t);if(r$2(i.attributeMapping))for(const t of i.attributeMapping)this._bindAttribute(t);}}}onTileData(t,e){if(t$1(e.addOrUpdate))return;const i=e.addOrUpdate.getCursor();for(;i.next();){const t=i.getDisplayId();this.setAttributeData(t,i);}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=new AbortController;}async setHighlight(t,e){const i=1,s=this._getBlock(0),r=e.map((t=>f$1(t)));s.lock(),s.unsetComponentAllTexels(0,i),s.setComponent(0,i,r),s.unlock(),this._idsToHighlight.clear();for(const a of t)this._idsToHighlight.add(a);await this.sendUpdates();}async updateFilters(t,e,i){const{service:s,spatialReference:r}=i,{filters:a}=e,o=a.map(((t,e)=>this._updateFilter(t,e,s,r)));(await Promise.all(o)).some((t=>t))&&(t.storage.filters=!0,has("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"));}setData(t,e,i,s){const r=f$1(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,i,s);}getData(t,e,i){return this._getBlock(e).getData(t,i)}getHighlightFlag(t){return this._idsToHighlight.has(t)?T:0}unsetAttributeData(t){const e=f$1(t);this._getBlock(0).setData(e,0,0);}setAttributeData(t,e){const s=f$1(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==e$2(t))return;const r=this._attributeComputeMap,a=this.config.supportsTextureFloat?1:2,o=4;r.size&&r.forEach(((t,r)=>{const n=r*a%o,l=Math.floor(r*a/o),h=this._getBlock(l+P),u=t(e);if(this.config.supportsTextureFloat)h.setData(s,n,u);else if(u===c$4)h.setData(s,n,255),h.setData(s,n+1,255);else {const t=o$1(Math.round(u),-32767,32766)+32768,e=255&t,r=(65280&t)>>8;h.setData(s,n,e),h.setData(s,n+1,r);}}));}sendUpdates(){if(has("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=D(),this._nextUpdate.promise;const e={blocks:this._blocks.map((t=>r$2(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const t=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()));}else has("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");this._notifyChange();};has("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const i=this._client.update(e,this._signal).then(t).catch(t);return this._client.render(this._signal),i})).catch((e=>{if(j(e))return this._createResourcesPromise=null,this._createResources();this._notifyChange(),k.error(new s$1("mapview-attribute-store","Encountered an error during client update",e));})),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){function e(){return t.normalizationField?e=>{const i=e.readAttribute(t.normalizationField);if(!i)return null;return e.readAttribute(t.field)/i}:e=>e.readAttribute(t.field)}function i(){return t.normalizationField&&k.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=>e.getComputedNumericAtIndex(t.fieldIndex)}let s;if(null!=t.fieldIndex)s=i();else {if(!t.field)return;s=e();}if(t.valueRepresentation){s=M(s,(e=>r$3(e,t.valueRepresentation)));}const r=t=>null===t||isNaN(t)||t===1/0?c$4:t;this._attributeComputeMap.set(t.binding,M(s,r));}_createResources(){if(r$2(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(N),this._getBlock(O),C("Initializing AttributeStore");const e={shared:F.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:v$1(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},i=this._client.initialize(e,this._signal).catch((e=>{j(e)?this._createResourcesPromise=null:k.error(new s$1("mapview-attribute-store","Encountered an error during client initialization",e));}));return this._createResourcesPromise=i,i.then((()=>t$1(this._createResourcesPromise)?this._createResources():void 0)),i}_getBlock(t){const e=this._blocks[t];if(r$2(e))return e;C(`Initializing AttributeBlock at index ${t}`);const i=F.sharedArrayBuffer,s=this._client.type,a=new B(i,s,this._size,this._blockDescriptors[t]);return this._blocks[t]=a,this._createResourcesPromise=null,a}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return C("Expanding block size to",t,this._blocks),A(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return k.error(new s$1("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,i,a){const o=this._filters[e],n=r$2(o)&&o.hash;if(!o&&!t)return !1;if(n===JSON.stringify(t))return !1;if(t$1(t)){if(!o)return !1;const t=1<<e+1,i=this._getBlock(0);return this._filters[e]=null,i.setComponentAllTexels(0,t),this.sendUpdates(),!0}const l=await this._getFilter(e,i);return await l.update(t,a),!0}async _getFilter(t,e){const i=this._filters[t];if(r$2(i))return i;const{default:s}=await import('./FeatureFilter-7e69ee0b.js'),a=new s({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new d$3(e.fields)});return this._filters[t]=a,a}isVisible(t){return !!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const i$1=i(t.getDisplayId());for(let a=0;a<this._filters.length;a++){const r=!!(i$1&1<<a),o=this._filters[a];e|=(!r||t$1(o)||o.check(t)?1:0)<<a;}let r=0;if(this._idsToHighlight.size){const e=t.getObjectId();r=this.getHighlightFlag(e);}return e<<1|r}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r$1{constructor(){this._freeIds=[],this._idCounter=1;}createId(r=!1){return s$2(this._getFreeId(),r)}releaseId(e){this._freeIds.push(e);}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s);}class r{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new r$1,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[];}createBitset(){const e=this._bitsets.length;return this._bitsets.push(t.create(this._allocatedSize,n$2)),e+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize);}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);n(this._numerics[t],e,0);}_ensureInstanceId(t){n(this._instanceIds,t,0);}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);n(this._strings[t],e,null);}createDisplayId(t=!1){const s=this._idGenerator.createId();return s>this._allocatedSize&&this._expand(),s$2(s,t)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e);return this._idGenerator.releaseId(e&n$2)}getComputedNumeric(e,s){return this.getComputedNumericAtIndex(e&n$2,0)}setComputedNumeric(e,s,i){return this.setComputedNumericAtIndex(e&n$2,i,0)}getComputedString(e,s){return this.getComputedStringAtIndex(e&n$2,0)}setComputedString(e,s,i){return this.setComputedStringAtIndex(e&n$2,0,i)}getComputedNumericAtIndex(e,s){const i=e&n$2;return this._ensureNumeric(s,i),this._numerics[s][i]}setComputedNumericAtIndex(e,s,i){const n=e&n$2;this._ensureNumeric(s,n),this._numerics[s][n]=i;}getInstanceId(e){const s=e&n$2;return this._ensureInstanceId(s),this._instanceIds[s]}setInstanceId(e,s){const i=e&n$2;this._ensureInstanceId(i),this._instanceIds[i]=s;}getComputedStringAtIndex(e,s){const i=e&n$2;return this._ensureString(s,i),this._strings[s][i]}setComputedStringAtIndex(e,s,i){const n=e&n$2;this._ensureString(s,n),this._strings[s][n]=i;}getXMin(e){return this._bounds[4*(e&n$2)]}getYMin(e){return this._bounds[4*(e&n$2)+1]}getXMax(e){return this._bounds[4*(e&n$2)+2]}getYMax(e){return this._bounds[4*(e&n$2)+3]}setBounds(e,s){const i=s.readHydratedGeometry();if(!i||!i.coords.length)return !1;let r=1/0,u=1/0,o=-1/0,h=-1/0;i.forEachVertex(((t,e)=>{r=Math.min(r,t),u=Math.min(u,e),o=Math.max(o,t),h=Math.max(h,e);}));const d=e&n$2;return n(this._bounds,4*d+4,0),this._bounds[4*d]=r,this._bounds[4*d+1]=u,this._bounds[4*d+2]=o,this._bounds[4*d+3]=h,!0}}

export { d, r, t, v, x };