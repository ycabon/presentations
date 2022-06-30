/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(){return new Float32Array(4)}function r(n){const r=new Float32Array(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r}function t(n,r,t,a){const e=new Float32Array(4);return e[0]=n,e[1]=r,e[2]=t,e[3]=a,e}function a(n,r){return new Float32Array(n,r,4)}function e(){return n()}function u(){return t(1,1,1,1)}function o(){return t(1,0,0,0)}function s(){return t(0,1,0,0)}function c(){return t(0,0,1,0)}function i(){return t(0,0,0,1)}const f=e(),l=u(),_=o(),w=s(),N=c(),U=i();Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:a,zeros:e,ones:u,unitX:o,unitY:s,unitZ:c,unitW:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:w,UNIT_Z:N,UNIT_W:U});

export { n, t };
