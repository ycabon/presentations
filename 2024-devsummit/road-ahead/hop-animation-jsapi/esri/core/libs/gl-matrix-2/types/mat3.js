// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a){return a instanceof Float32Array&&9<=a.length}function d(a){return Array.isArray(a)&&9<=a.length}b.isMat3=function(a){return c(a)||d(a)};b.isMat3f32=c;b.isMat3f64=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});