// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../shaderModules/Float2PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(b,f,g,h,d,e){class k extends d.NoParameters{constructor(){super(...arguments);this.scale=1;this.offset=f.ZEROS}}b.TileComposite=function(a){a.attributes.add(e.VertexAttribute.POSITION,"vec2");a.attributes.add(e.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add(new h.FloatPassUniform("scale",
c=>c.scale));a.vertex.uniforms.add(new g.Float2PassUniform("offset",c=>c.offset));a.varyings.add("uv","vec2");a.varyings.add("vuv","vec2");a.vertex.code.add(d.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
vuv = uv0;
}`)};b.TileCompositePassParameters=k;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});