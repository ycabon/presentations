// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../layers/support/associatedFeatureServiceUtils ../../layers/support/LayerLoadContext ../../layers/support/layerUtils ../../layers/support/lazyLayerLoader ../PortalItem ./loadUtils ./portalItemUtils".split(" "),function(k,t,u,v,l,w,p,f,m){async function x(a){await a.load();const b=new v.LayerLoadContext;a=await q(a,b);return y(a)}async function q(a,b){switch(a.type){case "Map Service":return z(a,b);case "Feature Service":return A(a,b);case "Feature Collection":return B(a);
case "Scene Service":return C(a,b);case "3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case "Image Service":return D(a,b);case "Stream Service":return{className:"StreamLayer"};case "Vector Tile Service":return{className:"VectorTileLayer"};case "GeoJson":return{className:"GeoJSONLayer"};case "CSV":return{className:"CSVLayer"};case "KML":return{className:"KMLLayer"};case "WFS":return{className:"WFSLayer"};case "WMTS":return{className:"WMTSLayer"};case "WMS":return{className:"WMSLayer"};
case "Feed":return{className:"StreamLayer"};case "Group Layer":return{className:"GroupLayer"};default:throw new t("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type});}}async function y(a){return{constructor:await (0,w.layerLookupMap[a.className])(),properties:a.properties}}async function z(a,b){return await E(a,b)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function A(a,b){a=await r(a,b);if("object"===typeof a){const {sourceJSON:c,className:d}=a;b={sourceJSON:c};
null!=a.id&&(b.layerId=a.id);return{className:d||"FeatureLayer",properties:b}}return{className:"GroupLayer"}}async function C(a,b){var c=await r(a,b,async()=>{try{if(!a.url)return[];const {serverUrl:d}=await u.findAssociatedFeatureService(a.url,{sceneLayerItem:a});return(await b.fetchServiceMetadata(d))?.tables??[]}catch{return[]}});if("object"===typeof c){const d={};let g=void 0;null!=c.id?(d.layerId=c.id,g=`${a.url}/layers/${c.id}`):g=a.url;if(a.typeKeywords?.length)for(const e of Object.keys(l.sceneServiceLayerTypeToClassName))if(a.typeKeywords.includes(e))return{className:l.sceneServiceLayerTypeToClassName[e]};
c=await b.fetchServiceMetadata(g,{customParameters:await b.fetchCustomParameters(a,e=>f.getFirstLayerOrTable(e)?.customParameters)});return{className:l.sceneServiceLayerTypeToClassName[c?.layerType]||"SceneLayer",properties:d}}return!1===c&&"Voxel"===(await b.fetchServiceMetadata(a.url))?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function B(a){await a.load();const b=m.hasTypeKeyword(a,"Map Notes"),c=m.hasTypeKeyword(a,"Markup");if(b||c)return{className:"MapNotesLayer"};if(m.hasTypeKeyword(a,
"Route Layer"))return{className:"RouteLayer"};a=await a.fetchData();return 1===f.getNumLayersAndTables(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function D(a,b){await a.load();var c=a.typeKeywords?.map(d=>d.toLowerCase())??[];if(c.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(c.includes("tiled imagery"))return{className:"ImageryTileLayer"};c=(await b.fetchItemData(a))?.layerType;if("ArcGISTiledImageServiceLayer"===c)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===
c)return{className:"ImageryLayer"};b=await b.fetchServiceMetadata(a.url,{customParameters:await b.fetchCustomParameters(a)});a=b.cacheType?.toLowerCase();b=b.capabilities?.toLowerCase().includes("tilesonly");return"map"===a||b?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}async function E(a,b){({tileInfo:a}=await b.fetchServiceMetadata(a.url,{customParameters:await b.fetchCustomParameters(a)}));return a}async function r(a,b,c){const {url:d,type:g}=a;var e="Feature Service"===g;if(!d)return{};
if(/\/\d+$/.test(d))return e&&(c=await b.fetchServiceMetadata(d,{customParameters:await b.fetchCustomParameters(a,F=>f.getFirstLayerOrTable(F)?.customParameters)}),"Oriented Imagery Layer"===c.type)?{id:c.id,className:"OrientedImageryLayer",sourceJSON:c}:{};await a.load();let h=await b.fetchItemData(a);if(e)return e=await f.preprocessFSItemData(h,d,b),c=n(e),"object"===typeof c&&(a=f.getSubtypeGroupLayerIds(e),b=f.getOrientedImageryLayerIds(e),e=f.getCatalogLayerIds(e),c.className=null!=c.id&&a.includes(c.id)?
"SubtypeGroupLayer":null!=c.id&&b?.includes(c.id)?"OrientedImageryLayer":null!=c.id&&e?.includes(c.id)?"CatalogLayer":"FeatureLayer"),c;"Scene Service"===g&&(h=await f.populateSceneServiceItemData(a,h,b));if(0<f.getNumLayersAndTables(h))return n(h);a=await b.fetchServiceMetadata(d);c&&(a.tables=await c());return n(a)}function n(a){return 1===f.getNumLayersAndTables(a)?{id:f.getFirstLayerOrTableId(a)}:!1}k.fromItem=async function(a){!a.portalItem||a.portalItem instanceof p||(a={...a,portalItem:new p(a.portalItem)});
const b=await x(a.portalItem);return new b.constructor({portalItem:a.portalItem,...b.properties})};k.selectLayerClassPath=q;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});