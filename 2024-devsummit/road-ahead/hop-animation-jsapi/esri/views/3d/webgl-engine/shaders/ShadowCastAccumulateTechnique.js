// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/ShadowCastAccumulate.glsl ./ShadowConfiguration ../../../webgl/enums ../../../webgl/renderState".split(" "),function(f,e,g,h,k,l,m,n,a,c){class d extends h.ShaderTechnique{constructor(b){super(b,new n.ShadowConfiguration,()=>this.destroy())}initializeProgram(b){return new l.Program(b.rctx,d.shader.get().build(this.configuration),
k.Default3D)}initializePipeline(){return c.makePipelineState({blending:c.separateBlendingParams(a.BlendFactor.ONE,a.BlendFactor.ONE,a.BlendFactor.ONE,a.BlendFactor.ONE),colorWrite:c.defaultColorWriteParams,depthTest:null,depthWrite:null})}get primitiveType(){return a.PrimitiveType.TRIANGLE_STRIP}}d.shader=new g.ReloadableShaderModule(m.ShadowCastAccumulate,()=>new Promise((b,p)=>f(["./ShadowCastAccumulate.glsl"],b,p)));e.ShadowCastAccumulateTechnique=d;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});