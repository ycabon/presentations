/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{propertyJSONMeta as r}from"../core/accessorSupport/decorators/property.js";function t(t,o,e){let i,c;return void 0===o?(c=t,i=[void 0]):"string"!=typeof o?(c=t,i=[void 0],e=o):(c=o,i=Array.isArray(t)?t:[t]),(t,o)=>{const s=t.constructor.prototype;for(const p of i){const i=r(t,p,c);i.write&&"object"==typeof i.write||(i.write={}),e&&(i.write.target=e),i.write.writer=s[o]}}}export{t as w};
