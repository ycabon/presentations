// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/typedArrayUtil"],function(b,c){b.newUByteArray=function(a,d=!1){return a<=c.nativeArrayMaxSize?d?Array(a).fill(0):Array(a):new Uint8Array(a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});