import { as as f, cd as E$1, gn as c, r, ci as te, b as ne, cM as d, al as e, s, bf as j, ar as j$1, Z as s$1 } from './_virtual_index-4b72c57d.js';
import { u } from './FeatureStore-b5787bf2.js';
import { g, f as f$1 } from './projectionSupport-8e09cd0f.js';
import { Y } from './QueryEngine-97e838c0.js';
import { O, L } from './geojson-ea470aa2.js';
import { m } from './sourceUtils-3f9a6876.js';
import { K } from './wfsUtils-ee4c0c24.js';
import './PooledRBush-95c31578.js';
import './centroid-824ff9a8.js';
import './json-523694e0.js';
import './QueryEngineResult-0d2d473a.js';
import './quantizationUtils-994cbb23.js';
import './WhereClause-86b394c4.js';
import './utils-c6710c6a.js';
import './utils-a3792e07.js';
import './QueryEngineCapabilities-140b3c8f.js';
import './timeSupport-242edbf2.js';
import './xmlUtils-37ff00c9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r$1=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(r$1),f(e);const a=L(r$1,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const i of a)r(i.geometry)&&(i.geometry=te(g(ne(i.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let o=1;for(const s of a){const e={};m(this._fieldsIndex,e,s.attributes,!0),s.attributes=e,null==s.attributes[t]&&(s.objectId=s.attributes[t]=o++);}return a};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:s,spatialReference:o,fields:n,geometryType:u$1,featureType:p,objectIdField:h,customParameters:c}=e$1;this._featureType=p,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=s,this._fieldsIndex=new d(n),await this._checkProjection(o),f(t),this._queryEngine=new Y({fields:n,geometryType:u$1,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:o,timeInfo:null,featureStore:new u({geometryType:u$1,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(s$2){return this._customParameters=s$2,this._snapshotTask?.abort(),this._snapshotTask=j(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),j$1(e)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await f$1(c,e);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:e})}}}

export { E as default };
