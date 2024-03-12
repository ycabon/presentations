// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(b,c,e,f){b.Projection=function(d){d.fragment.uniforms.add(new f.Texture2DPassUniform("u_transformGrid",a=>a.u_transformGrid),new c.Float2PassUniform("u_transformSpacing",a=>a.common.u_transformSpacing),new c.Float2PassUniform("u_targetImageSize",a=>a.common.u_targetImageSize));d.fragment.code.add(e.glsl`vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(4.0, 1.0);
vec2 index_transform = floor(index_image / u_transformSpacing) * oneTransformPixel;
vec2 pos = fract((index_image + 0.5) / u_transformSpacing);
vec2 transform_location = index_transform + 0.5;
vec2 srcLocation;
if (pos.s <= pos.t) {
vec3 ll_abc = texelFetch(u_transformGrid, ivec2(transform_location), 0).rgb;
vec3 ll_def = texelFetch(u_transformGrid, ivec2(transform_location.s + 1.0, transform_location.t), 0).rgb;
srcLocation.s = dot(ll_abc, vec3(pos, 1.0));
srcLocation.t = dot(ll_def, vec3(pos, 1.0));
} else {
vec3 ur_abc = texelFetch(u_transformGrid, ivec2(transform_location.s + 2.0, transform_location.t), 0).rgb;
vec3 ur_def = texelFetch(u_transformGrid, ivec2(transform_location.s + 3.0, transform_location.t), 0).rgb;
srcLocation.s = dot(ur_abc, vec3(pos, 1.0));
srcLocation.t = dot(ur_def, vec3(pos, 1.0));
}
return srcLocation;
}`)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});