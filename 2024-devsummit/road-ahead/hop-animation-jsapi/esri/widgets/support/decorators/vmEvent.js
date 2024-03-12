// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(b){return b.split(",").map(a=>a.trim())}c.vmEvent=function(b){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);a=a._delegatedEventNames;const e=Array.isArray(b)?b:d(b);a.push(...e)}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});