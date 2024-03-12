// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../../../geometry/support/aaBoundingRect ../../../../terrain/interfaces ../../../../terrain/OverlayContent ../../renderPasses/AllRenderPasses ../ShaderOutput ../shading/MainLighting.glsl ../shading/PhysicallyBasedRenderingParameters.glsl ../shading/Water.glsl ../../shaderModules/Float4DrawUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../shaderModules/Uniform".split(" "),
function(k,A,c,p,q,r,t,u,l,B,v,C,m,w,D){function x(a,d){d.pbrMode!==l.PBRMode.Water&&d.pbrMode!==l.PBRMode.WaterOnIntegratedMesh&&d.pbrMode!==l.PBRMode.TerrainWithWater||a.include(B.Water,d);const {vertex:n,fragment:f}=a;a.varyings.add("vtcOverlay","vec4");n.code.add(m.glsl`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`);f.code.add(m.glsl`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);f.code.add(m.glsl`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`);f.code.add(m.glsl`vec4 getOverlayColorTexel(vec4 texCoords) {
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`);if(d.pbrMode===l.PBRMode.Water||d.pbrMode===l.PBRMode.WaterOnIntegratedMesh||d.pbrMode===l.PBRMode.TerrainWithWater)u.addMainLightDirection(f),u.addMainLightIntensity(f),f.code.add(m.glsl`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`)}function y(a,d){return a.identifier===r.RenderPassIdentifier.Material&&a.output===t.ShaderOutput.Color?d.overlay?.getTexture(q.OverlayContent.ColorNoRasterImage):a.identifier===r.RenderPassIdentifier.Material&&a.output===t.ShaderOutput.ObjectAndLayerIdColor?d.overlay?.getTexture(q.OverlayContent.ObjectAndLayerIdColor):a.identifier===r.RenderPassIdentifier.Highlight?d.overlay?.getTexture(q.OverlayContent.Highlight):null}k.OverlayMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Enabled=1]=
"Enabled";a[a.EnabledWithWater=2]="EnabledWithWater";a[a.COUNT=3]="COUNT"})(k.OverlayMode||(k.OverlayMode={}));class z extends D.Uniform{constructor(a){super(a,"vec4")}}const h=A.create();k.OverlayIM=function(a,d){const {vertex:n,fragment:f}=a;n.uniforms.add(new v.Float4DrawUniform("overlayTexOffset",(e,b)=>{const g=b.overlay?.overlays[p.OverlayIndex.INNER]?.extent;c.hasArea(g)&&(h[0]=e.toMapSpace[0]/c.width(g)-g[0]/c.width(g),h[1]=e.toMapSpace[1]/c.height(g)-g[1]/c.height(g));b=b.overlay?.overlays[p.OverlayIndex.OUTER]?.extent;
c.hasArea(b)&&(h[2]=e.toMapSpace[0]/c.width(b)-b[0]/c.width(b),h[3]=e.toMapSpace[1]/c.height(b)-b[1]/c.height(b));return h}),new v.Float4DrawUniform("overlayTexScale",(e,b)=>{const g=b.overlay?.overlays[p.OverlayIndex.INNER]?.extent;c.hasArea(g)&&(h[0]=e.toMapSpace[2]/c.width(g),h[1]=e.toMapSpace[3]/c.height(g));b=b.overlay?.overlays[p.OverlayIndex.OUTER]?.extent;c.hasArea(b)&&(h[2]=e.toMapSpace[2]/c.width(b),h[3]=e.toMapSpace[3]/c.height(b));return h}));f.constants.add("overlayOpacity","float",1);
f.uniforms.add(new w.Texture2DPassUniform("ovColorTex",(e,b)=>y(e,b)));x(a,d)};k.OverlayTerrain=function(a,d){const {vertex:n,fragment:f}=a;n.uniforms.add(new z("overlayTexOffset"),new z("overlayTexScale"));f.uniforms.add(new C.FloatPassUniform("overlayOpacity",e=>e.overlayOpacity),new w.Texture2DPassUniform("ovColorTex",(e,b)=>b.overlay?.getTexture(e.overlayContent)));x(a,d)};k.getIMColorTexture=y;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});