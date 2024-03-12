// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/libs/gl-matrix-2/factories/vec2f64","../../../../../core/libs/gl-matrix-2/factories/vec4f64","../../core/shaderModules/interfaces"],function(a,c,b,d){class e extends d.NoParameters{constructor(){super(...arguments);this.color=b.fromValues(1,0,1,1);this.haloColor=b.fromValues(1,0,1,1);this.haloOpacity=1;this.haloOpacityOccluded=.25;this.fillOpacity=.2;this.fillOpacityOccluded=.05;this.coverageRounding=c.fromValues(1,1)}}a.HighlightPassParameters=e;Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});