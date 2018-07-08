// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define([],function(){function f(b,a,d,e){for(var c=a,g=d>>>1,f=b[c-1];a<=g;){a=c<<1;a<d&&0>e(b[a-1],b[a])&&++a;var h=b[a-1];if(0>=e(h,f))break;b[c-1]=h;c=a}b[c-1]=f}function k(b,a){return b<a?-1:b>a?1:0}return{sort:function(b,a,d,e){void 0===a&&(a=0);void 0===d&&(d=b.length);void 0===e&&(e=k);for(var c=d>>>1;c>a;c--)f(b,c,d,e);for(var g=a+1,c=d-1;c>a;c--)d=b[a],b[a]=b[c],b[c]=d,f(b,g,c,e);return b}}});