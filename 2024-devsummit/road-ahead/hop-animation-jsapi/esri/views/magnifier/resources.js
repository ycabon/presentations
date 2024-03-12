// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/promiseUtils","../../support/requestImageUtils"],function(g,h,m,k){const l=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));h.loadMagnifierResources=async function(a){var f=new Promise((c,d)=>g(["./mask-svg"],e=>c(l(e)),d)),b=new Promise((c,d)=>g(["./overlay-svg"],e=>c(l(e)),d));f=k.requestImage((await f).default,{signal:a});b=k.requestImage((await b).default,{signal:a});b={mask:await f,overlay:await b};
m.throwIfAborted(a);return b};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});