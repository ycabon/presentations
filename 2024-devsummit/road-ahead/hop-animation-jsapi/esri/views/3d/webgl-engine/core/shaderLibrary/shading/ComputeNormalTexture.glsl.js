// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexTextureCoordinates.glsl ./Normals.glsl ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/VertexAttribute".split(" "),function(f,g,h,k,c,l,m,n,p){f.ComputeNormalTexture=function(d,a){const b=d.fragment;a.hasVertexTangents?(d.attributes.add(p.VertexAttribute.TANGENT,"vec4"),d.varyings.add("vTangent","vec4"),a.doubleSidedMode===
k.NormalsDoubleSidedMode.WindingOrder?b.code.add(c.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):b.code.add(c.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):b.code.add(c.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`);a.textureCoordinateType!==g.TextureCoordinateAttributeType.None&&(d.include(h.VertexTextureCoordinates,a),b.uniforms.add(a.pbrTextureBindType===n.BindType.Pass?new m.Texture2DPassUniform("normalTexture",e=>e.textureNormal):new l.Texture2DDrawUniform("normalTexture",e=>e.textureNormal)),b.code.add(c.glsl`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});