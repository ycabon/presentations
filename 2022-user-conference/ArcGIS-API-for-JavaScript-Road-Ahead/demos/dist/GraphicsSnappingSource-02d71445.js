import { ao as a, ap as f, ln as L, G as r, na as r$1, O as t, aK as j, lD as fn, aO as v, dq as An, dQ as rn, be as f$1, ht as s, bJ as te, lE as i, a as e, d, n, nb as A } from './_virtual_index-64b818a8.js';
import { u } from './FeatureStore-456e6daf.js';
import { Y } from './QueryEngine-d00b2b76.js';
import { o } from './queryEngineUtils-3eacfa3c.js';
import './optimizedFeatureQueryEngineAdapter-163cbac6.js';
import './centroid-e637c3e9.js';
import './QueryEngineCapabilities-140b3c8f.js';
import './timeSupport-d58fe9b7.js';
import './PointSnappingHint-b4dbba27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let w=class extends(a(f)){constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[];}get updating(){return this.updatingHandles.updating}get _layer(){return this.layerSource.layer}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources((e=>this._destroySource(e)));}initialize(){this.handles.add([this._layer.on("graphic-update",(e=>this._onGraphicUpdate(e))),this.updatingHandles.addOnCollectionChange((()=>this._layer.graphics),(e=>this._onGraphicsChanged(e)))]),this._addMany(this._layer.graphics.toArray());}async fetchCandidates(e,t){const r$2=await L(this._mapSources((r$1=>r$1.queryEngine.executeQueryForSnapping({point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),distance:e.distance,types:e.types,query:r(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},t).then((({candidates:e})=>e))))),s=r$2.flat().map((t=>o(t,e.coordinateHelper,e.elevationInfo)));return r$1(e.point,s),s}refresh(){}_onGraphicUpdate(e){switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic]);}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added);}_addMany(e){const t$1=[],r=new Map;for(const s of e)t(s.geometry)||(this._needsInitializeProjection(s.geometry.spatialReference)?(t$1.push(s.geometry.spatialReference),r.set(s.uid,s)):this._add(s));this._createPendingAdd(t$1,r);}_createPendingAdd(e,t){if(!e.length)return;const o=j((async r=>{await fn(e.map((e=>({source:e,dest:this.spatialReference}))),{signal:r}),this._markLoadedSpatialReferences(e);for(const[,e]of t)this._add(e);}));this.updatingHandles.addPromise(o.promise);const i={task:o,graphics:t},a=()=>A(this._pendingAdds,i);o.promise.then(a,a),this._pendingAdds.push(i);}_markLoadedSpatialReferences(e){for(const t of e)null!=t.wkid&&this._loadedWkids.add(t.wkid),null!=t.wkt&&this._loadedWkts.add(t.wkt);}_add(e){if(t(e.geometry)||!e.visible)return;let t$1=e.geometry;if("mesh"===t$1.type)return;"extent"===t$1.type&&(t$1=v.fromExtent(t$1));const r$1=this._ensureSource(t$1.type);if(t(r$1))return;const s=this._createOptimizedFeature(e.uid,t$1);r(s)&&r$1.featureStore.add(s);}_needsInitializeProjection(e){return (null==e.wkid||!this._loadedWkids.has(e.wkid))&&((null==e.wkt||!this._loadedWkts.has(e.wkt))&&!An(e,this.spatialReference))}_createOptimizedFeature(e,t){const r=rn(f$1(t),this.spatialReference);return r?new s(te(r,!1,!1),{[k]:e},null,e):null}_ensureSource(e){const t=this._sources[e];if(r(t))return t;const r$1=this._createSource(e);return this._sources[e]=r$1,r$1}_createSource(e){const t=i.toJSON(e),r$1=new u({geometryType:t,hasZ:!1,hasM:!1});return {featureStore:r$1,queryEngine:new Y({featureStore:r$1,fields:[{name:k,type:"esriFieldTypeOID",alias:k}],geometryType:t,hasM:!1,hasZ:!1,objectIdField:k,spatialReference:this.spatialReference,scheduler:r(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources((t=>this._removeFromSource(t,e)));for(const t of this._pendingAdds)t.graphics.delete(e.uid),0===t.graphics.size&&t.task.abort();}_removeFromSource(e,t){const r=t.uid;e.featureStore.has(r)&&e.featureStore.removeById(t.uid);}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null;}_mapSources(e){const{point:t,polygon:r$1,polyline:s,multipoint:o}=this._sources,a=[];return r(t)&&a.push(e(t)),r(r$1)&&a.push(e(r$1)),r(s)&&a.push(e(s)),r(o)&&a.push(e(o)),a}};e([d({constructOnly:!0})],w.prototype,"spatialReference",void 0),e([d({constructOnly:!0})],w.prototype,"layerSource",void 0),e([d({constructOnly:!0})],w.prototype,"view",void 0),e([d({readOnly:!0})],w.prototype,"updating",null),e([d({readOnly:!0})],w.prototype,"availability",void 0),w=e([n("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],w);const k="OBJECTID";

export { w as GraphicsSnappingSource };
