/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as o}from"./_commonjsHelpers.js";var r,t,n={exports:{}};r=n,void 0!==(t=function(){function o(t,n,a,f,e){for(;f>a;){if(f-a>600){var s=f-a+1,i=n-a+1,h=Math.log(s),c=.5*Math.exp(2*h/3),p=.5*Math.sqrt(h*c*(s-c)/s)*(i-s/2<0?-1:1);o(t,n,Math.max(a,Math.floor(n-i*c/s+p)),Math.min(f,Math.floor(n+(s-i)*c/s+p)),e)}var u=t[n],M=a,m=f;for(r(t,a,n),e(t[f],u)>0&&r(t,a,f);M<m;){for(r(t,M,m),M++,m--;e(t[M],u)<0;)M++;for(;e(t[m],u)>0;)m--}0===e(t[a],u)?r(t,a,m):r(t,++m,f),m<=n&&(a=m+1),n<=m&&(f=m-1)}}function r(o,r,t){var n=o[r];o[r]=o[t],o[t]=n}function t(o,r){return o<r?-1:o>r?1:0}return function(r,n,a,f,e){o(r,n,a||0,f||r.length-1,e||t)}}())&&(r.exports=t);const a=o(n.exports);export{a as q};
