// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./vec42 ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute ./HighlightDownsample.glsl".split(" "),function(h,p,c,q,d,k,r,e,l,f){function m(){const b=
new r.ShaderBuilder,{vertex:n,fragment:g}=b,t=n.code,u=g.code;b.attributes.add(l.VertexAttribute.POSITION,"vec2");b.varyings.add("uv","vec2");b.attributes.add(l.VertexAttribute.UV0,"vec2");n.uniforms.add(new e.Texture2DPassUniform("coverageTex",a=>a.coverageTexture),new q.Float2PassUniform("coverageRounding",a=>a.coverageRounding));t.add(k.glsl`void main() {
vec4 cov = texture(coverageTex, uv0 * coverageRounding);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
gl_Position = vec4(position, 0.0, 1.0);
uv = position.xy * 0.5 + vec2(0.5);
}`);g.uniforms.add(new e.Texture2DPassUniform("tex",a=>a.blurTexture),new e.Texture2DPassUniform("highlightTexture",a=>a.highlightTexture),new d.Float4PassUniform("uColor",a=>a.color),new d.Float4PassUniform("haloColor",a=>a.haloColor),new d.Float4PassUniform("opacities",a=>p.set(v,a.haloOpacity,a.haloOpacityOccluded,a.fillOpacity,a.fillOpacityOccluded)));g.constants.add("inner","float",1-(f.outlineSize-f.blurSize)/f.outlineSize);u.add(k.glsl`void main() {
vec4 blurredHighlightValue = texture(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture(highlightTexture, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float outlineFactor = smoothstep(0.0, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
fragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`);return b}const v=c.create();c=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));h.HighlightApply=c;h.build=m});