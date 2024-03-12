// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/mathUtils"],function(b,e){b.ColorMixModeEnum=void 0;(function(a){a[a.Multiply=1]="Multiply";a[a.Ignore=2]="Ignore";a[a.Replace=3]="Replace";a[a.Tint=4]="Tint"})(b.ColorMixModeEnum||(b.ColorMixModeEnum={}));b.encodeSymbolColor=function(a,d,c){if(null==a||d===b.ColorMixModeEnum.Ignore)c[0]=255,c[1]=255,c[2]=255,c[3]=255;else{var f=e.clamp(Math.round(85*a[3]),0,85);d=0===f||d===b.ColorMixModeEnum.Tint?0:d===b.ColorMixModeEnum.Replace?85:170;c[0]=e.clamp(Math.round(255*
a[0]),0,255);c[1]=e.clamp(Math.round(255*a[1]),0,255);c[2]=e.clamp(Math.round(255*a[2]),0,255);c[3]=f+d}};b.parseColorMixMode=function(a){switch(a){case "multiply":return b.ColorMixModeEnum.Multiply;case "ignore":return b.ColorMixModeEnum.Ignore;case "replace":return b.ColorMixModeEnum.Replace;case "tint":return b.ColorMixModeEnum.Tint;default:return b.ColorMixModeEnum.Multiply}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});