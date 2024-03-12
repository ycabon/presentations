// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(c,f,g,h,d){function e(){const a=new h.ShaderBuilder;a.include(f.ScreenSpacePass);a.fragment.uniforms.add(new d.Texture2DPassUniform("blendWeightsTexture",b=>b.inputTexture),new d.Texture2DPassUniform("colorTexture",b=>b.color));
a.fragment.code.add(g.glsl`void main() {
vec2 resolution = 1.0 / vec2(textureSize(colorTexture, 0));
vec4 offsets = vec4(uv.x + resolution.x, uv.y, uv.x, uv.y - resolution.y);
vec4 a;
a.rb = texture(blendWeightsTexture, uv).rb;
a.g = texture(blendWeightsTexture, offsets.zw).g;
a.a = texture(blendWeightsTexture, offsets.xy).a;
if ( dot(a, vec4(1.0)) < 1e-5 ) {
fragColor = texture( colorTexture, uv, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture( colorTexture, uv, 0.0 );
vec4 Cop = texture( colorTexture, uv + sign( offset ) * resolution.xy, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
fragColor = mix(C, Cop, s);
}
}`);return a}const k=Object.freeze(Object.defineProperty({__proto__:null,build:e},Symbol.toStringTag,{value:"Module"}));c.Blur=k;c.build=e});