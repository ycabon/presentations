// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Logger ./BufferObject ./enums ./FramebufferObject ./Texture ./TextureDescriptor ./VertexArrayObject ./VertexElementDescriptor ./WebGLDriverTestModule".split(" "),function(h,k,l,e,m,n,p,q,r,t){class u extends t.WebGLDriverTestModule{constructor(c){super();this._rctx=c;this._program=c.programCache.acquire("\n      precision highp float;\n      attribute vec2 a_pos;\n      uniform highp sampler2D u_texture;\n      varying vec4 v_color;\n\n      float getBit(in float bitset, in int bitIndex) {\n        float offset \x3d pow(2.0, float(bitIndex));\n        return mod(floor(bitset / offset), 2.0);\n      }\n\n      void main() {\n        vec4 value \x3d texture2D(u_texture, vec2(0.0));\n        float bit \x3d getBit(value.x * 255.0, 1);\n\n        v_color \x3d bit * vec4(1.0);\n        gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n      }\n      ",
"\n      precision highp float;\n      varying vec4 v_color;\n\n      void main() {\n        gl_FragColor \x3d v_color;\n      }\n      ",new Map([["a_pos",0]]))}_test(c){const a=this._rctx;var d=new p.TextureDescriptor(1);d.wrapMode=e.TextureWrapMode.CLAMP_TO_EDGE;d.samplingMode=e.TextureSamplingMode.NEAREST;const g=new m.FramebufferObject(a,d),b=new Uint8Array(4);var f=l.BufferObject.createVertex(a,e.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1]));f=new q.VertexArrayObject(a,new Map([["a_position",
0]]),{geometry:[new r.VertexElementDescriptor("a_position",2,e.DataType.SHORT,0,4)]},{geometry:f});a.useProgram(c);d=new n.Texture(a,d,new Uint8Array([2,255,0,0]));c.setUniform1i("u_texture",0);a.bindTexture(d,0);d=a.getBoundFramebufferObject();a.bindFramebuffer(g);a.useProgram(c);const {x:v,y:w,width:x,height:y}=a.getViewport();a.setViewport(0,0,1,1);a.bindVAO(f);a.drawArrays(e.PrimitiveType.TRIANGLE_STRIP,0,4);a.setViewport(v,w,x,y);g.readPixels(0,0,1,1,e.PixelFormat.RGBA,e.PixelType.UNSIGNED_BYTE,
b);f.dispose();g.dispose();(c=255!==b[0]||255!==b[1]||255!==b[2]||255!==b[3])&&k.getLogger("esri.views.webgl.testSamplerPrecision").warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${b[0]}.${b[1]}.${b[2]}.${b[3]}]`);a.bindFramebuffer(d);return c}}
h.IgnoresSamplerPrecision=u;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});