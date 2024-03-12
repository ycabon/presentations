// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/libs/gl-matrix-2/math/common ../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f32 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ./VertexStream ./shaders/StencilPrograms ../../../webgl/enums ../../../webgl/ProgramTemplate".split(" "),function(p,q,v,f,w,x,m,n,y,z,g,A){const B=x.fromValues(-.5,-.5);class C{constructor(){this._centerNdc=
n.create();this._pxToNdc=n.create();this._worldDimensionsPx=n.create();this._mat3=w.create();this._initialized=!1}dispose(){this._program=q.disposeMaybe(this._program);this._quad=q.disposeMaybe(this._quad)}render(c,b,h){const {context:a}=c;c=this._updateGeometry(c,h);if(null!=b){const {r:k,g:l,b:e,a:d}=b;a.setClearColor(d*k/255,d*l/255,d*e/255,d)}else a.setClearColor(0,0,0,0);a.setStencilFunction(g.CompareFunction.ALWAYS,0,255);a.setStencilWriteMask(255);c?(a.setClearStencil(0),a.clear(a.gl.STENCIL_BUFFER_BIT|
a.gl.COLOR_BUFFER_BIT),this._initialized||this._initialize(a),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.setColorMask(!1,!1,!1,!1),a.setBlendingEnabled(!1),a.setStencilOp(g.StencilOperation.KEEP,g.StencilOperation.KEEP,g.StencilOperation.REPLACE),a.setStencilFunction(g.CompareFunction.ALWAYS,1,255),a.setStencilTestEnabled(!0),a.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind()):(a.setClearStencil(1),a.clear(a.gl.STENCIL_BUFFER_BIT|
a.gl.COLOR_BUFFER_BIT))}_initialize(c){if(!this._initialized){var b=A.createProgram(c,z.stencil);b&&(this._program=b,this._quad=new y(c,[0,0,1,0,0,1,1,1]),this._initialized=!0)}}_updateGeometry(c,b){const {state:h,pixelRatio:a}=c,{size:k,rotation:l}=h,e=Math.round(k[0]*a),d=Math.round(k[1]*a);if(!h.spatialReference.isWrappable)return!1;c=v.toRadian(l);const r=Math.abs(Math.cos(c)),t=Math.abs(Math.sin(c)),u=Math.round(h.worldScreenWidth);if(Math.round(e*r+d*t)<=u)return!1;const D=(b.left-b.right)*
a/e;b=(b.bottom-b.top)*a/d;m.set(this._worldDimensionsPx,u*a,e*t+d*r,1);m.set(this._pxToNdc,2/e,-2/d,1);m.set(this._centerNdc,D,b,1);b=this._mat3;f.fromTranslation(b,this._centerNdc);f.scale(b,b,this._pxToNdc);0!==l&&f.rotate(b,b,c);f.scale(b,b,this._worldDimensionsPx);f.translate(b,b,B);return!0}}p.WorldExtentRenderer=C;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});