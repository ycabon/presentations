// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],function(a,e,c){a.NoiseTextureRenderMode=void 0;(function(b){b[b.Full=0]="Full";b[b.WeatherMap=1]="WeatherMap";b[b.COUNT=2]="COUNT"})(a.NoiseTextureRenderMode||(a.NoiseTextureRenderMode={}));class d extends c.ShaderTechniqueConfiguration{constructor(){super(...arguments);this.mode=a.NoiseTextureRenderMode.Full}}e.__decorate([c.parameter({count:a.NoiseTextureRenderMode.COUNT})],d.prototype,
"mode",void 0);a.NoiseTextureAtlasTechniqueConfiguration=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});