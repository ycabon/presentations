import { a as a$j } from './devEnvironmentUtils-a78265ea.js';
import { fO as n$9, ah as n$a, l8 as i$b, O as r$f, gj as t$h, l9 as y$4, la as x$6, h7 as e$6, g as t$i, cQ as a$d, e as s$6, l as o$f, N as n$b, kn as Q$2, lb as F$1, hv as o$h, lc as e$7, h as r$g, ld as t$k, v as v$2, p as m$4, g3 as a$e, h6 as n$d, s as s$7, fx as s$8, dr as h$7, le as s$9, fv as a$f, a5 as e$8, ai as o$i, lf as q$4, lg as w$4, f_ as _$3, fU as j$4, fT as u$a, ak as d$5, fZ as z$3, g1 as c$9, f$ as l$a, aj as s$b, lh as n$e, gy as a$g, li as r$i, fY as r$j, j4 as r$k, g7 as f$5, ga as I$3, g2 as q$5, lj as p$3, lk as P$4, ll as G$1, j3 as f$7, k as i$d, lm as n$f, g8 as c$c, j as i$e, ac as e$b, gq as L$4, ln as r$n, lo as h$8, fe as a$i, C as C$2, bL as e$c, b4 as b$6, lp as e$d, lq as B$3, dQ as m$5, gs as j$5, g9 as h$9, lr as i$g } from './_virtual_index-49b2bc11.js';
import { a as e$9 } from './quat-5b7f0ff3.js';
import { e as e$a, a as e$e, f as f$9, r as r$r, c as e$g } from './vec33-de536943.js';
import { c as c$b, x as x$7, u as u$b, i as i$c, L as L$5, O as O$2, E as E$4 } from './BufferView-5f775bb6.js';
import { l as l$8, u as u$9, h as h$6, s as s$a, c as c$a, f as f$6, a as l$c, n as n$h, o as o$j, r as r$o, b as r$p, d as r$q, e as f$a, g as e$f, t as t$m, i as i$f, j as o$k, k as n$i } from './DefaultMaterial_COLOR_GAMMA-c14192e8.js';
import { t as t$j, r as r$l, g as g$7, u as u$d, c as c$e, s as s$c, b as a$h, l as l$b, d as r$m, e as s$d, f as f$8 } from './requestImageUtils-e972073a.js';
import { o as o$e, n as n$c, u as u$c, c as c$d } from './Texture-7f200883.js';
import { a as o$d, f as f$4, o as o$g, l as l$9, r as r$h, n as n$g } from './VertexArrayObject-fabb4101.js';
import { A as A$4 } from './InterleavedLayout-f33a88b7.js';
import { t as t$l } from './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$c{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=n$a(),i$b(i.length>=1),i$b(a.length%this._numIndexPerPrimitive==0),i$b(a.length>=i.length*this._numIndexPerPrimitive),i$b(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b$5.clear(),b$5.push(l),this.bbMin=r$f(o[l],o[l+1],o[l+2]),this.bbMax=t$h(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b$5.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2]);}}y$4(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b$5.length;++t){l=b$5.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a;}b$5.clear();}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(x$6(this.bbMin,this.bbMax)>1){const i=y$4(n$a(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<M&&(M=n);}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),n[t]=s,++r[s];}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t];}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a$c(o[t],this._numIndexPerPrimitive,this.indices,this.position));}return this._children}static prune(){b$5.prune();}}const b$5=new n$9({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$e{constructor(){this.id=e$6();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u$8 extends r$e{constructor(t,e=[],i=0,s=-1){super(),this._primitiveType=i,this.edgeIndicesLength=s,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,r]of t)r&&this._vertexAttributes.set(n,{...r});if(null==e||0===e.length){const t=h$5(this._vertexAttributes),e=l$8(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[n,r]of e)r&&(this._indices.set(n,g$6(r)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength));}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$i(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return u$9(i,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return h$6(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const i=0===this.primitiveType?3:1;i$b(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=l$8(t.length/i),r=this.vertexAttributes.get("position");return new a$c(s,i,t,r)}}function h$5(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function g$6(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s$5(){if(t$i(i$a)){const t=t=>a$d(`esri/libs/basisu/${t}`);i$a=import('./basis_transcoder-77be62e7.js').then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$a}let i$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s$4=null,i$9=null;async function a$b(){return t$i(i$9)&&(i$9=s$5(),s$4=await i$9),i$9}function o$c(t,n){if(t$i(s$4))return t.byteLength;const r=new s$4.BasisFile(new Uint8Array(t)),i=c$8(r)?l$7(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),i}function g$5(t,n){if(t$i(s$4))return t.byteLength;const r=new s$4.KTX2File(new Uint8Array(t)),i=u$7(r)?l$7(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),i}function l$7(e,t,n,s,i){const a=o$d(t?37496:37492),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*o)}function c$8(e){return e.getNumImages()>=1&&!e.isUASTC()}function u$7(e){return e.getFaces()>=1&&e.isETC1S()}async function m$3(t,n,r){t$i(s$4)&&(s$4=await a$b());const i=new s$4.BasisFile(new Uint8Array(r));if(!c$8(i))return null;i.startTranscoding();const o=d$4(t,n,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>i.transcodeImage(n,0,e,t,0,0)));return i.close(),i.delete(),o}async function h$4(t,n,r){t$i(s$4)&&(s$4=await a$b());const i=new s$4.KTX2File(new Uint8Array(r));if(!u$7(i))return null;i.startTranscoding();const o=d$4(t,n,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>i.transcodeImage(n,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function d$4(e,t,r,s,i,a,o,g){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,m]=l?s?[1,37496]:[0,37492]:c?s?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),d=[];for(let n=0;n<h;n++)d.push(new Uint8Array(o(n,u))),g(n,u,d[n]);const p=d.length>1,f=p?9987:9729,w={...t,samplingMode:f,hasMipmap:p,internalFormat:m,width:i,height:a};return new o$e(e,w,{type:"compressed",levels:d})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$8=s$6.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),o$b=542327876,a$a=131072,i$8=4;function s$3(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function l$6(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const u$6=s$3("DXT1"),c$7=s$3("DXT3"),m$2=s$3("DXT5"),h$3=31,p$2=0,d$3=1,g$4=2,f$3=3,w$3=4,C$1=7,x$5=20,D$2=21;function b$4(e,t,n){const{textureData:o,internalFormat:a,width:i,height:s}=A$3(n,t.hasMipmap);return t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=i,t.height=s,new o$e(e,t,o)}function A$3(e,r){const s=new Int32Array(e,0,h$3);if(s[p$2]!==o$b)return n$8.error("Invalid magic number in DDS header"),null;if(!(s[x$5]&i$8))return n$8.error("Unsupported format, must contain a FourCC code"),null;const b=s[D$2];let A,M;switch(b){case u$6:A=8,M=33776;break;case c$7:A=16,M=33778;break;case m$2:A=16,M=33779;break;default:return n$8.error("Unsupported FourCC code:",l$6(b)),null}let v=1,F=s[w$3],U=s[f$3];0==(3&F)&&0==(3&U)||(n$8.warn("Rounding up compressed texture size to nearest multiple of 4."),F=F+3&-4,U=U+3&-4);const T=F,j=U;let k,y;s[g$4]&a$a&&!1!==r&&(v=Math.max(1,s[C$1])),1===v||o$f(F)&&o$f(U)||(n$8.warn("Ignoring mipmaps of non power of two sized compressed texture."),v=1);let I=s[d$3]+4;const S=[];for(let t=0;t<v;++t)y=(F+3>>2)*(U+3>>2)*A,k=new Uint8Array(e,I,y),S.push(k),I+=y,F=Math.max(1,F>>1),U=Math.max(1,U>>1);return {textureData:{type:"compressed",levels:S},internalFormat:M,width:T,height:j}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o$a=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i$7=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s$2=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$6(o,i=i$7,l=o$a,m=-1,f=1){let u=null;if(i===s$2)u=new Float32Array([m,m,0,0,f,m,1,0,m,f,0,1,f,f,1,1]);else u=new Float32Array([m,m,f,m,m,f,f,f]);return new f$4(o,l,{geometry:i},{geometry:o$g.createVertex(o,35044,u)})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class b$3 extends r$e{constructor(t,e){super(),this.data=t,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$b,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=b$3.estimateTexMemRequired(this.data,this.params),this.startPreload();}startPreload(){const t=this.data;t$i(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t));}startPreloadVideoElement(t){Q$2(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src);}startPreloadImageElement(t){F$1(t.src)||Q$2(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if(t$i(t))return 0;if(o$h(t)||e$7(t))return e.encoding===b$3.KTX2_ENCODING?g$5(t,e.mipmap):e.encoding===b$3.BASIS_ENCODING?o$c(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?b$3.getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0;}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){var e;return {target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(t,e){if(r$g(this._glTexture))return this._glTexture;if(r$g(this._loadingPromise))return this._loadingPromise;const r=this.data;return t$i(r)?(this._glTexture=new o$e(t,this.createDescriptor(t),null),this._glTexture):"string"==typeof r?this.loadFromURL(t,e,r):r instanceof Image?this.loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(t,r,e):(o$h(r)||e$7(r))&&this.params.encoding===b$3.DDS_ENCODING?this.loadFromDDSData(t,r):(o$h(r)||e$7(r))&&this.params.encoding===b$3.KTX2_ENCODING?this.loadFromKTX2(t,r):(o$h(r)||e$7(r))&&this.params.encoding===b$3.BASIS_ENCODING?this.loadFromBasis(t,r):e$7(r)?this.loadFromPixelData(t,r):o$h(r)?this.loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||t$i(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(r$g(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(t,e,r,i,s,this._glTexture);}else {const{width:t,height:e}=this.data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this._glTexture.setData(this.data);}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this._glTexture=b$4(t,this.createDescriptor(t),e),this._glTexture}loadFromKTX2(t,e){return this.loadAsync((()=>h$4(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromBasis(t,e){return this.loadAsync((()=>m$3(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromPixelData(t,e){i$b(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(t);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new o$e(t,r,e),this._glTexture}loadFromURL(t,e,r){return this.loadAsync((async i=>{const s=await t$j(r,{signal:i});return this.loadFromImage(t,s,e)}))}loadFromImageElement(t,e,r){return r.complete?this.loadFromImage(t,r,e):this.loadAsync((async i=>{const s=await t$k(r,r.src,!1,i);return this.loadFromImage(t,s,e)}))}loadFromVideoElement(t,e,r){return r.readyState>=2?this.loadFromImage(t,r,e):this.loadFromVideoElementAsync(t,e,r)}loadFromVideoElementAsync(t,r,i){return this.loadAsync((s=>new Promise(((a,o)=>{const l=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),s$8(c);},p=()=>{i.readyState>=2&&(l(),a(this.loadFromImage(t,i,r)));},d=t=>{l(),o(t||new s$7("Failed to load video"));};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const c=v$2(s,(()=>d(m$4())));}))))}loadFromImage(t,e,r){const s=b$3.getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this.createDescriptor(t);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,a)||o$f(s.width)&&o$f(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new o$e(t,a,e),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(i,i),r}requiresPowerOfTwo(t,e){const r=33071,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return !n$c(t.gl)&&(e.hasMipmap||!i)}makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:h}=i,m=a$e(n),l=a$e(h);let p;switch(a.width=m,a.height=l,this.params.powerOfTwoResizeMode){case 2:a.textureCoordinateScaleFactor=[n/m,h/l],p=new o$e(e,a),p.updateData(0,0,0,n,h,r);break;case 1:case null:case void 0:p=this.stretchToPowerOfTwo(e,r,a,o());break;default:n$d(this.params.powerOfTwoResizeMode);}return a.hasMipmap&&p.generateMipmap(),p}stretchToPowerOfTwo(t,e,r,i){const s=new o$e(t,r),a=new l$9(t,{colorTarget:0,depthStencilTarget:0},s),o=new o$e(t,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=i$6(t),h=t.getBoundFramebufferObject();return this.drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(h),s}drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=e.program;t.useProgram(n),n.setUniform4f("color",1,1,1,1),n.bindTexture(s,"tex"),t.bindVAO(i),e.bindPipelineState(t),t.drawArrays(5,0,r$h(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height);}unload(){if(r$g(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null;}if(r$g(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),r$g(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}}b$3.DDS_ENCODING="image/vnd-ms.dds",b$3.KTX2_ENCODING="image/ktx2",b$3.BASIS_ENCODING="image/x.basis";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$g(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o;}(t$g||(t$g={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d$2=.1,o$9=.001;function r$d(d,r){const e=d.fragment;switch(r.alphaDiscardMode){case 0:e.code.add(t$g`
        #define discardOrAdjustAlpha(color) { if (color.a < ${t$g.float(o$9)}) { discard; } }
      `);break;case 1:e.code.add(t$g`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:e.uniforms.add("textureAlphaCutoff","float"),e.code.add(t$g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(t$g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e$5{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRep.release(this._technique);}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(e){return 2}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r$c extends e$5{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e));}dispose(){this._texture=h$7(this._texture),this._textureNormal=h$7(this._textureNormal),this._textureEmissive=h$7(this._textureEmissive),this._textureOcclusion=h$7(this._textureOcclusion),this._textureMetallicRoughness=h$7(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(i){(t$i(this._texture)||i!==this._texture.id)&&(this._texture=h$7(this._texture),this._textureId=i,this._acquire(this._textureId).then((e=>this._texture=e)));}bindTextures(e){r$g(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),r$g(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),r$g(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),r$g(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),r$g(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness");}bindTextureScale(e){const t=r$g(this._texture)?this._texture.glTexture:null;r$g(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1);}_acquire(i){return t$i(i)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(i).then((t=>this._disposed?(h$7(t),null):t)).finally((()=>--this._numLoading)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$7(e){return Math.abs(e*e*e)}function l$5(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$4.scale=Math.min(i.divisor/(t-i.offset),1),x$4.factor=n$7(e),x$4.minPixelSize=i.minPixelSize,x$4.paddingPixels=r,x$4}function s$1(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function c$6(t,a){return Math.max(s$9(t*a.scale,t,a.factor),s$1(t,a))}function m$1(e,t,a,i){return c$6(e,l$5(t,a,i))}const x$4={scale:0,factor:0,minPixelSize:0,paddingPixels:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$5(t){return !!r$g(t)&&!t.visible}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p$1=a$f();function h$2(t,n,e,i,o,r,s){if(!u$5(n))if(t.boundingInfo){i$b(0===t.primitiveType);const n=e.tolerance;g$3(t.boundingInfo,i,o,n,r,s);}else {const n=t.indices.get("position"),e=t.vertexAttributes.get("position");M$2(i,o,0,n.length/3,n,e,void 0,r,s);}}const d$1=n$a();function g$3(t,i,o,r,s,c){if(t$i(t))return;const l=j$3(i,o,d$1);if(q$4(p$1,t.getBBMin()),w$4(p$1,t.getBBMax()),r$g(s)&&s.applyToAabb(p$1),A$2(p$1,i,l,r)){const{primitiveIndices:n,indices:e,position:f}=t,a=n?n.length:e.length/3;if(a>U$2){const n=t.getChildren();if(void 0!==n){for(let t=0;t<8;++t)void 0!==n[t]&&g$3(n[t],i,o,r,s,c);return}}M$2(i,o,0,a,e,f,n,s,c);}}const x$3=n$a();function M$2(t,n,i,o,r,s,c,f,a){if(c)return b$2(t,n,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],n=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let j=l[t++],A=l[t++],L=l[t];r$g(f)&&([n,i,o]=f.applyToVertex(n,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[j,A,L]=f.applyToVertex(j,A,L,b));const V=s-n,B=c-i,z=y-o,E=j-n,I=A-i,N=L-o,P=g*N-I*M,U=M*E-N*d,S=d*I-E*g,W=V*P+B*U+z*S;if(Math.abs(W)<=Number.EPSILON)continue;const O=m-n,k=p-i,R=h-o,C=O*P+k*U+R*S;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*z-B*R,X=R*V-z*O,Y=O*B-V*k,_=d*H+g*X+M*Y;if(W>0){if(_<0||C+_>W)continue}else if(_>0||C+_<W)continue;const q=(E*H+I*X+N*Y)/W;if(q>=0){a(q,T$1(V,B,z,E,I,N,x$3),b,!1);}}}function b$2(t,n,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i;b<o;++b){const t=c[b];let n=3*t,i=u*r[n++],o=l[i++],s=l[i++],v=l[i];i=u*r[n++];let y=l[i++],j=l[i++],A=l[i];i=u*r[n];let L=l[i++],V=l[i++],B=l[i];r$g(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,j,A]=f.applyToVertex(y,j,A,b),[L,V,B]=f.applyToVertex(L,V,B,b));const z=y-o,E=j-s,I=A-v,N=L-o,P=V-s,U=B-v,S=g*U-P*M,W=M*N-U*d,O=d*P-N*g,k=z*S+E*W+I*O;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*S+C*W+H*O;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*I-E*H,_=H*z-I*R,q=R*E-z*C,w=d*Y+g*_+M*q;if(k>0){if(w<0||X+w>k)continue}else if(w>0||X+w<k)continue;const D=(N*Y+P*_+U*q)/k;if(D>=0){a(D,T$1(z,E,I,N,P,U,x$3),t,!1);}}}const v$1=n$a(),y$3=n$a();function T$1(t,n,e,s,c,f,a){return o$i(v$1,t,n,e),o$i(y$3,s,c,f),_$3(a,v$1,y$3),j$4(a,a),a}function j$3(t,n,e){return o$i(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function A$2(t,n,e,i){return L$3(t,n,e,i,1/0)}function L$3(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-n[1])*e[1],l=(t[4]+i-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return !1;if(c=Math.max(c,Math.min(a,l)),c>f)return !1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function V$1(n,e,i,o,r){let s=(i.screenLength||0)*n.pixelRatio;r&&(s=m$1(s,o,e,r));const c=s*Math.tan(.5*n.fovY)/(.5*n.fullHeight);return e$8(c*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function B$2(t,n,e){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;n.setUniform4f(e,i.divisor,i.offset,i.minPixelSize,o);}function z$2(t,n){const e=n?z$2(n):{};for(const i in t){let n=t[i];n&&n.forEach&&(n=N$1(n)),null==n&&i in e||(e[i]=n);}return e}function E$3(t,n){let e=!1;for(const i in n){const o=n[i];void 0!==o&&(e=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o);}return e}function N$1(t){const n=[];return t.forEach((t=>n.push(t))),n}const P$3={multiply:1,ignore:2,replace:3,tint:4},U$2=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$9 extends r$e{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=o$a,this._parameters=z$2(e,r),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e){E$3(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$g(this.repository)&&this.repository.materialChanged(this);}}const n$6={renderOccluded:1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b$1(i,n,r){const t=z$3(i.direction,c$9(r,n,i.origin));return u$a(r,i.origin,d$5(r,i.direction,t)),r}function q$3(){return {origin:null,direction:null}}new s$a(q$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f$2(r,s){const c=z$3(r,s)/(s$b(r)*s$b(s));return -l$a(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x$2=s$6.getLogger("esri.geometry.support.sphere");function P$2(){return n$e()}function _$2(t,r=P$2()){return a$g(r,t)}function q$2(t,r){return r$i(t[0],t[1],t[2],r)}function w$2(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0;}function k(t){return t}function E$2(t){return Array.isArray(t)?t[3]:t}function L$2(t){return Array.isArray(t)?t:X}function O$1(t,r,n,s){return r$i(t,r,n,s)}function T(t,r,n){return t!==n&&r$j(n,t),n[3]=t[3]+r,n}function z$1(t,r,n){return x$2.error("sphere.setExtent is not yet supported"),t===n?n:_$2(t,n)}function U$1(t,r,n){if(t$i(r))return !1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=n$a();function B$1(t,r){return U$1(t,r,null)}function D$1(t,r,n){if(U$1(t,r,n))return n;const s=F(t,r,c$a.get());return u$a(n,r.origin,d$5(c$a.get(),r.direction,q$5(r.origin,s)/s$b(r.direction))),n}function F(t,r,n){const s=c$a.get(),i=f$6.get();_$3(s,r.origin,r.direction);const a=E$2(t);_$3(n,s,r.origin),d$5(n,n,1/s$b(n)*a);const u=J$1(t,r.origin),g=f$2(r.origin,n);return r$k(i),f$5(i,i,g+u,s),I$3(n,n,i),n}function G(t,r,n){return U$1(t,r,n)?n:(b$1(r,L$2(t),n),H$2(t,n,n))}function H$2(t,r,n){const s=c$9(c$a.get(),r,L$2(t)),e=d$5(c$a.get(),s,t[3]/s$b(s));return u$a(n,e,L$2(t))}function I$2(t,r){const n=c$9(c$a.get(),r,L$2(t)),s=p$3(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J$1(t,n){const s=c$9(c$a.get(),n,L$2(t)),e=s$b(s),o=E$2(t),i=o+Math.abs(o-e);return l$a(o/i)}const K$1=n$a();function N(t,r,s,e){const o=c$9(K$1,r,L$2(t));switch(s){case 0:{const t=P$4(o,K$1)[2];return o$i(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=P$4(o,K$1),r=t[1],s=t[2],i=Math.sin(r);return o$i(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return j$4(e,o);default:return}}function Q$1(t,r){const n=c$9(Y,r,L$2(t));return s$b(n)-t[3]}function W(t,r,n,s){const e=Q$1(t,r),o=N(t,r,2,Y),i=d$5(Y,o,n-e);return u$a(s,r,i)}const X=n$a(),Y=n$a();Object.freeze({__proto__:null,create:P$2,copy:_$2,fromCenterAndRadius:q$2,wrap:w$2,clear:C,fromRadius:k,getRadius:E$2,getCenter:L$2,fromValues:O$1,elevate:T,setExtent:z$1,intersectRay:U$1,intersectsRay:B$1,intersectRayClosestSilhouette:D$1,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H$2,distanceToSilhouette:I$2,angleToSilhouette:J$1,axisAt:N,altitudeAt:Q$1,setAltitudeAt:W});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class q$1{constructor(t=0){this.offset=t,this.sphere=P$2(),this.tmpVertex=n$a();}applyToVertex(t,s,i){const r=this.objectTransform.transform;let e=r[0]*t+r[4]*s+r[8]*i+r[12],o=r[1]*t+r[5]*s+r[9]*i+r[13],n=r[2]*t+r[6]*s+r[10]*i+r[14];const h=this.offset/Math.sqrt(e*e+o*o+n*n);e+=e*h,o+=o*h,n+=n*h;const a=this.objectTransform.inverse;return this.tmpVertex[0]=a[0]*e+a[4]*o+a[8]*n+a[12],this.tmpVertex[1]=a[1]*e+a[5]*o+a[9]*n+a[13],this.tmpVertex[2]=a[2]*e+a[6]*o+a[10]*n+a[14],this.tmpVertex}applyToMinMax(t,s){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*r,s[1]+=s[1]*r,s[2]+=s[2]*r;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.sphere[0]=t[0]+t[0]*i,this.sphere[1]=t[1]+t[1]*i,this.sphere[2]=t[2]+t[2]*i,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const x$1=new q$1;function _$1(s){return r$g(s)?(x$1.offset=s,x$1):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$5(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s;}}function i$5(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n;}}function c$5(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n;}}function u$4(t,e,f,o,r,s=1){if(!f)return void i$5(t,e,o,r,s);const n=o.typedBuffer,c=o.typedBufferStride,l=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],g=f[6],B=f[8],h=f[9],m=f[10],b=f[12],z=f[13],S=f[14];if(r*=c,1===s)for(let i=0;i<l;++i){const f=3*t[i],o=e[f],s=e[f+1],l=e[f+2];n[r]=d*o+p*s+B*l+b,n[r+1]=u*o+y*s+h*l+z,n[r+2]=a*o+g*s+m*l+S,r+=c;}else for(let i=0;i<l;++i){const f=3*t[i],o=e[f],l=e[f+1],k=e[f+2],F=d*o+p*l+B*k+b,v=u*o+y*l+h*k+z,q=a*o+g*l+m*k+S;for(let t=0;t<s;++t)n[r]=F,n[r+1]=v,n[r+2]=q,r+=c;}}function a$8(e,f,o,r,s,n=1){if(!o)return void i$5(e,f,r,s,n);const c=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=c[0],p=c[1],y=c[2],g=c[4],B=c[5],h=c[6],m=c[8],b=c[9],z=c[10],S=!G$1(c),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let c=a*r+g*n+m*i,u=p*r+B*n+b*i,v=y*r+h*n+z*i;if(S){const t=c*c+u*u+v*v;if(t<F&&t>k){const e=1/Math.sqrt(t);c*=e,u*=e,v*=e;}}l[s+0]=c,l[s+1]=u,l[s+2]=v,s+=d;}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],c=f[o+2];let u=a*r+g*i+m*c,v=p*r+B*i+b*c,q=y*r+h*i+z*c;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e;}}for(let t=0;t<n;++t)l[s+0]=u,l[s+1]=v,l[s+2]=q,s+=d;}}function p(e,f,o,r,s,n=1){if(!o)return void c$5(e,f,r,s,n);const i=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],g=i[4],B=i[5],h=i[6],m=i[8],b=i[9],z=i[10],S=!G$1(i),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],c=f[o+3];let u=a*r+g*n+m*i,v=p*r+B*n+b*i,q=y*r+h*n+z*i;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e;}}l[s+0]=u,l[s+1]=v,l[s+2]=q,l[s+3]=c,s+=d;}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],c=f[o+2],u=f[o+3];let v=a*r+g*i+m*c,q=p*r+B*i+b*c,M=y*r+h*i+z*c;if(S){const t=v*v+q*q+M*M;if(t<F&&t>k){const e=1/Math.sqrt(t);v*=e,q*=e,M*=e;}}for(let t=0;t<n;++t)l[s+0]=v,l[s+1]=q,l[s+2]=M,l[s+3]=u,s+=d;}}function y$2(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i;}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i;}}function g$2(t,i,c,l,d,g){for(const B of i.fieldNames){const i=t.vertexAttributes.get(B),h=t.indices.get(B);if(i&&h)switch(B){case"position":{i$b(3===i.size);const t=d.getField(B,i$c);t&&u$4(h,i.data,c,t,g);break}case"normal":{i$b(3===i.size);const t=d.getField(B,i$c);t&&a$8(h,i.data,l,t,g);break}case"uv0":{i$b(2===i.size);const t=d.getField(B,u$b);t&&n$5(h,i.data,t,g);break}case"color":{i$b(3===i.size||4===i.size);const t=d.getField(B,x$7);t&&y$2(h,i.data,i.size,t,g);break}case"symbolColor":{i$b(3===i.size||4===i.size);const t=d.getField(B,x$7);t&&y$2(h,i.data,i.size,t,g);break}case"tangent":{i$b(4===i.size);const t=d.getField(B,c$b);t&&p(h,i.data,l,t,g);break}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c$4(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=t$g`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=t$g`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,c=s.sliceHighlightDisabled?t$g`#define highlightSlice(_color_, _pos_) (_color_)`:t$g`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(c);}else {const i=t$g`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i);}}function r$b(a,o,c,l){o.slicePlaneEnabled&&(r$g(c)?(l?(c$9(t$f,c.origin,l),a.setUniform3fv("slicePlaneOrigin",t$f)):a.setUniform3fv("slicePlaneOrigin",c.origin),a.setUniform3fv("slicePlaneBasis1",c.basis1),a.setUniform3fv("slicePlaneBasis2",c.basis2)):(a.setUniform3fv("slicePlaneBasis1",f$7),a.setUniform3fv("slicePlaneBasis2",f$7),a.setUniform3fv("slicePlaneOrigin",f$7)));}const t$f=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$4({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(t$g`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(t$g`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}function r$a(c){return !!i$d("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$8(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.vertex.include(i$4,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[t$g`
    vec3 calculateVPos() {
      ${n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,t$g`
    vec3 subtractOrigin(vec3 _pos) {
      ${n.instancedDoublePrecision?t$g`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,t$g`
    vec3 dpNormal(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,t$g`
    vec3 dpNormalView(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,n.vertexTangents?t$g`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:t$g``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4]);}!function(e){class i{}function r(e,i){r$l(i,t$e,a$7,3),e.setUniform3fv("viewOriginHi",t$e),e.setUniform3fv("viewOriginLo",a$7);}e.Uniforms=i,e.bindCustomOrigin=r;}(o$8||(o$8={}));const t$e=n$a(),a$7=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$9(a){a.vertex.code.add(t$g`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),a.vertex.code.add(t$g`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(t$g`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(t$g`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(t$g`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(t$g`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),a.vertex.code.add(t$g`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$d(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(r$9),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(t$g`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?t$g`vec3 worldNormal = normalize(worldPos + localOrigin);`:t$g`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?t$g`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:t$g`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(t$g`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}function l$4(e,r,t){if(!r.verticalOffset)return;const l=c$3(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*i,l.perDistance,l.minWorldLength,l.maxWorldLength);}function c$3(e,r,t,l=i$3){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const i$3={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$c=r$i(1,1,0,1),o$7=r$i(1,0,1,1);function r$8(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t$c).add("unoccludedHighlightFlag","vec4",o$7),e.fragment.code.add(t$g`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);}function g$1(e,i){e.bindTexture(i.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1]);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$7(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("cameraNearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(t$g`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `);}function t$b(e,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&e.bindTexture(r.terrainLinearDepthTexture,"terrainDepthTexture");}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$a(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(t$g`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(t$g`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(t$g`void forwardTextureCoordinates() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$9(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(t$g`#ifndef GL_EXT_shader_texture_lod
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
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$3(u,a){u.include(t$a,a),u.fragment.code.add(t$g`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(t$g`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(t$9),u.fragment.code.add(t$g`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
t$l(0,.6,.2);function r$6(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(u$3,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(t$g`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t$g`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t$g`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t$g`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t$g`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(t$g`float getBakedOcclusion() { return 1.0; }`),r.code.add(t$g`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t$g`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}function a$6(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$5(a){a.code.add(t$g`const float MAX_RGBA_FLOAT =
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
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$8(t){t.fragment.include(a$5),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(t$g`int chooseCascade(float _linearDepth, out mat4 mat) {
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
}`);}function i$2(a,e,t){e.shadowMappingEnabled&&e.shadowMap.bindView(a,t);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$4(e,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(t$g`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(t$g`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?t$g`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(t$g`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(t$g`
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

      ${o.vvInstancingEnabled?t$g`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(t$g`vec4 vvColor() { return vec4(1.0); }`);}function o$6(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors));}function t$7(v,e){o$6(v,e),e.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$5(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2]);}function r$5(i,n){i.setUniformMatrix4fv("proj",n);}function f$1(n,o,r){c$c(c$2,r,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",c$2);}const c$2=n$f();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$6{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$5{constructor(i,t,e=(()=>this.dispose())){this.release=e,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i);}dispose(){this._program=i$e(this._program),this._pipeline=this._config=null;}reload(t){i$e(this._program),this._program=this.initializeProgram(t);}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,t){}bindMaterial(i,t){}bindDraw(i){}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return 4}getPipelineState(i,t){return this._pipeline}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$4{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e$3(t={}){return (e,r)=>{var a,s;e._parameterNames=null!=(a=e._parameterNames)?a:[],e._parameterNames.push(r);const i=e._parameterNames.length-1,h=t.count||2,o=Math.ceil(Math.log2(h)),m=null!=(s=e._parameterBits)?s:[0];let n=0;for(;m[n]+o>16;)n++,n>=m.length&&m.push(0);e._parameterBits=m;const p=m[n],_=(1<<o)-1<<p;m[n]+=o,Object.defineProperty(e,r,{get(){return this[i]},set(t){if(this[i]!==t&&(this[i]=t,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~_|+t<<p&_,"number"!=typeof t&&"boolean"!=typeof t))throw "Configuration value for "+r+" must be boolean or number, got "+typeof t}});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$4 extends n$g{constructor(e,t,i){super(e,t.generateSource("vertex"),t.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new n$9({deallocator:null}),this._fragmentUniforms=u$c()?t.fragmentUniforms.entries:null;}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(t,r){if(t$i(t)||null==t.glName){const e=this._textures.get(r);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(r)),null}let s=this._textures.get(r);return null==s?(s=this._allocTextureUnit(t),this._textures.set(r,s)):s.texture=t,this._context.useProgram(this),this.setUniform1i(r,s.unit),this._context.bindTexture(t,s.unit),s.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit);})),r$g(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}));}_allocTextureUnit(e){return {texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f={mask:255},c$1={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t$3={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$4(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(t$g`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("cameraNearFar","vec2"),a.vertex.code.add(t$g`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):a.vertex.code.add(t$g`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$2(e){e.vertex.code.add(t$g`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$4(r,o){o.linearDepth?r.vertex.code.add(t$g`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(t$g`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$4(o){const d=t$g`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$3(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(t$g`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(o$4),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(t$g`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(t$g`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$2(o){o.attributes.add("position","vec3"),o.vertex.code.add(t$g`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$3(l){l.vertex.code.add(t$g`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${t$g.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${t$g.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${t$g.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${t$g.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$3(r,l){l.symbolColor?(r.include(l$3),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(t$g`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(t$g`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$2(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(t$g`void forwardVertexColor() { vColor = color; }`),r.vertex.code.add(t$g`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):r.vertex.code.add(t$g`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(o,r){o.include(o$2),o.vertex.include(i$4,r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(t$g`vec3 positionWorldCameraRelative() {
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
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(t$g`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`);}!function(i){class m{constructor(){this.worldFromModel_RS=e$9(),this.worldFromModel_TH=n$a(),this.worldFromModel_TL=n$a();}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=n$a(),this.worldFromView_TL=n$a(),this.viewFromCameraRelative_RS=e$9(),this.projFromView=e$a();}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL);}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS);}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s;}(d||(d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$2(l,e){0===e.normalType||1===e.normalType?(l.include(o$3,e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(t$g`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(d,e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(t$g`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?t$g`normalize(vPositionWorldCameraRelative);`:t$g`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(t$g`void forwardNormal() {}`);}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r);}o.bindUniforms=r;}(l$2||(l$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(e,o){e.fragment.include(a$5),3===o.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(t$g`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===o.output&&e.fragment.code.add(t$g`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$2(u,c){const p=u.vertex.code,v=u.fragment.code;1!==c.output&&3!==c.output||(u.include(r$4,{linearDepth:!0}),u.include(t$a,c),u.include(e$4,c),u.include(e$1,c),u.include(c$4,c),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$g`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(r$d,c),v.add(t$g`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(u.include(r$4,{linearDepth:!1}),u.include(o$3,c),u.include(l$2,c),u.include(t$a,c),u.include(e$4,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(t$g`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?t$g`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(c$4,c),u.include(r$d,c),v.add(t$g`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?t$g`
            vec3 normal = screenDerivativeNormal(vPositionView);`:t$g`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(u.include(r$4,{linearDepth:!1}),u.include(t$a,c),u.include(e$4,c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(t$g`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(c$4,c),u.include(r$d,c),u.include(r$8),v.add(t$g`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$3(a){a.include(a$5),a.code.add(t$g`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$3(n,a){const r=n.fragment;a.vertexTangents?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(t$g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(t$g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(t$g`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),0!==a.attributeTextureCoordinates&&(n.include(u$3,a),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(t$g`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o$1(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(t$g`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(t$g`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$2(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(t$g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(t$g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(t$g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(t$g`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(t$g`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$2(t){const a=t.fragment.code;a.add(t$g`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(t$g`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(t$g`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t){t.vertex.code.add(t$g`const float PI = 3.141592653589793;`),t.fragment.code.add(t$g`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a$2(a,n){const r=a.fragment.code;a.include(t$1),3===n.pbrMode||4===n.pbrMode?(r.add(t$g`
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
    `),r.add(t$g`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(t$g`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(t$g`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(t$g`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
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
}`)):1!==n.pbrMode&&2!==n.pbrMode||(a.include(t$2),r.add(t$g`struct PBRShadingInfo
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
};`),r.add(t$g`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(t$g`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(t$g`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(t$g`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(t$g`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l$1(l,d){const c=l.fragment;l.include(n$1),l.include(o$1,d),0!==d.pbrMode&&l.include(a$2,d),l.include(n$2,d),d.receiveShadows&&l.include(t$8,d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(t$1),c.code.add(t$g`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.code.add(t$g`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===d.viewingMode?t$g`normalize(vPosWorld)`:t$g`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),c.code.add(t$g`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(t$g`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(t$g`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(t$g`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(t$g`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(t$g`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(t$g`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?t$g`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:t$g`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r$1(r,e){const m=r.fragment;m.code.add(t$g`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(t$g`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(t$g`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(t$g`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u$1(u,o){const r=t$g`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;c$d()&&(u.fragment.code.add(r),u.vertex.code.add(r));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.code.add(t$g`vec4 premultiplyAlpha(vec4 v) {
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
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i$1(i){i.include(e),i.code.add(t$g`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${t$g.int(1)}) {
        return allMixed;
      }
      else if (mode == ${t$g.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$g.int(3)}) {
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

      if (mode == ${t$g.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${t$g.int(3)}) {
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
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=s$6.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r{constructor(){this.includedModules=new Map;}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r));}}class n extends r{constructor(){super(...arguments),this.vertex=new o,this.fragment=new o,this.attributes=new a$1,this.varyings=new c,this.extensions=new u,this.constants=new h$1;}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?l:m,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s{constructor(){this._entries=new Map;}add(e,t,r){const n=`${e}_${t}_${r}`;return this._entries.set(n,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class i{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class o extends r{constructor(){super(...arguments),this.uniforms=new s,this.code=new i,this.constants=new h$1;}get builder(){return this}}class a$1{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h$1{constructor(){this._entries=[];}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h$1.numberToFloatStr(r);break;case"int":n=h$1.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h$1.numberToFloatStr(r[0])},                            ${h$1.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h$1.numberToFloatStr(r[0])},                            ${h$1.numberToFloatStr(r[1])},                            ${h$1.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h$1.numberToFloatStr(r[0])},                            ${h$1.numberToFloatStr(r[1])},                            ${h$1.numberToFloatStr(r[2])},                            ${h$1.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h$1.numberToIntStr(r[0])},                             ${h$1.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h$1.numberToIntStr(r[0])},                             ${h$1.numberToIntStr(r[1])},                             ${h$1.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h$1.numberToIntStr(r[0])},                             ${h$1.numberToIntStr(r[1])},                             ${h$1.numberToIntStr(r[2])},                             ${h$1.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h$1.numberToFloatStr(e))).join(", ")})`;}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function P$1(P){const _=new n,S=_.vertex.code,$=_.fragment.code;return _.include(u$1,{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(o$2),_.varyings.add("vpos","vec3"),_.include(e$4,P),_.include(o$8,P),_.include(t$d,P),0!==P.output&&7!==P.output||(_.include(o$3,P),_.include(r$4,{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(e$2),_.include(n$3,P),_.include(l$2,P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(t$a,P),_.include(a$4,P),_.include(r$3,P),_.include(r$2,P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(t$g`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${t$g.float(o$9)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?t$g`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${P.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(c$4,P),_.include(r$d,P),P.multipassTerrainEnabled&&(_.fragment.include(a$3),_.include(r$7,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(i$1),$.add(t$g`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$g`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?t$g`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$g`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(c$4,P),_.include(l$1,P),_.include(o$1,P),_.include(r$d,P),P.receiveShadows&&_.include(t$8,P),P.multipassTerrainEnabled&&(_.fragment.include(a$3),_.include(r$7,P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(r$6,P),_.include(a$2,P),_.fragment.include(i$1),_.include(r$1,P),$.add(t$g`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$g`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?t$g`
        vec3 normal = screenDerivativeNormal(localvpos);`:t$g`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?t$g`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$g`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?t$g`
              mat3 tangentSpace = ${P.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?t$g`vec3 normalGround = normalize(vpos + localOrigin);`:t$g`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$g``}
        ${1===P.pbrMode||2===P.pbrMode?t$g`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(u$2,P),_}const _=Object.freeze({__proto__:null,build:P$1});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class R extends t$5{initializeProgram(e){const t=R.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:r$a(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new n$4(e.rctx,i,o$a)}bindPass(e,t){var r,i;r$5(this.program,t.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),t$b(this.program,t)),7===l&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",P$3[e.colorMixMode])),0===l?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",P$3[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&a$6(this.program,e,this.configuration.isSchematic)):4===l&&g$1(this.program,t),t$7(this.program,e),l$4(this.program,e,t),B$2(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera);}bindDraw(e){const o=this.configuration.instancedDoublePrecision?r$f(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;f$1(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&o$5(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&o$8.bindCustomOrigin(this.program,o),r$b(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&i$2(this.program,e,o);}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return g$7({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?u$d:c$e(e),culling:L$1(r)&&s$c(r.cullFace),depthTest:{func:a$h(e)},depthWrite:i||o?r.writeDepth&&l$b:null,colorWrite:r$m,stencilWrite:r.sceneHasOcludees?f:null,stencilTest:r.sceneHasOcludees?t?t$3:c$1:null,polygonOffset:i||o?null:s$d(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function L$1(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}R.shader=new t$6(_,(()=>import('./DefaultMaterial.glsl-df18386c.js')));class H$1 extends t$4{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1;}}e$b([e$3({count:8})],H$1.prototype,"output",void 0),e$b([e$3({count:4})],H$1.prototype,"alphaDiscardMode",void 0),e$b([e$3({count:3})],H$1.prototype,"doubleSidedMode",void 0),e$b([e$3()],H$1.prototype,"isSchematic",void 0),e$b([e$3()],H$1.prototype,"vertexColors",void 0),e$b([e$3()],H$1.prototype,"offsetBackfaces",void 0),e$b([e$3()],H$1.prototype,"symbolColors",void 0),e$b([e$3()],H$1.prototype,"vvSize",void 0),e$b([e$3()],H$1.prototype,"vvColor",void 0),e$b([e$3()],H$1.prototype,"verticalOffset",void 0),e$b([e$3()],H$1.prototype,"receiveShadows",void 0),e$b([e$3()],H$1.prototype,"slicePlaneEnabled",void 0),e$b([e$3()],H$1.prototype,"sliceHighlightDisabled",void 0),e$b([e$3()],H$1.prototype,"receiveAmbientOcclusion",void 0),e$b([e$3()],H$1.prototype,"screenSizePerspective",void 0),e$b([e$3()],H$1.prototype,"textureAlphaPremultiplied",void 0),e$b([e$3()],H$1.prototype,"hasColorTexture",void 0),e$b([e$3()],H$1.prototype,"usePBR",void 0),e$b([e$3()],H$1.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$b([e$3()],H$1.prototype,"hasEmissionTexture",void 0),e$b([e$3()],H$1.prototype,"hasOcclusionTexture",void 0),e$b([e$3()],H$1.prototype,"hasNormalTexture",void 0),e$b([e$3()],H$1.prototype,"instanced",void 0),e$b([e$3()],H$1.prototype,"instancedColor",void 0),e$b([e$3()],H$1.prototype,"instancedDoublePrecision",void 0),e$b([e$3()],H$1.prototype,"vertexTangents",void 0),e$b([e$3()],H$1.prototype,"normalsTypeDerivate",void 0),e$b([e$3()],H$1.prototype,"writeDepth",void 0),e$b([e$3()],H$1.prototype,"sceneHasOcludees",void 0),e$b([e$3()],H$1.prototype,"transparent",void 0),e$b([e$3()],H$1.prototype,"enableOffset",void 0),e$b([e$3({count:3})],H$1.prototype,"cullFace",void 0),e$b([e$3({count:4})],H$1.prototype,"transparencyPassType",void 0),e$b([e$3()],H$1.prototype,"multipassTerrainEnabled",void 0),e$b([e$3()],H$1.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j$2(j){const E=new n,O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(o$2),E.varyings.add("vpos","vec3"),E.include(e$4,j),E.include(o$8,j),E.include(t$d,j),0!==j.output&&7!==j.output||(E.include(o$3,j),E.include(r$4,{linearDepth:!1}),j.offsetBackfaces&&E.include(e$2),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(t$a,j),E.include(a$4,j),E.include(r$3,j),E.include(r$2,j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(t$g`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${t$g.float(o$9)}) {
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
          ${j.multipassTerrainEnabled?t$g`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(c$4,j),E.include(r$d,j),j.multipassTerrainEnabled&&(E.fragment.include(a$3),E.include(r$7,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(i$1),_.add(t$g`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$g`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$g`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?t$g`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$g`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(c$4,j),E.include(l$1,j),E.include(o$1,j),E.include(r$d,j),j.receiveShadows&&E.include(t$8,j),j.multipassTerrainEnabled&&(E.fragment.include(a$3),E.include(r$7,j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(r$6,j),E.include(a$2,j),E.fragment.include(i$1),_.add(t$g`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?t$g`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?t$g`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:t$g`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?t$g`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:t$g`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${t$g`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?t$g`vec3 normalGround = normalize(vpos + localOrigin);`:t$g`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:t$g``}
        ${1===j.pbrMode||2===j.pbrMode?t$g`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),E.include(u$2,j),E}const E$1=Object.freeze({__proto__:null,build:j$2});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends R{initializeProgram(e){const s=a.shader.get(),t=this.configuration,l=s.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:r$a(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new n$4(e.rctx,l,o$a)}}a.shader=new t$6(E$1,(()=>import('./RealisticTree.glsl-8f4507d8.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y$1 extends a$9{constructor(e){super(e,P),this.supportsEdges=!0,this.techniqueConfig=new H$1,this.vertexBufferLayout=w$1(this.parameters),this.instanceBufferLayout=e.instanced?E(this.parameters):null;}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return !1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(r||a||s)?!!n||o:i?n?l:o:r||a||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<f$8),this.techniqueConfig}intersect(e,c,u,h,d,p,m){if(null!==this.parameters.verticalOffset){const e=h.camera;o$i(j$1,u[12],u[13],u[14]);let c=null;switch(h.viewingMode){case 1:c=j$4(D,j$1);break;case 2:c=r$j(D,A$1);}let m=0;if(null!==this.parameters.verticalOffset){const t=c$9(L,j$1,e.eye),i=s$b(t),s=d$5(t,t,1/i);let l=null;this.parameters.screenSizePerspective&&(l=z$3(c,s)),m+=V$1(e,i,this.parameters.verticalOffset,l,this.parameters.screenSizePerspective);}d$5(c,c,m),L$4(z,c,h.transform.inverseRotation),d=c$9(I$1,d,z),p=c$9(B,p,z);}h$2(e,c,h,d,p,_$1(h.verticalOffset),m);}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new O(e):null}createBufferWriter(){return new M$1(this.vertexBufferLayout,this.instanceBufferLayout)}}class O extends r$c{constructor(e){super({...e,...e.material.parameters});}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?a:R,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees});}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program);}}const P={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:e$9(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:d$2,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...n$6};class M$1{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){g$2(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s);}}function w$1(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=A$4().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}function E(e){let t=A$4();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const I$1=n$a(),B=n$a(),A$1=r$f(0,0,1),D=n$a(),z=n$a(),j$1=n$a(),L=n$a();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=s$6.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function x(e,t){const r=await g(e,t);return {resource:r,textures:await A(r.textureDefinitions,t)}}async function g(r,n){const i=r$g(n)&&n.streamDataRequester;if(i)return h(r,i,n);const u=await a$i(C$2(r,e$c(n)));if(!0===u.ok)return u.value.data;b$6(u.error),w(u.error);}async function h(e,r,n){const a=await a$i(r.request(e,"json",n));if(!0===a.ok)return a.value;b$6(a.error),w(a.error.details.url);}function w(e){throw new s$7("",`Request for object resource failed: ${e}`)}function v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else y.warn("Indexed geometries must specify faces"),n=!1;break}default:y.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(y.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function b(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=r$n.parse(l.version||"1.0","wosr");I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=e.textures;let h=0;const w=new Map;for(let i=0;i<y.length;i++){const e=y[i];if(!v(e))continue;const l=M(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)]);}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new b$3(e,t);o.push(r),w.set(l.texture,r);}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?U(j.alphaChannelUsage):void 0,i={ambient:e$d(e.diffuse),diffuse:e$d(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};r$g(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new y$1(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const T=new u$8(p,b);h+=b.position?b.position.length:0,r.push(T);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:j(r),numberOfVertices:h,lodThreshold:null}}function j(e){const t=B$3();return e.forEach((e=>{const r=e.boundingInfo;r$g(r)&&(h$8(t,r.getBBMin()),h$8(t,r.getBBMax()));})),t}async function A(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){y.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==U(l)},m=r$g(t)&&t.disableTextures?Promise.resolve(null):t$j(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function M(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new r$n(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function $(s,o){const i=q(a$j(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):x(i.url,o)),t=b(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):l$c(new n$h(o.streamDataRequester),i.url,o,o.usePBR)),u=m$5(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&r$g(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&J(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=K(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=K(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=K(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function K(e,t,s,a){const u=e.model,n=e$9(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$g(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$3()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=r$g(e.attributes.texCoord0),f=r$g(e.attributes.normal),p=Q(a.alphaMode);if(!c.has(i)){if(l){if(r$g(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==p};m.set(a.textureColor,new b$3(e.data,t));}if(r$g(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new b$3(e.data,e.parameters));}if(r$g(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new b$3(e.data,e.parameters));}if(r$g(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new b$3(e.data,e.parameters));}if(r$g(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new b$3(e.data,e.parameters));}}const o=a.color[0]**(1/o$j),n=a.color[1]**(1/o$j),d=a.color[2]**(1/o$j),x=a.emissiveFactor[0]**(1/o$j),g=a.emissiveFactor[1]**(1/o$j),h=a.emissiveFactor[2]**(1/o$j),b=r$g(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new y$1({...t,transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$g(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:r$g(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:r$g(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:r$g(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:r$g(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:r$g(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const x=H(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,F=r$o(i$c,O);e$e(F,e.attributes.position,e.transform);const A=[["position",{data:F.typedBuffer,size:F.elementCount,exclusive:!0}]],I=[["position",x]];if(r$g(e.attributes.normal)){const t=r$o(i$c,O);j$5(n,e.transform),f$9(t,e.attributes.normal,n),A.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["normal",x]);}if(r$g(e.attributes.tangent)){const t=r$o(c$b,O);j$5(n,e.transform),r$p(t,e.attributes.tangent,n),A.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["tangent",x]);}if(r$g(e.attributes.texCoord0)){const t=r$o(u$b,O);r$q(t,e.attributes.texCoord0),A.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["uv0",x]);}if(r$g(e.attributes.color)){const t=r$o(x$7,O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$b?f$a(t,e.attributes.color,255):e.attributes.color instanceof x$7?e$f(t,e.attributes.color):e.attributes.color instanceof L$5&&f$a(t,e.attributes.color,1/256);else {t$m(t,255,255,255,255);const r=new O$2(t.buffer,0,4);e.attributes.color instanceof i$c?r$r(r,e.attributes.color,255):e.attributes.color instanceof O$2?e$g(r,e.attributes.color):e.attributes.color instanceof E$4&&r$r(r,e.attributes.color,1/256);}A.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["color",x]);}const k=new u$8(A,I);d.stageResources.geometries.push(k),d.stageResources.materials.push(c.get(i)),l&&(r$g(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),r$g(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),r$g(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),r$g(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),r$g(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=O;const L=k.boundingInfo;r$g(L)&&(h$8(d.boundingBox,L.getBBMin()),h$8(d.boundingBox,L.getBBMax()));}));})),l}function Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function H(e,t){switch(t){case 4:return n$i(e);case 5:return o$k(e);case 6:return i$f(e)}}function J(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(t$i(o))return;const x=i.attributes.position,g=x.count,b=n$a(),v=n$a(),y=n$a(),B=r$o(x$7,g),M=r$o(i$c,g),w=h$9(e$a(),i.transform);for(let s=0;s<g;s++){x.getVec(s,v),o.getVec(s,b),I$3(v,v,i.transform),c$9(y,v,t.center),i$g(y,y,t.radius);const a=y[2],u=s$b(y),p=Math.min(.45+.55*u*u,1);i$g(y,y,t.radius),I$3(y,y,w),j$4(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&y$4(y,y,b,a>-1?.2:Math.min(-4*a-3.8,1)),M.setVec(s,y),B.set(s,0,255*p),B.set(s,1,255*p),B.set(s,2,255*p),B.set(s,3,255);}i.attributes.normal=M,i.attributes.color=B;}}}

var objectResourceUtils = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fetch: $,
      gltfToEngineResources: K,
      parseUrl: q
});

export { P$1 as P, j$2 as j, objectResourceUtils as o };
