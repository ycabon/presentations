// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../webgl/ManagedColorAttachment ../../webgl/ManagedDepthAttachment ../../webgl/ManagedFBO ../../webgl/ManagedFBObject ./FBOPool ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Renderbuffer ../../../webgl/RenderbufferDescriptor ../../../webgl/Texture ../../../webgl/TextureDescriptor".split(" "),function(w,C,x,f,D,v,c,E,F,G,y,g){class H{constructor(b){this.rctx=b;this._acquired=new Set;this._cache=new v.FBOPool(b.newCache,"FBOCache");this._depthCache=new v.FBOPool(b.newCache,
"DepthAttachmentCache");this._colorCache=new v.FBOPool(b.newCache,"ColorAttachmentCache")}destroy(){this._cache.destroy();this._depthCache.destroy();this._colorCache.destroy()}clean(){this._cache.clean();this._colorCache.clean();this._depthCache.clean()}frameStart(){this._cache.frame();this._colorCache.frame();this._depthCache.frame();this.debugCallback&&this.debugCallback()}frameEnd(){const b=this.debugCallback;b&&this._acquired.forEach(d=>d.type===D.AttachmentType.FBO&&b(d.name,d.fbo))}get usedMemory(){return Array.from(this._acquired.values()).reduce((b,
d)=>b+("getTexture"in d?d.getTexture()?.usedMemory??0:d.usedMemory),this._cache.usedMemory+this._colorCache.usedMemory+this._depthCache.usedMemory)}set interactive(b){this._cache.interactive=this._colorCache.interactive=this._depthCache.interactive=b}acquire(b,d,h,k=f.ColorFormat.RGBA){const l=`${k}x${b}x${d}`;let a=this._cache.pop(l);a?(a.retain(),a.setName(h)):a=new f.ManagedFBO(l,h,new E.FramebufferObject(this.rctx,{...z[k],width:b,height:d}),e=>{e??=f.DepthFormat.DEPTH_STENCIL_TEXTURE;e=this._acquireDepth(e,
a.fbo.width,a.fbo.height,`${a.name} depth`);a.attachDepth(e);e.release();return a},(e,p)=>{p??=f.ColorFormat.RGBA;p=this._acquireColor(p,b,d,`${a.name} color ${e}`);a.attachColor(p,e);return a},()=>{this.debugCallback&&this.debugCallback(a.name,a.fbo);this._acquired.delete(a);a.detachAll();this._cache.put(a)});this.rctx.unbindTexture(a.fbo.colorTexture);this.rctx.bindFramebuffer(a.fbo);return this._trackHandle(a)}acquireDepth(b,d,h,k){return this._acquireDepth(b,d,h,k)}_acquireDepth(b,d,h,k){const l=
`${b}x${d}x${h}`,a=this._depthCache.pop(l);if(a)return a.retain(),a.name=k,this._trackHandle(a);const e=b===f.DepthFormat.DEPTH_STENCIL_TEXTURE?new x.ManagedDepthAttachment(l,new y.Texture(this.rctx,{...A[b],width:d,height:h}),()=>{this._acquired.delete(e);this._depthCache.put(e)}):new x.ManagedDepthAttachment(l,new F.Renderbuffer(this.rctx,{...A[b],width:d,height:h}),()=>{this._acquired.delete(e);this._depthCache.put(e)});e.name=k;return this._trackHandle(e)}_acquireColor(b,d,h,k){const l=`${b}x${d}x${h}`,
a=this._colorCache.pop(l);if(a)return a.retain(),a.name=k,this._trackHandle(a);const e=new C.ManagedColorAttachment(l,new y.Texture(this.rctx,{...z[b],width:d,height:h}),()=>{this._acquired.delete(e);this._colorCache.put(e)});e.name=k;return this._trackHandle(e)}_trackHandle(b){this._acquired.add(b);return b}}const q=new g.TextureDescriptor;q.pixelFormat=c.PixelFormat.RED;q.internalFormat=c.SizedPixelFormat.R8;q.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;const r=new g.TextureDescriptor;r.pixelFormat=
c.PixelFormat.RG;r.internalFormat=c.SizedPixelFormat.RG8;r.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;const t=new g.TextureDescriptor;t.internalFormat=c.SizedPixelFormat.RGBA4;t.dataType=c.PixelType.UNSIGNED_SHORT_4_4_4_4;t.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;const B=new g.TextureDescriptor;B.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;const m=new g.TextureDescriptor;m.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;m.samplingMode=c.TextureSamplingMode.LINEAR_MIPMAP_LINEAR;m.hasMipmap=!0;m.maxAnisotropy=
8;const n=new g.TextureDescriptor;n.pixelFormat=c.PixelFormat.RED;n.dataType=c.PixelType.HALF_FLOAT;n.internalFormat=c.SizedPixelFormat.R16F;n.samplingMode=c.TextureSamplingMode.NEAREST;const u=new g.TextureDescriptor;u.dataType=c.PixelType.HALF_FLOAT;u.internalFormat=c.SizedPixelFormat.RGBA16F;u.samplingMode=c.TextureSamplingMode.NEAREST;const z={[f.ColorFormat.RED]:q,[f.ColorFormat.RG]:r,[f.ColorFormat.RGBA4]:t,[f.ColorFormat.RGBA]:B,[f.ColorFormat.RGBA_MIPMAP]:m,[f.ColorFormat.R16F]:n,[f.ColorFormat.RGBA16F]:u};
g=new g.TextureDescriptor;g.pixelFormat=c.PixelFormat.DEPTH_STENCIL;g.dataType=c.PixelType.UNSIGNED_INT_24_8;g.samplingMode=c.TextureSamplingMode.NEAREST;g.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;const A={[f.DepthFormat.DEPTH_STENCIL_TEXTURE]:g,[f.DepthFormat.DEPTH16_BUFFER]:new G.RenderbufferDescriptor(c.RenderbufferFormat.DEPTH_COMPONENT16,4)};w.FBOCache=H;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});