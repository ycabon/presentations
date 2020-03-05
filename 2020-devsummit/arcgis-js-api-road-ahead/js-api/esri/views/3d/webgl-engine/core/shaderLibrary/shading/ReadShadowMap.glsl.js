// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(k,c,f,g,h){function d(a){a.include(g.RgbaFloatEncoding);a.fragment.uniforms.add("depthTex","sampler2D");a.fragment.uniforms.add("shadowMapNum","int");a.fragment.uniforms.add("shadowMapDistance","vec4");a.fragment.uniforms.add("shadowMapMatrix","mat4",4);a.fragment.uniforms.add("depthHalfPixelSz","float");a.fragment.code.add(h.glsl(e||(e=
f(["\n    float readShadowMap(const in vec3 _vpos, float _linearDepth) {\n      float halfPixelSize \x3d depthHalfPixelSz;\n      vec4 distance \x3d shadowMapDistance;\n      float depth \x3d _linearDepth;\n\n      //choose correct cascade\n      int i \x3d depth \x3c distance[1] ? 0 : depth \x3c distance[2] ? 1 : depth \x3c distance[3] ? 2 : 3;\n\n      if (i \x3e\x3d shadowMapNum) { return 0.0; }\n\n      mat4 mat \x3d i \x3d\x3d 0 ? shadowMapMatrix[0] : i \x3d\x3d 1 ? shadowMapMatrix[1] : i \x3d\x3d 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];\n\n      vec4 lv \x3d mat * vec4(_vpos, 1.0);\n      lv.xy /\x3d lv.w;\n\n      // vertex completely outside? -\x3e no shadow\n      vec3 lvpos \x3d 0.5 * lv.xyz + vec3(0.5);\n      if (lvpos.z \x3e\x3d 1.0) { return 0.0; }\n      if (lvpos.x \x3c 0.0 || lvpos.x \x3e 1.0 || lvpos.y \x3c 0.0 || lvpos.y \x3e 1.0) { return 0.0; }\n\n      // calc coord in cascade texture\n      vec2 uv \x3d vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;\n\n      float texSize \x3d 0.5 / halfPixelSize;\n\n      // filter, offset by half pixels\n      vec2 st \x3d fract((vec2(halfPixelSize) + uv) * texSize);\n\n      float s00 \x3d rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n      float s10 \x3d rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n      float s11 \x3d rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n      float s01 \x3d rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n\n      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);\n    }\n  "],
["\n    float readShadowMap(const in vec3 _vpos, float _linearDepth) {\n      float halfPixelSize \x3d depthHalfPixelSz;\n      vec4 distance \x3d shadowMapDistance;\n      float depth \x3d _linearDepth;\n\n      //choose correct cascade\n      int i \x3d depth \x3c distance[1] ? 0 : depth \x3c distance[2] ? 1 : depth \x3c distance[3] ? 2 : 3;\n\n      if (i \x3e\x3d shadowMapNum) { return 0.0; }\n\n      mat4 mat \x3d i \x3d\x3d 0 ? shadowMapMatrix[0] : i \x3d\x3d 1 ? shadowMapMatrix[1] : i \x3d\x3d 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];\n\n      vec4 lv \x3d mat * vec4(_vpos, 1.0);\n      lv.xy /\x3d lv.w;\n\n      // vertex completely outside? -\x3e no shadow\n      vec3 lvpos \x3d 0.5 * lv.xyz + vec3(0.5);\n      if (lvpos.z \x3e\x3d 1.0) { return 0.0; }\n      if (lvpos.x \x3c 0.0 || lvpos.x \x3e 1.0 || lvpos.y \x3c 0.0 || lvpos.y \x3e 1.0) { return 0.0; }\n\n      // calc coord in cascade texture\n      vec2 uv \x3d vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;\n\n      float texSize \x3d 0.5 / halfPixelSize;\n\n      // filter, offset by half pixels\n      vec2 st \x3d fract((vec2(halfPixelSize) + uv) * texSize);\n\n      float s00 \x3d rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n      float s10 \x3d rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n      float s11 \x3d rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n      float s01 \x3d rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) \x3c lvpos.z ? 1.0 : 0.0;\n\n      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);\n    }\n  "]))))}
Object.defineProperty(c,"__esModule",{value:!0});c.ReadShadowMap=d;(function(a){a.bindUniforms=function(a,b,c){b.shadowMappingEnabled&&(b.shadowMap.bind(a,c),b.shadowMap.bindView(a,b.origin))};a.bindViewCustomOrigin=function(a,b,c){b.shadowMappingEnabled&&b.shadowMap.bindView(a,c)};a.bindView=function(a,b){b.shadowMappingEnabled&&b.shadowMap.bindView(a,b.origin)}})(d=c.ReadShadowMap||(c.ReadShadowMap={}));var e});