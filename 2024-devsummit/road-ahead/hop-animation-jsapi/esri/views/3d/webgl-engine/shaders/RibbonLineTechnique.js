// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/TransparencyPassType ../lib/VertexAttribute ../../../../chunks/RibbonLine.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(t,h,k,u,v,f,w,b,n,c,x,p,e){const q=new Map([[c.VertexAttribute.POSITION,0],[c.VertexAttribute.PREVPOSITION,1],[c.VertexAttribute.NEXTPOSITION,
2],[c.VertexAttribute.SUBDIVISIONFACTOR,3],[c.VertexAttribute.UV0,4],[c.VertexAttribute.COLOR,5],[c.VertexAttribute.COLORFEATUREATTRIBUTE,5],[c.VertexAttribute.SIZE,6],[c.VertexAttribute.SIZEFEATUREATTRIBUTE,6],[c.VertexAttribute.OPACITYFEATUREATTRIBUTE,7],[c.VertexAttribute.OBJECTANDLAYERIDCOLOR,8]]);class l extends v.ShaderTechnique{initializeProgram(a){return new w.Program(a.rctx,l.shader.get().build(this.configuration),q)}_makePipelineState(a,g){const d=this.configuration,m=a===n.TransparencyPassType.NONE,
y=a===n.TransparencyPassType.FrontFace,z=k.isDepthLikeOutput(d.output);return e.makePipelineState({blending:d.output===k.ShaderOutput.Color||d.output===k.ShaderOutput.Alpha?m?f.blendingDefault:f.oitBlending(a):null,depthTest:{func:f.oitDepthTest(a)},depthWrite:m?d.writeDepth||z?e.defaultDepthWriteParams:null:f.oitDepthWrite(a),colorWrite:e.defaultColorWriteParams,stencilWrite:d.hasOccludees?b.stencilWriteMaskOn:null,stencilTest:d.hasOccludees?g?b.stencilToolMaskBaseParams:b.stencilBaseAllZerosParams:
null,polygonOffset:m||y?d.hasPolygonOffset?r:null:f.OITPolygonOffset})}initializePipeline(){var a=this.configuration;a.occluder&&(a=a.hasPolygonOffset?r:null,this._occluderPipelineTransparent=e.makePipelineState({blending:f.blendingDefault,polygonOffset:a,depthTest:b.depthCompareAlways,depthWrite:null,colorWrite:e.defaultColorWriteParams,stencilWrite:null,stencilTest:b.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=e.makePipelineState({blending:f.blendingDefault,polygonOffset:a,
depthTest:b.depthCompareAlways,depthWrite:null,colorWrite:e.defaultColorWriteParams,stencilWrite:b.stencilWriteMaskOff,stencilTest:b.stencilToolMaskOccluderParams}),this._occluderPipelineMaskWrite=e.makePipelineState({blending:null,polygonOffset:a,depthTest:b.depthCompareLess,depthWrite:null,colorWrite:null,stencilWrite:b.stencilWriteMaskOn,stencilTest:b.stencilToolMaskBaseParams}));this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0);return this._makePipelineState(this.configuration.transparencyPassType,
!1)}get primitiveType(){return this.configuration.wireframe?p.PrimitiveType.LINES:p.PrimitiveType.TRIANGLE_STRIP}getPipeline(a,g,d){return a?this._occludeePipelineState:this.configuration.occluder?d?this._occluderPipelineTransparent:g?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipeline()}}l.shader=new u.ReloadableShaderModule(x.RibbonLine,()=>new Promise((a,g)=>t(["./RibbonLine.glsl"],a,g)));const r={factor:0,units:-4};h.RibbonLineTechnique=l;h.vertexAttributeLocations=
q;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});