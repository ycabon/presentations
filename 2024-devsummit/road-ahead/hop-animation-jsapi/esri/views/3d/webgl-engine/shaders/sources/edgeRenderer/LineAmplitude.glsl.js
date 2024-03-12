// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/shaderModules/FloatDrawUniform","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],function(e,f,b,c,k){e.LineAmplitude=function(g,h){const a=g.vertex;g.include(k.UnpackAttributes,h);switch(h.mode){case c.EdgeUtilMode.SOLID:a.code.add(b.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);break;case c.EdgeUtilMode.SKETCH:a.uniforms.add(new f.FloatDrawUniform("strokesAmplitude",d=>d.strokesTexture.amplitude));a.code.add(b.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);break;case c.EdgeUtilMode.MIXED:a.uniforms.add(new f.FloatDrawUniform("strokesAmplitude",d=>d.strokesTexture.amplitude)),a.code.add(b.glsl`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
else {
return 0.0;
}
}`)}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});