// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../ViewingMode ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/Program ../../../../chunks/LineCallout.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(g,f,h,k,l,m,n,p,b,c){class d extends l.ShaderTechnique{initializeConfiguration(a,e){e.spherical=a.viewingMode===h.ViewingMode.Global}initializeProgram(a){return new n.Program(a.rctx,d.shader.get().build(this.configuration),
m.Default3D)}setPipelineState(a){a=a?b.CompareFunction.ALWAYS:b.CompareFunction.LESS;return this.configuration.depthHudEnabled?c.makePipelineState({depthTest:{func:a},depthWrite:c.defaultDepthWriteParams}):c.makePipelineState({blending:c.separateBlendingParams(b.BlendFactor.ONE,b.BlendFactor.SRC_ALPHA,b.BlendFactor.ONE_MINUS_SRC_ALPHA,b.BlendFactor.ONE_MINUS_SRC_ALPHA),depthTest:{func:a},colorWrite:c.defaultColorWriteParams})}initializePipeline(){return this.setPipelineState(this.configuration.multipassEnabled)}}
d.shader=new k.ReloadableShaderModule(p.LineCallout,()=>new Promise((a,e)=>g(["./LineCallout.glsl"],a,e)));f.LineCalloutTechnique=d;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});