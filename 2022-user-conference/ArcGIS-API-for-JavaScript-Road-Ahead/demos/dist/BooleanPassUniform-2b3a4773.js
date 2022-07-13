import { ai as s$8, gP as n$7, t as t$a, r as r$4, av as r$5, cG as f$a, b8 as n$8, Z as s$9, s as s$a, hj as s$b, hv as h$8, g9 as u$a, fE as n$9, ge as h$9, gN as o$o, fP as a$c, fT as e$i, aA as o$p, hD as q, hE as w$1, dw as _$4, dv as z, ay as n$a, aj as c$f, aT as o$q, gO as e$j, aI as r$6, ff as t$d, dD as A$4, fl as p$9, fd as e$k, al as e$l, g4 as f$c, du as e$m, fB as c$g, fi as O$3, eT as u$c, hF as e$n, B as e$o, eM as r$7, cS as a$e, ak as i$c, aH as n$b, hG as V$1, d3 as X, hH as o$r, hI as e$p, as as f$d, hJ as c$i, ao as v$6, ap as a$f, a as n$d, fF as a$g, ex as a$h, f3 as r$8, eL as n$f, fD as p$a, hK as C$2, hL as G$3, e8 as r$9, eS as j$3, a$ as g$a, dx as E$6, hM as y$4, F as has } from './_virtual_index-a68dd1ed.js';
import { E as E$5, C as C$1, F as F$1, M as M$3, P as P$3, G as G$2, L as L$3, I as I$4, O as O$4, u as u$d, D as D$1, Y, V as V$2 } from './enums-fb707d37.js';
import { b as a$b, u as u$9, n as n$c } from './Texture-6d086a89.js';
import { t as t$c, j as a$d, O as O$2, m as t$e, p as c$h, a as t$f } from './requestImageUtils-3044e709.js';
import { l as l$b, u as u$b, g as g$9 } from './geometryDataUtils-566f9a30.js';
import { O as O$1 } from './VertexAttribute-f7d7a686.js';
import { e as e$h } from './mat4f64-2ebd3575.js';
import { f as f$b, c as c$e, _ as _$5, b as b$5, n as n$e } from './VertexArrayObject-8465ed50.js';
import { t as t$b } from './VertexElementDescriptor-b07b83f4.js';
import { c as c$j, x as x$3, u as u$e, i as i$d } from './BufferView-0e0bd1d6.js';
import { S as S$5 } from './quat-08f73fae.js';
import { e as e$q } from './quatf64-808fd6fd.js';
import { n as n$g, r as r$a } from './vec3f32-3c06790e.js';
import { R } from './sphere-a826bb8b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$9{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$g{constructor(i,t,e){this.release=e,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities);}destroy(){this._program=s$8(this._program),this._pipeline=this._configuration=null;}reload(t){s$8(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities);}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return E$5.TRIANGLES}getPipelineState(i,t){return this._pipeline}initializeConfiguration(i,t){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var a$a;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw";}(a$a||(a$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$n{constructor(t,e,o){this._context=t,this._locations=o,this._textures=new Map,this._freeTextureUnits=new n$7({deallocator:null}),this._glProgram=t.programCache.acquire(e.generate("vertex"),e.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=e.generateBind(a$a.Pass,this),this.bindDraw=e.generateBind(a$a.Draw,this),this._fragmentUniforms=a$b()?e.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(e,r){if(t$a(r)||null==r.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),r$4(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$8{}function n$6(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(n$6||(n$6={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$9(a){a.code.add(n$6`const float MAX_RGBA_FLOAT =
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
function a$8(a){a.include(a$9),a.code.add(n$6`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i$b{constructor(i,s,t,a,n=null){this.name=i,this.type=s,this.arraySize=n,this.bind={[a$a.Pass]:null,[a$a.Draw]:null},r$4(t)&&r$4(a)&&(this.bind[t]=a);}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$f extends i$b{constructor(r,e){super(r,"vec2",a$a.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$e extends i$b{constructor(r,e){super(r,"vec4",a$a.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$d extends i$b{constructor(r,e){super(r,"vec3",a$a.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$m extends i$b{constructor(r,o){super(r,"float",a$a.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$c;!function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize";}(e$c||(e$c={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class m$9 extends i$b{constructor(r,e){super(r,"sampler2D",a$a.Pass,((s,o,t)=>s.bindTexture(r,e(o,t))));}}function p$8(o,n,c=e$c.None){const p=[new m$9(o,n)];if(c&e$c.Size){const i=o+"Size";p.push(new e$f(i,((o,t)=>{const i=n(o,t);return r$4(i)?r$5(f$9,i.descriptor.width,i.descriptor.height):f$a})));}if(c&e$c.InvSize){const i=o+"InvSize";p.push(new e$f(i,((o,t)=>{const i=n(o,t);return r$4(i)?r$5(f$9,1/i.descriptor.width,1/i.descriptor.height):f$a})));}return p}const f$9=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$b extends i$b{constructor(r,e){super(r,"mat4",a$a.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s$7=s$9.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class i$a{constructor(){this.includedModules=new Map;}include(e,r){if(this.includedModules.has(e)){const t=this.includedModules.get(e);if(t!==r){s$7.error("Trying to include shader module multiple times with different sets of options.");const r=new Set;for(const n of Object.keys(t))t[n]!==e[n]&&r.add(n);for(const n of Object.keys(e))t[n]!==e[n]&&r.add(n);r.forEach((r=>console.error(`  ${r}: current ${t[r]} new ${e[r]}`)));}}else this.includedModules.set(e,r),e(this.builder,r);}}class o$l extends i$a{constructor(){super(...arguments),this.vertex=new u$8,this.fragment=new u$8,this.attributes=new m$8,this.varyings=new h$7,this.extensions=new d$a,this.constants=new l$a;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),t=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?f$8:_$3,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${r.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${t.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}generateBind(e,r){const n=new Map;this.vertex.uniforms.entries.forEach((r=>{const s=r.bind[e];r$4(s)&&n.set(r.name,s);})),this.fragment.uniforms.entries.forEach((r=>{const s=r.bind[e];r$4(s)&&n.set(r.name,s);}));const s=Array.from(n.values()),i=s.length;return (e,t,n)=>{for(let o=0;o<i;++o)s[o](r,e,t,n);}}}class a$7{constructor(){this._entries=new Map;}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r);}get(e){return this._entries.get(e)}_add(r){if(t$a(r))s$7.error(`Trying to add null Uniform from ${(new Error).stack}.`);else {if(this._entries.has(r.name)&&!this._entries.get(r.name).equals(r))throw new s$a(`Duplicate uniform name ${r.name} for different uniform type`);this._entries.set(r.name,r);}}generateSource(){return Array.from(this._entries.values()).map((e=>r$4(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class c$d{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class u$8 extends i$a{constructor(){super(...arguments),this.uniforms=new a$7,this.code=new c$d,this.constants=new l$a;}get builder(){return this}}class m$8{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class h$7{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class d$a{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const r="vertex"===e?d$a.ALLOWLIST_VERTEX:d$a.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}}d$a.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d$a.ALLOWLIST_VERTEX=[];class l$a{constructor(){this._entries=new Set;}add(e,r,t){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=l$a._numberToFloatStr(t);break;case"int":n=l$a._numberToIntStr(t);break;case"bool":n=t.toString();break;case"vec2":n=`vec2(${l$a._numberToFloatStr(t[0])},                            ${l$a._numberToFloatStr(t[1])})`;break;case"vec3":n=`vec3(${l$a._numberToFloatStr(t[0])},                            ${l$a._numberToFloatStr(t[1])},                            ${l$a._numberToFloatStr(t[2])})`;break;case"vec4":n=`vec4(${l$a._numberToFloatStr(t[0])},                            ${l$a._numberToFloatStr(t[1])},                            ${l$a._numberToFloatStr(t[2])},                            ${l$a._numberToFloatStr(t[3])})`;break;case"ivec2":n=`ivec2(${l$a._numberToIntStr(t[0])},                             ${l$a._numberToIntStr(t[1])})`;break;case"ivec3":n=`ivec3(${l$a._numberToIntStr(t[0])},                             ${l$a._numberToIntStr(t[1])},                             ${l$a._numberToIntStr(t[2])})`;break;case"ivec4":n=`ivec4(${l$a._numberToIntStr(t[0])},                             ${l$a._numberToIntStr(t[1])},                             ${l$a._numberToIntStr(t[2])},                             ${l$a._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(t,(e=>l$a._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${r} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _$3="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",f$8="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const E$4=new Map([[O$1.POSITION,0],[O$1.NORMAL,1],[O$1.UV0,2],[O$1.COLOR,3],[O$1.SIZE,4],[O$1.TANGENT,4],[O$1.AUXPOS1,5],[O$1.SYMBOLCOLOR,5],[O$1.AUXPOS2,6],[O$1.FEATUREATTRIBUTE,6],[O$1.INSTANCEFEATUREATTRIBUTE,6],[O$1.INSTANCECOLOR,7],[O$1.MODEL,8],[O$1.MODELNORMAL,12],[O$1.MODELORIGINHI,11],[O$1.MODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
[new t$b(O$1.POSITION,3,C$1.FLOAT,0,12)];[new t$b(O$1.POSITION,3,C$1.FLOAT,0,20),new t$b(O$1.UV0,2,C$1.FLOAT,12,20)];[new t$b(O$1.POSITION,3,C$1.FLOAT,0,32),new t$b(O$1.NORMAL,3,C$1.FLOAT,12,32),new t$b(O$1.UV0,2,C$1.FLOAT,24,32)];[new t$b(O$1.POSITION,3,C$1.FLOAT,0,16),new t$b(O$1.COLOR,4,C$1.UNSIGNED_BYTE,12,16)];const t$7=[new t$b(O$1.POSITION,2,C$1.FLOAT,0,8)],A$3=[new t$b(O$1.POSITION,2,C$1.FLOAT,0,16),new t$b(O$1.UV0,2,C$1.FLOAT,8,16)];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function u$7(a,i=t$7,m=E$4,l=-1,T=1){let u=null;if(i===A$3)u=new Float32Array([l,l,0,0,T,l,1,0,l,T,0,1,T,T,1,1]);else u=new Float32Array([l,l,T,l,l,T,T,T]);return new f$b(a,m,{geometry:i},{geometry:c$e.createVertex(a,F$1.STATIC_DRAW,u)})}function p$7(e){return new u$9(e,{target:M$3.TEXTURE_2D,pixelFormat:P$3.RGBA,dataType:G$2.UNSIGNED_BYTE,samplingMode:L$3.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var E$3;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=12]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=14]="HUD_MATERIAL",E[E.LABEL_MATERIAL=15]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=16]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",E[E.DRAPED_WATER=19]="DRAPED_WATER",E[E.VOXEL=20]="VOXEL",E[E.MAX_SLOTS=21]="MAX_SLOTS";}(E$3||(E$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l$9(e){return Math.abs(e*e*e)}function s$6(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$2.scale=Math.min(i.divisor/(t-i.offset),1),x$2.factor=l$9(e),x$2.minPixelSize=i.minPixelSize,x$2.paddingPixels=r,x$2}function c$c(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o$k(t,a){return Math.max(s$b(t*a.scale,t,a.factor),c$c(t,a))}function u$6(e,t,a){const i=s$6(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,o$k(1,i)}function d$9(e,t,a,i){i.scale=u$6(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride;}function f$7(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,c$c(e[1],t)/Math.max(1e-5,e[1])),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m$7(e,t,a,i){return o$k(e,s$6(t,a,i))}const x$2={scale:0,factor:0,minPixelSize:0,paddingPixels:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$b(r,n){return t$a(r)&&(r=[]),r.push(n),r}function f$6(r,n){if(t$a(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function u$5(t){return !!r$4(t)&&!t.visible}function l$8(t,i,m){const c=t.origin.vec3;h$8(j$2,-c[0],-c[1],-c[2]),r$4(t.transformation)?u$a(i,j$2,t.transformation):n$9(i,j$2),m&&(h$9(m,i),o$o(m,m));}function p$6(t,r,n,o,s){g$8[0]=t.get(r,0),g$8[1]=t.get(r,1),g$8[2]=t.get(r,2),t$c(g$8,b$4,3),n.set(s,0,b$4[0]),o.set(s,0,b$4[1]),n.set(s,1,b$4[2]),o.set(s,1,b$4[3]),n.set(s,2,b$4[4]),o.set(s,2,b$4[5]);}const g$8=new Float64Array(3),b$4=new Float32Array(6),j$2=e$h();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const g$7=a$c();function x$1(t,n,e,o,i,r,s){if(!u$5(n))if(t.boundingInfo){e$i(t.primitiveType===a$d.Triangle);const n=e.tolerance;M$2(t.boundingInfo,o,i,n,r,s);}else {const n=t.indices.get(O$1.POSITION),e=t.vertexAttributes.get(O$1.POSITION);v$5(o,i,0,n.length/3,n,e,void 0,r,s);}}const b$3=n$a();function M$2(t,n,i,r,s,c){if(t$a(t))return;const f=N(n,i,b$3);if(q(g$7,t.getBBMin()),w$1(g$7,t.getBBMax()),r$4(s)&&s.applyToAabb(g$7),O(g$7,n,f,r)){const{primitiveIndices:e,indices:o,position:f}=t,a=e?e.length:o.length/3;if(a>W$1){const e=t.getChildren();if(void 0!==e){for(let t=0;t<8;++t)void 0!==e[t]&&M$2(e[t],n,i,r,s,c);return}}v$5(n,i,0,a,o,f,e,s,c);}}const y$3=n$a();function v$5(t,n,e,i,r,s,c,f,a){if(c)return I$3(t,n,e,i,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,x=n[2]-h;for(let b=e,M=3*e;b<i;++b){let t=u*r[M++],n=l[t++],e=l[t++],i=l[t];t=u*r[M++];let s=l[t++],c=l[t++],v=l[t];t=u*r[M++];let I=l[t++],T=l[t++],j=l[t];r$4(f)&&([n,e,i]=f.applyToVertex(n,e,i,b),[s,c,v]=f.applyToVertex(s,c,v,b),[I,T,j]=f.applyToVertex(I,T,j,b));const N=s-n,O=c-e,V=v-i,L=I-n,S=T-e,B=j-i,E=g*B-S*x,P=x*L-B*d,U=d*S-L*g,W=N*E+O*P+V*U;if(Math.abs(W)<=Number.EPSILON)continue;const z=m-n,k=p-e,R=h-i,C=z*E+k*P+R*U;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*V-O*R,X=R*N-V*z,Y=z*O-N*k,Z=d*H+g*X+x*Y;if(W>0){if(Z<0||C+Z>W)continue}else if(Z>0||C+Z<W)continue;const _=(L*H+S*X+B*Y)/W;if(_>=0){a(_,A$2(N,O,V,L,S,B,y$3),b,!1);}}}function I$3(t,n,e,i,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,x=n[2]-h;for(let b=e;b<i;++b){const t=c[b];let n=3*t,e=u*r[n++],i=l[e++],s=l[e++],M=l[e];e=u*r[n++];let v=l[e++],I=l[e++],T=l[e];e=u*r[n];let j=l[e++],N=l[e++],O=l[e];r$4(f)&&([i,s,M]=f.applyToVertex(i,s,M,b),[v,I,T]=f.applyToVertex(v,I,T,b),[j,N,O]=f.applyToVertex(j,N,O,b));const V=v-i,L=I-s,S=T-M,B=j-i,E=N-s,P=O-M,U=g*P-E*x,W=x*B-P*d,z=d*E-B*g,k=V*U+L*W+S*z;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-i,C=p-s,H=h-M,X=R*U+C*W+H*z;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*S-L*H,Z=H*V-S*R,_=R*L-V*C,q=d*Y+g*Z+x*_;if(k>0){if(q<0||X+q>k)continue}else if(q>0||X+q<k)continue;const w=(B*Y+E*Z+P*_)/k;if(w>=0){a(w,A$2(V,L,S,B,E,P,y$3),t,!1);}}}const T$3=n$a(),j$1=n$a();function A$2(t,n,e,o,c,f,a){return o$p(T$3,t,n,e),o$p(j$1,o,c,f),_$4(a,T$3,j$1),z(a,a),a}function N(t,n,e){return o$p(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function O(t,n,e,o){return V(t,n,e,o,1/0)}function V(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-o-n[1])*e[1],l=(t[4]+o-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<i)}function L$2(t,e,i,r,s){let c=(i.screenLength||0)*t.pixelRatio;r$4(s)&&(c=m$7(c,r,e,s));const f=c*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return o$q(f*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function S$4(t,n){const e=n?S$4(n):{};for(const o in t){let n=t[o];n&&n.forEach&&(n=P$2(n)),null==n&&o in e||(e[o]=n);}return e}function B$2(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):c$f(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r));}return o}function E$2(t,e,o,i,r,s){if(!e.options.selectionMode)return;const c=t.vertexAttributes.get(O$1.POSITION).data,f=t.vertexAttributes.get(O$1.SIZE),a=f&&f.data[0],l=i[0],u=i[1],m=((a+r)/2+4)*t.screenToWorldRatio;let p=Number.MAX_VALUE,d=0;for(let h=0;h<c.length-5;h+=3){const t=c[h],e=c[h+1],o=l-t,i=u-e,r=c[h+3]-t,s=c[h+4]-e,f=o$q((r*o+s*i)/(r*r+s*s),0,1),a=r*f-o,m=s*f-i,g=a*a+m*m;g<p&&(p=g,d=h/3);}p<m*m&&s(o.dist,o.normal,d,!1);}function P$2(t){const n=[];return t.forEach((t=>n.push(t))),n}const U={multiply:1,ignore:2,replace:3,tint:4},W$1=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$6{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e$a(t={}){return (e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),null!=t.constValue)Object.defineProperty(e,r,{get:()=>t.constValue});else {const s=e._parameterNames.length-1,a=t.count||2,i=Math.ceil(Math.log2(a)),o=e._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);e._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(e,r,{get(){return this[s]},set(t){if(this[s]!==t&&(this[s]=t,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+t<<n&m,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+r+" must be boolean or number, got "+typeof t}});}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$j(o,t=!0){o.attributes.add(O$1.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(n$6`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?n$6`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r$3{constructor(){this.id=e$j();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$9;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT";}(e$9||(e$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class a$6{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=n$a(),e$i(i.length>=1),e$i(a.length%this._numIndexPerPrimitive==0),e$i(a.length>=i.length*this._numIndexPerPrimitive),e$i(3===c.size||4===c.size);const{data:o,size:d}=c,M=i.length;let l=d*a[this._numIndexPerPrimitive*i[0]];b$2.clear(),b$2.push(l),this.bbMin=r$6(o[l],o[l+1],o[l+2]),this.bbMax=t$d(this.bbMin);for(let t=0;t<M;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=d*a[s+i],b$2.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}A$4(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$2.length;++t){l=b$2.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$2.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(p$9(this.bbMin,this.bbMax)>1){const i=A$4(n$a(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],d=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<d&&(d=n);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),d<i[2]&&(s|=4),n[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$6(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$2.prune();}}const b$2=new n$7({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class g$6 extends r$3{constructor(t,i=[],n=a$d.Triangle,o=-1){super(),this._primitiveType=n,this.edgeIndicesLength=o,this.type=e$9.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,s]of t)s&&this._vertexAttributes.set(e,{...s});if(null==i||0===i.length){const t=d$8(this._vertexAttributes),e=l$b(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[e,s]of i)s&&(this._indices.set(e,l$7(s)),e===O$1.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength));}cloneShallow(){const t=new g$6([],void 0,this._primitiveType,void 0),{_vertexAttributes:e,_indices:i}=t;return this._vertexAttributes.forEach(((t,i)=>{e.set(i,t);})),this._indices.forEach(((t,e)=>{i.set(e,t);})),t.screenToWorldRatio=this.screenToWorldRatio,t._boundingInfo=this._boundingInfo,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$a(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return this.primitiveType===a$d.Triangle?this._computeAttachmentOriginTriangles(t):this._computeAttachmentOriginPoints(t)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(O$1.POSITION),i=this.vertexAttributes.get(O$1.POSITION);return u$b(i,e,t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(O$1.POSITION),i=this.vertexAttributes.get(O$1.POSITION);return g$9(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get(O$1.POSITION);if(0===t.length)return null;const n=this.primitiveType===a$d.Triangle?3:1;e$i(t.length%n==0,"Indexing error: "+t.length+" not divisible by "+n);const s=l$b(t.length/n),o=this.vertexAttributes.get(O$1.POSITION);return new a$6(s,n,t,o)}}function d$8(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function l$7(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class d$7 extends r$3{constructor(e,r){super(),this.type=e$9.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=E$4,this._parameters=S$4(e,r),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e,r=!0){B$2(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$4(this.repository)&&this.repository.materialChanged(this);}}var o$i;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(o$i||(o$i={}));class h$6 extends t$8{constructor(){super(...arguments),this.renderOccluded=o$i.Occlude;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var h$5;!function(h){h[h.Color=0]="Color",h[h.Depth=1]="Depth",h[h.Normal=2]="Normal",h[h.Shadow=3]="Shadow",h[h.ShadowHighlight=4]="ShadowHighlight",h[h.ShadowExludeHighlight=5]="ShadowExludeHighlight",h[h.Highlight=6]="Highlight",h[h.Alpha=7]="Alpha",h[h.COUNT=8]="COUNT";}(h$5||(h$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$5{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRepository.release(this._technique);}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,t),this._technique),this._technique}ensureResources(t){return O$2.LOADED}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class v$4 extends h$6{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=r$6(1,1,1),this.vvSizeMaxSize=r$6(100,100,100),this.vvSizeOffset=r$6(0,0,0),this.vvSizeFactor=r$6(1,1,1),this.vvSizeValue=r$6(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e$k();}}const o$h=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$g extends i$b{constructor(r,o){super(r,"vec3",a$a.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function u$4(s,i){H(s,i,[new o$g("slicePlaneOrigin",((e,s)=>v$3(i,e,s))),new o$g("slicePlaneBasis1",((s,a)=>B$1(i,s,a,e$l(a.slicePlane)?.basis1))),new o$g("slicePlaneBasis2",((s,a)=>B$1(i,s,a,e$l(a.slicePlane)?.basis2)))]);}function H(e,s,i){if(!s.hasSlicePlane){const i=n$6`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const a=n$6`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=n$6`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,c=s.hasSliceHighlight?n$6`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:n$6`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c);}function g$5(e,s,i){return e.instancedDoublePrecision?o$p(S$3,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function I$2(e,s){return r$4(e)?e$m(L$1,s.origin,e):s.origin}function b$1(e,s,o){return e.hasSliceTranslatedView?r$4(s)?c$g(T$2,o.camera.viewMatrix,s):o.camera.viewMatrix:null}function v$3(e,a,o){if(t$a(o.slicePlane))return f$c;const c=g$5(e,a,o),r=I$2(c,o.slicePlane),t=b$1(e,c,o);return r$4(t)?O$3(L$1,r,t):r}function B$1(e,a,o,c){if(t$a(c)||t$a(o.slicePlane))return f$c;const f=g$5(e,a,o),d=I$2(f,o.slicePlane),_=b$1(e,f,o);return r$4(_)?(u$c(G$1,c,d),O$3(L$1,d,_),O$3(G$1,G$1,_),e$m(G$1,G$1,L$1)):c}const S$3=n$a(),L$1=n$a(),G$1=n$a(),T$2=e$h();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$8 extends i$b{constructor(r,e,o){super(r,"vec4",a$a.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$f extends i$b{constructor(r,o,e){super(r,"float",a$a.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$e(o,l){switch(o.fragment.include(a$9),l.output){case h$5.Shadow:case h$5.ShadowHighlight:case h$5.ShadowExludeHighlight:o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(n$6`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case h$5.Depth:o.fragment.code.add(n$6`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$d extends i$b{constructor(r,o){super(r,"mat4",a$a.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$a(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",f$c):r.uniforms.add(new o$g("cameraPosition",((r,e)=>o$p(f$5,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function v$2(e,i){if(e.vertex.uniforms.add(new e$b("proj",((r,e)=>e.camera.projectionMatrix))),!i.instancedDoublePrecision)return void e.vertex.uniforms.add([new o$d("view",((e,a)=>c$g(d$6,a.camera.viewMatrix,e.origin))),new o$g("localOrigin",(r=>r.origin))]);const s=r=>o$p(f$5,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);e.vertex.uniforms.add([new e$b("view",((e,a)=>c$g(d$6,a.camera.viewMatrix,s(a)))),new e$d("localOrigin",((r,e)=>s(e)))]);}const d$6=e$n(),f$5=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n$5(n,o){o.hasMultipassTerrain&&(n.fragment.include(a$8),n.fragment.uniforms.add(new m$9("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new e$f("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new e$f("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(n$6`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `));}class o$c{constructor(){this.enabled=!1,this.cullAboveGround=!1;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t$4(t){t.vertex.code.add(n$6`const float PI = 3.141592653589793;`),t.fragment.code.add(n$6`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o$b=.1,t$3=.001;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$7(e){e.code.add(n$6`vec4 premultiplyAlpha(vec4 v) {
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
class s$5 extends t$6{}e$o([e$a({constValue:!0})],s$5.prototype,"hasSliceHighlight",void 0),e$o([e$a({constValue:!1})],s$5.prototype,"hasSliceInVertexProgram",void 0),e$o([e$a({constValue:!1})],s$5.prototype,"instancedDoublePrecision",void 0),e$o([e$a({constValue:!1})],s$5.prototype,"isGround",void 0),e$o([e$a({constValue:!1})],s$5.prototype,"hasModelTransformation",void 0),e$o([e$a({constValue:a$a.Pass})],s$5.prototype,"pbrTextureBindType",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i$9={func:I$4.LESS},s$4={func:I$4.ALWAYS},e$6={mask:255},l$6={mask:0},f$4={function:{func:I$4.ALWAYS,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$4.KEEP,zFail:O$4.KEEP,zPass:O$4.ZERO}},o$a={function:{func:I$4.ALWAYS,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$4.KEEP,zFail:O$4.KEEP,zPass:O$4.REPLACE}},P$1={function:{func:I$4.EQUAL,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$4.KEEP,zFail:O$4.KEEP,zPass:O$4.KEEP}},m$6={function:{func:I$4.NOTEQUAL,ref:t$e.OutlineVisualElementMask,mask:t$e.OutlineVisualElementMask},operation:{fail:O$4.KEEP,zFail:O$4.KEEP,zPass:O$4.KEEP}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i$8 extends t$8{constructor(){super(...arguments),this.color=r$7(1,1,1,1);}}function l$5(){const e=new o$l;return e.include(o$j),e.fragment.uniforms.add([new m$9("tex",(e=>e.texture)),new e$e("uColor",(e=>e.color))]),e.fragment.code.add(n$6`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}const d$5=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:i$8,build:l$5},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$3(){if(t$a(i$7)){const t=t=>a$e(`esri/libs/basisu/${t}`);i$7=import('./basis_transcoder-03579909.js').then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$7}let i$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var _$2;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$2||(_$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g$4=null,l$4=null;async function c$9(){return t$a(l$4)&&(l$4=s$3(),g$4=await l$4),l$4}function u$3(t,n){if(t$a(g$4))return t.byteLength;const r=new g$4.BasisFile(new Uint8Array(t)),s=T$1(r)?E$1(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),s}function m$5(t,n){if(t$a(g$4))return t.byteLength;const r=new g$4.KTX2File(new Uint8Array(t)),s=_$1(r)?E$1(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),s}function E$1(e,t,n,s,i){const a=_$5(t?u$d.COMPRESSED_RGBA8_ETC2_EAC:u$d.COMPRESSED_RGB8_ETC2),g=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*g)}function T$1(e){return e.getNumImages()>=1&&!e.isUASTC()}function _$1(e){return e.getFaces()>=1&&e.isETC1S()}async function h$4(t,n,r){t$a(g$4)&&(g$4=await c$9());const s=new g$4.BasisFile(new Uint8Array(r));if(!T$1(s))return null;s.startTranscoding();const i=p$5(t,n,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),i}async function A$1(t,n,r){t$a(g$4)&&(g$4=await c$9());const s=new g$4.KTX2File(new Uint8Array(r));if(!_$1(s))return null;s.startTranscoding();const i=p$5(t,n,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),i}function p$5(e,t,o,g,l,c,u,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[_,h]=E?g?[_$2.ETC2_RGBA,u$d.COMPRESSED_RGBA8_ETC2_EAC]:[_$2.ETC1_RGB,u$d.COMPRESSED_RGB8_ETC2]:T?g?[_$2.BC3_RGBA,u$d.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$2.BC1_RGB,u$d.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$2.RGBA32,P$3.RGBA],A=t.hasMipmap?o:Math.min(1,o),p=[];for(let n=0;n<A;n++)p.push(new Uint8Array(u(n,_))),m(n,_,p[n]);const C=p.length>1,d=C?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,R={...t,samplingMode:d,hasMipmap:C,internalFormat:h,width:l,height:c};return new u$9(e,R,{type:"compressed",levels:p})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a$5=s$9.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),i$6=542327876,s$2=131072,l$3=4;function u$2(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function m$4(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c$8=u$2("DXT1"),h$3=u$2("DXT3"),p$4=u$2("DXT5"),d$4=31,g$3=0,f$3=1,C=2,w=3,D=4,_=7,T=20,A=21;function E(e,t,n){const{textureData:a,internalFormat:i,width:s,height:l}=S$2(n,t.hasMipmap);return t.samplingMode=a.levels.length>1?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l,new u$9(e,t,a)}function S$2(e,r){const o=new Int32Array(e,0,d$4);if(o[g$3]!==i$6)return a$5.error("Invalid magic number in DDS header"),null;if(!(o[T]&l$3))return a$5.error("Unsupported format, must contain a FourCC code"),null;const u=o[A];let E,S;switch(u){case c$8:E=8,S=u$d.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h$3:E=16,S=u$d.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case p$4:E=16,S=u$d.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return a$5.error("Unsupported FourCC code:",m$4(u)),null}let M=1,R=o[D],x=o[w];0==(3&R)&&0==(3&x)||(a$5.warn("Rounding up compressed texture size to nearest multiple of 4."),R=R+3&-4,x=x+3&-4);const X=R,b=x;let I,v;o[C]&s$2&&!1!==r&&(M=Math.max(1,o[_])),1===M||i$c(R)&&i$c(x)||(a$5.warn("Ignoring mipmaps of non power of two sized compressed texture."),M=1);let F=o[f$3]+4;const L=[];for(let t=0;t<M;++t)v=(R+3>>2)*(x+3>>2)*E,I=new Uint8Array(e,F,v),L.push(I),F+=v,R=Math.max(1,R>>1),x=Math.max(1,x>>1);return {textureData:{type:"compressed",levels:L},internalFormat:S,width:X,height:b}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class L extends r$3{constructor(t,e){super(),this._data=t,this.type=e$9.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$b,this._passParameters=new i$8,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:D$1.REPEAT,t:D$1.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||c$h.STRETCH,this.estimatedTexMemRequired=L._estimateTexMemRequired(this._data,this.params),this._startPreload();}_startPreload(){const t=this._data;t$a(t)||(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t));}_startPreloadVideoElement(t){if(!(V$1(t.src)||"auto"===t.preload&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const e=!t.paused;if(t.src=t.src,e&&t.autoplay){const e=()=>{t.removeEventListener("canplay",e),t.play();};t.addEventListener("canplay",e);}}}_startPreloadImageElement(t){X(t.src)||V$1(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static _getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static _estimateTexMemRequired(t,e){if(t$a(t))return 0;if(o$r(t)||e$p(t))return e.encoding===L.KTX2_ENCODING?m$5(t,e.mipmap):e.encoding===L.BASIS_ENCODING?u$3(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?L._getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this._data=void 0;}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(t){return {target:M$3.TEXTURE_2D,pixelFormat:P$3.RGBA,dataType:G$2.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?t.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(t,e){if(r$4(this._glTexture))return this._glTexture;if(r$4(this._loadingPromise))return this._loadingPromise;const r=this._data;return t$a(r)?(this._glTexture=new u$9(t,this._createDescriptor(t),null),this._glTexture):"string"==typeof r?this._loadFromURL(t,e,r):r instanceof Image?this._loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r,e):(o$r(r)||e$p(r))&&this.params.encoding===L.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(t,r)):(o$r(r)||e$p(r))&&this.params.encoding===L.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(t,r)):(o$r(r)||e$p(r))&&this.params.encoding===L.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(t,r)):e$p(r)?this._loadFromPixelData(t,r):o$r(r)?this._loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this._data instanceof HTMLVideoElement)||t$a(this._glTexture))return r;if(this._data.readyState<G.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if(r$4(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this._data),this._drawStretchedTexture(t,e,r,i,s,this._glTexture);}else {const{videoWidth:t,videoHeight:e}=this._data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this._data):this._glTexture.setData(this._data);}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(t,e){return this._glTexture=E(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>A$1(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>h$4(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){e$i(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.params.components?P$3.LUMINANCE:3===this.params.components?P$3.RGB:P$3.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new u$9(t,r,e),this._glTexture}_loadFromURL(t,e,r){return this._loadAsync((async i=>{const s=await t$f(r,{signal:i});return f$d(i),this._loadFromImage(t,s,e)}))}_loadFromImageElement(t,e,r){return r.complete?this._loadFromImage(t,r,e):this._loadAsync((async i=>{const s=await c$i(r,r.src,!1,i);return f$d(i),this._loadFromImage(t,s,e)}))}_loadFromVideoElement(t,e,r){return r.readyState>=G.HAVE_CURRENT_DATA?this._loadFromImage(t,r,e):this._loadFromVideoElementAsync(t,e,r)}_loadFromVideoElementAsync(t,r,i){return this._loadAsync((s=>new Promise(((a,o)=>{const m=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),a$h(_);},p=()=>{i.readyState>=G.HAVE_CURRENT_DATA&&(m(),a(this._loadFromImage(t,i,r)));},d=t=>{m(),o(t||new s$a("Failed to load video"));};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const _=v$6(s,(()=>d(a$f())));}))))}_loadFromImage(t,e,r){const s=L._getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.params.components?P$3.RGB:P$3.RGBA,!this._requiresPowerOfTwo(t,a)||i$c(s.width)&&i$c(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new u$9(t,a,e),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(i,i),r}_requiresPowerOfTwo(t,e){const r=D$1.CLAMP_TO_EDGE,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return !n$c(t.gl)&&(e.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:m}=i,h=a$g(n),l=a$g(m);let p;switch(a.width=h,a.height=l,this.params.powerOfTwoResizeMode){case c$h.PAD:a.textureCoordinateScaleFactor=[n/h,m/l],p=new u$9(e,a),p.updateData(0,0,0,n,m,r);break;case c$h.STRETCH:case null:case void 0:p=this._stretchToPowerOfTwo(e,r,a,o());break;default:n$d(this.params.powerOfTwoResizeMode);}return a.hasMipmap&&p.generateMipmap(),p}_stretchToPowerOfTwo(t,e,r,i){const s=new u$9(t,r),a=new b$5(t,{colorTarget:Y.TEXTURE,depthStencilTarget:V$2.NONE},s),o=new u$9(t,{target:M$3.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:G$2.UNSIGNED_BYTE,wrapMode:D$1.CLAMP_TO_EDGE,samplingMode:L$3.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=u$7(t),m=t.getBoundFramebufferObject();return this._drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(m),s}_drawStretchedTexture(t,e,r,i,s,a){this._passParameters.texture=s,t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height),t.bindTechnique(e,this._passParameters,null),t.bindVAO(i),t.drawArrays(E$5.TRIANGLE_STRIP,0,n$e(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height),this._passParameters.texture=null;}unload(){if(r$4(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null;}if(r$4(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),r$4(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}}var G;L.DDS_ENCODING="image/vnd-ms.dds",L.KTX2_ENCODING="image/ktx2",L.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(G||(G={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$7(e){e.vertex.code.add(n$6`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(n$6`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n$6`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n$6`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n$6`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n$6`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n$6`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function t$2(e){e.uniforms.add(new e$e("screenSizePerspective",(e=>o$9(e.screenSizePerspective))));}function i$5(e){e.uniforms.add(new e$e("screenSizePerspectiveAlignment",(e=>o$9(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function o$9(a){return r$8(n$4,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const n$4=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a$4(e,r){const c=e.vertex;r.hasVerticalOffset?(f$2(c),r.hasScreenSizePerspective&&(e.include(c$7),i$5(c),c$a(e.vertex,r)),c.code.add(n$6`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?n$6`vec3 worldNormal = normalize(worldPos + localOrigin);`:n$6`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?n$6`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n$6`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(n$6`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const i$4=n$f();function f$2(r){r.uniforms.add(new e$e("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return r$8(i$4,c*a,s,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class h$2 extends t$5{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){this._texture=p$a(this._texture),this._textureNormal=p$a(this._textureNormal),this._textureEmissive=p$a(this._textureEmissive),this._textureOcclusion=p$a(this._textureOcclusion),this._textureMetallicRoughness=p$a(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?O$2.LOADED:O$2.LOADING}get textureBindParameters(){return new o$8(r$4(this._texture)?this._texture.glTexture:null,r$4(this._textureNormal)?this._textureNormal.glTexture:null,r$4(this._textureEmissive)?this._textureEmissive.glTexture:null,r$4(this._textureOcclusion)?this._textureOcclusion.glTexture:null,r$4(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(t$a(this._texture)||e!==this._texture.id)&&(this._texture=p$a(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(e,r){if(t$a(e))return void r(null);const u=this._textureRepository.acquire(e);if(C$2(u))return ++this._numLoading,void u.then((e=>{if(this._disposed)return p$a(e),void r(null);r(e);})).finally((()=>--this._numLoading));r(u);}}class o$8 extends t$8{constructor(t=null,e=null,s=null,i=null,r=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=r;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$6(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s;}}function l$2(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}}function d$3(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}}function p$3(t,e,f,o,r,s=1){if(!f)return void l$2(t,e,o,r,s);const n=o.typedBuffer,i=o.typedBufferStride,c=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],B=f[6],g=f[8],h=f[9],S=f[10],b=f[12],m=f[13],z=f[14];if(r*=i,1===s)for(let l=0;l<c;++l){const f=3*t[l],o=e[f],s=e[f+1],c=e[f+2];n[r]=d*o+p*s+g*c+b,n[r+1]=u*o+y*s+h*c+m,n[r+2]=a*o+B*s+S*c+z,r+=i;}else for(let l=0;l<c;++l){const f=3*t[l],o=e[f],c=e[f+1],O=e[f+2],k=d*o+p*c+g*O+b,F=u*o+y*c+h*O+m,M=a*o+B*c+S*O+z;for(let t=0;t<s;++t)n[r]=k,n[r+1]=F,n[r+2]=M,r+=i;}}function y$2(e,f,o,r,s,n=1){if(!o)return void l$2(e,f,r,s,n);const i=o,c=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],B=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!G$3(i),O=1e-6,k=1-O;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let l=a*r+B*n+S*i,u=p*r+g*n+b*i,F=y*r+h*n+m*i;if(z){const t=l*l+u*u+F*F;if(t<k&&t>O){const e=1/Math.sqrt(t);l*=e,u*=e,F*=e;}}c[s+0]=l,c[s+1]=u,c[s+2]=F,s+=d;}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],l=f[o+2];let u=a*r+B*i+S*l,F=p*r+g*i+b*l,M=y*r+h*i+m*l;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e;}}for(let t=0;t<n;++t)c[s+0]=u,c[s+1]=F,c[s+2]=M,s+=d;}}function B(e,f,o,r,s,n=1){if(!o)return void d$3(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],B=i[4],g=i[5],h=i[6],S=i[8],b=i[9],m=i[10],z=!G$3(i),O=1e-6,k=1-O;if(s*=l,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let u=a*r+B*n+S*i,F=p*r+g*n+b*i,M=y*r+h*n+m*i;if(z){const t=u*u+F*F+M*M;if(t<k&&t>O){const e=1/Math.sqrt(t);u*=e,F*=e,M*=e;}}c[s+0]=u,c[s+1]=F,c[s+2]=M,c[s+3]=d,s+=l;}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],u=f[o+3];let F=a*r+B*i+S*d,M=p*r+g*i+b*d,N=y*r+h*i+m*d;if(z){const t=F*F+M*M+N*N;if(t<k&&t>O){const e=1/Math.sqrt(t);F*=e,M*=e,N*=e;}}for(let t=0;t<n;++t)c[s+0]=F,c[s+1]=M,c[s+2]=N,c[s+3]=u,s+=l;}}function g$2(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}function h$1(t,i,l,d,u,a){for(const h of i.fieldNames){const i=t.vertexAttributes.get(h),S=t.indices.get(h);if(i&&S)switch(h){case O$1.POSITION:{e$i(3===i.size);const t=u.getField(h,i$d);t&&p$3(S,i.data,l,t,a);break}case O$1.NORMAL:{e$i(3===i.size);const t=u.getField(h,i$d);t&&y$2(S,i.data,d,t,a);break}case O$1.UV0:{e$i(2===i.size);const t=u.getField(h,u$e);t&&c$6(S,i.data,t,a);break}case O$1.COLOR:{e$i(3===i.size||4===i.size);const t=u.getField(h,x$3);t&&g$2(S,i.data,i.size,t,a);break}case O$1.SYMBOLCOLOR:{e$i(3===i.size||4===i.size);const t=u.getField(h,x$3);t&&g$2(S,i.data,i.size,t,a);break}case O$1.TANGENT:{e$i(4===i.size);const t=u.getField(h,c$j);t&&B(S,i.data,d,t,a);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const d$2=r$7(1,1,0,1),g$1=r$7(1,0,1,1);function a$3(e){e.fragment.uniforms.add(new m$9("depthTex",((e,o)=>o.highlightDepthTexture))),e.fragment.uniforms.add(new e$f("highlightViewportPixelSz",((e,o)=>o.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",d$2).add("unoccludedHighlightFlag","vec4",g$1),e.fragment.code.add(n$6`void outputHighlight() {
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
class e$5 extends i$b{constructor(r,e){super(r,"mat3",a$a.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s$1(s,n){n.hasVvInstancing&&(n.vvSize||n.vvColor)&&s.attributes.add(O$1.INSTANCEFEATUREATTRIBUTE,"vec4");const l=s.vertex;n.vvSize?(l.uniforms.add(new e$d("vvSizeMinSize",(e=>e.vvSizeMinSize))),l.uniforms.add(new e$d("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),l.uniforms.add(new e$d("vvSizeOffset",(e=>e.vvSizeOffset))),l.uniforms.add(new e$d("vvSizeFactor",(e=>e.vvSizeFactor))),l.uniforms.add(new e$5("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),l.uniforms.add(new e$d("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),l.code.add(n$6`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),l.code.add(n$6`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?n$6`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):l.code.add(n$6`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(l.constants.add("vvColorNumber","int",o$h),n.hasVvInstancing&&l.uniforms.add([new o$f("vvColorValues",(e=>e.vvColorValues),o$h),new e$8("vvColorColors",(e=>e.vvColorColors),o$h)]),l.code.add(n$6`
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

      ${n.hasVvInstancing?n$6`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):l.code.add(n$6`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r$2(r,o){if(o.hasModelTransformation)return r.vertex.code.add(n$6`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`),void r.vertex.code.add(n$6`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.vertex.code.add(n$6`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`),r.vertex.code.add(n$6`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$4(e,d){d.hasVertexColors?(e.attributes.add(O$1.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(n$6`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(n$6`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(n$6`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i$3{constructor(s=n$a()){this.intensity=s;}}class c$5{constructor(i=n$a(),c=r$6(.57735,.57735,.57735)){this.intensity=i,this.direction=c;}}class n$3{constructor(i=n$a(),c=r$6(.57735,.57735,.57735),n=!0,r=1,h=1){this.intensity=i,this.direction=c,this.castShadows=n,this.specularStrength=r,this.environmentStrength=h;}}class r$1{constructor(){this.r=[0],this.g=[0],this.b=[0];}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e$3(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l$1(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function u$1(t){return (t+1)*(t+1)}function l(n){return o$q(Math.floor(Math.sqrt(n)-1),0,2)}function m$3(t,n,o){const r=t[0],e=t[1],s=t[2],i=o||[];return i.length=u$1(n),n>=0&&(i[0]=.28209479177),n>=1&&(i[1]=.4886025119*r,i[2]=.4886025119*s,i[3]=.4886025119*e),n>=2&&(i[4]=1.09254843059*r*e,i[5]=1.09254843059*e*s,i[6]=.31539156525*(3*s*s-1),i[7]=1.09254843059*r*s,i[8]=.54627421529*(r*r-e*e)),i}function p$2(t,n){const o=u$1(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function y$1(t,o){const r=l(o.r.length);for(const e of t)j$3(P,e.direction),m$3(P,r,v$1),n$2(v$1,k),e$3(v$1,e.intensity[0],I$1),l$1(o.r,I$1),e$3(v$1,e.intensity[1],I$1),l$1(o.g,I$1),e$3(v$1,e.intensity[2],I$1),l$1(o.b,I$1);return o}function b(t,n){m$3(P,0,v$1);for(const o of t)n.r[0]+=v$1[0]*k[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v$1[0]*k[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v$1[0]*k[0]*o.intensity[2]*4*Math.PI;return n}function M$1(t,n,e,s){p$2(n,s),o$p(e.intensity,0,0,0);let i=!1;const u=S$1,l=d$1,m=j;u.length=0,l.length=0,m.length=0;for(const o of t)o instanceof n$3&&!i?(r$9(e.direction,o.direction),r$9(e.intensity,o.intensity),e.specularStrength=o.specularStrength,e.environmentStrength=o.environmentStrength,e.castShadows=o.castShadows,i=!0):o instanceof n$3||o instanceof c$5?u.push(o):o instanceof i$3?l.push(o):o instanceof r$1&&m.push(o);y$1(u,s),b(l,s);for(const o of m)l$1(s.r,o.r),l$1(s.g,o.g),l$1(s.b,o.b);}const S$1=[],d$1=[],j=[],v$1=[0],I$1=[0],P=n$a(),k=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c$4=.4;class e$2{constructor(){this._shOrder=2,this._oldSunlight={direction:n$a(),ambient:{color:n$a(),intensity:1},diffuse:{color:n$a(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new r$1,this._mainLight={intensity:n$a(),direction:r$6(1,0,0),castShadows:!1,specularStrength:1,environmentStrength:1};}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}get lightingMainDirection(){return this._mainLight.direction}set(o){M$1(o,this._shOrder,this._mainLight,this._sphericalHarmonics),r$9(this._oldSunlight.direction,this._mainLight.direction);const n=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*n,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*n,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*n,g$a(this._oldSunlight.diffuse.color,this._mainLight.intensity,n),r$9(a$2,this._oldSunlight.diffuse.color),g$a(a$2,a$2,c$4*this.globalFactor),u$c(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,a$2);}get old(){return this._oldSunlight}}const a$2=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class u{constructor(){this._transform=e$h(),this._transformInverse=new M({value:this._transform},h$9,e$h),this._transformInverseTranspose=new M(this._transformInverse,o$o,e$h),this._transformTranspose=new M({value:this._transform},o$o,e$h),this._transformInverseRotation=new M({value:this._transform},y$4,e$k);}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate();}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){n$9(this._transform,t);}multiplyTransform(t){u$a(this._transform,this._transform,t);}set(t){n$9(this._transform,t),this._invalidateLazyTransforms();}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms();}}class M{constructor(t,s,e){this._original=t,this._update=s,this._dirty=!0,this._transform=e();}invalidate(){this._dirty=!0;}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class g{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=n$a(),this._mbs=R(),this._obb={center:n$a(),halfSize:n$g(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,e){const i=t,r=s,a=e+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(i*i+r*r+a*a);return this._tmpVertex[0]=t+i*o,this._tmpVertex[1]=s+r*o,this._tmpVertex[2]=e+a*o,this._tmpVertex}applyToAabb(t){const s=t[0],e=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),n=e*a<0?0:Math.min(Math.abs(e),Math.abs(a)),f=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),l=Math.sqrt(h*h+n*n+f*f);if(l<this._totalOffset)return t[0]-=s<0?this._totalOffset:0,t[1]-=e<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=r>0?this._totalOffset:0,t[4]+=a>0?this._totalOffset:0,t[5]+=o>0?this._totalOffset:0,t;const m=Math.max(Math.abs(s),Math.abs(r)),_=Math.max(Math.abs(e),Math.abs(a)),b=Math.max(Math.abs(i),Math.abs(o)),c=Math.sqrt(m*m+_*_+b*b),p=this._totalOffset/c,u=this._totalOffset/l;return t[0]+=s*(s>0?p:u),t[1]+=e*(e>0?p:u),t[2]+=i*(i>0?p:u),t[3]+=r*(r<0?p:u),t[4]+=a*(a<0?p:u),t[5]+=o*(o<0?p:u),t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this._totalOffset/s;return this._mbs[0]=t[0]+t[0]*e,this._mbs[1]=t[1]+t[1]*e,this._mbs[2]=t[2]+t[2]*e,this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){const s=t.center,e=this._totalOffset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this._obb.center[0]=s[0]+s[0]*e,this._obb.center[1]=s[1]+s[1]*e,this._obb.center[2]=s[2]+s[2]*e,E$6(this._obb.halfSize,t.halfSize,t.quaternion),u$c(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,e$m(this._obb.halfSize,this._obb.halfSize,t.center),S$5(I,t.quaternion),E$6(this._obb.halfSize,this._obb.halfSize,I),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb}}class x{constructor(t=0){this.offset=t,this.sphere=R(),this.tmpVertex=n$a();}applyToVertex(t,s,e){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*s+i[8]*e+i[12],a=i[1]*t+i[5]*s+i[9]*e+i[13],o=i[2]*t+i[6]*s+i[10]*e+i[14];const h=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*h,a+=a*h,o+=o*h;const n=this.objectTransform.inverse;return this.tmpVertex[0]=n[0]*r+n[4]*a+n[8]*o+n[12],this.tmpVertex[1]=n[1]*r+n[5]*a+n[9]*o+n[13],this.tmpVertex[2]=n[2]*r+n[6]*a+n[10]*o+n[14],this.tmpVertex}applyToMinMax(t,s){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*i,s[1]+=s[1]*i,s[2]+=s[2]*i;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this.offset/s;return this.sphere[0]=t[0]+t[0]*e,this.sphere[1]=t[1]+t[1]*e,this.sphere[2]=t[2]+t[2]*e,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const S=new x;function y(s){return r$4(s)?(S.offset=s,S):null}new g;const I=e$q();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$7(o){const d=n$6`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$6(o,d){d.normalType===i$2.Attribute&&(o.attributes.add(O$1.NORMAL,"vec3"),o.vertex.code.add(n$6`vec3 normalModel() {
return normal;
}`)),d.normalType===i$2.CompressedAttribute&&(o.include(o$7),o.attributes.add(O$1.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(n$6`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),d.normalType===i$2.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(n$6`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}var i$2;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(i$2||(i$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$5(o){o.attributes.add(O$1.POSITION,"vec3"),o.vertex.code.add(n$6`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$3({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(n$6`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):c.add(n$6`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function i$1(e){return !!has("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$4 extends i$b{constructor(r,o){super(r,"mat3",a$a.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function F(r,o){r.include(o$5);const e=r.vertex;e.include(c$3,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new e$d("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$d("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$5("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$b("transformProjFromView",(r=>r.transformProjFromView)),new o$4("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$g("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$g("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(n$6`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(n$6`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?n$6`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:n$6`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$d("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(n$6`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(n$6`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}class c$2 extends t$8{constructor(){super(...arguments),this.transformWorldFromViewTH=n$a(),this.transformWorldFromViewTL=n$a(),this.transformViewFromCameraRelativeRS=e$k(),this.transformProjFromView=e$h();}}class W extends t$8{constructor(){super(...arguments),this.transformWorldFromModelRS=e$k(),this.transformWorldFromModelTH=n$g(),this.transformWorldFromModelTL=n$g();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n$1(r,o){if(o.normalType===i$2.Attribute||o.normalType===i$2.CompressedAttribute){r.include(o$6,o),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3");r.vertex.uniforms.add([new o$4("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$5("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),r.vertex.code.add(n$6`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);}else o.normalType===i$2.Ground?(r.include(F,o),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(n$6`
    void forwardNormal() {
      vNormalWorld = ${o.spherical?n$6`normalize(vPositionWorldCameraRelative);`:n$6`vec3(0.0, 0.0, 1.0);`}
    }
    `)):r.vertex.code.add(n$6`void forwardNormal() {}`);}class f$1 extends c$2{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$k();}}class c$1 extends W{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e$k(),this.toMapSpace=n$f();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var o$3;function d(d,a){switch(a.textureCoordinateType){case o$3.Default:return d.attributes.add(O$1.UV0,"vec2"),d.varyings.add("vuv0","vec2"),void d.vertex.code.add(n$6`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case o$3.Atlas:return d.attributes.add(O$1.UV0,"vec2"),d.varyings.add("vuv0","vec2"),d.attributes.add(O$1.UVREGION,"vec4"),d.varyings.add("vuvRegion","vec4"),void d.vertex.code.add(n$6`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:n$d(a.textureCoordinateType);case o$3.None:return void d.vertex.code.add(n$6`void forwardTextureCoordinates() {}`);case o$3.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT";}(o$3||(o$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t$1(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(n$6`#ifndef GL_EXT_shader_texture_lod
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
function a$1(a,s){switch(a.include(d,s),a.fragment.code.add(n$6`
  struct TextureLookupParameter {
    vec2 uv;
    ${s.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),s.textureCoordinateType){case o$3.Default:return void a.fragment.code.add(n$6`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o$3.Atlas:return a.include(t$1),void a.fragment.code.add(n$6`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:n$d(s.textureCoordinateType);case o$3.None:case o$3.COUNT:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o$2 extends i$b{constructor(r,o){super(r,"vec2",a$a.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class m$2 extends i$b{constructor(r,e){super(r,"sampler2D",a$a.Draw,((o,s,t)=>o.bindTexture(r,e(s,t))));}}function p$1(s,n,c=e$c.None){const p=[new m$2(s,n)];if(c&e$c.Size){const i=s+"Size";p.push(new o$2(i,((s,t)=>{const i=n(s,t);return r$4(i)?r$5(f,i.descriptor.width,i.descriptor.height):f$a})));}if(c&e$c.InvSize){const i=s+"InvSize";p.push(new o$2(i,((s,t)=>{const i=n(s,t);return r$4(i)?r$5(f,1/i.descriptor.width,1/i.descriptor.height):f$a})));}return p}const f=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
r$a(0,.6,.2);var m$1;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT";}(m$1||(m$1={}));function p(e,u){const l=e.fragment,d=u.hasMetalnessAndRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===m$1.Normal&&d&&e.include(a$1,u),u.pbrMode!==m$1.Schematic)if(u.pbrMode!==m$1.Disabled){if(u.pbrMode===m$1.Normal){l.code.add(n$6`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.supportsTextureAtlas?e$c.Size:e$c.None,s=u.pbrTextureBindType;u.hasMetalnessAndRoughnessTexture&&(l.uniforms.add(s===a$a.Pass?p$8("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):p$1("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),l.code.add(n$6`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(l.uniforms.add(s===a$a.Pass?p$8("texEmission",(e=>e.textureEmissive),e):p$1("texEmission",(e=>e.textureEmissive),e)),l.code.add(n$6`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),u.hasOcclusionTexture?(l.uniforms.add(s===a$a.Pass?p$8("texOcclusion",(e=>e.textureOcclusion),e):p$1("texOcclusion",(e=>e.textureOcclusion),e)),l.code.add(n$6`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):l.code.add(n$6`float getBakedOcclusion() { return 1.0; }`),l.uniforms.add(s===a$a.Pass?[new e$d("emissionFactor",(e=>e.emissiveFactor)),new e$d("mrrFactors",(e=>e.mrrFactors))]:[new o$g("emissionFactor",(e=>e.emissiveFactor)),new o$g("mrrFactors",(e=>e.mrrFactors))]),l.code.add(n$6`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${d?"vtc.uv = vuv0;":""}
      ${u.hasMetalnessAndRoughnessTexture?u.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${u.hasEmissionTexture?u.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${u.hasOcclusionTexture?u.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `);}}else l.code.add(n$6`float getBakedOcclusion() { return 1.0; }`);else l.code.add(n$6`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(i,t){switch(t.output){case h$5.Color:if(t.receiveShadows)return i.varyings.add("linearDepth","float"),void i.vertex.code.add(n$6`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case h$5.Depth:case h$5.Shadow:case h$5.ShadowHighlight:case h$5.ShadowExludeHighlight:return i.include(F,t),i.varyings.add("linearDepth","float"),i.vertex.uniforms.add(new e$f("nearFar",((e,r)=>r.camera.nearFar))),void i.vertex.code.add(n$6`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}i.vertex.code.add(n$6`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new e$d("lightingAmbientSH0",((n,t)=>o$p(a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add(n$6`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add([new e$e("lightingAmbientSH_R",((i,n)=>r$8(r,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$e("lightingAmbientSH_G",((i,n)=>r$8(r,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$e("lightingAmbientSH_B",((i,n)=>r$8(r,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))]),m.code.add(n$6`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(m.uniforms.add([new e$d("lightingAmbientSH0",((n,t)=>o$p(a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$e("lightingAmbientSH_R1",((i,n)=>r$8(r,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$e("lightingAmbientSH_G1",((i,n)=>r$8(r,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$e("lightingAmbientSH_B1",((i,n)=>r$8(r,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$e("lightingAmbientSH_R2",((i,n)=>r$8(r,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$e("lightingAmbientSH_G2",((i,n)=>r$8(r,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$e("lightingAmbientSH_B2",((i,n)=>r$8(r,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))]),m.code.add(n$6`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),g.pbrMode!==m$1.Normal&&g.pbrMode!==m$1.Schematic||m.code.add(n$6`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a=n$a(),r=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o$1(o,a){const g=o.fragment;a.isGround?g.uniforms.add(new o$m("lightingFixedFactor",((i,n)=>(1-n.lighting.groundLightingFactor)*(1-n.lighting.globalFactor)))):g.constants.add("lightingFixedFactor","float",0),g.uniforms.add([new e$d("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection)),new e$d("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),g.code.add(n$6`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e$1 extends i$b{constructor(r,e){super(r,"int",a$a.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o extends i$b{constructor(r,o,s){super(r,"mat4",a$a.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))),s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e extends i$b{constructor(r,e,o){super(r,"mat4",a$a.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function h(e$1,a){a.receiveShadows&&(e$1.fragment.uniforms.add(new e("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e$1));}function c(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new o("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e));}function v(e){const i=e.fragment;i.include(a$9),i.uniforms.add([new m$9("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new e$1("numCascades",((e,a)=>a.shadowMap.numCascades)),new e$e("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances)),new o$m("depthHalfPixelSz",((e,a)=>.5/a.shadowMap.textureSize))]),i.code.add(n$6`int chooseCascade(float depth, out mat4 mat) {
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
function t(t){const a=t.fragment.code;a.add(n$6`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(n$6`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(n$6`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
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
function n(n,r){const l=n.fragment.code;n.include(t$4),r.pbrMode===m$1.Water||r.pbrMode===m$1.WaterOnIntegratedMesh?(l.add(n$6`
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
    `),l.add(n$6`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),l.add(n$6`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),l.add(n$6`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),l.add(n$6`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):r.pbrMode!==m$1.Normal&&r.pbrMode!==m$1.Schematic||(n.include(t),l.add(n$6`struct PBRShadingInfo
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
};`),l.add(n$6`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(n$6`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),l.add(n$6`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(n$6`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(n$6`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
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
class s extends i$b{constructor(o,s){super(o,"bool",a$a.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}}

export { o$e as $, v$2 as A, B$2 as B, n$5 as C, t$3 as D, E$4 as E, s$5 as F, d$7 as G, x$1 as H, t$5 as I, h$6 as J, h$1 as K, L, p$3 as M, o$b as N, e$6 as O, o$a as P, f$4 as Q, h$2 as R, S$4 as S, r$3 as T, c$b as U, f$6 as V, o$f as W, o$h as X, e$8 as Y, a$9 as Z, t$4 as _, a$8 as a, a$4 as a$, s$4 as a0, m$6 as a1, l$6 as a2, P$1 as a3, i$9 as a4, u$5 as a5, v$4 as a6, c$7 as a7, f$2 as a8, i$5 as a9, i$1 as aA, l$8 as aB, m$2 as aC, o$2 as aD, d$5 as aE, i$8 as aF, p$7 as aG, i$3 as aH, E$2 as aI, U as aJ, p$6 as aK, v$5 as aL, o$5 as aM, c$4 as aN, O as aO, c$3 as aP, o$g as aQ, e$1 as aR, d as aS, o$6 as aT, n$1 as aU, i$2 as aV, o$3 as aW, a$1 as aX, e$c as aY, p$8 as aZ, p$1 as a_, s$1 as aa, t$2 as ab, a$3 as ac, o$k as ad, f$7 as ae, d$9 as af, L$2 as ag, o$8 as ah, y$2 as ai, g$2 as aj, d$3 as ak, e$4 as al, e$2 as am, o$c as an, u as ao, y as ap, c$1 as aq, i$b as ar, a$a as as, s as at, n as au, i as av, o$1 as aw, m as ax, m$1 as ay, c as az, e$f as b, h as b0, p as b1, f$1 as b2, l$5 as b3, o$l as c, e$b as d, e$d as e, e$g as f, o$n as g, e$a as h, t$6 as i, o$j as j, e$e as k, t$8 as l, m$9 as m, n$6 as n, o$m as o, E$3 as p, o$i as q, e$9 as r, g$6 as s, t$9 as t, u$7 as u, c$a as v, h$5 as w, r$2 as x, u$4 as y, e$7 as z };
