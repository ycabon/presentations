// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../collections/Component/Material/shader/DecodeSymbolColor.glsl","../../shaderModules/interfaces"],function(h,b,c,g,d){Object.defineProperty(b,"__esModule",{value:!0});b.SymbolColor=function(a,b){b.symbolColor?(a.include(g.DecodeSymbolColor),a.attributes.add("symbolColor","vec4"),a.varyings.add("colorMixMode","mediump float")):a.fragment.uniforms.add("colorMixMode","int");b.symbolColor?a.vertex.code.add(d.glsl(e||
(e=c(["\n    int symbolColorMixMode;\n\n    vec4 getSymbolColor() {\n      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;\n    }\n\n    void forwardColorMixMode() {\n      colorMixMode \x3d float(symbolColorMixMode) + 0.5;\n    }\n  "],["\n    int symbolColorMixMode;\n\n    vec4 getSymbolColor() {\n      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;\n    }\n\n    void forwardColorMixMode() {\n      colorMixMode \x3d float(symbolColorMixMode) + 0.5;\n    }\n  "])))):
a.vertex.code.add(d.glsl(f||(f=c(["\n    vec4 getSymbolColor() { return vec4(1.0); }\n    void forwardColorMixMode() {}\n    "],["\n    vec4 getSymbolColor() { return vec4(1.0); }\n    void forwardColorMixMode() {}\n    "]))))};var e,f});