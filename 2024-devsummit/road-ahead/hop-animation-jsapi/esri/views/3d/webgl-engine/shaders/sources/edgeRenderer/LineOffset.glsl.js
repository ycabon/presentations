// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../core/shaderModules/FloatDrawUniform ../../../core/shaderModules/interfaces ../../../core/shaderModules/Texture2DDrawUniform ./EdgeUtil.glsl ./UnpackAttributes.glsl".split(" "),function(g,m,h,a,l,f,n){class p extends a.NoParameters{}g.LineOffset=function(d,k){d.include(n.UnpackAttributes,k);const {vertex:c,fragment:e}=d;f.usesSketchLogic(k)&&(c.uniforms.add(new l.Texture2DDrawUniform("strokesTexture",b=>b.strokesTexture.texture)),
c.uniforms.add(new h.FloatDrawUniform("strokesLog2Resolution",b=>Math.log2(b.strokesTexture.resolution)),new h.FloatDrawUniform("strokeVariants",b=>b.strokesTexture.variants)),d.varyings.add("vStrokeUV","vec2"),e.uniforms.add(new l.Texture2DDrawUniform("strokesTexture",b=>b.strokesTexture.texture),new h.FloatDrawUniform("strokesNormalizationScale",b=>b.strokesTexture.normalizationScale)),c.code.add(a.glsl`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`),d.fragment.include(m.RgbaFloatEncoding),e.code.add(a.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`));switch(k.mode){case f.EdgeUtilMode.SOLID:c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`);e.code.add(a.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case f.EdgeUtilMode.SKETCH:c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`);e.code.add(a.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case f.EdgeUtilMode.MIXED:d.varyings.add("vType","float"),c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),e.code.add(a.glsl`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`)}};g.LineOffsetDrawParameters=p;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});