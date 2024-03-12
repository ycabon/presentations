// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(k,l,d,r,t,u,v,w,x,y,z,A,B,C,D,c,E,F,m){function n(a){const b=new E.ShaderBuilder,{vertex:g,fragment:p,attributes:q,varyings:h}=b;C.addProjViewLocalOrigin(g,a);b.include(t.Transform,a);b.include(v.VertexColor,a);b.include(z.VisualVariables,a);b.include(u.ObjectAndLayerIdColor,a);q.add(m.VertexAttribute.POSITION,"vec3");a.vvColor&&q.add(m.VertexAttribute.COLORFEATUREATTRIBUTE,"float");h.add("vColor","vec4");h.add("vpos","vec3");const e=a.multipassEnabled&&(a.output===d.ShaderOutput.Color||
a.output===d.ShaderOutput.Alpha);e&&h.add("depth","float");g.uniforms.add(new D.Float4PassUniform("eColor",G=>G.color));var f=a.output===d.ShaderOutput.LinearDepth;f&&(b.include(w.OutputDepth,a),l.addNearFar(b),l.addLinearDepth(b));g.code.add(c.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${a.hasVertexColors?"vColor *\x3d eColor;":a.vvColor?"vColor \x3d eColor * interpolateVVColor(colorFeatureAttribute);":"vColor \x3d eColor;"}
      ${e?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${f?c.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);b.include(r.SliceDraw,a);e&&b.include(y.multipassTerrainTest,a);p.include(B.ColorConversion);(f=a.output===d.ShaderOutput.Highlight)&&b.include(x.OutputHighlight,a);p.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${e?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`fColor.a = 1.0;`:""}

    if (fColor.a < ${c.glsl.float(A.symbolAlphaCutoff)}) {
      discard;
    }

    ${a.output===d.ShaderOutput.Alpha?c.glsl`fragColor = vec4(fColor.a);`:""}

    ${a.output===d.ShaderOutput.Color?c.glsl`fragColor = highlightSlice(fColor, vpos); ${a.transparencyPassType===F.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}`:""}
    ${f?c.glsl`outputHighlight();`:""};
    ${a.output===d.ShaderOutput.LinearDepth?c.glsl`outputDepth(linearDepth);`:""};
    ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?c.glsl`outputObjectAndLayerIdColor();`:""}
  }
  `);return b}const H=Object.freeze(Object.defineProperty({__proto__:null,build:n},Symbol.toStringTag,{value:"Module"}));k.ColorMaterial=H;k.build=n});