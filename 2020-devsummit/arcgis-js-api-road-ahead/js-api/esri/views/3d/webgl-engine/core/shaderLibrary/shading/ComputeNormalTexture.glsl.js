// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/interfaces"],function(p,f,c,n,d){Object.defineProperty(f,"__esModule",{value:!0});f.ComputeNormalTexture=function(a,e){var b=a.fragment;b.uniforms.add("normalTexture","sampler2D");b.uniforms.add("normalTextureSize","vec2");e.vertexTangets?(a.attributes.add("tangent","vec4"),a.varyings.add("vTangent","vec4"),a.vertex.code.add(d.glsl(g||(g=c(["\n      void transformVertexTangent(mat3 modelTransformForNormals) {\n        vTangent.xyz \x3d modelTransformForNormals * tangent.xyz;\n        vTangent.w \x3d tangent.w;\n      }\n    "],
["\n      void transformVertexTangent(mat3 modelTransformForNormals) {\n        vTangent.xyz \x3d modelTransformForNormals * tangent.xyz;\n        vTangent.w \x3d tangent.w;\n      }\n    "])))),2===e.doubleSidedMode?b.code.add(d.glsl(h||(h=c(["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness \x3d gl_FrontFacing ? vTangent.w : -vTangent.w;\n        vec3 tangent \x3d normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);\n        vec3 bitangent \x3d cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "],
["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness \x3d gl_FrontFacing ? vTangent.w : -vTangent.w;\n        vec3 tangent \x3d normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);\n        vec3 bitangent \x3d cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "])))):b.code.add(d.glsl(k||(k=c(["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness \x3d vTangent.w;\n        vec3 tangent \x3d normalize(vTangent.xyz);\n        vec3 bitangent \x3d cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "],
["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness \x3d vTangent.w;\n        vec3 tangent \x3d normalize(vTangent.xyz);\n        vec3 bitangent \x3d cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "]))))):(a.extensions.add("GL_OES_standard_derivatives"),b.code.add(d.glsl(l||(l=c(['\n    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {\n\n      vec3 Q1 \x3d dFdx(pos);\n      vec3 Q2 \x3d dFdy(pos);\n\n      vec2 stx \x3d dFdx(st);\n      vec2 sty \x3d dFdy(st);\n\n      float det \x3d stx.t * sty.s - sty.t * stx.s;\n\n      vec3 T \x3d stx.t * Q2 - sty.t * Q1; // compute tangent\n      T \x3d T - normal * dot(normal, T); // orthogonalize tangent\n      T *\x3d inversesqrt(max(dot(T,T), 1.e-20)); // "soft" normalize - goes to 0 when T goes to 0\n      vec3 B \x3d sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B\n      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates\n    }\n  '],
['\n    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {\n\n      vec3 Q1 \x3d dFdx(pos);\n      vec3 Q2 \x3d dFdy(pos);\n\n      vec2 stx \x3d dFdx(st);\n      vec2 sty \x3d dFdy(st);\n\n      float det \x3d stx.t * sty.s - sty.t * stx.s;\n\n      vec3 T \x3d stx.t * Q2 - sty.t * Q1; // compute tangent\n      T \x3d T - normal * dot(normal, T); // orthogonalize tangent\n      T *\x3d inversesqrt(max(dot(T,T), 1.e-20)); // "soft" normalize - goes to 0 when T goes to 0\n      vec3 B \x3d sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B\n      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates\n    }\n  '])))));
0!==e.attributeTextureCoordinates&&(a.include(n.VertexTextureCoordinates,e),b.code.add(d.glsl(m||(m=c(["\n    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {\n      vtc.uv \x3d uv;\n      ","\n      vec3 rawNormal \x3d textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;\n      return tangentSpace * rawNormal;\n    }\n  "],["\n    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {\n      vtc.uv \x3d uv;\n      ","\n      vec3 rawNormal \x3d textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;\n      return tangentSpace * rawNormal;\n    }\n  "])),
e.supportsTextureAtlas?"vtc.size \x3d normalTextureSize;":"")))};var g,h,k,l,m});