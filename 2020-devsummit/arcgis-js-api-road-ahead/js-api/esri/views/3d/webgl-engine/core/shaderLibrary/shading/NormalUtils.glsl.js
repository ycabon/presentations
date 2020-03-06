// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(k,a,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.NormalUtils=function(d,a){0===a.viewingMode?d.vertex.code.add(c.glsl(e||(e=b(["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return normalize(pos + origin);\n      }\n    "],["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return normalize(pos + origin);\n      }\n    "])))):
d.vertex.code.add(c.glsl(f||(f=b(["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code\n      }\n    "],["\n      vec3 getLocalUp(in vec3 pos, in vec3 origin) {\n          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code\n      }\n    "]))));0===a.viewingMode?d.vertex.code.add(c.glsl(g||(g=b(["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t \x3d normalize(cross(vec3(0.0, 0.0, 1.0), n));\n            vec3 b \x3d normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "],
["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t \x3d normalize(cross(vec3(0.0, 0.0, 1.0), n));\n            vec3 b \x3d normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "])))):d.vertex.code.add(c.glsl(h||(h=b(["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t \x3d vec3(1.0, 0.0, 0.0);\n            vec3 b \x3d normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "],["\n        mat3 getTBNMatrix(in vec3 n) {\n            vec3 t \x3d vec3(1.0, 0.0, 0.0);\n            vec3 b \x3d normalize(cross(n, t));\n            return mat3(t, b, n);\n        }\n    "]))))};
var e,f,g,h});