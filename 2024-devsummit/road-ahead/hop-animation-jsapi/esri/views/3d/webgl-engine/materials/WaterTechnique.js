// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../../../ViewingMode ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/TransparencyPassType ./DefaultTechniqueConfiguration ../../../../chunks/WaterSurface.glsl ../../../webgl/renderState".split(" "),
function(p,h,b,q,f,r,t,u,v,c,w,g,x,k,y,z,l){class A extends t.WaterDistortionPassParameters{}class m extends v.ShaderTechnique{initializeConfiguration(e,d){d.spherical=e.viewingMode===q.ViewingMode.Global;d.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result}initializeProgram(e){return new x.Program(e.rctx,m.shader.get().build(this.configuration),w.Default3D)}_setPipelineState(e){const d=this.configuration,n=e===k.TransparencyPassType.NONE,B=e===k.TransparencyPassType.FrontFace;
return l.makePipelineState({blending:d.output!==f.ShaderOutput.Normal&&d.output!==f.ShaderOutput.Highlight&&d.output!==f.ShaderOutput.ObjectAndLayerIdColor&&d.transparent?n?g.blendingDefault:g.oitBlending(e):null,depthTest:d.draped?null:{func:g.oitDepthTest(e)},depthWrite:d.draped?null:n?d.writeDepth?l.defaultDepthWriteParams:null:g.oitDepthWrite(e),colorWrite:l.defaultColorWriteParams,polygonOffset:n||B?null:g.getOITPolygonOffset(d.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}
m.shader=new u.ReloadableShaderModule(z.WaterSurface,()=>new Promise((e,d)=>p(["../shaders/WaterSurface.glsl"],e,d)));class a extends y.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.output=f.ShaderOutput.Color;this.transparencyPassType=k.TransparencyPassType.NONE;this.transparent=this.hasSlicePlane=this.receiveShadows=this.spherical=!1;this.enableOffset=!0;this.cullAboveGround=this.multipassEnabled=this.draped=this.objectAndLayerIdColorInstanced=this.hasCloudsReflections=this.doublePrecisionRequiresObfuscation=
this.hasScreenSpaceReflections=this.writeDepth=!1}}b.__decorate([c.parameter({count:f.ShaderOutput.COUNT})],a.prototype,"output",void 0);b.__decorate([c.parameter({count:k.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",void 0);b.__decorate([c.parameter()],a.prototype,"spherical",void 0);b.__decorate([c.parameter()],a.prototype,"receiveShadows",void 0);b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"transparent",void 0);b.__decorate([c.parameter()],
a.prototype,"enableOffset",void 0);b.__decorate([c.parameter()],a.prototype,"writeDepth",void 0);b.__decorate([c.parameter()],a.prototype,"hasScreenSpaceReflections",void 0);b.__decorate([c.parameter()],a.prototype,"doublePrecisionRequiresObfuscation",void 0);b.__decorate([c.parameter()],a.prototype,"hasCloudsReflections",void 0);b.__decorate([c.parameter()],a.prototype,"objectAndLayerIdColorInstanced",void 0);b.__decorate([c.parameter()],a.prototype,"draped",void 0);b.__decorate([c.parameter()],
a.prototype,"multipassEnabled",void 0);b.__decorate([c.parameter()],a.prototype,"cullAboveGround",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,"occlusionPass",void 0);b.__decorate([c.parameter({constValue:r.PBRMode.Water})],a.prototype,"pbrMode",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"useCustomDTRExponentForWater",void 0);b.__decorate([c.parameter({constValue:!0})],a.prototype,"highStepCount",void 0);b.__decorate([c.parameter({constValue:!1})],a.prototype,
"useFillLights",void 0);h.WaterMaterialPassParameters=A;h.WaterTechnique=m;h.WaterTechniqueConfiguration=a;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});