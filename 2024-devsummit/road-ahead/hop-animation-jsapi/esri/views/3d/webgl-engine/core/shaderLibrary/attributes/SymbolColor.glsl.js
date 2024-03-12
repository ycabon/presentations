// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl ../../shaderModules/IntegerPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute ../../../materials/internal/MaterialUtil".split(" "),function(b,d,e,c,f,g){b.SymbolColor=function(a,h){h.hasSymbolColors?(a.include(d.DecodeSymbolColor),a.attributes.add(f.VertexAttribute.SYMBOLCOLOR,"vec4"),a.varyings.add("colorMixMode","mediump float"),a.vertex.code.add(c.glsl`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(a.fragment.uniforms.add(new e.IntegerPassUniform("colorMixMode",k=>g.colorMixModes[k.colorMixMode])),a.vertex.code.add(c.glsl`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});