// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return a instanceof Float32Array&&2<=a.length}function d(a){return Array.isArray(a)&&2<=a.length}b.isVec2=function(a){return c(a)||d(a)};b.isVec2f32=c;b.isVec2f64=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});