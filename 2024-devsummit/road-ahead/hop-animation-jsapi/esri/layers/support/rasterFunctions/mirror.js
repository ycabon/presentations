// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(k){k.mirror=function(c,d,h,f,g){f=Math.floor(f/2);for(var b=0;b<f;b++)for(var a=0;a<d;a++)c[b*d+a]=c[(g-1-b)*d+a],c[(h-1-b)*d+a]=c[(h-g+b)*d+a];f=Math.floor(g/2);for(b=0;b<h;b++){a=b*d;for(let e=0;e<f;e++)c[a+e]=c[a+g-1-e],c[a+d-e-1]=c[a+d+e-g]}};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});