// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../util/RgbaFloat16Encoding.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/IntegerPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix4sDrawUniform ../../shaderModules/Matrix4sPassUniform ../../shaderModules/Texture2DPassUniform".split(" "),function(c,l,g,m,n,p,e,q,r,t){function h(a){a=a.fragment;a.include(m.Rgba4FloatEncoding);a.uniforms.add(new t.Texture2DPassUniform("shadowMap",
(d,b)=>b.shadowMap.depthTexture),new p.IntegerPassUniform("numCascades",(d,b)=>b.shadowMap.numCascades),new n.Float4PassUniform("cascadeDistances",(d,b)=>b.shadowMap.cascadeDistances));a.code.add(e.glsl`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}class u extends e.NoParameters{constructor(){super(...arguments);this.origin=g.create()}}class v extends u{}class k extends e.NoParameters{constructor(){super(...arguments);this.modelTransformation=l.IDENTITY}}class w extends k{constructor(){super(...arguments);this.origin=g.create()}}c.ReadShadowMapDraw=function(a,d){d.receiveShadows&&(a.fragment.uniforms.add(new q.Matrix4sDrawUniform("shadowMapMatrix",(b,f)=>f.shadowMap.getShadowMapMatrices(b.origin),4)),h(a))};c.ReadShadowMapDrawParameters=
v;c.ReadShadowMapParameters=k;c.ReadShadowMapPass=function(a,d){d.receiveShadows&&(a.fragment.uniforms.add(new r.Matrix4sPassUniform("shadowMapMatrix",(b,f)=>f.shadowMap.getShadowMapMatrices(b.origin),4)),h(a))};c.ReadShadowMapPassParameters=w;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});