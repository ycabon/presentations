// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../chunks/Stars.glsl ../webgl-engine/core/shaderModules/interfaces ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(f,c,g,h,k,l,m,n,p,q,a,d){class r extends k.NoParameters{constructor(){super(...arguments);
this.modelMatrix=g.create()}}class e extends m.ShaderTechnique{constructor(b){super(b,new n.ShaderTechniqueConfiguration,()=>this.destroy())}initializeProgram(b){return new q.Program(b.rctx,e.shader.get().build(),p.Default3D)}initializePipeline(){return d.makePipelineState({blending:d.separateBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE,a.BlendFactor.ONE_MINUS_SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:d.defaultColorWriteParams})}}
e.shader=new l.ReloadableShaderModule(h.Stars,()=>new Promise((b,t)=>f(["./Stars.glsl"],b,t)));c.StarPassParameters=r;c.StarsTechnique=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});