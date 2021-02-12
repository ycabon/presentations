import './index.js';
import { i } from './RenderingContext-241e9091.js';
import './_commonjsHelpers-34398bae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(){this._size=[0,0];}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:a,painter:l}=e,{amount:o}=r,n=a.gl,h=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(n.COLOR_BUFFER_BIT),l.blitTexture(a,h,9728,o);}_createOrResizeResources(t,r,s){const{context:i$1}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new i(i$1,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}));}}

export { t as Opacity };
