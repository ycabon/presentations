// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","../../chunks/vec32","../../core/libs/gl-matrix-2/factories/vec3f64"],function(d,h,b,k){const e=k.create(),f=k.create();d.angle=function(a,c){a=b.dot(a,c)/(b.length(a)*b.length(c));return-h.acosClamped(a)};d.angleAroundAxis=function(a,c,g){b.normalize(e,a);b.normalize(f,c);a=b.dot(e,f);a=h.acosClamped(a);c=b.cross(e,e,f);return 0>b.dot(c,g)?2*Math.PI-a:a};d.projectPoint=function(a,c,g){c=b.dot(a,c)/b.dot(a,a);return b.scale(g,a,c)};d.projectPointSignedLength=
function(a,c){return b.dot(a,c)/b.length(a)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});