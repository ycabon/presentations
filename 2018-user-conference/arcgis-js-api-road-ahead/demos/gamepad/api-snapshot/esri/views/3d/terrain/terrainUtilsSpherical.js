// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../lib/glMatrix ../support/earthUtils ../support/projectionUtils ./TilingScheme".split(" "),function(k,a,d,c,h,e,f){Object.defineProperty(a,"__esModule",{value:!0});var g=c.vec3d.create();a.isInsideExtent=function(b,l,a){void 0===a&&(a=0);return!0};a.getElevation=function(b,a){e.bufferToBuffer(a,e.SphericalECEFSpatialReference,0,g,b.spatialReference,0,1);return b.getElevation(g)};a.tiltToExtentEdge=function(b,a){return 0};a.getCameraElevation=function(b){return c.vec3d.length(b)-
h.earthRadius};a.checkIfTileInfoSupportedForViewSR=function(b,a,c){a=b.lods.length-1;if(b.spatialReference.isWebMercator){if(!f.makeWebMercatorAuxiliarySphere(a).compatibleWith(b))return new d("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else if(b.spatialReference.isWGS84){if(!f.makeWGS84WithTileSize(b.size[1],a).compatibleWith(b))return new d("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme")}else return new d("tilingscheme:global-unsupported-spatial-reference",
"The tiling scheme spatial reference is not supported in global scenes");if(c&&!b.spatialReference.equals(c))return new d("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}});