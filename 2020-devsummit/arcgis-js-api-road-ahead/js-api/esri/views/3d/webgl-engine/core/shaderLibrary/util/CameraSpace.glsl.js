// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(f,b,d,e){Object.defineProperty(b,"__esModule",{value:!0});b.CameraSpace=function(a){a.fragment.uniforms.add("projInfo","vec4");a.fragment.uniforms.add("zScale","vec2");a.fragment.code.add(e.glsl(c||(c=d(["\n    vec3 reconstructPosition(vec2 fragCoord, float depth) {\n      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);\n    }\n  "],
["\n    vec3 reconstructPosition(vec2 fragCoord, float depth) {\n      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);\n    }\n  "]))))};var c});