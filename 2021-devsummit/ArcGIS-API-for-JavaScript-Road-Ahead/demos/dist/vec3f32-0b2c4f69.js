/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const a=new Float32Array(3);return a[0]=n,a[1]=r,a[2]=t,a}function a(n,r){return new Float32Array(n,r,3)}function e(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=e(),f=o(),l=u(),_=s(),w=c();Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:a,zeros:e,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});

export { n, t };
