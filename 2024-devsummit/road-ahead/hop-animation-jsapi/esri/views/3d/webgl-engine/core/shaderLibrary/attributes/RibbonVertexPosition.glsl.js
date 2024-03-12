// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../shading/VisualVariables.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/FloatsPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(h,l,f,m,k,d,e){h.RibbonVertexPosition=function(c,g){const b=c.vertex;b.uniforms.add(new m.FloatPassUniform("intrinsicWidth",a=>a.width));g.vvSize?(c.attributes.add(e.VertexAttribute.SIZEFEATUREATTRIBUTE,"float"),b.uniforms.add(new f.Float3PassUniform("vvSizeMinSize",
a=>a.vvSize.minSize),new f.Float3PassUniform("vvSizeMaxSize",a=>a.vvSize.maxSize),new f.Float3PassUniform("vvSizeOffset",a=>a.vvSize.offset),new f.Float3PassUniform("vvSizeFactor",a=>a.vvSize.factor)),b.code.add(d.glsl`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(c.attributes.add(e.VertexAttribute.SIZE,"float"),b.code.add(d.glsl`float getSize(){
return intrinsicWidth * size;
}`));g.vvOpacity?(c.attributes.add(e.VertexAttribute.OPACITYFEATUREATTRIBUTE,"float"),b.constants.add("vvOpacityNumber","int",8),b.uniforms.add(new k.FloatsPassUniform("vvOpacityValues",a=>a.vvOpacity.values,8),new k.FloatsPassUniform("vvOpacityOpacities",a=>a.vvOpacity.opacityValues,8)),b.code.add(d.glsl`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):b.code.add(d.glsl`vec4 applyOpacity( vec4 color ){
return color;
}`);g.vvColor?(c.include(l.VisualVariables,g),c.attributes.add(e.VertexAttribute.COLORFEATUREATTRIBUTE,"float"),b.code.add(d.glsl`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(c.attributes.add(e.VertexAttribute.COLOR,"vec4"),b.code.add(d.glsl`vec4 getColor(){
return applyOpacity(color);
}`))};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});