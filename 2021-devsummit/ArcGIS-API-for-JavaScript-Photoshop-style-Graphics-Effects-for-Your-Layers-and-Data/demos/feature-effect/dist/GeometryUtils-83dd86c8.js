/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=Math.PI,o=128/t,N=1/Math.LN2;function a(n,t){return (n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(.7111111111111111*n,256)}function P(n){return Math.log(n)*N}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}

export { M, P, g, h };
