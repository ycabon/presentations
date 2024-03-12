// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../attributes/VertexColor.glsl ../util/MixExternalColor.glsl ../../shaderModules/Float4DrawUniform ../../shaderModules/FloatDrawUniform ../../shaderModules/interfaces".split(" "),function(d,f,g,h,k,b){d.ComputeMaterialColor=function(a,e){a.include(f.VertexColor,e);a.fragment.include(g.MixExternalColor);a=a.fragment;a.uniforms.add(new h.Float4DrawUniform("baseColor",c=>c.baseColor));a.uniforms.add(new k.FloatDrawUniform("objectOpacity",c=>c.objectOpacity));e.hasVertexColors?a.code.add(b.glsl`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`):a.code.add(b.glsl`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`);a.code.add(b.glsl`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});