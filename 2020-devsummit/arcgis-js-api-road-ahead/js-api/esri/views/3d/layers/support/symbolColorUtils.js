// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/mathUtils","../../../../core/maybe"],function(m,c,f,h){Object.defineProperty(c,"__esModule",{value:!0});c.parseColorMixMode=function(b){switch(b){case "multiply":return 1;case "ignore":return 2;case "replace":return 3;case "tint":return 4;default:return 1}};c.encodeSymbolColor=function(b,e,a){if(h.isNone(b)||2===e)a[0]=255,a[1]=255,a[2]=255,a[3]=255;else{var c=f.clamp(Math.round(b[3]*g),0,g);e=0===c||4===e?0:3===e?k:l;a[0]=f.clamp(Math.round(b[0]*d),0,
d);a[1]=f.clamp(Math.round(b[1]*d),0,d);a[2]=f.clamp(Math.round(b[2]*d),0,d);a[3]=c+e}};var d=255,g=85,k=g,l=2*g});