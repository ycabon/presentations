import { oD as c, dz as r, E as s, oB as i, uR as M, c4 as f, bD as j, aC as j$1, $ as s$1, fD as E, m as r$1, d5 as nt, c6 as g, r as rt, U, q as c$1, ds as tt, du as ot, vl as X } from './_virtual_index-1ea2035a.js';
import { u } from './FeatureStore-6d86d70a.js';
import { Y } from './QueryEngine-c226e0c5.js';
import { L, I, T } from './geojson-90532a5f.js';
import { o, a, i as i$1 } from './clientSideDefaults-31ffaa9f.js';
import { w, m, f as f$1, a as a$1, g as g$1 } from './sourceUtils-09322c39.js';
import './optimizedFeatureQueryEngineAdapter-fcb7e44b.js';
import './centroid-205dc6cf.js';
import './QueryEngineCapabilities-45006836.js';
import './timeSupport-eac99e81.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const O={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class C{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)};}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null;}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const i$2=[];await this._checkProjection(e.spatialReference);let r$1=null;e.url&&(r$1=await this._fetch(t?.signal));const n=L(r$1,{geometryType:e.geometryType}),a$1=e.fields||n.fields||[],l=null!=e.hasZ?e.hasZ:n.hasZ,u$1=n.geometryType;let d=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const p=e.spatialReference||c;let c$1=e.timeInfo;a$1===n.fields&&n.unknownFields.length>0&&i$2.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let y=new r(a$1).get(d);y?("esriFieldTypeString"!==y.type&&(y.type="esriFieldTypeOID"),y.editable=!1,y.nullable=!1,d=y.name):(y={alias:d,name:d,type:"string"===n.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a$1.unshift(y));const m={};for(const o of a$1){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),!o.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!i.jsonValues.includes(o.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==y.name){const e=M(o);void 0!==e&&(m[o.name]=e);}}this._fieldsIndex=new r(a$1);const f=this._fieldsIndex.requiredFields.indexOf(y);if(f>-1&&this._fieldsIndex.requiredFields.splice(f,1),c$1){if(c$1.startTimeField){const e=this._fieldsIndex.get(c$1.startTimeField);e?(c$1.startTimeField=e.name,e.type="esriFieldTypeDate"):c$1.startTimeField=null;}if(c$1.endTimeField){const e=this._fieldsIndex.get(c$1.endTimeField);e?(c$1.endTimeField=e.name,e.type="esriFieldTypeDate"):c$1.endTimeField=null;}if(c$1.trackIdField){const e=this._fieldsIndex.get(c$1.trackIdField);e?c$1.trackIdField=e.name:(c$1.trackIdField=null,i$2.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:c$1}}));}c$1.startTimeField||c$1.endTimeField||(i$2.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:c$1}}),c$1=null);}const I=u$1?o(u$1):null,j={warnings:i$2,featureErrors:[],layerDefinition:{...O,drawingInfo:I,templates:a(m),extent:null,geometryType:u$1,objectIdField:d,fields:a$1,hasZ:!!l,timeInfo:c$1}};this._queryEngine=new Y({fields:a$1,geometryType:u$1,hasM:!1,hasZ:l,objectIdField:d,spatialReference:p,timeInfo:c$1,featureStore:new u({geometryType:u$1,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=i$1(m,d);const w=await this._createFeatures(r$1);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,w);const T=this._normalizeFeatures(w,j.warnings,j.featureErrors);if(this._queryEngine.featureStore.addMany(T),j.layerDefinition.extent=this._queryEngine.fullExtent,j.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;j.layerDefinition.timeInfo.timeExtent=[e,t];}return j}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([w(t,s),f(e.adds,t),f(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=j(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t);}),(e=>{this._queryEngine.featureStore.clear(),j$1(e)||s$1.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh","An error occurred during refresh",{error:e}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:i}=this._queryEngine,n=I(e,{geometryType:t,hasZ:s,objectIdField:i});if(!E(this._queryEngine.spatialReference,c))for(const a of n)r$1(a.geometry)&&(a.geometry=nt(g(rt(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this._loadOptions,r=(await U(s,{responseType:"json",query:{...i},signal:t})).data;return await T(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const n of e){const e=this._createDefaultAttributes(),a=m(this._fieldsIndex,e,n.attributes,!0,t);a?s?.push(a):(this._assignObjectId(e,n.attributes,!0),n.attributes=e,n.objectId=e[i],r.push(n));}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(f$1(e));this._queryEngine.featureStore.removeManyById(i);}return {extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:n,hasZ:o,objectIdField:l,spatialReference:u,featureStore:d}=this._queryEngine,c=[];for(const p of t){if(p.geometry&&i!==c$1(p.geometry)){s.push(a$1("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=m(this._fieldsIndex,t,p.attributes);if(n)s.push(n);else {if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[l];e.uidToObjectId[p.uid]=t;}if(r$1(p.geometry)){const e=p.geometry.spatialReference??u;p.geometry=g(g$1(p.geometry,e),e,u);}c.push(p),s.push(f$1(p.attributes[l]));}}d.addMany(tt([],c,i,o,n,l));}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:n,objectIdField:o,spatialReference:l,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:p}=d,h=t&&t[o];if(null==h){e.push(a$1(`Identifier field ${o} missing`));continue}if(!u.has(h)){e.push(a$1(`Feature with object id ${h} missing`));continue}const m$1=ot(u.getFeature(h),s,n,i);if(r$1(p)){if(s!==c$1(p)){e.push(a$1("Incorrect geometry type."));continue}const t=p.spatialReference??l;m$1.geometry=g(g$1(p,t),t,l);}if(t){const s=m(this._fieldsIndex,m$1.attributes,t);if(s){e.push(s);continue}}u.add(X(m$1,s,n,i,o)),e.push(f$1(h));}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return ()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator();}async _checkProjection(e){try{await f(c,e);}catch{throw new s("geojson-layer","Projection not supported")}}}

export { C as default };
