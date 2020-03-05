// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../core/shaderModules/interfaces"],function(k,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.DiscardNonSilhouetteEdges=function(a,b){a=a.vertex;b.silhouette?(a.code.add(d.glsl(e||(e=c(["\n      bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {\n        float faceAVisible \x3d dot(viewDir, normalA);\n        float faceBVisible \x3d dot(viewDir, normalB);\n        return faceAVisible * faceBVisible \x3c 0.0;\n      }\n    "],
["\n      bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {\n        float faceAVisible \x3d dot(viewDir, normalA);\n        float faceBVisible \x3d dot(viewDir, normalB);\n        return faceAVisible * faceBVisible \x3c 0.0;\n      }\n    "])))),b.legacy?a.code.add(d.glsl(f||(f=c(["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 viewNormalA \x3d _modelToViewNormal(normalA);\n          vec3 viewNormalB \x3d _modelToViewNormal(normalB);\n          vec3 viewDir \x3d -viewPos;\n\n          if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {\n            return false;\n          }\n\n          gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "],
["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 viewNormalA \x3d _modelToViewNormal(normalA);\n          vec3 viewNormalB \x3d _modelToViewNormal(normalB);\n          vec3 viewDir \x3d -viewPos;\n\n          if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {\n            return false;\n          }\n\n          gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "])))):a.code.add(d.glsl(g||(g=c(["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 worldNormalA \x3d _modelToWorldNormal(normalA);\n          vec3 worldNormalB \x3d _modelToWorldNormal(normalB);\n          vec3 viewDir \x3d -worldPos;\n\n          if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {\n            return false;\n          }\n\n          gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "],
["\n        bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n          vec3 worldNormalA \x3d _modelToWorldNormal(normalA);\n          vec3 worldNormalB \x3d _modelToWorldNormal(normalB);\n          vec3 viewDir \x3d -worldPos;\n\n          if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {\n            return false;\n          }\n\n          gl_Position \x3d vec4(10.0, 10.0, 10.0, 1.0);\n          return true;\n        }\n      "]))))):a.code.add(d.glsl(h||(h=c(["\n      bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n        return false;\n      }\n    "],
["\n      bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {\n        return false;\n      }\n    "]))))};var e,f,g,h});