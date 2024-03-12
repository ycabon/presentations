// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.padStops=function(a,b){a=a.slice(0,b);b-=a.length;for(let c=0;c<b;c++)a.push(a[a.length-1]);return a};e.premultiplyColor=function(a){if(!a)return[0,0,0,0];const {r:b,g:c,b:f,a:d}=a;return[d/255*b,d/255*c,d/255*f,d]};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});