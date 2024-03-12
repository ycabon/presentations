// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./output/ReadDepth.glsl ./util/CameraSpace.glsl ../shaderModules/Float2PassUniform ../shaderModules/Float3PassUniform ../shaderModules/FloatPassUniform ../shaderModules/interfaces ../shaderModules/Texture2DPassUniform".split(" "),function(f,l,m,n,g,e,d,h){f.Laserline=function(k,p){const b=k.fragment;b.include(l.ReadLinearDepth);k.include(m.CameraSpace);b.uniforms.add(new e.FloatPassUniform("globalAlpha",a=>a.globalAlpha),new g.Float3PassUniform("glowColor",a=>a.glowColor),new e.FloatPassUniform("glowWidth",
(a,c)=>a.glowWidth*c.camera.pixelRatio),new e.FloatPassUniform("glowFalloff",a=>a.glowFalloff),new g.Float3PassUniform("innerColor",a=>a.innerColor),new e.FloatPassUniform("innerWidth",(a,c)=>a.innerWidth*c.camera.pixelRatio),new h.Texture2DPassUniform("depthMap",(a,c)=>c.linearDepth?.getTexture()),new n.Float2PassUniform("nearFar",(a,c)=>c.camera.nearFar),new h.Texture2DPassUniform("frameColor",(a,c)=>c.mainColor));b.code.add(d.glsl`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`);b.code.add(d.glsl`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`);b.code.add(d.glsl`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`);b.code.add(d.glsl`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`);p.contrastControlEnabled?(b.uniforms.add(new e.FloatPassUniform("globalAlphaContrastBoost",a=>null!=a.globalAlphaContrastBoost?a.globalAlphaContrastBoost:1)),b.code.add(d.glsl`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):b.code.add(d.glsl`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});