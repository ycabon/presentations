// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../shaderModules/Float3DrawUniform ../shaderModules/Float3PassUniform ../shaderModules/interfaces".split(" "),function(k,x,y,e,g,n,p,f){function q(b,c,...a){if(c.hasSlicePlane){c.hasSliceInVertexProgram&&b.vertex.uniforms.add(...a);b.fragment.uniforms.add(...a);a=f.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`;var d=f.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`;d=c.hasSliceHighlight?f.glsl`
        ${d}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:f.glsl`#define highlightSlice(_color_, _pos_) (_color_)`;c.hasSliceInVertexProgram&&b.vertex.code.add(a);b.fragment.code.add(a);b.fragment.code.add(d)}else a=f.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`,c.hasSliceInVertexProgram&&b.vertex.code.add(a),b.fragment.code.add(a)}function r(b,c,a){return b.instancedDoublePrecision?e.set(z,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]):c.slicePlaneLocalOrigin}function t(b,c){return null!=b?e.subtract(l,c.origin,b):c.origin}function u(b,c,a){return b.hasSliceTranslatedView?null!=c?x.translate(A,a.camera.viewMatrix,c):a.camera.viewMatrix:
null}function v(b,c,a){if(null==a.slicePlane)return g.ZEROS;const d=r(b,c,a);c=t(d,a.slicePlane);b=u(b,d,a);return null!=b?e.transformMat4(l,c,b):c}function m(b,c,a,d){if(null==d||null==a.slicePlane)return g.ZEROS;const w=r(b,c,a);c=t(w,a.slicePlane);b=u(b,w,a);return null!=b?(e.add(h,d,c),e.transformMat4(l,c,b),e.transformMat4(h,h,b),e.subtract(h,h,l)):d}class B extends f.NoParameters{constructor(b){super();this.slicePlaneLocalOrigin=b}}const z=g.create(),l=g.create(),h=g.create(),A=y.create();k.SliceDraw=
function(b,c){q(b,c,new n.Float3DrawUniform("slicePlaneOrigin",(a,d)=>v(c,a,d)),new n.Float3DrawUniform("slicePlaneBasis1",(a,d)=>m(c,a,d,d.slicePlane?.basis1)),new n.Float3DrawUniform("slicePlaneBasis2",(a,d)=>m(c,a,d,d.slicePlane?.basis2)))};k.SlicePass=function(b,c){q(b,c,new p.Float3PassUniform("slicePlaneOrigin",(a,d)=>v(c,a,d)),new p.Float3PassUniform("slicePlaneBasis1",(a,d)=>m(c,a,d,d.slicePlane?.basis1)),new p.Float3PassUniform("slicePlaneBasis2",(a,d)=>m(c,a,d,d.slicePlane?.basis2)))};k.SlicePlaneParameters=
B;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});