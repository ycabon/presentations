// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/tslib.es6","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],function(a,e,c){a.PrecipitationType=void 0;(function(b){b[b.Rain=0]="Rain";b[b.Snow=1]="Snow";b[b.COUNT=2]="COUNT"})(a.PrecipitationType||(a.PrecipitationType={}));class d extends c.ShaderTechniqueConfiguration{constructor(){super(...arguments);this.type=a.PrecipitationType.Rain}}e.__decorate([c.parameter({count:a.PrecipitationType.COUNT})],d.prototype,"type",void 0);a.PrecipitationTechniqueConfiguration=
d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});