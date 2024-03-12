// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(p,A,B,k,q,C,D,E,F,G,H,I,J,K,L,m,r,t,M,f,u,N,O,v,w,n,x,P,l,b,Q,y,R,S){function z(a){const c=new Q.ShaderBuilder,{vertex:g,fragment:e,varyings:h}=c;n.addProjViewLocalOrigin(g,a);c.include(F.PositionAttribute);h.add("vpos","vec3");c.include(N.VisualVariables,a);c.include(D.InstancedDoublePrecision,a);c.include(J.VerticalOffset,a);if(a.output===k.ShaderOutput.Color||a.output===k.ShaderOutput.Alpha)n.addCameraPosition(c.vertex,a),c.include(E.NormalAttribute,a),c.include(C.Transform,a),a.offsetBackfaces&&
c.include(B.Offset),a.instancedColor&&c.attributes.add(S.VertexAttribute.INSTANCECOLOR,"vec4"),h.add("vNormalWorld","vec3"),h.add("localvpos","vec3"),a.multipassEnabled&&h.add("depth","float"),c.include(H.TextureCoordinateAttribute,a),c.include(A.ForwardLinearDepth,a),c.include(G.SymbolColor,a),c.include(I.VertexColor,a),g.uniforms.add(new P.Float4PassUniform("externalColor",d=>d.externalColor)),h.add("vcolorExt","vec4"),g.code.add(b.glsl`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${a.instancedColor?"vcolorExt *\x3d instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${b.glsl.float(O.symbolAlphaCutoff)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${a.multipassEnabled?b.glsl`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `);a.output===k.ShaderOutput.Alpha&&(c.include(q.SliceDraw,a),c.include(v.DiscardOrAdjustAlphaPass,a),c.include(t.multipassTerrainTest,a),e.uniforms.add(new l.FloatPassUniform("opacity",d=>d.opacity),new l.FloatPassUniform("layerOpacity",d=>d.layerOpacity)),a.hasColorTexture&&e.uniforms.add(new y.Texture2DPassUniform("tex",d=>d.texture)),e.include(w.MixExternalColor),e.code.add(b.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassEnabled?b.glsl`terrainDepthTest(depth);`:""}
        ${a.hasColorTexture?b.glsl`
                vec4 texColor = texture(tex, ${a.hasColorTextureTransform?b.glsl`colorUV`:b.glsl`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:b.glsl`vec4 texColor = vec4(1.0);`}
        ${a.hasVertexColors?b.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:b.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `));a.output===k.ShaderOutput.Color&&(c.include(q.SliceDraw,a),c.include(m.EvaluateSceneLighting,a),c.include(L.EvaluateAmbientOcclusion,a),c.include(v.DiscardOrAdjustAlphaPass,a),c.include(a.instancedDoublePrecision?u.ReadShadowMapPass:u.ReadShadowMapDraw,a),c.include(t.multipassTerrainTest,a),n.addCameraPosition(c.fragment,a),r.addMainLightDirection(e),m.addAmbientBoostFactor(e),m.addLightingGlobalFactor(e),e.uniforms.add(g.uniforms.get("localOrigin"),g.uniforms.get("view"),new x.Float3PassUniform("ambient",
d=>d.ambient),new x.Float3PassUniform("diffuse",d=>d.diffuse),new l.FloatPassUniform("opacity",d=>d.opacity),new l.FloatPassUniform("layerOpacity",d=>d.layerOpacity)),a.hasColorTexture&&e.uniforms.add(new y.Texture2DPassUniform("tex",d=>d.texture)),c.include(f.PhysicallyBasedRenderingParameters,a),c.include(M.PhysicallyBasedRendering,a),e.include(w.MixExternalColor),r.addMainLightIntensity(e),e.code.add(b.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassEnabled?b.glsl`terrainDepthTest(depth);`:""}
        ${a.hasColorTexture?b.glsl`
                vec4 texColor = texture(tex, ${a.hasColorTextureTransform?b.glsl`colorUV`:b.glsl`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:b.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${a.pbrMode===f.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":a.spherical?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${a.hasVertexColors?b.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:b.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${a.snowCover?b.glsl`albedo = mix(albedo, vec3(1), 0.9);`:b.glsl``}
        ${b.glsl`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${a.pbrMode===f.PBRMode.Normal||a.pbrMode===f.PBRMode.Schematic?a.spherical?b.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:b.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:b.glsl``}
        ${a.pbrMode===f.PBRMode.Normal||a.pbrMode===f.PBRMode.Schematic?b.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${a.snowCover?b.glsl`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:b.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.transparencyPassType===R.TransparencyPassType.Color?b.glsl`fragColor = premultiplyAlpha(fragColor);`:b.glsl``}
      }
    `));c.include(K.DefaultMaterialAuxiliaryPasses,a);return c}const T=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:"Module"}));p.RealisticTree=T;p.build=z});