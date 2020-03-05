// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../../core/shaderModules/interfaces"],function(k,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.VertexDiscardByOpacity=function(a,b){a=a.vertex;a.code.add(d.glsl(e||(e=c(["\n  #define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)\n  "],["\n  #define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)\n  "]))));switch(b.vertexDiscardMode){case 0:a.code.add(d.glsl(f||(f=c(["\n        #define vertexDiscardByOpacity(_opacity_) {}\n      "],
["\n        #define vertexDiscardByOpacity(_opacity_) {}\n      "]))));break;case 2:a.code.add(d.glsl(g||(g=c(["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ \x3e  VERTEX_DISCARD_CUTOFF) {  gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "],["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ \x3e  VERTEX_DISCARD_CUTOFF) {  gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "]))));break;case 1:a.code.add(d.glsl(h||(h=c(["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ \x3c\x3d VERTEX_DISCARD_CUTOFF) {  gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "],
["\n        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ \x3c\x3d VERTEX_DISCARD_CUTOFF) {  gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0); return; } }\n      "]))))}};var e,f,g,h});