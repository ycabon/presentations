// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../typedArrayUtil"],function(c,d){c.isVec3=function(a){var b;(b=d.isFloat32Array(a)&&3<=a.length)||(b=(d.isFloat64Array(a)||Array.isArray(a))&&3<=a.length);return b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});