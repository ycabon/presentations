// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){var h;(function(k){const g=(b,a,c,e)=>{let d=a;const f=c>>>1,l=b[d-1];for(;a<=f;){a=d<<1;a<c&&0>e(b[a-1],b[a])&&++a;const m=b[a-1];if(0>=e(m,l))break;b[d-1]=m;d=a}b[d-1]=l},n=(b,a)=>b<a?-1:b>a?1:0;k.sort=function(b,a,c,e){void 0===a&&(a=0);void 0===c&&(c=b.length);void 0===e&&(e=n);for(var d=c>>>1;d>a;d--)g(b,d,c,e);d=a+1;for(--c;c>a;c--){const f=b[a];b[a]=b[c];b[c]=f;g(b,d,c,e)}};k.iterableSort=function*(b,a,c,e){void 0===a&&(a=0);void 0===c&&(c=b.length);void 0===e&&(e=n);for(var d=
c>>>1;d>a;d--)g(b,d,c,e),yield;d=a+1;for(--c;c>a;c--){const f=b[a];b[a]=b[c];b[c]=f;g(b,d,c,e);yield}}})(h||={});return h});