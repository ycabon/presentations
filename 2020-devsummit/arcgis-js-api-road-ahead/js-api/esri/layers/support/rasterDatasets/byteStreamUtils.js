// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,e){Object.defineProperty(e,"__esModule",{value:!0});e.bytesToUTF8=function(b,e){for(var c=0,f="",d=0,a=0,g=b.length;c<g;)if(a=b[c++],d=a>>4,8>d?d=1:15===d?(d=4,a=(a&7)<<18|(b[c++]&63)<<12|(b[c++]&63)<<6|b[c++]&63):14===d?(d=3,a=(a&15)<<12|(b[c++]&63)<<6|b[c++]&63):(d=2,a=(a&31)<<6|b[c++]&63),0!==a||e)f+=String.fromCharCode(a);return f}});