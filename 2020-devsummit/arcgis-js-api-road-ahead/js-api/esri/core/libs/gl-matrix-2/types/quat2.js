// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){function c(a){return a instanceof Float32Array&&8<=a.length}function d(a){return Array.isArray(a)&&8<=a.length}Object.defineProperty(b,"__esModule",{value:!0});b.isQuat2f32=c;b.isQuat2f64=d;b.isQuat2=function(a){return c(a)||d(a)}});