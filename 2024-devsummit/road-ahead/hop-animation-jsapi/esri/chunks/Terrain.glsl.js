// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/terrain/OverlayContent ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(u,E,v,x,F,G,p,g,H,I,J,K,L,M,y,N,O,q,z,P,m,Q,k,A,r,R,b,S,T,U){function B(a){const c=new T.ShaderBuilder,{vertex:e,fragment:d,varyings:n}=c;c.include(K.PositionAttribute);c.include(J.NormalAttribute,a);c.include(L.TextureCoordinateAttribute,a);var t=()=>{c.include(P.NormalUtils,a);e.code.add(b.glsl`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`)};r.addProjViewLocalOrigin(e,a);c.include(I.Transform,a);const h=a.overlayMode!==k.OverlayMode.Disabled;var f=h&&a.invisible;switch(a.output){case g.ShaderOutput.Color:c.include(A.TerrainTexture,a);c.include(q.EvaluateSceneLighting,a);h&&c.include(k.OverlayTerrain,{...a,pbrMode:a.pbrMode===m.PBRMode.Simplified?m.PBRMode.TerrainWithWater:m.PBRMode.Water});(f=a.overlayMode===k.OverlayMode.EnabledWithWater)&&c.include(M.VertexTangent,a);n.add("vnormal","vec3");n.add("vpos","vec3");n.add("vup","vec3");
t();a.screenSizePerspective&&r.addViewNormal(e);(t=a.receiveShadows&&!a.renderOccluded)&&c.include(p.ForwardLinearDepth,a);a.screenSizePerspective&&(n.add("screenSizeDistanceToCamera","float"),n.add("screenSizeCosAngle","float"));e.code.add(b.glsl`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          //Up
          vup = getLocalUp(position, localOrigin);

          ${f?b.glsl`forwardVertexTangent(vnormal);`:b.glsl``}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${h?b.glsl`setOverlayVTC(uv);`:""}
          ${a.tileBorders?b.glsl`forwardTextureCoordinates();`:""}

          ${a.screenSizePerspective?b.glsl`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}

          ${t?b.glsl`forwardLinearDepth();`:""}

        }
      `);c.include(H.SliceDraw,a);c.include(q.EvaluateSceneLighting,a);c.include(O.EvaluateAmbientOcclusion,a);c.include(Q.ReadShadowMapDraw,a);r.addCameraPosition(d,a);q.addAmbientBoostFactor(d);q.addLightingGlobalFactor(d);d.uniforms.add(e.uniforms.get("localOrigin"),new R.Float3PassUniform("viewDirection",(w,l)=>x.normalize(C,x.set(C,l.camera.viewMatrix[12],l.camera.viewMatrix[13],l.camera.viewMatrix[14]))));f&&d.uniforms.add(new U.Texture2DPassUniform("ovWaterTex",(w,l)=>l.overlay?.getTexture(G.OverlayContent.WaterNormal)),
new S.Matrix4DrawUniform("view",(w,l)=>E.translate(V,l.camera.viewMatrix,w.origin)));d.code.add(b.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`);z.addMainLightDirection(d);z.addMainLightIntensity(d);d.code.add(b.glsl`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${a.receiveShadows&&!a.renderOccluded?"readShadowMap(vpos, linearDepth)":a.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${h?b.glsl`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${a.invisible?b.glsl`if (overlayColor.a == 0.0) { discard; }`:""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a <= 0.0) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= sliceOpacity;
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${a.pbrMode===m.PBRMode.Simplified||a.pbrMode===m.PBRMode.TerrainWithWater?b.glsl`fragColor = vec4(evaluatePBRSimplifiedLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:b.glsl`fragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${f?b.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                float opacity = sliced ? sliceOpacity : 1.0;
                // un-gamma the ground color to mix in linear space
                fragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
              }`:""}
          ${a.screenSizePerspective?b.glsl`
            float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
            if (perspectiveScale <= 0.25) {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
            }
            else if (perspectiveScale <= 0.5) {
              fragColor = mix(fragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
            }
            else if (perspectiveScale >= 0.99) {
              fragColor = mix(fragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
            }
            else {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
            }`:""}
          ${a.visualizeNormals?a.spherical?b.glsl`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:b.glsl`
                  vec3 tNormal = normalize(normal);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:""}
          ${a.tileBorders?b.glsl`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
          fragColor = highlightSlice(fragColor, vpos);
        }
      `);break;case g.ShaderOutput.LinearDepth:f&&c.include(k.OverlayTerrain,a);c.include(y.OutputDepth,a);p.addLinearDepth(c);p.addNearFar(c);e.code.add(b.glsl`
              void main(void) {
                ${f?b.glsl`setOverlayVTC(getUV0());`:""}
                gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
              }
          `);d.code.add(b.glsl`
              void main() {
                ${f?b.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
                outputDepth(linearDepth);
              }
          `);break;case g.ShaderOutput.Shadow:case g.ShaderOutput.ShadowHighlight:case g.ShaderOutput.ShadowExcludeHighlight:c.include(y.OutputDepth,a);p.addLinearDepth(c);p.addNearFar(c);e.code.add(b.glsl`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`);d.code.add(b.glsl`void main() {
outputDepth(linearDepth);
}`);break;case g.ShaderOutput.Normal:f&&c.include(k.OverlayTerrain,a);n.add("vnormal","vec3");r.addViewNormal(e);t();e.code.add(b.glsl`
        void main(void) {
          ${f?b.glsl`setOverlayVTC(getUV0());`:""}
          gl_Position = transformPosition(proj, view, position);
          vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);
        }
      `);d.code.add(b.glsl`
        void main() {
          ${f?b.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
          vec3 normal = normalize(vnormal);
          if (gl_FrontFacing == false) {
            normal = -normal;
          }
          fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
        }
      `);break;case g.ShaderOutput.Highlight:h&&c.include(k.OverlayTerrain,a),e.code.add(b.glsl`
          void main() {
            ${h?b.glsl`setOverlayVTC(getUV0());`:""}
            gl_Position = transformPosition(proj, view, position);
          }
        `),c.include(N.OutputHighlight,a),d.code.add(b.glsl`
          void main() {
            ${h?b.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
            outputHighlight();
          }
        `)}a.output===g.ShaderOutput.ObjectAndLayerIdColor&&(h?(c.include(k.OverlayTerrain,{...a,pbrMode:m.PBRMode.Disabled}),e.code.add(b.glsl`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`),d.code.add(b.glsl`void main() {
fragColor = getOverlayColorTexel(vtcOverlay);
}`)):(e.code.add(b.glsl`void main(void) {}`),d.code.add(b.glsl`void main() {
fragColor = vec4(0.0);
}`)));return c}class D extends A.OverlayTerrainPassParameters{}const V=v.create(),C=F.create();v=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:D,build:B},Symbol.toStringTag,{value:"Module"}));u.Terrain=v;u.TerrainPassParameters=D;u.build=B});