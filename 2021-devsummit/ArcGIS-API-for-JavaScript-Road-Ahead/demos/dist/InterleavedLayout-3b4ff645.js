import { B as r$1, $ as o$1 } from './_virtual_index-634cbc09.js';
import { r as r$2 } from './vec4-63828337.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$2{constructor(t,e,r=0,f,i){this.TypedArrayConstructor=t,this.elementCount=9;const s=this.TypedArrayConstructor;void 0===f&&(f=9*s.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==i?new s(e,d):new s(e,d,(i-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT;}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f];}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r;}copyFrom(t,e,r){const f=this.typedBuffer,i=e.typedBuffer;let s=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[s++]=i[d++];}get buffer(){return this.typedBuffer.buffer}}t$2.ElementCount=9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$1{constructor(t,e,r=0,f,i){this.TypedArrayConstructor=t,this.elementCount=16;const s=this.TypedArrayConstructor;void 0===f&&(f=16*s.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==i?new s(e,d):new s(e,d,(i-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT;}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f];}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r;}copyFrom(t,e,r){const f=this.typedBuffer,i=e.typedBuffer;let s=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<16;++u)f[s++]=i[d++];}get buffer(){return this.typedBuffer.buffer}}t$1.ElementCount=16;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,s,f){this.TypedArrayConstructor=t,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===s&&(s=i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new i(e,u):new i(e,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT;}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e;}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$3{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT;}getVec(e,r){return e*=this.typedBufferStride,r$1(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1];}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r;}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r;}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i]=s[d];}get buffer(){return this.typedBuffer.buffer}}e$3.ElementCount=2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$2{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT;}getVec(e,r){return e*=this.typedBufferStride,o$1(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2];}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r;}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f;}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i++]=s[d++],f[i]=s[d];}get buffer(){return this.typedBuffer.buffer}}e$2.ElementCount=3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$1{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT;}getVec(e,r){return e*=this.typedBufferStride,r$2(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3];}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r;}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s;}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i++]=s[d++],f[i++]=s[d++],f[i]=s[d];}get buffer(){return this.typedBuffer.buffer}}e$1.ElementCount=4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class f extends t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32";}static fromTypedArray(e,t){return new f(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}f.ElementType="f32";class u$1 extends e$3{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32";}static fromTypedArray(e,t){return new u$1(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}u$1.ElementType="f32";class a extends e$2{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32";}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class p extends e$1{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32";}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class c$1 extends t$2{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32";}static fromTypedArray(e,t){return new c$1(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c$1.ElementType="f32";class b extends t$2{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64";}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class o extends t$1{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32";}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class l extends t$1{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64";}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f64";class i extends t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64";}static fromTypedArray(e,t){return new i(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}i.ElementType="f64";class m extends e$3{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64";}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class T$1 extends e$2{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64";}static fromTypedArray(e,t){return new T$1(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T$1.ElementType="f64";class d extends e$1{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64";}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f64";class h extends t{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8";}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="u8";class A$1 extends e$3{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8";}static fromTypedArray(e,t){return new A$1(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A$1.ElementType="u8";class O extends e$2{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8";}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class x extends e$1{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8";}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class g extends t{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16";}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u16";class w extends e$3{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16";}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class E extends e$2{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16";}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class L extends e$1{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16";}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class F extends t{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32";}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends e$3{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32";}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends e$2{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32";}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class j extends e$1{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32";}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="u32";class V extends t{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8";}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class M extends e$3{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8";}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="i8";class S extends e$2{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8";}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="i8";class k extends e$1{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8";}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i8";class q extends t{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16";}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class v extends e$3{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16";}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class z extends e$2{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16";}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class B extends e$1{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16";}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="i16";class C extends t{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32";}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i32";class D extends e$3{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32";}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends e$2{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32";}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends e$1{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32";}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return !1;case"i8":case"i16":case"i32":case"f32":case"f64":return !0;default:return}}function u(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return !0;case"f32":case"f64":return !1;default:return}}function c(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class N{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride);}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new N(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n);}else {const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n);}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[];}vec2f(t,i){return this.appendField(t,u$1,i),this}vec2f64(e,i){return this.appendField(e,m,i),this}vec3f(e,t){return this.appendField(e,a,t),this}vec3f64(e,t){return this.appendField(e,T$1,t),this}vec4f(e,t){return this.appendField(e,p,t),this}vec4f64(e,t){return this.appendField(e,d,t),this}mat3f(e,t){return this.appendField(e,c$1,t),this}mat3f64(e,t){return this.appendField(e,b,t),this}mat4f(e,t){return this.appendField(e,o,t),this}mat4f64(e,t){return this.appendField(e,l,t),this}vec4u8(e,t){return this.appendField(e,x,t),this}f32(e,t){return this.appendField(e,f,t),this}f64(e,t){return this.appendField(e,i,t),this}u8(e,t){return this.appendField(e,h,t),this}u16(e,t){return this.appendField(e,g,t),this}i8(e,t){return this.appendField(e,V,t),this}vec2i8(e,t){return this.appendField(e,M,t),this}vec2i16(e,t){return this.appendField(e,v,t),this}vec2u8(e,t){return this.appendField(e,A$1,t),this}vec4u16(e,t){return this.appendField(e,L,t),this}u32(e,t){return this.appendField(e,F,t),this}appendField(e$1,t,i){const s=t.ElementCount*e(t.ElementType),r=this.stride;this.fields.set(e$1,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e$1);}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new N(this,e)}createView(e){return new N(this,e)}clone(){const e=new T;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function A(){return new T}

export { A, B, C, D, E, F, G, H, I, L, M, O, S, T$1 as T, U, V, a, b, c$1 as c, d, A$1 as e, f, g, h, i, j, k, l, m, u as n, o, p, q, c as r, r as s, e as t, u$1 as u, v, w, x, z };
