import { a as a$k } from './devEnvironmentUtils-0f97b5c2.js';
import { gO as n$5, ay as n$6, aI as r$4, hf as t$a, iC as A$5, iB as p$7, h_ as e$j, t as t$b, r as r$5, Z as s$8, s as s$9, av as r$6, cN as f$8, b8 as n$7, iG as r$7, cZ as a$c, ak as i$f, aH as n$8, lA as V$2, d6 as X$1, ih as o$n, mL as e$k, as as f$a, mM as c$e, ao as v$6, ap as a$d, h1 as a$e, a as n$a, gt as a$f, f7 as p$8, fz as C$3, mN as s$a, eA as a$g, aT as o$o, aA as o$p, mO as q$1, mP as w$2, gV as _$6, gZ as z$1, aj as c$f, ii as E$6, g$ as u$9, gY as e$l, mQ as G$4, F as has, ai as s$b, al as e$p, kj as f$b, h5 as c$h, h7 as O$4, B as e$q, h0 as r$a, iF as n$d, mR as e$r, mS as l$9, gT as r$b, a_ as s$c, a$ as g$9, gU as P$4, eP as S$6, lK as r$c, lI as h$9, iV as b$5, h as L$4, bE as w$3, mT as e$t, mU as B$5, fd as m$9, hl as g$a, h6 as h$a, mV as i$i } from './_virtual_index-4b72c57d.js';
import { e as e$n } from './mat3f64-3e7fbf1f.js';
import { e as e$o, o as o$r } from './mat4f64-b94565ce.js';
import { c as c$g, x as x$5, u as u$a, i as i$g, L as L$5, O as O$5, E as E$7 } from './BufferView-d1082f0e.js';
import { t as t$f, r as r$e, f as f$c, e as e$v } from './vec33-f2e508bb.js';
import { l as l$8, u as u$6, g as g$8, c as c$j, n as n$f, o as o$t, r as r$d, a as r$f, b as n$g, d as o$u, e as e$u, t as t$g, i as i$h, f as o$v, h as n$h } from './DefaultMaterial_COLOR_GAMMA-b335d78c.js';
import { b as a$b, c as c$d, a as t$d, O as O$2, d as t$e, o as o$q, r as r$9, C as C$4, e as o$s, n as n$e, f as e$s, W as W$1, g as c$i, A as A$6, h as h$8, l as l$a, i as a$i, _ as _$7, j as a$j, S as S$5 } from './requestImageUtils-2622b01a.js';
import { e as e$i } from './Util-aa5e116c.js';
import { O as O$1 } from './VertexAttribute-f7d7a686.js';
import { u as u$7, P as P$3, L as L$3, C as C$2, F as F$2, D as D$3, M as M$2, G as G$3, Y as Y$1, V as V$3, E as E$5, I as I$4, O as O$3 } from './enums-fb707d37.js';
import { u as u$8, n as n$9, b as a$h } from './Texture-e2dd4118.js';
import { _ as _$5, f as f$9, c as c$c, b as b$4, n as n$b } from './VertexArrayObject-47c5aa7a.js';
import { t as t$c } from './VertexElementDescriptor-b07b83f4.js';
import { T as T$5 } from './InterleavedLayout-70f30ff1.js';
import { r as r$8, n as n$c } from './vec3f32-90dde670.js';
import { S as S$4 } from './quat-79f70c69.js';
import { e as e$m } from './quatf64-808fd6fd.js';
import { R as R$1 } from './sphere-96770e73.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class a$a{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=n$6(),e$i(i.length>=1),e$i(a.length%this._numIndexPerPrimitive==0),e$i(a.length>=i.length*this._numIndexPerPrimitive),e$i(3===c.size||4===c.size);const{data:o,size:d}=c,M=i.length;let l=d*a[this._numIndexPerPrimitive*i[0]];b$3.clear(),b$3.push(l),this.bbMin=r$4(o[l],o[l+1],o[l+2]),this.bbMax=t$a(this.bbMin);for(let t=0;t<M;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=d*a[s+i],b$3.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}A$5(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$3.length;++t){l=b$3.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$3.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(p$7(this.bbMin,this.bbMax)>1){const i=A$5(n$6(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],d=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<d&&(d=n);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),d<i[2]&&(s|=4),n[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$a(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$3.prune();}}const b$3=new n$5({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r$3{constructor(){this.id=e$j();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$h;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT";}(e$h||(e$h={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class g$7 extends r$3{constructor(t,i=[],n=a$b.Triangle,o=-1){super(),this._primitiveType=n,this.edgeIndicesLength=o,this.type=e$h.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,s]of t)s&&this._vertexAttributes.set(e,{...s});if(null==i||0===i.length){const t=d$8(this._vertexAttributes),e=l$8(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[e,s]of i)s&&(this._indices.set(e,l$7(s)),e===O$1.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength));}cloneShallow(){const t=new g$7([],void 0,this._primitiveType,void 0),{_vertexAttributes:e,_indices:i}=t;return this._vertexAttributes.forEach(((t,i)=>{e.set(i,t);})),this._indices.forEach(((t,e)=>{i.set(e,t);})),t.screenToWorldRatio=this.screenToWorldRatio,t._boundingInfo=this._boundingInfo,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$b(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return this.primitiveType===a$b.Triangle?this._computeAttachmentOriginTriangles(t):this._computeAttachmentOriginPoints(t)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(O$1.POSITION),i=this.vertexAttributes.get(O$1.POSITION);return u$6(i,e,t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(O$1.POSITION),i=this.vertexAttributes.get(O$1.POSITION);return g$8(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get(O$1.POSITION);if(0===t.length)return null;const n=this.primitiveType===a$b.Triangle?3:1;e$i(t.length%n==0,"Indexing error: "+t.length+" not divisible by "+n);const s=l$8(t.length/n),o=this.vertexAttributes.get(O$1.POSITION);return new a$a(s,n,t,o)}}function d$8(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function l$7(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$9{}function n$4(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(n$4||(n$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$m(o,t=!0){o.attributes.add(O$1.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(n$4`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?n$4`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var a$9;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw";}(a$9||(a$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i$e{constructor(i,s,t,a,n=null){this.name=i,this.type=s,this.arraySize=n,this.bind={[a$9.Pass]:null,[a$9.Draw]:null},r$5(t)&&r$5(a)&&(this.bind[t]=a);}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$g extends i$e{constructor(r,e){super(r,"vec4",a$9.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s$7=s$8.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class i$d{constructor(){this.includedModules=new Map;}include(e,r){if(this.includedModules.has(e)){const t=this.includedModules.get(e);if(t!==r){s$7.error("Trying to include shader module multiple times with different sets of options.");const r=new Set;for(const n of Object.keys(t))t[n]!==e[n]&&r.add(n);for(const n of Object.keys(e))t[n]!==e[n]&&r.add(n);r.forEach((r=>console.error(`  ${r}: current ${t[r]} new ${e[r]}`)));}}else this.includedModules.set(e,r),e(this.builder,r);}}class o$l extends i$d{constructor(){super(...arguments),this.vertex=new u$5,this.fragment=new u$5,this.attributes=new m$8,this.varyings=new h$7,this.extensions=new d$7,this.constants=new l$6;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),t=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?f$7:_$4,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${r.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${t.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}generateBind(e,r){const n=new Map;this.vertex.uniforms.entries.forEach((r=>{const s=r.bind[e];r$5(s)&&n.set(r.name,s);})),this.fragment.uniforms.entries.forEach((r=>{const s=r.bind[e];r$5(s)&&n.set(r.name,s);}));const s=Array.from(n.values()),i=s.length;return (e,t,n)=>{for(let o=0;o<i;++o)s[o](r,e,t,n);}}}class a$8{constructor(){this._entries=new Map;}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r);}get(e){return this._entries.get(e)}_add(r){if(t$b(r))s$7.error(`Trying to add null Uniform from ${(new Error).stack}.`);else {if(this._entries.has(r.name)&&!this._entries.get(r.name).equals(r))throw new s$9(`Duplicate uniform name ${r.name} for different uniform type`);this._entries.set(r.name,r);}}generateSource(){return Array.from(this._entries.values()).map((e=>r$5(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class c$b{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class u$5 extends i$d{constructor(){super(...arguments),this.uniforms=new a$8,this.code=new c$b,this.constants=new l$6;}get builder(){return this}}class m$8{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class h$7{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class d$7{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const r="vertex"===e?d$7.ALLOWLIST_VERTEX:d$7.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}}d$7.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d$7.ALLOWLIST_VERTEX=[];class l$6{constructor(){this._entries=new Set;}add(e,r,t){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=l$6._numberToFloatStr(t);break;case"int":n=l$6._numberToIntStr(t);break;case"bool":n=t.toString();break;case"vec2":n=`vec2(${l$6._numberToFloatStr(t[0])},                            ${l$6._numberToFloatStr(t[1])})`;break;case"vec3":n=`vec3(${l$6._numberToFloatStr(t[0])},                            ${l$6._numberToFloatStr(t[1])},                            ${l$6._numberToFloatStr(t[2])})`;break;case"vec4":n=`vec4(${l$6._numberToFloatStr(t[0])},                            ${l$6._numberToFloatStr(t[1])},                            ${l$6._numberToFloatStr(t[2])},                            ${l$6._numberToFloatStr(t[3])})`;break;case"ivec2":n=`ivec2(${l$6._numberToIntStr(t[0])},                             ${l$6._numberToIntStr(t[1])})`;break;case"ivec3":n=`ivec3(${l$6._numberToIntStr(t[0])},                             ${l$6._numberToIntStr(t[1])},                             ${l$6._numberToIntStr(t[2])})`;break;case"ivec4":n=`ivec4(${l$6._numberToIntStr(t[0])},                             ${l$6._numberToIntStr(t[1])},                             ${l$6._numberToIntStr(t[2])},                             ${l$6._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(t,(e=>l$6._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${r} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _$4="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",f$7="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$f extends i$e{constructor(r,e){super(r,"vec2",a$9.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$e;!function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize";}(e$e||(e$e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class m$7 extends i$e{constructor(r,e){super(r,"sampler2D",a$9.Pass,((s,o,t)=>s.bindTexture(r,e(o,t))));}}function p$6(o,n,c=e$e.None){const p=[new m$7(o,n)];if(c&e$e.Size){const i=o+"Size";p.push(new e$f(i,((o,t)=>{const i=n(o,t);return r$5(i)?r$6(f$6,i.descriptor.width,i.descriptor.height):f$8})));}if(c&e$e.InvSize){const i=o+"InvSize";p.push(new e$f(i,((o,t)=>{const i=n(o,t);return r$5(i)?r$6(f$6,1/i.descriptor.width,1/i.descriptor.height):f$8})));}return p}const f$6=n$7();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i$c extends t$9{constructor(){super(...arguments),this.color=r$7(1,1,1,1);}}function l$5(){const e=new o$l;return e.include(o$m),e.fragment.uniforms.add([new m$7("tex",(e=>e.texture)),new e$g("uColor",(e=>e.color))]),e.fragment.code.add(n$4`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:i$c,build:l$5},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$6(){if(t$b(i$b)){const t=t=>a$c(`esri/libs/basisu/${t}`);i$b=import('./basis_transcoder-03579909.js').then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$b}let i$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var _$3;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$3||(_$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g$6=null,l$4=null;async function c$a(){return t$b(l$4)&&(l$4=s$6(),g$6=await l$4),l$4}function u$4(t,n){if(t$b(g$6))return t.byteLength;const r=new g$6.BasisFile(new Uint8Array(t)),s=T$4(r)?E$4(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),s}function m$6(t,n){if(t$b(g$6))return t.byteLength;const r=new g$6.KTX2File(new Uint8Array(t)),s=_$2(r)?E$4(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),s}function E$4(e,t,n,s,i){const a=_$5(t?u$7.COMPRESSED_RGBA8_ETC2_EAC:u$7.COMPRESSED_RGB8_ETC2),g=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*g)}function T$4(e){return e.getNumImages()>=1&&!e.isUASTC()}function _$2(e){return e.getFaces()>=1&&e.isETC1S()}async function h$6(t,n,r){t$b(g$6)&&(g$6=await c$a());const s=new g$6.BasisFile(new Uint8Array(r));if(!T$4(s))return null;s.startTranscoding();const i=p$5(t,n,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),i}async function A$4(t,n,r){t$b(g$6)&&(g$6=await c$a());const s=new g$6.KTX2File(new Uint8Array(r));if(!_$2(s))return null;s.startTranscoding();const i=p$5(t,n,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),i}function p$5(e,t,o,g,l,c,u,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[_,h]=E?g?[_$3.ETC2_RGBA,u$7.COMPRESSED_RGBA8_ETC2_EAC]:[_$3.ETC1_RGB,u$7.COMPRESSED_RGB8_ETC2]:T?g?[_$3.BC3_RGBA,u$7.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$3.BC1_RGB,u$7.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$3.RGBA32,P$3.RGBA],A=t.hasMipmap?o:Math.min(1,o),p=[];for(let n=0;n<A;n++)p.push(new Uint8Array(u(n,_))),m(n,_,p[n]);const C=p.length>1,d=C?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,R={...t,samplingMode:d,hasMipmap:C,internalFormat:h,width:l,height:c};return new u$8(e,R,{type:"compressed",levels:p})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a$7=s$8.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),i$a=542327876,s$5=131072,l$3=4;function u$3(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function m$5(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c$9=u$3("DXT1"),h$5=u$3("DXT3"),p$4=u$3("DXT5"),d$6=31,g$5=0,f$5=1,C$1=2,w$1=3,D$2=4,_$1=7,T$3=20,A$3=21;function E$3(e,t,n){const{textureData:a,internalFormat:i,width:s,height:l}=S$3(n,t.hasMipmap);return t.samplingMode=a.levels.length>1?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l,new u$8(e,t,a)}function S$3(e,r){const o=new Int32Array(e,0,d$6);if(o[g$5]!==i$a)return a$7.error("Invalid magic number in DDS header"),null;if(!(o[T$3]&l$3))return a$7.error("Unsupported format, must contain a FourCC code"),null;const u=o[A$3];let E,S;switch(u){case c$9:E=8,S=u$7.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h$5:E=16,S=u$7.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case p$4:E=16,S=u$7.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return a$7.error("Unsupported FourCC code:",m$5(u)),null}let M=1,R=o[D$2],x=o[w$1];0==(3&R)&&0==(3&x)||(a$7.warn("Rounding up compressed texture size to nearest multiple of 4."),R=R+3&-4,x=x+3&-4);const X=R,b=x;let I,v;o[C$1]&s$5&&!1!==r&&(M=Math.max(1,o[_$1])),1===M||i$f(R)&&i$f(x)||(a$7.warn("Ignoring mipmaps of non power of two sized compressed texture."),M=1);let F=o[f$5]+4;const L=[];for(let t=0;t<M;++t)v=(R+3>>2)*(x+3>>2)*E,I=new Uint8Array(e,F,v),L.push(I),F+=v,R=Math.max(1,R>>1),x=Math.max(1,x>>1);return {textureData:{type:"compressed",levels:L},internalFormat:S,width:X,height:b}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const E$2=new Map([[O$1.POSITION,0],[O$1.NORMAL,1],[O$1.UV0,2],[O$1.COLOR,3],[O$1.SIZE,4],[O$1.TANGENT,4],[O$1.AUXPOS1,5],[O$1.SYMBOLCOLOR,5],[O$1.AUXPOS2,6],[O$1.FEATUREATTRIBUTE,6],[O$1.INSTANCEFEATUREATTRIBUTE,6],[O$1.INSTANCECOLOR,7],[O$1.MODEL,8],[O$1.MODELNORMAL,12],[O$1.MODELORIGINHI,11],[O$1.MODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
[new t$c(O$1.POSITION,3,C$2.FLOAT,0,12)];[new t$c(O$1.POSITION,3,C$2.FLOAT,0,20),new t$c(O$1.UV0,2,C$2.FLOAT,12,20)];[new t$c(O$1.POSITION,3,C$2.FLOAT,0,32),new t$c(O$1.NORMAL,3,C$2.FLOAT,12,32),new t$c(O$1.UV0,2,C$2.FLOAT,24,32)];[new t$c(O$1.POSITION,3,C$2.FLOAT,0,16),new t$c(O$1.COLOR,4,C$2.UNSIGNED_BYTE,12,16)];const t$8=[new t$c(O$1.POSITION,2,C$2.FLOAT,0,8)],A$2=[new t$c(O$1.POSITION,2,C$2.FLOAT,0,16),new t$c(O$1.UV0,2,C$2.FLOAT,8,16)];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function u$2(a,i=t$8,m=E$2,l=-1,T=1){let u=null;if(i===A$2)u=new Float32Array([l,l,0,0,T,l,1,0,l,T,0,1,T,T,1,1]);else u=new Float32Array([l,l,T,l,l,T,T,T]);return new f$9(a,m,{geometry:i},{geometry:c$c.createVertex(a,F$2.STATIC_DRAW,u)})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class L$2 extends r$3{constructor(t,e){super(),this._data=t,this.type=e$h.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$8,this._passParameters=new i$c,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:D$3.REPEAT,t:D$3.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||c$d.STRETCH,this.estimatedTexMemRequired=L$2._estimateTexMemRequired(this._data,this.params),this._startPreload();}_startPreload(){const t=this._data;t$b(t)||(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t));}_startPreloadVideoElement(t){if(!(V$2(t.src)||"auto"===t.preload&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const e=!t.paused;if(t.src=t.src,e&&t.autoplay){const e=()=>{t.removeEventListener("canplay",e),t.play();};t.addEventListener("canplay",e);}}}_startPreloadImageElement(t){X$1(t.src)||V$2(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static _getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static _estimateTexMemRequired(t,e){if(t$b(t))return 0;if(o$n(t)||e$k(t))return e.encoding===L$2.KTX2_ENCODING?m$6(t,e.mipmap):e.encoding===L$2.BASIS_ENCODING?u$4(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?L$2._getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this._data=void 0;}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(t){return {target:M$2.TEXTURE_2D,pixelFormat:P$3.RGBA,dataType:G$3.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?t.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(t,e){if(r$5(this._glTexture))return this._glTexture;if(r$5(this._loadingPromise))return this._loadingPromise;const r=this._data;return t$b(r)?(this._glTexture=new u$8(t,this._createDescriptor(t),null),this._glTexture):"string"==typeof r?this._loadFromURL(t,e,r):r instanceof Image?this._loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r,e):(o$n(r)||e$k(r))&&this.params.encoding===L$2.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(t,r)):(o$n(r)||e$k(r))&&this.params.encoding===L$2.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(t,r)):(o$n(r)||e$k(r))&&this.params.encoding===L$2.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(t,r)):e$k(r)?this._loadFromPixelData(t,r):o$n(r)?this._loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this._data instanceof HTMLVideoElement)||t$b(this._glTexture))return r;if(this._data.readyState<G$2.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if(r$5(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this._data),this._drawStretchedTexture(t,e,r,i,s,this._glTexture);}else {const{videoWidth:t,videoHeight:e}=this._data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this._data):this._glTexture.setData(this._data);}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(t,e){return this._glTexture=E$3(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>A$4(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>h$6(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){e$i(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.params.components?P$3.LUMINANCE:3===this.params.components?P$3.RGB:P$3.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new u$8(t,r,e),this._glTexture}_loadFromURL(t,e,r){return this._loadAsync((async i=>{const s=await t$d(r,{signal:i});return f$a(i),this._loadFromImage(t,s,e)}))}_loadFromImageElement(t,e,r){return r.complete?this._loadFromImage(t,r,e):this._loadAsync((async i=>{const s=await c$e(r,r.src,!1,i);return f$a(i),this._loadFromImage(t,s,e)}))}_loadFromVideoElement(t,e,r){return r.readyState>=G$2.HAVE_CURRENT_DATA?this._loadFromImage(t,r,e):this._loadFromVideoElementAsync(t,e,r)}_loadFromVideoElementAsync(t,r,i){return this._loadAsync((s=>new Promise(((a,o)=>{const m=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),a$f(_);},p=()=>{i.readyState>=G$2.HAVE_CURRENT_DATA&&(m(),a(this._loadFromImage(t,i,r)));},d=t=>{m(),o(t||new s$9("Failed to load video"));};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const _=v$6(s,(()=>d(a$d())));}))))}_loadFromImage(t,e,r){const s=L$2._getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.params.components?P$3.RGB:P$3.RGBA,!this._requiresPowerOfTwo(t,a)||i$f(s.width)&&i$f(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new u$8(t,a,e),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(i,i),r}_requiresPowerOfTwo(t,e){const r=D$3.CLAMP_TO_EDGE,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return !n$9(t.gl)&&(e.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:m}=i,h=a$e(n),l=a$e(m);let p;switch(a.width=h,a.height=l,this.params.powerOfTwoResizeMode){case c$d.PAD:a.textureCoordinateScaleFactor=[n/h,m/l],p=new u$8(e,a),p.updateData(0,0,0,n,m,r);break;case c$d.STRETCH:case null:case void 0:p=this._stretchToPowerOfTwo(e,r,a,o());break;default:n$a(this.params.powerOfTwoResizeMode);}return a.hasMipmap&&p.generateMipmap(),p}_stretchToPowerOfTwo(t,e,r,i){const s=new u$8(t,r),a=new b$4(t,{colorTarget:Y$1.TEXTURE,depthStencilTarget:V$3.NONE},s),o=new u$8(t,{target:M$2.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:G$3.UNSIGNED_BYTE,wrapMode:D$3.CLAMP_TO_EDGE,samplingMode:L$3.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=u$2(t),m=t.getBoundFramebufferObject();return this._drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(m),s}_drawStretchedTexture(t,e,r,i,s,a){this._passParameters.texture=s,t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height),t.bindTechnique(e,this._passParameters,null),t.bindVAO(i),t.drawArrays(E$5.TRIANGLE_STRIP,0,n$b(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height),this._passParameters.texture=null;}unload(){if(r$5(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null;}if(r$5(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),r$5(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}}var G$2;L$2.DDS_ENCODING="image/vnd-ms.dds",L$2.KTX2_ENCODING="image/ktx2",L$2.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(G$2||(G$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var h$4;!function(h){h[h.Color=0]="Color",h[h.Depth=1]="Depth",h[h.Normal=2]="Normal",h[h.Shadow=3]="Shadow",h[h.ShadowHighlight=4]="ShadowHighlight",h[h.ShadowExludeHighlight=5]="ShadowExludeHighlight",h[h.Highlight=6]="Highlight",h[h.Alpha=7]="Alpha",h[h.COUNT=8]="COUNT";}(h$4||(h$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$k(o){const d=n$4`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$j(o,d){d.normalType===i$9.Attribute&&(o.attributes.add(O$1.NORMAL,"vec3"),o.vertex.code.add(n$4`vec3 normalModel() {
return normal;
}`)),d.normalType===i$9.CompressedAttribute&&(o.include(o$k),o.attributes.add(O$1.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(n$4`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),d.normalType===i$9.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(n$4`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}var i$9;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(i$9||(i$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$d(e,o){const n=e.fragment;switch(n.code.add(n$4`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$8.None:n.code.add(n$4`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$8.View:n.code.add(n$4`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$8.WindingOrder:n.code.add(n$4`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$a(o.doubleSidedMode);case i$8.COUNT:}}var i$8;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$8||(i$8={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var o$i;function d$5(d,a){switch(a.textureCoordinateType){case o$i.Default:return d.attributes.add(O$1.UV0,"vec2"),d.varyings.add("vuv0","vec2"),void d.vertex.code.add(n$4`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o$i.Atlas:return d.attributes.add(O$1.UV0,"vec2"),d.varyings.add("vuv0","vec2"),d.attributes.add(O$1.UVREGION,"vec4"),d.varyings.add("vuvRegion","vec4"),void d.vertex.code.add(n$4`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:n$a(a.textureCoordinateType);case o$i.None:return void d.vertex.code.add(n$4`void forwardTextureCoordinates() {}`);case o$i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT";}(o$i||(o$i={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t$7(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n$4`#ifndef GL_EXT_shader_texture_lod
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
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$6(a,s){switch(a.include(d$5,s),a.fragment.code.add(n$4`
  struct TextureLookupParameter {
    vec2 uv;
    ${s.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),s.textureCoordinateType){case o$i.Default:return void a.fragment.code.add(n$4`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o$i.Atlas:return a.include(t$7),void a.fragment.code.add(n$4`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:n$a(s.textureCoordinateType);case o$i.None:case o$i.COUNT:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$h extends i$e{constructor(r,o){super(r,"vec3",a$9.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$c extends i$e{constructor(r,e){super(r,"vec3",a$9.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$g extends i$e{constructor(r,o){super(r,"vec2",a$9.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class m$4 extends i$e{constructor(r,e){super(r,"sampler2D",a$9.Draw,((o,s,t)=>o.bindTexture(r,e(s,t))));}}function p$3(s,n,c=e$e.None){const p=[new m$4(s,n)];if(c&e$e.Size){const i=s+"Size";p.push(new o$g(i,((s,t)=>{const i=n(s,t);return r$5(i)?r$6(f$4,i.descriptor.width,i.descriptor.height):f$8})));}if(c&e$e.InvSize){const i=s+"InvSize";p.push(new o$g(i,((s,t)=>{const i=n(s,t);return r$5(i)?r$6(f$4,1/i.descriptor.width,1/i.descriptor.height):f$8})));}return p}const f$4=n$7();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$6{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRepository.release(this._technique);}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,t),this._technique),this._technique}ensureResources(t){return O$2.LOADED}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class h$3 extends t$6{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){this._texture=p$8(this._texture),this._textureNormal=p$8(this._textureNormal),this._textureEmissive=p$8(this._textureEmissive),this._textureOcclusion=p$8(this._textureOcclusion),this._textureMetallicRoughness=p$8(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?O$2.LOADED:O$2.LOADING}get textureBindParameters(){return new o$f(r$5(this._texture)?this._texture.glTexture:null,r$5(this._textureNormal)?this._textureNormal.glTexture:null,r$5(this._textureEmissive)?this._textureEmissive.glTexture:null,r$5(this._textureOcclusion)?this._textureOcclusion.glTexture:null,r$5(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(t$b(this._texture)||e!==this._texture.id)&&(this._texture=p$8(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(e,r){if(t$b(e))return void r(null);const u=this._textureRepository.acquire(e);if(C$3(u))return ++this._numLoading,void u.then((e=>{if(this._disposed)return p$8(e),void r(null);r(e);})).finally((()=>--this._numLoading));r(u);}}class o$f extends t$9{constructor(t=null,e=null,s=null,i=null,r=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=r;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
r$8(0,.6,.2);var m$3;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT";}(m$3||(m$3={}));function p$2(e,u){const l=e.fragment,d=u.hasMetalnessAndRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===m$3.Normal&&d&&e.include(a$6,u),u.pbrMode!==m$3.Schematic)if(u.pbrMode!==m$3.Disabled){if(u.pbrMode===m$3.Normal){l.code.add(n$4`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.supportsTextureAtlas?e$e.Size:e$e.None,s=u.pbrTextureBindType;u.hasMetalnessAndRoughnessTexture&&(l.uniforms.add(s===a$9.Pass?p$6("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):p$3("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),l.code.add(n$4`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(l.uniforms.add(s===a$9.Pass?p$6("texEmission",(e=>e.textureEmissive),e):p$3("texEmission",(e=>e.textureEmissive),e)),l.code.add(n$4`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),u.hasOcclusionTexture?(l.uniforms.add(s===a$9.Pass?p$6("texOcclusion",(e=>e.textureOcclusion),e):p$3("texOcclusion",(e=>e.textureOcclusion),e)),l.code.add(n$4`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):l.code.add(n$4`float getBakedOcclusion() { return 1.0; }`),l.uniforms.add(s===a$9.Pass?[new e$c("emissionFactor",(e=>e.emissiveFactor)),new e$c("mrrFactors",(e=>e.mrrFactors))]:[new o$h("emissionFactor",(e=>e.emissiveFactor)),new o$h("mrrFactors",(e=>e.mrrFactors))]),l.code.add(n$4`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${d?"vtc.uv = vuv0;":""}
      ${u.hasMetalnessAndRoughnessTexture?u.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${u.hasEmissionTexture?u.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${u.hasOcclusionTexture?u.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `);}}else l.code.add(n$4`float getBakedOcclusion() { return 1.0; }`);else l.code.add(n$4`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l$2(e){return Math.abs(e*e*e)}function s$4(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$4.scale=Math.min(i.divisor/(t-i.offset),1),x$4.factor=l$2(e),x$4.minPixelSize=i.minPixelSize,x$4.paddingPixels=r,x$4}function c$8(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o$e(t,a){return Math.max(s$a(t*a.scale,t,a.factor),c$8(t,a))}function m$2(e,t,a,i){return o$e(e,s$4(t,a,i))}const x$4={scale:0,factor:0,minPixelSize:0,paddingPixels:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function u$1(t){return !!r$5(t)&&!t.visible}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g$4=a$g();function x$3(t,n,e,o,i,r,s){if(!u$1(n))if(t.boundingInfo){e$i(t.primitiveType===a$b.Triangle);const n=e.tolerance;M$1(t.boundingInfo,o,i,n,r,s);}else {const n=t.indices.get(O$1.POSITION),e=t.vertexAttributes.get(O$1.POSITION);v$5(o,i,0,n.length/3,n,e,void 0,r,s);}}const b$2=n$6();function M$1(t,n,i,r,s,c){if(t$b(t))return;const f=N$1(n,i,b$2);if(q$1(g$4,t.getBBMin()),w$2(g$4,t.getBBMax()),r$5(s)&&s.applyToAabb(g$4),O(g$4,n,f,r)){const{primitiveIndices:e,indices:o,position:f}=t,a=e?e.length:o.length/3;if(a>W){const e=t.getChildren();if(void 0!==e){for(let t=0;t<8;++t)void 0!==e[t]&&M$1(e[t],n,i,r,s,c);return}}v$5(n,i,0,a,o,f,e,s,c);}}const y$2=n$6();function v$5(t,n,e,i,r,s,c,f,a){if(c)return I$3(t,n,e,i,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,x=n[2]-h;for(let b=e,M=3*e;b<i;++b){let t=u*r[M++],n=l[t++],e=l[t++],i=l[t];t=u*r[M++];let s=l[t++],c=l[t++],v=l[t];t=u*r[M++];let I=l[t++],T=l[t++],j=l[t];r$5(f)&&([n,e,i]=f.applyToVertex(n,e,i,b),[s,c,v]=f.applyToVertex(s,c,v,b),[I,T,j]=f.applyToVertex(I,T,j,b));const N=s-n,O=c-e,V=v-i,L=I-n,S=T-e,B=j-i,E=g*B-S*x,P=x*L-B*d,U=d*S-L*g,W=N*E+O*P+V*U;if(Math.abs(W)<=Number.EPSILON)continue;const z=m-n,k=p-e,R=h-i,C=z*E+k*P+R*U;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*V-O*R,X=R*N-V*z,Y=z*O-N*k,Z=d*H+g*X+x*Y;if(W>0){if(Z<0||C+Z>W)continue}else if(Z>0||C+Z<W)continue;const _=(L*H+S*X+B*Y)/W;if(_>=0){a(_,A$1(N,O,V,L,S,B,y$2),b,!1);}}}function I$3(t,n,e,i,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,x=n[2]-h;for(let b=e;b<i;++b){const t=c[b];let n=3*t,e=u*r[n++],i=l[e++],s=l[e++],M=l[e];e=u*r[n++];let v=l[e++],I=l[e++],T=l[e];e=u*r[n];let j=l[e++],N=l[e++],O=l[e];r$5(f)&&([i,s,M]=f.applyToVertex(i,s,M,b),[v,I,T]=f.applyToVertex(v,I,T,b),[j,N,O]=f.applyToVertex(j,N,O,b));const V=v-i,L=I-s,S=T-M,B=j-i,E=N-s,P=O-M,U=g*P-E*x,W=x*B-P*d,z=d*E-B*g,k=V*U+L*W+S*z;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-i,C=p-s,H=h-M,X=R*U+C*W+H*z;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*S-L*H,Z=H*V-S*R,_=R*L-V*C,q=d*Y+g*Z+x*_;if(k>0){if(q<0||X+q>k)continue}else if(q>0||X+q<k)continue;const w=(B*Y+E*Z+P*_)/k;if(w>=0){a(w,A$1(V,L,S,B,E,P,y$2),t,!1);}}}const T$2=n$6(),j$2=n$6();function A$1(t,n,e,o,c,f,a){return o$p(T$2,t,n,e),o$p(j$2,o,c,f),_$6(a,T$2,j$2),z$1(a,a),a}function N$1(t,n,e){return o$p(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function O(t,n,e,o){return V$1(t,n,e,o,1/0)}function V$1(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-o-n[1])*e[1],l=(t[4]+o-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<i)}function L$1(t,e,i,r,s){let c=(i.screenLength||0)*t.pixelRatio;r$5(s)&&(c=m$2(c,r,e,s));const f=c*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return o$o(f*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function S$2(t,n){const e=n?S$2(n):{};for(const o in t){let n=t[o];n&&n.forEach&&(n=P$2(n)),null==n&&o in e||(e[o]=n);}return e}function B$4(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):c$f(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r));}return o}function P$2(t){const n=[];return t.forEach((t=>n.push(t))),n}const U$3={multiply:1,ignore:2,replace:3,tint:4},W=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class d$4 extends r$3{constructor(e,r){super(),this.type=e$h.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=E$2,this._parameters=S$2(e,r),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e,r=!0){B$4(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$5(this.repository)&&this.repository.materialChanged(this);}}var o$d;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(o$d||(o$d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var E$1;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=12]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=14]="HUD_MATERIAL",E[E.LABEL_MATERIAL=15]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=16]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",E[E.DRAPED_WATER=19]="DRAPED_WATER",E[E.VOXEL=20]="VOXEL",E[E.MAX_SLOTS=21]="MAX_SLOTS";}(E$1||(E$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class g$3{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=n$6(),this._mbs=R$1(),this._obb={center:n$6(),halfSize:n$c(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,e){const i=t,r=s,a=e+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(i*i+r*r+a*a);return this._tmpVertex[0]=t+i*o,this._tmpVertex[1]=s+r*o,this._tmpVertex[2]=e+a*o,this._tmpVertex}applyToAabb(t){const s=t[0],e=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),n=e*a<0?0:Math.min(Math.abs(e),Math.abs(a)),f=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),l=Math.sqrt(h*h+n*n+f*f);if(l<this._totalOffset)return t[0]-=s<0?this._totalOffset:0,t[1]-=e<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=r>0?this._totalOffset:0,t[4]+=a>0?this._totalOffset:0,t[5]+=o>0?this._totalOffset:0,t;const m=Math.max(Math.abs(s),Math.abs(r)),_=Math.max(Math.abs(e),Math.abs(a)),b=Math.max(Math.abs(i),Math.abs(o)),c=Math.sqrt(m*m+_*_+b*b),p=this._totalOffset/c,u=this._totalOffset/l;return t[0]+=s*(s>0?p:u),t[1]+=e*(e>0?p:u),t[2]+=i*(i>0?p:u),t[3]+=r*(r<0?p:u),t[4]+=a*(a<0?p:u),t[5]+=o*(o<0?p:u),t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this._totalOffset/s;return this._mbs[0]=t[0]+t[0]*e,this._mbs[1]=t[1]+t[1]*e,this._mbs[2]=t[2]+t[2]*e,this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){const s=t.center,e=this._totalOffset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this._obb.center[0]=s[0]+s[0]*e,this._obb.center[1]=s[1]+s[1]*e,this._obb.center[2]=s[2]+s[2]*e,E$6(this._obb.halfSize,t.halfSize,t.quaternion),u$9(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,e$l(this._obb.halfSize,this._obb.halfSize,t.center),S$4(I$2,t.quaternion),E$6(this._obb.halfSize,this._obb.halfSize,I$2),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb}}class x$2{constructor(t=0){this.offset=t,this.sphere=R$1(),this.tmpVertex=n$6();}applyToVertex(t,s,e){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*s+i[8]*e+i[12],a=i[1]*t+i[5]*s+i[9]*e+i[13],o=i[2]*t+i[6]*s+i[10]*e+i[14];const h=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*h,a+=a*h,o+=o*h;const n=this.objectTransform.inverse;return this.tmpVertex[0]=n[0]*r+n[4]*a+n[8]*o+n[12],this.tmpVertex[1]=n[1]*r+n[5]*a+n[9]*o+n[13],this.tmpVertex[2]=n[2]*r+n[6]*a+n[10]*o+n[14],this.tmpVertex}applyToMinMax(t,s){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*i,s[1]+=s[1]*i,s[2]+=s[2]*i;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this.offset/s;return this.sphere[0]=t[0]+t[0]*e,this.sphere[1]=t[1]+t[1]*e,this.sphere[2]=t[2]+t[2]*e,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const S$1=new x$2;function y$1(s){return r$5(s)?(S$1.offset=s,S$1):null}new g$3;const I$2=e$m();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$7(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s;}}function l$1(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}}function d$3(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}}function p$1(t,e,f,o,r,s=1){if(!f)return void l$1(t,e,o,r,s);const n=o.typedBuffer,i=o.typedBufferStride,c=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],B=f[6],g=f[8],h=f[9],S=f[10],b=f[12],m=f[13],z=f[14];if(r*=i,1===s)for(let l=0;l<c;++l){const f=3*t[l],o=e[f],s=e[f+1],c=e[f+2];n[r]=d*o+p*s+g*c+b,n[r+1]=u*o+y*s+h*c+m,n[r+2]=a*o+B*s+S*c+z,r+=i;}else for(let l=0;l<c;++l){const f=3*t[l],o=e[f],c=e[f+1],O=e[f+2],k=d*o+p*c+g*O+b,F=u*o+y*c+h*O+m,M=a*o+B*c+S*O+z;for(let t=0;t<s;++t)n[r]=k,n[r+1]=F,n[r+2]=M,r+=i;}}function y(e,f,o,r,s,n=1){if(!o)return void l$1(e,f,r,s,n);const i=o,c=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],B=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!G$4(i),O=1e-6,k=1-O;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let l=a*r+B*n+S*i,u=p*r+g*n+b*i,F=y*r+h*n+m*i;if(z){const t=l*l+u*u+F*F;if(t<k&&t>O){const e=1/Math.sqrt(t);l*=e,u*=e,F*=e;}}c[s+0]=l,c[s+1]=u,c[s+2]=F,s+=d;}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],l=f[o+2];let u=a*r+B*i+S*l,F=p*r+g*i+b*l,M=y*r+h*i+m*l;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e;}}for(let t=0;t<n;++t)c[s+0]=u,c[s+1]=F,c[s+2]=M,s+=d;}}function B$3(e,f,o,r,s,n=1){if(!o)return void d$3(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],B=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!G$4(i),O=1e-6,k=1-O;if(s*=l,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let u=a*r+B*n+S*i,F=p*r+g*n+b*i,M=y*r+h*n+m*i;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e;}}c[s+0]=u,c[s+1]=F,c[s+2]=M,c[s+3]=d,s+=l;}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],u=f[o+3];let F=a*r+B*i+S*d,M=p*r+g*i+b*d,N=y*r+h*i+m*d;if(z){const t=F*F+M*M+N*N;if(t<k&&t>O){const e=1/Math.sqrt(t);F*=e,M*=e,N*=e;}}for(let t=0;t<n;++t)c[s+0]=F,c[s+1]=M,c[s+2]=N,c[s+3]=u,s+=l;}}function g$2(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}function h$2(t,i,l,d,u,a){for(const h of i.fieldNames){const i=t.vertexAttributes.get(h),S=t.indices.get(h);if(i&&S)switch(h){case O$1.POSITION:{e$i(3===i.size);const t=u.getField(h,i$g);t&&p$1(S,i.data,l,t,a);break}case O$1.NORMAL:{e$i(3===i.size);const t=u.getField(h,i$g);t&&y(S,i.data,d,t,a);break}case O$1.UV0:{e$i(2===i.size);const t=u.getField(h,u$a);t&&c$7(S,i.data,t,a);break}case O$1.COLOR:{e$i(3===i.size||4===i.size);const t=u.getField(h,x$5);t&&g$2(S,i.data,i.size,t,a);break}case O$1.SYMBOLCOLOR:{e$i(3===i.size||4===i.size);const t=u.getField(h,x$5);t&&g$2(S,i.data,i.size,t,a);break}case O$1.TANGENT:{e$i(4===i.size);const t=u.getField(h,c$g);t&&B$3(S,i.data,d,t,a);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$c(o){o.attributes.add(O$1.POSITION,"vec3"),o.vertex.code.add(n$4`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$6({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(n$4`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):c.add(n$4`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function i$7(e){return !!has("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$b extends i$e{constructor(r,o){super(r,"mat3",a$9.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$b extends i$e{constructor(r,e){super(r,"mat3",a$9.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$a extends i$e{constructor(r,e){super(r,"mat4",a$9.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function F$1(r,o){r.include(o$c);const e=r.vertex;e.include(c$6,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new e$c("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$c("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$b("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$a("transformProjFromView",(r=>r.transformProjFromView)),new o$b("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$h("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$h("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(n$4`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(n$4`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?n$4`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:n$4`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$c("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(n$4`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(n$4`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}class c$5 extends t$9{constructor(){super(...arguments),this.transformWorldFromViewTH=n$6(),this.transformWorldFromViewTL=n$6(),this.transformViewFromCameraRelativeRS=e$n(),this.transformProjFromView=e$o();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n$3(r,o){if(o.normalType===i$9.Attribute||o.normalType===i$9.CompressedAttribute){r.include(o$j,o),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3");r.vertex.uniforms.add([new o$b("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$b("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),r.vertex.code.add(n$4`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);}else o.normalType===i$9.Ground?(r.include(F$1,o),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(n$4`
    void forwardNormal() {
      vNormalWorld = ${o.spherical?n$4`normalize(vPositionWorldCameraRelative);`:n$4`vec3(0.0, 0.0, 1.0);`}
    }
    `)):r.vertex.code.add(n$4`void forwardNormal() {}`);}class f$3 extends c$5{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$n();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o$a=.1,t$5=.001;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$4{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$9{constructor(i,t,e){this.release=e,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities);}destroy(){this._program=s$b(this._program),this._pipeline=this._configuration=null;}reload(t){s$b(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities);}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return E$5.TRIANGLES}getPipelineState(i,t){return this._pipeline}initializeConfiguration(i,t){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$9{constructor(t,e,o){this._context=t,this._locations=o,this._textures=new Map,this._freeTextureUnits=new n$5({deallocator:null}),this._glProgram=t.programCache.acquire(e.generate("vertex"),e.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=e.generateBind(a$9.Pass,this),this.bindDraw=e.generateBind(a$9.Draw,this),this._fragmentUniforms=a$h()?e.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(e,r){if(t$b(r)||null==r.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),r$5(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
({func:I$4.LESS});({func:I$4.ALWAYS});const e$8={mask:255},f$2={function:{func:I$4.ALWAYS,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$3.KEEP,zFail:O$3.KEEP,zPass:O$3.ZERO}},o$8={function:{func:I$4.ALWAYS,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$3.KEEP,zFail:O$3.KEEP,zPass:O$3.REPLACE}};({function:{func:I$4.EQUAL,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$3.KEEP,zFail:O$3.KEEP,zPass:O$3.KEEP}});({function:{func:I$4.NOTEQUAL,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$3.KEEP,zFail:O$3.KEEP,zPass:O$3.KEEP}});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i$6(i,t){switch(t.output){case h$4.Color:if(t.receiveShadows)return i.varyings.add("linearDepth","float"),void i.vertex.code.add(n$4`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case h$4.Depth:case h$4.Shadow:case h$4.ShadowHighlight:case h$4.ShadowExludeHighlight:return i.include(F$1,t),i.varyings.add("linearDepth","float"),i.vertex.uniforms.add(new e$f("nearFar",((e,r)=>r.camera.nearFar))),void i.vertex.code.add(n$4`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}i.vertex.code.add(n$4`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$7(e){e.vertex.code.add(n$4`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function u(s,i){H$1(s,i,[new o$h("slicePlaneOrigin",((e,s)=>v$4(i,e,s))),new o$h("slicePlaneBasis1",((s,a)=>B$2(i,s,a,e$p(a.slicePlane)?.basis1))),new o$h("slicePlaneBasis2",((s,a)=>B$2(i,s,a,e$p(a.slicePlane)?.basis2)))]);}function H$1(e,s,i){if(!s.hasSlicePlane){const i=n$4`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const a=n$4`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=n$4`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.hasSliceHighlight?n$4`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:n$4`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c);}function g$1(e,s,i){return e.instancedDoublePrecision?o$p(S,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function I$1(e,s){return r$5(e)?e$l(L,s.origin,e):s.origin}function b$1(e,s,o){return e.hasSliceTranslatedView?r$5(s)?c$h(T$1,o.camera.viewMatrix,s):o.camera.viewMatrix:null}function v$4(e,a,o){if(t$b(o.slicePlane))return f$b;const c=g$1(e,a,o),r=I$1(c,o.slicePlane),t=b$1(e,c,o);return r$5(t)?O$4(L,r,t):r}function B$2(e,a,o,c){if(t$b(c)||t$b(o.slicePlane))return f$b;const f=g$1(e,a,o),d=I$1(f,o.slicePlane),_=b$1(e,f,o);return r$5(_)?(u$9(G$1,c,d),O$4(L,d,_),O$4(G$1,G$1,_),e$l(G$1,G$1,L)):c}const S=n$6(),L=n$6(),G$1=n$6(),T$1=e$o();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r$2(r,o){if(o.hasModelTransformation)return r.vertex.code.add(n$4`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`),void r.vertex.code.add(n$4`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.vertex.code.add(n$4`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`),r.vertex.code.add(n$4`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$3{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e$6(t={}){return (e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),null!=t.constValue)Object.defineProperty(e,r,{get:()=>t.constValue});else {const s=e._parameterNames.length-1,a=t.count||2,i=Math.ceil(Math.log2(a)),o=e._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);e._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(e,r,{get(){return this[s]},set(t){if(this[s]!==t&&(this[s]=t,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+t<<n&m,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+r+" must be boolean or number, got "+typeof t}});}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class v$3 extends t$3{constructor(){super(...arguments),this.instancedDoublePrecision=!1;}}function p(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add(O$1.MODELORIGINHI,"vec3"),e.attributes.add(O$1.MODELORIGINLO,"vec3"),e.attributes.add(O$1.MODEL,"mat3"),e.attributes.add(O$1.MODELNORMAL,"mat3"));const c=e.vertex;i.instancedDoublePrecision&&(c.include(c$6,i),c.uniforms.add(new o$h("viewOriginHi",((e,i)=>o$q(o$p(x$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),x$1)))),c.uniforms.add(new o$h("viewOriginLo",((e,i)=>r$9(o$p(x$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),x$1))))),c.code.add(n$4`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),c.code.add(n$4`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?n$4`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),c.code.add(n$4`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),i.output===h$4.Normal&&(c.uniforms.add(new e$a("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix))),c.code.add(n$4`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),i.hasVertexTangents&&c.code.add(n$4`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `);}e$q([e$6()],v$3.prototype,"instancedDoublePrecision",void 0);const x$1=n$6();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var r$1;!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint";}(r$1||(r$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$5(e){e.vertex.code.add(n$4`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n$4.int(r$1.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n$4.int(r$1.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n$4.int(r$1.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n$4.int(r$1.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$4 extends i$e{constructor(r,e){super(r,"int",a$9.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i$5(i,t){t.hasSymbolColors?(i.include(e$5),i.attributes.add(O$1.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(n$4`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$4("colorMixMode",(o=>U$3[o.colorMixMode]))),i.vertex.code.add(n$4`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$3(e,d){d.hasVertexColors?(e.attributes.add(O$1.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(n$4`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(n$4`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(n$4`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$4(e){e.vertex.code.add(n$4`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(n$4`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n$4`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n$4`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n$4`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n$4`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n$4`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function i$4(e){e.uniforms.add(new e$g("screenSizePerspectiveAlignment",(e=>o$7(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function o$7(a){return r$a(n$2,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const n$2=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$6 extends i$e{constructor(r,o){super(r,"mat4",a$9.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$3(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",f$b):r.uniforms.add(new o$h("cameraPosition",((r,e)=>o$p(f$1,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function v$2(e,i){if(e.vertex.uniforms.add(new e$a("proj",((r,e)=>e.camera.projectionMatrix))),!i.instancedDoublePrecision)return void e.vertex.uniforms.add([new o$6("view",((e,a)=>c$h(d$2,a.camera.viewMatrix,e.origin))),new o$h("localOrigin",(r=>r.origin))]);const s=r=>o$p(f$1,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);e.vertex.uniforms.add([new e$a("view",((e,a)=>c$h(d$2,a.camera.viewMatrix,s(a)))),new e$c("localOrigin",((r,e)=>s(e)))]);}const d$2=e$r(),f$1=n$6();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$5(e,r){const c=e.vertex;r.hasVerticalOffset?(f(c),r.hasScreenSizePerspective&&(e.include(c$4),i$4(c),c$3(e.vertex,r)),c.code.add(n$4`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?n$4`vec3 worldNormal = normalize(worldPos + localOrigin);`:n$4`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?n$4`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n$4`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(n$4`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const i$3=n$d();function f(r){r.uniforms.add(new e$g("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return r$a(i$3,c*a,s,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$4(a){a.code.add(n$4`const float MAX_RGBA_FLOAT =
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
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$5(o,l){switch(o.fragment.include(a$4),l.output){case h$4.Shadow:case h$4.ShadowHighlight:case h$4.ShadowExludeHighlight:o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(n$4`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case h$4.Depth:o.fragment.code.add(n$4`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const d$1=r$7(1,1,0,1),g=r$7(1,0,1,1);function a$3(e){e.fragment.uniforms.add(new m$7("depthTex",((e,o)=>o.highlightDepthTexture))),e.fragment.uniforms.add(new e$f("highlightViewportPixelSz",((e,o)=>o.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",d$1).add("unoccludedHighlightFlag","vec4",g),e.fragment.code.add(n$4`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$2 extends i$e{constructor(r,e,o){super(r,"vec4",a$9.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$4 extends i$e{constructor(r,o,e){super(r,"float",a$9.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o$3=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$3(s,n){n.hasVvInstancing&&(n.vvSize||n.vvColor)&&s.attributes.add(O$1.INSTANCEFEATUREATTRIBUTE,"vec4");const l=s.vertex;n.vvSize?(l.uniforms.add(new e$c("vvSizeMinSize",(e=>e.vvSizeMinSize))),l.uniforms.add(new e$c("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),l.uniforms.add(new e$c("vvSizeOffset",(e=>e.vvSizeOffset))),l.uniforms.add(new e$c("vvSizeFactor",(e=>e.vvSizeFactor))),l.uniforms.add(new e$b("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),l.uniforms.add(new e$c("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),l.code.add(n$4`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),l.code.add(n$4`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?n$4`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):l.code.add(n$4`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(l.constants.add("vvColorNumber","int",o$3),n.hasVvInstancing&&l.uniforms.add([new o$4("vvColorValues",(e=>e.vvColorValues),o$3),new e$2("vvColorColors",(e=>e.vvColorColors),o$3)]),l.code.add(n$4`
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

      ${n.hasVvInstancing?n$4`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):l.code.add(n$4`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function d(d){d.fragment.code.add(n$4`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n$4.float(t$5)}) { discard; } }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$2 extends i$e{constructor(r,o){super(r,"float",a$9.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$2(a,e){l(a,e,new o$2("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function l(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==C$4.Mask&&r.alphaDiscardMode!==C$4.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case C$4.Blend:return e.include(d);case C$4.Opaque:t.code.add(n$4`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case C$4.Mask:t.code.add(n$4`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case C$4.MaskBlend:e.fragment.code.add(n$4`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function x(x,j){const w=x.vertex.code,C=x.fragment.code,T=j.hasModelTransformation;switch(T&&x.vertex.uniforms.add(new e$a("model",(e=>r$5(e.modelTransformation)?e.modelTransformation:o$r))),j.output){case h$4.Depth:case h$4.Shadow:case h$4.ShadowHighlight:case h$4.ShadowExludeHighlight:v$2(x,j),x.include(r$2,j),x.include(d$5,j),x.include(s$3,j),x.include(o$5,j),x.include(u,j),x.vertex.uniforms.add(new e$f("nearFar",((o,r)=>r.camera.nearFar))),x.varyings.add("depth","float"),j.hasColorTexture&&x.fragment.uniforms.add(new m$7("tex",(o=>o.texture))),w.add(n$4`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${T?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
          }
        `),x.include(s$2,j),C.add(n$4`
          void main(void) {
            discardBySlice(vpos);
            ${j.hasColorTexture?n$4`
            vec4 texColor = texture2D(tex, vuv0);
            discardOrAdjustAlpha(texColor);`:""}
            outputDepth(depth);
          }
        `);break;case h$4.Normal:v$2(x,j),x.include(r$2,j),x.include(o$j,j),x.include(n$3,j),x.include(d$5,j),x.include(s$3,j),j.hasColorTexture&&x.fragment.uniforms.add(new m$7("tex",(o=>o.texture))),x.varyings.add("vPositionView","vec3"),w.add(n$4`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${j.normalType===i$9.Attribute?n$4`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),x.include(u,j),x.include(s$2,j),C.add(n$4`
          void main() {
            discardBySlice(vpos);
            ${j.hasColorTexture?n$4`
            vec4 texColor = texture2D(tex, vuv0);
            discardOrAdjustAlpha(texColor);`:""}

            ${j.normalType===i$9.ScreenDerivative?n$4`
                vec3 normal = screenDerivativeNormal(vPositionView);`:n$4`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case h$4.Highlight:v$2(x,j),x.include(r$2,j),x.include(d$5,j),x.include(s$3,j),j.hasColorTexture&&x.fragment.uniforms.add(new m$7("tex",(o=>o.texture))),w.add(n$4`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),x.include(u,j),x.include(s$2,j),x.include(a$3),C.add(n$4`
          void main() {
            discardBySlice(vpos);
            ${j.hasColorTexture?n$4`
            vec4 texColor = texture2D(tex, vuv0);
            discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i$2(i,c){const u=i.fragment;if(c.hasVertexTangents?(i.attributes.add(O$1.TANGENT,"vec4"),i.varyings.add("vTangent","vec4"),c.doubleSidedMode===i$8.WindingOrder?u.code.add(n$4`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):u.code.add(n$4`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(i.extensions.add("GL_OES_standard_derivatives"),u.code.add(n$4`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),c.textureCoordinateType!==o$i.None){i.include(a$6,c);const e=c.supportsTextureAtlas?e$e.Size:e$e.None;u.uniforms.add(c.pbrTextureBindType===a$9.Pass?p$6("normalTexture",(e=>e.textureNormal),e):p$3("normalTexture",(e=>e.textureNormal),e)),u.code.add(n$4`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${c.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$2(o,a){const l=o.fragment;a.receiveAmbientOcclusion?(l.uniforms.add([new m$7("ssaoTex",((e,o)=>o.ssaoHelper.colorTexture)),new e$g("viewportPixelSz",((o,r)=>r$a(i$1,r.camera.fullViewport[0],r.camera.fullViewport[1],1/r.ssaoHelper.width,1/r.ssaoHelper.height)))]),l.code.add(n$4`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):l.code.add(n$4`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}const i$1=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m$1(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new e$c("lightingAmbientSH0",((n,t)=>o$p(a$1,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add(n$4`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add([new e$g("lightingAmbientSH_R",((i,n)=>r$a(r,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$g("lightingAmbientSH_G",((i,n)=>r$a(r,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$g("lightingAmbientSH_B",((i,n)=>r$a(r,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))]),m.code.add(n$4`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(m.uniforms.add([new e$c("lightingAmbientSH0",((n,t)=>o$p(a$1,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$g("lightingAmbientSH_R1",((i,n)=>r$a(r,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$g("lightingAmbientSH_G1",((i,n)=>r$a(r,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$g("lightingAmbientSH_B1",((i,n)=>r$a(r,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$g("lightingAmbientSH_R2",((i,n)=>r$a(r,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$g("lightingAmbientSH_G2",((i,n)=>r$a(r,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$g("lightingAmbientSH_B2",((i,n)=>r$a(r,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))]),m.code.add(n$4`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),g.pbrMode!==m$3.Normal&&g.pbrMode!==m$3.Schematic||m.code.add(n$4`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a$1=n$6(),r=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$1(o,a){const g=o.fragment;a.isGround?g.uniforms.add(new o$2("lightingFixedFactor",((i,n)=>(1-n.lighting.groundLightingFactor)*(1-n.lighting.globalFactor)))):g.constants.add("lightingFixedFactor","float",0),g.uniforms.add([new e$c("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection)),new e$c("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),g.code.add(n$4`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t$2(t){const a=t.fragment.code;a.add(n$4`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(n$4`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(n$4`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t$1(t){t.vertex.code.add(n$4`const float PI = 3.141592653589793;`),t.fragment.code.add(n$4`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n$1(n,r){const l=n.fragment.code;n.include(t$1),r.pbrMode===m$3.Water||r.pbrMode===m$3.WaterOnIntegratedMesh?(l.add(n$4`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${r.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),l.add(n$4`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),l.add(n$4`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),l.add(n$4`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),l.add(n$4`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):r.pbrMode!==m$3.Normal&&r.pbrMode!==m$3.Schematic||(n.include(t$2),l.add(n$4`struct PBRShadingInfo
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
};`),l.add(n$4`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(n$4`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),l.add(n$4`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(n$4`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(n$4`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s$1 extends i$e{constructor(o,s){super(o,"bool",a$9.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c$2=.4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m(m,g){const h=m.fragment;m.include(a$2,g),g.pbrMode!==m$3.Disabled&&m.include(n$1,g),m.include(m$1,g),h.constants.add("ambientBoostFactor","float",c$2),m.include(t$1),h.code.add(n$4`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${g.pbrMode===m$3.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h.uniforms.add(new e$c("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection))),h.code.add(n$4`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${g.spherical?n$4`normalize(vPosWorld)`:n$4`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),h.uniforms.add([new o$2("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)),new e$c("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),h.code.add(n$4`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),g.pbrMode===m$3.Disabled||g.pbrMode===m$3.WaterOnIntegratedMesh?(m.include(o$1,g),h.code.add(n$4`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):g.pbrMode!==m$3.Normal&&g.pbrMode!==m$3.Schematic||(h.code.add(n$4`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),h.code.add(n$4`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),g.useFillLights?h.uniforms.add(new s$1("hasFillLights",((i,n)=>n.enableFillLights))):h.constants.add("hasFillLights","bool",!1),h.code.add(n$4`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),h.uniforms.add([new o$2("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new o$2("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))]),h.code.add(n$4`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),h.code.add(n$4`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${g.pbrMode===m$3.Schematic?n$4`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:n$4`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a(a){a.include(a$4),a.code.add(n$4`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n,o){o.hasMultipassTerrain&&(n.fragment.include(a),n.fragment.uniforms.add(new m$7("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new e$f("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new e$f("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(n$4`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o extends i$e{constructor(r,o,s){super(r,"mat4",a$9.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))),s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$1 extends i$e{constructor(r,e,o){super(r,"mat4",a$9.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function h$1(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new e$1("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v$1(e));}function c$1(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new o("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v$1(e));}function v$1(e){const i=e.fragment;i.include(a$4),i.uniforms.add([new m$7("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new e$4("numCascades",((e,a)=>a.shadowMap.numCascades)),new e$g("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances)),new o$2("depthHalfPixelSz",((e,a)=>.5/a.shadowMap.textureSize))]),i.code.add(n$4`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
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
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){e.code.add(n$4`vec4 premultiplyAlpha(vec4 v) {
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
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(i){i.include(e),i.code.add(n$4`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n$4.int(r$1.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n$4.int(r$1.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$4.int(r$1.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n$4.int(r$1.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$4.int(r$1.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function U$2(U){const k=new o$l,W=k.vertex.code,q=k.fragment.code;return v$2(k,U),k.include(o$c),k.varyings.add("vpos","vec3"),k.include(s$3,U),k.include(p,U),k.include(a$5,U),U.output!==h$4.Color&&U.output!==h$4.Alpha||(c$3(k.vertex,U),k.include(o$j,U),k.include(r$2,U),U.normalType===i$9.Attribute&&U.offsetBackfaces&&k.include(e$7),k.include(i$2,U),k.include(n$3,U),U.instancedColor&&k.attributes.add(O$1.INSTANCECOLOR,"vec4"),k.varyings.add("localvpos","vec3"),k.include(d$5,U),k.include(i$6,U),k.include(i$5,U),k.include(e$3,U),k.vertex.uniforms.add(new e$g("externalColor",(e=>e.externalColor))),k.varyings.add("vcolorExt","vec4"),U.hasMultipassTerrain&&k.varyings.add("depth","float"),U.hasModelTransformation&&k.vertex.uniforms.add(new e$a("model",(o=>r$5(o.modelTransformation)?o.modelTransformation:o$r))),W.add(n$4`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${U.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n$4.float(t$5)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${U.normalType===i$9.Attribute?n$4`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${U.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${U.hasModelTransformation?"model,":""} vpos);
          ${U.normalType===i$9.Attribute&&U.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${U.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),U.output===h$4.Alpha&&(k.include(u,U),k.include(s$2,U),k.include(n,U),k.fragment.uniforms.add([new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity))]),U.hasColorTexture&&k.fragment.uniforms.add(new m$7("tex",(e=>e.texture))),k.fragment.include(i),q.add(n$4`
      void main() {
        discardBySlice(vpos);
        ${U.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${U.hasColorTexture?n$4`
                vec4 texColor = texture2D(tex, vuv0);
                ${U.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$4`vec4 texColor = vec4(1.0);`}
        ${U.hasVertexColors?n$4`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$4`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),U.output===h$4.Color&&(k.include(u,U),k.include(m,U),k.include(a$2,U),k.include(s$2,U),k.include(U.instancedDoublePrecision?h$1:c$1,U),k.include(n,U),c$3(k.fragment,U),k.fragment.uniforms.add([k.vertex.uniforms.get("localOrigin"),new e$c("ambient",(e=>e.ambient)),new e$c("diffuse",(e=>e.diffuse)),new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity)),new o$2("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new e$c("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),k.fragment.constants.add("ambientBoostFactor","float",c$2),U.hasColorTexture&&k.fragment.uniforms.add(new m$7("tex",(e=>e.texture))),k.include(p$2,U),k.include(n$1,U),k.fragment.include(i),k.include(e$d,U),q.add(n$4`
      void main() {
        discardBySlice(vpos);
        ${U.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${U.hasColorTexture?n$4`
                vec4 texColor = texture2D(tex, vuv0);
                ${U.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$4`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${U.normalType===i$9.ScreenDerivative?n$4`
                vec3 normal = screenDerivativeNormal(localvpos);`:n$4`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${U.pbrMode===m$3.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${U.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":U.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${U.hasVertexColors?n$4`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$4`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${U.hasNormalTexture?n$4`
                mat3 tangentSpace = ${U.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:n$4`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${U.spherical?n$4`normalize(vpos + localOrigin);`:n$4`vec3(0.0, 0.0, 1.0);`}

        ${U.snowCover?n$4`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${U.pbrMode===m$3.Normal||U.pbrMode===m$3.Schematic?n$4`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${U.snowCover?n$4`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n$4`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${U.transparencyPassType===o$s.Color?n$4`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),k.include(x,U),k}const k$2=Object.freeze(Object.defineProperty({__proto__:null,build:U$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class F extends f$3{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=r$4(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=n$e.Back,this.emissiveFactor=r$4(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=r$4(.2,.2,.2),this.diffuse=r$4(.8,.8,.8),this.externalColor=r$7(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$6(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e$n(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=e$s.Less,this.textureAlphaMode=C$4.Blend,this.textureAlphaCutoff=o$a,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=o$d.Occlude;}}class _ extends e$9{initializeConfiguration(e,t){t.spherical=e.viewingMode===l$9.Global,t.doublePrecisionRequiresObfuscation=i$7(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?o$i.Default:o$i.None;}initializeProgram(e){return this._initializeProgram(e,_.shader)}_initializeProgram(e,t){return new o$9(e.rctx,t.get().build(this.configuration),E$2)}_convertDepthTestFunction(e){return e===e$s.Lequal?I$4.LEQUAL:I$4.LESS}_makePipeline(e,t){const i=this.configuration,s=e===o$s.NONE,r=e===o$s.FrontFace;return W$1({blending:i.output!==h$4.Color&&i.output!==h$4.Alpha||!i.transparent?null:s?c$i:A$6(e),culling:E(i)&&h$8(i.cullFace),depthTest:{func:l$a(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:s||r?i.writeDepth&&a$i:null,colorWrite:_$7,stencilWrite:i.hasOccludees?e$8:null,stencilTest:i.hasOccludees?t?o$8:f$2:null,polygonOffset:s||r?null:a$j(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function E(e){return e.cullFace!==n$e.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}_.shader=new t$4(k$2,(()=>import('./DefaultMaterial.glsl-7d570f01.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s extends t$3{}e$q([e$6({constValue:!0})],s.prototype,"hasSliceHighlight",void 0),e$q([e$6({constValue:!1})],s.prototype,"hasSliceInVertexProgram",void 0),e$q([e$6({constValue:!1})],s.prototype,"instancedDoublePrecision",void 0),e$q([e$6({constValue:!1})],s.prototype,"isGround",void 0),e$q([e$6({constValue:!1})],s.prototype,"hasModelTransformation",void 0),e$q([e$6({constValue:a$9.Pass})],s.prototype,"pbrTextureBindType",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class c extends s{constructor(){super(...arguments),this.output=h$4.Color,this.alphaDiscardMode=C$4.Opaque,this.doubleSidedMode=i$8.None,this.pbrMode=m$3.Disabled,this.cullFace=n$e.None,this.transparencyPassType=o$s.NONE,this.normalType=i$9.Attribute,this.textureCoordinateType=o$i.None,this.customDepthTest=e$s.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1;}}e$q([e$6({count:h$4.COUNT})],c.prototype,"output",void 0),e$q([e$6({count:C$4.COUNT})],c.prototype,"alphaDiscardMode",void 0),e$q([e$6({count:i$8.COUNT})],c.prototype,"doubleSidedMode",void 0),e$q([e$6({count:m$3.COUNT})],c.prototype,"pbrMode",void 0),e$q([e$6({count:n$e.COUNT})],c.prototype,"cullFace",void 0),e$q([e$6({count:o$s.COUNT})],c.prototype,"transparencyPassType",void 0),e$q([e$6({count:i$9.COUNT})],c.prototype,"normalType",void 0),e$q([e$6({count:o$i.COUNT})],c.prototype,"textureCoordinateType",void 0),e$q([e$6({count:e$s.COUNT})],c.prototype,"customDepthTest",void 0),e$q([e$6()],c.prototype,"spherical",void 0),e$q([e$6()],c.prototype,"hasVertexColors",void 0),e$q([e$6()],c.prototype,"hasSymbolColors",void 0),e$q([e$6()],c.prototype,"hasVerticalOffset",void 0),e$q([e$6()],c.prototype,"hasSlicePlane",void 0),e$q([e$6()],c.prototype,"hasSliceHighlight",void 0),e$q([e$6()],c.prototype,"hasColorTexture",void 0),e$q([e$6()],c.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$q([e$6()],c.prototype,"hasEmissionTexture",void 0),e$q([e$6()],c.prototype,"hasOcclusionTexture",void 0),e$q([e$6()],c.prototype,"hasNormalTexture",void 0),e$q([e$6()],c.prototype,"hasScreenSizePerspective",void 0),e$q([e$6()],c.prototype,"hasVertexTangents",void 0),e$q([e$6()],c.prototype,"hasOccludees",void 0),e$q([e$6()],c.prototype,"hasMultipassTerrain",void 0),e$q([e$6()],c.prototype,"hasModelTransformation",void 0),e$q([e$6()],c.prototype,"offsetBackfaces",void 0),e$q([e$6()],c.prototype,"vvSize",void 0),e$q([e$6()],c.prototype,"vvColor",void 0),e$q([e$6()],c.prototype,"receiveShadows",void 0),e$q([e$6()],c.prototype,"receiveAmbientOcclusion",void 0),e$q([e$6()],c.prototype,"textureAlphaPremultiplied",void 0),e$q([e$6()],c.prototype,"instanced",void 0),e$q([e$6()],c.prototype,"instancedColor",void 0),e$q([e$6()],c.prototype,"instancedDoublePrecision",void 0),e$q([e$6()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),e$q([e$6()],c.prototype,"writeDepth",void 0),e$q([e$6()],c.prototype,"transparent",void 0),e$q([e$6()],c.prototype,"enableOffset",void 0),e$q([e$6()],c.prototype,"cullAboveGround",void 0),e$q([e$6()],c.prototype,"snowCover",void 0),e$q([e$6({constValue:!0})],c.prototype,"hasVvInstancing",void 0),e$q([e$6({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),e$q([e$6({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),e$q([e$6({constValue:!0})],c.prototype,"useFillLights",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function D$1(D){const B=new o$l,V=B.vertex.code,I=B.fragment.code;return v$2(B,D),B.include(o$c),B.varyings.add("vpos","vec3"),B.include(s$3,D),B.include(p,D),B.include(a$5,D),D.output!==h$4.Color&&D.output!==h$4.Alpha||(c$3(B.vertex,D),B.include(o$j,D),B.include(r$2,D),D.offsetBackfaces&&B.include(e$7),D.instancedColor&&B.attributes.add(O$1.INSTANCECOLOR,"vec4"),B.varyings.add("vNormalWorld","vec3"),B.varyings.add("localvpos","vec3"),D.hasMultipassTerrain&&B.varyings.add("depth","float"),B.include(d$5,D),B.include(i$6,D),B.include(i$5,D),B.include(e$3,D),B.vertex.uniforms.add(new e$g("externalColor",(e=>e.externalColor))),B.varyings.add("vcolorExt","vec4"),V.add(n$4`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${D.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n$4.float(t$5)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${D.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${D.hasMultipassTerrain?n$4`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),D.output===h$4.Alpha&&(B.include(u,D),B.include(s$2,D),B.include(n,D),B.fragment.uniforms.add([new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity))]),D.hasColorTexture&&B.fragment.uniforms.add(new m$7("tex",(e=>e.texture))),B.fragment.include(i),I.add(n$4`
      void main() {
        discardBySlice(vpos);
        ${D.hasMultipassTerrain?n$4`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${D.hasColorTexture?n$4`
                vec4 texColor = texture2D(tex, vuv0);
                ${D.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$4`vec4 texColor = vec4(1.0);`}
        ${D.hasVertexColors?n$4`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$4`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),D.output===h$4.Color&&(B.include(u,D),B.include(m,D),B.include(a$2,D),B.include(s$2,D),B.include(D.instancedDoublePrecision?h$1:c$1,D),B.include(n,D),c$3(B.fragment,D),B.fragment.uniforms.add([B.vertex.uniforms.get("localOrigin"),B.vertex.uniforms.get("view"),new e$c("ambient",(e=>e.ambient)),new e$c("diffuse",(e=>e.diffuse)),new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity)),new o$2("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new e$c("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),B.fragment.constants.add("ambientBoostFactor","float",c$2),D.hasColorTexture&&B.fragment.uniforms.add(new m$7("tex",(e=>e.texture))),B.include(p$2,D),B.include(n$1,D),B.fragment.include(i),B.extensions.add("GL_OES_standard_derivatives"),I.add(n$4`
      void main() {
        discardBySlice(vpos);
        ${D.hasMultipassTerrain?n$4`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${D.hasColorTexture?n$4`
                vec4 texColor = texture2D(tex, vuv0);
                ${D.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$4`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${D.pbrMode===m$3.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${D.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":D.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${D.hasVertexColors?n$4`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$4`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${D.snowCover?n$4`albedo = mix(albedo, vec3(1), 0.9);`:n$4``}
        ${n$4`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${D.pbrMode===m$3.Normal||D.pbrMode===m$3.Schematic?D.spherical?n$4`vec3 normalGround = normalize(vpos + localOrigin);`:n$4`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:n$4``}
        ${D.pbrMode===m$3.Normal||D.pbrMode===m$3.Schematic?n$4`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${D.snowCover?n$4`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n$4`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${D.transparencyPassType===o$s.Color?n$4`gl_FragColor = premultiplyAlpha(gl_FragColor);`:n$4``}
      }
    `)),B.include(x,D),B}const B$1=Object.freeze(Object.defineProperty({__proto__:null,build:D$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends _{initializeConfiguration(i,s){super.initializeConfiguration(i,s),s.hasMetalnessAndRoughnessTexture=!1,s.hasEmissionTexture=!1,s.hasOcclusionTexture=!1,s.hasNormalTexture=!1,s.hasModelTransformation=!1,s.normalType=i$9.Attribute,s.doubleSidedMode=i$8.WindingOrder,s.hasVertexTangents=!1;}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new t$4(B$1,(()=>import('./RealisticTree.glsl-1e7f8f9a.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class R extends d$4{constructor(e){super(e,D),this.supportsEdges=!0,this._configuration=new c,this.vertexBufferLayout=j$1(this.parameters),this.instanceBufferLayout=e.instanced?B(this.parameters):null;}isVisibleForOutput(e){return e!==h$4.Shadow&&e!==h$4.ShadowExludeHighlight&&e!==h$4.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||0===t.layerOpacity)return !1;const{instanced:r,hasVertexColors:a,hasSymbolColors:s,vvColorEnabled:i}=t,o=r$5(r)&&r.includes("color"),n="replace"===t.colorMixMode,h=t.opacity>0,c=t.externalColor&&t.externalColor[3]>0;return a&&(o||i||s)?!!n||h:a?n?c:h:o||i||s?!!n||h:n?c:h}getConfiguration(t,r){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=r$5(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=r$5(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?i$9.ScreenDerivative:i$9.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,r$5(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?n$e.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=r$5(this.parameters.modelTransformation),t!==h$4.Color&&t!==h$4.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=i$8.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?i$8.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?i$8.WindingOrder:i$8.None,this._configuration.instancedColor=r$5(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?m$3.Schematic:m$3.Normal:m$3.Disabled,this._configuration.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<S$5,this._configuration.snowCover=this.hasSnowCover(r)),this._configuration}hasSnowCover(t){return r$5(t.weather)&&t.weatherVisible&&"snowy"===t.weather.type&&"enabled"===t.weather.snowCover}intersect(c,l,m,p,d,f,g){if(r$5(this.parameters.verticalOffset)){const e=p.camera;o$p(k$1,m[12],m[13],m[14]);let c=null;switch(p.viewingMode){case l$9.Global:c=z$1(U$1,k$1);break;case l$9.Local:c=r$b(U$1,G);}let l=0;const g=e$l(q,k$1,e.eye),T=s$c(g),_=g$9(g,g,1/T);let v=null;this.parameters.screenSizePerspective&&(v=P$4(c,_)),l+=L$1(e,T,this.parameters.verticalOffset,v,this.parameters.screenSizePerspective),g$9(c,c,l),S$6(z,c,p.transform.inverseRotation),d=e$l(V,d,z),f=e$l(H,f,z);}x$3(c,l,p,d,f,y$1(p.verticalOffset),g);}requiresSlot(e,t){if(t===h$4.Color||t===h$4.Alpha||t===h$4.Depth||t===h$4.Normal||t===h$4.Shadow||t===h$4.ShadowHighlight||t===h$4.ShadowExludeHighlight||t===h$4.Highlight){return e===(this.parameters.transparent?this.parameters.writeDepth?E$1.TRANSPARENT_MATERIAL:E$1.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$1.OPAQUE_MATERIAL)||e===E$1.DRAPED_MATERIAL}return !1}createGLMaterial(e){return new C(e)}createBufferWriter(){return new N(this.vertexBufferLayout,this.instanceBufferLayout)}}class C extends h$3{constructor(e){super({...e,...e.material.parameters});}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const a=e.camera.viewInverseTransposeMatrix;return o$p(r.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?t:_,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees});}beginSlot(e){return this._output!==h$4.Color&&this._output!==h$4.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class P$1 extends F{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}}const D=new P$1;class N{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(O$1.POSITION).length}write(e,t,r,a){h$2(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,a);}}function j$1(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=T$5().vec3f(O$1.POSITION).vec3f(O$1.NORMAL);return e.hasVertexTangents&&r.vec4f(O$1.TANGENT),t&&r.vec2f(O$1.UV0),e.hasVertexColors&&r.vec4u8(O$1.COLOR),e.hasSymbolColors&&r.vec4u8(O$1.SYMBOLCOLOR),r}function B(t){let r=T$5();return r=t.instancedDoublePrecision?r.vec3f(O$1.MODELORIGINHI).vec3f(O$1.MODELORIGINLO).mat3f(O$1.MODEL).mat3f(O$1.MODELNORMAL):r.mat4f(O$1.MODEL).mat4f(O$1.MODELNORMAL),r$5(t.instanced)&&t.instanced.includes("color")&&(r=r.vec4f(O$1.INSTANCECOLOR)),r$5(t.instanced)&&t.instanced.includes("featureAttribute")&&(r=r.vec4f(O$1.INSTANCEFEATUREATTRIBUTE)),r}const V=n$6(),H=n$6(),G=r$4(0,0,1),U$1=n$6(),z=n$6(),k$1=n$6(),q=n$6();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const b=s$8.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function w(e,t){const r=await h(e,t);return {resource:r,textures:await P(r.textureDefinitions,t)}}async function h(r,n){const i=r$5(n)&&n.streamDataRequester;if(i)return v(r,i,n);const u=await b$5(L$4(r,e$p(n)));if(!0===u.ok)return u.value.data;w$3(u.error),j(u.error);}async function v(e,r,n){const a=await b$5(r.request(e,"json",n));if(!0===a.ok)return a.value;w$3(a.error),j(a.error.details.url);}function j(e){throw new s$9("",`Request for object resource failed: ${e}`)}function A(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(b.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(b.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else b.warn("Indexed geometries must specify faces"),n=!1;break}default:b.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(b.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(b.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function M(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=r$c.parse(l.version||"1.0","wosr");k.validate(c);const p=l.model.name,f=l.model.geometries,x=l.materialDefinitions,b=e.textures;let w=0;const h=new Map;for(let i=0;i<f.length;i++){const e=f[i];if(!A(e))continue;const l=T(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const v=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)v.push([e,new Uint32Array(t[e].values)]);}const j=b&&b[l.texture];if(j&&!h.has(l.texture)){const{image:e,params:t}=j,r=new L$2(e,t);o.push(r),h.set(l.texture,r);}const M=h.get(l.texture),U=M?M.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?I(j.alphaChannelUsage):void 0,i={ambient:e$t(e.diffuse),diffuse:e$t(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:U,initTextureTransparent:!0,doubleSided:!0,cullFace:n$e.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};r$5(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new R(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const k=new g$7(p,v);w+=v.position?v.position.length:0,r.push(k);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:U(r),numberOfVertices:w,lodThreshold:null}}function U(e){const t=B$5();return e.forEach((e=>{const r=e.boundingInfo;r$5(r)&&(h$9(t,r.getBBMin()),h$9(t,r.getBBMax()));})),t}async function P(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){b.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:D$3.REPEAT,t:D$3.REPEAT},preMultiplyAlpha:I(l)!==C$4.Opaque},m=r$5(t)&&t.disableTextures?Promise.resolve(null):t$d(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function I(e){switch(e){case"mask":return C$4.Mask;case"maskAndTransparency":return C$4.MaskBlend;case"none":return C$4.Opaque;default:return C$4.Blend}}function T(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const k=new r$c(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function J(s,o){const i=X(a$k(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):w(i.url,o)),t=M(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):c$j(new n$f(o.streamDataRequester),i.url,o,o.usePBR)),u=m$9(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&r$5(u)&&a.meta.uri.includes("/RealisticTrees/")&&te(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:!!a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:!!a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=Y(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=Y(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=Y(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function X(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Y(e,t,s,a){const u=e.model,n=e$n(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$5(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$5()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=r$5(e.attributes.texCoord0),f=r$5(e.attributes.normal),p=Z(a.alphaMode);if(!c.has(i)){if(l){if(r$5(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:p!==C$4.Opaque};m.set(a.textureColor,new L$2(e.data,t));}if(r$5(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new L$2(e.data,e.parameters));}if(r$5(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new L$2(e.data,e.parameters));}if(r$5(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new L$2(e.data,e.parameters));}if(r$5(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new L$2(e.data,e.parameters));}}const o=a.color[0]**(1/o$t),n=a.color[1]**(1/o$t),d=a.color[2]**(1/o$t),x=a.emissiveFactor[0]**(1/o$t),g=a.emissiveFactor[1]**(1/o$t),h=a.emissiveFactor[2]**(1/o$t),b=r$5(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new R({...t,transparent:p===C$4.Blend,customDepthTest:e$s.Lequal,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?n$e.None:n$e.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$5(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:r$5(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:r$5(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:r$5(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:r$5(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:r$5(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const x=ee(e.indices||e.attributes.position.count,e.primitiveType),S=e.attributes.position.count,A=r$d(i$g,S);t$f(A,e.attributes.position,e.transform);const N=[[O$1.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],I=[[O$1.POSITION,x]];if(r$5(e.attributes.normal)){const t=r$d(i$g,S);g$a(n,e.transform),r$e(t,e.attributes.normal,n),N.push([O$1.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.NORMAL,x]);}if(r$5(e.attributes.tangent)){const t=r$d(c$g,S);g$a(n,e.transform),r$f(t,e.attributes.tangent,n),N.push([O$1.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.TANGENT,x]);}if(r$5(e.attributes.texCoord0)){const t=r$d(u$a,S);n$g(t,e.attributes.texCoord0),N.push([O$1.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.UV0,x]);}if(r$5(e.attributes.color)){const t=r$d(x$5,S);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$g?o$u(t,e.attributes.color,255):e.attributes.color instanceof x$5?e$u(t,e.attributes.color):e.attributes.color instanceof L$5&&o$u(t,e.attributes.color,1/256);else {t$g(t,255,255,255,255);const r=new O$5(t.buffer,0,4);e.attributes.color instanceof i$g?f$c(r,e.attributes.color,255):e.attributes.color instanceof O$5?e$v(r,e.attributes.color):e.attributes.color instanceof E$7&&f$c(r,e.attributes.color,1/256);}N.push([O$1.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O$1.COLOR,x]);}const L=new g$7(N,I);d.stageResources.geometries.push(L),d.stageResources.materials.push(c.get(i)),l&&(r$5(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),r$5(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),r$5(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),r$5(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),r$5(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=S;const F=L.boundingInfo;r$5(F)&&(h$9(d.boundingBox,F.getBBMin()),h$9(d.boundingBox,F.getBBMax()));}));})),l}function Z(e){switch(e){case"BLEND":return C$4.Blend;case"MASK":return C$4.Mask;case"OPAQUE":case null:case void 0:return C$4.Opaque}}function ee(e,t){switch(t){case E$5.TRIANGLES:return n$h(e);case E$5.TRIANGLE_STRIP:return o$v(e);case E$5.TRIANGLE_FAN:return i$h(e)}}function te(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(t$b(o))return;const x=i.attributes.position,g=x.count,b=n$6(),R=n$6(),B=n$6(),M=r$d(x$5,g),T=r$d(i$g,g),w=h$a(e$o(),i.transform);for(let s=0;s<g;s++){x.getVec(s,R),o.getVec(s,b),O$4(R,R,i.transform),e$l(B,R,t.center),i$i(B,B,t.radius);const a=B[2],u=s$c(B),p=Math.min(.45+.55*u*u,1);i$i(B,B,t.radius),O$4(B,B,w),z$1(B,B),r+1!==e.model.lods.length&&e.model.lods.length>1&&A$5(B,B,b,a>-1?.2:Math.min(-4*a-3.8,1)),T.setVec(s,B),M.set(s,0,255*p),M.set(s,1,255*p),M.set(s,2,255*p),M.set(s,3,255);}i.attributes.normal=T,i.attributes.color=M;}}}

var objectResourceUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fetch: J,
  gltfToEngineResources: Y,
  parseUrl: X
});

export { D$1 as D, U$2 as U, objectResourceUtils as o };
