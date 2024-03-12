// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(b,m,c,n,d,p,e){function f(q){const g=new p.ShaderBuilder,{vertex:h,fragment:k,attributes:l,varyings:r}=g;m.addProjViewLocalOrigin(h,
q);l.add(e.VertexAttribute.POSITION,"vec3");l.add(e.VertexAttribute.UV0,"vec2");r.add("vUV","vec2");h.code.add(d.glsl`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`);k.uniforms.add(new c.Float4PassUniform("backgroundColor",a=>a.backgroundColor),new c.Float4PassUniform("gridColor",a=>a.gridColor),new n.FloatPassUniform("gridWidth",a=>a.gridWidth));k.code.add(d.glsl`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`);return g}const t=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));b.SlicePlaneMaterial=t;b.build=f});