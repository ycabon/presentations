import { t as t$2 } from './ShaderCompiler-5b134693.js';
import { t as t$3 } from './_virtual_index-634cbc09.js';
import { d as e$2, n, f as r$3 } from './FramebufferObject-553bb493.js';
import { K } from './renderState-42545bc0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t$1{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r;}dispose(){this._programCacheByTemplate.forEach((r=>{r.programs.forEach((r=>{r.dispose();}));})),this._programCacheByTemplate=null;}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>t$2(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map});}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e);}return a.programs.get(r)}return null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class e$1{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new Map;this._current.length<e$2.COUNT;)this._current.push(0),this._max.push(0);}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0);}increment(t,e){const s=++this._current[t];this._max[t]=Math.max(s,this._max[t]);}decrement(t,e){--this._current[t];}get max(){return this._max}get current(){return this._current}get total(){return this.current.reduce(((t,e)=>t+e),0)}printResourceCount(){if(this.total>0){console.log("Live objects:");for(let e=0;e<e$2.COUNT;++e){const s=this._current[e];s>0&&console.log(`${e$2[e]}: ${s}`);}}if(this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const t=new Map;this._allocations.forEach((e=>{var s;t.set(e,(null!=(s=t.get(e))?s:0)+1);})),t.forEach(((t,e)=>console.log(t," : ",e)));}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class E{constructor(e,E,t,T,r,_,i,u){this.createQuery=e,this.resultAvailable=E,this.getResult=t,this.disjoint=T,this.beginTimeElapsed=r,this.endTimeElapsed=_,this.createTimestamp=i,this.timestampBits=u;}}function t(t,T){if(T.disjointTimerQuery)return null;let r=t.getExtension("EXT_disjoint_timer_query_webgl2");return r&&n(t)?new E((()=>t.createQuery()),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>t.beginQuery(r.TIME_ELAPSED_EXT,e)),(()=>t.endQuery(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>t.getQuery(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):(r=t.getExtension("EXT_disjoint_timer_query"),r?new E((()=>r.createQueryEXT()),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT)),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>r.beginQueryEXT(r.TIME_ELAPSED_EXT,e)),(()=>r.endQueryEXT(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>r.getQueryEXT(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):null)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function A(A,_){if(_.disjointTimerQuery)return null;if(n(A))return {drawBuffers:A.drawBuffers.bind(A),MAX_DRAW_BUFFERS:A.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:A.MAX_COLOR_ATTACHMENTS};if(_.drawBuffers)return null;const e=A.getExtension("WEBGL_draw_buffers");return e?{drawBuffers:e.drawBuffersWEBGL.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS_WEBGL}:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$2(r){if(n(r))return {drawArraysInstanced:r.drawArraysInstanced.bind(r),drawElementsInstanced:r.drawElementsInstanced.bind(r),vertexAttribDivisor:r.vertexAttribDivisor.bind(r)};const t=r.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e,t){const n=t.loseContext&&e.getExtension("WEBGL_lose_context");return n?{loseRenderingContext:()=>n.loseContext()}:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(r,t){if(n(r))return {createVertexArray:r.createVertexArray.bind(r),deleteVertexArray:r.deleteVertexArray.bind(r),bindVertexArray:r.bindVertexArray.bind(r)};if(t.vao)return null;const n$1=r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object");return n$1?{createVertexArray:n$1.createVertexArrayOES.bind(n$1),deleteVertexArray:n$1.deleteVertexArrayOES.bind(n$1),bindVertexArray:n$1.bindVertexArrayOES.bind(n$1)}:null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function o(t$1,o){const T=o&&o.disabledExtensions||{},s=o&&o.debugWebGLExtensions||{};let x,C,A$1,F,G,O,B,D,M,c,X,d=null,g=null,P=null,L=null;return {get drawBuffers(){return X||(X=A(t$1,T)),X},get instancing(){return x||(x=r$2(t$1)),x},get vao(){return C||(C=r$1(t$1,T)),C},get compressedTextureETC(){return A$1||(A$1=l$1(t$1,T)),A$1},get compressedTextureS3TC(){return F||(F=u(t$1,T)),F},get textureFilterAnisotropic(){return G||(G=a(t$1,T)),G},get disjointTimerQuery(){return O||(O=t(t$1,T)),O},get textureFloat(){return B||(B=R(t$1,T)),B},get colorBufferFloat(){return D||(D=f(t$1,T)),D},get blendMinMax(){return M||(M=i(t$1,T)),M},get depthTexture(){return null===d&&(d=S(t$1,T,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),d},get standardDerivatives(){return null===g&&(g=S(t$1,T,"standardDerivatives",!0,["OES_standard_derivatives"])),g},get shaderTextureLOD(){return null===P&&(P=S(t$1,T,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),P},get fragDepth(){return null===L&&(L=S(t$1,T,"fragDepth",!0,["EXT_frag_depth"])),L},get loseContext(){return c||(c=e(t$1,s)),c},enable(t){return this[t]}}}function l$1(t,e){if(e.compressedTextureETC)return null;const r=t.getExtension("WEBGL_compressed_texture_etc");return r?{COMPRESSED_R11_EAC:r.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:r.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:r.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:r.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:r.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:r.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}function u(t,e){if(e.compressedTextureS3TC)return null;const r=t.getExtension("WEBGL_compressed_texture_s3tc");return r?{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function i(e,r){if(n(e))return {MIN:e.MIN,MAX:e.MAX};if(r.blendMinMax)return null;{const t=e.getExtension("EXT_blend_minmax");return t?{MIN:t.MIN_EXT,MAX:t.MAX_EXT}:null}}function a(t,e){if(e.textureFilterAnisotropic)return null;const r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return r?{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}:null}function R(e,r){if(n(e))return {textureFloat:!0,textureFloatLinear:!r.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!r.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:e.HALF_FLOAT};if(e instanceof WebGLRenderingContext){const t=!r.textureHalfFloat&&e.getExtension("OES_texture_half_float");return {textureFloat:!r.textureFloat&&!!e.getExtension("OES_texture_float"),textureFloatLinear:!r.textureFloatLinear&&!!e.getExtension("OES_texture_float_linear"),textureHalfFloat:!!t,textureHalfFloatLinear:!r.textureHalfFloatLinear&&!!e.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t?t.HALF_FLOAT_OES:void 0}}return null}function f(e,r){if(n(e)){const t=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),_=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_float"),n=!r.colorBufferFloat&&e.getExtension("EXT_float_blend");return t||_||n?{textureFloat:!!_,textureHalfFloat:!!t,R16F:e.R16F,RG16F:e.RG16F,RGBA16F:e.RGBA16F,R32F:e.R32F,RG32F:e.RG32F,RGBA32F:e.RGBA32F,R11F_G11F_B10F:e.R11F_G11F_B10F,RGB16F:e.RGB16F}:null}if(e instanceof WebGLRenderingContext){const t=!r.colorBufferFloat&&e.getExtension("EXT_color_buffer_half_float"),_=!r.colorBufferFloat&&e.getExtension("WEBGL_color_buffer_float"),n=!r.colorBufferFloat&&e.getExtension("EXT_float_blend");return t||_||n?{textureFloat:!!_,textureHalfFloat:!!t,RGBA16F:t?t.RGBA16F_EXT:void 0,RGB16F:t?t.RGB16F_EXT:void 0,RGBA32F:_?_.RGBA32F_EXT:void 0}:null}return null}function S(e,r,_,n$1,E){if(n$1&&n(e))return !0;if(r[_])return !1;for(const t of E)if(e.getExtension(t))return !0;return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class l{constructor(t,e){this.gl=null,this.instanceCounter=new e$1,this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap=[],this._numOfDrawCalls=0,this._numOfTriangles=0,this.contextVersion=n(t)?"webgl2":"webgl",this.gl=t,t instanceof WebGLRenderingContext&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=o(t,e);const l=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:l[0],y:l[1],width:l[2],height:l[3]},this._stateTracker=new K({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a);}else this.setBlendingEnabled(!1);},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1);},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1);},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1);},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const i=t.operation;this.setStencilOp(i.fail,i.zFail,i.zPass);}else this.setStencilTestEnabled(!1);},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1);},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1);},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0);}}),this.enforceState();}isWebGL2Context(){return "webgl2"===this.contextVersion}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){if(!this._parameters){const t=this.capabilities.textureFilterAnisotropic;this._parameters={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:t?this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)};}return this._parameters}dispose(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap=[],this.gl=null,this._capabilities=null;}setPipelineState(t){this._stateTracker.setPipeline(t);}setBlendingEnabled(t){this._blendEnabled!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=t,this._stateTracker.invalidateBlending());}setBlendColor(t,e,i,s){t===this._blendColorState.r&&e===this._blendColorState.g&&i===this._blendColorState.b&&s===this._blendColorState.a||(this.gl.blendColor(t,e,i,s),this._blendColorState.r=t,this._blendColorState.g=e,this._blendColorState.b=i,this._blendColorState.a=s,this._stateTracker.invalidateBlending());}setBlendFunction(t,e){t===this._blendFunctionState.srcRGB&&e===this._blendFunctionState.dstRGB||(this.gl.blendFunc(t,e),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=t,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=e,this._stateTracker.invalidateBlending());}setBlendFunctionSeparate(t,e,i,s){this._blendFunctionState.srcRGB===t&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===e&&this._blendFunctionState.dstAlpha===s||(this.gl.blendFuncSeparate(t,e,i,s),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=s,this._stateTracker.invalidateBlending());}setBlendEquation(t){this._blendEquationState.mode!==t&&(this.gl.blendEquation(t),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending());}setBlendEquationSeparate(t,e){this._blendEquationState.mode===t&&this._blendEquationState.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending());}setColorMask(t,e,i,s){this._colorMaskState.r===t&&this._colorMaskState.g===e&&this._colorMaskState.b===i&&this._colorMaskState.a===s||(this.gl.colorMask(t,e,i,s),this._colorMaskState.r=t,this._colorMaskState.g=e,this._colorMaskState.b=i,this._colorMaskState.a=s,this._stateTracker.invalidateColorWrite());}setClearColor(t,e,i,s){this._clearColor.r===t&&this._clearColor.g===e&&this._clearColor.b===i&&this._clearColor.a===s||(this.gl.clearColor(t,e,i,s),this._clearColor.r=t,this._clearColor.g=e,this._clearColor.b=i,this._clearColor.a=s);}setFaceCullingEnabled(t){this._polygonCullingEnabled!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=t,this._stateTracker.invalidateCulling());}setPolygonOffsetFillEnabled(t){this._polygonOffsetFillEnabled!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=t,this._stateTracker.invalidatePolygonOffset());}setPolygonOffset(t,e){this._polygonOffset[0]===t&&this._polygonOffset[1]===e||(this._polygonOffset[0]=t,this._polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset());}setCullFace(t){this._cullFace!==t&&(this.gl.cullFace(t),this._cullFace=t,this._stateTracker.invalidateCulling());}setFrontFace(t){this._frontFace!==t&&(this.gl.frontFace(t),this._frontFace=t,this._stateTracker.invalidateCulling());}setScissorTestEnabled(t){this._scissorTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=t);}setScissorRect(t,e,i,s){this._scissorRect.x===t&&this._scissorRect.y===e&&this._scissorRect.width===i&&this._scissorRect.height===s||(this.gl.scissor(t,e,i,s),this._scissorRect.x=t,this._scissorRect.y=e,this._scissorRect.width=i,this._scissorRect.height=s);}setDepthTestEnabled(t){this._depthTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=t,this._stateTracker.invalidateDepthTest());}setClearDepth(t){this._clearDepth!==t&&(this.gl.clearDepth(t),this._clearDepth=t);}setDepthFunction(t){this._depthFunction!==t&&(this.gl.depthFunc(t),this._depthFunction=t,this._stateTracker.invalidateDepthTest());}setDepthWriteEnabled(t){this._depthWriteEnabled!==t&&(this.gl.depthMask(t),this._depthWriteEnabled=t,this._stateTracker.invalidateDepthWrite());}setDepthRange(t,e){this._depthRange.zNear===t&&this._depthRange.zFar===e||(this.gl.depthRange(t,e),this._depthRange.zNear=t,this._depthRange.zFar=e,this._stateTracker.invalidateDepthWrite());}setStencilTestEnabled(t){this._stencilTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=t,this._stateTracker.invalidateStencilTest());}setClearStencil(t){t!==this._clearStencil&&(this.gl.clearStencil(t),this._clearStencil=t);}setStencilFunction(t,e,i){this._stencilFunction.func===t&&this._stencilFunction.ref===e&&this._stencilFunction.mask===i||(this.gl.stencilFunc(t,e,i),this._stencilFunction.face=1032,this._stencilFunction.func=t,this._stencilFunction.ref=e,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest());}setStencilFunctionSeparate(t,e,i,s){this._stencilFunction.face===t&&this._stencilFunction.func===e&&this._stencilFunction.ref===i&&this._stencilFunction.mask===s||(this.gl.stencilFuncSeparate(t,e,i,s),this._stencilFunction.face=t,this._stencilFunction.func=e,this._stencilFunction.ref=i,this._stencilFunction.mask=s,this._stateTracker.invalidateStencilTest());}setStencilWriteMask(t){this._stencilWriteMask!==t&&(this.gl.stencilMask(t),this._stencilWriteMask=t,this._stateTracker.invalidateStencilWrite());}setStencilOp(t,e,i){this._stencilOperation.fail===t&&this._stencilOperation.zFail===e&&this._stencilOperation.zPass===i||(this.gl.stencilOp(t,e,i),this._stencilOperation.face=1032,this._stencilOperation.fail=t,this._stencilOperation.zFail=e,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest());}setStencilOpSeparate(t,e,i,s){this._stencilOperation.face===t&&this._stencilOperation.fail===e&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===s||(this.gl.stencilOpSeparate(t,e,i,s),this._stencilOperation.face=t,this._stencilOperation.face=t,this._stencilOperation.fail=e,this._stencilOperation.zFail=i,this._stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest());}setActiveTexture(t){const i=this._activeTextureUnit;return t>=0&&t!==this._activeTextureUnit&&(this.gl.activeTexture(r$3+t),this._activeTextureUnit=t),i}clear(t){t&&this.gl.clear(t);}clearSafe(t,e=255){t&&(16384&t&&this.setColorMask(!0,!0,!0,!0),256&t&&this.setDepthWriteEnabled(!0),1024&t&&this.setStencilWriteMask(e),this.gl.clear(t));}drawArrays(t,e,i){this.gl.drawArrays(t,e,i);}drawElements(t,e,i,s){5123!==i?5125===i&&this.gl.drawElements(t,e,i,s):this.gl.drawElements(t,e,i,s);}logIno(){}get capabilities(){return this._capabilities}setViewport(t,e,i,s){const a=this._viewport;a.x===t&&a.y===e&&a.width===i&&a.height===s||(a.x=t,a.y=e,a.width=i,a.height=s,this.gl.viewport(t,e,i,s));}getViewport(){return {x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}}bindProgram(t){if(!t)return this.gl.useProgram(null),void(this._activeShaderProgram=null);this._activeShaderProgram!==t&&(t.initialize(),this.gl.useProgram(t.glName),this._activeShaderProgram=t);}bindTexture(t,e){(e>=this.parameters.maxTextureImageUnits||e<0)&&console.error("Input texture unit is out of range of available units!");const i=this._textureUnitMap[e];if(this.setActiveTexture(e),null==t||null==t.glName)return null!=i&&this.gl.bindTexture(i.descriptor.target,null),void(this._textureUnitMap[e]=null);i!==t?(this.gl.bindTexture(t.descriptor.target,t.glName),t.applyChanges(),this._textureUnitMap[e]=t):t.applyChanges();}unbindTextureAllUnits(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._textureUnitMap[e]===t&&this.bindTexture(null,e);}bindFramebuffer(e){if(t$3(e))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);this._activeFramebuffer!==e&&(e.initializeAndBind(),this._activeFramebuffer=e);}bindBuffer(t){t&&(34962===t.bufferType?this._activeVertexBuffer=r(this.gl,t,t.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=r(this.gl,t,t.bufferType,this._activeIndexBuffer));}bindRenderbuffer(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._activeRenderbuffer=t);}unbindBuffer(t){34962===t?this._activeVertexBuffer=r(this.gl,null,t,this._activeVertexBuffer):this._activeIndexBuffer=r(this.gl,null,t,this._activeIndexBuffer);}bindVAO(t){t?this._activeVertexArrayObject&&this._activeVertexArrayObject===t||(t.bind(),this._activeVertexArrayObject=t):this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null);}getBoundTexture(t){return this._textureUnitMap[t]}getBoundFramebufferObject(){return this._activeFramebuffer}getBoundVAO(){return this._activeVertexArrayObject}resetState(){this.bindProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(let t=0;t<this.parameters.maxTextureImageUnits;t++)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height);}enforceState(){const t=this.gl,i=this.capabilities.vao;i&&i.bindVertexArray(null);for(let e=0;e<this.parameters.maxVertexAttributes;e++)t.disableVertexAttribArray(e);if(this._activeVertexBuffer?t.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):t.bindBuffer(34962,null),this._activeIndexBuffer?t.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):t.bindBuffer(34963,null),i&&this._activeVertexArrayObject){const t=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(t);}t.bindFramebuffer(t.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:null),t.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null),t.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),t.bindRenderbuffer(t.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?t.enable(this.gl.BLEND):t.disable(this.gl.BLEND),t.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),t.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),t.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),t.clearDepth(this._clearDepth),t.clearStencil(this._clearStencil),t.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),t.cullFace(this._cullFace),t.depthFunc(this._depthFunction),t.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST),t.depthMask(this._depthWriteEnabled),t.frontFace(this._frontFace),t.lineWidth(1),!0===this._polygonCullingEnabled?t.enable(t.CULL_FACE):t.disable(t.CULL_FACE),t.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?t.enable(t.POLYGON_OFFSET_FILL):t.disable(t.POLYGON_OFFSET_FILL),t.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?t.enable(t.SCISSOR_TEST):t.disable(t.SCISSOR_TEST),t.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),t.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?t.enable(t.STENCIL_TEST):t.disable(t.STENCIL_TEST),t.stencilMask(this._stencilWriteMask);for(let s=0;s<this.parameters.maxTextureImageUnits;s++){t.activeTexture(r$3+s),t.bindTexture(3553,null);const i=this._textureUnitMap[s];i&&t.bindTexture(i.descriptor.target,i.glName);}t.activeTexture(r$3+this._activeTextureUnit),t.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height);}}function r(t,e,i,s){return e?s!==e&&t.bindBuffer(i,e.glName):t.bindBuffer(i,null),e}

export { t as a, l, t$1 as t };
