/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/lang.js";import{L as t}from"./Logger.js";import{f as e}from"./maybe.js";import{B as i}from"./BufferObject.js";import{g as r,G as s,T as h,w as n}from"./Texture.js";import{R as o,C as a,a as c,P as l,d as u,F as _,e as f,U as d,B as T,f as m}from"./enums.js";class p{constructor(t,e,i=e){this.internalFormat=t,this.width=e,this.height=i,this.multisampled=!1,this.samples=1}}class x{constructor(t,e){this._context=t,this._descriptor=e,this.type=s.RenderBuffer,this._context.instanceCounter.increment(o.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:r,height:h,internalFormat:n,multisampled:a}=e;a?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,n,r,h):i.renderbufferStorage(i.RENDERBUFFER,n,r,h)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get usedMemory(){return(t=this._descriptor).width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*r(t.internalFormat);var t}resize(t,e){const i=this._descriptor;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(o.Renderbuffer,this),this._context=null)}}class E{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(o.FramebufferObject,this);const r=g(e)?e:new h(this._context,e);var n;if(this._colorAttachments.set(a.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(a.COLOR_ATTACHMENT0),null!=i)if(g(n=i)||null!=n&&"pixelFormat"in n)this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=g(i)?i:new h(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=function(t){return null!=t&&"type"in t&&t.type===s.RenderBuffer}(i)?i:new x(this._context,i);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(o.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(a.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(a.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(a.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce(((t,[e,i])=>t+i.usedMemory),this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&g(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=a.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=a.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=a.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case s.Texture:return this._attachDepthStencilTexture(t);case s.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==c.DEPTH_STENCIL&&e.pixelFormat!==c.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==l.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,u)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,u)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(_.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(_.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,s,n,o){(t<0||e<0||s<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const a=o.descriptor;o.descriptor.target!==f.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==a?.width||null==a?.height||t+i>this.width||e+r>this.height||s+i>a.width||n+r>a.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,l=c.bindTexture(o,h.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(f.TEXTURE_2D,0,s,n,t,e,i,r),c.bindTexture(l,h.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,h,n){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,h,n)}async readPixelsAsync(t,e,r,s,h,n,o){const{gl:a}=this._context,c=i.createPixelPack(this._context,d.STREAM_READ,o.byteLength);this._context.bindBuffer(c),this._context.bindFramebuffer(this),a.readPixels(t,e,r,s,h,n,0),this._context.unbindBuffer(T.PIXEL_PACK_BUFFER),await c.getSubDataAsync(o),c.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};b(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(b(i,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=_.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,A(e),t))),this._depthStencilBuffer){const i=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,A(this._depthStencilTexture),t);n()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=a.COLOR_ATTACHMENT0,i=f.TEXTURE_2D,r=_.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(_.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=e(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=e(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==f.TEXTURE_2D&&t.target!==f.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),b(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){b(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case m.DEPTH_COMPONENT16:case m.DEPTH_COMPONENT24:case m.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case m.DEPTH24_STENCIL8:case m.DEPTH32F_STENCIL8:case m.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case m.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===E._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;E._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else E._MAX_COLOR_ATTACHMENTS=1}const i=e-a.COLOR_ATTACHMENT0;i+1>E._MAX_COLOR_ATTACHMENTS&&t.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${E._MAX_COLOR_ATTACHMENTS} color attachments`)}}function g(t){return null!=t&&"type"in t&&t.type===s.Texture}function b(e,i){const r=Math.max(e.width,e.height);if(r>i){t.getLogger("esri.views.webgl.FramebufferObject").warn(`Resizing FBO attachment size ${e.width}x${e.height} to device limit ${i}`);const s=i/r;return e.width=Math.round(e.width*s),e.height=Math.round(e.height*s),!1}return!0}function A(t){return t.descriptor.target===f.TEXTURE_CUBE_MAP?f.TEXTURE_CUBE_MAP_POSITIVE_X:f.TEXTURE_2D}E._MAX_COLOR_ATTACHMENTS=-1;export{E as F,x as R,p as a,b as e};