// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/tslib.es6","./BlendModeTechniqueConfiguration","../webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],function(e,c,f,a,d){class b extends f.BlendModeTechniqueConfiguration{constructor(){super(...arguments);this.output=a.BlendLayersOutput.Composite;this.baseOpacityMode=a.BaseOpacityMode.NotRequired;this.premultipliedSource=a.PremultipliedAlphaSource.Off}}c.__decorate([d.parameter({count:a.BlendLayersOutput.COUNT})],
b.prototype,"output",void 0);c.__decorate([d.parameter({count:a.BaseOpacityMode.COUNT})],b.prototype,"baseOpacityMode",void 0);c.__decorate([d.parameter()],b.prototype,"premultipliedSource",void 0);e.TileBlendTechniqueConfiguration=b;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});