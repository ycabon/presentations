import { ds as q, s, fE as C, ef as d, ek as I, bx as X, aS as y, bG as ee, n, aR as p$1 } from './_virtual_index-2683c931.js';
import { G, T } from './geojson-881a6a87.js';
import { u } from './FeatureStore-d264f770.js';
import { Z } from './QueryEngine-1a92941f.js';
import './aaBoundingBox-359badc3.js';
import './PooledRBush-e1ab5f07.js';
import './quickselect-eae177f3.js';
import './_commonjsHelpers-3f70742c.js';
import './centroid-395619b0.js';
import './WhereClause-aedb8c74.js';
import './timeSupport-f7fdbc99.js';
import './quantizationUtils-46b123b8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class p{constructor(){this._queryEngine=null,this._refreshScheduled=!0,this.refresh=q((async()=>(this._refreshPromise&&await this._refreshPromise,this._refreshScheduled=!0,this._assertFeaturesReady())));}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null;}async load(e){const{getFeatureArgs:r,spatialReference:t,fields:s,geometryType:i,typeName:a,objectIdField:n}=e;this._getFeatureArgs=r,this._typeName=a,await this._checkProjection(t),this._queryEngine=new Z({fields:s,geometryType:i,hasM:!1,hasZ:!1,objectIdField:n,spatialReference:t,timeInfo:null,featureStore:new u({geometryType:i,hasM:!1,hasZ:!1})}),Promise.resolve().then((()=>{this._assertFeaturesReady();}));}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},r={}){return await this._assertFeaturesReady(),this._queryEngine.executeQuery(e,r.signal)}async queryFeatureCount(e={},r={}){return await this._assertFeaturesReady(),this._queryEngine.executeQueryForCount(e,r.signal)}async queryObjectIds(e={},r={}){return await this._assertFeaturesReady(),this._queryEngine.executeQueryForIds(e,r.signal)}async queryExtent(e={},r={}){return await this._assertFeaturesReady(),this._queryEngine.executeQueryForExtent(e,r.signal)}async querySnapping(e,r={}){return await this._assertFeaturesReady(),this._queryEngine.executeQueryForSnapping(e,r.signal)}async _assertFeaturesReady(){return this._refreshScheduled?(this._refreshScheduled=!1,this._queryEngine.featureStore.clear(),this._refreshPromise=this._refreshFeatures(),this._refreshPromise):this._refreshPromise}async _refreshFeatures(){let r;try{const{objectIdField:e}=this._queryEngine,t=await C(this._getFeatureArgs,this._typeName,{dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name))});if(await G(t),r=T(t,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e}),!d(this._queryEngine.spatialReference,I))for(const s of r)s.geometry&&(s.geometry=X(y(ee(s.geometry,this._queryEngine.geometryType,!1,!1),I,this._queryEngine.spatialReference)));let h=1;for(const s of r)null==s.attributes[e]&&(s.objectId=s.attributes[e]=h++);}catch(t){n.getLogger("esri.layers.WFSLayer").error(t);}this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r),this._refreshPromise=null;}async _checkProjection(e){try{await p$1(I,e);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:e})}}}

export default p;
