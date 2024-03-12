// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(d,g,e,m,n,p,q,r,t,u,v,w,h){function k(x){const b=new w.ShaderBuilder,c=b.fragment;c.include(r.RgbaFloatEncoding);c.include(n.ReadLinearDepth);b.include(q.CameraSpace);b.include(m.ScreenSpacePass);b.include(p.ReadShadowMapPass,x);c.uniforms.add(new h.Texture2DPassUniform("shadowMap",(f,a)=>a.shadowMap.depthTexture),new h.Texture2DPassUniform("depthMap",(f,a)=>a.linearDepth?.getTexture()),new v.Matrix4PassUniform("inverseViewMatrix",(f,a)=>g.invert(l,g.translate(l,a.camera.viewMatrix,a.camera.center))),
new t.Float2PassUniform("nearFar",(f,a)=>a.camera.nearFar));c.constants.add("sampleValue","float",y);b.outputs.add("sampleCount","float");c.code.add(u.glsl`void main(void) {
float depth = rgba2float(texture(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
ivec2 texSize = textureSize(shadowMap, 0);
ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));
float depthShadow = readShadowMapDepth(uvShadow, shadowMap);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
sampleCount = sampleValue;
}`);return b}const y=1/255,l=e.create();e=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastMaxSamples:255,build:k},Symbol.toStringTag,{value:"Module"}));d.ShadowCastAccumulate=e;d.ShadowCastMaxSamples=255;d.build=k});