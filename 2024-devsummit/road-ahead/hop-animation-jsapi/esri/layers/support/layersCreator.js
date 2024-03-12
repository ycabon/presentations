// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Collection ../../core/has ./LayerLoadContext ./lazyLayerLoader ../../portal/PortalItem ../../portal/support/featureCollectionUtils ../../portal/support/portalLayers ../../renderers/support/styleUtils".split(" "),function(l,y,P,z,f,p,m,A,B){async function q(a,b,d){if(b){b=b.map(c=>C(c,d));b=await Promise.allSettled(b);for(const c of b)"rejected"!==c.status&&c.value&&a.add(c.value)}}async function C(a,b){const d=await D(a,b);return E(d,a,b)}async function E(a,b,d){a=new a;
a.read(b,d.context);"group"===a.type&&("GroupLayer"===b.layerType?await r(a,b,d):n(b)?F(a,b,d.context):t(b)&&await G(a,b,d.context));await B.loadStyleRenderer(a,d.context);return a}async function D(a,b){var d=b.context;let c;switch(d.origin){case "web-scene":switch(d.layerContainerType){case "basemap":c=H;break;case "ground":c=I;break;case "tables":c=J;break;default:c=K}break;case "link-chart":switch(d.layerContainerType){case "basemap":c=L;break;case "tables":c=M;break;default:c=N}break;default:switch(d.layerContainerType){case "basemap":c=
u;break;case "tables":c=v;break;default:c=w}}let e=a.layerType||a.type;!e&&b?.defaultLayerType&&(e=b.defaultLayerType);b=(b=c[e])?f.layerLookupMap[b]:f.layerLookupMap.UnknownLayer;n(a)?(d=d?.portal,a.itemId&&(a=new p({id:a.itemId,portal:d}),await a.load(),a=(await A.selectLayerClassPath(a,new z.LayerLoadContext)).className||"UnknownLayer",b=f.layerLookupMap[a])):"ArcGISFeatureLayer"===e?m.isMapNotesLayer(a)||m.isMarkupLayer(a)?b=f.layerLookupMap.MapNotesLayer:m.isRouteLayer(a)?b=f.layerLookupMap.RouteLayer:
t(a)&&(b=f.layerLookupMap.GroupLayer):a.wmtsInfo?.url&&a.wmtsInfo.layerIdentifier?b=f.layerLookupMap.WMTSLayer:"WFS"===e&&"2.0.0"!==a.wfsInfo?.version&&(b=f.layerLookupMap.UnsupportedLayer);return b()}function t(a){return"ArcGISFeatureLayer"!==a.layerType||n(a)?!1:1<(a.featureCollection?.layers?.length??0)}function n(a){return"Feature Collection"===a.type}async function r(a,b,d){const c=new y;b=q(c,Array.isArray(b.layers)?b.layers:[],d);try{try{if(await b,"group"===a.type)return a.layers.addMany(c),
a}catch(e){a.destroy();for(const g of c)g.destroy();throw e;}}catch(e){throw e;}}function F(a,b,d){b.itemId&&(a.portalItem=new p({id:b.itemId,portal:d?.portal}),a.when(()=>{const c=e=>{var g=e.layerId;x(e,a,b,g,d);(g=b.featureCollection?.layers?.[g])&&e.read(g,d)};a.layers?.forEach(c);a.tables?.forEach(c)}))}async function G(a,b,d){const c=await (0,f.layerLookupMap.FeatureLayer)();var e=b.featureCollection;const g=e?.showLegend;e=e?.layers?.map((h,O)=>{const k=new c;k.read(h,d);h={...d,ignoreDefaults:!0};
x(k,a,b,O,h);null!=g&&k.read({showLegend:g},h);return k});a.layers.addMany(e??[])}function x(a,b,d,c,e){a.read({id:`${b.id}-sublayer-${c}`,visibility:d.visibleLayers?.includes(c)??!0},e)}const K={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",
ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},I={ArcGISTiledElevationServiceLayer:"ElevationLayer",
DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},J={ArcGISFeatureLayer:"FeatureLayer"},H={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},w={ArcGISAnnotationLayer:"UnsupportedLayer",
ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",
GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},v={ArcGISFeatureLayer:"FeatureLayer"},u={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",
ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},N={...w,LinkChartLayer:"LinkChartLayer"},M={...v},L={...u};l.populateGroupLayer=r;l.populateOperationalLayers=q;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});