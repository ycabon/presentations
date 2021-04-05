import { k as i$f, iJ as s$7, iK as s$8, iL as a$f, iM as u$e, iN as u$f, iO as r$m, aj as n$b, ft as r$n, fp as c$d, fu as z$5, am as d$c, j as e$g, fm as u$g, al as s$9, iP as x$5, fq as _$8, iQ as d$d, ak as o$i, iR as E$7, iS as i$g, fz as i$h, iT as f$f, ar as t$o, iU as y$6, f as t$p, fv as N$4, fn as j$7, iV as F$4, C as u$h, iW as x$6, g as a$g, fx as q$5, fw as w$6, iX as h$a, b9 as r$o, iY as I$7, iZ as f$g, i_ as o$j, i$ as p$9, j0 as q$6, j1 as u$i, j2 as y$7, j3 as r$p, b8 as t$q, j4 as M$9, j5 as i$j, j6 as e$h, j7 as t$r, bu as h$b, j8 as c$e, j9 as f$h, r as r$r, i as i$k, b as a$i, ja as L$7, G as t$s, y as e$j, jb as u$k, jc as n$c, jd as s$a, je as L$8, a as i$l, jf as o$l, a2 as i$m, hM as F$5, jg as G$4, g1 as t$u, jh as c$f, b3 as a$j, ji as n$d, I as h$c, p as s$b, J as d$f, K as m$6, jj as n$e, bT as u$l, dg as n$f, jk as r$s, ay as p$b, jl as H$4, L as L$9, dQ as o$m, dP as w$7, jm as q$8, cG as V$4, jn as i$n, dG as T$3, jo as r$u, E as f$i, jp as u$n, bQ as f$j, jq as e$m, ds as l$g, U as U$4, jr as t$w, dV as w$9, js as i$o, jt as y$8 } from './_virtual:index-325c676c.js';
import { a as t$m, b as t$n, t as t$t, e as e$i, I as I$9, c as e$l } from './vec3f32-2e75453d.js';
import { p as p$a, x as x$7, a as a$h, u as u$j, A as A$a, n as u$m, r as c$g, s as r$t, t as e$k, F as F$6, g as g$5, h as h$d, I as I$8, w as w$8, v as v$7, e as A$b, M as M$a, L as L$a, O as O$6, E as E$8 } from './InterleavedLayout-9458d6d9.js';
import { i as i$i, d as d$e, q as q$7, h as h$e, A as A$c } from './aaBoundingBox-c7eff59a.js';
import { o as o$k } from './Program-9517ac59.js';
import { r as r$q } from './mat4f32-a4d1c0af.js';
import { t as t$v } from './requestImageUtils-c4817644.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(){return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return [e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m){return [e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t(e,r){return new Float64Array(e,r,16)}const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t,IDENTITY:a});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e$1=i$f.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$1(t,r,f){if(t.count!==r.count)return void e$1.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[4],c=f[5],i=f[6],a=f[8],p=f[9],y=f[10],B=f[12],m=f[13],h=f[14],l=t.typedBuffer,S=t.typedBufferStride,b=r.typedBuffer,v=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*S,r=e*v,f=b[r],o=b[r+1],M=b[r+2];l[t]=n*f+s*o+a*M+B,l[t+1]=u*f+c*o+p*M+m,l[t+2]=d*f+i*o+y*M+h;}}function r$1(t,r,f){if(t.count!==r.count)return void e$1.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*l,f=h[r],o=h[r+1],S=h[r+2];B[t]=n*f+s*o+a*S,B[t+1]=u*f+c*o+p*S,B[t+2]=d*f+i*o+y*S;}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=r*u[f],o[t+1]=r*u[f+1],o[t+2]=r*u[f+2];}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=u[f]>>r,o[t+1]=u[f+1]>>r,o[t+2]=u[f+2]>>r;}}Object.freeze({__proto__:null,transformMat4:t$1,transformMat3:r$1,scale:f,shiftRight:o});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=s$7.before((()=>this.reset())),this.grow();}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=s$8(this.tickHandle)),this.items=s$8(this.items);}get(){return 0===this.itemsPtr&&s$7((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*e$2);this.items.length=Math.min(t,this.items.length),this.itemsPtr=0;}grow(){for(let t=0;t<Math.max(8,Math.min(this.items.length,e$2));t++)this.items.push(this.allocator());}}const e$2=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class c{constructor(t,s,i){this.itemByteSize=t,this.itemCreate=s,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(i/this.itemByteSize),this.tickHandle=s$7.before((()=>this.reset()));}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=s$8(this.tickHandle)),this.itemsPtr=0,this.items=s$8(this.items),this.buffers=s$8(this.buffers);}get(){0===this.itemsPtr&&s$7((()=>{}));const t=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=t;){const t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let e=0;e<this.itemsPerBuffer;++e)this.items.push(this.itemCreate(t,e*this.itemByteSize));this.buffers.push(t);}return this.items[this.itemsPtr++]}reset(){const t=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>t;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0;}static createVec2f64(t=a$1){return new c(16,a$f,t)}static createVec3f64(t=a$1){return new c(24,u$e,t)}static createVec4f64(t=a$1){return new c(32,u$f,t)}static createMat3f64(t=a$1){return new c(72,t$m,t)}static createMat4f64(t$1=a$1){return new c(128,t,t$1)}static createQuatf64(t=a$1){return new c(32,t$n,t)}get test(){return {size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const a$1=4096;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
c.createVec2f64();const c$1=c.createVec3f64(),r$2=c.createVec4f64();c.createMat3f64();const f$1=c.createMat4f64();c.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function p(t){return t?{origin:r$m(t.origin),vector:r$m(t.vector)}:{origin:n$b(),vector:n$b()}}function v(t,r){const n=S.get();return n.origin=t,n.vector=r,n}function l(t,r=p()){return m(t.origin,t.vector,r)}function m(t,r,n=p()){return r$n(n.origin,t),r$n(n.vector,r),n}function b(t,r,n=p()){return r$n(n.origin,t),c$d(n.vector,r,t),n}function h(r,n){const e=c$d(c$1.get(),n,r.origin),s=z$5(r.vector,e),a=z$5(r.vector,r.vector),u=e$g(s/a,0,1),g=c$d(c$1.get(),d$c(c$1.get(),r.vector,u),e);return z$5(g,g)}function d(t,r){return Math.sqrt(h(t,r))}function j(t,r,n){return A(t,r,0,1,n)}function M(t,r,n){return u$g(n,t.origin,d$c(n,t.vector,r))}function A(r,n,e,u,g){const{vector:p,origin:v}=r,l=c$d(c$1.get(),n,v),m=s$9(p),b=z$5(p,l)/m;return d$c(g,p,e$g(b,e,u)),u$g(g,g,r.origin)}function B(t,r){if(_(t,v(r.origin,r.direction),!1,k)){const{tA:r,pB:n,distance2:e}=k;if(r>=0&&r<=1)return e;if(r<0)return x$5(t.origin,n);if(r>1)return x$5(u$g(c$1.get(),t.origin,t.vector),n)}return null}function w(t,r,n){return !!_(t,r,!0,k)&&(r$n(n,k.pA),!0)}function P(t,r){return _(t,r,!0,k)?k.distance2:null}function _(r,n,e,o){const i=1e-6,c=r.origin,a=u$g(c$1.get(),c,r.vector),g=n.origin,p=u$g(c$1.get(),g,n.vector),v=c$1.get(),l=c$1.get();if(v[0]=c[0]-g[0],v[1]=c[1]-g[1],v[2]=c[2]-g[2],l[0]=p[0]-g[0],l[1]=p[1]-g[1],l[2]=p[2]-g[2],Math.abs(l[0])<i&&Math.abs(l[1])<i&&Math.abs(l[2])<i)return !1;const m=c$1.get();if(m[0]=a[0]-c[0],m[1]=a[1]-c[1],m[2]=a[2]-c[2],Math.abs(m[0])<i&&Math.abs(m[1])<i&&Math.abs(m[2])<i)return !1;const b=v[0]*l[0]+v[1]*l[1]+v[2]*l[2],h=l[0]*m[0]+l[1]*m[1]+l[2]*m[2],d=v[0]*m[0]+v[1]*m[1]+v[2]*m[2],j=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],M=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*j-h*h;if(Math.abs(M)<i)return !1;let A=(b*h-d*j)/M,B=(b+h*A)/j;e&&(A=e$g(A,0,1),B=e$g(B,0,1));const w=c$1.get(),P=c$1.get();return w[0]=c[0]+A*m[0],w[1]=c[1]+A*m[1],w[2]=c[2]+A*m[2],P[0]=g[0]+B*l[0],P[1]=g[1]+B*l[1],P[2]=g[2]+B*l[2],o.tA=A,o.tB=B,o.pA=w,o.pB=P,o.distance2=x$5(w,P),!0}const k={tA:0,tB:0,pA:n$b(),pB:n$b(),distance2:0},S=new s((()=>({origin:null,vector:null})));Object.freeze({__proto__:null,create:p,wrap:v,copy:l,fromValues:m,fromPoints:b,distance2:h,distance:d,projectPoint:j,pointAt:M,projectPointClamp:A,closestRayDistance2:B,closestLineSegmentPoint:w,closestLineSegmentDistance2:P});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function d$1(e){return e?{p0:r$m(e.p0),p1:r$m(e.p1),p2:r$m(e.p2)}:{p0:n$b(),p1:n$b(),p2:n$b()}}function j$1(t,n,e){const r=O.get();return r.p0=t,r.p1=n,r.p2=e,r}function b$1(t,n=d$1()){return v$1(t.p0,t.p1,t.p2,n)}function v$1(t,n,r,s=d$1()){return r$n(s.p0,t),r$n(s.p1,n),r$n(s.p2,r),s}function w$1(t,n){const e=t.p0,a=t.p1,o=t.p2,c=c$d(c$1.get(),a,e),i=c$d(c$1.get(),o,a),u=c$d(c$1.get(),e,o),l=c$d(c$1.get(),n,e),d=c$d(c$1.get(),n,a),j=c$d(c$1.get(),n,o),b=_$8(c,c,u),v=z$5(_$8(c$1.get(),c,b),l),w=z$5(_$8(c$1.get(),i,b),d),_=z$5(_$8(c$1.get(),u,b),j);if(v>0&&w>0&&_>0){const t=z$5(b,l);return t*t/z$5(b,b)}const h$1=h(m(e,c,M$1.get()),n),k=h(m(a,i,M$1.get()),n),y=h(m(o,u,M$1.get()),n);return Math.min(h$1,k,y)}function _$1(t,n,e){const r=1e-5,{direction:s,origin:p}=n,{p0:c,p1:i,p2:u}=t,f=i[0]-c[0],g=i[1]-c[1],m=i[2]-c[2],l=u[0]-c[0],d=u[1]-c[1],j=u[2]-c[2],b=s[1]*j-d*s[2],v=s[2]*l-j*s[0],w=s[0]*d-l*s[1],_=f*b+g*v+m*w;if(_>-r&&_<r)return !1;const h=1/_,k=p[0]-c[0],y=p[1]-c[1],M=p[2]-c[2],O=h*(k*b+y*v+M*w);if(O<0||O>1)return !1;const P=y*m-g*M,S=M*f-m*k,q=k*g-f*y,x=h*(s[0]*P+s[1]*S+s[2]*q);if(x<0||O+x>1)return !1;if(e){d$c(e,s,h*(l*P+d*S+j*q)),u$g(e,p,e);}return !0}function h$1(t,n,e){const r=d$d(t,n),s=d$d(n,e),p=d$d(e,t),a=(r+s+p)/2,o=a*(a-r)*(a-s)*(a-p);return o<=0?0:Math.sqrt(o)}function k$1(t){return h$1(t.p0,t.p1,t.p2)}function y(t,n,e){return c$d(P$1,n,t),c$d(S$1,e,t),s$9(_$8(P$1,P$1,S$1))/2}const M$1=new s(p),O=new s((()=>({p0:null,p1:null,p2:null}))),P$1=n$b(),S$1=n$b();Object.freeze({__proto__:null,create:d$1,wrap:j$1,copy:b$1,fromValues:v$1,distance2:w$1,intersectRay:_$1,areaPoints2d:h$1,area2d:k$1,areaPoints3d:y});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let f$2=1,c$2=null;const i=new Uint32Array([0]);function u(t){if(1===t)return i;if(t>f$2||null==c$2){for(;t>f$2;)f$2*=2;c$2=new Uint32Array(f$2);for(let t=0;t<f$2;t++)c$2[t]=t;}return new Uint32Array(c$2.buffer,0,t)}function a$2(t,o,f){if(!t)return !1;const{strideIdx:c,offsetIdx:i,data:u}=t;o$i(f,0,0,0),o$i(p$1,0,0,0);let a=0,l=0;for(let t=0;t<o.length-2;t+=3){const d=o[t+0]*c+i,h=o[t+1]*c+i,x=o[t+2]*c+i;o$i(m$1,u[d+0],u[d+1],u[d+2]),o$i(I,u[h+0],u[h+1],u[h+2]),o$i(g,u[x+0],u[x+1],u[x+2]);const w=y(m$1,I,g);w?(u$g(m$1,m$1,I),u$g(m$1,m$1,g),d$c(m$1,m$1,1/3*w),u$g(f,f,m$1),a+=w):(u$g(p$1,p$1,m$1),u$g(p$1,p$1,I),u$g(p$1,p$1,g),l+=3);}return (0!==l||0!==a)&&(0!==a?(d$c(f,f,1/a),!0):0!==l&&(d$c(f,p$1,1/l),!0))}function l$1(t,r,o){if(!t||!r)return !1;const{strideIdx:s,offsetIdx:f,data:c}=t;o$i(o,0,0,0);let i=-1,u=0;for(let t=0;t<r.length;t++){const n=r[t]*s+f;i!==n&&(o[0]+=c[n+0],o[1]+=c[n+1],o[2]+=c[n+2],u++),i=n;}return u>1&&d$c(o,o,1/u),u>0}let h$2=0;function x(){return h$2++}const m$1=n$b(),I=n$b(),g=n$b(),p$1=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n$1{constructor(t,i=n$1.DefaultIndices,e="triangle"){this.initialize(t,i,e);}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const t=E$7(this._indices);return null==t?0:t.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(s,r=n$1.DefaultIndices,c="triangle"){const d={};for(const t in s){const{data:i,size:e}=s[t];d[t]={data:i,size:e,offsetIdx:0,strideIdx:e};}if(r===n$1.DefaultIndices){const i=function(t){const i=E$7(t);if(null==i)return 0;return i.data.length/i.size}(d),s=u(i);r={};for(const t in d)r[t]=s;}this._id=x(),this._vertexAttributes=d,this._indices=r,this._primitiveType=c;}toRenderData(){return {id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(t){return this._indices[t]}getAttribute(t){return this._vertexAttributes[t]}estimateGpuMemoryUsage(){let t=0;if(this._indices[i$g.POSITION]){const i=3;t+=this._indices[i$g.POSITION].length*i*4;}if(this._indices[i$g.NORMAL]){const i=3;t+=this._indices[i$g.NORMAL].length*i*4;}if(this._indices[i$g.UV0]){const i=2;t+=this._indices[i$g.UV0].length*i*4;}if(this._indices[i$g.COLOR]){const i=1;t+=this._indices[i$g.COLOR].length*i*4;}return t}}n$1.DefaultIndices={};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t$2{constructor(){this._count=0;}gen(t){return null==t&&(t="a"),t+"_"+this._count++}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class b$2{constructor(i,h,a,o){this.primitiveIndices=i,this._numIndexPerPrimitive=h,this.indices=a,this._position=o,this.center=n$b(),f$f(i.length>=1),f$f(a.length%this._numIndexPerPrimitive==0),f$f(a.length>=i.length*this._numIndexPerPrimitive),f$f(3===this._position.size||4===this._position.size);const{data:c,offsetIdx:d,strideIdx:m}=this._position;let M=0;const l=i.length;let u=d+m*a[this._numIndexPerPrimitive*i[M]];for(b$2.tmpIndices.clear(),b$2.tmpIndices.push(u),this.bbMin=t$o(c[u],c[u+1],c[u+2]),this.bbMax=r$m(this.bbMin);M<l;++M){const t=this._numIndexPerPrimitive*i[M];for(let i=0;i<this._numIndexPerPrimitive;++i){u=d+m*a[t+i],b$2.tmpIndices.push(u);let s=c[u];this.bbMin[0]=Math.min(s,this.bbMin[0]),this.bbMax[0]=Math.max(s,this.bbMax[0]),s=c[u+1],this.bbMin[1]=Math.min(s,this.bbMin[1]),this.bbMax[1]=Math.max(s,this.bbMax[1]),s=c[u+2],this.bbMin[2]=Math.min(s,this.bbMin[2]),this.bbMax[2]=Math.max(s,this.bbMax[2]);}}y$6(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let x=this.bsRadius*this.bsRadius;for(M=0;M<b$2.tmpIndices.length;++M){u=b$2.tmpIndices.data[M];const i=c[u]-this.center[0],t=c[u+1]-this.center[1],s=c[u+2]-this.center[2],e=i*i+t*t+s*s;if(e<=x)continue;const n=Math.sqrt(e),h=.5*(n-this.bsRadius);this.bsRadius=this.bsRadius+h,x=this.bsRadius*this.bsRadius;const r=h/n;this.center[0]+=i*r,this.center[1]+=t*r,this.center[2]+=s*r;}b$2.tmpIndices.clear();}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if(x$5(this.bbMin,this.bbMax)>1){const i=y$6(n$b(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,e=new Uint8Array(s),h=new Array(8);for(let i=0;i<8;++i)h[i]=0;const{data:r,offsetIdx:a,strideIdx:o}=this._position;for(let t=0;t<s;++t){let s=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[t];let b=a+o*this.indices[n],c=r[b],d=r[b+1],m=r[b+2];for(let i=1;i<this._numIndexPerPrimitive;++i){b=a+o*this.indices[n+i];const t=r[b],s=r[b+1],e=r[b+2];t<c&&(c=t),s<d&&(d=s),e<m&&(m=e);}c<i[0]&&(s|=1),d<i[1]&&(s|=2),m<i[2]&&(s|=4),e[t]=s,++h[s];}let c=0;for(let i=0;i<8;++i)h[i]>0&&++c;if(c<2)return;const d=new Array(8);for(let i=0;i<8;++i)d[i]=h[i]>0?new Uint32Array(h[i]):void 0;for(let i=0;i<8;++i)h[i]=0;for(let i=0;i<s;++i){const t=e[i];d[t][h[t]++]=this.primitiveIndices[i];}this._children=new Array(8);for(let i=0;i<8;++i)void 0!==d[i]&&(this._children[i]=new b$2(d[i],this._numIndexPerPrimitive,this.indices,this._position));}return this._children}}!function(t){t.tmpIndices=new i$h({deallocator:null});}(b$2||(b$2={}));var a$3=b$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class u$1{constructor(t,n){this._boundingInfo=null,this._id=u$1.__idGen.gen(n),this._data=t;}get id(){return this._id}get data(){return this._data}getIndices(t){return this.data.getIndices(t)}get indexCount(){return this.data.indexCount}getAttribute(t){return this.data.getAttribute(t)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return t$p(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return "triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const i=this.getIndices(i$g.POSITION),e=this.getAttribute(i$g.POSITION);return a$2(e,i,t)}computeAttachmentOriginPoints(t){const n=this.getIndices(i$g.POSITION),e=this.getAttribute(i$g.POSITION);return l$1(e,n,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){let t=this.data.getIndices(i$g.POSITION);const n=this.data.getAttribute(i$g.POSITION),i="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(i);for(let n=0;n<i;++n)t[n]=n;}const s=t.length;f$f(s%i==0,"Indexing error: "+s.toFixed(0)+" not divisible by "+i.toFixed(0));const u$1=u(s/i);return new a$3(u$1,i,t,n)}}u$1.__idGen=new t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function c$3(t,n,r){const a=z$5(t,n)/z$5(t,t);return d$c(r,t,a)}function i$1(t,n){return z$5(t,n)/s$9(t)}function u$2(n,s){const a=z$5(n,s)/(s$9(n)*s$9(s));return -N$4(a)}function f$3(n,r,s){j$7(p$2,n),j$7(m$2,r);const c=z$5(p$2,m$2),i=N$4(c),u=_$8(p$2,p$2,m$2);return z$5(u,s)<0?2*Math.PI-i:i}const p$2=n$b(),m$2=n$b();Object.freeze({__proto__:null,projectPoint:c$3,projectPointSignedLength:i$1,angle:u$2,angleAroundAxis:f$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l$2(n=Q){return [n[0],n[1],n[2],n[3]]}function p$3(n,t,r,e){return y$1(n,t,r,e,r$2.get())}function d$2(n,t=l$2()){return y$1(n[0],n[1],n[2],n[3],t)}function y$1(n,t,r,e,o=l$2()){return o[0]=n,o[1]=t,o[2]=r,o[3]=e,o}function h$3(n,t,r=l$2()){return r$n(r,n),r[3]=t,r}function P$2(n,t,r=l$2()){r$n(r,t);const s=z$5(t,t);return Math.abs(s-1)>1e-5&&s>1e-12&&d$c(r,r,1/Math.sqrt(s)),F(r,n,r),r}function j$2(n,t,r,e=l$2()){return _$2(c$d(c$1.get(),n,t),c$d(c$1.get(),r,t),n,e)}function M$2(n,t){return b$3(n,t,0,1,2)}function b$3(n,t,r,e,i){if(n.count<3)return !1;n.getVec(r,A$1);let a=e,f=!1;for(;a<n.count-1&&!f;)n.getVec(a,V),a++,f=!F$4(A$1,V);if(!f)return !1;for(a=Math.max(a,i),f=!1;a<n.count&&!f;)n.getVec(a,O$1),a++,c$d(S$2,A$1,V),j$7(S$2,S$2),c$d(x$1,V,O$1),j$7(x$1,x$1),f=!F$4(A$1,O$1)&&!F$4(V,O$1)&&Math.abs(z$5(S$2,x$1))<v$2;return f?(j$2(A$1,V,O$1,t),!0):(0!==r||1!==e||2!==i)&&b$3(n,t,0,1,2)}const v$2=.99619469809,A$1=n$b(),V=n$b(),O$1=n$b(),S$2=n$b(),x$1=n$b();function F(n,t,r){return n!==r&&d$2(n,r),r[3]=-z$5(r,t),r}function I$1(n,t){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function _$2(n,t,r,e=l$2()){return P$2(r,_$8(c$1.get(),t,n),e)}function w$2(t,r,e){return !!u$h(r)&&J(t,r.origin,r.direction,!0,!1,e)}function B$1(n,t,r){return J(n,t.origin,t.vector,!1,!1,r)}function U(n,t,r){return J(n,t.origin,t.vector,!1,!0,r)}function k$2(n,t){const{center:r,radius:e}=t;return H(n,r)-e>=0}function q(n,t){const{center:r,radius:e}=t;return H(n,r)+e<0}function z(n,t){return H(n,t)>=0}function L(n,t){return H(n,t)<0}function N(n,t){const r=t[0],e=t[1],o=t[2],i=t[3],s=t[4],c=t[5];return n[0]*(n[0]>0?r:i)+n[1]*(n[1]>0?e:s)+n[2]*(n[2]>0?o:c)+n[3]>=0}function C(n,t){const r=z$5(n,t.ray.direction),e=-H(n,t.ray.origin);if(e<0&&r>=0)return !1;if(r>-1e-6&&r<1e-6)return e>0;if((e<0||r<0)&&!(e<0&&r<0))return !0;const i=e/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function D(n,t){const r=z$5(n,t.ray.direction),e=-H(n,t.ray.origin);if(r>-1e-6&&r<1e-6)return e>0;const i=e/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function R(n,t,r){const e=d$c(c$1.get(),n,-n[3]),o=E(n,c$d(c$1.get(),t,e),c$1.get());return u$g(r,o,e),r}function E(n,t,r){const e=d$c(c$1.get(),n,z$5(n,t));return c$d(r,t,e),r}function G(n,t){return Math.abs(H(n,t))}function H(n,t){return z$5(n,t)+n[3]}function J(n,r,e,s,c,u){const a=z$5(n,e);if(0===a)return !1;let m=-(z$5(n,r)+n[3])/a;return c&&(m=s?Math.max(0,m):e$g(m,0,1)),!(m<0||!s&&m>1)&&(u$g(u,r,d$c(u,e,m)),!0)}function K(n){return n}const Q=[0,0,1,0];Object.freeze({__proto__:null,create:l$2,wrap:p$3,copy:d$2,fromValues:y$1,fromNormalAndOffset:h$3,fromPositionAndNormal:P$2,fromPoints:j$2,fromManyPoints:M$2,fromManyPointsSampleAt:b$3,setOffsetFromPoint:F,negate:I$1,fromVectorsAndPoint:_$2,intersectRay:w$2,intersectLineSegment:B$1,intersectLineSegmentClamp:U,isSphereFullyInside:k$2,isSphereFullyOutside:q,isPointInside:z,isPointOutside:L,isAABBFullyInside:N,clip:C,clipInfinite:D,projectPoint:R,projectVector:E,distance:G,signedDistance:H,normal:K,UP:Q});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l$3(r){return r?{origin:r$m(r.origin),direction:r$m(r.direction)}:{origin:n$b(),direction:n$b()}}function j$3(r,n){const e=E$1.get();return e.origin=r,e.direction=n,e}function R$1(r,n=l$3()){return S$3(r.origin,r.direction,n)}function b$4(r,n,e=l$3()){return r$n(e.origin,r),c$d(e.direction,n,r),e}function S$3(r,n,e=l$3()){return r$n(e.origin,r),r$n(e.direction,n),e}function v$3(r,e,o=l$3()){return y$2(r,r.screenToRender(e,x$6(c$1.get())),o)}function y$2(e,o,t=l$3()){const c=x$6(a$g(c$1.get(),o));if(c[2]=0,!e.unprojectFromRenderScreen(c,t.origin))return null;const s=x$6(a$g(c$1.get(),o));s[2]=1;const a=e.unprojectFromRenderScreen(s,c$1.get());return t$p(a)?null:(c$d(t.direction,a,t.origin),t)}function w$3(r,e,o=l$3()){return _$3(r,r.screenToRender(e,x$6(c$1.get())),o)}function _$3(n,e,o=l$3()){r$n(o.origin,n.eye);const s=o$i(c$1.get(),e[0],e[1],1),a=n.unprojectFromRenderScreen(s,c$1.get());return t$p(a)?null:(c$d(o.direction,a,o.origin),o)}function k$3(r,n){const e=_$8(c$1.get(),j$7(c$1.get(),r.direction),c$d(c$1.get(),n,r.origin));return z$5(e,e)}function F$1(r,n){return Math.sqrt(k$3(r,n))}function h$4(r,n,e){const o=z$5(r.direction,c$d(e,n,r.origin));return u$g(e,r.origin,d$c(e,r.direction,o)),e}function A$2(){return {origin:null,direction:null}}const E$1=new s(A$2);Object.freeze({__proto__:null,create:l$3,wrap:j$3,copy:R$1,fromPoints:b$4,fromValues:S$3,fromScreen:v$3,fromRender:y$2,fromScreenAtEye:w$3,fromRenderAtEye:_$3,distance2:k$3,distance:F$1,closestPoint:h$4,createWrapper:A$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const L$1=i$f.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class R$2{constructor(){this.plane=l$2(),this.origin=n$b(),this.basis1=n$b(),this.basis2=n$b();}}function z$1(s=js){return {plane:l$2(s.plane),origin:r$m(s.origin),basis1:r$m(s.basis1),basis2:r$m(s.basis2)}}function G$1(s,i,n){const t=Ps.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=p$3(0,0,0,0),J$1(t),t}function D$1(s,i=z$1()){return H$1(s.origin,s.basis1,s.basis2,i)}function H$1(s,i,n,t=z$1()){return r$n(t.origin,s),r$n(t.basis1,i),r$n(t.basis2,n),J$1(t),function(s,i){Math.abs(z$5(s.basis1,s.basis2)/(s$9(s.basis1)*s$9(s.basis2)))>1e-6&&L$1.warn(i,"Provided basis vectors are not perpendicular");Math.abs(z$5(s.basis1,ls(s)))>1e-6&&L$1.warn(i,"Basis vectors and plane normal are not perpendicular");Math.abs(-z$5(ls(s),s.origin)-s.plane[3])>1e-6&&L$1.warn(i,"Plane offset is not consistent with plane origin");}(t,"fromValues()"),t}function J$1(s){_$2(s.basis2,s.basis1,s.origin,s.plane);}function K$1(s,i,n){s!==n&&D$1(s,n);const t=d$c(c$1.get(),ls(s),i);return u$g(n.origin,n.origin,t),n.plane[3]-=i,n}function Q$1(s,i,n){return W(i,n),K$1(n,cs(s,s.origin),n),n}function W(s,i=z$1()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return o$i(i.origin,s[0]+n,s[1]+t,0),o$i(i.basis1,n,0,0),o$i(i.basis2,0,t,0),y$1(0,0,1,0,i.plane),i}function X(s,i,n){return !!w$2(s.plane,i,n)&&ps(s,n)}function Z(s,i,n){if(X(s,i,n))return n;const t=$(s,i,c$1.get());return u$g(n,i.origin,d$c(c$1.get(),i.direction,q$5(i.origin,t)/s$9(i.direction))),n}function $(s,n,t){const a=Is.get();hs(s,n,a,Is.get());let r=Number.POSITIVE_INFINITY;for(const e of Ns){const c=ds(s,e,vs.get()),u=c$1.get();if(B$1(a,c,u)){const s=w$6(c$1.get(),n.origin,u),a=Math.abs(N$4(z$5(n.direction,s)));a<r&&(r=a,r$n(t,u));}}return r===Number.POSITIVE_INFINITY?ss(s,n,t):t}function ss(s,i,n){if(X(s,i,n))return n;const t=Is.get(),a=Is.get();hs(s,i,t,a);let r=Number.POSITIVE_INFINITY;for(const e of Ns){const c=ds(s,e,vs.get()),u=c$1.get();if(U(t,c,u)){const s=k$3(i,u);if(!z(a,u))continue;s<r&&(r=s,r$n(n,u));}}return ts(s,i.origin)<r&&is(s,i.origin,n),n}function is(s,i,n){const t=R(s.plane,i,c$1.get()),a=A(ms(s,s.basis1),t,-1,1,c$1.get()),o=A(ms(s,s.basis2),t,-1,1,c$1.get());return c$d(n,u$g(c$1.get(),a,o),s.origin),n}function ns(s,i,n){const{origin:t,basis1:a,basis2:o}=s,r=c$d(c$1.get(),i,t),e=i$1(a,r),u=i$1(o,r),g=i$1(ls(s),r);return o$i(n,e,u,g)}function ts(s,i){const n=ns(s,i,c$1.get()),{basis1:t,basis2:a}=s,o=s$9(t),r=s$9(a),e=Math.max(Math.abs(n[0])-o,0),c=Math.max(Math.abs(n[1])-r,0),u=n[2];return e*e+c*c+u*u}function as(s,i){return Math.sqrt(ts(s,i))}function os(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of Ns){const a=ds(s,t,vs.get()),o=h(a,i);o>n&&(n=o);}return Math.sqrt(n)}function rs(s,i){return z(s.plane,i)&&ps(s,i)}function es(s,i,n,t){return function(s,i,n){switch(i){case 0:r$n(n,s.basis1),j$7(n,n);break;case 1:r$n(n,s.basis2),j$7(n,n);break;case 2:r$n(n,ls(s));}return n}(s,n,t)}function cs(s,i){const n=-s.plane[3];return i$1(ls(s),i)-n}function us(s,i,n,t){const a=cs(s,i),o=d$c(ws,ls(s),n-a);return u$g(t,i,o),t}function gs(s,i){return F$4(s.basis1,i.basis1)&&F$4(s.basis2,i.basis2)&&F$4(s.origin,i.origin)}function bs(s,i,n){return s!==n&&D$1(s,n),h$a(Ms,i),r$o(Ms,Ms),I$7(n.basis1,s.basis1,Ms),I$7(n.basis2,s.basis2,Ms),I$7(K(n.plane),K(s.plane),Ms),I$7(n.origin,s.origin,i),F(n.plane,n.origin,n.plane),n}function fs(s,i,n,t){return s!==t&&D$1(s,t),f$g(Ts,o$j(Ts),i,n),I$7(t.basis1,s.basis1,Ts),I$7(t.basis2,s.basis2,Ts),J$1(t),t}function ls(s){return K(s.plane)}function ps(s,i){const n=c$d(c$1.get(),i,s.origin),t=p$9(s.basis1),a=p$9(s.basis2),o=z$5(s.basis1,n),r=z$5(s.basis2,n);return -o-t<0&&o-t<0&&-r-a<0&&r-a<0}function ms(s,i){const n=vs.get();return r$n(n.origin,s.origin),r$n(n.vector,i),n}function ds(s,i,n){const{basis1:t,basis2:a,origin:o}=s,c=d$c(c$1.get(),t,i.origin[0]),u=d$c(c$1.get(),a,i.origin[1]);u$g(n.origin,c,u),u$g(n.origin,n.origin,o);const g=d$c(c$1.get(),t,i.direction[0]),b=d$c(c$1.get(),a,i.direction[1]);return d$c(n.vector,u$g(g,g,b),2),n}function hs(s,i,n,t){const a=ls(s);_$2(a,i.direction,i.origin,n),_$2(K(n),a,i.origin,t);}const js={plane:l$2(),origin:t$o(0,0,0),basis1:t$o(1,0,0),basis2:t$o(0,1,0)},Is=new s(l$2),vs=new s(p),ws=n$b(),Ps=new s((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Ns=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Ms=e(),Ts=e();Object.freeze({__proto__:null,BoundedPlaneClass:R$2,create:z$1,wrap:G$1,copy:D$1,fromValues:H$1,updateUnboundedPlane:J$1,elevate:K$1,setExtent:Q$1,fromAABoundingRect:W,intersectRay:X,intersectRayClosestSilhouette:Z,closestPointOnSilhouette:$,closestPoint:ss,projectPoint:is,projectPointLocal:ns,distance2:ts,distance:as,distanceToSilhouette:os,extrusionContainsPoint:rs,axisAt:es,altitudeAt:cs,setAltitudeAt:us,equals:gs,transform:bs,rotate:fs,normal:ls,UP:js});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const O$2=i$f.getLogger("esri.views.3d.support.geometryUtils.sphere");function _$4(t){return t?{radius:t.radius,center:r$m(t.center)}:{radius:1,center:n$b()}}function q$1(t,r){const e=N$1.get();return e.radius=t,e.center=r||W$1,e}function P$3(t,r=_$4()){return R$3(t.radius,t.center,r)}function R$3(t,r,e=_$4()){return r$n(e.center,r),e.radius=t,e}function U$1(t,r,e){return t!==e&&r$n(e.center,t.center),e.radius=t.radius+r,e}function z$2(t,r,e){return O$2.error("sphere.setExtent is not yet supported"),t===e?e:P$3(t,e)}function E$2(r,e,s){if(t$p(e))return !1;const n=c$d(c$1.get(),e.origin,r.center),i=z$5(e.direction,e.direction),f=2*z$5(e.direction,n),d=f*f-4*i*(z$5(n,n)-r.radius*r.radius);if(d<0)return !1;const m=Math.sqrt(d);let g=(-f-m)/(2*i);const p=(-f+m)/(2*i);return (g<0||p<g&&p>0)&&(g=p),!(g<0)&&(s&&u$g(s,e.origin,d$c(c$1.get(),e.direction,g)),!0)}function L$2(t,r,e,s){return E$2(t,w$3(r,e,Q$2),s)}function T(t,r){return E$2(t,r,null)}function C$1(t,r,e){if(E$2(t,r,e))return e;const s=V$1(t,r,c$1.get());return u$g(e,r.origin,d$c(c$1.get(),r.direction,q$5(r.origin,s)/s$9(r.direction))),e}function V$1(t,r,e){const s=c$1.get(),n=f$1.get();_$8(s,r.origin,r.direction),_$8(e,s,r.origin),d$c(e,e,1/s$9(e)*t.radius);const i=G$2(t,r.origin),o=u$2(r.origin,e);return o$j(n),f$g(n,n,o+i,s),I$7(e,e,n),e}function B$2(t,r,e){return E$2(t,r,e)?e:(h$4(r,t.center,e),D$2(t,e,e))}function D$2(t,r,e){const s=c$d(c$1.get(),r,t.center),n=d$c(c$1.get(),s,t.radius/s$9(s));return u$g(e,n,t.center)}function F$2(t,r){const e=c$d(c$1.get(),r,t.center),s=p$9(e),n=t.radius*t.radius;return Math.sqrt(Math.abs(s-n))}function G$2(t,r){const s=c$d(c$1.get(),r,t.center),n=s$9(s),i=t.radius+Math.abs(t.radius-n);return N$4(t.radius/i)}const H$2=n$b();function I$2(t,r,e,s){const n=c$d(H$2,r,t.center);switch(e){case 0:{const t=q$6(n,H$2)[2];return o$i(s,-Math.sin(t),Math.cos(t),0)}case 1:{const t=q$6(n,H$2),r=t[1],e=t[2],i=Math.sin(r);return o$i(s,-i*Math.cos(e),-i*Math.sin(e),Math.cos(r))}case 2:return j$7(s,n);default:return}}function J$2(t,r){const e=c$d(X$1,r,t.center);return s$9(e)-t.radius}function K$2(t,r,e,s){const n=J$2(t,r),i=I$2(t,r,2,X$1),o=d$c(X$1,i,e-n);return u$g(s,r,o),s}const N$1=new s((()=>({center:null,radius:0}))),Q$2=l$3(),W$1=n$b(),X$1=n$b();Object.freeze(W$1);Object.freeze({__proto__:null,create:_$4,wrap:q$1,copy:P$3,fromValues:R$3,elevate:U$1,setExtent:z$2,intersectRay:E$2,intersectScreen:L$2,intersectsRay:T,intersectRayClosestSilhouette:C$1,closestPointOnSilhouette:V$1,closestPoint:B$2,projectPoint:D$2,distanceToSilhouette:F$2,angleToSilhouette:G$2,axisAt:I$2,altitudeAt:J$2,setAltitudeAt:K$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$3(r=g$1){return [r[0],r[1],r[2],r[3]]}function a$4(r,n,t,o){return f$4(r,n,t,o,r$2.get())}function u$3(r,n){return f$4(r[0],r[1],r[2],n,r$2.get())}function c$4(r,n=e$3()){return f$4(r[0],r[1],r[2],r[3],n)}function f$4(r,n,t,s,o=e$3()){return o[0]=r,o[1]=n,o[2]=t,o[3]=s,o}function i$2(n,t,s=e$3()){return r$n(s,n),s[3]=t,s}function p$4(r,s,a=e$3()){return _$8(a,r,s),j$7(a,a),a[3]=u$2(r,s),a}function m$3(r){return r}const g$1=[0,0,1,0];Object.freeze({__proto__:null,create:e$3,wrap:a$4,wrapAxisAngle:u$3,copy:c$4,fromValues:f$4,fromAxisAndAngle:i$2,fromPoints:p$4,axis:m$3,UP:g$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u$4(r){return r?{ray:l$3(r.ray),c0:r.c0,c1:r.c1}:{ray:l$3(),c0:0,c1:Number.MAX_VALUE}}function f$5(r,t,c){const n=_$5.get();return n.ray=r,n.c0=t,n.c1=c,n}function m$4(r,t=u$4()){return y$3(r.ray,r.c0,r.c1,t)}function y$3(r,t,c,n=u$4()){return R$1(r,n.ray),n.c0=t,n.c1=c,n}function g$2(r,t=u$4()){return R$1(r,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function p$5(t,c=u$4()){return b$5(t,j$7(c$1.get(),t.vector),c)}function b$5(r,c,n=u$4()){const e=s$9(r.vector);return S$3(r.origin,c,n.ray),n.c0=0,n.c1=e,n}function j$4(r,t){return A$3(r,r.c0,t)}function l$4(r,t){return A$3(r,r.c1,t)}function A$3(r,t,e){return u$g(e,r.ray.origin,d$c(e,r.ray.direction,t))}const _$5=new s((()=>({c0:0,c1:0,ray:null})));Object.freeze({__proto__:null,create:u$4,wrap:f$5,copy:m$4,fromValues:y$3,fromRay:g$2,fromLineSegment:p$5,fromLineSegmentAndDirection:b$5,getStart:j$4,getEnd:l$4,getAt:A$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function d$3(s){if(s){const{planes:r,points:e}=s;return {planes:[l$2(r[0]),l$2(r[1]),l$2(r[2]),l$2(r[3]),l$2(r[4]),l$2(r[5])],points:[r$m(e[0]),r$m(e[1]),r$m(e[2]),r$m(e[3]),r$m(e[4]),r$m(e[5]),r$m(e[6]),r$m(e[7])]}}return {planes:[l$2(),l$2(),l$2(),l$2(),l$2(),l$2()],points:[n$b(),n$b(),n$b(),n$b(),n$b(),n$b(),n$b(),n$b()]}}function P$4(t,r=d$3()){return R$4(t.planes,t.points,r)}function R$4(t,r,e=d$3()){for(let r=0;r<6;r++)d$2(t[r],e.planes[r]);for(let t=0;t<8;t++)r$n(e.points[t],r[t]);return e}function S$4(t,r,s=d$3()){const{points:a}=s,i=u$i(f$1.get(),r,t);h$a(i,i);for(let t=0;t<8;++t){const r=y$7(r$2.get(),L$3[t],i);o$i(a[t],r[0]/r[3],r[1]/r[3],r[2]/r[3]);}return w$4(s),s}function w$4(t){const{planes:r,points:s}=t;j$2(s[4],s[0],s[3],r[0]),j$2(s[1],s[5],s[6],r[1]),j$2(s[4],s[5],s[1],r[2]),j$2(s[3],s[2],s[6],r[3]),j$2(s[0],s[1],s[2],r[4]),j$2(s[5],s[4],s[7],r[5]);}function x$2(t,r){for(let s=0;s<6;s++)if(k$2(t[s],r))return !1;return !0}function A$4(t,r){return C$2(t,g$2(r,M$3.get()))}function B$3(t,r){for(let s=0;s<6;s++){const e=t[s];if(!D(e,r))return !1}return !0}function O$3(t,r,s){return C$2(t,b$5(r,s,M$3.get()))}function q$2(t,r){for(let s=0;s<6;s++){if(H(t[s],r)>0)return !1}return !0}function z$3(t,r){for(let s=0;s<6;s++)if(N(t[s],r))return !1;return !0}function C$2(t,r){for(let s=0;s<6;s++)if(!C(t[s],r))return !1;return !0}const I$3={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},L$3=[r$p(-1,-1,-1,1),r$p(1,-1,-1,1),r$p(1,1,-1,1),r$p(-1,1,-1,1),r$p(-1,-1,1,1),r$p(1,-1,1,1),r$p(1,1,1,1),r$p(-1,1,1,1)],M$3=new s(u$4);Object.freeze({__proto__:null,create:d$3,copy:P$4,fromValues:R$4,fromMatrix:S$4,recomputePlanes:w$4,intersectsSphere:x$2,intersectsRay:A$4,intersectClipRay:B$3,intersectsLineSegment:O$3,intersectsPoint:q$2,intersectsAABB:z$3,planePointIndices:I$3});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a$5{acquire(t,i,r,e,n,o){this.id=a$5._idGen.gen(t&&t.id),this.geometry=t,this.material=i,this.transformation=r,this.instanceParameters=e,this.origin=n,this.shaderTransformation=o;}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return !!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(I$7(t,t,this.getStaticTransformation()),!0)}}a$5._idGen=new t$2,a$5.pool=new t$q(a$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$1(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r];}function r$3(n,t,r,c){for(let l=0;l<c;++l)f$6[0]=n[l],o$1(f$6,e$4,1),t[l]=e$4[0],r[l]=e$4[1];}const f$6=new Float64Array(1),e$4=new Float32Array(2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function f$7(e){return !!u$h(e)&&!e.visible}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class N$2{constructor(t=0){this.offset=t,this.sphere=_$4(),this.tmpVertex=n$b();}applyToVertex(t,s,r){const e=this.objectTransform.transform;let i=e[0]*t+e[4]*s+e[8]*r+e[12],a=e[1]*t+e[5]*s+e[9]*r+e[13],n=e[2]*t+e[6]*s+e[10]*r+e[14];const h=this.offset/Math.sqrt(i*i+a*a+n*n);i+=i*h,a+=a*h,n+=n*h;const o=this.objectTransform.inverse;return this.tmpVertex[0]=o[0]*i+o[4]*a+o[8]*n+o[12],this.tmpVertex[1]=o[1]*i+o[5]*a+o[9]*n+o[13],this.tmpVertex[2]=o[2]*i+o[6]*a+o[10]*n+o[14],this.tmpVertex}applyToMinMax(t,s){const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r;const e=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*e,s[1]+=s[1]*e,s[2]+=s[2]*e;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t,s){const r=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),e=this.offset/r;return this.sphere.center[0]=s[0]+s[0]*e,this.sphere.center[1]=s[1]+s[1]*e,this.sphere.center[2]=s[2]+s[2]*e,this.sphere.radius=t+t*this.offset/r,this.sphere}}const A$5=new N$2;function B$4(t){return u$h(t)?(A$5.offset=t,A$5):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const S$5={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s$1=s=>class extends s{constructor(){super(...arguments),this._isDisposed=!1;}dispose(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose();}this._isDisposed=!0;}get isDisposed(){return this._isDisposed}};class e$5 extends(s$1(class{})){}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r$4 extends e$5{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output;}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class d$4 extends r$4{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId);}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear();}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId));}bindTexture(t,r){u$h(this._texture)&&(r.setUniform1i("tex",S$5.DIFFUSE),t.bindTexture(this._texture.glTexture,S$5.DIFFUSE)),u$h(this._textureNormal)&&(r.setUniform1i("normalTexture",S$5.NORMAL),t.bindTexture(this._textureNormal.glTexture,S$5.NORMAL)),u$h(this._textureEmissive)&&(r.setUniform1i("texEmission",S$5.EMISSION),t.bindTexture(this._textureEmissive.glTexture,S$5.EMISSION)),u$h(this._textureOcclusion)&&(r.setUniform1i("texOcclusion",S$5.OCCLUSION),t.bindTexture(this._textureOcclusion.glTexture,S$5.OCCLUSION)),u$h(this._textureMetallicRoughness)&&(r.setUniform1i("texMetallicRoughness",S$5.METALLIC_ROUGHNESS),t.bindTexture(this._textureMetallicRoughness.glTexture,S$5.METALLIC_ROUGHNESS));}bindTextureScale(t,i){const r=u$h(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?i.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):i.setUniform2f("textureCoordinateScaleFactor",1,1);}_acquireIfNotUndefined(e){if(!t$p(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n$2(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return h$5.scale=Math.min(i.divisor/(t-i.offset),1),h$5.factor=function(e){return Math.abs(e*e*e)}(e),h$5.minPixelSize=i.minPixelSize,h$5.paddingPixels=r,h$5}function l$5(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function s$2(t,a){return Math.max(M$9(t*a.scale,t,a.factor),l$5(t,a))}function d$5(e,t,a,i){return s$2(e,n$2(t,a,i))}const h$5={scale:0,factor:0,minPixelSize:0,paddingPixels:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d$6=i$i(),h$6=i$g;function g$3(t,n,e,o,i,r,s){const c=f$7(n),f=e.tolerance;if(!c)if(t.boundingInfo)f$f("triangle"===t.data.primitiveType),M$4(t.boundingInfo,o,i,f,r,s);else {const n=t.getIndices(h$6.POSITION),e=t.getAttribute(h$6.POSITION);y$4(o,i,0,n.length/3,n,e,void 0,r,s);}}const x$3=n$b();function M$4(n,e,o,i,r,s){const c=j$5(e,o,x$3);if(d$e(d$6,n.getBBMin()),q$7(d$6,n.getBBMax()),u$h(r)&&r.applyToAabb(d$6),P$5(d$6,e,c,i)){const t=n.getPrimitiveIndices(),c=n.getIndices(),f=n.getPosition(),a=t?t.length:c.length/3;if(a>W$2){const t=n.getChildren();if(void 0!==t){for(let n=0;n<8;++n)void 0!==t[n]&&M$4(t[n],e,o,i,r,s);return}}y$4(e,o,0,a,c,f,t,r,s);}}const I$4=2**-52,b$6=n$b();function y$4(n,e,o,i,r,s,c,f,a){if(c)return function(n,e,o,i,r,s,c,f,a){const{data:l,offsetIdx:u,strideIdx:m}=s,p=n[0],d=n[1],h=n[2],g=e[0],x=e[1],M=e[2],y=g-p,v=x-d,T=M-h;for(let n=o;n<i;++n){const e=c[n];let o=3*e,i=u+m*r[o++],s=l[i++],g=l[i++],x=l[i];i=u+m*r[o++];let M=l[i++],j=l[i++],P=l[i];i=u+m*r[o];let V=l[i++],O=l[i++],B=l[i];u$h(f)&&([s,g,x]=f.applyToVertex(s,g,x,n),[M,j,P]=f.applyToVertex(M,j,P,n),[V,O,B]=f.applyToVertex(V,O,B,n));const S=M-s,L=j-g,U=P-x,E=V-s,N=O-g,W=B-x,k=v*W-N*T,z=T*E-W*y,C=y*N-E*v,R=S*k+L*z+U*C;if(Math.abs(R)<=I$4)continue;const H=p-s,X=d-g,Y=h-x,Z=H*k+X*z+Y*C;if(R>0){if(Z<0||Z>R)continue}else if(Z>0||Z<R)continue;const _=X*U-L*Y,q=Y*S-U*H,w=H*L-S*X,D=y*_+v*q+T*w;if(R>0){if(D<0||Z+D>R)continue}else if(D>0||Z+D<R)continue;const F=(E*_+N*q+W*w)/R;if(F>=0){a(F,A$6(S,L,U,E,N,W,b$6),e);}}}(n,e,o,i,r,s,c,f,a);const{data:l,offsetIdx:u,strideIdx:m}=s,p=n[0],d=n[1],h=n[2],g=e[0]-p,x=e[1]-d,M=e[2]-h;for(let n=o,e=3*o;n<i;++n){let o=u+m*r[e++],i=l[o++],s=l[o++],c=l[o];o=u+m*r[e++];let y=l[o++],v=l[o++],T=l[o];o=u+m*r[e++];let j=l[o++],P=l[o++],V=l[o];u$h(f)&&([i,s,c]=f.applyToVertex(i,s,c,n),[y,v,T]=f.applyToVertex(y,v,T,n),[j,P,V]=f.applyToVertex(j,P,V,n));const O=y-i,B=v-s,S=T-c,L=j-i,U=P-s,E=V-c,N=x*E-U*M,W=M*L-E*g,k=g*U-L*x,z=O*N+B*W+S*k;if(Math.abs(z)<=I$4)continue;const C=p-i,R=d-s,H=h-c,X=C*N+R*W+H*k;if(z>0){if(X<0||X>z)continue}else if(X>0||X<z)continue;const Y=R*S-B*H,Z=H*O-S*C,_=C*B-O*R,q=g*Y+x*Z+M*_;if(z>0){if(q<0||X+q>z)continue}else if(q>0||X+q<z)continue;const w=(L*Y+U*Z+E*_)/z;if(w>=0){a(w,A$6(O,B,S,L,U,E,b$6),n);}}}const v$4=n$b(),T$1=n$b();function A$6(t,n,e,o,c,f,a){return o$i(v$4,t,n,e),o$i(T$1,o,c,f),_$8(a,v$4,T$1),j$7(a,a),a}function j$5(t,n,e){return o$i(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function P$5(t,n,e,o){return V$2(t,n,e,o,1/0)}function V$2(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-o-n[1])*e[1],l=(t[4]+o-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<i)}function O$4(t,e,o,i,r){let s=(o.screenLength||0)*t.pixelRatio;r&&(s=d$5(s,i,e,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return i$j(c*e,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function B$5(t,n,e){if(!t)return;const o=t.parameters,i=t.paddingPixelsOverride;n.setUniform4f(e,o.divisor,o.offset,o.minPixelSize,i);}function S$6(t,n){const e=n?S$6(n):{};for(const n in t){let o=t[n];o&&o.forEach&&(o=E$3(o)),null==o&&n in e||(e[n]=o);}return e}function L$4(t,n){let e=!1;for(const o in n){const i=n[o];void 0!==i&&(e=!0,Array.isArray(i)?t[o]=i.slice():t[o]=i);}return e}function E$3(t){const n=[];return t.forEach((t=>n.push(t))),n}const N$3={multiply:1,ignore:2,replace:3,tint:4},W$2=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o$2={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a$6{constructor(e,t,s){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=o$2,this.id=a$6._idGen.gen(e),this._params=S$6(t,s),this.validateParameterValues(this._params);}dispose(){}get params(){return this._params}update(){return !1}setParameterValues(e){L$4(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged());}validateParameterValues(){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}isVisibleInPass(e){return !0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){u$h(this.materialRepository)&&this.materialRepository.materialChanged(this);}}a$6._idGen=new t$2;const d$7={renderOccluded:1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l$6(e,t,f,o,s){const n=f.typedBuffer,l=f.typedBufferStride,r=e.length;if(o*=l,null==s||1===s)for(let f=0;f<r;++f){const s=2*e[f];n[o]=t[s],n[o+1]=t[s+1],o+=l;}else for(let f=0;f<r;++f){const r=2*e[f];for(let e=0;e<s;++e)n[o]=t[r],n[o+1]=t[r+1],o+=l;}}function r$5(e,t,f,o,s){const n=f.typedBuffer,l=f.typedBufferStride,r=e.length;if(o*=l,null==s||1===s)for(let f=0;f<r;++f){const s=3*e[f];n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],o+=l;}else for(let f=0;f<r;++f){const r=3*e[f];for(let e=0;e<s;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],o+=l;}}function i$3(e,t,f,o,s){const n=f.typedBuffer,l=f.typedBufferStride,r=e.length;if(o*=l,null==s||1===s)for(let f=0;f<r;++f){const s=4*e[f];n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],n[o+3]=t[s+3],o+=l;}else for(let f=0;f<r;++f){const r=4*e[f];for(let e=0;e<s;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=l;}}function d$8(e,t,f,o,s,n){if(f){const l=f,r=o.typedBuffer,i=o.typedBufferStride,c=e.length;if(s*=i,null==n||1===n)for(let f=0;f<c;++f){const o=3*e[f],n=t[o],c=t[o+1],a=t[o+2];r[s]=l[0]*n+l[4]*c+l[8]*a+l[12],r[s+1]=l[1]*n+l[5]*c+l[9]*a+l[13],r[s+2]=l[2]*n+l[6]*c+l[10]*a+l[14],s+=i;}else for(let f=0;f<c;++f){const o=3*e[f],c=t[o],a=t[o+1],d=t[o+2],u=l[0]*c+l[4]*a+l[8]*d+l[12],p=l[1]*c+l[5]*a+l[9]*d+l[13],B=l[2]*c+l[6]*a+l[10]*d+l[14];for(let e=0;e<n;++e)r[s]=u,r[s+1]=p,r[s+2]=B,s+=i;}}else r$5(e,t,o,s,n);}function u$5(e,t,f,o,s,n){if(f){const l=f,r=o.typedBuffer,i=o.typedBufferStride,c=e.length,a=l[0],d=l[1],u=l[2],p=l[4],B=l[5],g=l[6],y=l[8],h=l[9],b=l[10],z=Math.abs(1-a*a+p*p+y*y)>1e-5||Math.abs(1-d*d+B*B+h*h)>1e-5||Math.abs(1-u*u+g*g+b*b)>1e-5;if(s*=i,null==n||1===n)for(let f=0;f<c;++f){const o=3*e[f],n=t[o],l=t[o+1],c=t[o+2];let O=a*n+p*l+y*c,S=d*n+B*l+h*c,N=u*n+g*l+b*c;if(z){const e=O*O+S*S+N*N;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);O/=t,S/=t,N/=t;}}r[s+0]=O,r[s+1]=S,r[s+2]=N,s+=i;}else for(let f=0;f<c;++f){const o=3*e[f],l=t[o],c=t[o+1],O=t[o+2];let S=a*l+p*c+y*O,N=d*l+B*c+h*O,k=u*l+g*c+b*O;if(z){const e=S*S+N*N+k*k;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);S/=t,N/=t,k/=t;}}for(let e=0;e<n;++e)r[s+0]=S,r[s+1]=N,r[s+2]=k,s+=i;}}else r$5(e,t,o,s,n);}function p$6(e,t,f,o,s,n){const l=o.typedBuffer,r=o.typedBufferStride,i=e.length;if(s*=r,null==n||1===n){if(4===f)for(let f=0;f<i;++f){const o=4*e[f];l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=t[o+3],s+=r;}else if(3===f)for(let f=0;f<i;++f){const o=3*e[f];l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=255,s+=r;}}else if(4===f)for(let f=0;f<i;++f){const o=4*e[f];for(let e=0;e<n;++e)l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=t[o+3],s+=r;}else if(3===f)for(let f=0;f<i;++f){const o=3*e[f];for(let e=0;e<n;++e)l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=255,s+=r;}}function g$4(r,c,a,B,g,y){for(const h of c.fieldNames){const c=r.vertexAttr[h],b=r.indices[h];if(c&&b)switch(h){case i$g.POSITION:{f$f(3===c.size);const e=g.getField(h,a$h);e&&d$8(b,c.data,a,e,y);break}case i$g.NORMAL:{f$f(3===c.size);const e=g.getField(h,a$h);e&&u$5(b,c.data,B,e,y);break}case i$g.UV0:{f$f(2===c.size);const e=g.getField(h,u$j);e&&l$6(b,c.data,e,y);break}case i$g.UVMAPSPACE:{f$f(4===c.size);const t=g.getField(h,p$a);t&&i$3(b,c.data,t,y);break}case i$g.MEANVERTEXPOSITION:{f$f(3===c.size);const e=g.getField(h,a$h);e&&d$8(b,c.data,a,e,y);break}case i$g.BOUND1:case i$g.BOUND2:case i$g.BOUND3:{f$f(3===c.size);const e=g.getField(h,a$h);e&&d$8(b,c.data,a,e,y);break}case i$g.COLOR:{f$f(3===c.size||4===c.size);const e=g.getField(h,x$7);e&&p$6(b,c.data,c.size,e,y);break}case i$g.SYMBOLCOLOR:{f$f(3===c.size||4===c.size);const e=g.getField(h,x$7);e&&p$6(b,c.data,c.size,e,y);break}case i$g.TANGENT:{f$f(4===c.size);const t=g.getField(h,p$a);t&&i$3(b,c.data,t,y);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$3(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)};}(t$3||(t$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d$9=.1,o$3=.001;function r$6(d,o){const r=d.fragment;switch(o.alphaDiscardMode){case 0:r.code.add(t$3`
        #define discardOrAdjustAlpha(color) { if (color.a < ${t$3.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(t$3`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(t$3`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(t$3`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u$6=e$h(770,1,771,771),e$6=t$r(1,1),o$4=t$r(0,771);function c$5(n){return 2===n?null:1===n?o$4:e$6}const f$8=5e5,i$4={factor:-1,units:-2};function s$3(n){return n?i$4:null}function a$7(n){return 3===n||2===n?513:515}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t$4{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i$5{constructor(i,r){r&&(this._config=r.snapshot()),this._program=this.initializeProgram(i),i.commonUniformStore&&(this._commonUniformStore=i.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(i);}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null);}reload(i){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(i),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program);}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,r,o){}bindMaterial(i,r,o){}bindDraw(i,r,o){}bindPipelineState(i){i.setPipelineState(this.pipeline);}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return 4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e$7{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0));}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function r$7(e={}){return (r,s)=>{var a,i;r._parameterNames=null!=(a=r._parameterNames)?a:[],r._parameterNames.push(s);const o=r._parameterNames.length-1,h=e.count||2,n=Math.ceil(h$b(h)),m=null!=(i=r._parameterBits)?i:[0];let p=0;for(;m[p]+n>16;)p++,p>=m.length&&m.push(0);r._parameterBits=m;const _=m[p],y=(1<<n)-1<<_;m[p]+=n,Object.defineProperty(r,s,{get(){return this[o]},set(t){if(this[o]!==t&&(this[o]=t,this._keyDirty=!0,this._parameterBits[p]=this._parameterBits[p]&~y|+t<<_&y,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration values must be booleans or numbers!"}});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var o$5;!function(n){function o(n,o,t){c$e(r$8,t,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",r$8);}n.bindCamPosition=function(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2]);},n.bindProjectionMatrix=function(i,n){i.setUniformMatrix4fv("proj",n);},n.bindNearFar=function(i,n){i.setUniform2fv("nearFar",n);},n.bindViewCustomOrigin=o,n.bindView=function(i,n){o(i,n.origin,n.camera.viewMatrix);},n.bindViewport=function(i,n){i.setUniform4fv("viewport",n.camera.fullViewport);};}(o$5||(o$5={}));const r$8=r$q();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l$7(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=t$3`
      struct SliceFactors {
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
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,a=t$3`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
      }
    `,l=s.sliceHighlightDisabled?t$3`#define highlightSlice(_color_, _pos_) (_color_)`:t$3`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(l);}else {const i=t$3`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i);}}!function(i){i.bindUniformsWithOrigin=function(e,s,a){i.bindUniforms(e,s,a.slicePlane,a.origin);},i.bindUniforms=function(i,o,l,r){o.slicePlaneEnabled&&(u$h(l)?(r?(c$d(c$6,l.origin,r),i.setUniform3fv("slicePlaneOrigin",c$6)):i.setUniform3fv("slicePlaneOrigin",l.origin),i.setUniform3fv("slicePlaneBasis1",l.basis1),i.setUniform3fv("slicePlaneBasis2",l.basis2)):(i.setUniform3fv("slicePlaneBasis1",f$h),i.setUniform3fv("slicePlaneBasis2",f$h),i.setUniform3fv("slicePlaneOrigin",f$h)));};}(l$7||(l$7={}));const c$6=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i$6(i){i.fragment.uniforms.add("depthTex","sampler2D"),i.fragment.uniforms.add("highlightViewportPixelSz","vec4"),i.fragment.code.add(t$3`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `);}!function(e){e.bindOutputHighlight=function(e,i,t){e.bindTexture(t.highlightDepthTexture,5),i.setUniform1i("depthTex",5),i.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1]);};}(i$6||(i$6={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function v$5(v,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&v.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(v.vertex.uniforms.add("vvSizeMinSize","vec3"),v.vertex.uniforms.add("vvSizeMaxSize","vec3"),v.vertex.uniforms.add("vvSizeOffset","vec3"),v.vertex.uniforms.add("vvSizeFactor","vec3"),v.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),v.vertex.uniforms.add("vvSymbolAnchor","vec3"),v.vertex.code.add(t$3`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),v.vertex.code.add(t$3`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?t$3`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):v.vertex.code.add(t$3`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),o.vvColor?(v.vertex.defines.addInt("VV_COLOR_N",8),v.vertex.code.add(t$3`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${o.vvInstancingEnabled?t$3`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):v.vertex.code.add(t$3`
      vec4 vvColor() { return vec4(1.0); }
    `);}!function(e){function v(e,v){v.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",v.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",v.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",v.vvSizeOffset),e.setUniform3fv("vvSizeFactor",v.vvSizeFactor)),v.vvColorEnabled&&(e.setUniform1fv("vvColorValues",v.vvColorValues),e.setUniform4fv("vvColorColors",v.vvColorColors));}e.bindUniforms=v,e.bindUniformsWithOpacity=function(e,o){v(e,o),o.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",o.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",o.vvOpacityOpacities));},e.bindUniformsForSymbols=function(e,o){v(e,o),o.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",o.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",o.vvSymbolRotationMatrix));};}(v$5||(v$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a$8(r){r.vertex.code.add(t$3`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),r.vertex.code.add(t$3`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),r.vertex.code.add(t$3`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),r.vertex.code.add(t$3`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),r.vertex.code.add(t$3`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),r.vertex.code.add(t$3`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),r.vertex.code.add(t$3`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `);}!function(e){e.bindUniforms=function(e,a){if(a.screenSizePerspective){B$5(a.screenSizePerspective,e,"screenSizePerspective");const s=a.screenSizePerspectiveAlignment||a.screenSizePerspective;B$5(s,e,"screenSizePerspectiveAlignment");}};}(a$8||(a$8={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$5(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(a$8),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(t$3`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?t$3`vec3 worldNormal = normalize(worldPos + localOrigin);`:t$3`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?t$3`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:t$3`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(t$3`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `);}function l$8(e,r,t,l=c$7){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}!function(e){e.bindUniforms=function(e,r,t){if(!r.verticalOffset)return;const c=l$8(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",c.screenLength*i,c.perDistance,c.minWorldLength,c.maxWorldLength);};}(t$5||(t$5={}));const c$7={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const f$9={mask:255},c$8={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t$6={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$8(e){e.code.add(t$3`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i$7(i){i.fragment.include(e$8),i.fragment.uniforms.add("depthTex","sampler2D"),i.fragment.uniforms.add("shadowMapNum","int"),i.fragment.uniforms.add("shadowMapDistance","vec4"),i.fragment.uniforms.add("shadowMapMatrix","mat4",4),i.fragment.uniforms.add("depthHalfPixelSz","float"),i.fragment.code.add(t$3`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `);}!function(e){e.bindUniforms=function(e,a,i){a.shadowMappingEnabled&&(a.shadowMap.bind(e,i),a.shadowMap.bindView(e,a.origin));},e.bindViewCustomOrigin=function(e,a,i){a.shadowMappingEnabled&&a.shadowMap.bindView(e,i);},e.bindView=function(e,a){a.shadowMappingEnabled&&a.shadowMap.bindView(e,a.origin);};}(i$7||(i$7={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class l$9{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null;}get doublePrecisionRequiresObfuscation(){if(t$p(this._doublePrecisionRequiresObfuscation)){const e=p$7(this.context,!1),n=p$7(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===n||e/n>5);}return this._doublePrecisionRequiresObfuscation}}let u$7=null;function f$a(n){return (t$p(u$7)||u$7.context!==n)&&(u$7=new l$9(n)),u$7}function p$7(e,n){const l=new r$r(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const u=i$k.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),f=new a$i(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:u}),v=t$o(5633261.287538229,2626832.878767164,1434988.0495278358),p=t$o(5633271.46742708,2626873.6381334523,1434963.231608387),d=function(t,i){const r=new o$k(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${n?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),s=new Float32Array(6);o$1(t,s,3);const a=new Float32Array(6);return o$1(i,a,3),e.bindProgram(r),r.setUniform3f("u_highA",s[0],s[2],s[4]),r.setUniform3f("u_lowA",s[1],s[3],s[5]),r.setUniform3f("u_highB",a[0],a[2],a[4]),r.setUniform3f("u_lowB",a[1],a[3],a[5]),r}(v,p),h=e.getBoundFramebufferObject(),{x:m,y:b,width:_,height:A}=e.getViewport();e.bindFramebuffer(l),e.setViewport(0,0,1,1),e.bindVAO(f),e.drawArrays(5,0,4);const g=new Uint8Array(4);l.readPixels(0,0,1,1,6408,5121,g),d.dispose(),f.dispose(!1),u.dispose(),l.dispose(),e.setViewport(m,b,_,A),e.bindFramebuffer(h);const w=(v[2]-p[2])/25,F=L$7(g);return Math.abs(w-F)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$6({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(t$3`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(t$3`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `);}function r$9(c){return !!t$s("force-double-precision-obfuscation")||f$a(c).doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n$3(e,r){r.instanced&&r.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),r.instancedDoublePrecision&&(e.vertex.include(o$6,r),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const n=[t$3`
    vec3 calculateVPos() {
      ${r.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,t$3`
    vec3 subtractOrigin(vec3 _pos) {
      ${r.instancedDoublePrecision?t$3`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,t$3`
    vec3 dpNormal(vec4 _normal) {
      ${r.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,t$3`
    vec3 dpNormalView(vec4 _normal) {
      ${r.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,r.vertexTangets?t$3`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:t$3``];e.vertex.code.add(n[0]),e.vertex.code.add(n[1]),e.vertex.code.add(n[2]),2===r.output&&e.vertex.code.add(n[3]),e.vertex.code.add(n[4]);}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,i){r$3(i,t$7,a$9,3),e.setUniform3fv("viewOriginHi",t$7),e.setUniform3fv("viewOriginLo",a$9);};}(n$3||(n$3={}));const t$7=n$b(),a$9=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$8(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(t$3`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(t$3`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===d.attributeTextureCoordinates&&t.vertex.code.add(t$3`
      void forwardTextureCoordinates() {}
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$9(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(t$3`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u$8(u,a){u.include(t$8,a),u.fragment.code.add(t$3`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(t$3`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===a.attributeTextureCoordinates&&(u.include(t$9),u.fragment.code.add(t$3`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
t$t(0,.6,.2);function r$a(s,t){const r=s.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&s.include(u$8,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(t$3`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t$3`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t$3`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t$3`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t$3`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(t$3`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(t$3`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t$3`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `);}!function(e){e.bindUniforms=function(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor));};}(r$a||(r$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$b(r,o){o.linearDepth?r.vertex.code.add(t$3`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):r.vertex.code.add(t$3`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t$a=i$f.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s$4{constructor(){this.includedModules=new Map;}include(e,s){this.includedModules.has(e)?this.includedModules.get(e)!==s&&t$a.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,s),e(this.builder,s));}}class r$c extends s$4{constructor(){super(...arguments),this.vertex=new o$7,this.fragment=new o$7,this.attributes=new a$a,this.varyings=new c$9,this.extensions=new u$9,this.defines=new d$a;}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),s=this.attributes.generateSource(e),r=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,i=n.uniforms.generateSource(),o=n.code.generateSource(),a="vertex"===e?l$a:h$7,c=this.defines.generateSource().concat(n.defines.generateSource());return `\n${t.join("\n")}\n\n${c.join("\n")}\n\n${a}\n\n${i.join("\n")}\n\n${s.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}`}}class n$4{constructor(){this._entries=new Array,this._set=new Set;}add(e,t,s){const r=`${e}_${t}_${s}`;return this._set.has(r)||(this._entries.push([e,t,s]),this._set.add(r)),this}generateSource(){return this._entries.map((e=>{return `uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t;}))}}class i$8{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class o$7 extends s$4{constructor(){super(...arguments),this.uniforms=new n$4,this.code=new i$8,this.defines=new d$a;}get builder(){return this}}class a$a{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c$9{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u$9{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?u$9.ALLOWLIST_VERTEX:u$9.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u$9.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u$9.ALLOWLIST_VERTEX=[];class d$a{constructor(){this._entries=new Map;}addInt(e,t){const s=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,s);}addFloat(e,t){const s=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,s);}generateSource(){return Array.from(this._entries,(([e,t])=>`#define ${e} ${t}`))}}const h$7="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l$a="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$d(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(t$3`
      void forwardVertexColor() { vColor = color; }
    `),r.vertex.code.add(t$3`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):r.vertex.code.add(t$3`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a$b(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(t$3`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("uCameraNearFar","vec2"),a.vertex.code.add(t$3`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):a.vertex.code.add(t$3`
      void forwardLinearDepth() {}
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$b(t){t.vertex.code.add(t$3`
    const float PI = 3.141592653589793;
  `),t.fragment.code.add(t$3`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$c(t){const a=t.fragment.code;a.add(t$3`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),a.add(t$3`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),a.add(t$3`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n$5(n,a){const r=n.fragment.code;n.include(t$b),3===a.pbrMode||4===a.pbrMode?(r.add(t$3`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${a.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(t$3`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(t$3`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(t$3`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(t$3`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
    }
    `)):1!==a.pbrMode&&2!==a.pbrMode||(n.include(t$c),r.add(t$3`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(t$3`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(t$3`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(t$3`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(t$3`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(t$3`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$9(e){e.vertex.code.add(t$3`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$8(o){const d=t$3`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$9(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(t$3`
      vec3 normalModel() {
        return normal;
      }
    `)),1===d.normalType&&(o.include(o$8),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(t$3`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(t$3`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$a(o){o.attributes.add("position","vec3"),o.vertex.code.add(t$3`
    vec3 positionModel() { return position; }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l$b(l){l.vertex.code.add(t$3`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${t$3.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${t$3.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${t$3.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${t$3.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$e(r,l){l.symbolColor?(r.include(l$b),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(t$3`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):r.vertex.code.add(t$3`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$d(o,r){o.include(o$a),o.vertex.include(o$6,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(t$3`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(t$3`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `);}!function(i){i.ModelTransform=class{constructor(){this.worldFromModel_RS=e$i(),this.worldFromModel_TH=n$b(),this.worldFromModel_TL=n$b();}};i.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=n$b(),this.worldFromView_TL=n$b(),this.viewFromCameraRelative_RS=e$i(),this.projFromView=e();}},i.bindModelTransform=function(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL);},i.bindViewProjTransform=function(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS);};}(t$d||(t$d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l$c(l,e){0===e.normalType||1===e.normalType?(l.include(o$9,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(t$3`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===e.normalType?(l.include(t$d,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(t$3`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?t$3`normalize(vPositionWorldCameraRelative);`:t$3`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(t$3`
      void forwardNormal() {}
    `);}!function(o){o.bindUniforms=function(o,r){o.setUniformMatrix4fv("viewNormal",r);};}(l$c||(l$c={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$b(o,e){o.fragment.include(e$8),3===e.output?(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(t$3`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===e.output&&o.fragment.code.add(t$3`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u$a(u,p){const v=u.vertex.code,c=u.fragment.code;1!==p.output&&3!==p.output||(u.include(r$b,{linearDepth:!0}),u.include(t$8,p),u.include(v$5,p),u.include(o$b,p),u.include(l$7,p),u.vertex.uniforms.add("nearFar","vec2"),u.varyings.add("depth","float"),p.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),v.add(t$3`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),u.include(r$6,p),c.add(t$3`
      void main(void) {
        discardBySlice(vpos);
        ${p.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===p.output&&(u.include(r$b,{linearDepth:!1}),u.include(o$9,p),u.include(l$c,p),u.include(t$8,p),u.include(v$5,p),p.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),v.add(t$3`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===p.normalType?t$3`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(l$7,p),u.include(r$6,p),c.add(t$3`
      void main() {
        discardBySlice(vpos);
        ${p.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===p.normalType?t$3`
            vec3 normal = screenDerivativeNormal(vPositionView);`:t$3`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===p.output&&(u.include(r$b,{linearDepth:!1}),u.include(t$8,p),u.include(v$5,p),p.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),v.add(t$3`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(l$7,p),u.include(r$6,p),u.include(i$6),c.add(t$3`
      void main() {
        discardBySlice(vpos);
        ${p.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n$6(n,a){const o=n.fragment;o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),a.vertexTangets?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?o.code.add(t$3`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):o.code.add(t$3`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(n.extensions.add("GL_OES_standard_derivatives"),o.code.add(t$3`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==a.attributeTextureCoordinates&&(n.include(u$8,a),o.code.add(t$3`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o$c(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(t$3`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(t$3`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n$7(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(t$3`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(t$3`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
      }
    `)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(t$3`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(t$3`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$e(t){const n=t.fragment;n.uniforms.add("lightingMainDirection","vec3"),n.uniforms.add("lightingMainIntensity","vec3"),n.uniforms.add("lightingFixedFactor","float"),n.code.add(t$3`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$f(r,c){const d=r.fragment;r.include(t$e),r.include(o$c,c),0!==c.pbrMode&&r.include(n$5,c),r.include(n$7,c),c.receiveShadows&&r.include(i$7,c),d.uniforms.add("lightingGlobalFactor","float"),d.uniforms.add("ambientBoostFactor","float"),r.include(t$b),d.code.add(t$3`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===c.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.useOldSceneLightInterface?d.code.add(t$3`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===c.viewingMode?d.code.add(t$3`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):d.code.add(t$3`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),d.code.add(t$3`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===c.pbrMode||4===c.pbrMode?d.code.add(t$3`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==c.pbrMode&&2!==c.pbrMode||(d.code.add(t$3`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
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
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),d.code.add(t$3`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),d.code.add(t$3`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),d.code.add(t$3`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),d.code.add(t$3`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===c.pbrMode?t$3`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:t$3`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$g(r,e){const m=r.fragment;m.code.add(t$3`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===e.doubleSidedMode?m.code.add(t$3`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===e.doubleSidedMode?m.code.add(t$3`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):m.code.add(t$3`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u$b(u,e){t$3`
  /*
  *  ${e.name}
  *  ${0===e.output?"RenderOutput: Color":1===e.output?"RenderOutput: Depth":3===e.output?"RenderOutput: Shadow":2===e.output?"RenderOutput: Normal":4===e.output?"RenderOutput: Highlight":""}
  */
  `;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function c$a(c){c.code.add(t$3`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
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
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i$9(i){i.include(c$a),i.code.add(t$3`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t$3.int(1)}) {
        return allMixed;
      }
      else if (mode == ${t$3.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$3.int(3)}) {
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

      if (mode == ${t$3.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$3.int(3)}) {
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
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function P$6(P){const _=new r$c,E=_.vertex.code,S=_.fragment.code;return _.include(u$b,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(o$a),_.varyings.add("vpos","vec3"),_.include(v$5,P),_.include(n$3,P),_.include(t$5,P),0!==P.output&&7!==P.output||(_.include(o$9,P),_.include(r$b,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(e$9),_.include(n$6,P),_.include(l$c,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(t$8,P),_.include(a$b,P),_.include(r$e,P),_.include(r$d,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),E.add(t$3`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${t$3.float(o$3)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?t$3`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(l$7,P),_.include(r$6,P),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(i$9),S.add(t$3`
      void main() {
        discardBySlice(vpos);
        ${P.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$3`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?t$3`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$3`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(l$7,P),_.include(r$f,P),_.include(o$c,P),_.include(r$6,P),P.receiveShadows&&_.include(i$7,P),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(r$a,P),_.include(n$5,P),_.fragment.include(i$9),_.include(r$g,P),S.add(t$3`
      void main() {
        discardBySlice(vpos);
        ${P.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$3`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?t$3`
        vec3 normal = screenDerivativeNormal(localvpos);`:t$3`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?t$3`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$3`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?t$3`
              mat3 tangentSpace = ${P.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?t$3`vec3 normalGround = normalize(vpos + localOrigin);`:t$3`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$3``}
        ${1===P.pbrMode||2===P.pbrMode?t$3`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(u$a,P),_}var _$6=Object.freeze({__proto__:null,build:P$6});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class A$7 extends i$5{initializeProgram(e){const t=A$7.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangets:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:r$9(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1});return new o$k(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),o$2)}bindPass(e,t,i){o$5.bindProjectionMatrix(this.program,i.camera.projectionMatrix);const r=this.configuration.output;7===r&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",N$3[t.colorMixMode])),0===r?(i.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",N$3[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&r$a.bindUniforms(this.program,t,this.configuration.isSchematic)):1===r||3===r?this.program.setUniform2fv("nearFar",i.camera.nearFar):4===r&&i$6.bindOutputHighlight(e,this.program,i),v$5.bindUniformsForSymbols(this.program,t),t$5.bindUniforms(this.program,t,i),B$5(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff);}bindDraw(e){const i=this.configuration.instancedDoublePrecision?t$o(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;o$5.bindViewCustomOrigin(this.program,i,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&o$5.bindCamPosition(this.program,i,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&n$3.bindCustomOrigin(this.program,i),l$7.bindUniforms(this.program,this.configuration,e.slicePlane,i),0===this.configuration.output&&i$7.bindViewCustomOrigin(this.program,e,i);}setPipeline(e,t){const i=this.configuration,r=3===e,o=2===e;return u$k({blending:0!==i.output&&7!==i.output||!i.transparent?null:r?u$6:c$5(e),culling:U$2(i),depthTest:{func:a$7(e)},depthWrite:r||o?i.writeDepth&&n$c:null,colorWrite:s$a,stencilWrite:i.sceneHasOcludees?f$9:null,stencilTest:i.sceneHasOcludees?t?t$6:c$8:null,polygonOffset:r||o?null:s$3(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}A$7.shader=new t$4(_$6,(()=>import('./DefaultMaterial.glsl-bc928796.js')));const U$2=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class E$4 extends e$7{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3;}}e$j([r$7({count:8})],E$4.prototype,"output",void 0),e$j([r$7({count:4})],E$4.prototype,"alphaDiscardMode",void 0),e$j([r$7({count:3})],E$4.prototype,"doubleSidedMode",void 0),e$j([r$7()],E$4.prototype,"isSchematic",void 0),e$j([r$7()],E$4.prototype,"vertexColors",void 0),e$j([r$7()],E$4.prototype,"offsetBackfaces",void 0),e$j([r$7()],E$4.prototype,"symbolColors",void 0),e$j([r$7()],E$4.prototype,"vvSize",void 0),e$j([r$7()],E$4.prototype,"vvColor",void 0),e$j([r$7()],E$4.prototype,"verticalOffset",void 0),e$j([r$7()],E$4.prototype,"receiveShadows",void 0),e$j([r$7()],E$4.prototype,"slicePlaneEnabled",void 0),e$j([r$7()],E$4.prototype,"sliceHighlightDisabled",void 0),e$j([r$7()],E$4.prototype,"receiveAmbientOcclusion",void 0),e$j([r$7()],E$4.prototype,"screenSizePerspective",void 0),e$j([r$7()],E$4.prototype,"textureAlphaPremultiplied",void 0),e$j([r$7()],E$4.prototype,"hasColorTexture",void 0),e$j([r$7()],E$4.prototype,"usePBR",void 0),e$j([r$7()],E$4.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$j([r$7()],E$4.prototype,"hasEmissionTexture",void 0),e$j([r$7()],E$4.prototype,"hasOcclusionTexture",void 0),e$j([r$7()],E$4.prototype,"hasNormalTexture",void 0),e$j([r$7()],E$4.prototype,"instanced",void 0),e$j([r$7()],E$4.prototype,"instancedColor",void 0),e$j([r$7()],E$4.prototype,"instancedDoublePrecision",void 0),e$j([r$7()],E$4.prototype,"vertexTangents",void 0),e$j([r$7()],E$4.prototype,"normalsTypeDerivate",void 0),e$j([r$7()],E$4.prototype,"writeDepth",void 0),e$j([r$7()],E$4.prototype,"sceneHasOcludees",void 0),e$j([r$7()],E$4.prototype,"transparent",void 0),e$j([r$7()],E$4.prototype,"enableOffset",void 0),e$j([r$7({count:3})],E$4.prototype,"cullFace",void 0),e$j([r$7({count:4})],E$4.prototype,"transparencyPassType",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function L$5(L){const M=new r$c,j=M.vertex.code,O=M.fragment.code;return M.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),M.include(o$a),M.varyings.add("vpos","vec3"),M.include(v$5,L),M.include(n$3,L),M.include(t$5,L),0!==L.output&&7!==L.output||(M.include(o$9,L),M.include(r$b,{linearDepth:!1}),L.offsetBackfaces&&M.include(e$9),L.instancedColor&&M.attributes.add("instanceColor","vec4"),M.varyings.add("vNormalWorld","vec3"),M.varyings.add("localvpos","vec3"),M.include(t$8,L),M.include(a$b,L),M.include(r$e,L),M.include(r$d,L),M.vertex.uniforms.add("externalColor","vec4"),M.varyings.add("vcolorExt","vec4"),j.add(t$3`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${L.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${t$3.float(o$3)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${L.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===L.output&&(M.include(l$7,L),M.include(r$6,L),M.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),M.fragment.uniforms.add("view","mat4"),L.hasColorTexture&&M.fragment.uniforms.add("tex","sampler2D"),M.fragment.include(i$9),O.add(t$3`
      void main() {
        discardBySlice(vpos);
        ${L.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        ${L.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$3`vec4 texColor = vec4(1.0);`}
        ${L.attributeColor?t$3`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$3`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===L.output&&(M.include(l$7,L),M.include(r$f,L),M.include(o$c,L),M.include(r$6,L),L.receiveShadows&&M.include(i$7,L),M.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),M.fragment.uniforms.add("view","mat4"),L.hasColorTexture&&M.fragment.uniforms.add("tex","sampler2D"),M.include(r$a,L),M.include(n$5,L),M.fragment.include(i$9),O.add(t$3`
      void main() {
        discardBySlice(vpos);
        ${L.hasColorTexture?t$3`
        vec4 texColor = texture2D(tex, vuv0);
        ${L.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$3`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===L.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${L.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===L.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${L.attributeColor?t$3`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$3`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t$3`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===L.pbrMode||2===L.pbrMode?1===L.viewingMode?t$3`vec3 normalGround = normalize(vpos + localOrigin);`:t$3`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$3``}
        ${1===L.pbrMode||2===L.pbrMode?t$3`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${L.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),M.include(u$a,L),M}var M$5=Object.freeze({__proto__:null,build:L$5});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a$c extends A$7{initializeProgram(e){const i=a$c.shader.get(),o=this.configuration,l=i.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:r$9(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1});return new o$k(e.rctx,l.generateSource("vertex"),l.generateSource("fragment"),o$2)}}a$c.shader=new t$4(M$5,(()=>import('./RealisticTree.glsl-99f5cddb.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class y$5 extends a$6{constructor(e,t){super(t,e,M$6),this.supportsEdges=!0,this.techniqueConfig=new E$4,this.vertexBufferLayout=y$5.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?y$5.getInstanceBufferLayout(this.params):null;}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return !1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,a=!!t&&t.indexOf("color")>-1,r=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(a||r||s)?!!n||o:i?n?l:o:a||r||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<f$8),this.techniqueConfig}intersect(e,t,c,h,d,v,g){if(null!==this.params.verticalOffset){const e=h.camera;o$i(A$8,c[12],c[13],c[14]);let t=null;switch(h.viewingMode){case 1:t=j$7(L$6,A$8);break;case 2:t=r$n(L$6,E$5);}let p=0;if(null!==this.params.verticalOffset){const i=c$d(D$3,A$8,e.eye),s=s$9(i),a=d$c(i,i,1/s);let u=null;this.params.screenSizePerspective&&(u=z$5(t,a)),p+=O$4(e,s,this.params.verticalOffset,u,this.params.screenSizePerspective);}d$c(t,t,p),L$8(R$5,t,h.transform.inverseRotation),d=c$d(B$6,d,R$5),v=c$d(I$5,v,R$5);}g$3(e,t,h,d,v,B$4(h.verticalOffset),g);}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new P$7(e)}createBufferWriter(){return new w$5(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=A$a().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}static getInstanceBufferLayout(e){let t=A$a();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class P$7 extends d$4{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters();}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(a$c,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(A$7,this.material.getTechniqueConfig(this.output,e),this.technique);}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled});}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees});}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e);}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program);}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const O$5=2.1,M$6={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:e$i(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:d$9,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...d$7};class w$5{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,i,s){g$4(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s);}}const B$6=n$b(),I$5=n$b(),E$5=t$o(0,0,1),L$6=n$b(),R$5=n$b(),A$8=n$b(),D$3=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i$a=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s$5=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i$b(r,i=i$a,l=o$2,m=-1,f=1){let u=null;switch(i){case s$5:u=new Float32Array([m,m,0,0,f,m,1,0,m,f,0,1,f,f,1,1]);break;case i$a:default:u=new Float32Array([m,m,f,m,m,f,f,f]);}return new a$i(r,l,{geometry:i},{geometry:i$k.createVertex(r,35044,u)})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n$8=i$f.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function o$d(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const a$d=o$d("DXT1"),i$c=o$d("DXT3"),s$6=o$d("DXT5");function l$d(e,t,n,o){const{textureData:a,internalFormat:i,width:s,height:l}=u$c(n,o);t.samplingMode=a.levels.length>1?9987:9729,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l;const c=new i$l(e,t,a);return e.bindTexture(c,0),c}function u$c(e,r){const o=new Int32Array(e,0,31);if(542327876!==o[0])return n$8.error("Invalid magic number in DDS header"),null;if(!(4&o[20]))return n$8.error("Unsupported format, must contain a FourCC code"),null;const l=o[21];let u,c;switch(l){case a$d:u=8,c=33776;break;case i$c:u=16,c=33778;break;case s$6:u=16,c=33779;break;default:return n$8.error("Unsupported FourCC code:",(m=l,String.fromCharCode(255&m,m>>8&255,m>>16&255,m>>24&255))),null}var m;let h=1,d=o[4],p=o[3];0==(3&d)&&0==(3&p)||(n$8.warn("Rounding up compressed texture size to nearest multiple of 4."),d=d+3&-4,p=p+3&-4);const g=d,f=p;let w,x;131072&o[2]&&!1!==r&&(h=Math.max(1,o[7])),1===h||o$l(d)&&o$l(p)||(n$8.warn("Ignoring mipmaps of non power of two sized compressed texture."),h=1);let C=o[1]+4;const D=[];for(let t=0;t<h;++t)x=(d+3>>2)*(p+3>>2)*u,w=new Uint8Array(e,C,x),D.push(w),C+=x,d=Math.max(1,d>>1),p=Math.max(1,p>>1);return {textureData:{type:"compressed",levels:D},internalFormat:c,width:g,height:f}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class E$6{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new i$m,this.data=e,this.id=E$6.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=E$6.estimateTexMemRequired(this.data,this.params),this.startPreload();}startPreload(){const e=this.data;t$p(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e));}startPreloadVideoElement(e){F$5(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src);}startPreloadImageElement(e){G$4(e.src)||F$5(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src);}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,s){if(t$p(e))return 0;if(t$u(e)||c$f(e))return e.byteLength;const{width:a,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?E$6.getDataDimensions(e):s;return (s.mipmap?4/3:1)*a*o*(s.components||4)||0}dispose(){this.data=void 0;}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return {target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,a){if(u$h(this.glTexture))return this.glTexture;if(u$h(this.loadingPromise))return this.loadingPromise;const o=this.data;return t$p(o)?(this.glTexture=new i$l(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof o?this.loadFromURL(e,a,o):o instanceof Image?this.loadFromImageElement(e,a,o):o instanceof HTMLVideoElement?this.loadFromVideoElement(e,a,o):o instanceof ImageData||o instanceof HTMLCanvasElement?this.loadFromImage(e,o,a):(t$u(o)||c$f(o))&&this.params.encoding===E$6.DDS_ENCODING?this.loadFromDDSData(e,o):c$f(o)?this.loadFromPixelData(e,o):t$u(o)?this.loadFromPixelData(e,new Uint8Array(o)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||t$p(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(u$h(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this.powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(e,t,r,i,s,this.glTexture);}else {const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data);}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=l$d(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){f$f(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new i$l(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=a$j();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null);};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const s=await t$v(r,{signal:i});return this.loadFromImage(e,s,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const s=await n$d(r,r.src,!1,i);return this.loadFromImage(e,s,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>h$c(((o,n)=>{const h=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",d),u$h(u)&&u.remove();},l=()=>{r.readyState>=2&&(h(),o(this.loadFromImage(e,r,t)));},d=e=>{h(),n(e||new s$b("Failed to load video"));};r.addEventListener("loadeddata",l),r.addEventListener("error",d);const u=d$f(i,(()=>d(m$6())));}))))}loadFromImage(e,t,r){const i=E$6.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const s=this.createDescriptor(e);return s.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,s)||o$l(i.width)&&o$l(i.height)?(s.width=i.width,s.height=i.height,this.glTexture=new i$l(e,s,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,s,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return !n$e(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(t,r,i,s,a){const{width:o,height:n}=i,h=u$l(o),l=u$l(n);let m;switch(s.width=h,s.height=l,this.params.powerOfTwoResizeMode){case 2:s.textureCoordinateScaleFactor=[o/h,n/l],m=new i$l(t,s),m.updateData(0,0,0,o,n,r);break;case 1:case null:case void 0:m=this.stretchToPowerOfTwo(t,r,s,a);break;default:n$f(this.params.powerOfTwoResizeMode);}return s.hasMipmap&&m.generateMipmap(),m}stretchToPowerOfTwo(e,t,r,i){const s=new i$l(e,r),a=new r$r(e,{colorTarget:0,depthStencilTarget:0},s),o=new i$l(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),n=i$b(e);return this.drawStretchedTexture(e,i,a,n,o,s),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),s}drawStretchedTexture(e,t,r,i,s,a){e.bindFramebuffer(r);const o=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=t.program;e.bindProgram(n),n.setUniform4f("color",1,1,1,1),n.setUniform1i("tex",0),e.bindTexture(s,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,r$s(i,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height);}unload(){if(u$h(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null;}if(u$h(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),u$h(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort();}this.events.emit("unloaded");}}E$6.idGen=new t$2,E$6.DDS_ENCODING="image/vnd-ms.dds";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n$9{constructor(r){this.streamDataRequester=r;}async loadJSON(r,e){return this.load("json",r,e)}async loadBinary(r,e){return G$4(r)?(p$b(e),H$4(r)):this.load("binary",r,e)}async loadImage(r,e){return this.load("image",r,e)}async load(o,s,t){if(t$p(this.streamDataRequester))return (await L$9(s,{responseType:c$b[o]})).data;const n=await o$m(this.streamDataRequester.request(s,o,t));if(!0===n.ok)return n.value;throw w$7(n.error),new s$b("",`Request for resource failed: ${n.error}`)}}const c$b={image:"image",binary:"array-buffer",json:"json"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function f$b(e,t,r){const f=e.typedBuffer,n=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,s=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*n,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<s;++e)f[u]=d[p],f[u+1]=d[p+1],u+=n,p+=o;}function n$a(n,d,o){const s=n.typedBuffer,u=n.typedBufferStride,p=d.typedBuffer,c=d.typedBufferStride,l=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*u,i=(o&&o.srcIndex?o.srcIndex:0)*c;if(u$m(d.elementType)){const e=c$g(d.elementType);if(r$t(d.elementType))for(let t=0;t<l;++t)s[y]=Math.max(p[i]/e,-1),s[y+1]=Math.max(p[i+1]/e,-1),y+=u,i+=c;else for(let t=0;t<l;++t)s[y]=p[i]/e,s[y+1]=p[i+1]/e,y+=u,i+=c;}else f$b(n,d,o);return n}Object.freeze({__proto__:null,copy:f$b,normalizeIntegerBuffer:n$a});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$a(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,c=t.typedBufferStride,o=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*c;for(let e=0;e<o;++e)d[u]=n[p],d[u+1]=n[p+1],d[u+2]=n[p+2],u+=f,p+=c;}Object.freeze({__proto__:null,copy:e$a});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$b(e,t,d){const f=e.typedBuffer,n=e.typedBufferStride,r=t.typedBuffer,o=t.typedBufferStride,c=d?d.count:t.count;let u=(d&&d.dstIndex?d.dstIndex:0)*n,s=(d&&d.srcIndex?d.srcIndex:0)*o;for(let e=0;e<c;++e)f[u]=r[s],f[u+1]=r[s+1],f[u+2]=r[s+2],f[u+3]=r[s+3],u+=n,s+=o;}function t$f(e,t,d,f,n,r){const o=e.typedBuffer,c=e.typedBufferStride,u=r?r.count:e.count;let s=(r&&r.dstIndex?r.dstIndex:0)*c;for(let e=0;e<u;++e)o[s]=t,o[s+1]=d,o[s+2]=f,o[s+3]=n,s+=c;}Object.freeze({__proto__:null,copy:e$b,fill:t$f});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$c(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<c;++e){for(let e=0;e<9;++e)d[u+e]=n[p+e];u+=f,p+=o;}}Object.freeze({__proto__:null,copy:e$c});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$d(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<c;++e){for(let e=0;e<16;++e)d[u+e]=n[p+e];u+=f,p+=o;}}Object.freeze({__proto__:null,copy:e$d});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$e(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*d;for(let e=0;e<f;++e)n[s]=c[u],s+=o,u+=d;}function t$g(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}Object.freeze({__proto__:null,copy:e$e,makeDense:t$g});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$h(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e$k(s.ElementType)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o$e=i$f.getLogger("esri.views.3d.glTF");class t$h{error(r){throw new s$b("gltf-loader-error",r)}errorUnsupported(r){throw new s$b("gltf-loader-unsupported-feature",r)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e);}assert(r,e){r||this.error(e);}warn(r){o$e.warn(r);}warnUnsupported(r){this.warn("[Unsupported Feature] "+r);}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$f(e={}){return {color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function t$i(e,t={}){return {data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t$j{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4));}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o$f={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r$i={pbrMetallicRoughness:o$f,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},t$k={ESRI_externalColorMixMode:"tint"},a$e=(a={})=>{const l={...o$f,...a.pbrMetallicRoughness},i=function(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:n$f(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint";}return o}({...t$k,...a.extras});return {...r$i,...a,pbrMetallicRoughness:l,extras:i}};const l$e={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},i$d=e=>({...l$e,...e});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$j(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const M$7=1179937895,G$3=1313821514,F$3=5130562;class k$4{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=r$j(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents();}static async load(e,o,s,a){if(G$4(s)){const t=V$4(s);if("model/gltf-binary"!==t.mediaType)try{const r=JSON.parse(t.isBase64?atob(t.data):t.data);return new k$4(e,o,s,r)}catch{}const a=H$4(s);if(k$4.isGLBData(a))return this.fromGLBData(e,o,s,a)}if(s.endsWith(".gltf")){const t=await e.loadJSON(s,a);return new k$4(e,o,s,t)}const i=await e.loadBinary(s,a);if(k$4.isGLBData(i))return this.fromGLBData(e,o,s,i);const u=await e.loadJSON(s,a);return new k$4(e,o,s,u)}static isGLBData(e){const t=new t$j(e);return t.remainingBytes()>=4&&t.readUint32()===M$7}static async fromGLBData(e,t,r,n){const o=await k$4.parseGLBData(t,n);return new k$4(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new t$j(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===M$7,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===G$3,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await J$3(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==F$3,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1;}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(e);if(!o){const s=await this.context.loadBinary(this.resolveUri(r.uri),t);o=new Uint8Array(s),this.bufferCache.set(e,o),n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match.");}return o}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t),a=X$2[r.type],i=q$3[r.componentType],u=a*i,c=o.byteStride||u;return {raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return t$g(this.wrapAccessor(h$d,r));case 5123:return t$g(this.wrapAccessor(g$5,r));case 5125:return t$g(this.wrapAccessor(F$6,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+z$4[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(a$h,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+z$4[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(a$h,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+z$4[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new p$a(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(t,r){const n=this.errorContext;n.assert(null!=t.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);return n.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(u$j,o):(n.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(t){switch(t.componentType){case 5120:return new M$a(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new A$b(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new v$7(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new w$8(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new I$8(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new u$j(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void n$f(t.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(p$a,n);if(5121===n.componentType)return this.wrapAccessor(x$7,n);if(5123===n.componentType)return this.wrapAccessor(L$a,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(a$h,n);if(5121===n.componentType)return this.wrapAccessor(O$6,n);if(5123===n.componentType)return this.wrapAccessor(E$8,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+z$4[n.componentType]);}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?a$e(this.json.materials[e.material]):a$e(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let i,u,c,p,d;s.baseColorTexture&&(r.errorUnsupportedIf(0!==(s.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),i=await this.getTexture(s.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):u=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&(0!==(o.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):c=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&(0!==(o.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):p=await this.getTexture(o.emissiveTexture.index,t)),s.metallicRoughnessTexture&&(0!==(s.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(s.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:i,normalTexture:u,name:o.name,id:f,occlusionTexture:c,emissiveTexture:p,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode};}return n}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],o=i$d(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const a=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(a.uri)n=await this.context.loadImage(this.resolveUri(a.uri),t);else {r.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView],o=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return h$c(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a);})),a.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e);})),a.src=s;}))}(new Uint8Array(o.buffer,o.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType);}i={data:n,wrapS:o.wrapS,wrapT:o.wrapT,minFilter:o.minFilter,name:a.name,id:e},this.textureCache.set(e,i);}return i}getNodeTransform(e$1){if(void 0===e$1)return V$3;let t=this.nodeTransformCache.get(e$1);if(!t){const r$1=this.getNodeTransform(this.getNodeParent(e$1)),n=this.json.nodes[e$1];n.matrix?t=u$i(e(),r$1,n.matrix):n.translation||n.rotation||n.scale?(t=r(r$1),n.translation&&c$e(t,t,n.translation),n.rotation&&(_$7[3]=I$9(_$7,n.rotation),f$g(t,t,_$7[3],_$7)),n.scale&&i$n(t,t,n.scale)):t=r$1,this.nodeTransformCache.set(e$1,t);}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return T$3(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=r$u.parse(this.json.asset.version,"glTF");P$8.validate(e);}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "));}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t);}));}));}}const P$8=new r$u(2,0,"glTF"),V$3=q$8(e(),Math.PI/2),_$7=e$l(),X$2={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},q$3={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function J$3(e){return h$c(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e));},o.onerror=e=>{r(e);},o.readAsText(n);}))}const z$4={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let l$f=0;async function u$d(s,a,i={}){const u=await k$4.load(s,x$4,a,i),p="gltf_"+l$f++,f={lods:[],materials:new Map,textures:new Map,meta:c$c(u)},T=!(!u.json.asset.extras||"symbolResource"!==u.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,s=r.scenes[r.scene||0].nodes,a=s.length>1;for(const e of s){const t=r.nodes[e],s=[i(e,0)];if(m$5(t)&&!a){const e=t.extensions.MSFT_lod.ids;s.push(...e.map(((e,t)=>i(e,t+1))));}await f$i(s);}async function i(o,s){const a=r.nodes[o],n=e.getNodeTransform(o);if(x$4.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const o of e.primitives)await t(o,n,s,e.name);}for(const e of a.children||[])await i(e,s);}}(u,(async(o,s,a,n)=>{const l=void 0!==o.mode?o.mode:4,c=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(l);if(t$p(c))return void x$4.warnUnsupported("Unsupported primitive mode ("+h$8[l]+"). Skipping primitive.");if(!u.hasPositions(o))return void x$4.warn("Skipping primitive without POSITION vertex attribute.");const m=await u.getMaterial(o,i),T={transform:r(s),attributes:{position:await u.getPositionData(o,i),normal:null,texCoord0:null,color:null,tangent:null},indices:await u.getIndexData(o,i),primitiveType:c,material:d$b(f,m,p)};u.hasNormals(o)&&(T.attributes.normal=await u.getNormalData(o,i)),u.hasTangents(o)&&(T.attributes.tangent=await u.getTangentData(o,i)),u.hasTextureCoordinates(o)&&(T.attributes.texCoord0=await u.getTextureCoordinates(o,i)),u.hasVertexColors(o)&&(T.attributes.color=await u.getVertexColors(o,i));let w=null;u$h(f.meta)&&u$h(f.meta.ESRI_lod)&&"screenSpaceRadius"===f.meta.ESRI_lod.metric&&(w=f.meta.ESRI_lod.thresholds[a]),f.lods[a]=f.lods[a]||{parts:[],name:n,lodThreshold:w},f.lods[a].parts.push(T);})),{model:f,meta:{isEsriSymbolResource:T,uri:u.uri},customMeta:{}}}function c$c(t){const o=t.json;let r=null;return o.nodes.forEach((t=>{const o=t.extras;u$h(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(r=o);})),r}function m$5(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d$b(e,t,o){const r=t=>{const r=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(r)){const o=t$i(t.data,{wrap:{s:p$8(t.wrapS),t:p$8(t.wrapT)},mipmap:f$c.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(r,o);}return r},s=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const o=e$f({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?r(t.colorTexture):void 0,textureNormal:t.normalTexture?r(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?r(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?r(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?r(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,o);}return s}function p$8(e){if(33071===e||33648===e||10497===e)return e;x$4.error(`Unexpected TextureSampler WrapMode: ${e}`);}const x$4=new t$h,f$c=[9987,9985],h$8=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r$k(t){return u(t)}function o$g(n){return "number"==typeof n?r$k(n):u$n(n)||c$f(n)?new Uint32Array(n):n}function f$d(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint32Array(0);const n=e-2,r=new Uint32Array(3*n);if("number"==typeof t){let t=0;for(let e=0;e<n;e+=1)e%2==0?(r[t++]=e,r[t++]=e+1,r[t++]=e+2):(r[t++]=e+1,r[t++]=e,r[t++]=e+2);}else {let e=0;for(let o=0;o<n;o+=1)if(o%2==0){const n=t[o],f=t[o+1],i=t[o+2];r[e++]=n,r[e++]=f,r[e++]=i;}else {const n=t[o+1],f=t[o],i=t[o+2];r[e++]=n,r[e++]=f,r[e++]=i;}}return r}function i$e(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint32Array(0);const n=e-2,r=new Uint32Array(3*n);if("number"==typeof t){let t=0;for(let e=0;e<n;++e)r[t++]=0,r[t++]=e+1,r[t++]=e+2;return r}{const e=t[0];let o=t[1],f=0;for(let i=0;i<n;++i){const n=t[i+2];r[f++]=e,r[f++]=o,r[f++]=n,o=n;}return r}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const b$7=i$f.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function h$9(e,n){const a=await async function(e,n){const a=u$h(n)&&n.streamDataRequester;if(a)return async function(e,t,r){const n=await o$m(t.request(e,"json",r));if(!0===n.ok)return n.value;return w$7(n.error),void v$6(n.error.details.url)}(e,a,n);const o=await o$m(L$9(e,f$j(n)));if(!0===o.ok)return o.value.data;return w$7(o.error),void v$6(o.error)}(e,n);return {resource:a,textures:await M$8(a.textureDefinitions,n)}}function v$6(e){throw new s$b("",`Request for object resource failed: ${e}`)}function j$6(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(b$7.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b$7.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b$7.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(b$7.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else b$7.warn("Indexed geometries must specify faces"),n=!1;break}default:b$7.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(b$7.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const e in a){a[e].values||(b$7.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function A$9(r,n){const a=[],s=[],o=[],i=[],u=r.resource,l=r$u.parse(u.version||"1.0","wosr");P$9.validate(l);const m=u.model.name,f=u.model.geometries,d=u.materialDefinitions,b=r.textures;let h=0;const v=new Map;for(let r=0;r<f.length;r++){const u=f[r];if(!j$6(u))continue;const l=T$2(u),p=u.params.vertexAttributes,A={};for(const e in p){const t=p[e],r=t.values;A[e]={data:r,size:t.valuesPerElement};}const U={};if("PerAttributeArray"===u.params.topology){const e=k$5(A.position.data.length/A.position.size);for(const t in A)U[t]=e;}else {const e=u.params.faces;for(const t in e)U[t]=new Uint32Array(e[t].values);}const M=b&&b[l.texture];if(M&&!v.has(l.texture)){const{image:e,params:t}=M,r=new E$6(e,m,t);i.push(r),v.set(l.texture,r);}const P=v.get(l.texture),B=P?P.id:void 0;let E=o[l.material]?o[l.material][l.texture]:null;if(!E){const r=d[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===r.transparency&&(r.transparency=0);const a=M&&M.alphaChannelUsage,s=r.transparency>0||"transparency"===a||"maskAndTransparency"===a,i={ambient:e$m(r.diffuse),diffuse:e$m(r.diffuse),opacity:1-(r.transparency||0),transparent:s,textureAlphaMode:M?I$6(M.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:B,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:r.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};u$h(n)&&n.materialParamsMixin&&l$g(i,n.materialParamsMixin),E=new y$5(i,m),o[l.material]||(o[l.material]={}),o[l.material][l.texture]=E;}s.push(E);const q=new u$1(new n$1(A,U),m);h+=U.position?U.position.length:0,a.push(q);}return {name:m,stageResources:{textures:i,materials:s,geometries:a},pivotOffset:u.model.pivotOffset,boundingBox:U$3(a),numberOfVertices:h,lodThreshold:null}}function U$3(e){const t=A$c();return e.forEach((e=>{const r=e.boundingInfo;h$e(t,r.getBBMin()),h$e(t,r.getBBMax());})),t}async function M$8(e,r){const n=[];for(const a in e){const s=e[a],i=s.images[0].data;if(!i){b$7.warn("Externally referenced texture data is not yet supported");continue}const u=s.encoding+";base64,"+i,l="/textureDefinitions/"+a,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},p=u$h(r)&&r.disableTextures?U$4(null):t$v(u,r);n.push(p.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===s.channels?s.alphaChannelUsage||"transparency":"none"}))));}const a=await f$i(n),s={};for(const e of a)s[e.refId]=e;return s}function I$6(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function T$2(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}function k$5(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const P$9=new r$u(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t$l(t,r,f){if(t.count!==r.count)return void e$1.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=f[9],m=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,j=r.typedBuffer,g=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*g,f=j[r],o=j[r+1],w=j[r+2],x=j[r+3];M[t]=n*f+c*o+y*w+l*x,M[t+1]=u*f+i*o+B*w+S*x,M[t+2]=d*f+a*o+m*w+b*x,M[t+3]=s*f+p*o+h*w+v*x;}}function r$l(t,r,f){if(t.count!==r.count)return void e$1.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];B[t]=n*f+s*o+a*S,B[t+1]=u*f+c*o+p*S,B[t+2]=d*f+i*o+y*S,B[t+3]=b;}}function f$e(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=r*u[f],o[t+1]=r*u[f+1],o[t+2]=r*u[f+2],o[t+3]=r*u[f+3];}}function o$h(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=u[f]>>r,o[t+1]=u[f+1]>>r,o[t+2]=u[f+2]>>r,o[t+3]=u[f+3]>>r;}}Object.freeze({__proto__:null,transformMat4:t$l,transformMat3:r$l,scale:f$e,shiftRight:o$h});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function q$4(d,p){const g=K$3(t$w(d));if("wosr"===g.fileType){const e=await(p.cache?p.cache.loadWOSR(g.url,p):h$9(g.url,p)),t=A$9(e,p);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const h=await(p.cache?p.cache.loadGLTF(g.url,p):u$d(new n$9(p.streamDataRequester),g.url,p)),v=w$9(h.model.meta,"ESRI_proxyEllipsoid");h.meta.isEsriSymbolResource&&u$h(v)&&-1!==h.meta.uri.indexOf("/RealisticTrees/")&&function(e$1,t){for(let m=0;m<e$1.model.lods.length;++m){const d=e$1.model.lods[m];e$1.customMeta.esriTreeRendering=!0;for(const p of d.parts){const d=p.attributes.normal;if(t$p(d))return;const g=p.attributes.position,h=g.count,v=n$b(),M=n$b(),w=n$b(),R=r$h(x$7,h),y=r$h(a$h,h),B=h$a(e(),p.transform);for(let r=0;r<h;r++){g.getVec(r,M),d.getVec(r,v),I$7(M,M,p.transform),c$d(w,M,t.center),i$o(w,w,t.radius);const o=w[2],c=s$9(w),f=Math.min(.45+.55*c*c,1);i$o(w,w,t.radius),I$7(w,w,B),j$7(w,w),m+1!==e$1.model.lods.length&&e$1.model.lods.length>1&&y$6(w,w,v,o>-1?.2:Math.min(-4*o-3.8,1)),y.setVec(r,w),R.set(r,0,255*f),R.set(r,1,255*f),R.set(r,2,255*f),R.set(r,3,255);}p.attributes.normal=y,p.attributes.color=R;}}}(h,v);const M=h.meta.isEsriSymbolResource?{usePBR:p.usePBR,isSchematic:!1,treeRendering:h.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},w={...p.materialParamsMixin,treeRendering:h.customMeta.esriTreeRendering};if(null!=g.specifiedLodIndex){const e=Q$3(h,M,w,g.specifiedLodIndex);let t=e[0].boundingBox;if(0!==g.specifiedLodIndex){t=Q$3(h,M,w,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:h.meta.isEsriSymbolResource,isWosr:!1,remove:h.remove}}const R=Q$3(h,M,w);return {lods:R,referenceBoundingBox:R[0].boundingBox,isEsriSymbolResource:h.meta.isEsriSymbolResource,isWosr:!1,remove:h.remove}}function K$3(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Q$3(e,r,o,s){const i=e.model,a=e$i(),n=new Array,u=new Map,l=new Map;return i.lods.forEach(((e,c)=>{if(void 0!==s&&c!==s)return;let m=0;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:u$h(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:A$c()};n.push(d),e.parts.forEach((s=>{const n=s.material+(s.attributes.normal?"_normal":"")+(s.attributes.color?"_color":"")+(s.attributes.texCoord0?"_texCoord0":"")+(s.attributes.tangent?"_tangent":""),c=i.materials.get(s.material),f$1=u$h(s.attributes.texCoord0),j=u$h(s.attributes.normal);if(!u.has(n)){if(f$1){if(u$h(c.textureColor)&&!l.has(c.textureColor)){const e=i.textures.get(c.textureColor),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureColor,new E$6(e.data,c.textureColor,t));}if(u$h(c.textureNormal)&&!l.has(c.textureNormal)){const e=i.textures.get(c.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureNormal,new E$6(e.data,c.textureNormal,t));}if(u$h(c.textureOcclusion)&&!l.has(c.textureOcclusion)){const e=i.textures.get(c.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureOcclusion,new E$6(e.data,c.textureOcclusion,t));}if(u$h(c.textureEmissive)&&!l.has(c.textureEmissive)){const e=i.textures.get(c.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureEmissive,new E$6(e.data,c.textureEmissive,t));}if(u$h(c.textureMetallicRoughness)&&!l.has(c.textureMetallicRoughness)){const e=i.textures.get(c.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureMetallicRoughness,new E$6(e.data,c.textureMetallicRoughness,t));}}const e=Math.pow(c.color[0],1/O$5),a=Math.pow(c.color[1],1/O$5),m=Math.pow(c.color[2],1/O$5),d=Math.pow(c.emissiveFactor[0],1/O$5),p=Math.pow(c.emissiveFactor[1],1/O$5),x=Math.pow(c.emissiveFactor[2],1/O$5);u.set(n,new y$5({...r,transparent:"BLEND"===c.alphaMode,textureAlphaMode:H$3(c.alphaMode),textureAlphaCutoff:c.alphaCutoff,diffuse:[e,a,m],ambient:[e,a,m],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?0:2,vertexColors:!!s.attributes.color,vertexTangents:!!s.attributes.tangent,normals:j?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:u$h(c.textureColor)&&f$1?l.get(c.textureColor).id:void 0,colorMixMode:c.colorMixMode,normalTextureId:u$h(c.textureNormal)&&f$1?l.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:u$h(c.textureOcclusion)&&f$1?l.get(c.textureOcclusion).id:void 0,emissiveTextureId:u$h(c.textureEmissive)&&f$1?l.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:u$h(c.textureMetallicRoughness)&&f$1?l.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[d,p,x],mrrFactors:[c.metallicFactor,c.roughnessFactor,r.mrrFactors[2]],isSchematic:!1,...o},n));}const F=function(e,t){switch(t){case 4:return o$g(e);case 5:return f$d(e);case 6:return i$e(e)}}(s.indices||s.attributes.position.count,s.primitiveType),_={},W={},$=s.attributes.position.count,q=r$h(a$h,$);if(t$1(q,s.attributes.position,s.transform),W.position={data:q.typedBuffer,size:q.elementCount},_.position=F,u$h(s.attributes.normal)){const e=r$h(a$h,$);y$8(a,s.transform),r$1(e,s.attributes.normal,a),W.normal={data:e.typedBuffer,size:e.elementCount},_.normal=F;}if(u$h(s.attributes.tangent)){const e=r$h(p$a,$);y$8(a,s.transform),r$l(e,s.attributes.tangent,a),W.tangent={data:e.typedBuffer,size:e.elementCount},_.tangent=F;}if(u$h(s.attributes.texCoord0)){const e=r$h(u$j,$);n$a(e,s.attributes.texCoord0),W.uv0={data:e.typedBuffer,size:e.elementCount},_.uv0=F;}if(u$h(s.attributes.color)){const e=r$h(x$7,$);if(4===s.attributes.color.elementCount)s.attributes.color instanceof p$a?f$e(e,s.attributes.color,255):s.attributes.color instanceof x$7?e$b(e,s.attributes.color):s.attributes.color instanceof L$a&&f$e(e,s.attributes.color,1/256);else {t$f(e,255,255,255,255);const t=new O$6(e.buffer,0,4);s.attributes.color instanceof a$h?f(t,s.attributes.color,255):s.attributes.color instanceof O$6?e$a(t,s.attributes.color):s.attributes.color instanceof E$8&&f(t,s.attributes.color,1/256);}W.color={data:e.typedBuffer,size:e.elementCount},_.color=F;}const K=new u$1(new n$1(W,_),`gltf_${e.name}_${m++}`);d.stageResources.geometries.push(K),d.stageResources.materials.push(u.get(n)),f$1&&(u$h(c.textureColor)&&d.stageResources.textures.push(l.get(c.textureColor)),u$h(c.textureNormal)&&d.stageResources.textures.push(l.get(c.textureNormal)),u$h(c.textureOcclusion)&&d.stageResources.textures.push(l.get(c.textureOcclusion)),u$h(c.textureEmissive)&&d.stageResources.textures.push(l.get(c.textureEmissive)),u$h(c.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(c.textureMetallicRoughness))),d.numberOfVertices+=$;const Q=K.boundingInfo;h$e(d.boundingBox,Q.getBBMin()),h$e(d.boundingBox,Q.getBBMax());}));})),n}function H$3(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}

var objectResourceUtils = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fetch: q$4,
      gltfToEngineResources: Q$3,
      parseUrl: K$3
});

export { L$5 as L, P$6 as P, objectResourceUtils as o };
