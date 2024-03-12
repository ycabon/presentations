// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this.origin=a;this.buffers=[]}dispose(){this.buffers.forEach(a=>a.vao.dispose());this.buffers.length=0}findBuffer(a){return this.buffers.find(d=>d.instances.has(a))}}b.PerOriginData=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});