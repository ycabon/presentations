import { c as u } from './_virtual_index-2683c931.js';
import { a as h, r as r$1 } from './FramebufferObject-c19fef9d.js';
import { r } from './WGLContainer-0b2e4b10.js';
import './_commonjsHelpers-3f70742c.js';
import './Utils-0b584b8b.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-2936dc4b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null);}draw(e,r$1,a){const{context:l,state:n,painter:u$1,pixelRatio:h}=e,{materialManager:p}=u$1,d=this._programDesc,c=r$1.width,m=r$1.height,_=[Math.round(c/2),Math.round(m/2)],{blurRadius:f,offsetX:B,offsetY:b,color:g}=a,F=[h*u(B/2),h*u(b/2)];this._createOrResizeResources(e,c,m,_);const x=this._horizontalBlurFBO,T=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const O=this._layerFBOTexture;r$1.copyToTexture(0,0,c,m,0,0,O),this._quad||(this._quad=new r(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,_[0],_[1]);const w=this._quad;w.bind(),l.setBlendingEnabled(!1);const v=p.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(f)}]);l.bindProgram(v),l.bindFramebuffer(x),l.bindTexture(r$1.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",F),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",_),v.setUniform2fv("u_direction",s),v.setUniform1f("u_sigma",f),w.draw(),l.bindFramebuffer(T),l.bindTexture(x.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",o),w.draw(),l.bindFramebuffer(r$1),l.setViewport(0,0,c,m);const z=p.getProgram(e,d.composite);l.bindProgram(z),l.bindTexture(T.colorTexture,2),z.setUniform1i("u_blurTexture",2),l.bindTexture(O,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),w.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),w.unbind();}_createOrResizeResources(t,i,s,o){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new h(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new h(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new r$1(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}));}}

export { a as DropShadow };
