import { g as t } from './index.js';
import { r, i as i$1 } from './RenderingContext-d31ba1e0.js';
import { a as i } from './WGLContainer-f415d29f.js';
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
const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}};}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null);}draw(e,r,a){const{context:l,state:n,painter:u,pixelRatio:h}=e,{materialManager:p}=u,d=this._programDesc,c=r.width,_=r.height,m=[Math.round(c/2),Math.round(_/2)],{blurRadius:f,offsetX:B,offsetY:g,color:b}=a,F=[h*t(B/2),h*t(g/2)];this._createOrResizeResources(e,c,_,m);const x=this._horizontalBlurFBO,T=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const O=this._layerFBOTexture;r.copyToTexture(0,0,c,_,0,0,O),this._quad||(this._quad=new i(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,m[0],m[1]);const w=this._quad;w.bind(),l.setBlendingEnabled(!1);const v=p.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(f)}]);l.bindProgram(v),l.bindFramebuffer(x),l.bindTexture(r.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",F),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",m),v.setUniform2fv("u_direction",s),v.setUniform1f("u_sigma",f),w.draw(),l.bindFramebuffer(T),l.bindTexture(x.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",o),w.draw(),l.bindFramebuffer(r),l.setViewport(0,0,c,_);const z=p.getProgram(e,d.composite);l.bindProgram(z),l.bindTexture(T.colorTexture,2),z.setUniform1i("u_blurTexture",2),l.bindTexture(O,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[b[3]*(b[0]/255),b[3]*(b[1]/255),b[3]*(b[2]/255),b[3]]),w.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),w.unbind();}_createOrResizeResources(t,i,s,o){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new r(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new r(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new i$1(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}));}}

export { a as DropShadow };
