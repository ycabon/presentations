// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutput","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(e,g,a,f){e.ObjectAndLayerIdColor=function(b,c){const d=c.output===g.ShaderOutput.ObjectAndLayerIdColor;c=c.objectAndLayerIdColorInstanced;d&&(b.varyings.add("objectAndLayerIdColorVarying","vec4"),c?b.attributes.add(f.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):b.attributes.add(f.VertexAttribute.OBJECTANDLAYERIDCOLOR,"vec4"));b.vertex.code.add(a.glsl`
     void forwardObjectAndLayerIdColor() {
      ${d?c?a.glsl`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:a.glsl`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:a.glsl``} }`);b.fragment.code.add(a.glsl`
      void outputObjectAndLayerIdColor() {
        ${d?a.glsl`fragColor = objectAndLayerIdColorVarying;`:a.glsl``} }`)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});