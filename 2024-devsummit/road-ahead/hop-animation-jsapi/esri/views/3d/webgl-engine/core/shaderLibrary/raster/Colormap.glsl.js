// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(c,b,e,f){c.Colormap=function(d){d.fragment.uniforms.add(new f.Texture2DPassUniform("u_colormap",a=>a.u_colormap),new b.FloatPassUniform("u_colormapOffset",a=>a.colormap.u_colormapOffset),new b.FloatPassUniform("u_colormapMaxIndex",a=>a.colormap.u_colormapMaxIndex),new b.FloatPassUniform("u_opacity",a=>a.common.u_opacity));d.fragment.code.add(e.glsl`vec4 colormap(vec4 currentPixel, bool isFloat) {
float colorIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || colorIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 texelCoordinates = vec2((colorIndex + 0.5), 0.5);
result = texelFetch(u_colormap, ivec2(texelCoordinates), 0);
}
return result;
}`)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});