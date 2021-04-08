import './_virtual_index-634cbc09.js';
import { a as h } from './FramebufferObject-553bb493.js';
import { r as r$1 } from './WGLContainer-9f4143c6.js';
import './_commonjsHelpers-3f70742c.js';
import './Utils-3e0360c1.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-202e82ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}};}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null);}draw(e,r,s){const{context:i}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new r$1(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,r,n):this._radialBlur(e,r),o.unbind();}_gaussianBlur(e,t,i){const{context:a,state:n,painter:o,pixelRatio:l}=e,{size:u}=n,{materialManager:d}=o,b=this._programDesc,c=this._quad,h=[Math.round(l*u[0]),Math.round(l*u[1])],p=this._blurFBO,m=d.getProgram(e,b.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.bindProgram(m),a.setBlendingEnabled(!1),a.bindFramebuffer(p),a.bindTexture(t.colorTexture,4),m.setUniform1i("u_colorTexture",4),m.setUniform2fv("u_texSize",h),m.setUniform2fv("u_direction",r),m.setUniform1f("u_sigma",i),c.draw(),a.bindFramebuffer(t),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(p.colorTexture,5),m.setUniform1i("u_colorTexture",5),m.setUniform2fv("u_direction",s),c.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0);}_radialBlur(e,t){const{context:r,painter:s}=e,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const l=i.getProgram(e,a.radialBlur);r.bindProgram(l),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),l.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=i.getProgram(e,a.blit);r.bindProgram(u),r.bindTexture(o.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw();}_createOrResizeResources(t){const{context:r,state:s,pixelRatio:i}=t,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new h(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}));}}

export { i as Blur };
