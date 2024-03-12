// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./GCSShiftTransform","./IdentityTransform","./PolynomialTransform"],function(c,e,f,g){const d={GCSShiftXform:e,IdentityXform:f,PolynomialXform:g},h=Object.keys(d);c.isTransformSupported=function(a){return!a||h.includes(a?.type)};c.readTransform=function(a){if(!a?.type)return null;var b=d[a?.type];return b?(b=new b,b.read(a),b):null};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});