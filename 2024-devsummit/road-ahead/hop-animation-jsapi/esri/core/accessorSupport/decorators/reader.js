// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./property"],function(g,k){g.reader=function(b,c,d){let e,f;void 0===c||Array.isArray(c)?(f=b,d=c,e=[void 0]):(f=c,e=Array.isArray(b)?b:[b]);return(h,l)=>{const m=h.constructor.prototype;e.forEach(a=>{a=k.propertyJSONMeta(h,a,f);a.read&&"object"===typeof a.read||(a.read={});a.read.reader=m[l];d&&(a.read.source=(a.read.source||[]).concat(d))})}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});