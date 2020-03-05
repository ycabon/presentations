// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/makeTemplateObjectHelper ./EvaluateAmbientLighting.glsl ./EvaluateAmbientOcclusion.glsl ./EvaluateMainLighting.glsl ./PhysicallyBasedRendering.glsl ./PiUtils.glsl ./ReadShadowMap.glsl ../../shaderModules/interfaces".split(" "),function(D,f,a,x,y,z,A,B,C,b){Object.defineProperty(f,"__esModule",{value:!0});f.EvaluateSceneLighting=function(e,d){var c=e.fragment;e.include(z.EvaluateMainLighting);e.include(y.EvaluateAmbientOcclusion,d);0!==d.pbrMode&&
e.include(A.PhysicallyBasedRendering,d);e.include(x.EvaluateAmbientLighting,d);d.receiveShadows&&e.include(C.ReadShadowMap,d);c.uniforms.add("lightingGlobalFactor","float");c.uniforms.add("ambientBoostFactor","float");e.include(B.PiUtils);c.code.add(b.glsl(g||(g=a(["\n    const float GAMMA_SRGB \x3d 2.1;\n    const float INV_GAMMA_SRGB \x3d 0.4761904;\n    ","\n  "],["\n    const float GAMMA_SRGB \x3d 2.1;\n    const float INV_GAMMA_SRGB \x3d 0.4761904;\n    ","\n  "])),0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE \x3d vec3(0.2);"));
d.useOldSceneLightInterface?c.code.add(b.glsl(h||(h=a(["\n    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {\n      // evaluate the main light\n      #if defined(TREE_RENDERING)\n        // Special case for tree rendering:\n        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere\n        // facing away from the light. The idea is to get an effect where light is transmitted\n        // through the tree.\n        float minDot \x3d -0.5;\n        float dotRange \x3d 1.0 - minDot;\n        float dotNormalization \x3d 0.66; // guessed \x26 hand tweaked value, for an exact value we could precompute an integral over the sphere\n\n        float dotVal \x3d dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);\n      #else\n        float dotVal \x3d clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);\n      #endif\n\n      // move lighting towards (1.0, 1.0, 1.0) if requested\n      dotVal \x3d mix(dotVal, 1.0, lightingFixedFactor);\n\n      vec3 mainLight \x3d (1.0 - shadow) * lightingMainIntensity * dotVal;\n      vec3 ambientLight \x3d calculateAmbientIrradiance(normal, ssao);\n\n      // inverse gamma correction on the albedo color\n      vec3 albedoGammaC \x3d pow(albedo, vec3(GAMMA_SRGB));\n\n      // physically correct BRDF normalizes by PI\n      vec3 totalLight \x3d mainLight + ambientLight + additionalLight;\n      totalLight \x3d min(totalLight, vec3(PI));\n      vec3 outColor \x3d vec3((albedoGammaC / PI) * (totalLight));\n\n      // apply gamma correction to the computed color\n      outColor \x3d pow(outColor, vec3(INV_GAMMA_SRGB));\n\n      return outColor;\n    }\n  "],
["\n    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {\n      // evaluate the main light\n      #if defined(TREE_RENDERING)\n        // Special case for tree rendering:\n        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere\n        // facing away from the light. The idea is to get an effect where light is transmitted\n        // through the tree.\n        float minDot \x3d -0.5;\n        float dotRange \x3d 1.0 - minDot;\n        float dotNormalization \x3d 0.66; // guessed \x26 hand tweaked value, for an exact value we could precompute an integral over the sphere\n\n        float dotVal \x3d dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);\n      #else\n        float dotVal \x3d clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);\n      #endif\n\n      // move lighting towards (1.0, 1.0, 1.0) if requested\n      dotVal \x3d mix(dotVal, 1.0, lightingFixedFactor);\n\n      vec3 mainLight \x3d (1.0 - shadow) * lightingMainIntensity * dotVal;\n      vec3 ambientLight \x3d calculateAmbientIrradiance(normal, ssao);\n\n      // inverse gamma correction on the albedo color\n      vec3 albedoGammaC \x3d pow(albedo, vec3(GAMMA_SRGB));\n\n      // physically correct BRDF normalizes by PI\n      vec3 totalLight \x3d mainLight + ambientLight + additionalLight;\n      totalLight \x3d min(totalLight, vec3(PI));\n      vec3 outColor \x3d vec3((albedoGammaC / PI) * (totalLight));\n\n      // apply gamma correction to the computed color\n      outColor \x3d pow(outColor, vec3(INV_GAMMA_SRGB));\n\n      return outColor;\n    }\n  "])))):
(0===d.viewingMode?c.code.add(b.glsl(k||(k=a(["\n      float _oldHeuristicLighting(vec3 vPosWorld) {\n        vec3 shadingNormalWorld \x3d normalize(vPosWorld);\n        float vndl \x3d -dot(shadingNormalWorld, lightingMainDirection);\n\n        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));\n      }\n    "],["\n      float _oldHeuristicLighting(vec3 vPosWorld) {\n        vec3 shadingNormalWorld \x3d normalize(vPosWorld);\n        float vndl \x3d -dot(shadingNormalWorld, lightingMainDirection);\n\n        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));\n      }\n    "])))):
c.code.add(b.glsl(l||(l=a(["\n      float _oldHeuristicLighting(vec3 vPosWorld) {\n        float vndl \x3d -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);\n        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));\n      }\n    "],["\n      float _oldHeuristicLighting(vec3 vPosWorld) {\n        float vndl \x3d -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);\n        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));\n      }\n    "])))),c.code.add(b.glsl(m||(m=a(["\n      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {\n        float additionalAmbientScale \x3d _oldHeuristicLighting(vPosWorld);\n        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;\n      }\n    "],
["\n      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {\n        float additionalAmbientScale \x3d _oldHeuristicLighting(vPosWorld);\n        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;\n      }\n    "])))),0===d.pbrMode?c.code.add(b.glsl(n||(n=a(["\n      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)\n      {\n        vec3 mainLighting \x3d evaluateMainLighting(normalWorld, mainLightShadow);\n        vec3 ambientLighting \x3d calculateAmbientIrradiance(normalWorld, ambientOcclusion);\n        // inverse gamma correction on the base color\n        vec3 baseColorLinear \x3d pow(baseColor, vec3(GAMMA_SRGB));\n\n        // physically correct BRDF normalizes by PI\n        vec3 totalLight \x3d mainLighting + ambientLighting + additionalLight;\n        totalLight \x3d min(totalLight, vec3(PI));\n        vec3 outColor \x3d vec3((baseColorLinear / PI) * totalLight);\n\n        // apply gamma correction to the computed color\n        outColor \x3d pow(outColor, vec3(INV_GAMMA_SRGB));\n\n        return outColor;\n      }\n      "],
["\n      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)\n      {\n        vec3 mainLighting \x3d evaluateMainLighting(normalWorld, mainLightShadow);\n        vec3 ambientLighting \x3d calculateAmbientIrradiance(normalWorld, ambientOcclusion);\n        // inverse gamma correction on the base color\n        vec3 baseColorLinear \x3d pow(baseColor, vec3(GAMMA_SRGB));\n\n        // physically correct BRDF normalizes by PI\n        vec3 totalLight \x3d mainLighting + ambientLighting + additionalLight;\n        totalLight \x3d min(totalLight, vec3(PI));\n        vec3 outColor \x3d vec3((baseColorLinear / PI) * totalLight);\n\n        // apply gamma correction to the computed color\n        outColor \x3d pow(outColor, vec3(INV_GAMMA_SRGB));\n\n        return outColor;\n      }\n      "])))):
(c.code.add(b.glsl(p||(p=a(["\n      const float fillLightIntensity \x3d 0.25;\n      const float horizonLightDiffusion \x3d 0.4;\n      const float additionalAmbientIrradianceFactor \x3d 0.02;\n\n      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)\n      {\n        // Calculate half vector between view and light direction\n        vec3 viewDirection \x3d -viewDir;\n        vec3 mainLightDirection \x3d -lightingMainDirection;\n        vec3 h \x3d normalize(viewDirection + mainLightDirection);\n\n        PBRShadingInfo inputs;\n        inputs.NdotL \x3d clamp(dot(normal, mainLightDirection), 0.001, 1.0);\n        inputs.NdotV \x3d clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);\n        inputs.NdotH \x3d clamp(dot(normal, h), 0.0, 1.0);\n        inputs.VdotH \x3d clamp(dot(viewDirection, h), 0.0, 1.0);\n        inputs.NdotNG \x3d clamp(dot(normal, normalGround), -1.0, 1.0);\n        vec3 reflectedView \x3d normalize(reflect(viewDirection, normal));\n        inputs.RdotNG \x3d clamp(dot(reflectedView, normalGround), -1.0, 1.0);\n\n        inputs.albedoLinear \x3d pow(albedo, vec3(GAMMA_SRGB));\n        inputs.ssao \x3d ssao;\n\n        inputs.metalness \x3d mrr[0];\n        inputs.roughness \x3d clamp(mrr[1] * mrr[1], 0.001, 0.99);\n      "],
["\n      const float fillLightIntensity \x3d 0.25;\n      const float horizonLightDiffusion \x3d 0.4;\n      const float additionalAmbientIrradianceFactor \x3d 0.02;\n\n      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)\n      {\n        // Calculate half vector between view and light direction\n        vec3 viewDirection \x3d -viewDir;\n        vec3 mainLightDirection \x3d -lightingMainDirection;\n        vec3 h \x3d normalize(viewDirection + mainLightDirection);\n\n        PBRShadingInfo inputs;\n        inputs.NdotL \x3d clamp(dot(normal, mainLightDirection), 0.001, 1.0);\n        inputs.NdotV \x3d clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);\n        inputs.NdotH \x3d clamp(dot(normal, h), 0.0, 1.0);\n        inputs.VdotH \x3d clamp(dot(viewDirection, h), 0.0, 1.0);\n        inputs.NdotNG \x3d clamp(dot(normal, normalGround), -1.0, 1.0);\n        vec3 reflectedView \x3d normalize(reflect(viewDirection, normal));\n        inputs.RdotNG \x3d clamp(dot(reflectedView, normalGround), -1.0, 1.0);\n\n        inputs.albedoLinear \x3d pow(albedo, vec3(GAMMA_SRGB));\n        inputs.ssao \x3d ssao;\n\n        inputs.metalness \x3d mrr[0];\n        inputs.roughness \x3d clamp(mrr[1] * mrr[1], 0.001, 0.99);\n      "])))),
c.code.add(b.glsl(q||(q=a(["\n        inputs.f0 \x3d (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;\n        inputs.f90 \x3d vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 \x3d 1.0\n        inputs.diffuseColor \x3d inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);\n      "],["\n        inputs.f0 \x3d (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;\n        inputs.f90 \x3d vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 \x3d 1.0\n        inputs.diffuseColor \x3d inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);\n      "])))),
c.code.add(b.glsl(r||(r=a(["\n        vec3 ambientDir \x3d vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);\n        ambientDir \x3d ambientDir !\x3d vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));\n\n        inputs.NdotAmbDir \x3d abs(dot(normal, ambientDir));\n\n        // Calculate the irradiance components: sun, fill lights and the sky.\n        vec3 mainLightIrradianceComponent  \x3d inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;\n        vec3 fillLightsIrradianceComponent \x3d inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;\n        // calculateAmbientIrradiance for localView and additionalLight for gloabalView\n        vec3 ambientLightIrradianceComponent \x3d calculateAmbientIrradiance(normal, ssao) + additionalLight;\n\n        // Assemble the overall irradiance of the sky that illuminates the surface\n        inputs.skyIrradianceToSurface    \x3d ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;\n        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance\n        inputs.groundIrradianceToSurface \x3d GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;\n      "],
["\n        vec3 ambientDir \x3d vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);\n        ambientDir \x3d ambientDir !\x3d vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));\n\n        inputs.NdotAmbDir \x3d abs(dot(normal, ambientDir));\n\n        // Calculate the irradiance components: sun, fill lights and the sky.\n        vec3 mainLightIrradianceComponent  \x3d inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;\n        vec3 fillLightsIrradianceComponent \x3d inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;\n        // calculateAmbientIrradiance for localView and additionalLight for gloabalView\n        vec3 ambientLightIrradianceComponent \x3d calculateAmbientIrradiance(normal, ssao) + additionalLight;\n\n        // Assemble the overall irradiance of the sky that illuminates the surface\n        inputs.skyIrradianceToSurface    \x3d ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;\n        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance\n        inputs.groundIrradianceToSurface \x3d GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;\n      "])))),
c.code.add(b.glsl(t||(t=a(["\n        vec3 horizonRingDir \x3d inputs.RdotNG * normalGround - reflectedView;\n        vec3 horizonRingH \x3d normalize(viewDirection + horizonRingDir);\n        inputs.NdotH_Horizon \x3d dot(normal, horizonRingH);\n\n        vec3 mainLightRadianceComponent  \x3d normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);\n        vec3 horizonLightRadianceComponent \x3d normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;\n        vec3 ambientLightRadianceComponent \x3d calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView\n\n        // Assemble the overall radiance of the sky that illuminates the surface\n        inputs.skyRadianceToSurface    \x3d  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;\n        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance\n        inputs.groundRadianceToSurface \x3d GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;\n\n        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed\n        inputs.averageAmbientRadiance \x3d ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);\n        "],
["\n        vec3 horizonRingDir \x3d inputs.RdotNG * normalGround - reflectedView;\n        vec3 horizonRingH \x3d normalize(viewDirection + horizonRingDir);\n        inputs.NdotH_Horizon \x3d dot(normal, horizonRingH);\n\n        vec3 mainLightRadianceComponent  \x3d normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);\n        vec3 horizonLightRadianceComponent \x3d normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;\n        vec3 ambientLightRadianceComponent \x3d calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView\n\n        // Assemble the overall radiance of the sky that illuminates the surface\n        inputs.skyRadianceToSurface    \x3d  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;\n        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance\n        inputs.groundRadianceToSurface \x3d GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;\n\n        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed\n        inputs.averageAmbientRadiance \x3d ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);\n        "])))),
c.code.add(b.glsl(u||(u=a(["\n        vec3 reflectedColorComponent \x3d evaluateEnvironmentIllumination(inputs);\n        vec3 additionalMaterialReflectanceComponent \x3d inputs.albedoLinear * additionalAmbientIrradiance;\n        vec3 emissionComponent \x3d pow(_emission, vec3(GAMMA_SRGB));\n        vec3 outColorLinear \x3d reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;\n        ","\n        return outColor;\n      }\n    "],["\n        vec3 reflectedColorComponent \x3d evaluateEnvironmentIllumination(inputs);\n        vec3 additionalMaterialReflectanceComponent \x3d inputs.albedoLinear * additionalAmbientIrradiance;\n        vec3 emissionComponent \x3d pow(_emission, vec3(GAMMA_SRGB));\n        vec3 outColorLinear \x3d reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;\n        ",
"\n        return outColor;\n      }\n    "])),2===d.pbrMode?b.glsl(v||(v=a(["vec3 outColor \x3d pow(outColorLinear - 0.005 * inputs.averageAmbientRadiance, vec3(INV_GAMMA_SRGB));"],["vec3 outColor \x3d pow(outColorLinear - 0.005 * inputs.averageAmbientRadiance, vec3(INV_GAMMA_SRGB));"]))):b.glsl(w||(w=a(["vec3 outColor \x3d pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));"],["vec3 outColor \x3d pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));"])))))))};
var g,h,k,l,m,n,p,q,r,t,v,w,u});