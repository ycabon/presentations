// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../layers/ElevationLayer ../../../layers/TileLayer ../../../layers/VectorTileLayer ./terrainUtilsPlanar ./terrainUtilsSpherical".split(" "),function(w,b,q,r,t,u,v){function k(a){return a&&"esri.views.3d.layers.TileLayerView3D"===a.declaredClass}function l(a){return a&&"esri.views.3d.layers.VectorTileLayerView3D"===a.declaredClass}function m(a){return a&&"esri.views.3d.layers.WMTSLayerView3D"===a.declaredClass}function n(a){return a&&"esri.views.3d.layers.ElevationLayerView3D"===
a.declaredClass}function h(a,g,c,b){return p["local"===b||"planar"===b?"planar":"spherical"].checkIfTileInfoSupportedForViewSR(a,c,g)}Object.defineProperty(b,"__esModule",{value:!0});var p={planar:u,spherical:v};b.weakAssert=function(a,b){a||console.warn("Terrain: "+b)};b.autoUpdateSkirtsVisibility=function(a,b,c,d){var e=p[a.manifold],f=e.isInsideExtent(a,b);f?c=a.getElevation(b[0],b[1],b[1],c):(c=a.elevationBounds,c=.5*(c.min+c.max));c=b[2]-c;d=Math.abs(c)<d?0:0>c?-1:1;f||(e.isInsideExtent(a,b,
a.hideSkirtsDistanceFromExtentMargin)?(b=e.tiltToExtentEdge(a,b),b>a.hideSkirtsMinimumCameraTilt&&b<a.hideSkirtsMaximumCameraTilt&&(d=0)):d=0);a.skirtScale=d};b.isVectorTileLayer=function(a){return a&&a instanceof t};b.isTileLayerView=k;b.isVectorTileLayerView=l;b.isWMTSLayerView=m;b.isElevationLayerView=n;b.isSurfaceLayerView=function(a){return a&&(k(a)||n(a)||l(a)||m(a))};b.useFetchTileForLayer=function(a){return a.fetchTile&&!(a.fetchTile===r.prototype.fetchTile||a.fetchTile===q.prototype.fetchTile)};
b.checkIfTileInfoSupportedForView=h;b.getTiledLayerInfo=function(a,g,c){var d,e;if("wmts"===a.type){if(a=a.activeLayer){var f=a.tileMatrixSet;if(f)d=f.tileInfo,e=f.fullExtent;else if(a=a.tileMatrixSets)if(a=a.find(function(a){return null==h(a.tileInfo,a.fullExtent,g,c)}))return{tileInfo:a.tileInfo,fullExtent:a.fullExtent}}}else d="vector-tile"!==a.type||b.test.force512VTL?a.tileInfo:a.compatibleTileInfo256,e=a.fullExtent;return d&&e&&null==h(d,e,g,c)?{tileInfo:d,fullExtent:e}:{tileInfo:null,fullExtent:null}};
b.test={force512VTL:!1}});