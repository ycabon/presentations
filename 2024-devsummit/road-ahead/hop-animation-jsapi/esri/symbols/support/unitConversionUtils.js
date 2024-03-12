// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../renderers/support/lengthUtils"],function(b,c){const d=function(){const a=Object.keys(c.meterIn);a.sort();return a}();b.getMetersPerUnit=function(a){return 1/(c.meterIn[a]||1)};b.supportedUnits=d;b.supportsUnit=function(a){return!!a&&null!=c.meterIn[a]};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});