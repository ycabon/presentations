import { gI as e, gJ as i, I as x, eq as n$1, gD as a, t, ox as f, m as r, gK as E, qs as a$1, f8 as r$1, h3 as t$1, sR as C, jp as d, gP as O, gT as T, sB as I, sz as ue, jU as L, ay as D, t3 as c, u as e$1, y, z as n$2 } from './_virtual_index-1ea2035a.js';
import { n } from './LayerView3D-c60482d9.js';
import { p } from './ImageMaterial-26ca33d0.js';
import { u } from './LayerView-04d8537b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let j=class extends(n(u)){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=e.RasterImage,this.updatePolicy=i.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=x((async(e,t,r)=>{const i=await this._collectMediaElements(e,t,r);this._synchronizeRenderElements(i);}),0);}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add([n$1((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),a((()=>this.layer.source),"refresh",(()=>this._updateWithLastDrapingExtent()))]),this.updatingHandles.add((()=>this.suspended),(()=>this._updateWithLastDrapingExtent()));}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent();}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(t(this._lastDrapingExtent)||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t$1}=this._lastDrapingExtent;this.updatingHandles.addPromise(this._update(e,t$1).catch((()=>{})));}async _collectMediaElements(e,t$1,r){const i=this.layer.source;return t(i)?new Set:new Set((await Promise.all(e.map((e=>i.queryElements(f(e.extent,t$1),{signal:r}))))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e);}_synchronizeRenderElementsRemove(e){const t=new Set,r$1=[];this._renderedElements.forEach(((i,s)=>{e.has(s)||(t.add(s),r(i.renderData)&&r$1.push(i.renderData.renderGeometry),this._removeElement(s,i));})),this._renderer.removeGeometries(r$1,E.REMOVE);}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t);}_removeElement(e,{renderData:t,handle:r}){this._destroyRenderData(t),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),r.remove();}async _createRenderElement(e){const t=new a$1({spatialReference:this.view.spatialReference,element:e}),s={renderData:null,handle:r$1([this.updatingHandles.add((()=>e.opacity),(e=>{r(s.renderData)&&s.renderData.material.setParameters({opacity:e});})),this.updatingHandles.add((()=>t.coords),(e=>{r(s.renderData)?this._updateGeometry(s,s.renderData,e):this._initializeRenderData(t,s);})),this.updatingHandles.add((()=>e.content),(()=>this._initializeRenderData(t,s))),t$1(t)])};this._renderedElements.set(e,s),this._uidToElement.set(e.uid,e),this.updatingHandles.addPromise(e.load().catch((()=>{}))),this._initializeRenderData(t,s);}_initializeRenderData(e,t$1){const{coords:r$1,element:i}=e;if(t(r$1)||t(i.content))return void(t$1.renderData=this._destroyRenderData(t$1.renderData));if(r(t$1.renderData))return;const n=this._createTexture(i.content);this.view._stage.add(n);const d$1=this.view._stage.loadImmediate(n);C(d$1)&&this.updatingHandles.addPromise(d$1);const l=new p({initTextureTransparent:!0,textureId:n.id,opacity:i.opacity,transparent:!0}),m=this._positionVertexBufferFromCoordinates(r$1),p$1=[0,0,1,0,1,1,0,1],h=[0,1,2,0,2,3],c=new d([[O.POSITION,{data:m,size:3,exclusive:!0}],[O.UV0,{data:p$1,size:2,exclusive:!0}]],[[O.POSITION,h],[O.UV0,h]]),u=new T(c,l,{layerUid:this.layer.uid,graphicUid:i.uid});this._renderer.addGeometries([u],E.ADD),t$1.renderData={renderGeometry:u,texture:n,material:l};}_updateGeometry(e,t$1,r){if(t(r))return void(e.renderData=this._destroyRenderData(e.renderData));const i=this._positionVertexBufferFromCoordinates(r);t$1.renderGeometry.vertexAttributes.get(O.POSITION).data=i,this._renderer.modifyGeometries([t$1.renderGeometry],I.VERTEXATTRS);}_positionVertexBufferFromCoordinates(e){const[t,r,i,s]=e.rings[0];return new Float64Array([t[0],t[1],ue,s[0],s[1],ue,i[0],i[1],ue,r[0],r[1],ue])}_destroyRenderData(e){return t(e)||(this.view._stage.remove(e.texture),this._renderer.removeGeometries([e.renderGeometry],E.REMOVE),e.material.dispose()),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height;return new L(e,{wrap:{s:D.CLAMP_TO_EDGE,t:D.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:r,mipmap:!0,powerOfTwoResizeMode:c.STRETCH,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const e=this;return {get numberOfElements(){return e._renderedElements.size}}}};e$1([y({readOnly:!0})],j.prototype,"type",void 0),e$1([y()],j.prototype,"layer",void 0),j=e$1([n$2("esri.views.3d.layers.MediaLayerView3D")],j);const M=j;

export { M as default };