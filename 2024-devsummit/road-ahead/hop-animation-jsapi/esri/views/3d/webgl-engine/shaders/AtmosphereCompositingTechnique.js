// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/AtmosphereCompositing.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(f,e,g,h,k,l,m,a,b){class c extends h.ShaderTechnique{initializeProgram(d){return new l.Program(d.rctx,c.shader.get().build(this.configuration),k.Default3D)}initializePipeline(){return this.configuration.haze?b.makePipelineState({blending:b.separateBlendingParams(a.BlendFactor.ONE,
a.BlendFactor.ZERO,a.BlendFactor.ONE_MINUS_SRC_COLOR,a.BlendFactor.ONE),depthTest:{func:a.CompareFunction.ALWAYS},colorWrite:b.defaultColorWriteParams}):b.makePipelineState({blending:b.simpleBlendingParams(a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a.CompareFunction.ALWAYS},colorWrite:b.defaultColorWriteParams})}}c.shader=new g.ReloadableShaderModule(m.AtmosphereCompositing,()=>new Promise((d,n)=>f(["./AtmosphereCompositing.glsl"],d,n)));e.AtmosphereCompositingTechnique=
c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});