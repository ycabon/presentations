// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./number"],function(f,h){f.premultiplyAlpha=function(a,b=0,c=!1){const e=a[b+3];a[b]*=e;a[b+1]*=e;a[b+2]*=e;c||(a[b+3]*=255);return a};f.premultiplyAlphaRGBA=function(a){if(!a)return 0;const {r:b,g:c,b:e,a:d}=a;return h.i8888to32(b*d,c*d,e*d,255*d)};f.premultiplyAlphaRGBAArray=function(a){if(!a)return 0;const [b,c,e,d]=a;return h.i8888to32(d/255*b,d/255*c,d/255*e,d)};f.writeColor=function(a,b,c=0){if(null==b)a[c]=0,a[c+1]=0,a[c+2]=0,a[c+3]=0;else{var {r:e,g:d,b:k,a:g}=b;a[c]=e*
g/255;a[c+1]=d*g/255;a[c+2]=k*g/255;a[c+3]=g}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});