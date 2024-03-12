// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(r,B,C,h,t,D,E,k,F,G,H,I,J,K,L,M,N,p,O,u,P,Q,l,v,f,R,S,w,x,q,y,T,m,c,U,z,V,W){function A(a){const b=new U.ShaderBuilder,{vertex:g,fragment:e,varyings:n}=b;q.addProjViewLocalOrigin(g,a);b.include(F.PositionAttribute);n.add("vpos","vec3");b.include(R.VisualVariables,a);b.include(E.InstancedDoublePrecision,a);b.include(K.VerticalOffset,a);b.include(f.colorTextureUV,a);if(a.output===h.ShaderOutput.Color||a.output===h.ShaderOutput.Alpha){b.include(f.normalTextureUV,a);b.include(f.emissiveTextureUV,
a);b.include(f.occlusionTextureUV,a);b.include(f.metallicRoughnessTextureUV,a);q.addCameraPosition(g,a);b.include(k.NormalAttribute,a);b.include(D.Transform,a);const d=a.normalType===k.NormalType.Attribute||a.normalType===k.NormalType.Compressed;d&&a.offsetBackfaces&&b.include(C.Offset);b.include(M.ComputeNormalTexture,a);b.include(J.VertexNormal,a);a.instancedColor&&b.attributes.add(W.VertexAttribute.INSTANCECOLOR,"vec4");n.add("vPositionLocal","vec3");b.include(H.TextureCoordinateAttribute,a);b.include(B.ForwardLinearDepth,
a);b.include(G.SymbolColor,a);b.include(I.VertexColor,a);g.uniforms.add(new T.Float4PassUniform("externalColor",X=>X.externalColor));n.add("vcolorExt","vec4");a.multipassEnabled&&n.add("depth","float");g.code.add(c.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${a.instancedColor?"vcolorExt *\x3d instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${c.glsl.float(S.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${d?c.glsl`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${a.hasVertexTangents?"vTangent \x3d dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${d&&a.offsetBackfaces?"gl_Position \x3d offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${a.multipassEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(a.output){case h.ShaderOutput.Alpha:b.include(t.SliceDraw,a);b.include(w.DiscardOrAdjustAlphaPass,a);b.include(u.multipassTerrainTest,a);e.uniforms.add(new m.FloatPassUniform("opacity",d=>d.opacity),new m.FloatPassUniform("layerOpacity",d=>d.layerOpacity));a.hasColorTexture&&e.uniforms.add(new z.Texture2DPassUniform("tex",d=>d.texture));e.include(x.MixExternalColor);e.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassEnabled?"terrainDepthTest(depth);":""}
        ${a.hasColorTexture?c.glsl`
                vec4 texColor = texture(tex, ${a.hasColorTextureTransform?c.glsl`colorUV`:c.glsl`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        ${a.hasVertexColors?c.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case h.ShaderOutput.Color:b.include(t.SliceDraw,a),b.include(p.EvaluateSceneLighting,a),b.include(N.EvaluateAmbientOcclusion,a),b.include(w.DiscardOrAdjustAlphaPass,a),b.include(a.instancedDoublePrecision?v.ReadShadowMapPass:v.ReadShadowMapDraw,a),b.include(u.multipassTerrainTest,a),q.addCameraPosition(e,a),e.uniforms.add(g.uniforms.get("localOrigin"),new y.Float3PassUniform("ambient",d=>d.ambient),new y.Float3PassUniform("diffuse",d=>d.diffuse),new m.FloatPassUniform("opacity",d=>d.opacity),
new m.FloatPassUniform("layerOpacity",d=>d.layerOpacity)),a.hasColorTexture&&e.uniforms.add(new z.Texture2DPassUniform("tex",d=>d.texture)),b.include(l.PhysicallyBasedRenderingParameters,a),b.include(Q.PhysicallyBasedRendering,a),e.include(x.MixExternalColor),b.include(P.Normals,a),p.addAmbientBoostFactor(e),p.addLightingGlobalFactor(e),O.addMainLightIntensity(e),e.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassEnabled?"terrainDepthTest(depth);":""}
        ${a.hasColorTexture?c.glsl`
                vec4 texColor = texture(tex, ${a.hasColorTextureTransform?c.glsl`colorUV`:c.glsl`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /\x3d texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:c.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${a.normalType===k.NormalType.ScreenDerivative?c.glsl`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:c.glsl`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${a.pbrMode===l.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${a.receiveShadows?"readShadowMap(vpos, linearDepth)":a.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${a.hasVertexColors?c.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:c.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${a.hasNormalTexture?c.glsl`
                mat3 tangentSpace = ${a.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${a.hasNormalTextureTransform?c.glsl`normalUV`:"vuv0"});`:c.glsl`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${a.spherical?c.glsl`normalize(posWorld);`:c.glsl`vec3(0.0, 0.0, 1.0);`}

        ${a.snowCover?c.glsl`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${a.pbrMode===l.PBRMode.Normal||a.pbrMode===l.PBRMode.Schematic?c.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${a.snowCover?c.glsl`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:c.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.transparencyPassType===V.TransparencyPassType.Color?c.glsl`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}b.include(L.DefaultMaterialAuxiliaryPasses,a);return b}const Y=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}));r.DefaultMaterial=Y;r.build=A});