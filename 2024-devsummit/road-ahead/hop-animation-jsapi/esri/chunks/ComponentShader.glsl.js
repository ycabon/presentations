// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../geometry/support/Ellipsoid ../views/3d/terrain/OverlayContent ../views/3d/webgl-engine/collections/Component/Material/ComponentTechniqueConfiguration ../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl ../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType".split(" "),
function(t,n,D,u,v,E,F,e,G,H,I,J,K,L,M,N,w,x,O,y,p,P,z,g,Q,R,q,S,T,A,b,U,r,V){function B(a){const c=new U.ShaderBuilder;c.include(L.VertexPosition,a);c.include(K.VertexNormal,a);c.include(J.VertexColor,a);c.include(I.TextureCoordinateAttribute,a);c.include(F.ForwardLinearDepth,a);c.include(v.ComponentData,a);c.include(T.DiscardOrAdjustAlphaDraw,a);c.include(G.SlicePass,a);c.include(Q.ReadBaseColorTexture,a);c.include(E.VertexDiscardByOpacity,a);const {vertex:h,fragment:d}=c;if(a.pbrMode===g.PBRMode.Normal||
a.pbrMode===g.PBRMode.Schematic)c.include(g.PhysicallyBasedRenderingParameters,a),a.hasNormalTexture&&c.include(O.ComputeNormalTexture,a);const C=a.output===e.ShaderOutput.Shadow||a.output===e.ShaderOutput.ShadowHighlight||a.output===e.ShaderOutput.ShadowExcludeHighlight;C&&a.componentData===v.ComponentDataType.Varying?h.code.add(b.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):h.code.add(b.glsl`#define discardShadows(castShadows) {}`);
const f=a.integratedMeshMode===u.IntegratedMeshMode.ColorOverlay||a.integratedMeshMode===u.IntegratedMeshMode.ColorOverlayWithWater,l=f&&a.output===e.ShaderOutput.Color&&a.pbrMode===g.PBRMode.WaterOnIntegratedMesh;f&&(c.include(p.EvaluateSceneLighting,a),c.include(q.OverlayIM,a),a.spherical?h.code.add(b.glsl`
      const float invEllipsoidRadius = ${b.glsl.float(1/(a.ellipsoidMode===A.EllipsoidMode.Earth?n.earth.radius:a.ellipsoidMode===A.EllipsoidMode.Mars?n.mars.radius:n.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):h.code.add(b.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`));l&&(c.varyings.add("tbnTangent","vec3"),c.varyings.add("tbnBiTangent","vec3"),c.varyings.add("groundNormal","vec3"));h.code.add(b.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      ${a.output===e.ShaderOutput.ObjectAndLayerIdColor?b.glsl`externalColor.a = 1.0;`:""}

      if (externalColor.a < ${b.glsl.float(S.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      forwardPosition(readElevationOffset());
      forwardNormal();
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth();
      ${a.output===e.ShaderOutput.ObjectAndLayerIdColor?b.glsl`forwardObjectAndLayerIdColor();`:""}
      ${l?a.spherical?b.glsl`
                groundNormal = normalize(positionWorld());
                tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
                tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:b.glsl`
                groundNormal = vec3(0.0, 0.0, 1.0);
                tbnTangent = vec3(1.0, 0.0, 0.0);
                tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
      ${f?b.glsl`setOverlayVTC(projectOverlay(position));`:""}
    }
  `);a.output===e.ShaderOutput.Alpha&&(d.include(w.ReadLinearDepth),c.include(z.multipassTerrainTest,a),c.include(x.ComputeMaterialColor,a),f&&d.uniforms.add(new r.Texture2DPassUniform("ovColorTex",(m,k)=>q.getIMColorTexture(m,k))),d.code.add(b.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.multipassEnabled?b.glsl`terrainDepthTest(vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${f?b.glsl`
                vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);
                materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        fragColor = vec4(materialColor.a);
      }
    `));a.output===e.ShaderOutput.Color&&(d.include(w.ReadLinearDepth),c.include(z.multipassTerrainTest,a),c.include(x.ComputeMaterialColor,a),c.include(y.ComputeShadingNormal,a),c.include(p.EvaluateSceneLighting,a),a.receiveShadows?(c.include(R.ReadShadowMapPass,a),d.code.add(b.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):d.code.add(b.glsl`float evaluateShadow() { return 0.0; }`),f&&d.uniforms.add(new r.Texture2DPassUniform("ovColorTex",(m,k)=>q.getIMColorTexture(m,k))),d.code.add(b.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.multipassEnabled?b.glsl`terrainDepthTest(vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${f?b.glsl`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),a.pbrMode===g.PBRMode.Normal||a.pbrMode===g.PBRMode.Schematic||a.pbrMode===g.PBRMode.Simplified?(P.addMainLightIntensity(d),d.code.add(b.glsl`
        ${a.pbrMode===g.PBRMode.Normal?b.glsl`
                applyPBRFactors();
                if (int(externalColorMixMode) == 3) {
                  mrr = vec3(0.0, 0.6, 0.2);
                }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
      `),a.hasNormalTexture?d.code.add(b.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):d.code.add(b.glsl`vec3 shadingNormal = normalVertex;`),d.code.add(b.glsl`${a.spherical?b.glsl`vec3 normalGround = normalize(positionWorld());`:b.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),d.code.add(b.glsl`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        ${a.pbrMode===g.PBRMode.Simplified?b.glsl` float ssao = 1.0 - evaluateAmbientOcclusionInverse();`:b.glsl` float ssao = 1.0 - occlusion * evaluateAmbientOcclusionInverse();`}
        ${a.snowCover?b.glsl`
                vec3 surfaceNormal = normalize(shadingNormalWorld());
                float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
                materialColor.rgb = mix(materialColor.rgb, vec3(1.1), snow);
                ssao = mix(ssao, 0.5 * ssao, snow);
                shadingNormal = mix(shadingNormal, surfaceNormal, snow);`:""}

        ${f?b.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        ${a.pbrMode===g.PBRMode.Simplified?b.glsl` vec4 shadedColor = vec4(evaluatePBRSimplifiedLighting(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround), materialColor.a);`:"vec4 shadedColor \x3d vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);"}
        `)):(a.receiveShadows?d.code.add(b.glsl`float shadow = evaluateShadow();`):a.spherical?(p.addLightingGlobalFactor(d),d.code.add(b.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`)):d.code.add(b.glsl`float shadow = 0.0;`),l&&d.uniforms.add(new r.Texture2DPassUniform("ovNormalTex",(m,k)=>k.overlay?.getTexture(D.OverlayContent.WaterNormal))),a.snowCover&&d.code.add(b.glsl`vec3 surfaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`),d.code.add(b.glsl`
        float ambientOcclusion = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());

        ${f?b.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${l?b.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
              }`:""}
      `)),d.code.add(b.glsl`
        fragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${a.transparencyPassType===V.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}
      }
    `));if(a.output===e.ShaderOutput.LinearDepth||C)c.include(M.OutputDepth,a),d.code.add(b.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`);a.output===e.ShaderOutput.Normal&&(c.include(y.ComputeShadingNormal,a),d.code.add(b.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material to influence ambient occlusion,
        // see the ssao fragment shader
        float alpha = ${a.normalType===H.NormalType.Ground?"0.0":"1.0"};
        fragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `));a.output===e.ShaderOutput.ObjectAndLayerIdColor&&c.fragment.code.add(b.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${f?b.glsl`fragColor = getOverlayColorTexel(vtcOverlay);`:"outputObjectAndLayerIdColor();"}
      }
    `);a.output===e.ShaderOutput.Highlight&&(c.include(N.OutputHighlight),d.code.add(b.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${f?b.glsl`
                vec4 overlayColor = getCombinedOverlayColor();
                if (overlayColor.a == 0.0) {
                  fragColor = vec4(0.0);
                  return;
                }`:""}

        outputHighlight();
      }
    `));return c}const W=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}));t.ComponentShader=W;t.build=B});