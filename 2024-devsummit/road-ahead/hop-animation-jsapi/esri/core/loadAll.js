// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./asyncUtils","./Collection","./Loadable"],function(e,h,m,n){async function k(c,f){const l=[],g=(...a)=>{for(const b of a)null!=b&&(Array.isArray(b)?g(...b):m.isCollection(b)?b.forEach(p=>g(p)):n.isLoadable(b)&&l.push(b))};f(g);let d=null;await h.map(l,async a=>{a=await h.result("loadAll"in a&&"function"===typeof a.loadAll?a.loadAll():a.load());!1!==a.ok||d||(d=a)});if(d)throw d.error;return c}e.loadAll=async function(c,f){await c.load();return k(c,f)};e.loadAllChildren=k;Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});