import './_virtual_index-634cbc09.js';
import { r } from './FramebufferObject-553bb493.js';
import './_commonjsHelpers-3f70742c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(){this._size=[0,0];}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null);}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:a,painter:l}=e,{amount:o}=r,h=a.gl,n=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,n),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(h.COLOR_BUFFER_BIT),l.blitTexture(a,n,9728,o);}_createOrResizeResources(t,r$1,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r$1&&this._size[1]===s||(this._size[0]=r$1,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r$1,s):this._layerFBOTexture=new r(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r$1,height:s}));}}

export { t as Opacity };
