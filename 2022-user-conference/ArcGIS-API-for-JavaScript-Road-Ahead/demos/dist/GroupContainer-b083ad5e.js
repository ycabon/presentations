import { a } from './WGLContainer-c474bc93.js';
import { ax as L } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends a{constructor(){super(...arguments),this.requiresDedicatedFBO=!1;}dispose(){}doRender(e){const r=this.createRenderParams(e),{context:s,painter:o,profiler:n}=r;this._prevFBO=s.getBoundFramebufferObject(),n.recordContainerStart(this.name);const i=this._getFbo(r),a=o.getRenderTarget();s.bindFramebuffer(i),o.setRenderTarget(i),s.setDepthWriteEnabled(!0),s.setColorMask(!0,!0,!0,!0),s.setClearColor(0,0,0,0),s.setClearDepth(1),s.clear(s.gl.COLOR_BUFFER_BIT|s.gl.DEPTH_BUFFER_BIT),s.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(r);for(const t of this.children)t.afterRender(e);o.setRenderTarget(a),o.releaseFbo(i),s.bindFramebuffer(this._prevFBO),o.beforeRenderLayer(r,this._clippingInfos?255:0,this.computedOpacity),s.setStencilTestEnabled(!1),s.setStencilWriteMask(0),o.blitTexture(s,i.colorTexture,L.NEAREST),o.compositeLayer(r,this.computedOpacity),n.recordContainerEnd();}createRenderParams(e){return {...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:r}=e,{width:s,height:o}=t.getViewport();return r.acquireFbo(s,o)}}

export { r };
