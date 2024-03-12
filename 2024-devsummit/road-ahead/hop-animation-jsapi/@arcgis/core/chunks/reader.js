/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{propertyJSONMeta as r}from"../core/accessorSupport/decorators/property.js";function o(o,e,t){let a,c;return void 0===e||Array.isArray(e)?(c=o,t=e,a=[void 0]):(c=e,a=Array.isArray(o)?o:[o]),(o,e)=>{const s=o.constructor.prototype;a.forEach((a=>{const d=r(o,a,c);d.read&&"object"==typeof d.read||(d.read={}),d.read.reader=s[e],t&&(d.read.source=(d.read.source||[]).concat(t))}))}}export{o as r};
