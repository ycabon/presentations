// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix","../../support/mathUtils"],function(h,a,b,f){Object.defineProperty(a,"__esModule",{value:!0});a.viewAngle=function(c,a,g){c.worldUpAtPosition(a,e);b.vec3d.subtract(g,a,d);c=b.vec3d.length(d);return 0===c?0:f.acos(b.vec3d.dot(d,e)/c)};var e=b.vec3d.create(),d=b.vec3d.create()});