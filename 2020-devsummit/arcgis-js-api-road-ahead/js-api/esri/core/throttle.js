// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,b){function d(b,a,d,f){var g=null,e=1E3;"number"===typeof a?(e=a,f=d):(g=a,e=d);var c=0,k,h=function(){c=0;b.apply(f,k)};a=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];g&&g.apply(f,a);k=a;e?c||(c=setTimeout(h,e)):h()};a.remove=function(){c&&(clearTimeout(c),c=0)};a.forceUpdate=function(){c&&(clearTimeout(c),h())};a.hasPendingUpdates=function(){return!!c};return a}Object.defineProperty(b,"__esModule",{value:!0});b.throttle=d;b.default=
d});