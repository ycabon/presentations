// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/Material ../lib/Program ../materials/DefaultTechniqueConfiguration ../../../../chunks/HeatmapDensity.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(k,a,g,l,m,h,n,p,q,r,t,b,c){class u extends p.MaterialParameters{constructor(){super(...arguments);
this.searchRadius=128;this.resolutionForScale=0}}class d extends m.ShaderTechnique{initializeProgram(e){return new q.Program(e.rctx,d.shader.get().build(this.configuration),n.Default3D)}initializePipeline(){return c.makePipelineState({blending:c.simpleBlendingParams(b.BlendFactor.ONE,b.BlendFactor.ONE,b.BlendOperation.ADD),colorWrite:c.defaultColorWriteParams,depthTest:null,depthWrite:null})}destroy(){super.destroy()}}d.shader=new l.ReloadableShaderModule(t.HeatmapDensity,()=>new Promise((e,v)=>k(["./HeatmapDensity.glsl"],
e,v)));class f extends r.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.usesHalfFloat=this.isAttributeDriven=!1}}g.__decorate([h.parameter()],f.prototype,"isAttributeDriven",void 0);g.__decorate([h.parameter()],f.prototype,"usesHalfFloat",void 0);a.HeatmapDensityPassParameters=u;a.HeatmapDensityTechnique=d;a.HeatmapDensityTechniqueConfiguration=f;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});