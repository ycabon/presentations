// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec2f64 ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(b,m,n,p,c,
q,r,t,d){function e(){const f=new q.ShaderBuilder,{attributes:g,varyings:u,vertex:h,fragment:k}=f;g.add(d.VertexAttribute.POSITION,"vec2");g.add(d.VertexAttribute.UV0,"vec2");u.add("blurCoordinate","vec3");h.uniforms.add(new t.Texture2DPassUniform("coverageTex",a=>a.coverageTexture),new p.Float2PassUniform("coverageRounding",a=>a.coverageRounding));h.code.add(c.glsl`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture(coverageTex, uv0 * coverageRounding);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), cov.g);
}`);k.uniforms.add(new n.Float2DrawUniform("blurSize",a=>a.blurSize),new r.Texture2DDrawUniform("tex",a=>a.blurInputTexture));k.code.add(c.glsl`void main() {
vec2 uv = blurCoordinate.xy;
vec4 center = texture(tex, uv);
if (blurCoordinate.z == 1.0) {
fragColor = center;
} else {
vec4 sum = center * 0.204164;
sum += texture(tex, uv + blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv - blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv + blurSize * 3.294215) * 0.093913;
sum += texture(tex, uv - blurSize * 3.294215) * 0.093913;
fragColor = sum;
}
}`);return f}class l extends c.NoParameters{constructor(){super(...arguments);this.blurSize=m.create()}}const v=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:l,build:e},Symbol.toStringTag,{value:"Module"}));b.HighlightBlur=v;b.HighlightBlurDrawParameters=l;b.build=e});