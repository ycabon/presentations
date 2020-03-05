// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../util/DecodeNormal.glsl","../../shaderModules/interfaces"],function(l,e,b,k,c){Object.defineProperty(e,"__esModule",{value:!0});e.NormalAttribute=function(a,d){0===d.normalType&&(a.attributes.add("normal","vec3"),a.vertex.code.add(c.glsl(f||(f=b(["\n      vec3 normalModel() {\n        return normal;\n      }\n    "],["\n      vec3 normalModel() {\n        return normal;\n      }\n    "])))));1===d.normalType&&
(a.include(k.DecodeNormal),a.attributes.add("normalCompressed","vec2"),a.vertex.code.add(c.glsl(g||(g=b(["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "],["\n      vec3 normalModel() {\n        return decodeNormal(normalCompressed);\n      }\n    "])))));3===d.normalType&&(a.extensions.add("GL_OES_standard_derivatives"),a.fragment.code.add(c.glsl(h||(h=b(["\n      vec3 screenDerivativeNormal(vec3 positionView) {\n        return normalize(cross(dFdx(positionView), dFdy(positionView)));\n      }\n    "],
["\n      vec3 screenDerivativeNormal(vec3 positionView) {\n        return normalize(cross(dFdx(positionView), dFdy(positionView)));\n      }\n    "])))))};var f,g,h});