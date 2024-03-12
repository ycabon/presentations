// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(f,r,g,t,k,u,v,w,l,h,d,m,x,y,z){function n(){const b=new x.ShaderBuilder;b.attributes.add(z.VertexAttribute.POSITION,"vec2");b.include(k.TextureCoordinateAttribute,{textureCoordinateType:k.TextureCoordinateAttributeType.Default});b.varyings.add("worldRay","vec3");b.varyings.add("eyeDir","vec3");const {vertex:p,fragment:e}=b;p.uniforms.add(new m.Matrix4PassUniform("inverseProjectionMatrix",(a,c)=>c.camera.inverseProjectionMatrix),new m.Matrix4PassUniform("inverseViewMatrix",(a,c)=>r.invertOrIdentity(A,
c.camera.viewMatrix)));p.code.add(d.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`);e.uniforms.add(new h.FloatPassUniform("atmosphereC",a=>a.atmosphereC),new l.Float3PassUniform("cameraPosition",(a,c)=>c.camera.eye),new w.Float2PassUniform("nearFar",(a,c)=>c.camera.nearFar),new y.Texture2DPassUniform("depthTexture",a=>a.depthTexture),new h.FloatPassUniform("fogStrength",a=>a.fogStrength),new h.FloatPassUniform("fogAmount",a=>a.fogAmount),new l.Float3PassUniform("fogColor",a=>a.fogColor));b.include(v.Gamma);e.include(u.ReadLinearDepth);e.code.add(d.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`);e.code.add(d.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`);e.code.add(d.glsl`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main() {
vec3 rayDir = normalize(worldRay);
float terrainDepth = -1.0;
float depthSample = texture(depthTexture, vuv0).r;
float zNorm = 2.0 * depthSample - 1.0;
float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
if(depthSample < 1.0 && depthSample > 0.0){
vec3 cameraSpaceRay = normalize(eyeDir);
cameraSpaceRay /= cameraSpaceRay.z;
cameraSpaceRay *= linDepth;
terrainDepth = max(0.0, length(cameraSpaceRay));
}
vec4 fog = applyFog(terrainDepth, rayDir);
fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
}`);return b}class q extends d.NoParameters{constructor(){super(...arguments);this.fogColor=t.create();this.fogStrength=4E-6;this.atmosphereC=1;this.fogAmount=0}}const A=g.create();g=Object.freeze(Object.defineProperty({__proto__:null,FogPassParameters:q,build:n},Symbol.toStringTag,{value:"Module"}));f.Fog=g;f.FogPassParameters=q;f.build=n});