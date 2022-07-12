import { C as s, S as has, s as s$1, E as r, G as r$1, T as i, e } from './_virtual_index-64b818a8.js';
import { t as t$1, M as M$1, L, D, u as u$2, G, P, U } from './enums-fb707d37.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o=s.getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return "Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return "Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return "Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return "WebGL context has been lost";default:return "Unknown error"}}const n$1=!!has("enable-feature:webgl-debug");function a(){return n$1}function c$1(){return n$1}function u$1(r){if(a()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o.error(new s$1("webgl-error","WebGL error occured",{message:a,stack:c}));}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c=4;class u{constructor(t,e,i=null){if(this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,t.instanceCounter.increment(t$1.Texture,this),this._descriptor={target:M$1.TEXTURE_2D,samplingMode:L.LINEAR,wrapMode:D.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1,...e},t.type!==r.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),A(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===M$1.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i);}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(t$1.Texture,this));}release(){this.dispose();}resize(t,e){const i=this._descriptor;if(i.width!==t||i.height!==e){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");i.width=t,i.height=e,this._descriptor.target===M$1.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null);}}_setDataCubeMap(t=null){for(let e=M$1.TEXTURE_CUBE_MAP_POSITIVE_X;e<=M$1.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e);}setData(t){this._setData(t);}_setData(t,i){if(!this._context||!this._context.gl)return;const a=this._context.gl;this._glName||(this._glName=a.createTexture()),void 0===t&&(t=null);const s=this._descriptor;i??(i=s.target);const o=A(i);null===t&&(s.width=s.width||c,s.height=s.height||c,o&&(s.depth=s.depth??1));const n$1=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(u.TEXTURE_UNIT_FOR_UPDATES),u._validateTexture(this._context,s),this._configurePixelStorage();const p=s.pixelFormat;let h=s.internalFormat?s.internalFormat:this._deriveInternalFormat(p,s.dataType);if(M(t)){let e=t.width,n=t.height;const p=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,n=t.videoHeight),s.width&&s.height,o&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(i,h,s.hasMipmap,e,n,p),this._texImage(i,0,h,e,n,p,t),u$1(a),s.hasMipmap&&this.generateMipmap(),void 0===s.width&&(s.width=e),void 0===s.height&&(s.height=n),o&&void 0===s.depth&&(s.depth=p);}else {const{width:n$1,height:p,depth:_}=s;if(null!=n$1&&null!=p||console.error("Width and height must be specified!"),o&&null==_&&console.error("Depth must be specified!"),s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(i,h,s.hasMipmap,n$1,p,_),a.DEPTH24_STENCIL8&&h===a.DEPTH_STENCIL&&(h=a.DEPTH24_STENCIL8),g(t)){const e=t.levels,r=I(i,n$1,p,_),o=Math.min(r-1,e.length-1);n(a)?a.texParameteri(s.target,a.TEXTURE_MAX_LEVEL,o):s.hasMipmap=s.hasMipmap&&r===e.length;const l=h;if(!T(l))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((t,r,a,s)=>{const o=e[Math.min(t,e.length-1)];this._compressedTexImage(i,t,l,r,a,s,o);}),o);}else r$1(t)?(this._texImage(i,0,h,n$1,p,_,t),u$1(a),s.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((t,e,s,o)=>{this._texImage(i,t,h,e,s,o,null),u$1(a);}));}u._applySamplingMode(a,this._descriptor),u._applyWrapMode(a,this._descriptor),u._applyAnisotropicFilteringParameters(this._context,this._descriptor),u$1(a),this._context.bindTexture(n$1,u.TEXTURE_UNIT_FOR_UPDATES);}updateData(t,e,i,r,a,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl,n=this._descriptor,{pixelFormat:p,internalFormat:h,dataType:_,isImmutable:l,target:m}=n;if(l&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const d=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||r>n.width||a>n.height||e+r>n.width||i+a>n.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),M(s)?o.texSubImage2D(m,t,e,i,p,_,s):g(s)?o.compressedTexSubImage2D(m,t,e,i,r,a,h,s.levels[t]):o.texSubImage2D(m,t,e,i,r,a,p,_,s),this._context.bindTexture(d,u.TEXTURE_UNIT_FOR_UPDATES);}updateData3D(t,e,i,r,a,s,o,n$1){n$1||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._context.gl;if(!n(p))throw new Error("3D textures are not supported in WebGL1");const h=this._descriptor,{pixelFormat:_,dataType:l,isImmutable:m,target:c,internalFormat:E}=h;if(m&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");A(c)||console.warn("Attempting to set 3D texture data on a non-3D texture");const T=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(u.TEXTURE_UNIT_FOR_UPDATES),(e<0||i<0||r<0||a>h.width||s>h.height||o>h.depth||e+a>h.width||i+s>h.height||r+o>h.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),g(n$1))n$1=n$1.levels[t],p.compressedTexSubImage3D(c,t,e,i,r,a,s,o,E,n$1);else {const h=n$1;p.texSubImage3D(c,t,e,i,r,a,s,o,_,l,h);}this._context.bindTexture(T,u.TEXTURE_UNIT_FOR_UPDATES);}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,u._validateTexture(this._context,t);}t.samplingMode===L.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=L.LINEAR_MIPMAP_NEAREST):t.samplingMode===L.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=L.NEAREST_MIPMAP_NEAREST);const e=this._context.bindTexture(this,u.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(u.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,u.TEXTURE_UNIT_FOR_UPDATES);}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0);}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,u._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0);}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(u._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(u._applyWrapMode(t,e),this._wrapModeDirty=!1);}_deriveInternalFormat(t,e){if(this._context.type===r.WEBGL1)return t;switch(e){case G.FLOAT:switch(t){case P.RGBA:return U.RGBA32F;case P.RGB:return U.RGB32F;default:throw new Error("Unable to derive format")}case G.UNSIGNED_BYTE:switch(t){case P.RGBA:return U.RGBA8;case P.RGB:return U.RGB8}default:return t}}_configurePixelStorage(){const t=this._context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0);}_texStorage(t,e,i,r,a,s){const o=this._context.gl;if(!n(o))throw new Error("Immutable textures are not supported in WebGL1");if(!E(e))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const n$1=i?I(t,r,a,s):1;A(t)?o.texStorage3D(t,n$1,e,r,a,s):o.texStorage2D(t,n$1,e,r,a),this._wasImmutablyAllocated=!0;}_texImage(t,r$2,s,o,n,p,h){const _=this._context.gl;let l=null;const m=this._context.type===r.WEBGL2,d=A(t),{isImmutable:c,pixelFormat:u,dataType:E}=this._descriptor;if(m&&(l=_),m||!M(h))if(c){if(r$1(h)){const e=h;d?l.texSubImage3D(t,r$2,0,0,0,o,n,p,u,E,e):_.texSubImage2D(t,r$2,0,0,o,n,u,E,e);}}else {const e$1=e(h);d?l.texImage3D(t,r$2,s,o,n,p,0,u,E,e$1):_.texImage2D(t,r$2,s,o,n,0,u,E,e$1);}else _.texImage2D(t,0,s,u,E,h);}_compressedTexImage(t,i,r$2,s,o,n,p){const h=this._context.gl;let _=null;const l=A(t),m=this._descriptor.isImmutable;if(l){if(this._context.type!==r.WEBGL2)throw new Error("3D textures are not supported in WebGL1");_=h;}m?r$1(p)&&(l?_.compressedTexSubImage3D(t,i,0,0,0,s,o,n,r$2,p):h.compressedTexSubImage2D(t,i,0,0,s,o,r$2,p)):l?_.compressedTexImage3D(t,i,r$2,s,o,n,0,p):h.compressedTexImage2D(t,i,r$2,s,o,0,p);}_forEachMipmapLevel(t,e=1/0){let{width:i,height:r,depth:a,hasMipmap:s,target:n}=this._descriptor;const p=n===M$1.TEXTURE_3D;for(let o=0;t(o,i,r,a),s&&(1!==i||1!==r||p&&1!==a)&&!(o>=e);++o)i=Math.max(1,i>>1),r=Math.max(1,r>>1),p&&(a=Math.max(1,a>>1));}static _validateTexture(e,i$1){(i$1.width<0||i$1.height<0||i$1.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=n(e.gl),a=i(i$1.width)&&i(i$1.height);r||!i$1.isImmutable&&!A(i$1.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||a||("number"==typeof i$1.wrapMode?i$1.wrapMode!==D.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):i$1.wrapMode.s===D.CLAMP_TO_EDGE&&i$1.wrapMode.t===D.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i$1.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"));}static _applySamplingMode(t,e){let i=e.samplingMode,r=e.samplingMode;i===L.LINEAR_MIPMAP_NEAREST||i===L.LINEAR_MIPMAP_LINEAR?(i=L.LINEAR,e.hasMipmap||(r=L.LINEAR)):i!==L.NEAREST_MIPMAP_NEAREST&&i!==L.NEAREST_MIPMAP_LINEAR||(i=L.NEAREST,e.hasMipmap||(r=L.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r);}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t));}static _applyAnisotropicFilteringParameters(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1);}}function E(t){return t in U}function T(t){return t in u$2}function g(t){return r$1(t)&&"type"in t&&"compressed"===t.type}function x(t){return r$1(t)&&"byteLength"in t}function M(t){return r$1(t)&&!g(t)&&!x(t)}function A(t){return t===M$1.TEXTURE_3D||t===M$1.TEXTURE_2D_ARRAY}function I(t,e,i,r=1){let a=Math.max(e,i);return t===M$1.TEXTURE_3D&&(a=Math.max(a,r)),Math.round(Math.log(a)/Math.LN2)+1}u.TEXTURE_UNIT_FOR_UPDATES=0;

export { u$1 as a, a as b, c$1 as c, n, u };
