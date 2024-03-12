// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(e,m,n,p,q,f,g,r,t,h){function k(b){const a=new r.ShaderBuilder,{vertex:l,fragment:c}=a;p.addProjViewLocalOrigin(l,b);a.attributes.add(h.VertexAttribute.POSITION,"vec3");a.attributes.add(h.VertexAttribute.UV0,"vec2");a.varyings.add("vUV","vec2");b.multipassEnabled&&a.varyings.add("depth","float");l.code.add(g.glsl`
    void main(void) {
      vUV = uv0;
      ${b.multipassEnabled?"depth \x3d (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `);a.include(m.multipassTerrainTest,b);c.uniforms.add(new q.Float2PassUniform("size",d=>d.size));c.uniforms.add(new f.Float4PassUniform("color1",d=>d.color1));c.uniforms.add(new f.Float4PassUniform("color2",d=>d.color2));c.include(n.ColorConversion);c.code.add(g.glsl`
    void main() {
      ${b.multipassEnabled?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${b.transparencyPassType===t.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}
    }
  `);return a}const u=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));e.CheckerBoard=u;e.build=k});