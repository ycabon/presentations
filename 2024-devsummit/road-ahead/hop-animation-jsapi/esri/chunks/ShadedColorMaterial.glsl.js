// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(r,p,w,h,x,y,z,A,B,t,C,u,d,D,E,q){function v(a){const c=new D.ShaderBuilder,m=a.multipassEnabled&&(a.output===h.ShaderOutput.Color||a.output===h.ShaderOutput.Alpha);c.include(y.Transform,a);c.include(w.ScreenSizeScaling,a);c.include(x.SliceDraw,a);const {vertex:k,fragment:f}=c;f.include(B.ColorConversion);t.addProjViewLocalOrigin(k,a);f.uniforms.add(new u.Float4PassUniform("uColor",b=>b.color));c.attributes.add(q.VertexAttribute.POSITION,"vec3");c.varyings.add("vWorldPosition","vec3");m&&
c.varyings.add("depth","float");a.screenSizeEnabled&&c.attributes.add(q.VertexAttribute.OFFSET,"vec3");a.shadingEnabled&&(t.addViewNormal(k),c.attributes.add(q.VertexAttribute.NORMAL,"vec3"),c.varyings.add("vViewNormal","vec3"));k.code.add(d.glsl`
    void main(void) {
      vWorldPosition = ${a.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `);a.shadingEnabled&&k.code.add(d.glsl`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`);k.code.add(d.glsl`
    ${m?"depth \x3d (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `);m&&c.include(z.multipassTerrainTest,a);f.code.add(d.glsl`
    void main() {
      discardBySlice(vWorldPosition);
      ${m?"terrainDepthTest(depth);":""}
    `);a.shadingEnabled?(f.uniforms.add(new C.Float3PassUniform("shadingDirection",b=>b.shadingDirection)),f.uniforms.add(new u.Float4PassUniform("shadedColor",b=>{{var e=b.shadingTint;b=b.color;const n=1-e[3],l=e[3]+b[3]*n;0===l?g[3]=l:(g[0]=(e[0]*e[3]+b[0]*b[3]*n)/l,g[1]=(e[1]*e[3]+b[1]*b[3]*n)/l,g[2]=(e[2]*e[3]+b[2]*b[3]*n)/l,g[3]=b[3]);e=g}return e})),f.code.add(d.glsl`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):f.code.add(d.glsl`vec4 finalColor = uColor;`);f.code.add(d.glsl`
      ${a.output===h.ShaderOutput.ObjectAndLayerIdColor?d.glsl`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${d.glsl.float(A.symbolAlphaCutoff)}) {
        discard;
      }
      ${a.output===h.ShaderOutput.Alpha?d.glsl`fragColor = vec4(finalColor.a);`:""}

      ${a.output===h.ShaderOutput.Color?d.glsl`fragColor = highlightSlice(finalColor, vWorldPosition); ${a.transparencyPassType===E.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}`:""}
    }
    `);return c}const g=p.create();p=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));r.ShadedColorMaterialShader=p;r.build=v});