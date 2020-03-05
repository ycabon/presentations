// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../core/shaderLibrary/Transform.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ./CheckerBoard.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState".split(" "),function(k,e,h,f,c,l,m,n,d,p,
q,r,t,g){Object.defineProperty(e,"__esModule",{value:!0});c=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}h(a,b);a.prototype.initializeProgram=function(u){var b=a.shader.get().build();return new r(u.rctx,b.generateSource("vertex"),b.generateSource("fragment"),p.Default3D)};a.prototype.bindPass=function(a,b){this.program.setUniform2fv("size",b.size);this.program.setUniform4fv("color1",b.color1);this.program.setUniform4fv("color2",b.color2)};a.prototype.bindDraw=function(a){l.Transform.bindUniforms(this.program,
a)};a.prototype.bindInstance=function(a){this.program.setUniformMatrix4fv("model",a.transformation)};a.prototype.initializePipeline=function(){var a=this.configuration;return g.makePipelineState({blending:a.transparent&&t.separateBlendingParams(770,1,771,771),polygonOffset:a.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:a.writeDepth&&g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})};a.shader=new m.ReloadableShaderModule(q,"./CheckerBoard.glsl",k);return a}(n.ShaderTechnique);
e.CheckerBoardTechnique=c;c=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.transparent=!1;a.writeDepth=!0;a.polygonOffset=!1;return a}h(a,b);f([d.parameter()],a.prototype,"transparent",void 0);f([d.parameter()],a.prototype,"writeDepth",void 0);f([d.parameter()],a.prototype,"polygonOffset",void 0);return a}(d.ShaderTechniqueConfiguration);e.CheckerBoardTechniqueConfiguration=c});