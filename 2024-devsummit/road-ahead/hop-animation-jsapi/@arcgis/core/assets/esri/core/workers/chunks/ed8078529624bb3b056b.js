"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4017],{40167:(e,t,r)=>{r.d(t,{A:()=>j,B:()=>a,C:()=>U,D:()=>Z,E:()=>z,F:()=>k,G:()=>W,H:()=>q,I:()=>G,J:()=>$,a:()=>p,b:()=>h,c:()=>d,d:()=>b,e:()=>B,f:()=>g,g:()=>E,h:()=>A,i:()=>O,j:()=>T,k:()=>m,l:()=>S,m:()=>w,n:()=>x,o:()=>L,p:()=>_,q:()=>C,r:()=>M,s:()=>P,t:()=>F,u:()=>R,v:()=>v,w:()=>N,x:()=>Y,y:()=>I,z:()=>V});var n=r(47880),s=r(72836),f=r(7200);class i{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=9;class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=16;class o{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=1;class y{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,n.g)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=2;class c{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,s.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;class l{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,f.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}l.ElementCount=4;class a extends o{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class p extends y{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class h extends c{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class d extends l{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class b extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class T extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class B extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class m extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class g extends o{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class E extends y{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class A extends c{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends l{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends o{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class w extends y{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class x extends c{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class L extends l{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class _ extends o{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class C extends y{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class M extends c{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class P extends l{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class F extends o{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class R extends y{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class v extends c{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class N extends l{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class Y extends o{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class I extends y{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class V extends c{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class j extends l{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class U extends o{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class Z extends y{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i16";class z extends c{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class k extends l{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class W extends o{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class q extends y{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class G extends c{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class $ extends l{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32"},34987:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>p,c:()=>h,d:()=>o,e:()=>c,f:()=>y,g:()=>l,u:()=>d});var n=r(82426),s=r(35861),f=r(45087),i=r(72836),u=r(66106);function o(e=d){return[e[0],e[1],e[2],e[3]]}function y(e,t,r=o()){return(0,i.p)(r,e),r[3]=t,r}function c(e,t,r=o()){return(0,s.s)(b,e,h(e)),(0,s.s)(T,t,h(t)),(0,s.m)(b,T,b),f=r,i=(0,n.r)((0,s.g)(r,b)),f[3]=i,f;var f,i}function l(e,t,r,n=o()){return y(u.U,e,B),y(u.b,t,m),y(u.d,r,g),c(B,m,B),c(B,g,n),n}function a(e){return e}function p(e){return e[3]}function h(e){return(0,n.d)(e[3])}r(68681);const d=[0,0,1,0],b=(0,f.c)(),T=(0,f.c)();o();const B=o(),m=o(),g=o()},84017:(e,t,r)=>{r.r(t),r.d(t,{a:()=>k,b:()=>G,c:()=>_,d:()=>x,e:()=>F,f:()=>C,g:()=>q,h:()=>L,i:()=>O,j:()=>R,k:()=>D,l:()=>W,m:()=>P,n:()=>re,p:()=>H,t:()=>M,u:()=>$,v:()=>S});var n=r(53785),s=r(16912),f=r(65775),i=r(57532),u=r(72836),o=r(66106),y=r(26923),c=r(1623),l=r(57257),a=r(13814),p=r(50626),h=r(97987),d=r(46961),b=r(45274),T=r(45003),B=r(64738),m=r(79641),g=r(92143),E=r(35132),A=r(40167);function O(e,t){return e.isGeographic||e.isWebMercator&&(t??!0)}function S(e,t,r){const n="local"===e.type;null!=r?.geographic&&r.geographic!==n&&g.L.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}const w=()=>g.L.getLogger("esri.geometry.support.meshUtils.normalProjection");function x(e,t,r,n,s){return N(n)?(v(I.TO_PCPF,A.b.fromTypedArray(e),A.h.fromTypedArray(t),A.h.fromTypedArray(r),n,A.b.fromTypedArray(s)),s):(w().error("Cannot convert spatial reference to PCPF"),s)}function L(e,t,r,n,s){return N(n)?(v(I.FROM_PCPF,A.b.fromTypedArray(e),A.h.fromTypedArray(t),A.h.fromTypedArray(r),n,A.b.fromTypedArray(s)),s):(w().error("Cannot convert to spatial reference from PCPF"),s)}function _(e,t,r){return(0,p.p)(e,t,0,r,(0,l.g)(t),0,e.length/3),r}function C(e,t,r){return(0,p.p)(e,(0,l.g)(r),0,t,r,0,e.length/3),t}function M(e,t,r){return(0,y.h)(z,r),(0,m.c)(t,e,z),(0,y.j)(z)||(0,m.d)(t,t),t}function P(e,t,r){if((0,y.h)(z,r),(0,m.c)(t,e,z,4),(0,y.j)(z)||(0,m.d)(t,t,4),e!==t)for(let r=3;r<e.length;r+=4)t[r]=e[r];return t}function F(e,t,r,n,s){if(!N(n))return w().error("Cannot convert spatial reference to PCPF"),s;v(I.TO_PCPF,A.b.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),A.h.fromTypedArray(t),A.h.fromTypedArray(r),n,A.b.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function R(e,t,r,n,s){if(!N(n))return w().error("Cannot convert to spatial reference from PCPF"),s;v(I.FROM_PCPF,A.b.fromTypedArray(e,16),A.h.fromTypedArray(t),A.h.fromTypedArray(r),n,A.b.fromTypedArray(s,16));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function v(e,t,r,n,s,f){if(!t)return;const i=r.count,o=(0,l.g)(s);if(Y(s))for(let r=0;r<i;r++)n.getVec(r,j),t.getVec(r,U),(0,a.c)(o,j,Z,o),(0,y.f)(z,Z),e===I.FROM_PCPF&&(0,y.t)(z,z),(0,u.w)(U,U,z),f.setVec(r,U);else for(let s=0;s<i;s++){n.getVec(s,j),t.getVec(s,U),(0,a.c)(o,j,Z,o),(0,y.f)(z,Z);const i=(0,E.mZ)(r.get(s,1));let c=Math.cos(i);e===I.TO_PCPF&&(c=1/c),z[0]*=c,z[1]*=c,z[2]*=c,z[3]*=c,z[4]*=c,z[5]*=c,e===I.FROM_PCPF&&(0,y.t)(z,z),(0,u.w)(U,U,z),(0,u.n)(U,U),f.setVec(s,U)}return f}function N(e){return Y(e)||function(e){return e.isWebMercator}(e)}function Y(e){return e.isWGS84||(0,n.ae)(e)||(0,n.O)(e)||(0,n.Q)(e)}var I,V;(V=I||(I={}))[V.TO_PCPF=0]="TO_PCPF",V[V.FROM_PCPF=1]="FROM_PCPF";const j=(0,o.c)(),U=(0,o.c)(),Z=(0,i.c)(),z=(0,s.c)();function k(e,t,r){return O(t.spatialReference,r?.geographic)?function(e,t,r){const n=t.spatialReference,s=Q(t,r,X),f=new Float64Array(e.position.length),i=function(e,t,r,n){return(0,m.t)(n,e,t),C(n,new Float64Array(e.length),r)}(e.position,s,n,f),u=(0,y.h)(te,s),o=function(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);return(0,m.c)(f,r,n),L(f,e,t,s,f),f}(i,f,e.normal,u,n),c=function(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);(0,m.c)(f,r,n,4);for(let e=3;e<f.length;e+=4)f[e]=r[e];return R(f,e,t,s,f),f}(i,f,e.tangent,u,n);return{position:i,normal:o,tangent:c}}(e,t,r):function(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=K(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=s[e]*o+f,n[e+1]=s[e+1]*o+i,n[e+2]=s[e+2]*o+u;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function W(e,t=i.I){const{position:r,normal:n,tangent:s}=e;return{position:(0,m.t)(new Float64Array(r.length),r,t),normal:null!=n?M(n,new Float32Array(n.length),t):null,tangent:null!=s?P(s,new Float32Array(s.length),t):null}}function q(e,t,r,n){const{position:s,normal:f,tangent:i}=e;if(!(0,B.i)(t))return{position:s,normal:f,tangent:i};const u=(0,B.v)(t,n);return k(W(e,r?.localMatrix),u,{geographic:"local"===t.type})}function G(e,t,r){if(r?.useTransform){const{position:n,normal:s,tangent:f}=e,{x:i,y:u,z:y}=t,c=(0,o.f)(i,u,y??0);return{vertexAttributes:{position:n,normal:s,tangent:f},vertexSpace:r.geographic??1?new b.Z({origin:c}):new d.Z({origin:c}),transform:new T.Z}}return{vertexAttributes:k(e,t,r),vertexSpace:new d.Z,transform:null}}function $(e,t,r){return O(t.spatialReference,r?.geographic)?function(e,t,r){const n=t.spatialReference;Q(t,r,X);const s=(0,f.i)(ee,X),i=new Float64Array(e.position.length),u=function(e,t,r,n){const s=_(e,t,n),f=new Float64Array(s.length);return(0,m.t)(f,s,r),f}(e.position,n,s,i),o=(0,y.h)(te,s),c=function(e,t,r,n,s){if(null==e)return null;const f=x(e,t,r,n,new Float32Array(e.length));return(0,m.c)(f,f,s),f}(e.normal,e.position,i,n,o),l=function(e,t,r,n,s){if(null==e)return null;const f=F(e,t,r,n,new Float32Array(e.length));return(0,m.c)(f,f,s,4),f}(e.tangent,e.position,i,n,o);return{position:u,normal:c,tangent:l}}(e,t,r):J(e,t,r)}function D(e,t,r,n,s){if(!(0,B.i)(t))return $(e,n,s);const{spatialReference:f}=n,i=q(e,t,r,f);return n.equals((0,B.v)(t,f))?J(i,n,s):$(i,n,s)}function H({positions:e,transform:t,vertexSpace:r,inSpatialReference:n,outSpatialReference:s,outPositions:y,localMode:d}){const b=r.origin??o.Z,T=null!=r.origin?t?.localMatrix??i.I:i.I;if("georeferenced"===r.type){const t=y??(0,h.n)(e.length);if((0,f.p)(T,i.I)?(0,h.c)(t,e):(0,m.t)(t,e,T),!(0,u.o)(b,o.Z)){const[e,r,n]=b;for(let s=0;s<t.length;s+=3)t[s]+=e,t[s+1]+=r,t[s+2]+=n}return(0,p.p)(t,n,0,t,s,0,t.length/3),t}let B=n;const g=(0,l.g)(n);B=s.isWebMercator&&d||!(0,c.canProjectWithoutEngine)(n,g)?B:g,(0,a.c)(n,b,X,B),(0,f.m)(X,X,T);const E=y??(0,h.n)(e.length);return(0,m.t)(E,e,X),(0,p.p)(E,B,0,E,s,0,E.length/3),E}function J(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=K(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=(s[e]-f)/o,n[e+1]=(s[e+1]-i)/o,n[e+2]=(s[e+2]-u)/o;return{position:n,normal:e.normal,tangent:e.tangent}}function Q(e,t,r){(0,a.c)(e.spatialReference,[e.x,e.y,e.z??0],r,(0,l.g)(e.spatialReference));const n=K(t?t.unit:null,e.spatialReference);return(0,f.s)(r,r,[n,n,n]),r}function K(e,t){if(null==e)return 1;const r=(0,n.Z)(t);return 1/(0,n.l)(r,"meters",e)}const X=(0,i.c)(),ee=(0,i.c)(),te=(0,s.c)(),re=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:W,georeference:k,georeferenceApplyTransform:q,georeferenceByTransform:G,project:H,ungeoreference:$,ungeoreferenceByTransform:D},Symbol.toStringTag,{value:"Module"}))},64738:(e,t,r)=>{r.d(t,{i:()=>y,t:()=>o,v:()=>c});var n=r(65775),s=r(57532),f=r(91597),i=r(46961),u=r(79641);function o(e){const{vertexSpace:t}=e;if(null!=t.origin)return e.clone();const{anchor:r}=e,s=r.clone(),f=(0,n.f)(l,[-s.x,-s.y,-s.z]),o=new i.Z({origin:[s.x,s.y,s.z]}),y=e.cloneWithVertexSpace(o),{position:c}=y.vertexAttributes;return y.vertexAttributes.position=(0,u.t)(new Float64Array(c.length),c,f),y.vertexAttributesChanged(),y}function y(e){return null!=e.origin}function c(e,t){if(!y(e))return null;const[r,n,s]=e.origin;return new f.Z({x:r,y:n,z:s,spatialReference:t})}const l=(0,s.c)()},45003:(e,t,r)=>{r.d(t,{Z:()=>T});var n,s=r(29768),f=r(12047),i=r(34250),u=(r(76506),r(92143),r(17533)),o=r(65775),y=r(57532),c=r(35861),l=r(45087),a=r(72836),p=r(66106),h=r(34987);r(21972),r(86656),r(66396),r(22723),r(62062),r(6540),r(6906),r(50406),r(60991),r(31450),r(91306),r(29794),r(7200),r(82426),r(68681);let d=n=class extends f.wq{constructor(e){super(e),this.translation=(0,p.c)(),this.rotationAxis=(0,p.e)(h.u),this.rotationAngle=0,this.scale=(0,p.f)(1,1,1)}get rotation(){return(0,h.f)(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=(0,p.a)((0,h.a)(e)),this.rotationAngle=(0,h.b)(e)}get localMatrix(){const e=(0,y.c)();return(0,c.s)(b,(0,h.a)(this.rotation),(0,h.c)(this.rotation)),(0,o.b)(e,b,this.translation,this.scale),e}get localMatrixInverse(){return(0,o.i)((0,y.c)(),this.localMatrix)}applyLocal(e,t){return(0,a.g)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,a.g)(t,e,this.localMatrixInverse)}equals(e){return this===e||null!=e&&(0,o.e)(this.localMatrix,e.localMatrix)}clone(){const e={translation:(0,p.a)(this.translation),rotationAxis:(0,p.a)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,p.a)(this.scale)};return new n(e)}};(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,s._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"rotation",null),(0,s._)([(0,i.Cb)()],d.prototype,"localMatrix",null),(0,s._)([(0,i.Cb)()],d.prototype,"localMatrixInverse",null),d=n=(0,s._)([(0,u.j)("esri.geometry.support.MeshTransform")],d);const b=(0,l.c)(),T=d}}]);