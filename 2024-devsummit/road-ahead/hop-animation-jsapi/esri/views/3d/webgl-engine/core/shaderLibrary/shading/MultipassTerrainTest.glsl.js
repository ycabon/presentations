// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(a,g,h,b,k){class l{constructor(){this.cullAboveGround=!1}}a.MultipassTerrainUniforms=l;a.multipassTerrainTest=function(c,d){if(d.multipassEnabled){c.fragment.include(g.ReadLinearDepth);c.fragment.uniforms.add(new k.Texture2DPassUniform("terrainDepthTexture",(m,e)=>e.multipassTerrain.linearDepth?.getTexture()),new h.Float2PassUniform("nearFar",
(m,e)=>e.camera.nearFar));var f=d.occlusionPass;c.fragment.code.add(b.glsl`
   ${f?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${f?b.glsl`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:b.glsl`
          if(fragmentDepth ${d.cullAboveGround?"\x3e":"\x3c\x3d"} linearDepth){
            discard;
          }`}
    }`)}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});