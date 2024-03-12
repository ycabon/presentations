// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets"],function(f,e,g){function h(b){return g.getAssetUrl(`esri/libs/vxl/${b}`)}e.loadVoxelWASM=function(b){return(new Promise(c=>(new Promise((a,d)=>f(["../../chunks/vxlLayer"],a,d))).then(a=>a.vxlLayer).then(({default:a})=>{const d=a({locateFile:h,preinitializedWebGLContext:b,onRuntimeInitialized:()=>c(d)})}))).catch(c=>{throw c;})};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});