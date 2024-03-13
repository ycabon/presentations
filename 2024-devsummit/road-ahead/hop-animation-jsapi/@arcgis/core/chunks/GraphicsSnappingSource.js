/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{r as s}from"../core/lang.js";import{c as o}from"./asyncUtils.js";import{m as r}from"./memoize.js";import{allSettledValues as i,throwIfAborted as p,whenOrAbort as a}from"../core/promiseUtils.js";import{initial as m,watch as n,on as l}from"../core/reactiveUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import{U as c}from"./UpdatingHandles.js";import d from"../geometry/Polygon.js";import{initializeProjection as u,canProjectWithoutEngine as h,project as g}from"../geometry/projection.js";import{a as S}from"./normalizeUtilsSync.js";import{f as b}from"./typeUtils.js";import{d as f}from"./featureConversionUtils.js";import{O as _}from"./OptimizedFeature.js";import{F as v}from"./FeatureStore.js";import{Q as U}from"./QueryEngine.js";import w from"../layers/support/FieldsIndex.js";import{j as P}from"./elevationInfoUtils.js";import{s as C}from"./utils9.js";import{s as F,a as k}from"./snappingUtils.js";import{m as E,c as D}from"./queryEngineUtils.js";import{g as L,a as M,b as R}from"./symbologySnappingCandidates.js";import{T as O}from"./Scheduler.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/Error.js";import"../config.js";import"../core/Collection.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry/support/jsonUtils.js";import"./normalizeUtilsCommon.js";import"./aaBoundingBox.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./_commonjsHelpers.js";import"./timeSupport.js";import"../geometry/support/normalizeUtils.js";import"./simplify.js";import"../geometry.js";import"./utils7.js";import"./utils8.js";import"./projectionSupport.js";import"./json.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./MemCache.js";import"./LRUCache.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./fieldType.js";import"./QueryEngineCapabilities.js";import"./quantizationUtils.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./timeZoneUtils.js";import"./messages.js";import"./utils10.js";import"./screenUtils.js";import"./timeUtils.js";import"./heatmapUtils.js";import"./vec4.js";import"./vec4f64.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"./collectionUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./loadAll.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./persistableUrlUtils.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./layerUtils2.js";import"./utils3.js";import"./colorUtils.js";import"./mat4.js";import"./utils11.js";import"./generateRendererUtils.js";import"./enumeration.js";import"./SnappingCandidate.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"../Color.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./jsonUtils.js";import"./parser.js";import"../symbols/support/cimSymbolUtils.js";import"./utils6.js";import"./vec2.js";import"./vec2f64.js";import"../geometry/support/geodesicUtils.js";import"./plane.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./mathUtils2.js";import"./sphere.js";import"./normalizedPoint.js";import"./dehydratedPoint.js";import"./geometry2dUtils.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./InputManager.js";import"./Queue.js";import"./PropertiesPool.js";import"../core/signal.js";import"./keybindings.js";import"./SnappingManager.js";import"./Settings.js";import"./RightAngleSnappingHint.js";import"../layers/support/FeatureFilter.js";import"./floorFilterUtils.js";import"./viewUtils.js";import"./Cyclical.js";import"./quantityUtils.js";import"./angularMeasurementUtils.js";import"./projectVectorToVector.js";import"./projectPointToVector.js";import"../geometry/geometryEngine.js";import"./geometryEngineBase.js";import"./hydrated.js";import"./projectVectorToWGS84ComparableLonLat.js";import"./geodesicMeasurementUtils.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./VertexSnappingCandidate.js";import"./PointSnappingHint.js";import"./debugFlags.js";import"./RenderState.js";const x="graphics-collections";let z=class extends e{get updating(){return this._updatingHandles.updating}get _hasZ(){const t=this.view;return null!=t&&"3d"===t.type&&"map-notes"!==this.layerSource.layer.type}get _snappingElevationAligner(){const{view:t}=this,{layer:e}=this.layerSource,s=null!=t&&"3d"===t.type;return s&&"map-notes"!==e.type?L(s,{elevationInfo:e.elevationInfo,alignPointsInFeatures:async(s,o)=>(await a(t.whenLayerView(e),o)).elevationAlignPointsInFeatures(s,o)}):L()}get _snappingElevationFilter(){const{view:t}=this,e=null!=t&&"3d"===t.type&&"map-notes"!==this.layerSource.layer.type;return M(e)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:e}=this.layerSource,s=null!=t&&"3d"===t.type,o=this._extrudedPolygonSymbolsCount>0;return s&&"map-notes"!==e.type&&o?R(o,(async(s,o)=>{const r=await t.whenLayerView(e);return p(o),r.queryForSymbologySnapping({candidates:s,spatialReference:t.spatialReference},o)})):R()}constructor(t){super(t),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new c,this._memoizedMakeGetGroundElevation=r(E)}destroy(){for(const t of this._pendingAdds)t.task.abort();this._pendingAdds.length=0,this._mapSources((t=>this._destroySource(t))),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add((()=>this.getGraphicsLayers()),(t=>{this._updatingHandles.removeHandles(x);for(const e of t)this._addMany(e.graphics.toArray()),this.addHandles([e.on("graphic-update",(t=>this._onGraphicUpdate(t))),this._updatingHandles.addOnCollectionChange((()=>e.graphics),(t=>this._onGraphicsChanged(t)))],x)}),m);const{view:t}=this,{layer:e}=this.layerSource;null!=t&&"3d"===t.type&&"map-notes"!==e.type&&t.elevationProvider&&this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{P(t,e.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()})),n((()=>e.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),m),l((()=>e),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))])}async fetchCandidates(t,e){const{point:s,coordinateHelper:{spatialReference:o}}=t,r=await i(this._mapSources((s=>this._fetchCandidatesForSource(s,t,e))));p(e);const a=this._memoizedMakeGetGroundElevation(this.view,o),m=r.flat().map((t=>D(t,a)));return F(s,m),m}async _fetchCandidatesForSource(t,e,s){const o=k(e,this.view?.type??"2d"),r=await t.queryEngine.executeQueryForSnapping(o,s);p(s);const i=await this._snappingElevationAligner.alignCandidates(r.candidates,e.coordinateHelper.spatialReference,s);p(s);const a=await this._symbologySnappingFetcher.fetch(i,s);p(s);const m=0===a.length?i:[...i,...a];return this._snappingElevationFilter.filter(o,m)}refresh(){}_onGraphicUpdate(t){if(this.getGraphicsLayers().some((e=>e.graphics.includes(t.graphic))))switch(t.property){case"geometry":case"visible":this._remove(t.graphic),this._addMany([t.graphic])}}_onGraphicsChanged(t){for(const e of t.removed)this._remove(e);this._addMany(t.added)}_addMany(t){const e=[],s=new Map;for(const o of t)null!=o.geometry&&(this._needsInitializeProjection(o.geometry.spatialReference)?(e.push(o.geometry.spatialReference),s.set(o.uid,o)):this._add(o));this._createPendingAdd(e,s)}_createPendingAdd(t,e){if(!t.length)return;const r=o((async s=>{await u(t.map((t=>({source:t,dest:this.spatialReference}))),{signal:s}),this._markLoadedSpatialReferences(t);for(const[,t]of e)this._add(t)}));this._updatingHandles.addPromise(r.promise);const i={task:r,graphics:e},p=()=>s(this._pendingAdds,i);r.promise.then(p,p),this._pendingAdds.push(i)}_markLoadedSpatialReferences(t){for(const e of t){null!=e.wkid&&this._loadedWkids.add(e.wkid);const t=e.wkt2||e.wkt;t&&this._loadedWkts.add(t)}}_add(t){if(null==t.geometry||!t.visible)return;let e=t.geometry;if("mesh"===e.type)return;"extent"===e.type&&(e=d.fromExtent(e));const s=this._ensureSource(e.type);if(null==s)return;const o=this._createOptimizedFeature(t.uid,e);null!=o&&(s.featureStore.add(o),C(t.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(t){if(null!=t.wkid&&this._loadedWkids.has(t.wkid))return!1;const e=t.wkt2||t.wkt;return!(e&&this._loadedWkts.has(e)||h(t,this.spatialReference))}_createOptimizedFeature(t,e){const s=g(S(e),this.spatialReference);if(!s)return null;const o=this._ensureGeometryHasZ(s),r=f(o,this._hasZ,!1);return new _(r,{[I]:t},null,t)}_ensureGeometryHasZ(t){if(!this._hasZ)return t;const e=t=>{for(;t.length<3;)t.push(0)},s=t.clone();switch(s.hasZ=!0,s.type){case"point":s.z=s.z??0;break;case"multipoint":s.points.forEach(e);break;case"polyline":s.paths.forEach((t=>t.forEach(e)));break;case"polygon":s.rings.forEach((t=>t.forEach(e)))}return s}_ensureSource(t){const e=this._sources[t];if(null!=e)return e;const s=this._createSource(t);return this._sources[t]=s,s}_createSource(t){const e=b.toJSON(t),s=this._hasZ,o=new v({geometryType:e,hasZ:s,hasM:!1});return{featureStore:o,queryEngine:new U({featureStore:o,fieldsIndex:w.fromLayerJSON({fields:[{name:I,type:"esriFieldTypeOID",alias:I}]}),geometryType:e,hasM:!1,hasZ:s,objectIdField:I,spatialReference:this.spatialReference,priority:O.SNAPPING,scheduler:null!=this.view&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:t}}_remove(t){this._mapSources((e=>this._removeFromSource(e,t)));for(const e of this._pendingAdds)e.graphics.delete(t.uid),0===e.graphics.size&&e.task.abort()}_removeFromSource(t,e){const s=e.uid;t.featureStore.has(s)&&(t.featureStore.removeById(e.uid),C(e.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(t){t.queryEngine.destroy(),this._sources[t.type]=null}_mapSources(t){const{point:e,polygon:s,polyline:o,multipoint:r}=this._sources,i=[];return null!=e&&i.push(t(e)),null!=s&&i.push(t(s)),null!=o&&i.push(t(o)),null!=r&&i.push(t(r)),i}};t([y()],z.prototype,"getGraphicsLayers",void 0),t([y({constructOnly:!0})],z.prototype,"layerSource",void 0),t([y({constructOnly:!0})],z.prototype,"spatialReference",void 0),t([y({constructOnly:!0})],z.prototype,"view",void 0),t([y({readOnly:!0})],z.prototype,"updating",null),t([y({readOnly:!0})],z.prototype,"availability",void 0),t([y()],z.prototype,"_hasZ",null),t([y()],z.prototype,"_snappingElevationAligner",null),t([y()],z.prototype,"_snappingElevationFilter",null),t([y()],z.prototype,"_symbologySnappingFetcher",null),t([y()],z.prototype,"_extrudedPolygonSymbolsCount",void 0),z=t([j("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],z);const I="OBJECTID";export{z as GraphicsSnappingSource};