/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,t,n,r){const a=3*e,s=3*(n-e)-a,u=1-a-s,i=3*t,o=3*(r-t)-i,f=1-i-o;function c(e){return((u*e+s)*e+a)*e}return function(e,t=1e-6){return n=function(e,t){let n,r,i,o,f,l;for(i=e,l=0;l<8;l++){if(o=c(i)-e,Math.abs(o)<t)return i;if(f=(3*u*(p=i)+2*s)*p+a,Math.abs(f)<1e-6)break;i-=o/f}var p;if(n=0,r=1,i=e,i<n)return n;if(i>r)return r;for(;n<r;){if(o=c(i),Math.abs(o-e)<t)return i;e>o?n=i:r=i,i=.5*(r-n)+n}return i}(e,t),((f*n+o)*n+i)*n;var n}}const t=/^cubic-bezier\((.*)\)/,n={};function r(r){let a=n[r]||null;if(!a){const n=t.exec(r);if(n){const t=n[1].split(",").map((e=>parseFloat(e.trim())));4!==t.length||t.some((e=>isNaN(e)))||(a=e.apply(e,t))}}return a}n.ease=e(.25,.1,.25,1),n.linear=e(0,0,1,1),n.easeIn=n["ease-in"]=e(.42,0,1,1),n.easeOut=n["ease-out"]=e(0,0,.58,1),n.easeInOut=n["ease-in-out"]=e(.42,0,.58,1);export{n as e,r as p,e as u};
