// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec42","../../../../core/libs/gl-matrix-2/factories/vec4f64"],function(b,d,c){const e=c.create();b.ensureColor4=function(a){return null==a?c.ZEROS:4===a.length?a:d.set(e,a[0],a[1],a[2],1)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});