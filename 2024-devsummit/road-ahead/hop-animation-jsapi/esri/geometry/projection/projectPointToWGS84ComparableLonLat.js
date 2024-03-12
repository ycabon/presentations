// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/vec3f64","./projectVectorToWGS84ComparableLonLat"],function(c,e,f){const a=e.create();c.projectPointToWGS84ComparableLonLat=function(b,g){a[0]=b.x;a[1]=b.y;const d=b.z;a[2]=void 0!==d?d:0;return f.projectVectorToWGS84ComparableLonLat(a,b.spatialReference,g)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});