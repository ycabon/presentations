// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/ShadowMap".split(" "),
function(k,l,f,m,t,u,v,w,x,y,z,A,B,C,g,h,D,E,e,n){function p(c){const d=new E.ShaderBuilder;d.include(x.ReadShadowMapPass,c);d.include(y.CameraSpace);d.include(u.ScreenSpacePass);c=d.fragment;c.include(z.RgbaFloatEncoding);c.include(w.ReadLinearDepth);c.uniforms.add(new e.Texture2DPassUniform("defaultDepthTex",(a,b)=>b.shadowMap.getSnapshot(n.SnapshotSlot.ExcludeHighlight)),new e.Texture2DPassUniform("highlightDepthTex",(a,b)=>b.shadowMap.getSnapshot(n.SnapshotSlot.Highlight)),new e.Texture2DPassUniform("depthMap",
(a,b)=>b.linearDepth?.getTexture()),new e.Texture2DPassUniform("highlightTexture",a=>a.highlight),new C.Float4PassUniform("uColor",a=>a.shadowColor),new A.Float2PassUniform("nearFar",(a,b)=>b.camera.nearFar),new g.FloatPassUniform("opacity",a=>a.shadowOpacity),new g.FloatPassUniform("occludedOpacity",a=>a.occludedShadowOpacity),new g.FloatPassUniform("terminationFactor",a=>a.opacityElevation*a.dayNightTerminator),new B.Float3PassUniform("lightingMainDirectionView",(a,b)=>m.normalize(q,m.transformMat4(q,
b.lighting.mainLight.direction,b.camera.viewInverseTransposeMatrix))),new D.Matrix4PassUniform("inverseViewMatrix",(a,b)=>l.invert(r,l.translate(r,b.camera.viewMatrix,b.camera.center))));c.constants.add("unoccludedHighlightFlag","vec4",v.unoccludedHighlightFlag);c.code.add(h.glsl`
    vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, ivec2 iuv) {
      float leftPixelDepth = linearDepthFromRGBA(texelFetch(depthMap, iuv + ivec2(-1, 0), 0), nearFar);
      float rightPixelDepth = linearDepthFromRGBA(texelFetch(depthMap, iuv + ivec2(1, 0), 0), nearFar);
      float bottomPixelDepth = linearDepthFromRGBA(texelFetch(depthMap, iuv + ivec2(0, -1), 0), nearFar);
      float topPixelDepth = linearDepthFromRGBA(texelFetch(depthMap, iuv + ivec2(0, 1), 0), nearFar);

      bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
      bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);

      vec3 fragCoordHorizontal = pickLeft
                                  ? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
                                  : vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
      vec3 fragCoordVertical = pickBottom
                                  ? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
                                  : vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);

      vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
      vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);

      vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
      // Flip normal depending on triangle winding order for consistency
      return pickLeft == pickBottom ? normal : -normal;
    }

    void main(void) {
      vec4 highlightInfo = texture(highlightTexture, uv);
      float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
      if (visiblyHighlighted > ${h.glsl.float(.99999)}) {
        discard;
      }

      ivec2 iuv = ivec2(uv * vec2(textureSize(depthMap, 0)));
      float depth = rgba2float(texelFetch(depthMap, iuv, 0));
      // 0.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
      if (depth == 0.0) {
        discard;
      }

      float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        discard;
      }

      vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
      vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;

      mat4 shadowMatrix;
      float linearDepth = -currentPixelDepth;
      int i = chooseCascade(linearDepth, shadowMatrix);
      if (i >= numCascades) {
        discard;
      }

      vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
        discard;
      }

      ivec2 texSize = textureSize(highlightDepthTex, 0);
      ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));

      float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
      bool shadowHighlight = depthHighlight < lvpos.z;
      if (!shadowHighlight) {
        discard;
      }

      float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
      bool shadowDefault = depthDefault < lvpos.z;

      vec3 normal = normalFromDepth(currentPixelPos.xyz, gl_FragCoord.xy, iuv);
      bool shaded = dot(normal, lightingMainDirectionView) < ${h.glsl.float(.025)};

      float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
      fragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
    }
  `);return d}const r=f.create(),q=t.create();f=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:"Module"}));k.ShadowHighlight=f;k.build=p});