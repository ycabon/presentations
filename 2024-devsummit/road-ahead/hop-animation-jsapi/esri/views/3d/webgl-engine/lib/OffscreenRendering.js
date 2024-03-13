// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/maybe ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../webgl/ManagedFBO ./rendererUtils ./TransparencyPassType ../../../webgl/enums ../../../webgl/FramebufferObject".split(" "),function(n,z,l,r,t,g,u,m,k,v){class w{constructor(a,c){this._fbos=a;this.compositingHelper=c;this._height=this._width=4;this._clearColor=t.create()}dispose(){this._color=l.releaseMaybe(this._color);this.releaseBuffers()}get framebuffer(){this.color.attachDepth(this.depth);
return this.color.fbo}get colorTexture(){return this.color.getTexture()}get depthTexture(){return this.depth.attachment}initializeFrame(a,c,b){this._fbos.interactive=b===u.RendererTarget.Default;b=this._fbos.rctx;this._width=a.fullWidth;this._height=a.fullHeight;v.ensureAttachmentMaxSize(this,b.parameters.maxTextureSize);a=this._color;this._color=null;this.releaseBuffers();r.copy(this._clearColor,c);return a}releaseBuffers(){this._color?.detachDepth();this._depth=l.releaseMaybe(this._depth)}renderHUDVisibility(a,
c,b){if(a?.fbo.width!==this._width||a?.fbo.height!==this._height)a?.release(),a=this._fbos.acquire(this._width,this._height,"hud visibility",g.ColorFormat.RGBA4);a.attachDepth(b||this.depth);this._fbos.rctx.bindFramebuffer(a.fbo);this._fbos.rctx.clearFramebuffer(x);c();a.detachDepth();return a}compositeToHUDVisibility(a,c){this._fbos.rctx.bindFramebuffer(a.hudVisibility?.fbo);this.compositingHelper.compositeHUD(a,c)}renderOITPass(a,c,b){let d,e;const {_width:f,_height:h}=this;switch(c){case m.TransparencyPassType.Color:d=
this._fbos.acquire(f,h,b?"oit hud color":"oit color",g.ColorFormat.RGBA16F);e=[0,0,0,0];break;case m.TransparencyPassType.Alpha:d=this._fbos.acquire(f,h,b?"oit hud alpha":"oit alpha",g.ColorFormat.R16F);e=[1,1,1,1];break;case m.TransparencyPassType.FrontFace:d=this._fbos.acquire(f,h,b?"oit hud front":"oit front"),e=[0,0,0,0]}b?d.acquireDepth(g.DepthFormat.DEPTH16_BUFFER):d.attachDepth(this.depth);this._fbos.rctx.bindFramebuffer(d.fbo);this._fbos.rctx.clearFramebuffer(e,b,b);a();d.detachDepth();return d}compositeToFramebuffer(a,
c,b,d){this.bindFbo();this.compositingHelper.composite(a,c,b,d)}compositeTransparentOntoOpaque(a,c,b,d,e){e?(this._fbos.rctx.bindFramebuffer(e.fbo),this._fbos.rctx.setClearColor(0,0,0,1E-13),this._fbos.rctx.clearSafe(k.ClearBufferBit.COLOR_BUFFER_BIT)):this.bindFbo();this.compositingHelper.compositeOIT(a,c.getTexture(),b.getTexture(),d.getTexture())}renderDepthDetached(a){this._bindTarget(this.color);a();this._bindTarget(this.color,this.depth)}renderToCachedFBO(a,c,b,d,e=g.ColorFormat.RGBA,f=g.DepthFormat.DEPTH16_BUFFER,
h=this._width,p=this._height,y=null){if(a?.fbo.width!==h||a?.fbo.height!==p)a=l.releaseMaybe(a);a=a??this._fbos.acquire(h,p,c,e);y?.forEach(q=>a.acquireColor(q.attachment,q.format));null!=f&&a.acquireDepth(f);this._fbos.rctx.bindFramebuffer(a.fbo);this._fbos.rctx.clearFramebuffer(d,!0,!0);b();return a}renderToTargets(a,c,b,d,e=!1,f=!1){this._bindTarget(c,b);this._fbos.rctx.clearFramebuffer(d,e,f);a();c.detachDepth()}bindFbo(){var a=null==this._color;this._bindTarget(this.color,this.depth);a&&(a=this._fbos.rctx,
a.setClearStencil(0),a.setClearColor(this._clearColor[0],this._clearColor[1],this._clearColor[2],this._clearColor[3]),a.clearSafe(k.ClearBufferBit.COLOR_BUFFER_BIT|k.ClearBufferBit.DEPTH_BUFFER_BIT|k.ClearBufferBit.STENCIL_BUFFER_BIT))}_bindTarget(a,c){a.attachDepth(c);this._fbos.rctx.bindFramebuffer(a.fbo)}get width(){return this._width}get height(){return this._height}get color(){return this._ensureColor()}_ensureColor(){this._color||(this._color=this._fbos.acquire(this._width,this._height,"composite-color"));
return this._color}updateColor(a,c){const b=this._ensureColor();b.attachDepth(this.depth);b.setName(c);this._color=a(b)}get depth(){this._depth||(this._depth=this._fbos.acquireDepth(g.DepthFormat.DEPTH_STENCIL_TEXTURE,this._width,this._height,"depth"));return this._depth}}const x=[0,1,0,1];n.OffscreenRendering=w;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});