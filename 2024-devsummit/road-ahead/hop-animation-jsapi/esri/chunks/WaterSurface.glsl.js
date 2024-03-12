// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(n,w,f,h,x,y,z,A,m,B,p,C,D,E,q,k,F,r,G,t,c,H,I,u){function v(b){const a=new H.ShaderBuilder,{vertex:e,fragment:d}=a;r.addProjViewLocalOrigin(e,b);a.include(x.Transform,b);a.attributes.add(u.VertexAttribute.POSITION,"vec3");a.attributes.add(u.VertexAttribute.UV0,"vec2");const g=new G.Float4PassUniform("waterColor",l=>l.color);if(b.output===f.ShaderOutput.Color&&b.draped)return a.varyings.add("vpos","vec3"),e.uniforms.add(g),e.code.add(c.glsl`
        void main(void) {
          if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),d.uniforms.add(g),d.code.add(c.glsl`void main() {
fragColor = waterColor;
}`),a;if(b.output===f.ShaderOutput.Color||b.output===f.ShaderOutput.Alpha)a.include(p.NormalUtils,b),a.include(w.ForwardLinearDepth,b),a.varyings.add("vuv","vec2"),a.varyings.add("vpos","vec3"),a.varyings.add("vnormal","vec3"),a.varyings.add("vtbnMatrix","mat3"),b.multipassEnabled&&a.varyings.add("depth","float"),e.uniforms.add(g),e.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${b.multipassEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${b.output===f.ShaderOutput.Color?"forwardLinearDepth();":""}
      }
    `);a.include(B.multipassTerrainTest,b);switch(b.output){case f.ShaderOutput.Alpha:a.include(h.SliceDraw,b);d.uniforms.add(g);d.code.add(c.glsl`
        void main() {
          discardBySlice(vpos);
          ${b.multipassEnabled?"terrainDepthTest(depth);":""}

          fragColor = vec4(waterColor.a);
        }
      `);break;case f.ShaderOutput.Color:a.include(m.MainLighting);a.include(A.EvaluateAmbientLighting,{pbrMode:C.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2});a.include(q.WaterDistortion);a.include(h.SliceDraw,b);a.include(D.ReadShadowMapDraw,b);a.include(E.Water,b);d.uniforms.add(g,new t.FloatPassUniform("timeElapsed",l=>l.timeElapsed),e.uniforms.get("view"),e.uniforms.get("localOrigin"));r.addCameraPosition(d,b);d.include(F.ColorConversion);m.addMainLightDirection(d);m.addMainLightIntensity(d);
d.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.multipassEnabled?"terrainDepthTest(depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${b.receiveShadows?c.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${b.transparencyPassType===I.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}
      }
    `);break;case f.ShaderOutput.Normal:a.include(p.NormalUtils,b);a.include(q.WaterDistortion,b);a.include(h.SliceDraw,b);a.varyings.add("vpos","vec3");a.varyings.add("vuv","vec2");e.uniforms.add(g);e.code.add(c.glsl`
        void main(void) {
          if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `);d.uniforms.add(new t.FloatPassUniform("timeElapsed",l=>l.timeElapsed));d.code.add(c.glsl`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case f.ShaderOutput.Highlight:a.include(z.OutputHighlight,b);a.varyings.add("vpos","vec3");e.uniforms.add(g);e.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `);a.include(h.SliceDraw,b);d.code.add(c.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`);break;case f.ShaderOutput.ObjectAndLayerIdColor:a.include(y.ObjectAndLayerIdColor,b),a.varyings.add("vpos","vec3"),e.uniforms.add(g),e.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(k.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `),a.include(h.SliceDraw,b),d.code.add(c.glsl`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`)}return a}const J=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));n.WaterSurface=J;n.build=v});