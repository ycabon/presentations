/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as o}from"./vec2.js";import{c as r}from"./vec2f64.js";import{s as t}from"./vec4.js";import{c as e}from"./vec4f64.js";import{F as a,a as f}from"./StencilUtils.js";import{g as c}from"./interfaces5.js";function n(r){r.fragment.uniforms.add(new a("projInfo",((o,r)=>function(o){const r=o.projectionMatrix;return 0===r[11]?t(i,2/(o.fullWidth*r[0]),2/(o.fullHeight*r[5]),(1+r[12])/r[0],(1+r[13])/r[5]):t(i,-2/(o.fullWidth*r[0]),-2/(o.fullHeight*r[5]),(1-r[8])/r[0],(1-r[9])/r[5])}(r.camera)))),r.fragment.uniforms.add(new f("zScale",((r,t)=>0===t.camera.projectionMatrix[11]?o(s,0,1):o(s,1,0)))),r.fragment.code.add(c`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const i=e(),s=r();export{n as C};
