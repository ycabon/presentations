// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(g,d,l,m,n,p,q,r,t,u,c,v,w){function h(a){const b=new v.ShaderBuilder,{vertex:k,fragment:e}=b;b.include(m.Transform,a);b.include(n.VertexColor,a);r.addProjViewLocalOrigin(k,a);b.attributes.add(w.VertexAttribute.POSITION,"vec3");b.varyings.add("vpos","vec3");k.code.add(c.glsl`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);
}`);a.output===d.ShaderOutput.Highlight&&b.include(p.OutputHighlight,a);b.include(l.SliceDraw,a);e.uniforms.add(new u.FloatPassUniform("alphaCoverage",(f,x)=>Math.min(1,f.width*x.camera.pixelRatio)));a.hasVertexColors||e.uniforms.add(new t.Float4PassUniform("constantColor",f=>f.color));e.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${a.hasVertexColors?"vColor":"constantColor"};

    ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`color.a = 1.0;`:""}

    if (color.a < ${c.glsl.float(q.symbolAlphaCutoff)}) {
      discard;
    }

    ${a.output===d.ShaderOutput.Color?c.glsl`fragColor = highlightSlice(color, vpos);`:""}
    ${a.output===d.ShaderOutput.Highlight?c.glsl`outputHighlight();`:""}
  }
  `);return b}const y=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));g.NativeLine=y;g.build=h});