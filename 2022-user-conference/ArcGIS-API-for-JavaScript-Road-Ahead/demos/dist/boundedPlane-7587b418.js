import { Z as s, aI as r, ff as t, e8 as r$1, ay as n, a$ as g, eT as u, aA as o, eg as x, a_ as s$2, eR as H$1, fg as l, dt as P, du as e, e7 as F$1, ge as h$1, gN as o$1, fi as O$1, fh as g$1, dv as z$2, fj as v$1 } from './_virtual_index-fc1e0009.js';
import { s as s$1, c } from './vectorStacks-b9f85207.js';
import { e as e$1 } from './mat4f64-2ebd3575.js';
import { f, h, n as n$1 } from './sphere-e237f03d.js';
import { v, A as A$1, b } from './lineSegment-ed293740.js';
import { p, E, A, O, Z as Z$1, F, q, x as x$1, U, z as z$1, J as J$1, L as L$1 } from './plane-13bf43c0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const L=s.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class z{constructor(){this.plane=p(),this.origin=n(),this.basis1=n(),this.basis2=n();}}function G(s=vs){return {plane:p(s.plane),origin:t(s.origin),basis1:t(s.basis1),basis2:t(s.basis2)}}function W(s,i,t){const n=Ss.get();return n.origin=s,n.basis1=i,n.basis2=t,n.plane=E(0,0,0,0),H(n),n}function X(s,i=G()){return D(s.origin,s.basis1,s.basis2,i)}function Z(s,i){r$1(i.origin,s.origin),r$1(i.basis1,s.basis1),r$1(i.basis2,s.basis2),A(i.plane,s.plane);}function D(s,i,t,n=G()){return r$1(n.origin,s),r$1(n.basis1,i),r$1(n.basis2,t),H(n),ys(n,"fromValues()"),n}function H(s){O(s.basis2,s.basis1,s.origin,s.plane);}function J(s,i,t){s!==t&&X(s,t);const n=g(c.get(),ms(s),i);return u(t.origin,t.origin,n),t.plane[3]-=i,t}function K(s,i,t){return Q(i,t),J(t,gs(s,s.origin),t),t}function Q(s,i=G()){const t=(s[2]-s[0])/2,n=(s[3]-s[1])/2;return o(i.origin,s[0]+t,s[1]+n,0),o(i.basis1,t,0,0),o(i.basis2,0,n,0),F(0,0,1,0,i.plane),i}function $(s,i,t){return !!q(s.plane,i,t)&&hs(s,t)}function ss(s,i,t){if($(s,i,t))return t;const n=is(s,i,c.get());return u(t,i.origin,g(c.get(),i.direction,x(i.origin,n)/s$2(i.direction))),t}function is(s,t,n){const o=Ns.get();Ps(s,t,o,Ns.get());let r=Number.POSITIVE_INFINITY;for(const e of Ts){const a=Is(s,e,ws.get()),u=c.get();if(x$1(o,a,u)){const s=H$1(c.get(),t.origin,u),o=Math.abs(l(P(t.direction,s)));o<r&&(r=o,r$1(n,u));}}return r===Number.POSITIVE_INFINITY?ts(s,t,n):n}function ts(s,i,t){if($(s,i,t))return t;const n=Ns.get(),o=Ns.get();Ps(s,i,n,o);let r=Number.POSITIVE_INFINITY;for(const e of Ts){const a=Is(s,e,ws.get()),u=c.get();if(U(n,a,u)){const s=h(i,u);if(!z$1(o,u))continue;s<r&&(r=s,r$1(t,u));}}return rs(s,i.origin)<r&&ns(s,i.origin,t),t}function ns(s,i,t){const n=J$1(s.plane,i,c.get()),o=A$1(js(s,s.basis1),n,-1,1,c.get()),r=A$1(js(s,s.basis2),n,-1,1,c.get());return e(t,u(c.get(),o,r),s.origin),t}function os(s,i,t){const{origin:n,basis1:o$1,basis2:r}=s,e$1=e(c.get(),i,n),a=f(o$1,e$1),c$1=f(r,e$1),u=f(ms(s),e$1);return o(t,a,c$1,u)}function rs(s,i){const t=os(s,i,c.get()),{basis1:n,basis2:o}=s,r=s$2(n),e=s$2(o),a=Math.max(Math.abs(t[0])-r,0),c$1=Math.max(Math.abs(t[1])-e,0),u=t[2];return a*a+c$1*c$1+u*u}function es(s,i){return Math.sqrt(rs(s,i))}function as(s,i){let t=Number.NEGATIVE_INFINITY;for(const n of Ts){const o=Is(s,n,ws.get()),r=b(o,i);r>t&&(t=r);}return Math.sqrt(t)}function cs(s,i){return z$1(s.plane,i)&&hs(s,i)}function us(s,i,t,n){return ds(s,t,n)}function gs(s,i){const t=-s.plane[3];return f(ms(s),i)-t}function bs(s,i,t,n){const o=gs(s,i),r=g(Ms,ms(s),t-o);return u(n,i,r),n}function fs(s,i){return F$1(s.basis1,i.basis1)&&F$1(s.basis2,i.basis2)&&F$1(s.origin,i.origin)}function ls(s,i,t){return s!==t&&X(s,t),h$1(As,i),o$1(As,As),O$1(t.basis1,s.basis1,As),O$1(t.basis2,s.basis2,As),O$1(Z$1(t.plane),Z$1(s.plane),As),O$1(t.origin,s.origin,i),L$1(t.plane,t.plane,t.origin),t}function ps(s,i,t,n){return s!==n&&X(s,n),g$1(xs,i,t),O$1(n.basis1,s.basis1,xs),O$1(n.basis2,s.basis2,xs),H(n),n}function ms(s){return Z$1(s.plane)}function ds(s,i,t){switch(i){case n$1.X:r$1(t,s.basis1),z$2(t,t);break;case n$1.Y:r$1(t,s.basis2),z$2(t,t);break;case n$1.Z:r$1(t,ms(s));}return t}function hs(s,i){const t=e(c.get(),i,s.origin),n=v$1(s.basis1),o=v$1(s.basis2),r=P(s.basis1,t),e$1=P(s.basis2,t);return -r-n<0&&r-n<0&&-e$1-o<0&&e$1-o<0}function js(s,i){const t=ws.get();return r$1(t.origin,s.origin),r$1(t.vector,i),t}function Is(s,i,t){const{basis1:n,basis2:o,origin:r}=s,e=g(c.get(),n,i.origin[0]),a=g(c.get(),o,i.origin[1]);u(t.origin,e,a),u(t.origin,t.origin,r);const c$1=g(c.get(),n,i.direction[0]),b=g(c.get(),o,i.direction[1]);return g(t.vector,u(c$1,c$1,b),2),t}function ys(s,i){Math.abs(P(s.basis1,s.basis2)/(s$2(s.basis1)*s$2(s.basis2)))>1e-6&&L.warn(i,"Provided basis vectors are not perpendicular"),Math.abs(P(s.basis1,ms(s)))>1e-6&&L.warn(i,"Basis vectors and plane normal are not perpendicular"),Math.abs(-P(ms(s),s.origin)-s.plane[3])>1e-6&&L.warn(i,"Plane offset is not consistent with plane origin");}function Ps(s,i,t,n){const o=ms(s);O(o,i.direction,i.origin,t),O(Z$1(t),o,i.origin,n);}const vs={plane:p(),origin:r(0,0,0),basis1:r(1,0,0),basis2:r(0,1,0)},Ns=new s$1(p),ws=new s$1(v),Ms=n(),Ss=new s$1((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Ts=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],As=e$1(),xs=e$1();Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:z,create:G,wrap:W,copy:X,copyWithoutVerify:Z,fromValues:D,updateUnboundedPlane:H,elevate:J,setExtent:K,fromAABoundingRect:Q,intersectRay:$,intersectRayClosestSilhouette:ss,closestPointOnSilhouette:is,closestPoint:ts,projectPoint:ns,projectPointLocal:os,distance2:rs,distance:es,distanceToSilhouette:as,extrusionContainsPoint:cs,axisAt:us,altitudeAt:gs,setAltitudeAt:bs,equals:fs,transform:ls,rotate:ps,normal:ms,UP:vs},Symbol.toStringTag,{value:"Module"}));

export { G, H, Q, X, es as e };
