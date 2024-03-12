// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],function(c,d,e,f){async function g(a){return a=await f.processRasterRendererParameters(a)}c.createRenderer=async function(a){a=await g(a);const b=e.createVectorFieldRenderer(a.layer.rasterInfo);if(null==b)throw new d("vector-field-renderer:not-supported","Only vector data is supported");a.flowRepresentation&&(b.flowRepresentation=a.flowRepresentation);a.rotationType&&(b.rotationType=a.rotationType);
a.style&&(b.style=a.style);return{renderer:b}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});