import { o as o$4 } from './_commonjsHelpers-3f70742c.js';
import { n as n$5, u, f as f$1, r as r$5, i, a as i$1 } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r$4=33984;var e$1;!function(r){r[r.Texture=0]="Texture",r[r.Buffer=1]="Buffer",r[r.VAO=2]="VAO",r[r.Program=3]="Program",r[r.Framebuffer=4]="Framebuffer",r[r.Renderbuffer=5]="Renderbuffer",r[r.COUNT=6]="COUNT";}(e$1||(e$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var r$3=o$4((function(e){var r;void 0!==(r=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(e.exports=r);})),t$1=o$4((function(e){var r;void 0!==(r=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(e.exports=r);})),o$3=o$4((function(e){var r;void 0!==(r=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(e.exports=r);}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
n$5.getLogger("esri/views/webgl");function o$2(r){}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n$4=n$5.getLogger("esri.views.webgl.BufferObject");class h$1{constructor(e,t,i,n,h){this._context=e,this.bufferType=t,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(e$1.Buffer,this),this._glName=this._context.gl.createBuffer(),o$2(this._context.gl),n&&this.setData(n,h);}static createIndex(e,t,i,s){return new h$1(e,34963,t,i,s)}static createVertex(e,t,i){return new h$1(e,34962,t,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){var e;if(null!=(e=this._context)&&e.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null;}this._context.instanceCounter.decrement(e$1.Buffer,this),this._context=null;}else this._glName&&n$4.warn("Leaked WebGL buffer object");}setData(i,s){if(!i)return;if("number"==typeof i){if(i<0&&n$4.error("Buffer size cannot be negative!"),34963===this.bufferType&&s)switch(this._indexType=s,this._size=i,s){case 5123:i*=2;break;case 5125:i*=4;}}else {let s=i.byteLength;u(i)&&(s/=2,this._indexType=5123),f$1(i)&&(s/=4,this._indexType=5125),this._size=s;}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);this._context.gl.bufferData(this.bufferType,i,this.usage),this._context.bindVAO(r);}setSubData(i,s=0,r=0,h=i.byteLength){if(!i)return;(s<0||s>=this._size)&&n$4.error("offset is out of range!");let o=s,f=r,u$1=h,c=i.byteLength;u(i)&&(c/=2,o*=2,f*=2,u$1*=2),f$1(i)&&(c/=4,o*=4,f*=4,u$1*=4),void 0===h&&(h=c-1),r>=h&&n$4.error("end must be bigger than start!"),s+r-h>this._size&&n$4.error("An attempt to write beyond the end of the buffer!");const a=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const _=this._context.gl,g=ArrayBuffer.isView(i)?i.buffer:i,l=0===f&&u$1===i.byteLength?g:g.slice(f,u$1);_.bufferSubData(this.bufferType,o,l),this._context.bindVAO(a);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$3(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=4,o$1=0;class r$2{constructor(t,e,a=null){this._context=null,this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(e$1.Texture,this),this._context=t,this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},this.setData(a);}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){if(this._context&&this._context.gl){if(this._glName){const t=this._context.gl;this._context.unbindTextureAllUnits(this),t.deleteTexture(this._glName),this._glName=null;}this._context.instanceCounter.decrement(e$1.Texture,this),this._context=null;}}release(){this.dispose();}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,this.setData(null));}setData(e){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===e&&(e=null),null===e&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const a=this._context.getBoundTexture(o$1);this._context.bindTexture(this,o$1);const p=this._descriptor;r$2._validateTexture(this._context,p),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0);const h=p.pixelFormat;let l=p.internalFormat?p.internalFormat:h;if(e instanceof ImageData||e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement){let t=e.width,a=e.height;e instanceof HTMLVideoElement&&(t=e.videoWidth,a=e.videoHeight),p.width&&p.height&&console.assert(t===p.width&&a===p.height),i.texImage2D(i.TEXTURE_2D,0,l,h,p.dataType,e),p.hasMipmap&&this.generateMipmap(),void 0===p.width&&(p.width=t),void 0===p.height&&(p.height=a);}else {null!=p.width&&null!=p.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&l===i.DEPTH_STENCIL&&(l=i.DEPTH24_STENCIL8);let a=p.width,s=p.height;if(n$2(e)){const t=Math.round(Math.log(Math.max(a,s))/Math.LN2)+1;p.hasMipmap=p.hasMipmap&&t===e.levels.length;for(let o=0;;++o){const t=e.levels[Math.min(o,e.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,o,l,a,s,0,t),1===a&&1===s||!p.hasMipmap)break;a=Math.max(1,a>>1),s=Math.max(1,s>>1);}}else if(r$5(e))i.texImage2D(i.TEXTURE_2D,0,l,a,s,0,h,p.dataType,e),p.hasMipmap&&this.generateMipmap();else for(let t=0;i.texImage2D(i.TEXTURE_2D,t,l,a,s,0,h,p.dataType,null),(1!==a||1!==s)&&p.hasMipmap;++t)a=Math.max(1,a>>1),s=Math.max(1,s>>1);}r$2._applySamplingMode(i,this._descriptor),r$2._applyWrapMode(i,this._descriptor),r$2._applyAnisotropicFilteringParameters(this._context,this._descriptor),a&&this._context.bindTexture(a,o$1);}updateData(t,e,i,a,s,r){r||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,p=this._descriptor,h=this._context.getBoundTexture(o$1);this._context.bindTexture(this,o$1),(e<0||i<0||a>p.width||s>p.height||e+a>p.width||i+s>p.height)&&console.error("An attempt to update out of bounds of the texture!"),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipped?1:0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.preMultiplyAlpha?1:0),r instanceof ImageData||r instanceof HTMLImageElement||r instanceof HTMLCanvasElement||r instanceof HTMLVideoElement?n.texSubImage2D(n.TEXTURE_2D,t,e,i,p.pixelFormat,p.dataType,r):n.texSubImage2D(n.TEXTURE_2D,t,e,i,a,s,p.pixelFormat,p.dataType,r),this._context.bindTexture(h,o$1);}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,r$2._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.getBoundTexture(o$1);this._context.bindTexture(this,o$1);const i=this._context.gl;i.generateMipmap(i.TEXTURE_2D),this._context.bindTexture(e,o$1);}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,r$2._validateTexture(this._context,this._descriptor),this._samplingModeDirty=!0);}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,r$2._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0);}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(r$2._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(r$2._applyWrapMode(t,e),this._wrapModeDirty=!1);}static _validateTexture(t,i$1){(i$1.width<0||i$1.height<0)&&console.error("Negative dimension parameters are not allowed!");const s=i(i$1.width)&&i(i$1.height);n$3(t.gl)||s||("number"==typeof i$1.wrapMode?33071!==i$1.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i$1.wrapMode.s&&33071===i$1.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i$1.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"));}static _applySamplingMode(t,e){let i=e.samplingMode,a=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(a=9728)),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a);}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode.t));}static _applyAnisotropicFilteringParameters(t,e){var i;const a=t.capabilities.textureFilterAnisotropic;if(!a)return;const s=t.gl;s.texParameterf(s.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1);}}function n$2(e){return r$5(e)&&"type"in e&&"compressed"===e.type}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(e,r){return e.vertexBuffers[r].size/t(e.layout[r])}function t(e){return e[0].stride}function f(e,r,t,n,i){const s=e.gl,o=e.capabilities.instancing;e.bindBuffer(t);for(const a of n){const e=r[a.name],t=(i||(0+a.baseInstance?a.baseInstance:0))*a.stride;if(void 0===e&&console.error(`There is no location for vertex attribute '${a.name}' defined.`),a.baseInstance&&!a.divisor&&console.error(`Vertex attribute '${a.name}' uses baseInstanceOffset without divisor.`),a.count<=4)s.vertexAttribPointer(e,a.count,a.type,a.normalized,a.stride,a.offset+t),s.enableVertexAttribArray(e),a.divisor&&a.divisor>0&&o&&o.vertexAttribDivisor(e,a.divisor);else if(9===a.count)for(let r=0;r<3;r++)s.vertexAttribPointer(e+r,3,a.type,a.normalized,a.stride,a.offset+12*r+t),s.enableVertexAttribArray(e+r),a.divisor&&a.divisor>0&&o&&o.vertexAttribDivisor(e+r,a.divisor);else if(16===a.count)for(let r=0;r<4;r++)s.vertexAttribPointer(e+r,4,a.type,a.normalized,a.stride,a.offset+16*r+t),s.enableVertexAttribArray(e+r),a.divisor&&a.divisor>0&&o&&o.vertexAttribDivisor(e+r,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count);}}function d(e,r,t,n){const i=e.gl,s=e.capabilities.instancing;e.bindBuffer(t);for(const o of n){const e=r[o.name];if(o.count<=4)i.disableVertexAttribArray(e),o.divisor&&o.divisor>0&&s&&s.vertexAttribDivisor(e,0);else if(9===o.count)for(let r=0;r<3;r++)i.disableVertexAttribArray(e+r),o.divisor&&o.divisor>0&&s&&s.vertexAttribDivisor(e+r,0);else if(16===o.count)for(let r=0;r<4;r++)i.disableVertexAttribArray(e+r),o.divisor&&o.divisor>0&&s&&s.vertexAttribDivisor(e+r,0);else console.error("Unsupported vertex attribute element count: "+o.count);}e.unbindBuffer(34962);}function l(e){switch(e){case 6406:case 6409:case 36168:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33776:case 33777:return .5;case 33778:case 33779:return 1;case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return .5;case 37490:case 37491:case 37496:case 37497:return 1}return 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n$1=n$5.getLogger("esri.views.webgl.VertexArrayObject");class o{constructor(t,e,s,r,n){this._context=t,this._locations=e,this._layout=s,this._buffers=r,this._indexBuffer=n,this._glName=null,this._initialized=!1,t.instanceCounter.increment(e$1.VAO,this);}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].size),this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return void((this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&n$1.warn("Leaked WebGL VAO"));if(this._glName){var s,r;const t=null==(s=this._context)||null==(r=s.capabilities)?void 0:r.vao;t?(t.deleteVertexArray(this._glName),this._glName=null):n$1.warn("Leaked WebGL VAO");}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer=i$1(this._indexBuffer);}this._context.instanceCounter.decrement(e$1.VAO,this),this._context=null;}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e;}this._initialized=!0;}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout());}_bindLayout(){const t=this._buffers,e=!!this._context.capabilities.vao,i=this._layout,r=this._indexBuffer;t||n$1.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const f$1 in t){const e=t[f$1];e||n$1.error("Vertex buffer is uninitialized!");const r=i[f$1];r||n$1.error("Vertex element descriptor is empty!"),f(this._context,this._locations,e,r);}r&&(e?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r));}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout();}_unbindLayout(){const t=this._buffers,e=this._layout;t||n$1.error("Vertex buffer dictionary is empty!");for(const i in t){const s=t[i];s||n$1.error("Vertex buffer is uninitialized!");const o=e[i];d(this._context,this._locations,s,o);}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e{constructor(e,n){this._context=e,this._desc=n,this._context.instanceCounter.increment(e$1.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,n.internalFormat,n.width,n.height);}get descriptor(){return this._desc}resize(t,e){const n=this._desc;if(n.width===t&&n.height===e)return;n.width=t,n.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,n.internalFormat,n.width,n.height);}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(e$1.Renderbuffer,this),this._context=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=n$5.getLogger("esri.views.webgl.FrameBufferObject");class h{constructor(t,r,n,o){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...r},t.instanceCounter.increment(e$1.Framebuffer,this),n){let e;var c;if(Array.isArray(n))for(const s of n){const{attachmentPoint:r,texture:h}=s,n=h instanceof r$2?h:new r$2(t,h);e=n.descriptor,this._colorAttachments.set(r,n),this._validateColorAttachmentPoint(r),this._validateTextureDimensions(e,this._desc);}else n instanceof r$2?(e=n.descriptor,this._colorAttachments.set(36064,n)):(e=n,this._colorAttachments.set(36064,new r$2(t,n))),0!==(null==(c=this._desc)?void 0:c.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateTextureDimensions(e,this._desc);}if(o instanceof e){var a;const t=null!=(a=this._desc.depthStencilTarget)?a:3;2===t?this._stencilAttachment=o:1===t||3===t?this._depthAttachment=o:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),h._validateBufferDimensions(o.descriptor,this._desc);}else if(o){let t;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),o instanceof r$2?(this._depthStencilTexture=o,t=this._depthStencilTexture.descriptor):(t=o,this._depthStencilTexture=new r$2(this._context,t)),this._validateTextureDimensions(t,this._desc);}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();if(this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null;}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(e$1.Framebuffer,this),this._desc=null;}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&t instanceof r$2?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&e instanceof r$2?e:null}attachColorTexture(t,e=36064){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;if(this._validateTextureDimensions(i,this._desc),this._disposeColorAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl;i.framebufferTexture2D(i.FRAMEBUFFER,e,i.TEXTURE_2D,t.glName,0);}this._colorAttachments.set(e,t);}detachColorTexture(t=36064){const e=this._colorAttachments.get(t);if(e instanceof r$2){const i=e;if(this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,t,e.TEXTURE_2D,null,0);}return this._colorAttachments.delete(t),i}}attachDepthStencilTexture(t){if(!t)return;const e=t.descriptor;if(34041!==e.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==e.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(e,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,t.glName,0);}this._depthStencilTexture=t;}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;this._context.gl.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0);}return this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(!t)return;const e=t.descriptor;if(34041!==e.internalFormat&&33189!==e.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),h._validateBufferDimensions(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===e.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,t.glName);}this._depthAttachment=t;}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null);}return this._depthAttachment=null,e}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture();}copyToTexture(t,e,i,s,r,h,n){(t<0||e<0||r<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!");const o=this._desc,c=n.descriptor;3553!==n.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>o.width||e+s>o.height||r+i>c.width||h+s>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const a=this._context;a.bindTexture(n,0),a.bindFramebuffer(this),a.gl.copyTexSubImage2D(3553,0,r,h,t,e,i,s);}readPixels(t,e,i,s,r,h,n){(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this);this._context.gl.readPixels(t,e,i,s,r,h,n);}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e);})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e);})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1;}}initializeAndBind(){var t,e$1,r,h;const o=this._context.gl;if(this._initialized)return void o.bindFramebuffer(o.FRAMEBUFFER,this.glName);this._glName&&o.deleteFramebuffer(this._glName);const c=this._context,a=o.createFramebuffer(),l=this._desc,d=null!=(t=l.colorTarget)?t:1,_=null!=(e$1=l.width)?e$1:1,f=null!=(r=l.height)?r:1;if(o.bindFramebuffer(o.FRAMEBUFFER,a),0===this._colorAttachments.size)if(0===d)this._colorAttachments.set(36064,n(c,l));else {const t=new e(c,{internalFormat:32854,width:_,height:f});this._colorAttachments.set(36064,t);}this._colorAttachments.forEach(((t,e)=>{t&&(t instanceof r$2?o.framebufferTexture2D(o.FRAMEBUFFER,e,o.TEXTURE_2D,t.glName,0):o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,t.glName));}));const u=null!=(h=l.depthStencilTarget)?h:0;switch(u){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new e(c,{internalFormat:1===l.depthStencilTarget?33189:34041,width:_,height:f}));const t=1===u?o.DEPTH_ATTACHMENT:o.DEPTH_STENCIL_ATTACHMENT;o.framebufferRenderbuffer(o.FRAMEBUFFER,t,o.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new e(c,{internalFormat:36168,width:_,height:f})),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.STENCIL_ATTACHMENT,o.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){c.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const t={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:_,height:f};this._depthStencilTexture=new r$2(c,t);}o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,this._depthStencilTexture.glName,0);}this._glName=a,this._initialized=!0;}_disposeColorAttachments(){this._colorAttachments.forEach(((t,e)=>{if(t instanceof r$2){if(this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,null,0);}t.dispose();}else if(t instanceof WebGLRenderbuffer){const i=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(i.FRAMEBUFFER,e,i.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t);}})),this._colorAttachments.clear();}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null);}this._depthAttachment.dispose(),this._depthAttachment=null;}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null);}static _validateBufferDimensions(t,e){console.assert(t.width>=0&&t.height>=0),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height);}_validateTextureDimensions(t,e){console.assert(t.width>=0&&t.height>=0),3553!==t.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height);}_validateColorAttachmentPoint(t){if(-1===h._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;h._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS);}else h._MAX_COLOR_ATTACHMENTS=1;}const e=t-36064;e+1>h._MAX_COLOR_ATTACHMENTS&&r.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${h._MAX_COLOR_ATTACHMENTS} color attachments`);}}h._MAX_COLOR_ATTACHMENTS=-1;const n=(t,e)=>new r$2(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e.width,height:e.height});

export { h as a, r$3 as b, o$3 as c, e$1 as d, e, r$4 as f, r$1 as g, h$1 as h, l, n$3 as n, o, r$2 as r, t$1 as t };
