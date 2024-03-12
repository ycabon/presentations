// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(b,g,h,k,d,l,m){function e(){const a=new l.ShaderBuilder;a.include(h.ScreenSpacePass);a.fragment.uniforms.add(new m.Texture2DPassUniform("tex",
c=>c.texture),new k.Float3PassUniform("uColor",c=>c.color));a.fragment.code.add(d.glsl`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);
}`);return a}class f extends d.NoParameters{constructor(){super(...arguments);this.color=g.fromValues(1,1,1)}}const n=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:f,build:e},Symbol.toStringTag,{value:"Module"}));b.TextureOnly=n;b.TextureOnlyPassParameters=f;b.build=e});