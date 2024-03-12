// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType".split(" "),
function(p,q,d,h,k,w,x,y,z,l,A,B,C,r,t,D,m,n,u,e,E,F){function v(a){const b=new E.ShaderBuilder,{vertex:g,fragment:c}=b;m.addProjViewLocalOrigin(g,a);b.varyings.add("vpos","vec3");b.include(w.PathVertexPosition,a);if(a.output===d.ShaderOutput.Color||a.output===d.ShaderOutput.Alpha)b.include(k.Transform,a),b.include(t.ReadShadowMapDraw,a),b.include(q.ForwardLinearDepth,a),b.varyings.add("vnormal","vec3"),b.varyings.add("vcolor","vec4"),a.multipassEnabled&&b.varyings.add("depth","float"),g.code.add(e.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${a.multipassEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${a.output===d.ShaderOutput.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `);b.include(B.multipassTerrainTest,a);switch(a.output){case d.ShaderOutput.Alpha:b.include(h.SliceDraw,a);c.uniforms.add(new u.FloatPassUniform("opacity",f=>f.opacity));c.code.add(e.glsl`
      void main() {
        discardBySlice(vpos);
        ${a.multipassEnabled?"terrainDepthTest(depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        fragColor = vec4(combinedOpacity);
      }
    `);break;case d.ShaderOutput.Color:b.include(h.SliceDraw,a);b.include(l.EvaluateSceneLighting,a);b.include(z.EvaluateAmbientOcclusion,a);b.include(t.ReadShadowMapDraw,a);b.include(C.Normals,a);m.addCameraPosition(c,a);l.addAmbientBoostFactor(c);l.addLightingGlobalFactor(c);c.uniforms.add(g.uniforms.get("localOrigin"),new n.Float3PassUniform("ambient",f=>f.ambient),new n.Float3PassUniform("diffuse",f=>f.diffuse),new n.Float3PassUniform("specular",f=>f.specular),new u.FloatPassUniform("opacity",
f=>f.opacity));c.include(D.ColorConversion);A.addMainLightIntensity(c);c.code.add(e.glsl`
        void main() {
          discardBySlice(vpos);
          ${a.multipassEnabled?"terrainDepthTest(depth);":""}

          shadingParams.viewDirection = normalize(vpos - cameraPosition);
          shadingParams.normalView = vnormal;
          vec3 normal = shadingNormal(shadingParams);
          float ssao = evaluateAmbientOcclusionInverse();

          float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
          ${a.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":a.spherical?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
          vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
          float combinedOpacity = vcolor.a * opacity;
          albedo += 0.25 * specular; // don't completely ignore specular for now

          vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
          fragColor = vec4(shadedColor, combinedOpacity);
          fragColor = highlightSlice(fragColor, vpos);
          ${a.transparencyPassType===F.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}
        }
      `);break;case d.ShaderOutput.LinearDepth:case d.ShaderOutput.Shadow:case d.ShaderOutput.ShadowHighlight:case d.ShaderOutput.ShadowExcludeHighlight:b.include(k.Transform,a);q.addNearFar(b);b.varyings.add("depth","float");g.code.add(e.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`);b.include(h.SliceDraw,a);b.include(x.OutputDepth,a);c.code.add(e.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);break;case d.ShaderOutput.Normal:b.include(k.Transform,a);b.include(r.NormalUtils,a);m.addViewNormal(g);b.varyings.add("vnormal","vec3");g.code.add(e.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`);b.include(h.SliceDraw,a);c.code.add(e.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`);break;case d.ShaderOutput.Highlight:b.include(k.Transform,a),b.include(r.NormalUtils,a),b.varyings.add("vnormal","vec3"),g.code.add(e.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),b.include(h.SliceDraw,a),b.include(y.OutputHighlight,a),c.code.add(e.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return b}const G=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));p.Path=G;p.build=v});