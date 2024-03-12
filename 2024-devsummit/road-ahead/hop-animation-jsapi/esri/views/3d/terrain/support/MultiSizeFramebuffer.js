// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../webgl/enums","../../../webgl/FramebufferObject","../../../webgl/RenderbufferDescriptor","../../../webgl/TextureDescriptor"],function(c,d,e,f,g){class h{constructor(a){this._rctx=a;this._fbos=new Map}get(a){return this._getPool(a)}dispose(){this._fbos.forEach(a=>a.dispose());this._fbos.clear()}_getPool(a){var b=this._fbos.get(a);if(b)return b;b=new e.FramebufferObject(this._rctx,new g.TextureDescriptor(a),new f.RenderbufferDescriptor(d.RenderbufferFormat.DEPTH24_STENCIL8,
a));this._fbos.set(a,b);return b}}c.MultiSizeFramebuffer=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});