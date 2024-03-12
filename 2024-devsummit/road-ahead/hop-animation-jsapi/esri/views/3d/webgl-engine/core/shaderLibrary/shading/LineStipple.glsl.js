// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../util/RgbaFloatEncoding.glsl ../util/View.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform ../../../materials/stippleTextureRepository ../../../shaders/ensureColor4".split(" "),function(g,n,k,p,h,d,q,l,r){function t(a,b){const u=!(b.draped&&b.stipplePreferContinuous),{vertex:e,fragment:f}=a;f.include(n.RgbaFloatEncoding);b.draped||(k.addCameraPosition(e,b),e.uniforms.add(new h.FloatPassUniform("worldToScreenPerDistanceRatio",
(c,v)=>1/v.camera.perScreenPixelRatio)),e.code.add(d.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));a.varyings.add("vStippleDistance","float");a.varyings.add("vStippleDistanceLimits","vec2");a.varyings.add("vStipplePatternStretch","float");e.code.add(d.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${w};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `);e.code.add(d.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`);e.code.add(d.glsl`
    if (segmentLengthPseudoScreen >= ${u?"patternLength":"1e4"}) {
  `);k.addPixelRatio(e);e.code.add(d.glsl`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`);f.uniforms.add(new q.Texture2DPassUniform("stipplePatternTexture",c=>c.stippleTexture),new h.FloatPassUniform("stipplePatternSDFNormalizer",c=>(c=c.stipplePattern)?(Math.floor(.5*(l.computeLongestPattern(c)-1))+.5)/c.pixelRatio:1),new h.FloatPassUniform("stipplePatternPixelSizeInv",c=>1/m(c)));f.code.add(d.glsl`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`);b.stippleOffColorEnabled?(f.uniforms.add(new p.Float4PassUniform("stippleOffColor",c=>r.ensureColor4(c.stippleOffColor))),f.code.add(d.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):f.code.add(d.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function m(a){const b=a.stipplePattern;return b?l.computeTextureSize(a.stipplePattern)/b.pixelRatio:1}const w=d.glsl.float(.4);g.LineStipple=function(a,b){a.constants.add("stippleAlphaColorDiscard","float",.001);a.constants.add("stippleAlphaHighlightDiscard","float",.5);b.stippleEnabled?t(a,b):a.fragment.code.add(d.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)};g.computePixelSize=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});