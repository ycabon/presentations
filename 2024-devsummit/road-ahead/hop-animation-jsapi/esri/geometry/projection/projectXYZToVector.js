// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/vec3f64","./projectBuffer"],function(b,c,d){const a=c.create();b.projectXYZToVector=function(e,f,g,h,k,l){a[0]=e;a[1]=f;a[2]=g;return d.projectBuffer(a,h,0,k,l,0,1)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});