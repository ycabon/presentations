// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(b,f,c,g,h){function d(){const a=new g.ShaderBuilder;a.include(f.ScreenSpacePass);a.fragment.uniforms.add(new h.Texture2DPassUniform("tex",k=>k.texture));a.fragment.code.add(c.glsl`void main() {
fragColor = vec4(1.0 - texture(tex, uv).a);
}`);return a}class e extends c.NoParameters{}const l=Object.freeze(Object.defineProperty({__proto__:null,HUDCompositingPassParameters:e,build:d},Symbol.toStringTag,{value:"Module"}));b.HUDCompositing=l;b.HUDCompositingPassParameters=e;b.build=d});