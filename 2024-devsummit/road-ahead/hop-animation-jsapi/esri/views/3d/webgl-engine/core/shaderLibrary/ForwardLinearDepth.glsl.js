// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./ShaderOutput","./attributes/VertexPosition.glsl","../shaderModules/Float2PassUniform","../shaderModules/interfaces"],function(b,c,l,m,e){function g(a){a.varyings.add("linearDepth","float")}function h(a){a.vertex.uniforms.add(new m.Float2PassUniform("nearFar",(f,d)=>d.camera.nearFar))}function k(a){a.vertex.code.add(e.glsl`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}b.ForwardLinearDepth=function(a,f){const {vertex:d}=a;switch(f.output){case c.ShaderOutput.Color:if(f.receiveShadows){g(a);d.code.add(e.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);return}break;case c.ShaderOutput.LinearDepth:case c.ShaderOutput.Shadow:case c.ShaderOutput.ShadowHighlight:case c.ShaderOutput.ShadowExcludeHighlight:a.include(l.VertexPosition,f);g(a);h(a);k(a);d.code.add(e.glsl`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);return}d.code.add(e.glsl`void forwardLinearDepth() {}`)};b.addCalculateLinearDepth=k;b.addLinearDepth=g;b.addNearFar=h;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});