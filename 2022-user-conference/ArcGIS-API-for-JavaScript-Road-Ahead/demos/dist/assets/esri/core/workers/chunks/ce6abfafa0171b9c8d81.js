"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1412],{46851:(t,n,e)=>{e.d(n,{R:()=>i,g:()=>o});let r=1e-6;function o(){return r}const i=Math.random,u=Math.PI/180,a=180/Math.PI;Object.freeze(Object.defineProperty({__proto__:null,getEpsilon:o,setEpsilon:function(t){r=t},RANDOM:i,toRadian:function(t){return t*u},toDegree:function(t){return t*a},equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))}},Symbol.toStringTag,{value:"Module"}))},46521:(t,n,e)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,n){return new Float64Array(t,n,9)}e.d(n,{a:()=>o,c:()=>r}),Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,n,e,r,o,i,u,a,s){return[t,n,e,r,o,i,u,a,s]},createView:o},Symbol.toStringTag,{value:"Module"}))},13598:(t,n,e)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function i(t,n){return new Float64Array(t,n,16)}e.d(n,{I:()=>u,a:()=>i,b:()=>o,c:()=>r});const u=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:function(t,n,e,r,o,i,u,a,s,c,f,l,h,d,M,m){return[t,n,e,r,o,i,u,a,s,c,f,l,h,d,M,m]},createView:i,IDENTITY:u},Symbol.toStringTag,{value:"Module"}))},94961:(t,n,e)=>{function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}function i(t,n){return new Float64Array(t,n,4)}e.d(n,{I:()=>u,a:()=>r,b:()=>o,c:()=>i});const u=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:function(t,n,e,r){return[t,n,e,r]},createView:i,IDENTITY:u},Symbol.toStringTag,{value:"Module"}))},29268:(t,n,e)=>{e.d(n,{a:()=>_,c:()=>b,g:()=>y,h:()=>g,j:()=>w,m:()=>v}),e(80442);var r,o,i=e(92604),u=e(22021),a=e(70586),s=e(52138),c=e(17896),f=e(65617),l=e(98766),h=e(88669);(o=r||(r={}))[o.X=0]="X",o[o.Y=1]="Y",o[o.Z=2]="Z";var d=e(78341),M=e(61277),m=e(12981);function b(){return(0,h.c)()}function g(t,n=b()){return(0,l.c)(n,t)}function _(t){return t[3]}function y(t){return t}function p(t,n,e){if((0,a.Wi)(n))return!1;const{origin:r,direction:o}=n,i=P;i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2];const u=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],s=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),c=s*s-4*u*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(c<0)return!1;const f=Math.sqrt(c);let l=(-s-f)/(2*u);const h=(-s+f)/(2*u);return(l<0||h<l&&h>0)&&(l=h),!(l<0||(e&&(e[0]=r[0]+o[0]*l,e[1]=r[1]+o[1]*l,e[2]=r[2]+o[2]*l),0))}const P=(0,f.c)();function w(t,n){return p(t,n,null)}function E(t,n,e){const r=m.WM.get(),o=m.MP.get();(0,c.f)(r,n.origin,n.direction);const i=_(t);(0,c.f)(e,r,n.origin),(0,c.g)(e,e,1/(0,c.l)(e)*i);const u=T(t,n.origin),a=(0,M.EU)(n.origin,e);return(0,s.d)(o,a+u,r),(0,c.m)(e,e,o),e}function S(t,n,e){const r=(0,c.b)(m.WM.get(),n,t),o=(0,c.g)(m.WM.get(),r,t[3]/(0,c.l)(r));return(0,c.a)(e,o,t)}function T(t,n){const e=(0,c.b)(m.WM.get(),n,t),r=(0,c.l)(e),o=_(t),i=o+Math.abs(o-r);return(0,u.ZF)(o/i)}const I=(0,f.c)();function A(t,n,e,o){const i=(0,c.b)(I,n,t);switch(e){case r.X:{const t=(0,u.jE)(i,I)[2];return(0,c.s)(o,-Math.sin(t),Math.cos(t),0)}case r.Y:{const t=(0,u.jE)(i,I),n=t[1],e=t[2],r=Math.sin(n);return(0,c.s)(o,-r*Math.cos(e),-r*Math.sin(e),Math.cos(n))}case r.Z:return(0,c.n)(o,i);default:return}}function O(t,n){const e=(0,c.b)(x,n,t);return(0,c.l)(e)-t[3]}function v(t,n){const e=(0,c.d)(t,n),r=_(t);return e<=r*r}const x=(0,f.c)(),R=b();Object.freeze(Object.defineProperty({__proto__:null,create:b,copy:g,fromCenterAndRadius:function(t,n){return(0,h.f)(t[0],t[1],t[2],n)},wrap:function(t){return t},clear:function(t){t[0]=t[1]=t[2]=t[3]=0},fromRadius:function(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t},getRadius:_,getCenter:y,fromValues:function(t,n,e,r){return(0,h.f)(t,n,e,r)},elevate:function(t,n,e){return t!==e&&(0,c.c)(e,t),e[3]=t[3]+n,e},setExtent:function(t,n,e){return i.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===e?e:g(t,e)},intersectRay:p,intersectsRay:w,intersectRayClosestSilhouette:function(t,n,e){if(p(t,n,e))return e;const r=E(t,n,m.WM.get());return(0,c.a)(e,n.origin,(0,c.g)(m.WM.get(),n.direction,(0,c.i)(n.origin,r)/(0,c.l)(n.direction))),e},closestPointOnSilhouette:E,closestPoint:function(t,n,e){return p(t,n,e)?e:((0,d.JI)(n,t,e),S(t,e,e))},projectPoint:S,distanceToSilhouette:function(t,n){const e=(0,c.b)(m.WM.get(),n,t),r=(0,c.p)(e),o=t[3]*t[3];return Math.sqrt(Math.abs(r-o))},angleToSilhouette:T,axisAt:A,altitudeAt:O,setAltitudeAt:function(t,n,e,o){const i=O(t,n),u=A(t,n,r.Z,x),a=(0,c.g)(x,u,e-i);return(0,c.a)(o,n,a)},containsPoint:v,tmpSphere:R},Symbol.toStringTag,{value:"Module"}))},97323:(t,n,e)=>{function r(){return[0,0]}function o(t,n){return[t,n]}function i(t,n){return new Float64Array(t,n,2)}function u(){return o(1,1)}function a(){return o(1,0)}function s(){return o(0,1)}e.d(n,{Z:()=>c,a:()=>r,c:()=>i});const c=[0,0],f=u(),l=a(),h=s();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(t){return[t[0],t[1]]},fromValues:o,fromArray:function(t){const n=[0,0],e=Math.min(2,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},createView:i,zeros:function(){return[0,0]},ones:u,unitX:a,unitY:s,ZEROS:c,ONES:f,UNIT_X:l,UNIT_Y:h},Symbol.toStringTag,{value:"Module"}))},17896:(t,n,e)=>{e.d(n,{C:()=>d,H:()=>l,a:()=>s,b:()=>c,c:()=>u,d:()=>m,e:()=>_,f:()=>y,g:()=>h,h:()=>p,i:()=>M,k:()=>I,l:()=>i,m:()=>P,n:()=>g,p:()=>b,q:()=>E,r:()=>A,s:()=>a,t:()=>w,u:()=>N});var r=e(65617),o=e(46851);function i(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function a(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function s(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function c(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function f(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function l(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function h(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function d(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function M(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return Math.sqrt(e*e+r*r+o*o)}function m(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2];return e*e+r*r+o*o}function b(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function g(t,n){const e=n[0],r=n[1],o=n[2];let i=e*e+r*r+o*o;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i),t}function _(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function y(t,n,e){const r=n[0],o=n[1],i=n[2],u=e[0],a=e[1],s=e[2];return t[0]=o*s-i*a,t[1]=i*u-r*s,t[2]=r*a-o*u,t}function p(t,n,e,r){const o=n[0],i=n[1],u=n[2];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=u+r*(e[2]-u),t}function P(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12],t[1]=e[1]*r+e[5]*o+e[9]*i+e[13],t[2]=e[2]*r+e[6]*o+e[10]*i+e[14],t}function w(t,n,e){const r=n[0],o=n[1],i=n[2];return t[0]=r*e[0]+o*e[3]+i*e[6],t[1]=r*e[1]+o*e[4]+i*e[7],t[2]=r*e[2]+o*e[5]+i*e[8],t}function E(t,n,e){const r=e[0],o=e[1],i=e[2],u=e[3],a=n[0],s=n[1],c=n[2];let f=o*c-i*s,l=i*a-r*c,h=r*s-o*a,d=o*h-i*l,M=i*f-r*h,m=r*l-o*f;const b=2*u;return f*=b,l*=b,h*=b,d*=2,M*=2,m*=2,t[0]=a+f+d,t[1]=s+l+M,t[2]=c+h+m,t}const S=(0,r.c)(),T=(0,r.c)();function I(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function A(t,n,e){const r=e[0]-n[0],o=e[1]-n[1],i=e[2]-n[2];let u=r*r+o*o+i*i;return u>0?(u=1/Math.sqrt(u),t[0]=r*u,t[1]=o*u,t[2]=i*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const O=c,v=f,x=l,R=M,U=m,N=i,B=b;Object.freeze(Object.defineProperty({__proto__:null,length:i,copy:u,set:a,add:s,subtract:c,multiply:f,divide:l,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},abs:function(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t},sign:function(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:h,scaleAndAdd:d,distance:M,squaredDistance:m,squaredLength:b,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:g,dot:_,cross:y,lerp:p,hermite:function(t,n,e,r,o,i){const u=i*i,a=u*(2*i-3)+1,s=u*(i-2)+i,c=u*(i-1),f=u*(3-2*i);return t[0]=n[0]*a+e[0]*s+r[0]*c+o[0]*f,t[1]=n[1]*a+e[1]*s+r[1]*c+o[1]*f,t[2]=n[2]*a+e[2]*s+r[2]*c+o[2]*f,t},bezier:function(t,n,e,r,o,i){const u=1-i,a=u*u,s=i*i,c=a*u,f=3*i*a,l=3*s*u,h=s*i;return t[0]=n[0]*c+e[0]*f+r[0]*l+o[0]*h,t[1]=n[1]*c+e[1]*f+r[1]*l+o[1]*h,t[2]=n[2]*c+e[2]*f+r[2]*l+o[2]*h,t},random:function(t,n){n=n||1;const e=o.R,r=2*e()*Math.PI,i=2*e()-1,u=Math.sqrt(1-i*i)*n;return t[0]=Math.cos(r)*u,t[1]=Math.sin(r)*u,t[2]=i*n,t},transformMat4:P,transformMat3:w,transformQuat:E,rotateX:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0],i[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),i[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateY:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),i[1]=o[1],i[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},rotateZ:function(t,n,e,r){const o=[],i=[];return o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2],i[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),i[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),i[2]=o[2],t[0]=i[0]+e[0],t[1]=i[1]+e[1],t[2]=i[2]+e[2],t},angle:function(t,n){u(S,t),u(T,n),g(S,S),g(T,T);const e=_(S,T);return e>1?0:e<-1?Math.PI:Math.acos(e)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:I,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],i=t[2],u=n[0],a=n[1],s=n[2],c=(0,o.g)();return Math.abs(e-u)<=c*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(r-a)<=c*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(i-s)<=c*Math.max(1,Math.abs(i),Math.abs(s))},direction:A,sub:O,mul:v,div:x,dist:R,sqrDist:U,len:N,sqrLen:B},Symbol.toStringTag,{value:"Module"}))},65617:(t,n,e)=>{function r(){return[0,0,0]}function o(t){return[t[0],t[1],t[2]]}function i(t,n,e){return[t,n,e]}function u(t){const n=[0,0,0],e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function a(t,n){return new Float64Array(t,n,3)}function s(){return i(1,1,1)}function c(){return i(1,0,0)}function f(){return i(0,1,0)}function l(){return i(0,0,1)}e.d(n,{O:()=>d,Z:()=>h,a:()=>o,b:()=>a,c:()=>r,d:()=>u,f:()=>i});const h=[0,0,0],d=s(),M=c(),m=f(),b=l();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:i,fromArray:u,createView:a,zeros:function(){return[0,0,0]},ones:s,unitX:c,unitY:f,unitZ:l,ZEROS:h,ONES:d,UNIT_X:M,UNIT_Y:m,UNIT_Z:b},Symbol.toStringTag,{value:"Module"}))},98766:(t,n,e)=>{e.d(n,{a:()=>u,b:()=>f,c:()=>o,d:()=>b,e:()=>d,f:()=>M,g:()=>_,h:()=>y,l:()=>g,n:()=>m,s:()=>i});var r=e(46851);function o(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function i(t,n,e,r,o){return t[0]=n,t[1]=e,t[2]=r,t[3]=o,t}function u(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function a(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function s(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function c(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function f(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function l(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return Math.sqrt(e*e+r*r+o*o+i*i)}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],i=n[3]-t[3];return e*e+r*r+o*o+i*i}function d(t){const n=t[0],e=t[1],r=t[2],o=t[3];return Math.sqrt(n*n+e*e+r*r+o*o)}function M(t){const n=t[0],e=t[1],r=t[2],o=t[3];return n*n+e*e+r*r+o*o}function m(t,n){const e=n[0],r=n[1],o=n[2],i=n[3];let u=e*e+r*r+o*o+i*i;return u>0&&(u=1/Math.sqrt(u),t[0]=e*u,t[1]=r*u,t[2]=o*u,t[3]=i*u),t}function b(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function g(t,n,e,r){const o=n[0],i=n[1],u=n[2],a=n[3];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t[2]=u+r*(e[2]-u),t[3]=a+r*(e[3]-a),t}function _(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function y(t,n){const e=t[0],o=t[1],i=t[2],u=t[3],a=n[0],s=n[1],c=n[2],f=n[3],l=(0,r.g)();return Math.abs(e-a)<=l*Math.max(1,Math.abs(e),Math.abs(a))&&Math.abs(o-s)<=l*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(i-c)<=l*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(u-f)<=l*Math.max(1,Math.abs(u),Math.abs(f))}const p=a,P=s,w=c,E=l,S=h,T=d,I=M;Object.freeze(Object.defineProperty({__proto__:null,copy:o,set:i,add:u,subtract:a,multiply:s,divide:c,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:f,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},distance:l,squaredDistance:h,length:d,squaredLength:M,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:m,dot:b,lerp:g,random:function(t,n){const e=r.R;let o,i,u,a,s,c;n=n||1;do{o=2*e()-1,i=2*e()-1,s=o*o+i*i}while(s>=1);do{u=2*e()-1,a=2*e()-1,c=u*u+a*a}while(c>=1);const f=Math.sqrt((1-s)/c);return t[0]=n*o,t[1]=n*i,t[2]=n*u*f,t[3]=n*a*f,t},transformMat4:function(t,n,e){const r=n[0],o=n[1],i=n[2],u=n[3];return t[0]=e[0]*r+e[4]*o+e[8]*i+e[12]*u,t[1]=e[1]*r+e[5]*o+e[9]*i+e[13]*u,t[2]=e[2]*r+e[6]*o+e[10]*i+e[14]*u,t[3]=e[3]*r+e[7]*o+e[11]*i+e[15]*u,t},transformQuat:function(t,n,e){const r=n[0],o=n[1],i=n[2],u=e[0],a=e[1],s=e[2],c=e[3],f=c*r+a*i-s*o,l=c*o+s*r-u*i,h=c*i+u*o-a*r,d=-u*r-a*o-s*i;return t[0]=f*c+d*-u+l*-s-h*-a,t[1]=l*c+d*-a+h*-u-f*-s,t[2]=h*c+d*-s+f*-a-l*-u,t[3]=n[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:_,equals:y,sub:p,mul:P,div:w,dist:E,sqrDist:S,len:T,sqrLen:I},Symbol.toStringTag,{value:"Module"}))},88669:(t,n,e)=>{function r(){return[0,0,0,0]}function o(t,n,e,r){return[t,n,e,r]}function i(t,n){return new Float64Array(t,n,4)}function u(){return o(1,1,1,1)}function a(){return o(1,0,0,0)}function s(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function f(){return o(0,0,0,1)}e.d(n,{a:()=>i,c:()=>r,f:()=>o});const l=u(),h=a(),d=s(),M=c(),m=f();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(t){return[t[0],t[1],t[2],t[3]]},fromValues:o,fromArray:function(t){const n=[0,0,0,0],e=Math.min(4,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n},createView:i,zeros:function(){return[0,0,0,0]},ones:u,unitX:a,unitY:s,unitZ:c,unitW:f,ZEROS:[0,0,0,0],ONES:l,UNIT_X:h,UNIT_Y:d,UNIT_Z:M,UNIT_W:m},Symbol.toStringTag,{value:"Module"}))},22807:(t,n,e)=>{e.d(n,{x:()=>o});var r=e(41213);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024},43090:(t,n,e)=>{function r(t){return 32+t.length}function o(t){if(!t)return 0;let n=32;for(const e in t)if(t.hasOwnProperty(e)){const o=t[e];switch(typeof o){case"string":n+=r(o);break;case"number":n+=16;break;case"boolean":n+=4}}return n}function i(t,n){return 32+t.length*n}var u;e.d(n,{Y8:()=>u,do:()=>i,f2:()=>o}),function(t){t[t.KILOBYTES=1024]="KILOBYTES",t[t.MEGABYTES=1048576]="MEGABYTES",t[t.GIGABYTES=1073741824]="GIGABYTES"}(u||(u={}))},22021:(t,n,e)=>{e.d(n,{BV:()=>l,Kt:()=>d,Sf:()=>i,Vl:()=>f,ZF:()=>h,fp:()=>s,jE:()=>g,oK:()=>m,oc:()=>_,t7:()=>c,uZ:()=>u,wt:()=>a});var r=e(17896);e(98766);const o=new Float32Array(1);function i(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function u(t,n,e){return Math.min(Math.max(t,n),e)}function a(t){return 0==(t&t-1)}function s(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function c(t,n,e){return t+(n-t)*e}function f(t){return t*Math.PI/180}function l(t){return 180*t/Math.PI}function h(t){return Math.acos(u(t,-1,1))}function d(t){return Math.asin(u(t,-1,1))}function M(t,n,e=1e-6){return!isNaN(t)&&!isNaN(n)&&(t>n?t-n:n-t)<=e}function m(t){return b(Math.max(-y,Math.min(t,y)))}function b(t){return o[0]=t,o[0]}function g(t,n){const e=(0,r.l)(t),o=d(t[2]/e),i=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,o,i),n}function _(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(M(n,1)&&M(e,1)&&M(r,1))}const y=b(34028234663852886e22)},41213:(t,n,e)=>{e.d(n,{Y:()=>o});const r=[];function o(t){r.push(t),1===r.length&&queueMicrotask((()=>{const t=r.slice();r.length=0;for(const n of t)n()}))}},78341:(t,n,e)=>{e.d(n,{JI:()=>s,Ue:()=>u,re:()=>a}),e(67676);var r=e(22807),o=e(17896),i=e(65617);function u(t){return t?{origin:(0,i.a)(t.origin),direction:(0,i.a)(t.direction)}:{origin:(0,i.c)(),direction:(0,i.c)()}}function a(t,n){const e=c.get();return e.origin=t,e.direction=n,e}function s(t,n,e){const r=(0,o.e)(t.direction,(0,o.b)(e,n,t.origin));return(0,o.a)(e,t.origin,(0,o.g)(e,t.direction,r)),e}e(12981);const c=new r.x((function(){return{origin:null,direction:null}}))},61277:(t,n,e)=>{e.d(n,{EU:()=>u});var r=e(22021),o=e(17896),i=e(65617);function u(t,n){const e=(0,o.e)(t,n)/((0,o.l)(t)*(0,o.l)(n));return-(0,r.ZF)(e)}(0,i.c)(),(0,i.c)()},12981:(t,n,e)=>{e.d(n,{MP:()=>M,WM:()=>d});var r=e(43090),o=e(41213),i=e(46521),u=e(13598),a=e(94961),s=e(97323),c=e(65617),f=e(88669);class l{constructor(t,n,e){this._itemByteSize=t,this._itemCreate=n,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(e/this._itemByteSize)}get(){0===this._itemsPtr&&(0,o.Y)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let n=0;n<this._itemsPerBuffer;++n)this._items.push(this._itemCreate(t,n*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=h){return new l(16,s.c,t)}static createVec3f64(t=h){return new l(24,c.b,t)}static createVec4f64(t=h){return new l(32,f.a,t)}static createMat3f64(t=h){return new l(72,i.a,t)}static createMat4f64(t=h){return new l(128,u.a,t)}static createQuatf64(t=h){return new l(32,a.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*r.Y8.KILOBYTES,d=(l.createVec2f64(),l.createVec3f64()),M=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},31412:(t,n,e)=>{e.r(n),e.d(n,{destroyContext:()=>P,dracoDecompressPointCloudData:()=>g,filterObbsForModifications:()=>_,filterObbsForModificationsSync:()=>A,initialize:()=>x,interpretObbModificationResults:()=>I,process:()=>b,setLegacySchema:()=>p,setModifications:()=>y,setModificationsSync:()=>S,test:()=>R});var r,o,i=e(70586),u=e(1533);!function(t){t[t.None=0]="None",t[t.Int16=1]="Int16",t[t.Int32=2]="Int32"}(r||(r={})),function(t){t[t.Replace=0]="Replace",t[t.Outside=1]="Outside",t[t.Inside=2]="Inside",t[t.Finished=3]="Finished"}(o||(o={}));var a=e(99880);function s(t){return(0,a.V)(`esri/libs/i3s/${t}`)}let c;var f,l,h,d,M,m;async function b(t){await x();const n=[t.geometryBuffer];return{result:T(t,n),transferList:n}}async function g(t){await x();const n=[t.geometryBuffer],{geometryBuffer:e}=t,r=e.byteLength,o=E._malloc(r),i=new Uint8Array(E.HEAPU8.buffer,o,r);i.set(new Uint8Array(e));const a=E.dracoDecompressPointCloudData(o,i.byteLength);if(E._free(o),a.error.length>0)throw`i3s.wasm: ${a.error}`;const s=a.featureIds?.length>0?(0,u.tP)(a.featureIds):null,c=(0,u.tP)(a.positions);return s&&n.push(s.buffer),n.push(c.buffer),{result:{positions:c,featureIds:s},transferList:n}}async function _(t){await x(),A(t);const n={buffer:t.buffer};return{result:n,transferList:[n.buffer]}}async function y(t){await x(),S(t)}async function p(t){await x(),E.setLegacySchema(t.context,t.jsonSchema)}function P(t){O(t)}let w,E;function S(t){const n=t.modifications,e=E._malloc(8*n.length),r=new Float64Array(E.HEAPU8.buffer,e,n.length);for(let t=0;t<n.length;++t)r[t]=n[t];E.setModifications(t.context,e,n.length,t.isGeodetic),E._free(e)}function T(t,n){if(!E)return null;const{context:e,localOrigin:o,globalTrafo:a,mbs:s,obb:c,elevationOffset:f,geometryBuffer:l,geometryDescriptor:h,indexToVertexProjector:d,vertexToRenderProjector:M}=t,m=E._malloc(l.byteLength),b=E._malloc(33*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(E.HEAPU8.buffer,m,l.byteLength);g.set(new Uint8Array(l));const _=new Float64Array(E.HEAPU8.buffer,b,33);v(_,o);let y=_.byteOffset+3*_.BYTES_PER_ELEMENT,p=new Float64Array(_.buffer,y);v(p,a),y+=16*_.BYTES_PER_ELEMENT,p=new Float64Array(_.buffer,y),v(p,s),y+=4*_.BYTES_PER_ELEMENT,(0,i.pC)(c)&&(p=new Float64Array(_.buffer,y),v(p,c.center),y+=3*_.BYTES_PER_ELEMENT,p=new Float64Array(_.buffer,y),v(p,c.halfSize),y+=3*_.BYTES_PER_ELEMENT,p=new Float64Array(_.buffer,y),v(p,c.quaternion));const P=h,w={isDraco:!1,isLegacy:!1,color:t.layouts.some((t=>t.some((t=>"color"===t.name)))),normal:t.needNormals&&t.layouts.some((t=>t.some((t=>"normalCompressed"===t.name)))),uv0:t.layouts.some((t=>t.some((t=>"uv0"===t.name)))),uvRegion:t.layouts.some((t=>t.some((t=>"uvRegion"===t.name)))),featureIndex:P.featureIndex},S=E.process(e,!!t.obb,m,g.byteLength,P,w,b,f,d,M,t.normalReferenceFrame);if(E._free(b),E._free(m),S.error.length>0)throw`i3s.wasm: ${S.error}`;if(S.discarded)return null;const T=S.componentOffsets.length>0?(0,u.tP)(S.componentOffsets):null,I=S.featureIds.length>0?(0,u.tP)(S.featureIds):null,A=(0,u.tP)(S.interleavedVertedData).buffer,O=S.indicesType===r.Int16?(0,u.tP)(new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2)):(0,u.tP)(new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4)),x=(0,u.tP)(S.positions),R=S.positionIndicesType===r.Int16?(0,u.tP)(new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2)):(0,u.tP)(new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4)),U={layout:t.layouts[0],interleavedVertexData:A,indices:O,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:x,indices:R}};return I&&n.push(I.buffer),T&&n.push(T.buffer),n.push(A),n.push(O.buffer),n.push(x.buffer),n.push(R.buffer),{componentOffsets:T,featureIds:I,transformedGeometry:U,obb:S.obb}}function I(t){return 0===t?l.Unmodified:1===t?l.PotentiallyModified:2===t?l.Culled:l.Unknown}function A(t){const{context:n,buffer:e}=t,r=E._malloc(e.byteLength),o=e.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(E.HEAPU8.buffer,r,o),u=new Float64Array(e);i.set(u),E.filterOBBs(n,r,o),u.set(i),E._free(r)}function O(t){E&&E.destroy(t)}function v(t,n){for(let e=0;e<n.length;++e)t[e]=n[e]}function x(){return E?Promise.resolve():(w||(w=(c||(c=new Promise((t=>e.e(6710).then(e.bind(e,26710)).then((t=>t.i)).then((({default:n})=>{const e=n({locateFile:s,onRuntimeInitialized:()=>t(e)});delete e.then})))).catch((t=>{throw t}))),c).then((t=>{E=t,w=null}))),w)}e(29268),(m=f||(f={}))[m.Unmodified=0]="Unmodified",m[m.Culled=1]="Culled",m[m.NotChecked=2]="NotChecked",function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(l||(l={})),function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"}(h||(h={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(d||(d={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(M||(M={}));const R={transform:T,destroy:O}}}]);