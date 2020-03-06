// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../environment/RealisticAtmosphere.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/Program ../../webgl/renderState".split(" "),function(h,e,f,k,d,l,m,n,g,p,q,a){Object.defineProperty(e,
"__esModule",{value:!0});d=function(c){function b(){return null!==c&&c.apply(this,arguments)||this}f(b,c);b.prototype.initializeProgram=function(c){var a=b.shader.get().build({haze:this.configuration.haze});return new q(c.rctx,a.generateSource("vertex"),a.generateSource("fragment"),p.Default3D)};b.prototype.initializePipeline=function(){return this.configuration.haze?a.makePipelineState({blending:a.separateBlendingParams(1,0,769,1),colorWrite:a.defaultColorWriteParams}):a.makePipelineState({blending:a.separateBlendingParams(770,
1,771,771),depthTest:{func:515},colorWrite:a.defaultColorWriteParams})};b.shader=new m.ReloadableShaderModule(l,"../environment/RealisticAtmosphere.glsl",h);return b}(n.ShaderTechnique);e.RealisticAtmosphereTechnique=d;d=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.haze=!1;return b}f(b,a);k([g.parameter()],b.prototype,"haze",void 0);return b}(g.ShaderTechniqueConfiguration);e.RealisticAtmosphereTechniqueConfiguration=d});