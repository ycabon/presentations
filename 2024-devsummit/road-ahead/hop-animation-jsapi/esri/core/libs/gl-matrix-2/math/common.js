// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function d(){return c}function e(b){c=b}function f(b){return b*m}function g(b){return b*n}function h(b,k){return Math.abs(b-k)<=c*Math.max(1,Math.abs(b),Math.abs(k))}let c=1E-6;const l=Math.random,m=Math.PI/180,n=180/Math.PI,p=Object.freeze(Object.defineProperty({__proto__:null,RANDOM:l,equals:h,getEpsilon:d,setEpsilon:e,toDegree:g,toRadian:f},Symbol.toStringTag,{value:"Module"}));a.RANDOM=l;a.common=p;a.equals=h;a.getEpsilon=d;a.setEpsilon=e;a.toDegree=g;a.toRadian=
f;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});