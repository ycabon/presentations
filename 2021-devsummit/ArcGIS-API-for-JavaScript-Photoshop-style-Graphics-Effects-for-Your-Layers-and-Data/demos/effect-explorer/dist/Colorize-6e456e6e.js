import './index.js';
import { i } from './RenderingContext-d31ba1e0.js';
import { a as i$1 } from './WGLContainer-f415d29f.js';
import './_commonjsHelpers-34398bae.js';
import './Utils-ea321f1e.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './VertexArrayObject-b943938d.js';
import './ShaderCompiler-833038a1.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-54202b75.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,s){const{width:r,height:i}=t;this._createOrResizeResources(e,r,i);const{context:o,painter:a}=e,{materialManager:n}=a,l=this._programDesc,c=this._quad,h=s.colorMatrix;c.bind();const u=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,r,i,0,0,u),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const d=n.getProgram(e,l);o.bindProgram(d),o.bindTexture(u,2),d.setUniformMatrix4fv("u_coefficients",h),d.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind();}_createOrResizeResources(s,r,i$2){const{context:o}=s;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===i$2||(this._size[0]=r,this._size[1]=i$2,this._layerFBOTexture?this._layerFBOTexture.resize(r,i$2):this._layerFBOTexture=new i(o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:i$2}),this._quad||(this._quad=new i$1(o,[-1,-1,1,-1,-1,1,1,1])));}}

export { s as Colorize };
