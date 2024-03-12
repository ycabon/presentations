// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces"],function(b,d,g){function e(a){a.uniforms.add(new d.Float3PassUniform("mainLightDirection",(h,c)=>c.lighting.mainLight.direction))}function f(a){a.uniforms.add(new d.Float3PassUniform("mainLightIntensity",(h,c)=>c.lighting.mainLight.intensity))}b.MainLighting=function(a){e(a.fragment);f(a.fragment);a.fragment.code.add(g.glsl`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)};b.addMainLightDirection=e;b.addMainLightIntensity=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});