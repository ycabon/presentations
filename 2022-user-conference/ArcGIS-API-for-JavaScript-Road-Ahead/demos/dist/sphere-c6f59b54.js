import { eF as t, a3 as n$1, eh as u, au as g, cU as P, cX as _$1, cV as e$1, cW as z$1, dx as r, eG as l$1, at as s$1, e9 as n$2, ed as a$1, ea as r$1, C as s$2, O as t$1, eH as g$1, eI as O$1, dF as x, eJ as v, eK as P$1, a5 as o, eL as p$1 } from './_virtual_index-64b818a8.js';
import { s, c, f as f$1 } from './vectorStacks-2787eca4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var n;!function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z";}(n||(n={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function d(i){return i?{origin:t(i.origin),direction:t(i.direction)}:{origin:n$1(),direction:n$1()}}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function l(i,n=d()){return k$1(i.origin,i.direction,n)}function p(i,n,t=d()){return r(t.origin,i),e$1(t.direction,n,i),t}function k$1(i,n,o=d()){return r(o.origin,i),r(o.direction,n),o}function h$1(i,n){const r=_$1(c.get(),z$1(c.get(),i.direction),e$1(c.get(),n,i.origin));return P(r,r)}function b(i,n,r){const t=P(i.direction,e$1(r,n,i.origin));return u(r,i.origin,g(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}const S=new s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(n,r,s){const c=P(n,r)/P(n,n);return g(s,n,c)}function f(n,o){return P(n,o)/s$1(n)}function a(o,s){const c=P(o,s)/(s$1(o)*s$1(s));return -l$1(c)}function i(o,r,u){z$1(m,o),z$1(h,r);const e=P(m,h),f=l$1(e),a=_$1(m,m,h);return P(a,u)<0?2*Math.PI-f:f}const m=n$1(),h=n$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function R(){return n$2()}function _(t,r=R()){return a$1(r,t)}function q(t,r){return r$1(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function O(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function T(t){return t[3]}function k(t){return t}function E(t,r,n,e){return r$1(t,r,n,e)}function L(t,r$1,n){return t!==n&&r(n,t),n[3]=t[3]+r$1,n}function Z(r,n,e){return s$2.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),r===e?e:_(r,e)}function z(t,r,n){if(t$1(r))return !1;const{origin:o,direction:s}=r,i=U;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const a=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],c=2*(s[0]*i[0]+s[1]*i[1]+s[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=o[0]+s[0]*m,n[1]=o[1]+s[1]*m,n[2]=o[2]+s[2]*m),!0)}const U=n$1();function V(t,r){return z(t,r,null)}function X(t,r,n){if(z(t,r,n))return n;const e=Y(t,r,c.get());return u(n,r.origin,g(c.get(),r.direction,x(r.origin,e)/s$1(r.direction))),n}function Y(t,r,n){const e=c.get(),s=f$1.get();_$1(e,r.origin,r.direction);const i=T(t);_$1(n,e,r.origin),g(n,n,1/s$1(n)*i);const c$1=G(t,r.origin),p=a(r.origin,n);return g$1(s,p+c$1,e),O$1(n,n,s),n}function B(t,r,n){return z(t,r,n)?n:(b(r,k(t),n),D(t,n,n))}function D(t,r,n){const e=e$1(c.get(),r,k(t)),o=g(c.get(),e,t[3]/s$1(e));return u(n,o,k(t))}function F(t,r){const n=e$1(c.get(),r,k(t)),e=v(n),o=t[3]*t[3];return Math.sqrt(Math.abs(e-o))}function G(t,n){const e=e$1(c.get(),n,k(t)),o=s$1(e),s=T(t),i=s+Math.abs(s-o);return l$1(s/i)}const H=n$1();function I(t,r,e,o$1){const s=e$1(H,r,k(t));switch(e){case n.X:{const t=P$1(s,H)[2];return o(o$1,-Math.sin(t),Math.cos(t),0)}case n.Y:{const t=P$1(s,H),r=t[1],e=t[2],i=Math.sin(r);return o(o$1,-i*Math.cos(e),-i*Math.sin(e),Math.cos(r))}case n.Z:return z$1(o$1,s);default:return}}function J(t,r){const n=e$1(Q,r,k(t));return s$1(n)-t[3]}function K(t,r,n$1,e){const o=J(t,r),s=I(t,r,n.Z,Q),c=g(Q,s,n$1-o);return u(e,r,c)}function N(t,r){const n=p$1(k(t),r),e=T(t);return n<=e*e}const Q=n$1(),W=R();Object.freeze(Object.defineProperty({__proto__:null,create:R,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:O,getRadius:T,getCenter:k,fromValues:E,elevate:L,setExtent:Z,intersectRay:z,intersectsRay:V,intersectRayClosestSilhouette:X,closestPointOnSilhouette:Y,closestPoint:B,projectPoint:D,distanceToSilhouette:F,angleToSilhouette:G,axisAt:I,altitudeAt:J,setAltitudeAt:K,containsPoint:N,tmpSphere:W},Symbol.toStringTag,{value:"Module"}));

export { C, N, R, T, V, _, a, d, e, f, h$1 as h, i, j, k, l, n, p, w };
