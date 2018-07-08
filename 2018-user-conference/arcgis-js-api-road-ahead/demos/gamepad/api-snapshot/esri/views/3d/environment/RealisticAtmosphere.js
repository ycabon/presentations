// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/environment/materials/RealisticAtmosphereMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n\n\x3csnippets\x3e\n\n\x3c!--Vertex Shader for Atmosphere--\x3e\n\x3csnippet name\x3d"vsRealisticAtmosphere"\x3e\x3c![CDATA[\n//\n// Based on Atmospheric scattering vertex shader by Sean O\'Neil from GPU Gems 2 Chapter 16.\n//\n// Link:                   http://http.developer.nvidia.com/GPUGems2/gpugems2_chapter16.html\n// Download Portal:        http://http.download.nvidia.com/developer/GPU_Gems_2/CD/Index.html\n// Unmodified Source Code: http://http.download.nvidia.com/developer/GPU_Gems_2/CD/Content/16.zip\n//\n// Adapted for WebGIS by Jascha Gr\u00fcbel (jgruebel@esri.com), Z\u00fcrich 2015\n//\n\n  $vsprecisionf\n\n  //Camera\n  uniform vec2 halfSizeNearPlane;\n  uniform vec3 v3CameraUp;\n  uniform vec3 v3CameraRight;\n  uniform vec3 v3CameraDir;\n  uniform vec2 v2CameraCenterOffset;\n\n  //Attributes\n  attribute vec3 $position;\n  attribute vec2 $uv0;\n\n  //Varyings\n  varying vec3 v3WorldRay;\n  varying vec2 vtc;\n\n#ifdef HAZE\n  varying vec3 v3EyeDir;\n#endif\n\n  void main(void) {\n    vec3 v3Pos \x3d $position;\n    vtc \x3d $uv0;\n    vec2 rayvtc \x3d $uv0 - v2CameraCenterOffset;\n\n#ifdef HAZE\n    v3EyeDir \x3d vec3((2.0*halfSizeNearPlane *rayvtc)-halfSizeNearPlane,-1.0);\n#else\n    vec3 v3EyeDir \x3d vec3((2.0*halfSizeNearPlane *rayvtc)-halfSizeNearPlane,-1.0);\n#endif\n    v3WorldRay \x3d v3EyeDir.z*v3CameraDir + v3EyeDir.y*v3CameraUp + v3EyeDir.x*v3CameraRight;\n    gl_Position \x3d vec4(v3Pos, 1.0);\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"atmosphereScaleFunction"\x3e\x3c![CDATA[\n  //Approximation for inner integral based on a radii ratio of 10.25:10\n  float scale(float fCos){\n    float x \x3d 1.0 - fCos;\n    return exp(-0.00287 + x*(0.459 + x*(3.83 + x*(-6.80 + x*5.25))));\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"toneMapperConstants"\x3e\x3c![CDATA[\n#ifdef HAZE\n  const float fOneOverGamma \x3d 1.0;//Gamma \x3d 1.0\n#else\n  const float fOneOverGamma \x3d 0.454545; // Gamma \x3d 2.2\n#endif\n  const vec3 v3OneOverGamma \x3d vec3(fOneOverGamma);\n\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"exponentialToneMapper"\x3e\x3c![CDATA[\n  //ToneMapping operators\n  vec3 expTM(vec3 inputColor,float exposure){\n      return pow(1.0 - exp(inputColor * -exposure), v3OneOverGamma);\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"reinhardToneMapper"\x3e\x3c![CDATA[\n  vec3 reinhardTM(vec3 inputColor, float exposure){\n      vec3 intermediate \x3d inputColor *exposure;\n      intermediate /\x3d (1.0+intermediate);\n      return pow(intermediate, v3OneOverGamma);\n  }\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"HSVColorSpace"\x3e\x3c![CDATA[\n//based on http://gamedev.stackexchange.com/a/59808\n// Hue in range [0,1] instead of 360\u00b0\nvec3 rgb2hsv(vec3 c)\n{\n    vec4 K \x3d vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p \x3d mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q \x3d mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    float d \x3d q.x - min(q.w, q.y);\n    float e \x3d 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K \x3d vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p \x3d abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"atmosphereUniformsConstantsVaryings"\x3e\x3c![CDATA[\n\n  //Light\n  uniform vec3 v3LightDir;      // The direction vector to the light source\n  uniform vec3 v3InvWavelength; // 1 / pow(wavelength, 4) for the red, green, and blue channels\n  uniform vec3 v3InvWavelengthScaled; //v3InvWavelength * fKr4PI + fKm4PI\n\n  //Radii\n  uniform vec4 v4Radii; // inner, inner^2, outer, outer^2,\n\n  //Atmosphere\n  const float fKrESun \x3d 0.075;        // Kr * ESun \x3d 0.005 * 15.0\n  const float fKmESun \x3d 0.015;        // Km * ESun \x3d 0.005 * 15\n  //uniform float fScale;         // 1 / (fOuterRadius - fInnerRadius)\n  //uniform float fScaleDepth;    // The scale depth (i.e. the altitude at which the atmosphere\'s average density is found)\n  //uniform float fScaleOverScaleDepth; // fScale / fScaleDepth\n  //uniform float fOneOverScaleDepth; // 1.0 / fScaleDepth\n\n  //uniform float fScaleDepthBlue;    // The scale depth (i.e. the altitude at which the atmosphere\'s average density is found)\n  //uniform float fScaleOverScaleDepthBlue; // fScale / fScaleDepth\n  //uniform float fOneOverScaleDepthBlue; // 1.0 / fScaleDepth\n\n  uniform vec4 v4AtmosParams1; //(fScale,fScaleDepth,fScaleOverScaleDepth,fOneOverScaleDepth)\n  uniform vec4 v4AtmosParams2; //(g,fScaleDepthBlue,fScaleOverScaleDepthBlue,fOneOverScaleDepthBlue)\n#ifndef HAZE\n  uniform vec4 v4AtmosParams3; //(g2,fMiePhaseCoefficients,fLowerAlphaBlendBound,fOneOverOuterRadiusMinusAlphaBlendBound)\n#endif\n\n  //Camera\n  uniform vec3 v3CameraPos;     // The camera\'s current position\n  //uniform float fCameraHeight;  // The camera\'s current height\n  //uniform float fCameraHeight2; // fCameraHeight^2\n  //uniform float fC; //fCameraHeight2 - fOuterRadius2; // C \x3d ||o-c||^2 - r^2\n  //uniform float fCSur; //fCameraHeight2 - (fInnerRadius2 - 63756370000.0); // C \x3d ||o-c||^2 - r^2\n  uniform vec4 v4SphereComp; //The camera\'s current height, CameraHeight^2,fC,fCSur\n  uniform vec2 nearFar;\n\n  //Camera HDR\n#ifdef HAZE\n  const float fExposure \x3d 1.5;\n#else\n  const float fExposure \x3d 2.0;\n#endif\n\n#ifdef HAZE\n  //Depth texture\n  uniform sampler2D tDepth;\n#endif\n\n  //Testing variables\n  uniform float showTest;\n\n  //Varyings\n  varying vec3 v3EyeDir;\n  varying vec3 v3WorldRay;\n  varying vec2 vtc;\n\n  //Loop constants for integral approximation\n  const float fSamples \x3d 5.0;\n  const int maxSamples \x3d 5;\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"atmospherePrecomputation"\x3e\x3c![CDATA[\n    float fInnerRadius \x3d v4Radii[0];   // The inner (planetary) radius\n    float fInnerRadius2 \x3d v4Radii[1];  // fInnerRadius^2\n    float fOuterRadius \x3d v4Radii[2];   // The outer (atmosphere) radius\n    float fOuterRadius2 \x3d v4Radii[3];  // fOuterRadius^2\n\n    float fCameraHeight \x3d v4SphereComp[0];\n    float fCameraHeight2 \x3d v4SphereComp[1];\n    float fC \x3d v4SphereComp[2];\n    float fCSur \x3d v4SphereComp[3];\n\n    vec3 cameraPosition \x3d v3CameraPos;\n\n    //Debug variables\n    vec3 test \x3d vec3(0.0,0.0,0.0);\n\n    //Obtain ray from Camera\n    vec3 worldSpaceRay \x3d normalize(v3WorldRay);\n\n    //Compute Atmosphere intersection; i.e. ray/sphere intersection\n    float B \x3d 2.0 * dot(cameraPosition, worldSpaceRay); // B \x3d 2(l * (o-c))\n    float det \x3d B*B - 4.0 * fC; // det \x3d B^2 - 4.0* C\n\n    //idealized sphere intersection to discard early some pixels\n    float detSur \x3d B*B - 4.0 * fCSur; // det \x3d B^2 - 4.0* C\n\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"atmosphereDiscardPixels"\x3e\x3c![CDATA[\n#ifdef HAZE\n      bool continueComputation \x3d true;\n\n      // only use red channel from depth texture.\n      // see \'Issues\' at https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture\n      float depthSample \x3d texture2D(tDepth, vtc).r;\n\n      float zNear \x3d nearFar[0];\n      float zFar \x3d nearFar[1];\n\n      // http://web.archive.org/web/20130416194336/http://olivers.posterous.com/linear-depth-in-glsl-for-real\n      float zNorm \x3d 2.0 * depthSample - 1.0;\n      float linDepth \x3d 2.0 * zNear * zFar /\n        (zFar + zNear - zNorm * (zFar - zNear));\n\n      float rayEndT;\n      float altitudeAlpha \x3d 1.0;\n\n      // find intersections with ground, but only between the near and far\n      // clipping planes.\n      if (depthSample \x3c 1.0 \x26\x26 depthSample \x3e 0.0) {\n        vec3 cameraSpaceRay \x3d normalize(v3EyeDir);\n        cameraSpaceRay /\x3d cameraSpaceRay.z;\n        cameraSpaceRay *\x3d linDepth;\n\n        float cameraSpaceRayLength \x3d length(cameraSpaceRay);\n\n        vec3 v3World \x3d cameraPosition + worldSpaceRay * cameraSpaceRayLength;\n        float v3WorldRadius2 \x3d dot(v3World, v3World);\n\n        // Handle tall structures:\n        // https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/5450\n        float transitionStart \x3d fInnerRadius + 20000.0;\n        float transitionHeight \x3d 25000.0;\n        float transitionEnd \x3d transitionStart + transitionHeight;\n\n        float edge0 \x3d transitionStart * transitionStart;\n        float edge1 \x3d transitionEnd * transitionEnd;\n\n        altitudeAlpha \x3d 1.0 - clamp((v3WorldRadius2 - edge0) / (edge1 - edge0), 0.0, 1.0);\n        rayEndT \x3d cameraSpaceRayLength;\n\n        if (altitudeAlpha \x3e 0.0) {\n          continueComputation \x3d true;\n\n          if (detSur \x3e 0.0) {\n            float nearSurfaceT \x3d 0.5 *(-B - sqrt(detSur));\n            float interp \x3d clamp(((fCameraHeight - fInnerRadius) - 2000000.0) / 6000000.0, 0.0, 1.0);\n            rayEndT \x3d mix(cameraSpaceRayLength, nearSurfaceT, interp);\n          }\n        }\n      }\n#endif\n\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"atmosphereUnpackAddUniforms"\x3e\x3c![CDATA[\n        float fScale \x3d v4AtmosParams1.x;\n        vec2 v2ScaleDepth \x3d vec2(v4AtmosParams1.y,v4AtmosParams2.y);//fScaleDepth, fScaleDepthBlue\n        vec2 v2ScaleOverScaleDepth \x3d vec2(v4AtmosParams1.z,v4AtmosParams2.z);//fScaleOverScaleDepth, fScaleOverScaleDepthBlue\n        vec2 v2OneOverScaleDepth \x3d vec2(v4AtmosParams1.w,v4AtmosParams2.w);//fOneOverScaleDepth, fOneOverScaleDepthBlue\n\n#ifndef HAZE\n        float g \x3d v4AtmosParams2.x;\n        float g2 \x3d v4AtmosParams3.x;\n        float fMiePhaseCoefficients \x3d v4AtmosParams3.y;\n        float fLowerAlphaBlendBound \x3d v4AtmosParams3.z;\n        float fOneOverOuterRadiusMinusAlphaBlendBound \x3d v4AtmosParams3.w;\n#endif\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"atmosphereComputeRayAndLoopSetup"\x3e\x3c![CDATA[\n        float rayStartT \x3d 0.5 *(-B - sqrt(det)); //near intersection with atmosphere\n#ifdef HAZE\n        float nearT \x3d abs(rayStartT);\n        float farT \x3d abs(rayEndT);\n#else\n        float rayEndT \x3d 0.5 *(-B + sqrt(det)); //far intersection with atmosphere\n\n#endif\n\n        float fDistance;//calculate its scattering offset\n        // Calculate the ray\'s starting position\n        if (rayStartT \x3c 0.0)\n        { //ray starts from camera to far\n          rayStartT \x3d 0.0;\n#ifndef HAZE\n          fDistance \x3d fScale*(fInnerRadius - fCameraHeight);\n#endif\n        }\n#ifndef HAZE\n        else\n        {//outside atmosphere\n          fDistance \x3d -1.0;\n        }\n#endif\n\n        // Initialize the scattering loop variables\n        vec3 v3Start \x3d cameraPosition + worldSpaceRay * rayStartT;\n\n#ifdef HAZE\n        vec3 v3End \x3d cameraPosition + worldSpaceRay * rayEndT;\n\n        float fEndLength \x3d length(v3End);\n        float fLocalCameraHeight \x3d length(v3Start);\n\n        //computed for the original end point to get consistent light angles after possible inversions\n        float fLightAngle \x3d dot(v3LightDir, v3End) / fEndLength;\n\n        if (nearT \x3e farT)\n        {\n          if (fLocalCameraHeight \x3c fEndLength)\n          {\n            //Switch positive slopes for flipped rays\n            v3End \x3d cameraPosition + worldSpaceRay * rayStartT;\n            v3Start \x3d cameraPosition + worldSpaceRay * rayEndT;\n            worldSpaceRay *\x3d -1.0;\n            fEndLength \x3d length(v3End);\n            fLocalCameraHeight \x3d length(v3Start);\n          }\n          else if (fLocalCameraHeight \x3d\x3d fEndLength)\n          {// create minuscule fake slope for integration if the slope is zero\n            fLocalCameraHeight +\x3d 1.0; //BUGFIX, if the height of camera and ground is equal the equation breaks, add fake meter to camera height to get\n            //slope for the camera function\n          }\n        }\n\n        //Calculate its scattering offset\n        // Assumes camera constrains of WSV 3.8\n        float fCameraDepth;\n        float fCameraDepthBlue;\n        if (fLocalCameraHeight \x3e fOuterRadius)\n        {\n          fDistance \x3d fInnerRadius - fOuterRadius;\n        } else\n        {//outside atmosphere\n          fDistance \x3d fEndLength - fLocalCameraHeight;\n        }\n\n#endif\n        vec2 v2OpticalStartDepth \x3d exp(fDistance * v2OneOverScaleDepth);\n\n        float fRayLength \x3d rayEndT - rayStartT;\n        float fSampleLength \x3d fRayLength / fSamples;\n        float fScaledLength \x3d fSampleLength * fScale;\n        vec3 v3SampleRay \x3d worldSpaceRay * fSampleLength;\n        vec3 v3SamplePoint \x3d v3Start + v3SampleRay * 0.5;\n\n#ifdef HAZE\n        float fCameraAngle \x3d dot(-worldSpaceRay, v3End) / fEndLength;\n        float fScaleCameraAngle \x3d scale(fCameraAngle);\n        vec2 v2CameraOffset \x3d fScaleCameraAngle*v2OpticalStartDepth;\n\n        float scaledValues \x3d scale(fLightAngle) + fScaleCameraAngle;\n        vec2 v2ScaledValuesDepth \x3d scaledValues * v2ScaleDepth;\n#else\n        float fCameraAngle \x3d dot(worldSpaceRay, v3Start / length(v3Start));\n        float angleMultiplier \x3d fCameraAngle\x3e0.0?fCameraAngle:0.0;\n\n        float fScaleCameraAngle \x3d scale(fCameraAngle);\n        vec2 v2CameraOffset \x3d fScaleCameraAngle*v2OpticalStartDepth * v2ScaleDepth;\n#endif\n\n        //Loop variables\n        vec3 v3FrontColor \x3d vec3(0.0, 0.0, 0.0);\n        vec3 v3FrontColorBlue \x3d vec3(0.0, 0.0, 0.0);\n        vec3 v3Attenuate\x3d vec3(0.0, 0.0, 0.0);\n        vec3 v3AttenuateBlue \x3d vec3(0.0, 0.0, 0.0);\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"atmosphereComputeSampleContribution"\x3e\x3c![CDATA[\n          float fHeight \x3d length(v3SamplePoint);\n          vec2 v2Depth \x3d exp(v2ScaleOverScaleDepth * (fInnerRadius - fHeight));\n#ifdef HAZE\n          vec2 v2Scatter \x3d v2Depth*v2ScaledValuesDepth-v2CameraOffset;\n#else\n          float fLightAngle \x3d dot(v3LightDir, v3SamplePoint) / fHeight;\n          float fCameraAngle \x3d dot(worldSpaceRay, v3SamplePoint) / fHeight;\n          float fTempScaledValues \x3d scale(fLightAngle) - scale(fCameraAngle);\n          vec2 v2Scatter \x3d v2CameraOffset + fTempScaledValues*v2Depth* v2ScaleDepth;\n#endif\n          v3Attenuate \x3d exp(-v2Scatter.x * v3InvWavelengthScaled);\n          v3AttenuateBlue \x3d exp(-v2Scatter.y * v3InvWavelengthScaled);\n\n          v3FrontColor +\x3d v3Attenuate * v2Depth.x;\n          v3FrontColorBlue +\x3d v3AttenuateBlue * v2Depth.y;\n\n          v3SamplePoint +\x3d v3SampleRay;\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"atmosphereComputeHDRColors"\x3e\x3c![CDATA[\n        //Phase computation\n        //clamp to avoid numerical instability at fCos \x3d\x3d -1.0 (and close values) to display fake sun\n        float fCos \x3d clamp(dot(v3LightDir, -worldSpaceRay ),-0.9999999,1.0);\n        float fOnePlusCos2 \x3d fCos*fCos + 1.0;\n#ifdef HAZE\n        // Finally, scale the Rayleigh colors and set up the varying variables for the pixel shader\n        vec3 colorCoefficients \x3d (fScaledLength* 0.75 * fOnePlusCos2)*(fKrESun*v3InvWavelength+fKmESun);\n\n        //Scaled Length is only applied afterwards to save multiplications\n        vec3 v3Color \x3d colorCoefficients *v3FrontColor;\n        vec3 v3ColorBlue \x3d colorCoefficients *v3FrontColorBlue;\n#else\n        vec3 v3RayleighCoefficients \x3d (fScaledLength*0.75 * fOnePlusCos2*fKrESun)*v3InvWavelength;\n        float fMieCoefficients \x3d fScaledLength*fKmESun * fMiePhaseCoefficients * fOnePlusCos2 / pow(1.0 + g2 - 2.0*g*fCos, 1.5);\n\n        // Calculate the attenuation factor for the ground\n        vec3 v3Color \x3d v3RayleighCoefficients * v3FrontColor + fMieCoefficients * v3FrontColor;\n        vec3 v3ColorBlue \x3d v3RayleighCoefficients * v3FrontColorBlue + fMieCoefficients * v3FrontColorBlue;\n#endif\n]]\x3e\x3c/snippet\x3e\n\n\n\x3csnippet name\x3d"atmosphereComputePixelColor"\x3e\x3c![CDATA[\n\n\n        //HDR to LDR conversion\n        vec3 ldrBlue \x3d expTM(v3ColorBlue,2.0*fExposure);\n        vec3 ldrRed \x3d expTM(v3Color,fExposure);\n\n        //mix reddish and blueish atmosphere\n        vec3 LDR \x3d mix(ldrBlue,ldrRed,0.2);\n#ifdef HAZE\n        LDR *\x3d (1.0-fCameraAngle);\n        vec3 hsv \x3d rgb2hsv(LDR);\n        hsv.y \x3d clamp(hsv.y*1.5,0.0,1.0);//boost haze saturation by 50%\n        LDR \x3d hsv2rgb(hsv);\n        vec3 finalColor \x3d LDR;\n        // when rendering we specify the blend functions such that\n        // newDestColor \x3d oldDestColor*(1.0-finalColor) + finalColor\n#else\n        //reinhard tonemapper for looking upwards\n        vec3 ldrReinhard \x3d reinhardTM(v3Color,fExposure);\n        LDR +\x3d angleMultiplier*ldrReinhard;\n\n        //height dependent parameter to smooth out reddish atmosphere\n        float side \x3d (rayEndT+rayStartT)*0.5;\n        float atmoHeight \x3d sqrt(fCameraHeight2 - side*side);\n        float h2 \x3d clamp(1.0-(atmoHeight-fLowerAlphaBlendBound)/(fOuterRadius-fLowerAlphaBlendBound),0.0,1.0);\n\n        vec3 finalColor \x3d LDR*h2;\n        vec3 hsv \x3d rgb2hsv(finalColor);\n        hsv.y \x3d clamp(hsv.y*1.5,0.0,1.0);//boost sky saturation by 50%\n        finalColor \x3d hsv2rgb(hsv);\n#endif\n#ifndef HAZE\n        float atmosStrength \x3d clamp((length(ldrRed)-0.05)*1.05,0.0,1.0);\n        gl_FragColor \x3d vec4(finalColor, atmosStrength*clamp(1.0-(atmoHeight-fInnerRadius)/(fOuterRadius-fInnerRadius),0.0,1.0));\n#else\n        gl_FragColor \x3d vec4(finalColor, 1.0) * altitudeAlpha;\n#endif\n]]\x3e\x3c/snippet\x3e\n\n\x3c!--Fragment Shader for Atmosphere--\x3e\n\x3csnippet name\x3d"fsRealisticAtmosphere"\x3e\x3c![CDATA[\n\n  $fsprecisionf\n\n$atmosphereUniformsConstantsVaryings\n\n$atmosphereScaleFunction\n\n  //Conversion implementation found in util.xml\n$rgba2float\n\n\n$toneMapperConstants\n$exponentialToneMapper\n#ifndef HAZE\n$reinhardToneMapper\n#endif\n\n$HSVColorSpace\n\n  void main()\n  {\n\n    $atmospherePrecomputation\n\n    //Inside Atmosphere\n    if (det \x3e\x3d 0.0) {\n#ifdef HAZE\n      $atmosphereDiscardPixels\n\n      if (continueComputation) {\n#endif\n        $atmosphereUnpackAddUniforms\n\n        $atmosphereComputeRayAndLoopSetup\n\n        // Now loop through the sample rays\n        for(int i\x3d0; i\x3cmaxSamples; i++)\n        {\n          $atmosphereComputeSampleContribution\n        }\n\n        $atmosphereComputeHDRColors\n\n        $atmosphereComputePixelColor\n\n        //Debug variable overlay\n        if(showTest\x3e0.0){\n          gl_FragColor \x3d vec4(test,1.0);\n        }\n#ifdef HAZE\n      } else {//Not on surface\n        gl_FragColor \x3d vec4(0.0);\n      }\n#endif\n    } else {//Outside Atmosphere\n      gl_FragColor \x3d vec4(0.0);\n    }\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3c/snippets\x3e\n'}});
define("dojo/text!./materials/RealisticAtmosphereMaterial.xml ../../../core/watchUtils ../../../core/Handles ../support/ExternalRenderer ../lib/glMatrix ../webgl-engine/lib/GeometryRenderer ../webgl-engine/lib/GeometryUtil ../webgl-engine/lib/RenderPass ../webgl-engine/lib/RenderSlot ../webgl-engine/lib/OffscreenRenderingHelper ../support/earthUtils ../../webgl/Program ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/DefaultVertexAttributeLocations".split(" "),function(v,n,w,h,k,
x,y,z,A,B,l,q,C,r){var f=l.earthRadius,b=k.vec3d,g=k.vec2d,e=k.vec4d;k=.02*Math.PI;l=.004*Math.PI;var t=b.createFrom(1/Math.pow(.65,4),1/Math.pow(.57,4),1/Math.pow(.475,4)),p=b.create(t);b.scale(p,k);b.add(p,b.createFrom(l,l,l));var u=(1- -.99999*-.99999)/(2+-.99999*-.99999)*1.5;h=h.createSubclass({declaredClass:"esri.views.3d.environment.RealisticAtmosphere",properties:{view:{},needsRender:{value:!1},slot:{set:function(a){this.needsRender=!0;this._set("slot",a)}}},constructor:function(){this._handles=
new w;this._lowerElevationBoundRadius=0;this._earthRadius=f;this._renderer=this._skyProgram=this._hazeProgram=null;this._renderData={texDepth:g.create(),v3CameraPos:b.create(),v3CameraUp:b.create(),v3CameraRight:b.create(),v3CameraDir:b.create(),halfSizeNearPlane:g.create(),v2CameraCenterOffset:g.create(),v4SphereComp:e.create(),v4AtmosParams1:e.create(),v4AtmosParams2:e.create(),v4AtmosParams3:e.create(),v3InvWavelength:t,v3InvWavelengthScaled:p,v4Radii:e.create(),fScale:0,fScaleDepth:.25,fLowerAlphaBlendBound:0,
fScaleOverScaleDepth:0,fOneOverScaleDepth:0,fScaleDepthBlue:.05,fOneOverScaleDepthBlue:20,fScaleOverScaleDepthBlue:0,g:-.99999,g2:-.99999*-.99999,fMiePhaseCoefficients:u,showTest:0,nearFar:g.create()};this._updateRadius(f);this._hazeSlot=A.POSTPROCESSING_ATMOSPHERE_TRANSPARENT},destroy:function(){this._handles&&(this._handles.destroy(),this._handles=null);this._hazeProgram&&(this._hazeProgram.dispose(),this._hazeProgram=null);this._skyProgram&&(this._skyProgram.dispose(),this._skyProgram=null)},setup:function(a){var d=
y.createSquareGeometry([[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]]).toRenderData(),c=this.renderContext.rctx;this._renderer=new x(d,C.Pos3Tex,null,c);d=this._update.bind(this);this._handles.add(n.init(this,"view.state.camera",d,!0));var d=this._updateElevation.bind(this),D=function(){this._updateElevation({tile:this.view.basemapTerrain.rootTiles[0]})}.bind(this),b=this._updateVisibleElevationBounds.bind(this);this._handles.add(n.on(this,"view.basemapTerrain","elevation-change",d,D));this._handles.add(n.on(this,
"view.basemapTerrain","elevation-bounds-change",b,b));a.shaderSnippets.fsRealisticAtmosphere||a.shaderSnippets._parse(v);this._hazeProgram=new q(c,a.shaderSnippets.vsRealisticAtmosphere,a.shaderSnippets.fsRealisticAtmosphere,r.Default3D,["HAZE"]);this._skyProgram=new q(c,a.shaderSnippets.vsRealisticAtmosphere,a.shaderSnippets.fsRealisticAtmosphere,r.Default3D)},render:function(a){var d=!1;if(a.slot!==this._hazeSlot&&a.slot!==this.slot||a.pass!==z.MATERIAL)return d;a.slot===this.slot&&(this._renderSky(a),
d=!0);a.slot===this._hazeSlot&&(this._renderHaze(a),d=!0);return d},_renderSky:function(a){var d=this.renderContext.rctx,c=d.gl,b=this._skyProgram;d.bindProgram(b);d.setBlendFunctionSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);d.setDepthFunction(c.LEQUAL);d.setDepthTestEnabled(!0);b.setUniform4fv("v4AtmosParams3",this._renderData.v4AtmosParams3);this._renderCommon(b,a)},_renderHaze:function(a){var d=this.renderContext.rctx,c=d.gl,b=a.offscreenRenderingHelper,e=this._hazeProgram;
d.bindProgram(e);d.setBlendFunctionSeparate(c.ONE,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);b.detachDepthTextureFromBuffer();d.setDepthTestEnabled(!1);c=b.getDepthTexture();d.bindTexture(c,0);e.setUniform1i("tDepth",0);this._renderCommon(e,a);b.restoreDepthTextureToBuffer()},_renderCommon:function(a,d){var c=this.renderContext.rctx,b=c.gl;a.setUniform3fv("v3InvWavelength",this._renderData.v3InvWavelength);a.setUniform3fv("v3InvWavelengthScaled",this._renderData.v3InvWavelengthScaled);a.setUniform3fv("v3LightDir",
d.lightingData.direction);a.setUniform4fv("v4SphereComp",this._renderData.v4SphereComp);a.setUniform3fv("v3CameraPos",this._renderData.v3CameraPos);a.setUniform3fv("v3CameraUp",this._renderData.v3CameraUp);a.setUniform3fv("v3CameraRight",this._renderData.v3CameraRight);a.setUniform3fv("v3CameraDir",this._renderData.v3CameraDir);a.setUniform2fv("nearFar",this._renderData.nearFar);a.setUniform2fv("halfSizeNearPlane",this._renderData.halfSizeNearPlane);a.setUniform2fv("v2CameraCenterOffset",this._renderData.v2CameraCenterOffset);
a.setUniform4fv("v4Radii",this._renderData.v4Radii);a.setUniform4fv("v4AtmosParams1",this._renderData.v4AtmosParams1);a.setUniform4fv("v4AtmosParams2",this._renderData.v4AtmosParams2);a.setUniform1f("showTest",this._renderData.showTest);c.setBlendingEnabled(!0);c.setDepthWriteEnabled(!1);this._renderer.render(a);c.setDepthFunction(b.LESS);c.setDepthTestEnabled(!1);c.setDepthWriteEnabled(!0);c.setBlendingEnabled(!1);c.setBlendFunctionSeparate(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA,b.ONE,b.ONE_MINUS_SRC_ALPHA)},
_setEnableTestImage:function(a){this._renderData.showTest=a?1:0;this.needsRender=!0},_adjustRadiusForTesselation:function(a){return a*Math.cos(Math.PI/Math.pow(2,4)/16)},_normalizeRadius:function(a){a=this._adjustRadiusForTesselation(a);return Math.max(f-1E4,Math.min(a,f))},_updateElevation:function(a){0===a.tile.lij[0]&&(a=this._adjustRadiusForTesselation(f+a.tile.elevationBounds[0]),a!==this._lowerElevationBoundRadius&&(this._lowerElevationBoundRadius=a,this._earthRadius=-1,this._updateVisibleElevationBounds()))},
_updateVisibleElevationBounds:function(){var a=this._adjustRadiusForTesselation(f+this.view.basemapTerrain.getElevationBounds()[0]);return 0>this._earthRadius||a<this._earthRadius?this._updateRadius(a):!1},_updateRadius:function(a){this._earthRadius=a;var b=a*a,c=a/10*10.25,g=c*c,f=1/(c-a),k=f/.25,l=f/.05,h=.3*(c-a)+a,n=1/(c-h),m=this._renderData;e.set4(f,.25,k,4,m.v4AtmosParams1);e.set4(-.99999,.05,l,20,m.v4AtmosParams2);e.set4(-.99999*-.99999,u,h,n,m.v4AtmosParams3);e.set4(a,b,c,g,m.v4Radii);m.fScale=
f;m.fLowerAlphaBlendBound=h;m.fScaleOverScaleDepth=k;m.fScaleOverScaleDepthBlue=l;this._update();return!0},_update:function(a){if(a=a||this.get("view.state.camera"))b.negate(a.viewForward,this._renderData.v3CameraDir),b.set(a.viewUp,this._renderData.v3CameraUp),b.set(a.viewRight,this._renderData.v3CameraRight),this._renderData.fCameraHeight=b.length(a.eye),this._renderData.fCameraHeight2=this._renderData.fCameraHeight*this._renderData.fCameraHeight,this._renderData.fC=this._renderData.fCameraHeight2-
this._renderData.v4Radii[3],this._renderData.fCSur=this._renderData.fCameraHeight2-this._renderData.v4Radii[1],this._renderData.v4SphereComp=e.createFrom(this._renderData.fCameraHeight,this._renderData.fCameraHeight2,this._renderData.fC,this._renderData.fCSur),b.set(a.eye,this._renderData.v3CameraPos),g.set2(Math.tan(a.fovX/2)/(a.width/a.fullWidth),Math.tan(a.fovY/2)/(a.height/a.fullHeight),this._renderData.halfSizeNearPlane),g.set2((a.padding[3]+a.width/2)/a.fullWidth-.5,(a.padding[2]+a.height/2)/
a.fullHeight-.5,this._renderData.v2CameraCenterOffset),g.set2(a.near,a.far,this._renderData.nearFar),this.needsRender=!0}});h.isSupported=function(a){return B.supportsDepthTexture(a.rctx)};return h});