// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./property"],function(g,k){g.writer=function(a,c,f){let d,e;void 0===c?(e=a,d=[void 0]):"string"!==typeof c?(e=a,d=[void 0],f=c):(e=c,d=Array.isArray(a)?a:[a]);return(h,l)=>{const m=h.constructor.prototype;for(const n of d){const b=k.propertyJSONMeta(h,n,e);b.write&&"object"===typeof b.write||(b.write={});f&&(b.write.target=f);b.write.writer=m[l]}}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});