// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define([],function(){function m(a,c,d,e,h){for(;e>d;){if(600<e-d){var f=e-d+1,g=c-d+1,k=Math.log(f),b=.5*Math.exp(2*k/3),k=.5*Math.sqrt(k*b*(f-b)/f)*(0>g-f/2?-1:1);m(a,c,Math.max(d,Math.floor(c-g*b/f+k)),Math.min(e,Math.floor(c+(f-g)*b/f+k)),h)}f=a[c];g=d;b=e;l(a,d,c);for(0<h(a[e],f)&&l(a,d,e);g<b;){l(a,g,b);g++;for(b--;0>h(a[g],f);)g++;for(;0<h(a[b],f);)b--}0===h(a[d],f)?l(a,d,b):(b++,l(a,b,e));b<=c&&(d=b+1);c<=b&&(e=b-1)}}function l(a,c,d){var e=a[c];a[c]=a[d];a[d]=e}function n(a,c){return a<c?
-1:a>c?1:0}return function(a,c,d,e,h){m(a,c,d||0,e||a.length-1,h||n)}});