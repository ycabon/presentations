// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ../lib/VertexAttribute ../materials/DefaultTechniqueConfiguration ../../../../chunks/ShadedColorMaterial.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(v,
f,b,g,w,x,c,r,h,y,k,m,z,A,n,l){class p extends x.ShaderTechnique{initializeProgram(d){return new y.Program(d.rctx,p.shader.get().build(this.configuration),t)}_setPipelineState(d){const e=this.configuration,q=d===k.TransparencyPassType.NONE,u=d===k.TransparencyPassType.FrontFace;return l.makePipelineState({blending:e.output!==g.ShaderOutput.Color&&e.output!==g.ShaderOutput.Alpha||!e.transparent?null:q?h.blendingDefault:h.oitBlending(d),culling:l.cullingParams(e.cullFace),depthTest:{func:u?n.CompareFunction.LESS:
e.shadingEnabled?n.CompareFunction.LEQUAL:n.CompareFunction.LESS},depthWrite:q?e.writeDepth?l.defaultDepthWriteParams:null:h.oitDepthWrite(d),colorWrite:l.defaultColorWriteParams,polygonOffset:q||u?null:h.OITPolygonOffset})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}p.shader=new w.ReloadableShaderModule(A.ShadedColorMaterialShader,()=>new Promise((d,e)=>v(["./ShadedColorMaterial.glsl"],d,e)));class a extends z.DefaultTechniqueConfiguration{constructor(){super(...arguments);
this.output=g.ShaderOutput.Color;this.cullFace=r.CullFaceOptions.None;this.transparencyPassType=k.TransparencyPassType.NONE;this.transparent=this.hasSlicePlane=!1;this.shadingEnabled=this.screenSizeEnabled=this.writeDepth=!0;this.cullAboveGround=this.multipassEnabled=!1}}b.__decorate([c.parameter({count:g.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:r.CullFaceOptions.COUNT})],a.prototype,"cullFace",void 0);b.__decorate([c.parameter({count:k.TransparencyPassType.COUNT})],
a.prototype,"transparencyPassType",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter()],a.prototype,"screenSizeEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"shadingEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"multipassEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveGround",void 0);
b.__decorate([c.parameter({constValue:!1})],a.prototype,"occlusionPass",void 0);const t=new Map([[m.VertexAttribute.POSITION,0],[m.VertexAttribute.NORMAL,1],[m.VertexAttribute.OFFSET,2]]);f.ShadedColorMaterialTechnique=p;f.ShadedColorMaterialTechniqueConfiguration=a;f.vertexAttributeLocations=t;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});