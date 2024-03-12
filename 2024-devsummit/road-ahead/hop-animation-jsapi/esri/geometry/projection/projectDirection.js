// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/vec32","../../core/libs/gl-matrix-2/factories/vec3f64","./projectVectorToVector"],function(e,a,f,g){const b=f.create(),c=f.create();e.projectDirection=function(h,m,k,d,l){a.copy(b,h);a.add(c,h,m);g.projectVectorToVector(b,k,b,l);g.projectVectorToVector(c,k,c,l);a.subtract(d,c,b);a.normalize(d,d)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});