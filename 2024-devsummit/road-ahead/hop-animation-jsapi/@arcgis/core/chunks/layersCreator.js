/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../core/Collection.js";import"../core/lang.js";import{s as r,L as a}from"./portalLayers.js";import{l as t}from"./lazyLayerLoader.js";import o from"../portal/PortalItem.js";import{l as i}from"./styleUtils2.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"../config.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/Error.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./associatedFeatureServiceUtils.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../request.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./requestPresets.js";import"./layerUtils2.js";import"./portalItemUtils.js";import"../geometry/projection.js";import"./vec3f64.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./asyncUtils.js";function s(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}async function y(e,y,G){if(!y)return;const M=y.map((e=>async function(e,y){const G=await async function(e,i){const y=i.context,f=function(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=c;break;case"ground":r=n;break;case"tables":r=l;break;default:r=p}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=j;break;case"tables":r=d;break;default:r=S}break;default:switch(e.layerContainerType){case"basemap":r=u;break;case"tables":r=m;break;default:r=L}}return r}(y);let T=e.layerType||e.type;!T&&i?.defaultLayerType&&(T=i.defaultLayerType);const G=f[T];let M=G?t[G]:t.UnknownLayer;if(I(e)){const i=y?.portal;if(e.itemId){const s=new o({id:e.itemId,portal:i});await s.load();const y=(await r(s,new a)).className||"UnknownLayer";M=t[y]}}else"ArcGISFeatureLayer"===T?function(e){return s(e,"notes")}(e)||function(e){return s(e,"markup")}(e)?M=t.MapNotesLayer:function(e){return s(e,"route")}(e)?M=t.RouteLayer:g(e)&&(M=t.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?M=t.WMTSLayer:"WFS"===T&&"2.0.0"!==e.wfsInfo?.version&&(M=t.UnsupportedLayer);return M()}(e,y);return async function(e,r,a){const s=new e;return s.read(r,a.context),"group"===s.type&&("GroupLayer"===r.layerType?await f(s,r,a):I(r)?function(e,r,a){r.itemId&&(e.portalItem=new o({id:r.itemId,portal:a?.portal}),e.when((()=>{const t=t=>{const o=t.layerId;T(t,e,r,o,a);const i=r.featureCollection?.layers?.[o];i&&t.read(i,a)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(s,r,a.context):g(r)&&await async function(e,r,a){const o=t.FeatureLayer,i=await o(),s=r.featureCollection,y=s?.showLegend,p=s?.layers?.map(((t,o)=>{const s=new i;s.read(t,a);const p={...a,ignoreDefaults:!0};return T(s,e,r,o,p),null!=y&&s.read({showLegend:y},p),s}));e.layers.addMany(p??[])}(s,r,a.context)),await i(s,a.context),s}(G,e,y)}(e,G))),b=await Promise.allSettled(M);for(const r of b)"rejected"===r.status||r.value&&e.add(r.value)}const p={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},n={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},l={ArcGISFeatureLayer:"FeatureLayer"},c={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},L={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},S={...L,LinkChartLayer:"LinkChartLayer"},d={...m},j={...u};function g(e){return"ArcGISFeatureLayer"===e.layerType&&!I(e)&&(e.featureCollection?.layers?.length??0)>1}function I(e){return"Feature Collection"===e.type}async function f(r,a,t){const o=new e,i=y(o,Array.isArray(a.layers)?a.layers:[],t);try{try{if(await i,"group"===r.type)return r.layers.addMany(o),r}catch(e){r.destroy();for(const e of o)e.destroy();throw e}}catch(e){throw e}}function T(e,r,a,t,o){e.read({id:`${r.id}-sublayer-${t}`,visibility:a.visibleLayers?.includes(t)??!0},o)}export{f as populateGroupLayer,y as populateOperationalLayers};