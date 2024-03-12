// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./ForwardLinearDepth.glsl","../shaderModules/interfaces"],function(b,d,c){b.Transform=function(a){d.addCalculateLinearDepth(a);a.vertex.code.add(c.glsl`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`);a.vertex.code.add(c.glsl`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});