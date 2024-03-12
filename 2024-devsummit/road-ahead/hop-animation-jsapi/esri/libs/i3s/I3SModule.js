// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets"],function(f,d,g){function h(a){return g.getAssetUrl(`esri/libs/i3s/${a}`)}let e;d.get=function(){e||=(new Promise(a=>(new Promise((b,c)=>f(["../../chunks/i3s"],b,c))).then(b=>b.i3s).then(({default:b})=>{const c=b({locateFile:h,onRuntimeInitialized:()=>a(c)});delete c.then}))).catch(a=>{throw a;});return e};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});