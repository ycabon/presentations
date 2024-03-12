// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec32 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../../chunks/vec42 ../../../../../../core/libs/gl-matrix-2/factories/vec4f64 ./PhysicallyBasedRenderingParameters.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/Float4PassUniform ../../shaderModules/interfaces".split(" "),function(l,m,r,c,t,n,p,d,g){const q=r.create(),e=t.create();l.EvaluateAmbientLighting=function(f,h){f=f.fragment;const k=void 0!==h.lightingSphericalHarmonicsOrder?
h.lightingSphericalHarmonicsOrder:2;0===k?(f.uniforms.add(new p.Float3PassUniform("lightingAmbientSH0",(b,a)=>m.set(q,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),f.code.add(g.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===k?(f.uniforms.add(new d.Float4PassUniform("lightingAmbientSH_R",(b,a)=>c.set(e,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new d.Float4PassUniform("lightingAmbientSH_G",(b,a)=>c.set(e,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new d.Float4PassUniform("lightingAmbientSH_B",(b,a)=>c.set(e,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),f.code.add(g.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===k&&(f.uniforms.add(new p.Float3PassUniform("lightingAmbientSH0",(b,a)=>m.set(q,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new d.Float4PassUniform("lightingAmbientSH_R1",(b,a)=>c.set(e,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new d.Float4PassUniform("lightingAmbientSH_G1",(b,a)=>c.set(e,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new d.Float4PassUniform("lightingAmbientSH_B1",(b,a)=>c.set(e,a.lighting.sh.b[1],
a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new d.Float4PassUniform("lightingAmbientSH_R2",(b,a)=>c.set(e,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new d.Float4PassUniform("lightingAmbientSH_G2",(b,a)=>c.set(e,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new d.Float4PassUniform("lightingAmbientSH_B2",(b,a)=>c.set(e,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),f.code.add(g.glsl`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),h.pbrMode!==n.PBRMode.Normal&&h.pbrMode!==n.PBRMode.Schematic||f.code.add(g.glsl`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});