// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/assignHelper ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ./LaserlinePath.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState".split(" "),function(l,e,f,m,d,n,p,
q,r,g,t,u,v,h){Object.defineProperty(e,"__esModule",{value:!0});d=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}f(b,a);b.prototype.initializeProgram=function(c){var a=b.shader.get().build(this.configuration);return new u(c.rctx,a.generateSource("vertex"),a.generateSource("fragment"),b.attributeLocations)};b.prototype.bind=function(c,b,a){this.program.setUniform3fv("innerColor",c.innerColor);this.program.setUniform1f("innerWidth",c.innerWidth*a.pixelRatio);this.program.setUniform3fv("glowColor",
c.glowColor);this.program.setUniform1f("glowWidth",c.glowWidth*a.pixelRatio);this.program.setUniform1f("glowFalloff",c.glowFalloff);this.program.setUniform1f("globalAlpha",c.globalAlpha);this.program.setUniform1f("perScreenPixelRatio",a.perScreenPixelRatio);this.program.setUniform2f("pixelToNDC",2/a.fullWidth,2/a.fullHeight);this.program.setUniformMatrix4fv("uProjectionMatrix",a.projectionMatrix);n.mat4.translate(k,a.viewMatrix,b);this.program.setUniformMatrix4fv("uModelViewMatrix",k);this.configuration.contrastControlEnabled&&
this.program.setUniform1f("globalAlphaContrastBoost",null!=c.globalAlphaContrastBoost?c.globalAlphaContrastBoost:1)};b.prototype.initializePipeline=function(){return h.makePipelineState({blending:v.simpleBlendingParams(1,771),colorWrite:h.defaultColorWriteParams})};b.prototype.bindPipelineState=function(a){a.setPipelineState(this.pipeline)};b.shader=new q.ReloadableShaderModule(t,"./LaserlinePath.glsl",l);b.attributeLocations={start:0,end:1,up:2,extrude:3};return b}(r.ShaderTechnique);e.LaserlinePathTechnique=
d;d=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.contrastControlEnabled=!1;return b}f(b,a);m([g.parameter()],b.prototype,"contrastControlEnabled",void 0);return b}(g.ShaderTechniqueConfiguration);e.LaserlinePathTechniqueConfiguration=d;var k=p.mat4f64.create()});