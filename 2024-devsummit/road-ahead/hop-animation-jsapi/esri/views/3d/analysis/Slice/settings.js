// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/colorUtils","../../../../core/libs/gl-matrix-2/factories/vec4f64"],function(a,d,b){b=b.fromValues(0,0,0,.04);a.getGridColor=function({accentColor:c}){return d.multiplyOpacityToUnitRGBA(c,.5)};a.getOutlineColor=function({accentColor:c}){return d.multiplyOpacityToUnitRGBA(c,.7)};a.planeColor=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});