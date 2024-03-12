// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../support/engineContent/marker ../util/View.glsl ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../shaders/LineMarkerTechniqueConfiguration".split(" "),function(b,d,e,f,c,g){b.MarkerSizing=function(h,k){const {vertex:a,constants:l}=h;l.add("markerSizePerLineWidth","float",d.markerSizePerLineWidth);e.addPixelRatio(a);null==a.uniforms.get("markerScale")&&a.constants.add("markerScale","float",1);a.code.add(c.glsl`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`);k.space===g.LineMarkerSpace.World&&(a.constants.add("maxSegmentLengthFraction","float",.45),a.uniforms.add(new f.FloatPassUniform("perRenderPixelRatio",(n,m)=>m.camera.perRenderPixelRatio)),a.code.add(c.glsl`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});