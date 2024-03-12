// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./AlignPixel.glsl ./HUDRenderStyle ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(c,f,d,g,h,k,l){c.HUDVisibility=function(b){b.vertex.uniforms.add(new h.FloatPassUniform("renderTransparentlyOccludedHUD",(e,a)=>a.hudRenderStyle===d.HUDRenderStyle.Occluded?1:a.hudRenderStyle===d.HUDRenderStyle.NotOccluded?0:.75),new g.Float4PassUniform("viewport",(e,a)=>a.camera.fullViewport),
new l.Texture2DPassUniform("hudVisibilityTexture",(e,a)=>a.hudVisibility?.getTexture()));b.vertex.include(f.AlignPixel);b.vertex.code.add(k.glsl`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});