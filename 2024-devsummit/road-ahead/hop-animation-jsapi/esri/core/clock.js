// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./handleUtils"],function(a,d){function b(c){return{setTimeout:(e,f)=>{const g=c.setTimeout(e,f);return d.makeHandle(()=>c.clearTimeout(g))}}}const h=b(globalThis);a.clock=h;a.wrap=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});