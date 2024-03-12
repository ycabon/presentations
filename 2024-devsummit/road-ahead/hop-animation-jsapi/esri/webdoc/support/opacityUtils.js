// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/accessorSupport/ensureType"],function(b,c){b.opacityToTransparency=function(a){a=c.ensureInteger(100*(1-a));return Math.max(0,Math.min(a,100))};b.transparencyToOpacity=function(a){return Math.max(0,Math.min(1-a/100,1))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});