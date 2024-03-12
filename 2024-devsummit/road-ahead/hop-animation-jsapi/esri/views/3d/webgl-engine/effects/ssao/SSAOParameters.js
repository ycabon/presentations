// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/libs/gl-matrix-2/factories/vec2f64","../../core/shaderModules/interfaces"],function(a,e,b){class c extends b.NoParameters{constructor(){super(...arguments);this.projScale=1}}class f extends c{constructor(){super(...arguments);this.intensity=1}}class d extends b.NoParameters{}class g extends d{constructor(){super(...arguments);this.blurSize=e.create()}}a.BlurDrawParameters=g;a.BlurPassParameters=c;a.SSAODrawParameters=d;a.SSAOPassParameters=f;Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});