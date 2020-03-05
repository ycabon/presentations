// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64"],function(h,a,g,d,b){Object.defineProperty(a,"__esModule",{value:!0});a.viewAngle=function(c,a,b){c.worldUpAtPosition(a,f);d.vec3.subtract(e,b,a);c=d.vec3.length(e);return 0===c?0:g.acosClamped(d.vec3.dot(e,f)/c)};var f=b.vec3f64.create(),e=b.vec3f64.create()});