import './index.js';
import { r as r$1 } from './RenderingContext-707935bb.js';
import { a as i$1 } from './WGLContainer-ee097a9e.js';
import './_commonjsHelpers-34398bae.js';
import './Utils-923bb70b.js';
import './Container-ef1b7692.js';
import './mat4f32-a4d1c0af.js';
import './VertexArrayObject-5a96c147.js';
import './ShaderCompiler-b71ac8b5.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-0d01090a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}};}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null);}draw(t,r,s){const{context:i}=t,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(t),this._quad||(this._quad=new i$1(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,r,n):this._radialBlur(t,r),o.unbind();}_gaussianBlur(t,e,i){const{context:a,state:n,painter:o,pixelRatio:l}=t,{size:u}=n,{materialManager:d}=o,b=this._programDesc,c=this._quad,h=[Math.round(l*u[0]),Math.round(l*u[1])],p=this._blurFBO,_=d.getProgram(t,b.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.bindProgram(_),a.setBlendingEnabled(!1),a.bindFramebuffer(p),a.bindTexture(e.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",r),_.setUniform1f("u_sigma",i),c.draw(),a.bindFramebuffer(e),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(p.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",s),c.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0);}_radialBlur(t,e){const{context:r,painter:s}=t,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const l=i.getProgram(t,a.radialBlur);r.bindProgram(l),r.setBlendingEnabled(!1),r.bindTexture(e.colorTexture,4),l.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(e),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=i.getProgram(t,a.blit);r.bindProgram(u),r.bindTexture(o.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw();}_createOrResizeResources(e){const{context:r,state:s,pixelRatio:i}=e,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new r$1(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}));}}

export { i as Blur };
