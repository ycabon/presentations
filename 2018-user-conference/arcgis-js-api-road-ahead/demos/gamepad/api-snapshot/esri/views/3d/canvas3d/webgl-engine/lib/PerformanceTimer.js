// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./Util"],function(g){return function(b){var c=Array(b),d=0,a=NaN,e=0,f=0,h;this.reset=function(){for(var a=d=0;a<b;a++)c[a]=NaN};this.reset();this.start=function(){h=g.performance.now()};this.stop=function(){a=g.performance.now()-h;e+=a;f++;b&&(c[d]=a,d=(d+1)%b);return a};this.getLast=function(){return a};var k=function(a,b){return a+b};this.getLastFiltered=function(){return c.reduce(k)/c.length};this.getAverage=function(){return e/f};this.getTotal=function(){return e};this.getNumMeasurements=
function(){return f}}});