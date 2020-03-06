// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/maybe ../../../../core/maybe ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/StencilUtils ./RibbonLine.glsl ../../../webgl/Program ../../../webgl/renderState".split(" "),
function(n,h,l,d,k,m,p,q,r,t,u,v,w,b,g,x,y,e){Object.defineProperty(h,"__esModule",{value:!0});h.RibbonVertexAttributeConstants={POSITION:"position",SUBDIVISIONFACTOR:"subdivisionFactor",UV0:"uv0",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",SUBDIVISIONS:"subdivisions",COLOR:"color",COLORFEATUREATTRIBUTE:"colorFeatureAttribute",SIZE:"size",SIZEFEATUREATTRIBUTE:"sizeFeatureAttribute",OPACITYFEATUREATTRIBUTE:"opacityFeatureAttribute"};h.ribbonVertexAttributeLocations={position:0,subdivisionFactor:1,uv0:2,auxpos1:3,
auxpos2:4,size:6,sizeFeatureAttribute:6,color:5,colorFeatureAttribute:5,opacityFeatureAttribute:7};k=function(b){function a(f,a){a=b.call(this,f,a)||this;a.stipplePattern=null;a.stippleTextureBind=null;a.stippleTextureRepository=f.stippleTextureRepository;return a}l(a,b);a.prototype.initializeProgram=function(f){var b=a.shader.get(),c=this.configuration,b=b.build({output:c.output,slicePlaneEnabled:c.slicePlaneEnabled,sliceHighlightDisabled:c.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,
stippleEnabled:c.stippleEnabled,stippleOffColorEnabled:c.stippleOffColorEnabled,stippleUVMaxEnabled:c.stippleIntegerRepeatsEnabled,stippleIntegerRepeatsEnabled:c.stippleIntegerRepeatsEnabled,roundCaps:c.roundCaps,roundJoins:c.roundJoins,vvColor:c.vvColor,vvSize:c.vvSize,vvInstancingEnabled:!0,vvOpacity:c.vvOpacity,falloffEnabled:c.falloffEnabled,innerColorEnabled:c.innerColorEnabled});return new y(f.rctx,b.generateSource("vertex"),b.generateSource("fragment"),h.ribbonVertexAttributeLocations)};a.prototype.dispose=
function(){b.prototype.dispose.call(this);this.stippleTextureRepository.release(this.stipplePattern);this.stippleTextureBind=this.stipplePattern=null};a.prototype.bindPass=function(f,a,b){4===this.configuration.output&&t.OutputHighlight.bindOutputHighlight(f,this.program,b);this.program.setUniform1f("intrinsicWidth",a.width);this.program.setUniform4fv("intrinsicColor",a.color);this.program.setUniform1f("miterLimit","miter"!==a.join?0:a.miterLimit);this.program.setUniform1f("nearPlane",b.nearFar[0]);
this.program.setUniform1f("pixelRatio",b.pixelRatio);this.program.setUniform2fv("screenSize",[b.viewport[2],b.viewport[3]]);u.VisualVariables.bindUniformsWithOpacity(this.program,a);if(this.stipplePattern!==a.stipplePattern){var c=a.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,c);this.stipplePattern=c}this.configuration.stippleEnabled&&(f=p.isSome(this.stippleTextureBind)?this.stippleTextureBind(f,0)*b.pixelRatio:1,this.program.setUniform1i("stipplePatternTexture",
0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/f),this.configuration.stippleOffColorEnabled&&(f=m.expect(a.stippleOffColor),this.program.setUniform4f("stippleOffColor",f[0],f[1],f[2],3<f.length?f[3]:1)));this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",a.falloff);this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",m.unwrapOr(a.innerColor,a.color)),this.program.setUniform1f("innerWidth",a.innerWidth*b.pixelRatio))};a.prototype.bindDraw=
function(a){r.Transform.bindUniforms(this.program,a);q.Slice.bindUniformsWithOrigin(this.program,this.configuration,a)};a.prototype.initializePipeline=function(){var a=this.configuration,b=e.separateBlendingParams(770,1,771,771),c=a.polygonOffset&&z;a.occluder&&(this._occluderTransparentState=e.makePipelineState({blending:b,polygonOffset:c,depthTest:g.depthCompareAlways,depthWrite:null,colorWrite:e.defaultColorWriteParams,stencilWrite:null,stencilTest:g.stencilToolTransparentOccluderParams}),this._occluderOpaqueState=
e.makePipelineState({blending:b,polygonOffset:c,depthTest:g.depthCompareLess,depthWrite:!a.transparent&&a.writeDepth&&e.defaultDepthWriteParams,colorWrite:e.defaultColorWriteParams,stencilWrite:null,stencilTest:null}));if(0===a.output){if(a.occluder)return e.makePipelineState({blending:b,polygonOffset:c,depthTest:null,depthWrite:!a.transparent&&a.writeDepth&&e.defaultDepthWriteParams,colorWrite:e.defaultColorWriteParams,stencilWrite:g.stencilWriteMaskOff,stencilTest:g.stencilToolMaskOccluderParams});
var d=function(f){return e.makePipelineState({blending:b,polygonOffset:c,depthTest:g.depthCompareLess,depthWrite:!a.transparent&&a.writeDepth&&e.defaultDepthWriteParams,colorWrite:e.defaultColorWriteParams,stencilWrite:a.sceneHasOcludees?g.stencilWriteMaskOn:null,stencilTest:a.sceneHasOcludees?f?g.stencilToolMaskBaseParams:a.sceneHasOcludees?g.stencilBaseAllZerosParams:null:null})};this._occludeeState=d(!0);return d(!1)}return e.makePipelineState({polygonOffset:c,depthTest:g.depthCompareLess,depthWrite:!a.transparent&&
a.writeDepth&&e.defaultDepthWriteParams,colorWrite:e.defaultColorWriteParams})};Object.defineProperty(a.prototype,"transparentOccluderState",{get:function(){return this._occluderTransparentState},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"opaqueOccluderState",{get:function(){return this._occluderOpaqueState},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"opaqueOccludeeState",{get:function(){return this._occludeeState},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"primitiveType",{get:function(){return 5},enumerable:!0,configurable:!0});a.shader=new v.ReloadableShaderModule(x,"./RibbonLine.glsl",n);return a}(w.ShaderTechnique);h.RibbonLineTechnique=k;var z={factor:0,units:-4};k=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.output=0;a.occluder=!1;a.slicePlaneEnabled=!1;a.sliceHighlightDisabled=!1;a.vertexColors=!1;a.transparent=!1;a.polygonOffset=!1;a.writeDepth=!1;a.stippleEnabled=!1;a.stippleOffColorEnabled=!1;a.stippleIntegerRepeatsEnabled=
!1;a.roundCaps=!1;a.roundJoins=!1;a.vvSize=!1;a.vvColor=!1;a.vvOpacity=!1;a.falloffEnabled=!1;a.innerColorEnabled=!1;a.sceneHasOcludees=!1;return a}l(a,e);d([b.parameter({count:7})],a.prototype,"output",void 0);d([b.parameter()],a.prototype,"occluder",void 0);d([b.parameter()],a.prototype,"slicePlaneEnabled",void 0);d([b.parameter()],a.prototype,"sliceHighlightDisabled",void 0);d([b.parameter()],a.prototype,"vertexColors",void 0);d([b.parameter()],a.prototype,"transparent",void 0);d([b.parameter()],
a.prototype,"polygonOffset",void 0);d([b.parameter()],a.prototype,"writeDepth",void 0);d([b.parameter()],a.prototype,"stippleEnabled",void 0);d([b.parameter()],a.prototype,"stippleOffColorEnabled",void 0);d([b.parameter()],a.prototype,"stippleIntegerRepeatsEnabled",void 0);d([b.parameter()],a.prototype,"roundCaps",void 0);d([b.parameter()],a.prototype,"roundJoins",void 0);d([b.parameter()],a.prototype,"vvSize",void 0);d([b.parameter()],a.prototype,"vvColor",void 0);d([b.parameter()],a.prototype,"vvOpacity",
void 0);d([b.parameter()],a.prototype,"falloffEnabled",void 0);d([b.parameter()],a.prototype,"innerColorEnabled",void 0);d([b.parameter()],a.prototype,"sceneHasOcludees",void 0);return a}(b.ShaderTechniqueConfiguration);h.RibbonLineTechniqueConfiguration=k});