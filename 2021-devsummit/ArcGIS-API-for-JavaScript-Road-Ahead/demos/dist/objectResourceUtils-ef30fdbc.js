import { n as n$e, f4 as e$k, cs as n$f, Z as n$g, a6 as t$n, hM as r$p, hN as y$8, hO as x$7, hP as f$g, hQ as p$9, hR as a$j, hS as u$f, eL as r$q, eQ as c$f, eM as z$6, a1 as d$c, b as e$l, eG as u$g, hT as p$a, eN as _$9, hU as d$d, a0 as s$b, $ as o$l, t as t$q, eO as l$g, eH as j$9, hV as p$b, ad as a$k, hW as r$r, hX as f$h, hY as I$6, eR as q$5, hZ as q$6, h_ as F$5, r as r$s, eP as w$9, h$ as h$a, a_ as o$m, i0 as e$m, aY as e$n, i1 as h$b, b8 as c$g, i2 as c$h, i3 as f$i, o as t$s, j as e$q, i4 as L$5, fq as a$o, i as i$i, E as n$j, gJ as F$6, i5 as G$4, fi as t$u, i6 as c$i, aU as a$p, i7 as t$w, q as j$a, v as m$8, by as u$i, f3 as n$l, s as s$d, z as h$e, i8 as H$5, U as U$6, e3 as o$o, e2 as w$b, i9 as g$8, cI as V$4, ia as i$j, c_ as T$3, gW as r$y, u as u$k, bd as e$t, ib as e$u, ic as t$x, cL as g$a, id as j$b, ie as i$k } from './_virtual_index-634cbc09.js';
import { t as t$o, a as t$p, e as e$p, I as I$7, b as e$s } from './quat-d6d38a5d.js';
import { a as a$m, q as q$7, w as w$a, h as h$g, B as B$6 } from './aaBoundingBox-3b33bb9e.js';
import { p as p$c, x as x$8, u as u$h, a as a$n, A as A$9, n as u$j, r as c$j, s as r$x, t as e$r, F as F$7, g as g$9, h as h$f, L as L$6, O as O$6, E as E$8, I as I$8, w as w$c, v as v$7, e as A$a, M as M$6 } from './InterleavedLayout-3b4ff645.js';
import { a as a$l, y as y$9 } from './vec4-63828337.js';
import { t as t$t } from './vec3f32-0b2c4f69.js';
import { e as e$o, t as t$r, g as g$7, s as s$c, l as l$h, r as r$u } from './renderState-42545bc0.js';
import { n as n$i } from './Program-83739cf0.js';
import { r as r$t } from './mat4f32-8dd9e37a.js';
import { a as h$c, h as h$d, o as o$n, r as r$v, l as l$i, n as n$k, g as r$w } from './FramebufferObject-553bb493.js';
import { n as n$h, t as t$v } from './requestImageUtils-2d1fdaf4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$j(){return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r$o(e){return [e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n$d(e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m){return [e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t$m(e,r){return new Float64Array(e,r,16)}const a$i=e$j();Object.freeze({__proto__:null,create:e$j,clone:r$o,fromValues:n$d,createView:t$m,IDENTITY:a$i});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e$i=n$e.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$l(t,r,f){if(t.count!==r.count)return void e$i.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[4],c=f[5],i=f[6],a=f[8],p=f[9],y=f[10],B=f[12],m=f[13],h=f[14],l=t.typedBuffer,S=t.typedBufferStride,b=r.typedBuffer,v=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*S,r=e*v,f=b[r],o=b[r+1],M=b[r+2];l[t]=n*f+s*o+a*M+B,l[t+1]=u*f+c*o+p*M+m,l[t+2]=d*f+i*o+y*M+h;}}function r$n(t,r,f){if(t.count!==r.count)return void e$i.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*l,f=h[r],o=h[r+1],S=h[r+2];B[t]=n*f+s*o+a*S,B[t+1]=u*f+c*o+p*S,B[t+2]=d*f+i*o+y*S;}}function f$f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2];}}function o$k(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r;}}Object.freeze({__proto__:null,transformMat4:t$l,transformMat3:r$n,scale:f$f,shiftRight:o$k});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r$m{constructor(){this.id=e$k();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$c(){return [0,0,0,0]}function t$k(n){return [n[0],n[1],n[2],n[3]]}function r$l(n,t,r,e){return [n,t,r,e]}function e$h(t){const r=n$c(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u$e(n,t){return new Float64Array(n,t,4)}function a$h(){return n$c()}function o$j(){return r$l(1,1,1,1)}function s$a(){return r$l(1,0,0,0)}function c$e(){return r$l(0,1,0,0)}function i$h(){return r$l(0,0,1,0)}function f$e(){return r$l(0,0,0,1)}const _$8=a$h(),l$f=o$j(),N$3=s$a(),U$5=c$e(),I$5=i$h(),O$5=f$e();Object.freeze({__proto__:null,create:n$c,clone:t$k,fromValues:r$l,fromArray:e$h,createView:u$e,zeros:a$h,ones:o$j,unitX:s$a,unitY:c$e,unitZ:i$h,unitW:f$e,ZEROS:_$8,ONES:l$f,UNIT_X:N$3,UNIT_Y:U$5,UNIT_Z:I$5,UNIT_W:O$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$g{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function i$g(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e$g(n)}}function F$4(t,n=0){let r=0;for(let o=0;o<4;o++)r+=t[n+o]*H$4[o];return r}const H$4=[1/256,1/65536,1/16777216,1/4294967296];F$4(new Uint8ClampedArray([255,255,255,255]));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$g{constructor(i,r,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=r,this.indices=a,this.position=c,this.center=n$g(),i$g(i.length>=1),i$g(a.length%this._numIndexPerPrimitive==0),i$g(a.length>=i.length*this._numIndexPerPrimitive),i$g(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b$8.clear(),b$8.push(l),this.bbMin=t$n(o[l],o[l+1],o[l+2]),this.bbMax=r$p(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b$8.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}y$8(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$8.length;++t){l=b$8.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$8.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(x$7(this.bbMin,this.bbMax)>1){const i=y$8(n$g(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,e=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[n],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[n+i];const t=h[a],s=h[a+1],e=h[a+2];t<c&&(c=t),s<o&&(o=s),e<M&&(M=e);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),e[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=e[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$g(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$8.prune();}}const b$8=new n$f({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$f{constructor(t,s,i){this.itemByteSize=t,this.itemCreate=s,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(i/this.itemByteSize),this.tickHandle=f$g.before((()=>this.reset()));}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=p$9(this.tickHandle)),this.itemsPtr=0,this.items=p$9(this.items),this.buffers=p$9(this.buffers);}get(){0===this.itemsPtr&&f$g((()=>{}));const t=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=t;){const t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let e=0;e<this.itemsPerBuffer;++e)this.items.push(this.itemCreate(t,e*this.itemByteSize));this.buffers.push(t);}return this.items[this.itemsPtr++]}reset(){const t=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>t;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0;}static createVec2f64(t=c$d){return new a$f(16,a$j,t)}static createVec3f64(t=c$d){return new a$f(24,u$f,t)}static createVec4f64(t=c$d){return new a$f(32,u$e,t)}static createMat3f64(t=c$d){return new a$f(72,t$o,t)}static createMat4f64(t=c$d){return new a$f(128,t$m,t)}static createQuatf64(t=c$d){return new a$f(32,t$p,t)}get test(){return {size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const c$d=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
a$f.createVec2f64();const c$c=a$f.createVec3f64(),r$k=a$f.createVec4f64();a$f.createMat3f64();const f$d=a$f.createMat4f64();a$f.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$9{constructor(t){this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=f$g.before((()=>this.reset())),this.grow();}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=p$9(this.tickHandle)),this.items=p$9(this.items);}get(){return 0===this.itemsPtr&&f$g((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*e$f);this.items.length=Math.min(t,this.items.length),this.itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this.items.length,e$f));t++)this.items.push(this.allocator());}}const e$f=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function p$8(t){return t?{origin:r$p(t.origin),vector:r$p(t.vector)}:{origin:n$g(),vector:n$g()}}function v$6(t,r){const n=S$6.get();return n.origin=t,n.vector=r,n}function l$e(t,r=p$8()){return m$7(t.origin,t.vector,r)}function m$7(t,r,n=p$8()){return r$q(n.origin,t),r$q(n.vector,r),n}function b$7(t,r,n=p$8()){return r$q(n.origin,t),c$f(n.vector,r,t),n}function h$9(r,n){const e=c$f(c$c.get(),n,r.origin),s=z$6(r.vector,e),a=z$6(r.vector,r.vector),u=e$l(s/a,0,1),f=c$f(c$c.get(),d$c(c$c.get(),r.vector,u),e);return z$6(f,f)}function d$b(t,r){return Math.sqrt(h$9(t,r))}function j$8(t,r,n){return A$8(t,r,0,1,n)}function M$5(t,r,n){return u$g(n,t.origin,d$c(n,t.vector,r))}function A$8(r,n,e,u,f){const{vector:p,origin:v}=r,l=c$f(c$c.get(),n,v),m=z$6(p,l)/p$a(p);return d$c(f,p,e$l(m,e,u)),u$g(f,f,r.origin)}function B$5(t,r){if(_$7(t,v$6(r.origin,r.direction),!1,k$5)){const{tA:r,pB:n,distance2:e}=k$5;if(r>=0&&r<=1)return e;if(r<0)return x$7(t.origin,n);if(r>1)return x$7(u$g(c$c.get(),t.origin,t.vector),n)}return null}function w$8(t,r,n){return !!_$7(t,r,!0,k$5)&&(r$q(n,k$5.pA),!0)}function P$8(t,r){return _$7(t,r,!0,k$5)?k$5.distance2:null}function _$7(r,n,e,o){const i=1e-6,c=r.origin,a=u$g(c$c.get(),c,r.vector),f=n.origin,p=u$g(c$c.get(),f,n.vector),v=c$c.get(),l=c$c.get();if(v[0]=c[0]-f[0],v[1]=c[1]-f[1],v[2]=c[2]-f[2],l[0]=p[0]-f[0],l[1]=p[1]-f[1],l[2]=p[2]-f[2],Math.abs(l[0])<i&&Math.abs(l[1])<i&&Math.abs(l[2])<i)return !1;const m=c$c.get();if(m[0]=a[0]-c[0],m[1]=a[1]-c[1],m[2]=a[2]-c[2],Math.abs(m[0])<i&&Math.abs(m[1])<i&&Math.abs(m[2])<i)return !1;const b=v[0]*l[0]+v[1]*l[1]+v[2]*l[2],h=l[0]*m[0]+l[1]*m[1]+l[2]*m[2],d=v[0]*m[0]+v[1]*m[1]+v[2]*m[2],j=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],M=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*j-h*h;if(Math.abs(M)<i)return !1;let A=(b*h-d*j)/M,B=(b+h*A)/j;e&&(A=e$l(A,0,1),B=e$l(B,0,1));const w=c$c.get(),P=c$c.get();return w[0]=c[0]+A*m[0],w[1]=c[1]+A*m[1],w[2]=c[2]+A*m[2],P[0]=f[0]+B*l[0],P[1]=f[1]+B*l[1],P[2]=f[2]+B*l[2],o.tA=A,o.tB=B,o.pA=w,o.pB=P,o.distance2=x$7(w,P),!0}const k$5={tA:0,tB:0,pA:n$g(),pB:n$g(),distance2:0},S$6=new s$9((()=>({origin:null,vector:null})));Object.freeze({__proto__:null,create:p$8,wrap:v$6,copy:l$e,fromValues:m$7,fromPoints:b$7,distance2:h$9,distance:d$b,projectPoint:j$8,pointAt:M$5,projectPointClamp:A$8,closestRayDistance2:B$5,closestLineSegmentPoint:w$8,closestLineSegmentDistance2:P$8});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function d$a(e){return e?{p0:r$p(e.p0),p1:r$p(e.p1),p2:r$p(e.p2)}:{p0:n$g(),p1:n$g(),p2:n$g()}}function j$7(t,n,e){const r=O$4.get();return r.p0=t,r.p1=n,r.p2=e,r}function v$5(t,n=d$a()){return w$7(t.p0,t.p1,t.p2,n)}function w$7(t,n,r,s=d$a()){return r$q(s.p0,t),r$q(s.p1,n),r$q(s.p2,r),s}function b$6(t,n){const e=t.p0,p=t.p1,o=t.p2,c=c$f(c$c.get(),p,e),u=c$f(c$c.get(),o,p),m=c$f(c$c.get(),e,o),l=c$f(c$c.get(),n,e),d=c$f(c$c.get(),n,p),j=c$f(c$c.get(),n,o),v=_$9(c,c,m),w=z$6(_$9(c$c.get(),c,v),l),b=z$6(_$9(c$c.get(),u,v),d),_=z$6(_$9(c$c.get(),m,v),j);if(w>0&&b>0&&_>0){const t=z$6(v,l);return t*t/z$6(v,v)}const h=h$9(m$7(e,c,M$4.get()),n),k=h$9(m$7(p,u,M$4.get()),n),y=h$9(m$7(o,m,M$4.get()),n);return Math.min(h,k,y)}function _$6(t,n,e){const r=1e-5,{direction:s,origin:a}=n,{p0:c,p1:i,p2:u}=t,f=i[0]-c[0],g=i[1]-c[1],m=i[2]-c[2],l=u[0]-c[0],d=u[1]-c[1],j=u[2]-c[2],v=s[1]*j-d*s[2],w=s[2]*l-j*s[0],b=s[0]*d-l*s[1],_=f*v+g*w+m*b;if(_>-r&&_<r)return !1;const h=1/_,k=a[0]-c[0],y=a[1]-c[1],M=a[2]-c[2],O=h*(k*v+y*w+M*b);if(O<0||O>1)return !1;const P=y*m-g*M,S=M*f-m*k,q=k*g-f*y,x=h*(s[0]*P+s[1]*S+s[2]*q);if(x<0||O+x>1)return !1;if(e){d$c(e,s,h*(l*P+d*S+j*q)),u$g(e,a,e);}return !0}function h$8(t,n,e){const r=d$d(t,n),s=d$d(n,e),a=d$d(e,t),p=(r+s+a)/2,o=p*(p-r)*(p-s)*(p-a);return o<=0?0:Math.sqrt(o)}function k$4(t){return h$8(t.p0,t.p1,t.p2)}function y$7(t,n,e){return c$f(P$7,n,t),c$f(S$5,e,t),s$b(_$9(P$7,P$7,S$5))/2}const M$4=new s$9(p$8),O$4=new s$9((()=>({p0:null,p1:null,p2:null}))),P$7=n$g(),S$5=n$g();Object.freeze({__proto__:null,create:d$a,wrap:j$7,copy:v$5,fromValues:w$7,distance2:b$6,intersectRay:_$6,areaPoints2d:h$8,area2d:k$4,areaPoints3d:y$7});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let c$b=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f$c=new Uint16Array([0]),a$e=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function i$f(t){if(1===t)return f$c;if(t<a$e.length)return new Uint16Array(a$e.buffer,0,t);if(t>c$b.length){const n=Math.max(2*c$b.length,t);c$b=new Uint32Array(n);for(let t=0;t<c$b.length;t++)c$b[t]=t;}return new Uint32Array(c$b.buffer,0,t)}function l$d(t,o,c){if(!t)return !1;const{size:f,data:a}=t;o$l(c,0,0,0),o$l(y$6,0,0,0);let i=0,l=0;for(let u=0;u<o.length-2;u+=3){const t=o[u+0]*f,h=o[u+1]*f,A=o[u+2]*f;o$l(g$6,a[t+0],a[t+1],a[t+2]),o$l(m$6,a[h+0],a[h+1],a[h+2]),o$l(w$6,a[A+0],a[A+1],a[A+2]);const U=y$7(g$6,m$6,w$6);U?(u$g(g$6,g$6,m$6),u$g(g$6,g$6,w$6),d$c(g$6,g$6,1/3*U),u$g(c,c,g$6),i+=U):(u$g(y$6,y$6,g$6),u$g(y$6,y$6,m$6),u$g(y$6,y$6,w$6),l+=3);}return (0!==l||0!==i)&&(0!==i?(d$c(c,c,1/i),!0):0!==l&&(d$c(c,y$6,1/l),!0))}function u$d(t,r,o){if(!t||!r)return !1;const{size:s,data:c}=t;o$l(o,0,0,0);let f=-1,a=0;for(let n=0;n<r.length;n++){const t=r[n]*s;f!==t&&(o[0]+=c[t+0],o[1]+=c[t+1],o[2]+=c[t+2],a++),f=t;}return a>1&&d$c(o,o,1/a),a>0}const g$6=n$g(),m$6=n$g(),w$6=n$g(),y$6=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class u$c extends r$m{constructor(t,e=[],i=0,n=-1){super(),this._primitiveType=i,this.edgeIndicesLength=n,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,r]of t)r&&this._vertexAttributes.set(s,{...r});if(null==e||0===e.length){const t=h$7(this._vertexAttributes),e=i$f(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[s,r]of e)r&&(this._indices.set(s,g$5(r)),"position"===s&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength));}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$q(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return l$d(i,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return u$d(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const e=0===this.primitiveType?3:1;i$g(t.length%e==0,"Indexing error: "+t.length+" not divisible by "+e);const r=i$f(t.length/e),o=this.vertexAttributes.get("position");return new a$g(r,e,t,o)}}function h$7(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function g$5(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function c$a(t,n,r){const a=z$6(t,n)/z$6(t,t);return d$c(r,t,a)}function i$e(t,n){return z$6(t,n)/s$b(t)}function u$b(n,s){const a=z$6(n,s)/(s$b(n)*s$b(s));return -l$g(a)}function f$b(n,r,s){j$9(p$7,n),j$9(m$5,r);const c=z$6(p$7,m$5),i=l$g(c),u=_$9(p$7,p$7,m$5);return z$6(u,s)<0?2*Math.PI-i:i}const p$7=n$g(),m$5=n$g();Object.freeze({__proto__:null,projectPoint:c$a,projectPointSignedLength:i$e,angle:u$b,angleAroundAxis:f$b});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$c(r){return r?{origin:r$p(r.origin),direction:r$p(r.direction)}:{origin:n$g(),direction:n$g()}}function j$6(r,n){const e=E$7.get();return e.origin=r,e.direction=n,e}function R$5(r,n=l$c()){return b$5(r.origin,r.direction,n)}function S$4(r,n,e=l$c()){return r$q(e.origin,r),c$f(e.direction,n,r),e}function b$5(r,n,e=l$c()){return r$q(e.origin,r),r$q(e.direction,n),e}function v$4(r,e,o=l$c()){return y$5(r,r.screenToRender(e,p$b(c$c.get())),o)}function y$5(e,o,t=l$c()){const c=p$b(a$k(c$c.get(),o));if(c[2]=0,!e.unprojectFromRenderScreen(c,t.origin))return null;const s=p$b(a$k(c$c.get(),o));s[2]=1;const u=e.unprojectFromRenderScreen(s,c$c.get());return t$q(u)?null:(c$f(t.direction,u,t.origin),t)}function w$5(r,e,o=l$c()){return _$5(r,r.screenToRender(e,p$b(c$c.get())),o)}function _$5(n,e,o=l$c()){r$q(o.origin,n.eye);const s=o$l(c$c.get(),e[0],e[1],1),u=n.unprojectFromRenderScreen(s,c$c.get());return t$q(u)?null:(c$f(o.direction,u,o.origin),o)}function k$3(r,n){const e=_$9(c$c.get(),j$9(c$c.get(),r.direction),c$f(c$c.get(),n,r.origin));return z$6(e,e)}function F$3(r,n){return Math.sqrt(k$3(r,n))}function h$6(r,n,e){const o=z$6(r.direction,c$f(e,n,r.origin));return u$g(e,r.origin,d$c(e,r.direction,o)),e}function A$7(){return {origin:null,direction:null}}const E$7=new s$9(A$7);Object.freeze({__proto__:null,create:l$c,wrap:j$6,copy:R$5,fromPoints:S$4,fromValues:b$5,fromScreen:v$4,fromRender:y$5,fromScreenAtEye:w$5,fromRenderAtEye:_$5,distance2:k$3,distance:F$3,closestPoint:h$6});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const k$2=n$e.getLogger("esri.views.3d.support.geometryUtils.sphere");function q$4(){return n$c()}function C$4(t,r=q$4()){return a$l(r,t)}function O$3(t,r){return r$l(t[0],t[1],t[2],r)}function P$6(t){return t}function U$4(t){t[0]=t[1]=t[2]=t[3]=0;}function z$5(t){return t}function E$6(t){return Array.isArray(t)?t[3]:t}function L$4(t){return Array.isArray(t)?t:tt}function T$2(t,r,e,n){return r$l(t,r,e,n)}function V$3(t,r,e){return t!==e&&r$q(e,t),e[3]=t[3]+r,e}function B$4(t,r,e){return k$2.error("sphere.setExtent is not yet supported"),t===e?e:C$4(t,e)}function D$6(r,e,n){if(t$q(e))return !1;const s=c$f(c$c.get(),e.origin,L$4(r)),u=z$6(e.direction,e.direction),f=2*z$6(e.direction,s),m=f*f-4*u*(z$6(s,s)-r[3]*r[3]);if(m<0)return !1;const p=Math.sqrt(m);let g=(-f-p)/(2*u);const l=(-f+p)/(2*u);return (g<0||l<g&&l>0)&&(g=l),!(g<0)&&(n&&u$g(n,e.origin,d$c(c$c.get(),e.direction,g)),!0)}function F$2(t,r,e,n){return D$6(t,w$5(r,e,$$2),n)}function G$3(t,r){return D$6(t,r,null)}function H$3(t,r,e){if(D$6(t,r,e))return e;const n=I$4(t,r,c$c.get());return u$g(e,r.origin,d$c(c$c.get(),r.direction,q$5(r.origin,n)/s$b(r.direction))),e}function I$4(t,r,e){const n=c$c.get(),s=f$d.get();_$9(n,r.origin,r.direction);const o=E$6(t);_$9(e,n,r.origin),d$c(e,e,1/s$b(e)*o);const i=Q$3(t,r.origin),a=u$b(r.origin,e);return r$r(s),f$h(s,s,a+i,n),I$6(e,e,s),e}function J$4(t,r,e){return D$6(t,r,e)?e:(h$6(r,L$4(t),e),K$3(t,e,e))}function K$3(t,r,e){const n=c$f(c$c.get(),r,L$4(t)),s=d$c(c$c.get(),n,t[3]/s$b(n));return u$g(e,s,L$4(t))}function N$2(t,r){const e=c$f(c$c.get(),r,L$4(t)),n=p$a(e),s=t[3]*t[3];return Math.sqrt(Math.abs(n-s))}function Q$3(t,r){const n=c$f(c$c.get(),r,L$4(t)),s=s$b(n),i=E$6(t),a=i+Math.abs(i-s);return l$g(i/a)}const W$1=n$g();function X$2(t,r,e,n){const s=c$f(W$1,r,L$4(t));switch(e){case 0:{const t=q$6(s,W$1)[2];return o$l(n,-Math.sin(t),Math.cos(t),0)}case 1:{const t=q$6(s,W$1),r=t[1],e=t[2],o=Math.sin(r);return o$l(n,-o*Math.cos(e),-o*Math.sin(e),Math.cos(r))}case 2:return j$9(n,s);default:return}}function Y(t,r){const e=c$f(rt,r,L$4(t));return s$b(e)-t[3]}function Z$1(t,r,e,n){const s=Y(t,r),o=X$2(t,r,2,rt),i=d$c(rt,o,e-s);return u$g(n,r,i),n}const $$2=l$c(),tt=n$g(),rt=n$g();Object.freeze(tt);Object.freeze({__proto__:null,create:q$4,copy:C$4,fromCenterAndRadius:O$3,wrap:P$6,clear:U$4,fromRadius:z$5,getRadius:E$6,getCenter:L$4,fromValues:T$2,elevate:V$3,setExtent:B$4,intersectRay:D$6,intersectScreen:F$2,intersectsRay:G$3,intersectRayClosestSilhouette:H$3,closestPointOnSilhouette:I$4,closestPoint:J$4,projectPoint:K$3,distanceToSilhouette:N$2,angleToSilhouette:Q$3,axisAt:X$2,altitudeAt:Y,setAltitudeAt:Z$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$b(t=T$1){return [t[0],t[1],t[2],t[3]]}function d$9(t,n,r,e){return h$5(t,n,r,e,r$k.get())}function y$4(t,n=l$b()){return h$5(t[0],t[1],t[2],t[3],n)}function h$5(t,n,r,e,o=l$b()){return o[0]=t,o[1]=n,o[2]=r,o[3]=e,o}function j$5(t,n,r=l$b()){return r$q(r,t),r[3]=n,r}function P$5(t,n,r=l$b()){r$q(r,n);const s=z$6(n,n);return Math.abs(s-1)>1e-5&&s>1e-12&&d$c(r,r,1/Math.sqrt(s)),I$3(r,t,r),r}function M$3(t,n,r,e=l$b()){return w$4(c$f(c$c.get(),t,n),c$f(c$c.get(),r,n),t,e)}function b$4(t,n){return v$3(t,n,0,1,2)}function v$3(t,n,r,e,i){if(t.count<3)return !1;t.getVec(r,V$2);let a=e,f=!1;for(;a<t.count-1&&!f;)t.getVec(a,O$2),a++,f=!F$5(V$2,O$2);if(!f)return !1;for(a=Math.max(a,i),f=!1;a<t.count&&!f;)t.getVec(a,S$3),a++,c$f(x$6,V$2,O$2),j$9(x$6,x$6),c$f(F$1,O$2,S$3),j$9(F$1,F$1),f=!F$5(V$2,S$3)&&!F$5(O$2,S$3)&&Math.abs(z$6(x$6,F$1))<A$6;return f?(M$3(V$2,O$2,S$3,n),!0):(0!==r||1!==e||2!==i)&&v$3(t,n,0,1,2)}const A$6=.99619469809,V$2=n$g(),O$2=n$g(),S$3=n$g(),x$6=n$g(),F$1=n$g();function I$3(t,n,r){return t!==r&&y$4(t,r),r[3]=-z$6(Q$2(r),n),r}function _$4(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function w$4(t,n,r,e=l$b()){return P$5(r,_$9(c$c.get(),n,t),e)}function B$3(n,r,e){return !!r$s(r)&&K$2(n,r.origin,r.direction,!0,!1,e)}function U$3(t,n,r){return K$2(t,n.origin,n.vector,!1,!1,r)}function k$1(t,n,r){return K$2(t,n.origin,n.vector,!1,!0,r)}function q$3(t,n){return J$3(t,L$4(n))-n[3]>=0}function z$4(t,n){return J$3(t,L$4(n))+n[3]<0}function L$3(t,n){return J$3(t,n)>=0}function N$1(t,n){return J$3(t,n)<0}function C$3(t,n){const r=n[0],e=n[1],o=n[2],i=n[3],s=n[4],c=n[5];return t[0]*(t[0]>0?r:i)+t[1]*(t[1]>0?e:s)+t[2]*(t[2]>0?o:c)+t[3]>=0}function D$5(t,n){const r=z$6(Q$2(t),n.ray.direction),e=-J$3(t,n.ray.origin);if(e<0&&r>=0)return !1;if(r>-1e-6&&r<1e-6)return e>0;if((e<0||r<0)&&!(e<0&&r<0))return !0;const i=e/r;return r>0?i<n.c1&&(n.c1=i):i>n.c0&&(n.c0=i),n.c0<=n.c1}function R$4(t,n){const r=z$6(Q$2(t),n.ray.direction),e=-J$3(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return e>0;const i=e/r;return r>0?i<n.c1&&(n.c1=i):i>n.c0&&(n.c0=i),n.c0<=n.c1}function E$5(t,n,r){const e=d$c(c$c.get(),Q$2(t),-t[3]),o=G$2(t,c$f(c$c.get(),n,e),c$c.get());return u$g(r,o,e),r}function G$2(t,n,r){const e=d$c(c$c.get(),Q$2(t),z$6(Q$2(t),n));return c$f(r,n,e),r}function H$2(t,n){return Math.abs(J$3(t,n))}function J$3(t,n){return z$6(Q$2(t),n)+t[3]}function K$2(t,r,e,s,c,u){const a=z$6(Q$2(t),e);if(0===a)return !1;let m=-(z$6(Q$2(t),r)+t[3])/a;return c&&(m=s?Math.max(0,m):e$l(m,0,1)),!(m<0||!s&&m>1)&&(u$g(u,r,d$c(u,e,m)),!0)}function Q$2(t){return t}const T$1=[0,0,1,0];Object.freeze({__proto__:null,create:l$b,wrap:d$9,copy:y$4,fromValues:h$5,fromNormalAndOffset:j$5,fromPositionAndNormal:P$5,fromPoints:M$3,fromManyPoints:b$4,fromManyPointsSampleAt:v$3,setOffsetFromPoint:I$3,negate:_$4,fromVectorsAndPoint:w$4,intersectRay:B$3,intersectLineSegment:U$3,intersectLineSegmentClamp:k$1,isSphereFullyInside:q$3,isSphereFullyOutside:z$4,isPointInside:L$3,isPointOutside:N$1,isAABBFullyInside:C$3,clip:D$5,clipInfinite:R$4,projectPoint:E$5,projectVector:G$2,distance:H$2,signedDistance:J$3,normal:Q$2,UP:T$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const R$3=n$e.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class z$3{constructor(){this.plane=l$b(),this.origin=n$g(),this.basis1=n$g(),this.basis2=n$g();}}function G$1(s=Ps){return {plane:l$b(s.plane),origin:r$p(s.origin),basis1:r$p(s.basis1),basis2:r$p(s.basis2)}}function W(s,i,n){const t=ys.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=d$9(0,0,0,0),K$1(t),t}function D$4(s,i=G$1()){return J$2(s.origin,s.basis1,s.basis2,i)}function H$1(s,i){r$q(i.origin,s.origin),r$q(i.basis1,s.basis1),r$q(i.basis2,s.basis2),y$4(s.plane,i.plane);}function J$2(s,i,n,t=G$1()){return r$q(t.origin,s),r$q(t.basis1,i),r$q(t.basis2,n),K$1(t),vs(t,"fromValues()"),t}function K$1(s){w$4(s.basis2,s.basis1,s.origin,s.plane);}function Q$1(s,i,n){s!==n&&D$4(s,n);const t=d$c(c$c.get(),ms(s),i);return u$g(n.origin,n.origin,t),n.plane[3]-=i,n}function X$1(s,i,n){return Z(i,n),Q$1(n,gs(s,s.origin),n),n}function Z(s,i=G$1()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return o$l(i.origin,s[0]+n,s[1]+t,0),o$l(i.basis1,n,0,0),o$l(i.basis2,0,t,0),h$5(0,0,1,0,i.plane),i}function $$1(s,i,n){return !!B$3(s.plane,i,n)&&hs(s,n)}function ss(s,i,n){if($$1(s,i,n))return n;const t=is(s,i,c$c.get());return u$g(n,i.origin,d$c(c$c.get(),i.direction,q$5(i.origin,t)/s$b(i.direction))),n}function is(s,n,t){const a=Ns.get();ws(s,n,a,Ns.get());let r=Number.POSITIVE_INFINITY;for(const e of As){const c=Is(s,e,Ms.get()),u=c$c.get();if(U$3(a,c,u)){const s=w$9(c$c.get(),n.origin,u),a=Math.abs(l$g(z$6(n.direction,s)));a<r&&(r=a,r$q(t,u));}}return r===Number.POSITIVE_INFINITY?ns(s,n,t):t}function ns(s,i,n){if($$1(s,i,n))return n;const t=Ns.get(),a=Ns.get();ws(s,i,t,a);let r=Number.POSITIVE_INFINITY;for(const e of As){const c=Is(s,e,Ms.get()),u=c$c.get();if(k$1(t,c,u)){const s=k$3(i,u);if(!L$3(a,u))continue;s<r&&(r=s,r$q(n,u));}}return os(s,i.origin)<r&&ts(s,i.origin,n),n}function ts(s,i,n){const t=E$5(s.plane,i,c$c.get()),a=A$8(js(s,s.basis1),t,-1,1,c$c.get()),o=A$8(js(s,s.basis2),t,-1,1,c$c.get());return c$f(n,u$g(c$c.get(),a,o),s.origin),n}function as(s,i,n){const{origin:t,basis1:a,basis2:o}=s,r=c$f(c$c.get(),i,t),e=i$e(a,r),u=i$e(o,r),g=i$e(ms(s),r);return o$l(n,e,u,g)}function os(s,i){const n=as(s,i,c$c.get()),{basis1:t,basis2:a}=s,o=s$b(t),r=s$b(a),e=Math.max(Math.abs(n[0])-o,0),c=Math.max(Math.abs(n[1])-r,0),u=n[2];return e*e+c*c+u*u}function rs(s,i){return Math.sqrt(os(s,i))}function es(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of As){const a=Is(s,t,Ms.get()),o=h$9(a,i);o>n&&(n=o);}return Math.sqrt(n)}function cs(s,i){return L$3(s.plane,i)&&hs(s,i)}function us(s,i,n,t){return ds(s,n,t)}function gs(s,i){const n=-s.plane[3];return i$e(ms(s),i)-n}function bs(s,i,n,t){const a=gs(s,i),o=d$c(Ts,ms(s),n-a);return u$g(t,i,o),t}function fs(s,i){return F$5(s.basis1,i.basis1)&&F$5(s.basis2,i.basis2)&&F$5(s.origin,i.origin)}function ls(s,i,n){return s!==n&&D$4(s,n),h$a(Ss,i),o$m(Ss,Ss),I$6(n.basis1,s.basis1,Ss),I$6(n.basis2,s.basis2,Ss),I$6(Q$2(n.plane),Q$2(s.plane),Ss),I$6(n.origin,s.origin,i),I$3(n.plane,n.origin,n.plane),n}function ps(s,i,n,t){return s!==t&&D$4(s,t),f$h(_s,r$r(_s),i,n),I$6(t.basis1,s.basis1,_s),I$6(t.basis2,s.basis2,_s),K$1(t),t}function ms(s){return Q$2(s.plane)}function ds(s,i,n){switch(i){case 0:r$q(n,s.basis1),j$9(n,n);break;case 1:r$q(n,s.basis2),j$9(n,n);break;case 2:r$q(n,ms(s));}return n}function hs(s,i){const n=c$f(c$c.get(),i,s.origin),t=p$a(s.basis1),a=p$a(s.basis2),o=z$6(s.basis1,n),r=z$6(s.basis2,n);return -o-t<0&&o-t<0&&-r-a<0&&r-a<0}function js(s,i){const n=Ms.get();return r$q(n.origin,s.origin),r$q(n.vector,i),n}function Is(s,i,n){const{basis1:t,basis2:a,origin:o}=s,c=d$c(c$c.get(),t,i.origin[0]),u=d$c(c$c.get(),a,i.origin[1]);u$g(n.origin,c,u),u$g(n.origin,n.origin,o);const g=d$c(c$c.get(),t,i.direction[0]),b=d$c(c$c.get(),a,i.direction[1]);return d$c(n.vector,u$g(g,g,b),2),n}function vs(s,i){Math.abs(z$6(s.basis1,s.basis2)/(s$b(s.basis1)*s$b(s.basis2)))>1e-6&&R$3.warn(i,"Provided basis vectors are not perpendicular"),Math.abs(z$6(s.basis1,ms(s)))>1e-6&&R$3.warn(i,"Basis vectors and plane normal are not perpendicular"),Math.abs(-z$6(ms(s),s.origin)-s.plane[3])>1e-6&&R$3.warn(i,"Plane offset is not consistent with plane origin");}function ws(s,i,n,t){const a=ms(s);w$4(a,i.direction,i.origin,n),w$4(Q$2(n),a,i.origin,t);}const Ps={plane:l$b(),origin:t$n(0,0,0),basis1:t$n(1,0,0),basis2:t$n(0,1,0)},Ns=new s$9(l$b),Ms=new s$9(p$8),Ts=n$g(),ys=new s$9((()=>({origin:null,basis1:null,basis2:null,plane:null}))),As=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Ss=e$j(),_s=e$j();Object.freeze({__proto__:null,BoundedPlaneClass:z$3,create:G$1,wrap:W,copy:D$4,copyWithoutVerify:H$1,fromValues:J$2,updateUnboundedPlane:K$1,elevate:Q$1,setExtent:X$1,fromAABoundingRect:Z,intersectRay:$$1,intersectRayClosestSilhouette:ss,closestPointOnSilhouette:is,closestPoint:ns,projectPoint:ts,projectPointLocal:as,distance2:os,distance:rs,distanceToSilhouette:es,extrusionContainsPoint:cs,axisAt:us,altitudeAt:gs,setAltitudeAt:bs,equals:fs,transform:ls,rotate:ps,normal:ms,UP:Ps});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$e(r=g$4){return [r[0],r[1],r[2],r[3]]}function a$d(r,n,t,o){return f$a(r,n,t,o,r$k.get())}function u$a(r,n){return f$a(r[0],r[1],r[2],n,r$k.get())}function c$9(r,n=e$e()){return f$a(r[0],r[1],r[2],r[3],n)}function f$a(r,n,t,s,o=e$e()){return o[0]=r,o[1]=n,o[2]=t,o[3]=s,o}function i$d(n,t,s=e$e()){return r$q(s,n),s[3]=t,s}function p$6(r,s,a=e$e()){return _$9(a,r,s),j$9(a,a),a[3]=u$b(r,s),a}function m$4(r){return r}const g$4=[0,0,1,0];Object.freeze({__proto__:null,create:e$e,wrap:a$d,wrapAxisAngle:u$a,copy:c$9,fromValues:f$a,fromAxisAndAngle:i$d,fromPoints:p$6,axis:m$4,UP:g$4});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$9(r){return r?{ray:l$c(r.ray),c0:r.c0,c1:r.c1}:{ray:l$c(),c0:0,c1:Number.MAX_VALUE}}function f$9(r,t,c){const n=_$3.get();return n.ray=r,n.c0=t,n.c1=c,n}function m$3(r,t=u$9()){return y$3(r.ray,r.c0,r.c1,t)}function y$3(r,t,c,n=u$9()){return R$5(r,n.ray),n.c0=t,n.c1=c,n}function g$3(r,t=u$9()){return R$5(r,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function p$5(t,c=u$9()){return j$4(t,j$9(c$c.get(),t.vector),c)}function j$4(r,c,n=u$9()){const a=s$b(r.vector);return b$5(r.origin,c,n.ray),n.c0=0,n.c1=a,n}function b$3(r,t){return A$5(r,r.c0,t)}function l$a(r,t){return A$5(r,r.c1,t)}function A$5(r,t,a){return u$g(a,r.ray.origin,d$c(a,r.ray.direction,t))}const _$3=new s$9((()=>({c0:0,c1:0,ray:null})));Object.freeze({__proto__:null,create:u$9,wrap:f$9,copy:m$3,fromValues:y$3,fromRay:g$3,fromLineSegment:p$5,fromLineSegmentAndDirection:j$4,getStart:b$3,getEnd:l$a,getAt:A$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function P$4(t){return t?[l$b(t[0]),l$b(t[1]),l$b(t[2]),l$b(t[3]),l$b(t[4]),l$b(t[5])]:[l$b(),l$b(),l$b(),l$b(),l$b(),l$b()]}function _$2(){return [n$g(),n$g(),n$g(),n$g(),n$g(),n$g(),n$g(),n$g()]}function d$8(t,r=P$4()){for(let e=0;e<6;e++)y$4(t[e],r[e]);}function h$4(t,n,i,c=L$2){const u=e$m(f$d.get(),n,t);h$a(u,u);for(let e=0;e<8;++e){const t=y$9(r$k.get(),C$2[e],u);o$l(c[e],t[0]/t[3],t[1]/t[3],t[2]/t[3]);}R$2(i,c);}function R$2(t,r){M$3(r[4],r[0],r[3],t[0]),M$3(r[1],r[5],r[6],t[1]),M$3(r[4],r[5],r[1],t[2]),M$3(r[3],r[2],r[6],t[3]),M$3(r[0],r[1],r[2],t[4]),M$3(r[5],r[4],r[7],t[5]);}function S$2(t,r){for(let e=0;e<6;e++)if(q$3(t[e],r))return !1;return !0}function w$3(t,r){return q$2(t,g$3(r,I$2.get()))}function x$5(t,r){for(let e=0;e<6;e++){const s=t[e];if(!R$4(s,r))return !1}return !0}function A$4(t,r,e){return q$2(t,j$4(r,e,I$2.get()))}function B$2(t,r){for(let e=0;e<6;e++){if(J$3(t[e],r)>0)return !1}return !0}function O$1(t,r){for(let e=0;e<6;e++)if(C$3(t[e],r))return !1;return !0}function q$2(t,r){for(let e=0;e<6;e++)if(!D$5(t[e],r))return !1;return !0}const z$2={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},C$2=[r$l(-1,-1,-1,1),r$l(1,-1,-1,1),r$l(1,1,-1,1),r$l(-1,1,-1,1),r$l(-1,-1,1,1),r$l(1,-1,1,1),r$l(1,1,1,1),r$l(-1,1,1,1)],I$2=new s$9(u$9),L$2=_$2();Object.freeze({__proto__:null,create:P$4,createPoints:_$2,copy:d$8,fromMatrix:h$4,computePlanes:R$2,intersectsSphere:S$2,intersectsRay:w$3,intersectClipRay:x$5,intersectsLineSegment:A$4,intersectsPoint:B$2,intersectsAABB:O$1,planePointIndices:z$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class o$i{constructor(){this._disposed=!1;}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(t,r,s,o,e,a){this.id=e$k(),this.geometry=t,this.material=r,this.transformation=s,this.instanceParameters=o,this.origin=e,this._shaderTransformation=a,this._disposed=!1;}dispose(){this._disposed=!0;}getStaticTransformation(){return this.transformation}getShaderTransformation(){return r$s(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return !!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(I$6(t,t,this.getStaticTransformation()),!0)}}o$i.pool=new e$n(o$i);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$h(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r];}function r$j(n,t,r,c){for(let l=0;l<c;++l)f$8[0]=n[l],o$h(f$8,e$d,1),t[l]=e$d[0],r[l]=e$d[1];}const f$8=new Float64Array(1),e$d=new Float32Array(2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function f$7(e){return !!r$s(e)&&!e.visible}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class D$3{constructor(t=0){this.offset=t,this.sphere=q$4(),this.tmpVertex=n$g();}applyToVertex(t,s,r){const e=this.objectTransform.transform;let i=e[0]*t+e[4]*s+e[8]*r+e[12],a=e[1]*t+e[5]*s+e[9]*r+e[13],n=e[2]*t+e[6]*s+e[10]*r+e[14];const h=this.offset/Math.sqrt(i*i+a*a+n*n);i+=i*h,a+=a*h,n+=n*h;const o=this.objectTransform.inverse;return this.tmpVertex[0]=o[0]*i+o[4]*a+o[8]*n+o[12],this.tmpVertex[1]=o[1]*i+o[5]*a+o[9]*n+o[13],this.tmpVertex[2]=o[2]*i+o[6]*a+o[10]*n+o[14],this.tmpVertex}applyToMinMax(t,s){const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r;const e=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*e,s[1]+=s[1]*e,s[2]+=s[2]*e;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),r=this.offset/s;return this.sphere[0]=t[0]+t[0]*r,this.sphere[1]=t[1]+t[1]*r,this.sphere[2]=t[2]+t[2]*r,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const C$1=new D$3;function E$4(t){return r$s(t)?(C$1.offset=t,C$1):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const S$1={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s$8=s=>{class e extends s{constructor(){super(...arguments),this._isDisposed=!1;}dispose(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose();}this._isDisposed=!0;}get isDisposed(){return this._isDisposed}}return e};class e$c extends(s$8(class{})){}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$j extends e$c{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output;}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class s$7 extends t$j{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId);}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear();}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId));}bindTexture(t,i){r$s(this._texture)&&(i.setUniform1i("tex",S$1.DIFFUSE),t.bindTexture(this._texture.glTexture,S$1.DIFFUSE)),r$s(this._textureNormal)&&(i.setUniform1i("normalTexture",S$1.NORMAL),t.bindTexture(this._textureNormal.glTexture,S$1.NORMAL)),r$s(this._textureEmissive)&&(i.setUniform1i("texEmission",S$1.EMISSION),t.bindTexture(this._textureEmissive.glTexture,S$1.EMISSION)),r$s(this._textureOcclusion)&&(i.setUniform1i("texOcclusion",S$1.OCCLUSION),t.bindTexture(this._textureOcclusion.glTexture,S$1.OCCLUSION)),r$s(this._textureMetallicRoughness)&&(i.setUniform1i("texMetallicRoughness",S$1.METALLIC_ROUGHNESS),t.bindTexture(this._textureMetallicRoughness.glTexture,S$1.METALLIC_ROUGHNESS));}bindTextureScale(t,r){const i=r$s(this._texture)&&this._texture.glTexture;i&&i.descriptor.textureCoordinateScaleFactor?r.setUniform2fv("textureCoordinateScaleFactor",i.descriptor.textureCoordinateScaleFactor):r.setUniform2f("textureCoordinateScaleFactor",1,1);}_acquireIfNotUndefined(e){if(!t$q(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){t$q(e)||(this._textureIDs.delete(e),this._textureRepository.release(e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$b(e){return Math.abs(e*e*e)}function l$9(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$4.scale=Math.min(i.divisor/(t-i.offset),1),x$4.factor=n$b(e),x$4.minPixelSize=i.minPixelSize,x$4.paddingPixels=r,x$4}function s$6(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function c$8(t,a){return Math.max(h$b(t*a.scale,t,a.factor),s$6(t,a))}function m$2(e,t,a,i){return c$8(e,l$9(t,a,i))}const x$4={scale:0,factor:0,minPixelSize:0,paddingPixels:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$4=a$m();function h$3(t,n,e,i,o,r,s){const c=f$7(n),f=e.tolerance;if(!c)if(t.boundingInfo)i$g(0===t.primitiveType),g$2(t.boundingInfo,i,o,f,r,s);else {const n=t.indices.get("position"),e=t.vertexAttributes.get("position");M$2(i,o,0,n.length/3,n,e,void 0,r,s);}}const d$7=n$g();function g$2(e,i,o,r,s,c){if(t$q(e))return;const l=j$3(i,o,d$7);if(q$7(p$4,e.getBBMin()),w$a(p$4,e.getBBMax()),r$s(s)&&s.applyToAabb(p$4),A$3(p$4,i,l,r)){const{primitiveIndices:t,indices:n,position:f}=e,a=t?t.length:n.length/3;if(a>U$2){const t=e.getChildren();if(void 0!==t){for(let n=0;n<8;++n)void 0!==t[n]&&g$2(t[n],i,o,r,s,c);return}}M$2(i,o,0,a,n,f,t,s,c);}}const x$3=n$g();function M$2(t,e,i,o,r,s,c,f,a){if(c)return b$2(t,e,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=e[0]-m,g=e[1]-p,M=e[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],e=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let j=l[t++],A=l[t++],L=l[t];r$s(f)&&([e,i,o]=f.applyToVertex(e,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[j,A,L]=f.applyToVertex(j,A,L,b));const V=s-e,B=c-i,z=y-o,E=j-e,I=A-i,N=L-o,P=g*N-I*M,U=M*E-N*d,S=d*I-E*g,W=V*P+B*U+z*S;if(Math.abs(W)<=Number.EPSILON)continue;const O=m-e,k=p-i,R=h-o,C=O*P+k*U+R*S;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*z-B*R,X=R*V-z*O,Y=O*B-V*k,_=d*H+g*X+M*Y;if(W>0){if(_<0||C+_>W)continue}else if(_>0||C+_<W)continue;const q=(E*H+I*X+N*Y)/W;if(q>=0){a(q,T(V,B,z,E,I,N,x$3),b);}}}function b$2(t,e,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=e[0]-m,g=e[1]-p,M=e[2]-h;for(let b=i;b<o;++b){const t=c[b];let e=3*t,i=u*r[e++],o=l[i++],s=l[i++],v=l[i];i=u*r[e++];let y=l[i++],j=l[i++],A=l[i];i=u*r[e];let L=l[i++],V=l[i++],B=l[i];r$s(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,j,A]=f.applyToVertex(y,j,A,b),[L,V,B]=f.applyToVertex(L,V,B,b));const z=y-o,E=j-s,I=A-v,N=L-o,P=V-s,U=B-v,S=g*U-P*M,W=M*N-U*d,O=d*P-N*g,k=z*S+E*W+I*O;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*S+C*W+H*O;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*I-E*H,_=H*z-I*R,q=R*E-z*C,w=d*Y+g*_+M*q;if(k>0){if(w<0||X+w>k)continue}else if(w>0||X+w<k)continue;const D=(N*Y+P*_+U*q)/k;if(D>=0){a(D,T(z,E,I,N,P,U,x$3),t);}}}const v$2=n$g(),y$2=n$g();function T(t,n,e,i,c,f,a){return o$l(v$2,t,n,e),o$l(y$2,i,c,f),_$9(a,v$2,y$2),j$9(a,a),a}function j$3(t,n,e){return o$l(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function A$3(t,n,e,i){return L$1(t,n,e,i,1/0)}function L$1(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-n[1])*e[1],l=(t[4]+i-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function V$1(t,n,i,o,r){let s=(i.screenLength||0)*t.pixelRatio;r&&(s=m$2(s,o,n,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return e$l(c*n,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function B$1(t,n,e){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;n.setUniform4f(e,i.divisor,i.offset,i.minPixelSize,o);}function z$1(t,n){const e=n?z$1(n):{};for(const i in t){let n=t[i];n&&n.forEach&&(n=N(n)),null==n&&i in e||(e[i]=n);}return e}function E$3(t,n){let e=!1;for(const i in n){const o=n[i];void 0!==o&&(e=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o);}return e}function N(t){const n=[];return t.forEach((t=>n.push(t))),n}const P$3={multiply:1,ignore:2,replace:3,tint:4},U$2=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$g={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$c extends r$m{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=o$g,this._params=z$1(e,r),this.validateParameterValues(this._params);}dispose(){}get params(){return this._params}update(e){return !1}setParameterValues(e){E$3(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged());}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}isVisibleInPass(e){return !0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$s(this.materialRepository)&&this.materialRepository.materialChanged(this);}}const d$6={renderOccluded:1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$i(e,t,f,o){const s=f.typedBuffer,r=f.typedBufferStride,n=e.length;o*=r;for(let i=0;i<n;++i){const f=2*e[i];s[o]=t[f],s[o+1]=t[f+1],o+=r;}}function n$a(e,t,f,o,s){const r=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,null==s||1===s)for(let l=0;l<i;++l){const f=3*e[l];r[o]=t[f],r[o+1]=t[f+1],r[o+2]=t[f+2],o+=n;}else for(let l=0;l<i;++l){const f=3*e[l];for(let e=0;e<s;++e)r[o]=t[f],r[o+1]=t[f+1],r[o+2]=t[f+2],o+=n;}}function i$c(e,t,f,o,s=1){const r=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,1===s)for(let l=0;l<i;++l){const f=4*e[l];r[o]=t[f],r[o+1]=t[f+1],r[o+2]=t[f+2],r[o+3]=t[f+3],o+=n;}else for(let l=0;l<i;++l){const f=4*e[l];for(let e=0;e<s;++e)r[o]=t[f],r[o+1]=t[f+1],r[o+2]=t[f+2],r[o+3]=t[f+3],o+=n;}}function d$5(e,t,f,o,s,r=1){if(f){const n=o.typedBuffer,i=o.typedBufferStride,l=e.length,c=f[0],d=f[1],a=f[2],u=f[4],p=f[5],g=f[6],y=f[8],B=f[9],h=f[10],b=f[12],z=f[13],S=f[14];if(s*=i,1===r)for(let f=0;f<l;++f){const o=3*e[f],r=t[o],l=t[o+1],m=t[o+2];n[s]=c*r+u*l+y*m+b,n[s+1]=d*r+p*l+B*m+z,n[s+2]=a*r+g*l+h*m+S,s+=i;}else for(let f=0;f<l;++f){const o=3*e[f],l=t[o],m=t[o+1],k=t[o+2],F=c*l+u*m+y*k+b,M=d*l+p*m+B*k+z,j=a*l+g*m+h*k+S;for(let e=0;e<r;++e)n[s]=F,n[s+1]=M,n[s+2]=j,s+=i;}}else n$a(e,t,o,s,r);}function a$b(e,t,f,o,s,r){if(f){const n=f,i=o.typedBuffer,l=o.typedBufferStride,c=e.length,d=n[0],a=n[1],u=n[2],p=n[4],g=n[5],y=n[6],B=n[8],h=n[9],b=n[10],z=Math.abs(1-d*d+p*p+B*B)>1e-5||Math.abs(1-a*a+g*g+h*h)>1e-5||Math.abs(1-u*u+y*y+b*b)>1e-5,S=1e-6,m=1-S;if(s*=l,1===r)for(let f=0;f<c;++f){const o=3*e[f],r=t[o],n=t[o+1],c=t[o+2];let k=d*r+p*n+B*c,F=a*r+g*n+h*c,M=u*r+y*n+b*c;if(z){const e=k*k+F*F+M*M;if(e<m&&e>S){const t=Math.sqrt(e);k/=t,F/=t,M/=t;}}i[s+0]=k,i[s+1]=F,i[s+2]=M,s+=l;}else for(let f=0;f<c;++f){const o=3*e[f],n=t[o],c=t[o+1],k=t[o+2];let F=d*n+p*c+B*k,M=a*n+g*c+h*k,j=u*n+y*c+b*k;if(z){const e=F*F+M*M+j*j;if(e<m&&e>S){const t=Math.sqrt(e);F/=t,M/=t,j/=t;}}for(let e=0;e<r;++e)i[s+0]=F,i[s+1]=M,i[s+2]=j,s+=l;}}else n$a(e,t,o,s,r);}function u$8(e,t,f,o,s,r=1){const n=o.typedBuffer,i=o.typedBufferStride,l=e.length;if(s*=i,1===r){if(4===f)for(let c=0;c<l;++c){const f=4*e[c];n[s]=t[f],n[s+1]=t[f+1],n[s+2]=t[f+2],n[s+3]=t[f+3],s+=i;}else if(3===f)for(let c=0;c<l;++c){const f=3*e[c];n[s]=t[f],n[s+1]=t[f+1],n[s+2]=t[f+2],n[s+3]=255,s+=i;}}else if(4===f)for(let c=0;c<l;++c){const f=4*e[c];for(let e=0;e<r;++e)n[s]=t[f],n[s+1]=t[f+1],n[s+2]=t[f+2],n[s+3]=t[f+3],s+=i;}else if(3===f)for(let c=0;c<l;++c){const f=3*e[c];for(let e=0;e<r;++e)n[s]=t[f],n[s+1]=t[f+1],n[s+2]=t[f+2],n[s+3]=255,s+=i;}}function p$3(n,l,c,p,g,y){for(const B of l.fieldNames){const l=n.vertexAttributes.get(B),h=n.indices.get(B);if(l&&h)switch(B){case"position":{i$g(3===l.size);const t=g.getField(B,a$n);t&&d$5(h,l.data,c,t,y);break}case"normal":{i$g(3===l.size);const t=g.getField(B,a$n);t&&a$b(h,l.data,p,t,y,1);break}case"uv0":{i$g(2===l.size);const t=g.getField(B,u$h);t&&r$i(h,l.data,t,y);break}case"color":{i$g(3===l.size||4===l.size);const t=g.getField(B,x$8);t&&u$8(h,l.data,l.size,t,y);break}case"symbolColor":{i$g(3===l.size||4===l.size);const t=g.getField(B,x$8);t&&u$8(h,l.data,l.size,t,y);break}case"tangent":{i$g(4===l.size);const f=g.getField(B,p$c);f&&i$c(h,l.data,f,y);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$i(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(t$i||(t$i={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const d$4=.1,o$f=.001;function r$h(d,r){const e=d.fragment;switch(r.alphaDiscardMode){case 0:e.code.add(t$i`
        #define discardOrAdjustAlpha(color) { if (color.a < ${t$i.float(o$f)}) { discard; } }
      `);break;case 1:e.code.add(t$i`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:e.uniforms.add("textureAlphaCutoff","float"),e.code.add(t$i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(t$i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u$7=e$o(770,1,771,771),e$b=t$r(1,1),o$e=t$r(0,771);function c$7(n){return 2===n?null:1===n?o$e:e$b}const f$6=5e5,i$b={factor:-1,units:-2};function s$5(n){return n?i$b:null}function a$a(n){return 3===n||2===n?513:515}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$h{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i$a{constructor(i,r){r&&(this._config=r.snapshot()),this._program=this.initializeProgram(i),i.commonUniformStore&&(this._commonUniformStore=i.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(i);}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null);}reload(i){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(i),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program);}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,r,o){}bindMaterial(i,r,o){}bindDraw(i,r,o){}bindPipelineState(i){i.setPipelineState(this.pipeline);}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return 4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$a{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0));}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function r$g(e={}){return (r,s)=>{var a,i;r._parameterNames=null!=(a=r._parameterNames)?a:[],r._parameterNames.push(s);const o=r._parameterNames.length-1,h=e.count||2,n=Math.ceil(c$g(h)),m=null!=(i=r._parameterBits)?i:[0];let p=0;for(;m[p]+n>16;)p++,p>=m.length&&m.push(0);r._parameterBits=m;const y=m[p],_=(1<<n)-1<<y;m[p]+=n,Object.defineProperty(r,s,{get(){return this[o]},set(t){if(this[o]!==t&&(this[o]=t,this._keyDirty=!0,this._parameterBits[p]=this._parameterBits[p]&~_|+t<<y&_,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+s+" must be boolean or number, got "+typeof t}});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var o$d;!function(n){function o(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2]);}function t(i,n){i.setUniformMatrix4fv("proj",n);}function f(i,n){i.setUniform2fv("nearFar",n);}function a(n,o,t){c$h(r$f,t,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",r$f);}function e(i,n){a(i,n.origin,n.camera.viewMatrix);}function m(i,n){i.setUniform4fv("viewport",n.camera.fullViewport);}n.bindCamPosition=o,n.bindProjectionMatrix=t,n.bindNearFar=f,n.bindViewCustomOrigin=a,n.bindView=e,n.bindViewport=m;}(o$d||(o$d={}));const r$f=r$t();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function c$6(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=t$i`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=t$i`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.sliceHighlightDisabled?t$i`#define highlightSlice(_color_, _pos_) (_color_)`:t$i`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(c);}else {const i=t$i`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i);}}!function(i){function o(e,s,a){i.bindUniforms(e,s,a.slicePlane,a.origin);}function c(i,o,c,r){o.slicePlaneEnabled&&(r$s(c)?(r?(c$f(l$8,c.origin,r),i.setUniform3fv("slicePlaneOrigin",l$8)):i.setUniform3fv("slicePlaneOrigin",c.origin),i.setUniform3fv("slicePlaneBasis1",c.basis1),i.setUniform3fv("slicePlaneBasis2",c.basis2)):(i.setUniform3fv("slicePlaneBasis1",f$i),i.setUniform3fv("slicePlaneBasis2",f$i),i.setUniform3fv("slicePlaneOrigin",f$i)));}i.bindUniformsWithOrigin=o,i.bindUniforms=c;}(c$6||(c$6={}));const l$8=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$g=r$l(1,1,0,1),o$c=r$l(1,0,1,1);function r$e(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t$g).add("unoccludedHighlightFlag","vec4",o$c),e.fragment.code.add(t$i`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);}!function(e){function i(e,i,t){e.bindTexture(t.highlightDepthTexture,5),i.setUniform1i("depthTex",5),i.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1]);}e.bindOutputHighlight=i;}(r$e||(r$e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$9(e,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(t$i`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(t$i`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?t$i`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(t$i`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(t$i`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o.vvInstancingEnabled?t$i`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(t$i`vec4 vvColor() { return vec4(1.0); }`);}!function(v){function e(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors));}function o(v,o){e(v,o),o.vvOpacityEnabled&&(v.setUniform1fv("vvOpacityValues",o.vvOpacityValues),v.setUniform1fv("vvOpacityOpacities",o.vvOpacityOpacities));}function r(v,o){e(v,o),o.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",o.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",o.vvSymbolRotationMatrix));}v.bindUniforms=e,v.bindUniformsWithOpacity=o,v.bindUniformsForSymbols=r;}(e$9||(e$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$d(a){a.vertex.code.add(t$i`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),a.vertex.code.add(t$i`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(t$i`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(t$i`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(t$i`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(t$i`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),a.vertex.code.add(t$i`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}!function(e){function r(e,r){if(r.screenSizePerspective){B$1(r.screenSizePerspective,e,"screenSizePerspective");const c=r.screenSizePerspectiveAlignment||r.screenSizePerspective;B$1(c,e,"screenSizePerspectiveAlignment");}}e.bindUniforms=r;}(r$d||(r$d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$f(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(r$d),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(t$i`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?t$i`vec3 worldNormal = normalize(worldPos + localOrigin);`:t$i`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?t$i`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:t$i`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(t$i`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}function l$7(e,r,t,l=c$5){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}!function(e){function r(e,r,t){if(!r.verticalOffset)return;const c=l$7(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",c.screenLength*i,c.perDistance,c.minWorldLength,c.maxWorldLength);}e.bindUniforms=r;}(t$f||(t$f={}));const c$5={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$c(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("cameraNearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(t$i`
    //Compare the linearized depths of the fragment and the terrain. If fragment is on the wrong side of the terrain, discard it.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `);}function t$e(e,r,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&(e.setUniform1i("terrainDepthTexture",10),r.bindTexture(t.terrainLinearDepthTexture,10));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const f$5={mask:255},c$4={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t$d={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$9(a){a.code.add(t$i`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$9(i){i.fragment.include(a$9),i.fragment.uniforms.add("uShadowMapTex","sampler2D"),i.fragment.uniforms.add("uShadowMapNum","int"),i.fragment.uniforms.add("uShadowMapDistance","vec4"),i.fragment.uniforms.add("uShadowMapMatrix","mat4",4),i.fragment.uniforms.add("uDepthHalfPixelSz","float"),i.fragment.code.add(t$i`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`);}!function(e){function a(e,a,i){a.shadowMappingEnabled&&(a.shadowMap.bind(e,i),a.shadowMap.bindView(e,a.origin));}function i(e,a,i){a.shadowMappingEnabled&&a.shadowMap.bindView(e,i);}function t(e,a){a.shadowMappingEnabled&&a.shadowMap.bindView(e,a.origin);}e.bindUniforms=a,e.bindViewCustomOrigin=i,e.bindView=t;}(i$9||(i$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class u$6{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,n$h(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e;}));}get doublePrecisionRequiresObfuscation(){if(t$q(this._doublePrecisionRequiresObfuscation)){const e=v$1(this.context,!1),n=v$1(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===n||e/n>5);}return this._doublePrecisionRequiresObfuscation}}let f$4=null;function p$2(n){return (t$q(f$4)||f$4.context!==n)&&(f$4=new u$6(n)),f$4}function v$1(e,n){const l=new h$c(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});function u(t,o){const s=new n$i(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${n?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),a=new Float32Array(6);o$h(t,a,3);const c=new Float32Array(6);return o$h(o,c,3),e.bindProgram(s),s.setUniform3f("u_highA",a[0],a[2],a[4]),s.setUniform3f("u_lowA",a[1],a[3],a[5]),s.setUniform3f("u_highB",c[0],c[2],c[4]),s.setUniform3f("u_lowB",c[1],c[3],c[5]),s}const f=h$d.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),p=new o$n(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:f}),h=t$n(5633261.287538229,2626832.878767164,1434988.0495278358),v=t$n(5633271.46742708,2626873.6381334523,1434963.231608387),m=u(h,v),d=e.getBoundFramebufferObject(),{x:b,y:A,width:_,height:g}=e.getViewport();e.bindFramebuffer(l),e.setViewport(0,0,1,1),e.bindVAO(p),e.drawArrays(5,0,4);const w=new Uint8Array(4);l.readPixels(0,0,1,1,6408,5121,w),m.dispose(),p.dispose(!1),f.dispose(),l.dispose(),e.setViewport(b,A,_,g),e.bindFramebuffer(d);const F=(h[2]-v[2])/25,B=F$4(w);return Math.abs(F-B)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$b({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(t$i`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(t$i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function o$b(c){return !!t$s("force-double-precision-obfuscation")||p$2(c).doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$9(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),i.instancedDoublePrecision&&(e.vertex.include(r$b,i),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const n=[t$i`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,t$i`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?t$i`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,t$i`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,t$i`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,i.vertexTangets?t$i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:t$i``];e.vertex.code.add(n[0]),e.vertex.code.add(n[1]),e.vertex.code.add(n[2]),2===i.output&&e.vertex.code.add(n[3]),e.vertex.code.add(n[4]);}!function(e){class r{}function o(e,r){r$j(r,t$c,a$8,3),e.setUniform3fv("viewOriginHi",t$c),e.setUniform3fv("viewOriginLo",a$8);}e.Uniforms=r,e.bindCustomOrigin=o;}(n$9||(n$9={}));const t$c=n$g(),a$8=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$b(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(t$i`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(t$i`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(t$i`void forwardTextureCoordinates() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$a(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(t$i`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$5(u,a){u.include(t$b,a),u.fragment.code.add(t$i`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(t$i`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(t$a),u.fragment.code.add(t$i`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
t$t(0,.6,.2);function r$a(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(u$5,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(t$i`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t$i`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t$i`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t$i`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t$i`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(t$i`float getBakedOcclusion() { return 1.0; }`),r.code.add(t$i`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t$i`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}!function(e){function s(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor));}e.bindUniforms=s;}(r$a||(r$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$9(r,o){o.linearDepth?r.vertex.code.add(t$i`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(t$i`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$9=n$e.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r$8{constructor(){this.includedModules=new Map;}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t$9.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r));}}class n$8 extends r$8{constructor(){super(...arguments),this.vertex=new o$a,this.fragment=new o$a,this.attributes=new a$7,this.varyings=new c$3,this.extensions=new u$4,this.constants=new h$2;}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?d$3:S,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s$4{constructor(){this._entries=new Array,this._set=new Set;}add(e,t,r){const n=`${e}_${t}_${r}`;return this._set.has(n)||(this._entries.push([e,t,r]),this._set.add(n)),this}generateSource(){const e=e=>e?`[${e}]`:"";return this._entries.map((t=>`uniform ${t[1]} ${t[0]}${e(t[2])};`))}}class i$8{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class o$a extends r$8{constructor(){super(...arguments),this.uniforms=new s$4,this.code=new i$8,this.constants=new h$2;}get builder(){return this}}class a$7{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c$3{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u$4{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?u$4.ALLOWLIST_VERTEX:u$4.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u$4.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u$4.ALLOWLIST_VERTEX=[];class h$2{constructor(){this._entries=[];}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h$2.numberToFloatStr(r);break;case"int":n=h$2.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h$2.numberToFloatStr(r[0])},                            ${h$2.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h$2.numberToFloatStr(r[0])},                            ${h$2.numberToFloatStr(r[1])},                            ${h$2.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h$2.numberToFloatStr(r[0])},                            ${h$2.numberToFloatStr(r[1])},                            ${h$2.numberToFloatStr(r[2])},                            ${h$2.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h$2.numberToIntStr(r[0])},                             ${h$2.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h$2.numberToIntStr(r[0])},                             ${h$2.numberToIntStr(r[1])},                             ${h$2.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h$2.numberToIntStr(r[0])},                             ${h$2.numberToIntStr(r[1])},                             ${h$2.numberToIntStr(r[2])},                             ${h$2.numberToIntStr(r[3])})`;break;case"bvec2":n=`bvec2(${r[0].toString()},                             ${r[1].toString()})`;break;case"bvec3":n=`bvec3(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()})`;break;case"bvec4":n=`bvec4(${r[0].toString()},                             ${r[1].toString()},                             ${r[2].toString()},                             ${r[3].toString()})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h$2.numberToFloatStr(e))).join(", ")})`;}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const S="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",d$3="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$6(a){a.include(a$9),a.code.add(t$i`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$5(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(t$i`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("cameraNearFar","vec2"),a.vertex.code.add(t$i`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):a.vertex.code.add(t$i`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$8(t){t.vertex.code.add(t$i`const float PI = 3.141592653589793;`),t.fragment.code.add(t$i`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t$7(t){const a=t.fragment.code;a.add(t$i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(t$i`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(t$i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a$4(a,n){const r=a.fragment.code;a.include(t$8),3===n.pbrMode||4===n.pbrMode?(r.add(t$i`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(t$i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(t$i`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(t$i`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(t$i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==n.pbrMode&&2!==n.pbrMode||(a.include(t$7),r.add(t$i`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(t$i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(t$i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(t$i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(t$i`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(t$i`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$8(e){e.vertex.code.add(t$i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$9(o){const d=t$i`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$8(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(t$i`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(o$9),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(t$i`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(t$i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$7(o){o.attributes.add("position","vec3"),o.vertex.code.add(t$i`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$6(l){l.vertex.code.add(t$i`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${t$i.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${t$i.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${t$i.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${t$i.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$7(r,l){l.symbolColor?(r.include(l$6),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(t$i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(t$i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$6(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(t$i`void forwardVertexColor() { vColor = color; }`),r.vertex.code.add(t$i`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):r.vertex.code.add(t$i`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function d$2(o,r){o.include(o$7),o.vertex.include(r$b,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(t$i`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(t$i`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`);}!function(i){class m{constructor(){this.worldFromModel_RS=e$p(),this.worldFromModel_TH=n$g(),this.worldFromModel_TL=n$g();}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=n$g(),this.worldFromView_TL=n$g(),this.viewFromCameraRelative_RS=e$p(),this.projFromView=e$j();}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL);}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS);}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s;}(d$2||(d$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$5(l,e){0===e.normalType||1===e.normalType?(l.include(o$8,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(t$i`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(d$2,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(t$i`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?t$i`normalize(vPositionWorldCameraRelative);`:t$i`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(t$i`void forwardNormal() {}`);}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r);}o.bindUniforms=r;}(l$5||(l$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$7(e,o){e.fragment.include(a$9),3===o.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(t$i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===o.output&&e.fragment.code.add(t$i`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$3(u,c){const p=u.vertex.code,v=u.fragment.code;1!==c.output&&3!==c.output||(u.include(r$9,{linearDepth:!0}),u.include(t$b,c),u.include(e$9,c),u.include(e$7,c),u.include(c$6,c),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$i`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(r$h,c),v.add(t$i`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(u.include(r$9,{linearDepth:!1}),u.include(o$8,c),u.include(l$5,c),u.include(t$b,c),u.include(e$9,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(t$i`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?t$i`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(c$6,c),u.include(r$h,c),v.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?t$i`
            vec3 normal = screenDerivativeNormal(vPositionView);`:t$i`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(u.include(r$9,{linearDepth:!1}),u.include(t$b,c),u.include(e$9,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$i`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(c$6,c),u.include(r$h,c),u.include(r$e),v.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$7(n,a){const r=n.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),a.vertexTangets?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(t$i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(t$i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(t$i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==a.attributeTextureCoordinates&&(n.include(u$5,a),r.code.add(t$i`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o$6(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(t$i`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(t$i`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$6(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(t$i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(t$i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(t$i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(t$i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$5(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(t$i`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function l$4(l,d){const c=l.fragment;l.include(n$5),l.include(o$6,d),0!==d.pbrMode&&l.include(a$4,d),l.include(n$6,d),d.receiveShadows&&l.include(i$9,d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(t$8),c.code.add(t$i`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),d.useOldSceneLightInterface?c.code.add(t$i`vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
#if defined(TREE_RENDERING)
float minDot = -0.5;
float dotRange = 1.0 - minDot;
float dotNormalization = 0.66;
float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
#else
float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
#endif
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);
vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLight + ambientLight + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));
outColor = pow(outColor, vec3(INV_GAMMA_SRGB));
return outColor;
}`):(1===d.viewingMode?c.code.add(t$i`float _oldHeuristicLighting(vec3 vPosWorld) {
vec3 shadingNormalWorld = normalize(vPosWorld);
float vndl = -dot(shadingNormalWorld, lightingMainDirection);
return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
}`):c.code.add(t$i`float _oldHeuristicLighting(vec3 vPosWorld) {
float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
}`),c.code.add(t$i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(t$i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((baseColorLinear / PI) * totalLight);
outColor = pow(outColor, vec3(INV_GAMMA_SRGB));
return outColor;
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(t$i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = -lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(t$i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(t$i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(t$i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(t$i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?t$i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:t$i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$5(r,e){const m=r.fragment;m.code.add(t$i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(t$i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(t$i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(t$i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function u$2(u,e){t$i`
  /*
  *  ${e.name}
  *  ${0===e.output?"RenderOutput: Color":1===e.output?"RenderOutput: Depth":3===e.output?"RenderOutput: Shadow":2===e.output?"RenderOutput: Normal":4===e.output?"RenderOutput: Highlight":""}
  */
  `;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$6(e){e.code.add(t$i`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$7(i){i.include(e$6),i.code.add(t$i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t$i.int(1)}) {
        return allMixed;
      }
      else if (mode == ${t$i.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$i.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${t$i.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$i.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function P$2(P){const _=new n$8,S=_.vertex.code,$=_.fragment.code;return _.include(u$2,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(o$7),_.varyings.add("vpos","vec3"),_.include(e$9,P),_.include(n$9,P),_.include(t$f,P),0!==P.output&&7!==P.output||(_.include(o$8,P),_.include(r$9,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(e$8),_.include(n$7,P),_.include(l$5,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(t$b,P),_.include(a$5,P),_.include(r$7,P),_.include(r$6,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(t$i`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${t$i.float(o$f)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?t$i`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${P.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(c$6,P),_.include(r$h,P),P.multipassTerrainEnabled&&(_.fragment.include(a$6),_.include(r$c,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(i$7),$.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(c$6,P),_.include(l$4,P),_.include(o$6,P),_.include(r$h,P),P.receiveShadows&&_.include(i$9,P),P.multipassTerrainEnabled&&(_.fragment.include(a$6),_.include(r$c,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(r$a,P),_.include(a$4,P),_.fragment.include(i$7),_.include(r$5,P),$.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?t$i`
        vec3 normal = screenDerivativeNormal(localvpos);`:t$i`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?t$i`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?t$i`
              mat3 tangentSpace = ${P.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?t$i`vec3 normalGround = normalize(vpos + localOrigin);`:t$i`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$i``}
        ${1===P.pbrMode||2===P.pbrMode?t$i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(u$3,P),_}var _$1=Object.freeze({__proto__:null,build:P$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class U$1 extends i$a{initializeProgram(e){const t=U$1.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangets:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:o$b(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new n$i(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),o$g)}bindPass(e,t,i){o$d.bindProjectionMatrix(this.program,i.camera.projectionMatrix);const r=this.configuration.output;(1===this.configuration.output||i.multipassTerrainEnabled||3===r)&&this.program.setUniform2fv("cameraNearFar",i.camera.nearFar),i.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",i.inverseViewport),t$e(this.program,e,i)),7===r&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",P$3[t.colorMixMode])),0===r?(i.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",P$3[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&r$a.bindUniforms(this.program,t,this.configuration.isSchematic)):4===r&&r$e.bindOutputHighlight(e,this.program,i),e$9.bindUniformsForSymbols(this.program,t),t$f.bindUniforms(this.program,t,i),B$1(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff);}bindDraw(e){const i=this.configuration.instancedDoublePrecision?t$n(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;o$d.bindViewCustomOrigin(this.program,i,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&o$d.bindCamPosition(this.program,i,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&n$9.bindCustomOrigin(this.program,i),c$6.bindUniforms(this.program,this.configuration,e.slicePlane,i),0===this.configuration.output&&i$9.bindViewCustomOrigin(this.program,e,i);}setPipeline(e,t){const i=this.configuration,r=3===e,o=2===e;return g$7({blending:0!==i.output&&7!==i.output||!i.transparent?null:r?u$7:c$7(e),culling:z(i)&&s$c(i.cullFace),depthTest:{func:a$a(e)},depthWrite:r||o?i.writeDepth&&l$h:null,colorWrite:r$u,stencilWrite:i.sceneHasOcludees?f$5:null,stencilTest:i.sceneHasOcludees?t?t$d:c$4:null,polygonOffset:r||o?null:s$5(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function z(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}U$1.shader=new t$h(_$1,(()=>import('./DefaultMaterial.glsl-65b9f9da.js')));class R$1 extends e$a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0;}}e$q([r$g({count:8})],R$1.prototype,"output",void 0),e$q([r$g({count:4})],R$1.prototype,"alphaDiscardMode",void 0),e$q([r$g({count:3})],R$1.prototype,"doubleSidedMode",void 0),e$q([r$g()],R$1.prototype,"isSchematic",void 0),e$q([r$g()],R$1.prototype,"vertexColors",void 0),e$q([r$g()],R$1.prototype,"offsetBackfaces",void 0),e$q([r$g()],R$1.prototype,"symbolColors",void 0),e$q([r$g()],R$1.prototype,"vvSize",void 0),e$q([r$g()],R$1.prototype,"vvColor",void 0),e$q([r$g()],R$1.prototype,"verticalOffset",void 0),e$q([r$g()],R$1.prototype,"receiveShadows",void 0),e$q([r$g()],R$1.prototype,"slicePlaneEnabled",void 0),e$q([r$g()],R$1.prototype,"sliceHighlightDisabled",void 0),e$q([r$g()],R$1.prototype,"receiveAmbientOcclusion",void 0),e$q([r$g()],R$1.prototype,"screenSizePerspective",void 0),e$q([r$g()],R$1.prototype,"textureAlphaPremultiplied",void 0),e$q([r$g()],R$1.prototype,"hasColorTexture",void 0),e$q([r$g()],R$1.prototype,"usePBR",void 0),e$q([r$g()],R$1.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$q([r$g()],R$1.prototype,"hasEmissionTexture",void 0),e$q([r$g()],R$1.prototype,"hasOcclusionTexture",void 0),e$q([r$g()],R$1.prototype,"hasNormalTexture",void 0),e$q([r$g()],R$1.prototype,"instanced",void 0),e$q([r$g()],R$1.prototype,"instancedColor",void 0),e$q([r$g()],R$1.prototype,"instancedDoublePrecision",void 0),e$q([r$g()],R$1.prototype,"vertexTangents",void 0),e$q([r$g()],R$1.prototype,"normalsTypeDerivate",void 0),e$q([r$g()],R$1.prototype,"writeDepth",void 0),e$q([r$g()],R$1.prototype,"sceneHasOcludees",void 0),e$q([r$g()],R$1.prototype,"transparent",void 0),e$q([r$g()],R$1.prototype,"enableOffset",void 0),e$q([r$g({count:3})],R$1.prototype,"cullFace",void 0),e$q([r$g({count:4})],R$1.prototype,"transparencyPassType",void 0),e$q([r$g()],R$1.prototype,"multipassTerrainEnabled",void 0),e$q([r$g()],R$1.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function j$2(j){const E=new n$8,O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(o$7),E.varyings.add("vpos","vec3"),E.include(e$9,j),E.include(n$9,j),E.include(t$f,j),0!==j.output&&7!==j.output||(E.include(o$8,j),E.include(r$9,{linearDepth:!1}),j.offsetBackfaces&&E.include(e$8),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(t$b,j),E.include(a$5,j),E.include(r$7,j),E.include(r$6,j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(t$i`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${t$i.float(o$f)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${j.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${j.multipassTerrainEnabled?t$i`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(c$6,j),E.include(r$h,j),j.multipassTerrainEnabled&&(E.fragment.include(a$6),E.include(r$c,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(i$7),_.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$i`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(c$6,j),E.include(l$4,j),E.include(o$6,j),E.include(r$h,j),j.receiveShadows&&E.include(i$9,j),j.multipassTerrainEnabled&&(E.fragment.include(a$6),E.include(r$c,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(r$a,j),E.include(a$4,j),E.fragment.include(i$7),_.add(t$i`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$i`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$i`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$i`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?t$i`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$i`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t$i`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?t$i`vec3 normalGround = normalize(vpos + localOrigin);`:t$i`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$i``}
        ${1===j.pbrMode||2===j.pbrMode?t$i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),E.include(u$3,j),E}var E$2=Object.freeze({__proto__:null,build:j$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a$3 extends U$1{initializeProgram(e){const t=a$3.shader.get(),o=this.configuration,l=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:o$b(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new n$i(e.rctx,l.generateSource("vertex"),l.generateSource("fragment"),o$g)}}a$3.shader=new t$h(E$2,(()=>import('./RealisticTree.glsl-20d4b8a9.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class y$1 extends a$c{constructor(e){super(e,M$1),this.supportsEdges=!0,this.techniqueConfig=new R$1,this.vertexBufferLayout=y$1.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?y$1.getInstanceBufferLayout(this.params):null;}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return !1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,a=!!t&&t.indexOf("color")>-1,r=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(a||r||s)?!!n||o:i?n?l:o:a||r||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<f$6),this.techniqueConfig}intersect(e,t,c,d,p,v,g){if(null!==this.params.verticalOffset){const e=d.camera;o$l(R,c[12],c[13],c[14]);let t=null;switch(d.viewingMode){case 1:t=j$9(A$2,R);break;case 2:t=r$q(A$2,I$1);}let h=0;if(null!==this.params.verticalOffset){const i=c$f(D$2,R,e.eye),s=s$b(i),a=d$c(i,i,1/s);let u=null;this.params.screenSizePerspective&&(u=z$6(t,a)),h+=V$1(e,s,this.params.verticalOffset,u,this.params.screenSizePerspective);}d$c(t,t,h),L$5(L,t,d.transform.inverseRotation),p=c$f(E$1,p,L),v=c$f(B,v,L);}h$3(e,t,d,p,v,E$4(d.verticalOffset),g);}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new P$1(e)}createBufferWriter(){return new w$2(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=A$9().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}static getInstanceBufferLayout(e){let t=A$9();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class P$1 extends s$7{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters();}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(a$3,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(U$1,this.material.getTechniqueConfig(this.output,e),this.technique);}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled});}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees});}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e);}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program);}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const O=2.1,M$1={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:e$p(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:d$4,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...d$6};class w$2{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){p$3(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s);}}const E$1=n$g(),B=n$g(),I$1=t$n(0,0,1),A$2=n$g(),L=n$g(),R=n$g(),D$2=n$g();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$6=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s$3=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function i$5(r,i=i$6,l=o$g,m=-1,u=1){let f=null;switch(i){case s$3:f=new Float32Array([m,m,0,0,u,m,1,0,m,u,0,1,u,u,1,1]);break;case i$6:default:f=new Float32Array([m,m,u,m,m,u,u,u]);}return new o$n(r,l,{geometry:i},{geometry:h$d.createVertex(r,35044,f)})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function s$2(){if(t$q(i$4)){const e=e=>a$o(`esri/libs/basisu/${e}`);i$4=import('./basis_transcoder-37795199.js').then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$4}let i$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let r$4=null,a$2=null;async function i$3(){return t$q(a$2)&&(a$2=s$2(),r$4=await a$2),a$2}function o$5(t){if(t$q(r$4))return t.byteLength;const n=new r$4.BasisFile(new Uint8Array(t));if(n.getNumImages()<1)return 0;const a=n.getNumLevels(0),i=n.getHasAlpha(),o=n.getImageWidth(0,0),l=n.getImageHeight(0,0);n.close(),n.delete();const g=l$i(i?37496:37492),m=(4**a-1)/(3*4**(a-1));return Math.ceil(o*l*g*m)}async function l$3(s,n,a){t$q(r$4)&&(r$4=await i$3());const o=new r$4.BasisFile(new Uint8Array(a));if(o.getNumImages()<1)return null;const l=o.getNumLevels(0),g=o.getHasAlpha(),m=o.getImageWidth(0,0),c=o.getImageHeight(0,0),{compressedTextureETC:u,compressedTextureS3TC:p}=s.capabilities,[d,h]=u?g?[1,37496]:[0,37492]:p?g?[3,33779]:[2,33776]:[13,6408];o.startTranscoding();const f=[];for(let e=0;e<l;e++)f.push(new Uint8Array(o.getImageTranscodedSizeInBytes(0,e,d))),o.transcodeImage(f[e],0,e,d,0,0);o.close(),o.delete();const w={...n,samplingMode:l>1?9987:9729,hasMipmap:l>1,internalFormat:h,width:m,height:c};return new r$v(s,w,{type:"compressed",levels:f})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n$4=n$e.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),o$4=542327876,a$1=131072,i$2=4;function s$1(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function l$2(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const u$1=s$1("DXT1"),c$2=s$1("DXT3"),m$1=s$1("DXT5"),h$1=31,d$1=0,p$1=1,g$1=2,f$3=3,w$1=4,x$2=7,C=20,D$1=21;function b$1(e,t,n,o){const{textureData:a,internalFormat:i,width:s,height:l}=A$1(n,o);t.samplingMode=a.levels.length>1?9987:9729,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l;const u=new r$v(e,t,a);return e.bindTexture(u,0),u}function A$1(e,r){const s=new Int32Array(e,0,h$1);if(s[d$1]!==o$4)return n$4.error("Invalid magic number in DDS header"),null;if(!(s[C]&i$2))return n$4.error("Unsupported format, must contain a FourCC code"),null;const b=s[D$1];let A,v;switch(b){case u$1:A=8,v=33776;break;case c$2:A=16,v=33778;break;case m$1:A=16,v=33779;break;default:return n$4.error("Unsupported FourCC code:",l$2(b)),null}let F=1,M=s[w$1],T=s[f$3];0==(3&M)&&0==(3&T)||(n$4.warn("Rounding up compressed texture size to nearest multiple of 4."),M=M+3&-4,T=T+3&-4);const U=M,j=T;let k,y;s[g$1]&a$1&&!1!==r&&(F=Math.max(1,s[x$2])),1===F||i$i(M)&&i$i(T)||(n$4.warn("Ignoring mipmaps of non power of two sized compressed texture."),F=1);let I=s[p$1]+4;const S=[];for(let t=0;t<F;++t)y=(M+3>>2)*(T+3>>2)*A,k=new Uint8Array(e,I,y),S.push(k),I+=y,M=Math.max(1,M>>1),T=Math.max(1,T>>1);return {textureData:{type:"compressed",levels:S},internalFormat:v,width:U,height:j}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class E extends r$m{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new n$j,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=E.estimateTexMemRequired(this.data,this.params),this.startPreload();}startPreload(){const e=this.data;t$q(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e));}startPreloadVideoElement(e){F$6(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src);}startPreloadImageElement(e){G$4(e.src)||F$6(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src);}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,s){if(t$q(e))return 0;if(t$u(e)||c$i(e))return s.encoding===E.BASIS_ENCODING?o$5(e):e.byteLength;const{width:a,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?E.getDataDimensions(e):s;return (s.mipmap?4/3:1)*a*o*(s.components||4)||0}dispose(){this.data=void 0;}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return {target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,a){if(r$s(this.glTexture))return this.glTexture;if(r$s(this.loadingPromise))return this.loadingPromise;const o=this.data;return t$q(o)?(this.glTexture=new r$v(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof o?this.loadFromURL(e,a,o):o instanceof Image?this.loadFromImageElement(e,a,o):o instanceof HTMLVideoElement?this.loadFromVideoElement(e,a,o):o instanceof ImageData||o instanceof HTMLCanvasElement?this.loadFromImage(e,o,a):(t$u(o)||c$i(o))&&this.params.encoding===E.DDS_ENCODING?this.loadFromDDSData(e,o):(t$u(o)||c$i(o))&&this.params.encoding===E.BASIS_ENCODING?this.loadFromBasis(e,o):c$i(o)?this.loadFromPixelData(e,o):t$u(o)?this.loadFromPixelData(e,new Uint8Array(o)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||t$q(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(r$s(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this.powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(e,t,r,i,s,this.glTexture);}else {const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data);}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=b$1(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync((()=>l$3(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){i$g(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new r$v(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=a$p();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null);};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const s=await t$v(r,{signal:i});return this.loadFromImage(e,s,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const s=await t$w(r,r.src,!1,i);return this.loadFromImage(e,s,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((o,n)=>{const h=()=>{r.removeEventListener("loadeddata",p),r.removeEventListener("error",d),r$s(u)&&u.remove();},p=()=>{r.readyState>=2&&(h(),o(this.loadFromImage(e,r,t)));},d=e=>{h(),n(e||new s$d("Failed to load video"));};r.addEventListener("loadeddata",p),r.addEventListener("error",d);const u=j$a(i,(()=>d(m$8())));}))))}loadFromImage(e,t,r){const i=E.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const s=this.createDescriptor(e);return s.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,s)||i$i(i.width)&&i$i(i.height)?(s.width=i.width,s.height=i.height,this.glTexture=new r$v(e,s,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,s,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return !n$k(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(t,r,i,s,a){const{width:o,height:n}=i,h=u$i(o),l=u$i(n);let m;switch(s.width=h,s.height=l,this.params.powerOfTwoResizeMode){case 2:s.textureCoordinateScaleFactor=[o/h,n/l],m=new r$v(t,s),m.updateData(0,0,0,o,n,r);break;case 1:case null:case void 0:m=this.stretchToPowerOfTwo(t,r,s,a);break;default:n$l(this.params.powerOfTwoResizeMode);}return s.hasMipmap&&m.generateMipmap(),m}stretchToPowerOfTwo(e,t,r,i){const s=new r$v(e,r),a=new h$c(e,{colorTarget:0,depthStencilTarget:0},s),o=new r$v(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),n=i$5(e);return this.drawStretchedTexture(e,i,a,n,o,s),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),s}drawStretchedTexture(e,t,r,i,s,a){e.bindFramebuffer(r);const o=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=t.program;e.bindProgram(n),n.setUniform4f("color",1,1,1,1),n.setUniform1i("tex",0),e.bindTexture(s,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,r$w(i,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height);}unload(){if(r$s(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null;}if(r$s(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),r$s(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort();}this.events.emit("unloaded");}}E.DDS_ENCODING="image/vnd-ms.dds",E.BASIS_ENCODING="image/x.basis";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n$3{constructor(r){this.streamDataRequester=r;}async loadJSON(r,e){return this.load("json",r,e)}async loadBinary(r,e){return G$4(r)?(h$e(e),H$5(r)):this.load("binary",r,e)}async loadImage(r,e){return this.load("image",r,e)}async load(o,s,t){if(t$q(this.streamDataRequester))return (await U$6(s,{responseType:c$1[o]})).data;const n=await o$o(this.streamDataRequester.request(s,o,t));if(!0===n.ok)return n.value;throw w$b(n.error),new s$d("",`Request for resource failed: ${n.error}`)}}const c$1={image:"image",binary:"array-buffer",json:"json"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function f$2(e,t,r){const f=e.typedBuffer,n=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,s=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*n,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let c=0;c<s;++c)f[u]=d[p],f[u+1]=d[p+1],u+=n,p+=o;}function n$2(n,d,o){const s=n.typedBuffer,u=n.typedBufferStride,p=d.typedBuffer,c=d.typedBufferStride,l=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*u,i=(o&&o.srcIndex?o.srcIndex:0)*c;if(u$j(d.elementType)){const e=c$j(d.elementType);if(r$x(d.elementType))for(let t=0;t<l;++t)s[y]=Math.max(p[i]/e,-1),s[y+1]=Math.max(p[i+1]/e,-1),y+=u,i+=c;else for(let t=0;t<l;++t)s[y]=p[i]/e,s[y+1]=p[i+1]/e,y+=u,i+=c;}else f$2(n,d,o);return n}Object.freeze({__proto__:null,copy:f$2,normalizeIntegerBuffer:n$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$5(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,c=t.typedBufferStride,o=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*c;for(let s=0;s<o;++s)d[u]=n[p],d[u+1]=n[p+1],d[u+2]=n[p+2],u+=f,p+=c;}Object.freeze({__proto__:null,copy:e$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$4(e,t,d){const f=e.typedBuffer,n=e.typedBufferStride,r=t.typedBuffer,o=t.typedBufferStride,c=d?d.count:t.count;let u=(d&&d.dstIndex?d.dstIndex:0)*n,s=(d&&d.srcIndex?d.srcIndex:0)*o;for(let p=0;p<c;++p)f[u]=r[s],f[u+1]=r[s+1],f[u+2]=r[s+2],f[u+3]=r[s+3],u+=n,s+=o;}function t$6(e,t,d,f,n,r){const o=e.typedBuffer,c=e.typedBufferStride,u=r?r.count:e.count;let s=(r&&r.dstIndex?r.dstIndex:0)*c;for(let p=0;p<u;++p)o[s]=t,o[s+1]=d,o[s+2]=f,o[s+3]=n,s+=c;}Object.freeze({__proto__:null,copy:e$4,fill:t$6});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$3(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let s=0;s<c;++s){for(let e=0;e<9;++e)d[u+e]=n[p+e];u+=f,p+=o;}}Object.freeze({__proto__:null,copy:e$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$2(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let s=0;s<c;++s){for(let e=0;e<16;++e)d[u+e]=n[p+e];u+=f,p+=o;}}Object.freeze({__proto__:null,copy:e$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e$1(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*d;for(let p=0;p<f;++p)n[s]=c[u],s+=o,u+=d;}function t$5(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}Object.freeze({__proto__:null,copy:e$1,makeDense:t$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$3(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e$r(s.ElementType)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$3=n$e.getLogger("esri.views.3d.glTF");class t$4{error(r){throw new s$d("gltf-loader-error",r)}errorUnsupported(r){throw new s$d("gltf-loader-unsupported-feature",r)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e);}assert(r,e){r||this.error(e);}warn(r){o$3.warn(r);}warnUnsupported(r){this.warn("[Unsupported Feature] "+r);}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e={}){return {color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function t$3(e,t={}){return {data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$2{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4));}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$2={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r$2={pbrMetallicRoughness:o$2,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},t$1={ESRI_externalColorMixMode:"tint"},a=(e={})=>{const a={...o$2,...e.pbrMetallicRoughness},i=l$1({...t$1,...e.extras});return {...r$2,...e,pbrMetallicRoughness:a,extras:i}};function l$1(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:n$l(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint";}return o}const i$1={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},s=e=>({...i$1,...e});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const D={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class j$1{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=r$1(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents();}static async load(e,o,s,a){if(G$4(s)){const t=V$4(s);if("model/gltf-binary"!==t.mediaType)try{const r=JSON.parse(t.isBase64?atob(t.data):t.data);return new j$1(e,o,s,r)}catch{}const a=H$5(s);if(j$1.isGLBData(a))return this.fromGLBData(e,o,s,a)}if(s.endsWith(".gltf")){const t=await e.loadJSON(s,a);return new j$1(e,o,s,t)}const i=await e.loadBinary(s,a);if(j$1.isGLBData(i))return this.fromGLBData(e,o,s,i);const u=await e.loadJSON(s,a);return new j$1(e,o,s,u)}static isGLBData(e){const t=new t$2(e);return t.remainingBytes()>=4&&t.readUint32()===D.MAGIC}static async fromGLBData(e,t,r,n){const o=await j$1.parseGLBData(t,n);return new j$1(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new t$2(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===D.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===D.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await X(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==D.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1;}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(e);if(!o){const s=await this.context.loadBinary(this.resolveUri(r.uri),t);o=new Uint8Array(s),this.bufferCache.set(e,o),n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match.");}return o}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t),a=F[r.type],i=k[r.componentType],u=a*i,c=o.byteStride||u;return {raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return t$5(this.wrapAccessor(h$f,r));case 5123:return t$5(this.wrapAccessor(g$9,r));case 5125:return t$5(this.wrapAccessor(F$7,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+q$1[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(a$n,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+q$1[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(a$n,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+q$1[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new p$c(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(u$h,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),V(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(p$c,n);if(5121===n.componentType)return this.wrapAccessor(x$8,n);if(5123===n.componentType)return this.wrapAccessor(L$6,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(a$n,n);if(5121===n.componentType)return this.wrapAccessor(O$6,n);if(5123===n.componentType)return this.wrapAccessor(E$8,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+q$1[n.componentType]);}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const n=this.errorContext;let o=this.materialCache.get(e.material);if(!o){const s=null!=e.material?a(this.json.materials[e.material]):a(),a$1=s.pbrMetallicRoughness,i=this.hasVertexColors(e);let u,c,p,d,f;a$1.baseColorTexture&&(n.errorUnsupportedIf(0!==(a$1.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),u=await this.getTexture(a$1.baseColorTexture.index,t)),s.normalTexture&&(0!==(s.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(s.normalTexture.index,t)),s.occlusionTexture&&r&&(0!==(s.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):p=await this.getTexture(s.occlusionTexture.index,t)),s.emissiveTexture&&r&&(0!==(s.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(s.emissiveTexture.index,t)),a$1.metallicRoughnessTexture&&r&&(0!==(a$1.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):f=await this.getTexture(a$1.metallicRoughnessTexture.index,t));const l=null!=e.material?e.material:-1;o={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:a$1.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:u,normalTexture:c,name:s.name,id:l,occlusionTexture:p,emissiveTexture:d,emissiveFactor:s.emissiveFactor,metallicFactor:a$1.metallicFactor,roughnessFactor:a$1.roughnessFactor,metallicRoughnessTexture:f,vertexColors:i,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode};}return o}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],o=s(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const s$1=this.json.images[n.source];let a=this.textureCache.get(e);if(!a){let n;if(s$1.uri)n=await this.context.loadImage(this.resolveUri(s$1.uri),t);else {r.errorUnsupportedIf(null==s$1.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==s$1.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[s$1.bufferView],o=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await J$1(new Uint8Array(o.buffer,o.byteOffset+(e.byteOffset||0),e.byteLength),s$1.mimeType);}const i=e=>33071===e||33648===e||10497===e,u=e=>(r.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);a={data:n,wrapS:i(o.wrapS)?o.wrapS:u(o.wrapS),wrapT:i(o.wrapT)?o.wrapT:u(o.wrapT),minFilter:o.minFilter,name:s$1.name,id:e},this.textureCache.set(e,a);}return a}getNodeTransform(e){if(void 0===e)return _;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=e$m(e$j(),r,n.matrix):n.translation||n.rotation||n.scale?(t=r$o(r),n.translation&&c$h(t,t,n.translation),n.rotation&&(P[3]=I$7(P,n.rotation),f$h(t,t,P[3],P)),n.scale&&i$j(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t);}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return T$3(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=r$y.parse(this.json.asset.version,"glTF");G.validate(e);}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "));}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t);}));}));}}const G=new r$y(2,0,"glTF"),_=g$8(e$j(),Math.PI/2),P=e$s(),F={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},k={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function V(t){switch(t.componentType){case 5120:return new M$6(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new A$a(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new v$7(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new w$c(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new I$8(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new u$h(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void n$l(t.componentType)}}async function X(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e));},o.onerror=e=>{r(e);},o.readAsText(n);}))}async function J$1(e,t){return new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a);})),a.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e);})),a.src=s;}))}const q$1={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let n$1=0;async function l(s,r,a={},l=!0){const m=await j$1.load(s,p,r,a),x="gltf_"+n$1++,h={lods:[],materials:new Map,textures:new Map,meta:u(m)},T=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type);return await c(m,(async(s,r,i,n)=>{const u=void 0!==s.mode?s.mode:4,c=4===u||5===u||6===u?u:null;if(t$q(c))return void p.warnUnsupported("Unsupported primitive mode ("+f$1[u]+"). Skipping primitive.");if(!m.hasPositions(s))return void p.warn("Skipping primitive without POSITION vertex attribute.");const T=await m.getMaterial(s,a,l),g={transform:r$o(r),attributes:{position:await m.getPositionData(s,a),normal:null,texCoord0:null,color:null,tangent:null},indices:await m.getIndexData(s,a),primitiveType:c,material:d(h,T,x)};m.hasNormals(s)&&(g.attributes.normal=await m.getNormalData(s,a)),m.hasTangents(s)&&(g.attributes.tangent=await m.getTangentData(s,a)),m.hasTextureCoordinates(s)&&(g.attributes.texCoord0=await m.getTextureCoordinates(s,a)),m.hasVertexColors(s)&&(g.attributes.color=await m.getVertexColors(s,a));let w=null;r$s(h.meta)&&r$s(h.meta.ESRI_lod)&&"screenSpaceRadius"===h.meta.ESRI_lod.metric&&(w=h.meta.ESRI_lod.thresholds[i]),h.lods[i]=h.lods[i]||{parts:[],name:n,lodThreshold:w},h.lods[i].parts.push(g);})),{model:h,meta:{isEsriSymbolResource:T,uri:m.uri},customMeta:{}}}function u(t){const o=t.json;let s=null;return o.nodes.forEach((t=>{const o=t.extras;r$s(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(s=o);})),s}async function c(e,t){const o=e.json,s=o.scenes[o.scene||0].nodes,r=s.length>1;for(const i of s){const e=o.nodes[i],t=[a(i,0)];if(m(e)&&!r){const o=e.extensions.MSFT_lod.ids;t.push(...o.map(((e,t)=>a(e,t+1))));}await Promise.all(t);}async function a(s,r){const i=o.nodes[s],n=e.getNodeTransform(s);if(p.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=o.meshes[i.mesh];for(const o of e.primitives)await t(o,n,r,e.name);}for(const e of i.children||[])await a(e,r);}}function m(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e$1,t,o){const s=t=>{const s=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e$1.textures.has(s)){const o=t$3(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:x$1.some((e=>e===t.minFilter)),noUnpackFlip:!0});e$1.textures.set(s,o);}return s},i=`${o}_mat_${t.id}_${t.name}`;if(!e$1.materials.has(i)){const o=e({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?s(t.colorTexture):void 0,textureNormal:t.normalTexture?s(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?s(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?s(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?s(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e$1.materials.set(i,o);}return i}const p=new t$4,x$1=[9987,9985],f$1=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n){return "number"==typeof n?i$f(n):u$k(n)||c$i(n)?new Uint32Array(n):n}function o$1(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2);}else {let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],i=t[o+1],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f;}else {const r=t[o+1],i=t[o],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f;}}return n}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],i=0;for(let f=0;f<r;++f){const r=t[f+2];n[i++]=e,n[i++]=o,n[i++]=r,o=r;}return n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const y=n$e.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function x(e,t){const r=await g(e,t);return {resource:r,textures:await A(r.textureDefinitions,t)}}async function g(r,n){const i=r$s(n)&&n.streamDataRequester;if(i)return h(r,i,n);const u=await o$o(U$6(r,e$t(n)));if(!0===u.ok)return u.value.data;w$b(u.error),w(u.error);}async function h(e,t,r){const n=await o$o(t.request(e,"json",r));if(!0===n.ok)return n.value;w$b(n.error),w(n.error.details.url);}function w(e){throw new s$d("",`Request for object resource failed: ${e}`)}function v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else y.warn("Indexed geometries must specify faces"),n=!1;break}default:y.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(y.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function b(t,r){const n=[],a=[],s=[],o=[],l=t.resource,c=r$y.parse(l.version||"1.0","wosr");I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=t.textures;let h=0;const w=new Map;for(let u=0;u<y.length;u++){const t=y[u];if(!v(t))continue;const l=M(t),c=t.params.vertexAttributes,p=[];for(const e in c){const t=c[e],r=t.values;p.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}]);}const b=[];if("PerAttributeArray"!==t.params.topology){const e=t.params.faces;for(const t in e)b.push([t,new Uint32Array(e[t].values)]);}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new E(e,t);o.push(r),w.set(l.texture,r);}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const t=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===t.transparency&&(t.transparency=0);const n=j&&j.alphaChannelUsage,a=t.transparency>0||"transparency"===n||"maskAndTransparency"===n,o={ambient:e$u(t.diffuse),diffuse:e$u(t.diffuse),opacity:1-(t.transparency||0),transparent:a,textureAlphaMode:j?U(j.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:t.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};r$s(r)&&r.materialParamsMixin&&Object.assign(o,r.materialParamsMixin),P=new y$1(o),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}a.push(P);const T=new u$c(p,b);h+=b.position?b.position.length:0,n.push(T);}return {name:p,stageResources:{textures:o,materials:a,geometries:n},pivotOffset:l.model.pivotOffset,boundingBox:j(n),numberOfVertices:h,lodThreshold:null}}function j(t){const r=B$6();return t.forEach((t=>{const n=t.boundingInfo;r$s(n)&&(h$g(r,n.getBBMin()),h$g(r,n.getBBMax()));})),r}async function A(t,r){const n=[];for(const o in t){const a=t[o],s=a.images[0].data;if(!s){y.warn("Externally referenced texture data is not yet supported");continue}const i=a.encoding+";base64,"+s,u="/textureDefinitions/"+o,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},c=r$s(r)&&r.disableTextures?Promise.resolve(null):t$v(i,r);n.push(c.then((e=>({refId:u,image:e,params:l,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))));}const a=await Promise.all(n),s={};for(const e of a)s[e.refId]=e;return s}function U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function M(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new r$y(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void e$i.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=f[9],m=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,j=r.typedBuffer,g=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*g,f=j[r],o=j[r+1],w=j[r+2],x=j[r+3];M[t]=n*f+c*o+y*w+l*x,M[t+1]=u*f+i*o+B*w+S*x,M[t+2]=d*f+a*o+m*w+b*x,M[t+3]=s*f+p*o+h*w+v*x;}}function r(t,r,f){if(t.count!==r.count)return void e$i.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];B[t]=n*f+s*o+a*S,B[t+1]=u*f+c*o+p*S,B[t+2]=d*f+i*o+y*S,B[t+3]=b;}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3];}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r;}}Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function $(r,s){const o=q(t$x(r));if("wosr"===o.fileType){const e=await(s.cache?s.cache.loadWOSR(o.url,s):x(o.url,s)),t=b(e,s);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(s.cache?s.cache.loadGLTF(o.url,s,s.usePBR):l(new n$3(s.streamDataRequester),o.url,s,s.usePBR)),a=g$a(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&r$s(a)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&J(i,a);const u=i.meta.isEsriSymbolResource?{usePBR:s.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:s.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},n={...s.materialParamsMixin,treeRendering:i.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=K(i,u,n,o.specifiedLodIndex);let t=e[0].boundingBox;if(0!==o.specifiedLodIndex){t=K(i,u,n,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const l$1=K(i,u,n);return {lods:l$1,referenceBoundingBox:l$1[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function K(e,r$1,s,o){const i=e.model,a=e$p(),u=new Array,n=new Map,l=new Map;return i.lods.forEach(((e,c)=>{if(void 0!==o&&c!==o)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$s(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$6()};u.push(d),e.parts.forEach((e=>{const o=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),u=i.materials.get(e.material),c=r$s(e.attributes.texCoord0),f$1=r$s(e.attributes.normal);if(!n.has(o)){if(c){if(r$s(u.textureColor)&&!l.has(u.textureColor)){const e=i.textures.get(u.textureColor),t={...e.parameters,preMultiplyAlpha:!0};l.set(u.textureColor,new E(e.data,t));}if(r$s(u.textureNormal)&&!l.has(u.textureNormal)){const e=i.textures.get(u.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};l.set(u.textureNormal,new E(e.data,t));}if(r$s(u.textureOcclusion)&&!l.has(u.textureOcclusion)){const e=i.textures.get(u.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};l.set(u.textureOcclusion,new E(e.data,t));}if(r$s(u.textureEmissive)&&!l.has(u.textureEmissive)){const e=i.textures.get(u.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};l.set(u.textureEmissive,new E(e.data,t));}if(r$s(u.textureMetallicRoughness)&&!l.has(u.textureMetallicRoughness)){const e=i.textures.get(u.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};l.set(u.textureMetallicRoughness,new E(e.data,t));}}const a=u.color[0]**(1/O),m=u.color[1]**(1/O),d=u.color[2]**(1/O),p=u.emissiveFactor[0]**(1/O),x=u.emissiveFactor[1]**(1/O),g=u.emissiveFactor[2]**(1/O);n.set(o,new y$1({...r$1,transparent:"BLEND"===u.alphaMode,textureAlphaMode:Q(u.alphaMode),textureAlphaCutoff:u.alphaCutoff,diffuse:[a,m,d],ambient:[a,m,d],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f$1?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$s(u.textureColor)&&c?l.get(u.textureColor).id:void 0,colorMixMode:u.colorMixMode,normalTextureId:r$s(u.textureNormal)&&c?l.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:r$s(u.textureOcclusion)&&c?l.get(u.textureOcclusion).id:void 0,emissiveTextureId:r$s(u.textureEmissive)&&c?l.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:r$s(u.textureMetallicRoughness)&&c?l.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[p,x,g],mrrFactors:[u.metallicFactor,u.roughnessFactor,r$1.mrrFactors[2]],isSchematic:!1,...s}));}const p=H(e.indices||e.attributes.position.count,e.primitiveType),g=e.attributes.position.count,F=r$3(a$n,g);t$l(F,e.attributes.position,e.transform);const P=[["position",{data:F.typedBuffer,size:F.elementCount,exclusive:!0}]],z=[["position",p]];if(r$s(e.attributes.normal)){const t=r$3(a$n,g);j$b(a,e.transform),r$n(t,e.attributes.normal,a),P.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),z.push(["normal",p]);}if(r$s(e.attributes.tangent)){const t=r$3(p$c,g);j$b(a,e.transform),r(t,e.attributes.tangent,a),P.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),z.push(["tangent",p]);}if(r$s(e.attributes.texCoord0)){const t=r$3(u$h,g);n$2(t,e.attributes.texCoord0),P.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),z.push(["uv0",p]);}if(r$s(e.attributes.color)){const t=r$3(x$8,g);if(4===e.attributes.color.elementCount)e.attributes.color instanceof p$c?f(t,e.attributes.color,255):e.attributes.color instanceof x$8?e$4(t,e.attributes.color):e.attributes.color instanceof L$6&&f(t,e.attributes.color,1/256);else {t$6(t,255,255,255,255);const r=new O$6(t.buffer,0,4);e.attributes.color instanceof a$n?f$f(r,e.attributes.color,255):e.attributes.color instanceof O$6?e$5(r,e.attributes.color):e.attributes.color instanceof E$8&&f$f(r,e.attributes.color,1/256);}P.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),z.push(["color",p]);}const D=new u$c(P,z);d.stageResources.geometries.push(D),d.stageResources.materials.push(n.get(o)),c&&(r$s(u.textureColor)&&d.stageResources.textures.push(l.get(u.textureColor)),r$s(u.textureNormal)&&d.stageResources.textures.push(l.get(u.textureNormal)),r$s(u.textureOcclusion)&&d.stageResources.textures.push(l.get(u.textureOcclusion)),r$s(u.textureEmissive)&&d.stageResources.textures.push(l.get(u.textureEmissive)),r$s(u.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(u.textureMetallicRoughness))),d.numberOfVertices+=g;const V=D.boundingInfo;r$s(V)&&(h$g(d.boundingBox,V.getBBMin()),h$g(d.boundingBox,V.getBBMax()));}));})),u}function Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}function H(e,t){switch(t){case 4:return n(e);case 5:return o$1(e);case 6:return i(e)}}function J(e,t){for(let m=0;m<e.model.lods.length;++m){const d=e.model.lods[m];e.customMeta.esriTreeRendering=!0;for(const p of d.parts){const d=p.attributes.normal;if(t$q(d))return;const x=p.attributes.position,g=x.count,b=n$g(),v=n$g(),y=n$g(),B=r$3(x$8,g),M=r$3(a$n,g),w=h$a(e$j(),p.transform);for(let r=0;r<g;r++){x.getVec(r,v),d.getVec(r,b),I$6(v,v,p.transform),c$f(y,v,t.center),i$k(y,y,t.radius);const s=y[2],c=s$b(y),f=Math.min(.45+.55*c*c,1);i$k(y,y,t.radius),I$6(y,y,w),j$9(y,y),m+1!==e.model.lods.length&&e.model.lods.length>1&&y$8(y,y,b,s>-1?.2:Math.min(-4*s-3.8,1)),M.setVec(r,y),B.set(r,0,255*f),B.set(r,1,255*f),B.set(r,2,255*f),B.set(r,3,255);}p.attributes.normal=M,p.attributes.color=B;}}}

var objectResourceUtils = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fetch: $,
      gltfToEngineResources: K,
      parseUrl: q
});

export { P$2 as P, j$2 as j, objectResourceUtils as o };
