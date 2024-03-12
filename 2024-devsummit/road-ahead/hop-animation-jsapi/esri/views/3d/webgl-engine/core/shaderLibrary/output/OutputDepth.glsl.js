// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../ShaderOutput","../util/RgbaFloat16Encoding.glsl","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(c,a,e,f,d){c.OutputDepth=function(b,g){switch(g.output){case a.ShaderOutput.Shadow:case a.ShaderOutput.ShadowHighlight:case a.ShaderOutput.ShadowExcludeHighlight:b.fragment.include(e.Rgba4FloatEncoding);b.fragment.code.add(d.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case a.ShaderOutput.LinearDepth:b.fragment.include(f.RgbaFloatEncoding),b.fragment.code.add(d.glsl`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});