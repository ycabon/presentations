// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../chunks/ChapmanAtmosphere.glsl ../webgl-engine/core/shaderModules/interfaces ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),
function(g,c,f,h,k,l,m,n,p,q,r,a,b){class t extends m.NoParameters{constructor(){super(...arguments);this.heightParameters=k.create();this.radii=f.create();this.altitudeFade=this.innerFadeDistance=0;this.hazeStrength=1;this.renderScale=f.create();this.backgroundColor=h.create()}}class d extends p.ShaderTechnique{initializeProgram(e){return new r.Program(e.rctx,d.shader.get().build(this.configuration),q.Default3D)}initializePipeline(){return this.configuration.reduced?b.makePipelineState({blending:b.simpleBlendingParams(a.BlendFactor.ONE,
a.BlendFactor.ZERO),depthTest:{func:a.CompareFunction.ALWAYS},colorWrite:b.defaultColorWriteParams}):this.configuration.haze?b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.ONE,a.BlendFactor.ZERO,a.BlendFactor.ONE_MINUS_SRC_COLOR,a.BlendFactor.ONE),colorWrite:b.defaultColorWriteParams}):b.makePipelineState({blending:b.simpleBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:b.defaultColorWriteParams})}}
d.shader=new n.ReloadableShaderModule(l.ChapmanAtmosphere,()=>new Promise((e,u)=>g(["./ChapmanAtmosphere.glsl"],e,u)));c.ChapmanAtmospherePassParameters=t;c.ChapmanAtmosphereTechnique=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});