// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(b,h,k,d,l,m){function e(f){const a=new l.ShaderBuilder;a.include(h.ScreenSpacePass);a.fragment.uniforms.add(new m.Texture2DPassUniform("tex",c=>c.texture));f.hasOpacityFactor&&
a.fragment.uniforms.add(new k.FloatPassUniform("opacity",c=>c.opacity));a.fragment.code.add(d.glsl`
    void main() {
      fragColor = texture(tex, uv) ${f.hasOpacityFactor?"* opacity":""};
    }`);return a}class g extends d.NoParameters{constructor(){super(...arguments);this.opacity=1}}const n=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:g,build:e},Symbol.toStringTag,{value:"Module"}));b.Compositing=n;b.CompositingPassParameters=g;b.build=e});