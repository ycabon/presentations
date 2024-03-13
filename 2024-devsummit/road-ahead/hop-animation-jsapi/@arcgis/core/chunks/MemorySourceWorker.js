/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{getJsonType as t,isPoint as s}from"../geometry/support/jsonUtils.js";import{w as i}from"./unitUtils.js";import{e as r,f as o,h as a}from"./featureConversionUtils.js";import{i as n,f as l}from"./objectIdUtils.js";import{F as p}from"./FeatureStore.js";import{c as m,p as u}from"./projectionSupport.js";import{Q as d}from"./QueryEngine.js";import{b as c,c as j,a as y}from"./clientSideDefaults.js";import{l as f,a as g,m as h,c as b,s as I}from"./sourceUtils.js";import F from"../layers/support/FieldsIndex.js";import{k as E}from"./fieldType.js";import{getFieldDefaultLength as T,getFieldDefaultValue as R}from"../layers/support/fieldUtils.js";import{u as _}from"./timeZoneUtils.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"../core/Evented.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./_commonjsHelpers.js";import"./timeSupport.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils7.js";import"./utils8.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./json.js";import"./MemCache.js";import"./LRUCache.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./QueryEngineCapabilities.js";import"./quantizationUtils.js";import"./utils10.js";import"./screenUtils.js";import"./timeUtils.js";import"./date.js";import"./heatmapUtils.js";import"./vec4.js";import"./vec4f64.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"../core/Collection.js";import"./shared.js";import"./collectionUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./loadAll.js";import"./asyncUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./persistableUrlUtils.js";import"./messages.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./layerUtils2.js";import"./utils3.js";import"./colorUtils.js";import"./mat4.js";import"./utils11.js";import"./generateRendererUtils.js";import"./enumeration.js";import"./SnappingCandidate.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"../core/signal.js";import"./debugFlags.js";import"./RenderState.js";import"./defaultsJSON.js";import"./date2.js";import"../core/sql.js";import"../intl.js";const x=i,U={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:i},S={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function q(e){return s(e)?null!=e.z:!!e.hasZ}function O(e){return s(e)?null!=e.m:!!e.hasM}class v{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(t){const s=[],{features:i}=t,r=this._inferLayerProperties(i,t.fields),o=t.fields||[],a=null!=t.hasM?t.hasM:!!r.hasM,u=null!=t.hasZ?t.hasZ:!!r.hasZ,f=!t.spatialReference&&!r.spatialReference,g=f?x:t.spatialReference||r.spatialReference,h=f?U:null,b=t.geometryType||r.geometryType,I=!b;let q=t.objectIdField||r.objectIdField,O=t.timeInfo;const v=new F(o);if(!I&&(f&&s.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!b))throw new e("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!q)throw new e("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&q!==r.objectIdField&&(s.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${q}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),q=r.objectIdField),q&&!r.objectIdField){const e=v.get(q);e?(q=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):o.unshift({alias:q,name:q,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const t of o){if(null==t.name&&(t.name=t.alias),null==t.alias&&(t.alias=t.name),!t.name)throw new e("feature-layer:invalid-field-name","field name is missing",{field:t});if(t.name===q&&(t.type="esriFieldTypeOID"),!E.jsonValues.includes(t.type))throw new e("feature-layer:invalid-field-type",`invalid type for field "${t.name}"`,{field:t});null==t.length&&(t.length=T(t))}const w={};for(const e of o)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=R(e);void 0!==t&&(w[e.name]=t)}if(O){if(O.startTimeField){const e=v.get(O.startTimeField);e?(O.startTimeField=e.name,e.type="esriFieldTypeDate"):O.startTimeField=null}if(O.endTimeField){const e=v.get(O.endTimeField);e?(O.endTimeField=e.name,e.type="esriFieldTypeDate"):O.endTimeField=null}if(O.trackIdField){const e=v.get(O.trackIdField);e?O.trackIdField=e.name:(O.trackIdField=null,s.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:O}}))}O.startTimeField||O.endTimeField||(s.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:O}}),O=null)}const P=v.dateFields.length?{timeZoneIANA:t.dateFieldsTimeZone??_}:null;this._createDefaultAttributes=c(w,q);const D={warnings:s,featureErrors:[],layerDefinition:{...S,drawingInfo:j(b),templates:y(w),extent:h,geometryType:b,objectIdField:q,fields:o,hasZ:u,hasM:a,timeInfo:O,dateFieldsTimeReference:P},assignedObjectIds:{}};if(this._queryEngine=new d({fieldsIndex:F.fromLayerJSON({fields:o,timeInfo:O,dateFieldsTimeReference:P}),geometryType:b,hasM:a,hasZ:u,objectIdField:q,spatialReference:g,featureStore:new p({geometryType:b,hasM:a,hasZ:u}),timeInfo:O,cacheSpatialQueries:!0}),!i?.length)return this._nextObjectId=n,D;const Q=l(q,i);return this._nextObjectId=Q+1,await m(i,g),this._loadInitialFeatures(D,i)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([f(t,s),m(e.adds,t),m(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,s){let i,r,o=null,a=null,n=null;for(const s of e){const e=s.geometry;if(null!=e&&(o||(o=t(e)),a||(a=e.spatialReference),null==i&&(i=q(e)),null==r&&(r=O(e)),o&&a&&null!=i&&null!=r))break}if(s&&s.length){let e=null;s.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(n=e.name)}return{geometryType:o,spatialReference:a,objectIdField:n,hasM:r,hasZ:i}}async _loadInitialFeatures(e,s){const{geometryType:i,hasM:o,hasZ:a,objectIdField:n,spatialReference:l,featureStore:p,fieldsIndex:m}=this._queryEngine,d=[];for(const r of s){if(null!=r.uid&&(e.assignedObjectIds[r.uid]=-1),r.geometry&&i!==t(r.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const s=this._createDefaultAttributes(),o=h(m,s,r.attributes,!0);o?e.featureErrors.push(o):(this._assignObjectId(s,r.attributes,!0),r.attributes=s,null!=r.uid&&(e.assignedObjectIds[r.uid]=r.attributes[n]),null!=r.geometry&&(r.geometry=u(r.geometry,r.geometry.spatialReference,l)),d.push(r))}p.addMany(r([],d,i,a,o,n));const{fullExtent:c,timeExtent:j}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,j){const{start:t,end:s}=j;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(r,t),s?.length&&this._applyUpdateEdits(r,s),i?.length){for(const e of i)r.deleteResults.push(b(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:o,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:a,featureEditResults:r}}_applyAddEdits(e,s){const{addResults:i}=e,{geometryType:o,hasM:a,hasZ:n,objectIdField:l,spatialReference:p,featureStore:m,fieldsIndex:d}=this._queryEngine,c=[];for(const r of s){if(r.geometry&&o!==t(r.geometry)){i.push(g("Incorrect geometry type."));continue}const s=this._createDefaultAttributes(),a=h(d,s,r.attributes);if(a)i.push(a);else{if(this._assignObjectId(s,r.attributes),r.attributes=s,null!=r.uid){const t=r.attributes[l];e.uidToObjectId[r.uid]=t}if(null!=r.geometry){const e=r.geometry.spatialReference??p;r.geometry=u(I(r.geometry,e),e,p)}c.push(r),i.push(b(r.attributes[l]))}}m.addMany(r([],c,o,n,a,l))}_applyUpdateEdits({updateResults:e},s){const{geometryType:i,hasM:r,hasZ:n,objectIdField:l,spatialReference:p,featureStore:m,fieldsIndex:d}=this._queryEngine;for(const c of s){const{attributes:s,geometry:j}=c,y=s?.[l];if(null==y){e.push(g(`Identifier field ${l} missing`));continue}if(!m.has(y)){e.push(g(`Feature with object id ${y} missing`));continue}const f=o(m.getFeature(y),i,n,r);if(null!=j){if(i!==t(j)){e.push(g("Incorrect geometry type."));continue}const s=j.spatialReference??p;f.geometry=u(I(j,s),s,p)}if(s){const t=h(d,f.attributes,s);if(t){e.push(t);continue}}m.add(a(f,i,n,r,l)),e.push(b(y))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{v as default};