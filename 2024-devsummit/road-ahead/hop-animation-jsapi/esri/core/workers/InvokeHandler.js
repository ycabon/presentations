// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.createInvokeProxy=function(h,d){return new Proxy({},{get(k,e,l){return(...b)=>{let f,g;const a=b[b.length-1];"object"===typeof a&&!Array.isArray(a)&&null!=a&&("signal"in a||"transferList"in a||0===Object.keys(a).length)&&(f=a.signal,g=a.transferList,b.pop());return h.apply(d?`${d}.${e.toString()}`:e.toString(),b,{transferList:g,signal:f})}}})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});