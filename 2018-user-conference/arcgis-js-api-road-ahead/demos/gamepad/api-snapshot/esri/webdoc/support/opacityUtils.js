// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/accessorSupport/ensureType"],function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.opacityToTransparency=function(a){a=c.ensureInteger(100*(1-a));return Math.max(0,Math.min(a,100))};b.transparencyToOpacity=function(a){return Math.max(0,Math.min(1-a/100,1))}});