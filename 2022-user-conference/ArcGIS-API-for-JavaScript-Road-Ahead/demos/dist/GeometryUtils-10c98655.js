/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,o=128/t,f=t/180,N=1/Math.LN2;function a(n,t){return (n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function P(n){return Math.log(n)*N}function b(n,t,r){return n*(1-r)+t*r}

export { P, a, b, f, h, n, r, t };
