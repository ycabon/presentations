// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/compilerUtils"],function(a,c){a.isTerrainSurfaceLayer=function(b){switch(b.type){case "building-scene":case "catalog":case "catalog-dynamic-group":case "catalog-footprint":case "csv":case "dimension":case "feature":case "geo-rss":case "geojson":case "graphics":case "group":case "integrated-mesh":case "kml":case "knowledge-graph":case "link-chart":case "knowledge-graph-sublayer":case "line-of-sight":case "map-notes":case "ogc-feature":case "oriented-imagery":case "point-cloud":case "route":case "scene":case "stream":case "voxel":case "subtype-group":case "unknown":case "unsupported":case "wfs":case "integrated-mesh-3dtiles":case null:return!1;
case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "elevation":case "imagery":case "imagery-tile":case "map-image":case "media":case "open-street-map":case "tile":case "vector-tile":case "video":case "wcs":case "web-tile":case "wms":case "wmts":return!0;default:return c.neverReached(b.type),!1}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});