// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec32","../../../../../core/libs/gl-matrix-2/factories/vec3f64","../../../../../chunks/boundedPlane"],function(b,e,f,a){const c=a.create(),g=f.create();b.distanceToTile=function(d,h){a.fromAABoundingRect(h.extent,c);return a.distance(c,e.set(g,d.x,d.y,0))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});