// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../3d/webgl-engine/lib/OrderIndependentTransparency ./BufferObject ./enums ./FramebufferObject ./renderState ./TextureDescriptor ./VertexArrayObject ./VertexElementDescriptor ./WebGLDriverTestModule".split(" "),function(g,h,k,c,l,m,n,p,q,r){class t extends r.WebGLDriverTestModule{constructor(b){super();this._rctx=b;b.gl&&b.capabilities.textureFloat?.textureFloat&&b.capabilities.colorBufferFloat?.textureFloat&&b.capabilities.colorBufferFloat?.floatBlend&&(this._program=b.programCache.acquire("\n    precision highp float;\n    attribute vec2 a_pos;\n\n    void main() {\n      gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ",
"\n     precision highp float;\n\n     void main() {\n      gl_FragColor \x3d vec4(0.5, 0.5, 0.5, 0.5);\n     }\n    ",new Map([["a_pos",0]])))}_test(b){const a=this._rctx;var d=new n.TextureDescriptor(1);d.wrapMode=c.TextureWrapMode.CLAMP_TO_EDGE;d.dataType=c.PixelType.FLOAT;d.internalFormat=c.SizedPixelFormat.RGBA32F;d.samplingMode=c.TextureSamplingMode.NEAREST;d=new l.FramebufferObject(a,d);var e=k.BufferObject.createVertex(a,c.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1]));e=new p.VertexArrayObject(a,
new Map([["a_pos",0]]),{geometry:[new q.VertexElementDescriptor("a_pos",2,c.DataType.UNSIGNED_SHORT,0,4)]},{geometry:e});a.useProgram(b);b=a.getBoundFramebufferObject();const {x:u,y:v,width:w,height:x}=a.getViewport();a.bindFramebuffer(d);a.setViewport(0,0,1,1);a.bindVAO(e);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);var f=m.makePipelineState({blending:h.blendingAlpha});a.setPipelineState(f);a.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4);f=a.gl.getError();a.setViewport(u,v,w,x);a.bindFramebuffer(b);
e.dispose();d.dispose();return 1282===f?(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1):!0}}g.FloatBufferBlend=t;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});