import { aB as f, fD as E$1, oD as c, m as r, d5 as nt, c6 as g, r as rt, dz as r$1, L as e, E as s, bD as j, aC as j$1, $ as s$1, c4 as f$1 } from './_virtual_index-1ea2035a.js';
import { u } from './FeatureStore-6d86d70a.js';
import { Y } from './QueryEngine-c226e0c5.js';
import { T, I } from './geojson-90532a5f.js';
import { m } from './sourceUtils-09322c39.js';
import { K } from './wfsUtils-2fecdd6d.js';
import './optimizedFeatureQueryEngineAdapter-fcb7e44b.js';
import './centroid-205dc6cf.js';
import './QueryEngineCapabilities-45006836.js';
import './timeSupport-eac99e81.js';
import './xmlUtils-72ffc57c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r$1=await K(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await T(r$1),f(e);const a=I(r$1,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const i of a)r(i.geometry)&&(i.geometry=nt(g(rt(i.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let o=1;for(const s of a){const e={};m(this._fieldsIndex,e,s.attributes,!0),s.attributes=e,null==s.attributes[t]&&(s.objectId=s.attributes[t]=o++);}return a};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:s,spatialReference:o,fields:n,geometryType:u$1,featureType:p,objectIdField:h,customParameters:c}=e$1;this._featureType=p,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=s,this._fieldsIndex=new r$1(n),await this._checkProjection(o),f(t),this._queryEngine=new Y({fields:n,geometryType:u$1,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:o,timeInfo:null,featureStore:new u({geometryType:u$1,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(s$2){return this._customParameters=s$2,this._snapshotTask?.abort(),this._snapshotTask=j(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),j$1(e)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await f$1(c,e);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:e})}}}

export { E as default };