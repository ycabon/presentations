// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../Point ./glb ./gltf ./types ./imageutils ./asset ./scene ./node".split(" "),function(a,l,r,t,b,m,u,v,w){async function n(c,d,e){d=d||{};c=new t.GLTF(c,d,e);e=c.params;e?e.origin||(e.origin=new l({x:-1,y:-1,z:-1})):e={origin:new l({x:-1,y:-1,z:-1})};e=e.origin;c=c.gltf;let p=1,q=1,k=null;await Promise.allSettled(c.extras?.promises??[]);const h={origin:e};delete c.extras;c=JSON.stringify(c,(f,g)=>{if("extras"!==f){if(g instanceof ArrayBuffer){if(m.isArrayBufferPNG(g))switch(d.imageOutputType){case b.ImageOutputType.DataURI:case b.ImageOutputType.GLB:break;
default:return f=`img${q}.png`,q++,h[f]=g,f}switch(d.bufferOutputType){case b.BufferOutputType.DataURI:return m.encodeBase64DataUri(g);case b.BufferOutputType.GLB:if(k)throw Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");k=g;return;default:return f=`data${p}.bin`,p++,h[f]=g,f}}return g}},"number"===typeof d.jsonSpacing?d.jsonSpacing:4);d.bufferOutputType===b.BufferOutputType.GLB||d.imageOutputType===b.ImageOutputType.GLB?h["model.glb"]=(new r.GLB(c,k)).buffer:
h["model.gltf"]=c;return h}Object.defineProperty(a,"AlphaMode",{enumerable:!0,get:()=>b.AlphaMode});Object.defineProperty(a,"AttributeType",{enumerable:!0,get:()=>b.AttributeType});Object.defineProperty(a,"BufferOutputType",{enumerable:!0,get:()=>b.BufferOutputType});Object.defineProperty(a,"ColorMode",{enumerable:!0,get:()=>b.ColorMode});Object.defineProperty(a,"ImageOutputType",{enumerable:!0,get:()=>b.ImageOutputType});Object.defineProperty(a,"MeshMode",{enumerable:!0,get:()=>b.MeshMode});a.Asset=
u.Asset;a.Scene=v.Scene;a.Node=w.Node;a.exportGLB=function(c,d){return n(c,{bufferOutputType:b.BufferOutputType.GLB,imageOutputType:b.ImageOutputType.GLB,jsonSpacing:0},d)};a.exportGLTF=n;a.modelNameGlb="model.glb";a.modelNameGltf="model.gltf";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});