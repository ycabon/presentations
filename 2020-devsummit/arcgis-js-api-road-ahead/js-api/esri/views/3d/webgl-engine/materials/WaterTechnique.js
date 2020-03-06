// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../core/shaderLibrary/util/Camera.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultTextureUnits ../lib/DefaultVertexAttributeLocations ../shaders/WaterSurface.glsl ../../../webgl/Program ../../../webgl/renderState".split(" "),
function(l,h,k,f,g,m,n,p,q,r,t,u,e,v,w,x,y,c){Object.defineProperty(h,"__esModule",{value:!0});g=function(d){function b(){return null!==d&&d.apply(this,arguments)||this}k(b,d);b.prototype.initializeProgram=function(a){var c=b.shader.get(),d=this.configuration,c=c.build({output:d.output,viewingMode:a.viewingMode,slicePlaneEnabled:d.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:d.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0});return new y(a.rctx,
c.generateSource("vertex"),c.generateSource("fragment"),w.Default3D)};b.prototype.bindPass=function(a,b){0!==this.configuration.output&&2!==this.configuration.output||q.WaterDistortion.bindUniforms(this.program,b);0!==this.configuration.output&&5!==this.configuration.output||this.program.setUniform4fv("waterColor",b.color)};b.prototype.bindDraw=function(a){n.Transform.bindUniforms(this.program,a);0===this.configuration.output&&(r.Camera.bindUniforms(this.program,a),m.Slice.bindUniformsWithOrigin(this.program,
this.configuration,a),p.ReadShadowMap.bindUniforms(this.program,a,v.DefaultTextureUnits.SHADOW_MAP))};b.prototype.initializePipeline=function(){var a=this.configuration;return 2===a.output?c.makePipelineState({depthTest:{func:513},depthWrite:a.writeDepth&&c.defaultDepthWriteParams,colorWrite:c.defaultColorWriteParams}):c.makePipelineState({blending:a.transparent&&c.separateBlendingParams(770,1,771,771),depthTest:{func:513},depthWrite:a.writeDepth&&c.defaultDepthWriteParams,colorWrite:c.defaultColorWriteParams})};
b.shader=new t.ReloadableShaderModule(x,"../shaders/WaterSurface.glsl",l);return b}(u.ShaderTechnique);h.WaterTechnique=g;g=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.output=0;a.receiveShadows=!1;a.slicePlaneEnabled=!1;a.transparent=!1;a.writeDepth=!1;return a}k(b,c);f([e.parameter({count:7})],b.prototype,"output",void 0);f([e.parameter()],b.prototype,"receiveShadows",void 0);f([e.parameter()],b.prototype,"slicePlaneEnabled",void 0);f([e.parameter()],b.prototype,"transparent",
void 0);f([e.parameter()],b.prototype,"writeDepth",void 0);return b}(e.ShaderTechniqueConfiguration);h.WaterTechniqueConfiguration=g});