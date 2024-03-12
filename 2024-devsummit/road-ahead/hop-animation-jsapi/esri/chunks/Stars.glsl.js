// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(h,d,e,m,n,k,p,q,f){function l(){const a=new q.ShaderBuilder;
a.attributes.add(f.VertexAttribute.POSITION,"vec3");a.attributes.add(f.VertexAttribute.COLOR,"vec4");a.attributes.add(f.VertexAttribute.SIZE,"float");a.varyings.add("vcolor","vec4");a.varyings.add("vsize","float");a.vertex.uniforms.add(new p.Matrix4PassUniform("transform",(g,c)=>{d.copy(b,c.camera.projectionMatrix);b[10]=2.4E-7-1;b[11]=-1;b[14]=(2.4E-7-2)*c.camera.near;d.multiply(b,b,c.camera.viewMatrix);return d.multiply(b,b,g.modelMatrix)}),new m.Float4PassUniform("viewport",(g,c)=>c.camera.fullViewport),
new n.FloatPassUniform("pixelRatio",(g,c)=>c.camera.pixelRatio));a.vertex.code.add(k.glsl`void main(void) {
gl_Position = transform * vec4(position, 0);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;
}`);a.fragment.code.add(k.glsl`void main() {
float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
fragColor = vec4(vcolor.xyz, intensity);
}`);return a}const b=e.create();e=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));h.Stars=e;h.build=l});