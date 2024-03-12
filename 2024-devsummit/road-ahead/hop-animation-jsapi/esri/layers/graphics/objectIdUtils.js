// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.findLastObjectIdFromFeatures=function(d,a){let c=0;for(const e of a)a=e.attributes?.[d],"number"===typeof a&&isFinite(a)&&(c=Math.max(c,a));return c};b.initialObjectId=1;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});