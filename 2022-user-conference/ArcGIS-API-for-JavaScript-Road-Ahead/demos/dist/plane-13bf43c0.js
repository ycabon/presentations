import { aA as o, dw as _$1, dv as z$1, r, eT as u, a$ as g, du as e, dt as P$1, aT as o$1, ay as n, e7 as F$1 } from './_virtual_index-fc1e0009.js';
import { f } from './sphere-e237f03d.js';
import { c, r as r$1 } from './vectorStacks-b9f85207.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l$1(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,r))}function p$1(t,s){const r=Math.sqrt(s[0]*s[0]+s[4]*s[4]+s[8]*s[8]),a=Math.sqrt(s[1]*s[1]+s[5]*s[5]+s[9]*s[9]),o$1=Math.sqrt(s[2]*s[2]+s[6]*s[6]+s[10]*s[10]);return o(t,r,a,o$1),t}function b$1(t,s,o$1){Math.abs(t[0])>Math.abs(t[1])?o(s,0,1,0):o(s,1,0,0),_$1(o$1,t,s),z$1(s,s),_$1(s,o$1,t),z$1(o$1,o$1);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function p(t=$){return [t[0],t[1],t[2],t[3]]}function E(t=$[0],n=$[1],r=$[2],o=$[3]){return F(t,n,r,o,r$1.get())}function A(t,n){return F(n[0],n[1],n[2],n[3],t)}function F(t,n,r,o,c=p()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function _(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function j(t,n,r,o=p()){const c=r[0]-n[0],e=r[1]-n[1],u=r[2]-n[2],i=t[0]-n[0],f=t[1]-n[1],s=t[2]-n[2],a=e*s-u*f,I=u*i-c*s,N=c*f-e*i,m=a*a+I*I+N*N,M=Math.abs(m-1)>1e-5&&m>1e-12?1/Math.sqrt(m):1;return o[0]=a*M,o[1]=I*M,o[2]=N*M,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function b(t,n,r,i,f){if(t.count<3)return !1;t.getVec(r,y);let s=i,a=!1;for(;s<t.count-1&&!a;)t.getVec(s,X),s++,a=!F$1(y,X);if(!a)return !1;for(s=Math.max(s,f),a=!1;s<t.count&&!a;)t.getVec(s,d),s++,e(l,y,X),z$1(l,l),e(C,X,d),z$1(C,C),a=!F$1(y,d)&&!F$1(X,d)&&Math.abs(P$1(l,C))<k;return a?(j(y,X,d,n),!0):(0!==r||1!==i||2!==f)&&b(t,n,0,1,2)}const k=.99619469809,y=n(),X=n(),d=n(),l=n(),C=n();function L(t,n,r){return n!==t&&A(t,n),t[3]=-P$1(Z(t),r),t}function P(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function O(t,n,r,o){return _$1(d,n,t),_(r,d,o)}function V(t,n,r,o){return Y(t,n,e(c.get(),r,n),nt,o)}function q(t,r$1,o){return !!r(r$1)&&Y(t,r$1.origin,r$1.direction,rt,o)}function x(t,n,r){return Y(t,n.origin,n.vector,tt.NONE,r)}function U(t,n,r){return Y(t,n.origin,n.vector,tt.CLAMP,r)}function z(t,n){return W(t,n)>=0}function H(t,n){const r=P$1(Z(t),n.ray.direction),o=-W(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function J(t,n,r){const o=g(c.get(),Z(t),-t[3]),e$1=Q(t,e(c.get(),n,o),c.get());return u(r,e$1,o),r}function K(t,n,r,o$1){const e$1=Z(t),u=c.get(),i=c.get();b$1(e$1,u,i);const f$1=e(c.get(),r,n),s=f(u,f$1),I=f(i,f$1),N=f(e$1,f$1);return o(o$1,s,I,N)}function Q(t,n,r){const o=g(c.get(),Z(t),P$1(Z(t),n));return e(r,n,o),r}function W(t,n){return P$1(Z(t),n)+t[3]}function Y(n,r,o,c,e){const i=P$1(Z(n),o);if(0===i)return !1;let a=-(P$1(Z(n),r)+n[3])/i;return c&tt.CLAMP&&(a=o$1(a,0,1)),!(!(c&tt.INFINITE_MIN)&&a<0||!(c&tt.INFINITE_MAX)&&a>1)&&(u(e,r,g(e,o,a)),!0)}function Z(t){return t}const $=[0,0,1,0];var tt;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX";}(tt||(tt={}));const nt=tt.INFINITE_MIN|tt.INFINITE_MAX,rt=tt.INFINITE_MAX;

export { A, E, F, H, J, K, L, O, P, U, V, W, Z, _, p$1 as a, b, j, l$1 as l, p, q, x, z };
