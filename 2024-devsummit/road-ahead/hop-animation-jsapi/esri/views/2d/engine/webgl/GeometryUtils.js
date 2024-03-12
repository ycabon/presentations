// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function e(a,c){a%=c;return 0<=a?a:a+c}const f=128/Math.PI,g=256/360,h=1/Math.LN2;b.between=function(a,c,d){return a>=c&&a<=d||a>=d&&a<=c};b.degToByte=function(a){return e(a*g,256)};b.interpolate=function(a,c,d){return a*(1-d)+c*d};b.log2=function(a){return Math.log(a)*h};b.positiveMod=e;b.radToByte=function(a){return e(a*f,256)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});