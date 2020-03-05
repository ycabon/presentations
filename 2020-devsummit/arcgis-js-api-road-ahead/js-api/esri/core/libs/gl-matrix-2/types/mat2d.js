// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){function c(a){return a instanceof Float32Array&&6<=a.length}function d(a){return Array.isArray(a)&&6<=a.length}Object.defineProperty(b,"__esModule",{value:!0});b.isMat2df32=c;b.isMat2df64=d;b.isMat2d=function(a){return c(a)||d(a)}});