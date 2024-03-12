// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/typedArrayUtil"],function(c,b){c.cloneAttributeData=function(a){if(a.length<b.nativeArrayMaxSize)return Array.from(a);if(b.isArray(a))return Float64Array.from(a);if(!("BYTES_PER_ELEMENT"in a))return Array.from(a);switch(a.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(a);case 2:return b.isUint16Array(a)?Uint16Array.from(a):Int16Array.from(a);case 4:return Float32Array.from(a);default:case 8:return Float64Array.from(a)}};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});