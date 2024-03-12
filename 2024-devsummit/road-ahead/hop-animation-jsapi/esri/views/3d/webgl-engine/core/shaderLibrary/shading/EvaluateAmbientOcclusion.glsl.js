// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../../effects/ssao/SSAO"],function(b,c,d,e){b.EvaluateAmbientOcclusion=function(a,f){a=a.fragment;f.receiveAmbientOcclusion?(a.uniforms.add(new d.Texture2DPassUniform("ssaoTex",(h,g)=>g.ssao?.getTexture())),a.constants.add("blurSizePixelsInverse","float",1/e.blurSizePixels),a.code.add(c.glsl`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(c.glsl`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});