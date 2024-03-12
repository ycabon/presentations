// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../assets","../core/has"],function(d,c,g,h){async function k(){e=await (h("esri-csp-restrictions")?await (new Promise((a,b)=>d(["../chunks/libtess-asm"],a,b))).then(a=>a.libtessAsm):await (new Promise((a,b)=>d(["../chunks/libtess"],a,b))).then(a=>a.libtess)).default({locateFile:a=>g.getAssetUrl(`esri/core/libs/libtess/${a}`)})}let f=null,e=null;c.loadLibtess=async function(){f||=k();return f};c.triangulate=function(a,b){return e.triangulate(a,b,Math.max(a.length,128E3))};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});