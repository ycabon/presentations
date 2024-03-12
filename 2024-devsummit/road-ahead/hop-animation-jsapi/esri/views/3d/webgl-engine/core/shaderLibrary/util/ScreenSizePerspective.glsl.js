// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/vec32","../../../../../../core/libs/gl-matrix-2/factories/vec3f64","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces"],function(c,g,h,e,b){function f(a){return g.set(k,a.parameters.divisor,a.parameters.offset,a.minScaleFactor)}const k=h.create();c.ScreenSizePerspective=function(a){a.vertex.code.add(b.glsl`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`);a.vertex.code.add(b.glsl`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`);a.vertex.code.add(b.glsl`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`);a.vertex.code.add(b.glsl`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`);a.vertex.code.add(b.glsl`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`);a.vertex.code.add(b.glsl`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)};c.addScreenSizePerspective=function(a){a.uniforms.add(new e.Float3PassUniform("screenSizePerspective",d=>f(d.screenSizePerspective)))};c.addScreenSizePerspectiveAlignment=function(a){a.uniforms.add(new e.Float3PassUniform("screenSizePerspectiveAlignment",d=>f(d.screenSizePerspectiveAlignment||d.screenSizePerspective)))};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});