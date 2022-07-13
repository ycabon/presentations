/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(){return new Float32Array(4)}function t(n){const t=new Float32Array(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(n,t,r,e){const a=new Float32Array(4);return a[0]=n,a[1]=t,a[2]=r,a[3]=e,a}function e(n,t){return new Float32Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function u(){return r(1,0,0,0)}function s(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function i(){return r(0,0,0,1)}const f=a(),l=o(),_=u(),y=s(),w=c(),N=i();Object.freeze(Object.defineProperty({__proto__:null,create:n,clone:t,fromValues:r,createView:e,zeros:a,ones:o,unitX:u,unitY:s,unitZ:c,unitW:i,ZEROS:f,ONES:l,UNIT_X:_,UNIT_Y:y,UNIT_Z:w,UNIT_W:N},Symbol.toStringTag,{value:"Module"}));

export { r, t };
