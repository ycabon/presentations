// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils"],function(a,b){a.atmosphereHeight=1E5;a.computeInnerAltitudeFade=function(c){return b.clamp((c-1E5)/9E5,0,1)};a.innerAtmosphereDepth=1E4;a.rayLeighScaleHeight=.085;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});