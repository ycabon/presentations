// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./Util"],function(g){return function(e){e=void 0===e?16:g.nextHighestPowerOfTwo(e);var b=new Float32Array(e),c=0;this.resize=function(a,f){c=a;var d;if(c>b.length){for(a=b.length||1;a<c;)a*=2;d=new Float32Array(a);f&&d.set(b);b=d;return!0}if(c<=b.length/2){a=b.length;for(d=2*c;a>=d;)a/=2;d=new Float32Array(a);f&&d.set(b.subarray(0,a));b=d;return!0}return!1};this.append=function(a){var f=c;this.resize(c+a.length,!0);b.set(a,f)};this.erase=function(a,c){for(;a<c;++a)b[a]=0};this.getArray=function(){return b};
this.getSize=function(){return c}}});