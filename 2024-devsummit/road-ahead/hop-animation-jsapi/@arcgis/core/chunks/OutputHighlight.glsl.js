/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{e,d as o}from"./StencilUtils.js";import{g as r}from"./interfaces5.js";import{V as t}from"./VertexAttribute.js";import{f as a}from"./vec4f64.js";function d(o){e(o),o.vertex.code.add(r`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(r`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function i(e,o){o.hasVertexColors?(e.attributes.add(t.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}const c=a(1,1,0,1),l=a(1,0,1,1);function s(e){e.fragment.uniforms.add(new o("depthTexture",((e,o)=>o.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",c).add("unoccludedHighlightFlag","vec4",l),e.fragment.code.add(r`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}export{s as O,d as T,i as V,c as o,l as u};
