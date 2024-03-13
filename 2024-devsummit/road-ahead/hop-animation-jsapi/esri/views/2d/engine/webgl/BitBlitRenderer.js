// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ./DefaultVertexAttributeLayouts ./shaders/BitBlitPrograms ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/ProgramTemplate ../../../webgl/VertexArrayObject".split(" "),function(e,f,h,g,k,c,l,m){class n{constructor(){this._initialized=!1}dispose(){this._program=f.disposeMaybe(this._program);this._vertexArrayObject=f.disposeMaybe(this._vertexArrayObject)}render(b,d,a,p){b&&(this._initialized||this._initialize(b),b.setBlendFunctionSeparate(c.BlendFactor.ONE,
c.BlendFactor.ONE_MINUS_SRC_ALPHA,c.BlendFactor.ONE,c.BlendFactor.ONE_MINUS_SRC_ALPHA),b.bindVAO(this._vertexArrayObject),b.useProgram(this._program),d.setSamplingMode(a),b.bindTexture(d,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",p),b.drawArrays(c.PrimitiveType.TRIANGLE_STRIP,0,4),b.bindTexture(null,0),b.bindVAO())}_initialize(b){if(this._initialized)return!0;const d=l.createProgram(b,g.bitBlit);if(!d)return!1;const a=new Int8Array(16);a[0]=-1;a[1]=-1;a[2]=0;a[3]=
0;a[4]=1;a[5]=-1;a[6]=1;a[7]=0;a[8]=-1;a[9]=1;a[10]=0;a[11]=1;a[12]=1;a[13]=1;a[14]=1;a[15]=1;b=new m.VertexArrayObject(b,g.bitBlit.attributes,h.PosTex2b,{geometry:k.BufferObject.createVertex(b,c.Usage.STATIC_DRAW,a)});this._program=d;this._vertexArrayObject=b;return this._initialized=!0}}e.BitBlitRenderer=n;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});