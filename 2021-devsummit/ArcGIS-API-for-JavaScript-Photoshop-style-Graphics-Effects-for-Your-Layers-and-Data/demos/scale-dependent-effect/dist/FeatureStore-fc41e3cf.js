import { w as t, eb as t$1, as as t$3, I as i$1, ak as t$4, ed as H, i as i$2, h as s, a as u, ee as le } from './index.js';
import { G } from './aaBoundingBox-666f0a58.js';
import { i } from './quantizationUtils-6bdc869a.js';
import { t as t$2 } from './centroid-6105d00e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d={minX:0,minY:0,maxX:0,maxY:0};class n{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=i(9,t("csp-restrictions")?s=>({minX:s[0],minY:s[1],maxX:s[2],maxY:s[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const s=new Array(this._idByBounds.size);let i=0;this._idByBounds.forEach(((d,n)=>{s[i++]=n;})),this._indexInvalid=!1,this._index.clear(),this._index.load(s);}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((s=>this._idByBounds.has(s)))),this._boundsToLoad.length=0);};}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear();}delete(s){const i=this._boundsById.get(s);this._boundsById.delete(s),i&&(this._idByBounds.delete(i),this._indexInvalid||this._index.remove(i));}forEachInBounds(s,i){this._loadIndex();for(const n of function(s,i){return d.minX=i[0],d.minY=i[1],d.maxX=i[2],d.maxY=i[3],s.search(d)}(this._index,s))i(this._idByBounds.get(n));}get(s){return this._boundsById.get(s)}has(s){return this._boundsById.has(s)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0);}set(s,i){if(!this._indexInvalid){const i=this._boundsById.get(s);i&&(this._index.remove(i),this._idByBounds.delete(i));}this._boundsById.set(s,i),i&&(this._idByBounds.set(i,s),this._indexInvalid||(this._boundsToLoad.push(i),this._boundsToLoad.length>5e4&&this._loadIndex()));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(e,r)=>new t$1(r,e.attributes,null,e.objectId),getGeometry:t=>t.geometry,getCentroid:(t,o)=>(t.centroid||(t.centroid=t$2(new t$3,t.geometry,o.hasZ,o.hasM)),t.centroid)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h{constructor(e){this.geometryInfo=e,this._boundsStore=new n,this._featuresById=new Map,this._markedIds=new Set,this.events=new i$1,this.featureAdapter=o;}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=t$4(H);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]));})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length);})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged();}addMany(e){for(const t of e)this._add(t);this._emitChanged();}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged();}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e);}this._emitChanged();}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(G(r,e));}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)));}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e));}));}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear();}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t));})),this._markedIds.clear(),e&&this._emitChanged();}_emitChanged(){this.events.emit("changed",void 0);}_add(s$1){if(!s$1)return;const i=s$1.objectId;if(null==i)return void i$2.getLogger("esri.layers.graphics.data.FeatureStore").error(new s("featurestore:invalid-feature","feature id is missing",{feature:s$1}));const d=this._featuresById.get(i);let n;if(this._markedIds.add(i),d?(s$1.displayId=d.displayId,n=this._boundsStore.get(i),this._boundsStore.delete(i)):u(this.onFeatureAdd)&&this.onFeatureAdd(s$1),!s$1.geometry||!s$1.geometry.coords||!s$1.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,s$1);n=le(n||t$4(),s$1.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(i,n),this._featuresById.set(i,s$1);}_remove(t){return u(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}

export { h };
