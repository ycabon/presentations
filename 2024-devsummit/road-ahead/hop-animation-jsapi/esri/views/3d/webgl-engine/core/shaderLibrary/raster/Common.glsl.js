// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./Projection.glsl ../terrain/TileComposite.glsl ../../shaderModules/BooleanPassUniform ../../shaderModules/Float2PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(d,g,h,f,k,e,l){class m extends h.TileCompositePassParameters{constructor(b,c,a){super();this.common=b;this.u_image=c;this.u_transformGrid=a}}d.Common=function(b,c){b.include(g.Projection);b.fragment.uniforms.add(new l.Texture2DPassUniform("u_image",a=>a.u_image),new f.BooleanPassUniform("u_flipY",
a=>a.common.u_flipY),new f.BooleanPassUniform("u_applyTransform",a=>a.common.u_applyTransform));({requireBilinearWithNN:c}=c);c&&b.fragment.uniforms.add(new k.Float2PassUniform("u_srcImageSize",a=>a.common.u_srcImageSize));b.fragment.code.add(e.glsl`vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
if (!u_applyTransform) {
return targetLocation;
}
return projectPixelLocation(targetLocation);
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}`);c?b.fragment.code.add(e.glsl`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture(sampler, coord0);
vec4 color1 = texture(sampler, coord1);
vec4 color2 = texture(sampler, coord2);
vec4 color3 = texture(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture(sampler, coords);
return color;
}
vec4 getPixel(vec2 pixelLocation) {
return sampleBilinear(u_image, pixelLocation, u_srcImageSize);
}`):b.fragment.code.add(e.glsl`vec4 getPixel(vec2 pixelLocation) {
return texture(u_image, pixelLocation);
}`)};d.CommonPassParameters=m;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});