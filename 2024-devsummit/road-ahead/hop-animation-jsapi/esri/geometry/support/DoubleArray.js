// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/typedArrayUtil"],function(d,e){d.copyInto=function(a,b){for(let c=0;c<b.length;++c)a[c]=b[c];return a};d.doubleArrayFrom=function(a){return(e.isArray(a)?a.length:a.byteLength/8)<=e.nativeArrayMaxSize?Array.from(a):new Float64Array(a)};d.doubleSubArray=function(a,b,c){return Array.isArray(a)?a.slice(b,b+c):a.subarray(b,b+c)};d.newDoubleArray=function(a,b=!1){return a<=e.nativeArrayMaxSize?b?Array(a).fill(0):Array(a):new Float64Array(a)};d.toFloat64Array=function(a){return Array.isArray(a)?
new Float64Array(a):a};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});