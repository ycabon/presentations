/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{f as t,r}from"./asyncUtils.js";import{m as i}from"./handleUtils.js";import{L as a}from"./Logger.js";import{a as s}from"./maybe.js";import{debounce as n,isAbortError as o,onAbort as l,isAborted as h,createAbortError as m,throwIfAborted as d}from"../core/promiseUtils.js";import{whenOnce as c}from"../core/reactiveUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as g}from"../core/accessorSupport/decorators/subclass.js";import p from"../geometry/Extent.js";import{w as f,o as y,l as w,b as _,c as x,h as R,p as S}from"./aaBoundingRect.js";import{D as v,b,O as E,R as j}from"./RenderGeometry.js";import{L as A}from"./LayerView3D.js";import{n as I}from"./DoubleArray.js";import{n as M,T as L}from"./StencilUtils.js";import{A as D}from"./Attribute.js";import{G}from"./Geometry.js";import{b as C}from"./GeometryUtil.js";import{V as O}from"./VertexAttribute.js";import{t as P}from"./projectExtentUtils.js";import{d as T}from"./debugFlags2.js";import{U}from"./RibbonLineMaterial.js";import{I as H}from"./ImageMaterial.js";import V from"../views/layers/LayerView.js";import{R as N}from"./RefreshableLayerView.js";import{a as z}from"./layerViewUtils.js";import{b as F}from"./enums.js";function q(e,t){return C(e,[[t[0],t[1],-1],[t[2],t[1],-1],[t[2],t[3],-1],[t[0],t[3],-1]])}const W=[0,0,1];let B=class extends(N(A(V))){constructor(){super(...arguments),this.drapeSourceType=v.RasterImage,this.updatePolicy=U.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=n((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{o(e)||a.getLogger(this).error(e)}))}),2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(i((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise(P(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this._updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler())),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks((()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")}),(()=>{}))),this._isScaleRangeLayer()&&this._updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.notifyChange("suspended")))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(((e,t)=>{this._overlays[t]=e,this._updateImageExtent(e,t)}))}_updateImageExtent(e,t){const r=this._clippedExtent(e.extent,Y);if(null==r)return;const i=function(e,t,r){const i=f(e)/y(e),a={width:r,height:r};return i>1.0001?a.height=r/i:i<.9999&&(a.width=r*i),a.width=Math.round(a.width/(f(e)/f(t))),a.height=Math.round(a.height/(y(e)/y(t))),a}(e.extent,r,e.resolution);let s=e.pixelRatio*this.view.state.pixelRatio;const{layer:n}=this;if("imageMaxWidth"in n&&null!=n.imageMaxWidth||"imageMaxHeight"in n&&null!=n.imageMaxHeight){const e=n.imageMaxWidth,t=n.imageMaxHeight;if(i.width>e){const t=e/i.width;i.height=Math.floor(i.height*t),i.width=e,s*=t}if(i.height>t){const e=t/i.height;i.width=Math.floor(i.width*e),i.height=t,s*=e}}const l=this._extents[t];l&&_(l.extent,r)&&this._imageSizeEquals(r,l.imageSize,i)||(this._extents[t]={extent:x(r),imageSize:i,pixelRatio:s},this.suspended||this._fetch(t).catch((e=>{o(e)||a.getLogger(this).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let r=0;r<this._extents.length;r++)this._extents[r]&&t.push(this._fetch(r,e));await Promise.allSettled(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:r}=e.effectiveScaleRange,i=this.view.scale;if(i<r||t>0&&i>t)return!1}return!0}async processResult(e,t,r){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const r=t.extent;if(new p(r[0],r[1],r[2],r[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,r){await t(this._images,(async(t,i)=>{t&&(await e(t,r),await this._createStageObjects(i,t.image,r))}))}_imageSizeEquals(e,t,r){if(!this.maximumDataResolution)return!1;const i=f(e)/this.maximumDataResolution.x,a=y(e)/this.maximumDataResolution.y,s=i/t.width,n=a/t.height,o=i/r.width,l=a/r.height,h=Math.abs(s-o),m=Math.abs(n-l),d=T.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return h<=d&&m<=d}async _fetch(e,t){if(this.suspended)return;const r=this._extents[e],i=r.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:x(i)});const n=this._images[e];n.loadingAbortController=s(n.loadingAbortController);const c=new p(i[0],i[1],i[2],i[3],this._spatialReference);if(0===c.width||0===c.height)return void this._clearImage(e);const u=new AbortController;n.loadingAbortController=u,l(t,(()=>u.abort()));const g=u.signal,f=this._waitFetchReady(g).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:g},{height:i,width:a}=r.imageSize;return this.layer.fetchImage(c,a,i,t)})).then((e=>{if(h(g))throw a.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),m();return this.processResult(n,e)})).then((()=>{R(n.renderExtent,i)}));n.loadingPromise=f,await this._updatingHandles.addPromise(f.then((async()=>{d(g),await this._createStageObjects(e,n.image,g)})).catch((e=>{throw e&&!o(e)&&a.getLogger(this).error(e),e})).finally((()=>{f===n.loadingPromise&&(n.loadingPromise=null,n.loadingAbortController=null)})))}_clearImage(e){const t=this._images[e];if(t){null!=t.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],b.UPDATE),t.renderGeometry=null);const e=this.view._stage,r=t.texture;r?.unload(),e.remove(r),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController=s(t.loadingAbortController),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const a=this.view._stage,s=this._images[e],n=()=>{s.texture?.unload(),a.remove(s.texture),s.texture=null,s.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([s.renderGeometry],b.UPDATE),s.renderGeometry=null)};if(t){const o=new L(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:F.CLAMP_TO_EDGE,t:F.CLAMP_TO_EDGE}});let l;if(await r(this._images[e===E.INNER?E.OUTER:E.INNER].loadingPromise),d(i),n(),await a.schedule((()=>o.load(a.renderView.renderingContext)),i),a.add(o),s.texture=o,null==s.material?(s.material=new H({transparent:!0,textureId:o.id}),a.add(s.material)):s.material.setParameters({textureId:o.id}),e===E.INNER)l=q(s.material,s.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void n();l=function(e,t,r){if(!w(t,r))return q(e,r);const i=[t[1]-r[1],Math.min(t[3],r[3])-Math.max(t[1],r[1]),r[3]-t[3],123456],a=[t[0]-r[0],Math.min(t[2],r[2])-Math.max(t[0],r[0]),r[2]-t[2],123456],s=r[2]-r[0],n=r[3]-r[1],o=a[0]>0&&a[2]>0?3:2,l=i[0]>0&&i[2]>0?3:2,h=(l+1)*(o+1),m=I(3*h),d=M(2*h),c=new Array(6*(l*o-1));let u=0,g=0,p=0,f=0,y=0;for(let e=0;e<4;e++){const t=i[e];if(t<=0)continue;let l=0;for(let t=0;t<4;t++){const i=a[t];i<=0||(m[g++]=r[0]+l,m[g++]=r[1]+u,m[g++]=-1,d[p++]=l/s,d[p++]=u/n,t<3&&e<3&&(1!==t||1!==e)&&(c[y++]=f,c[y++]=f+1,c[y++]=f+o+1,c[y++]=f+1,c[y++]=f+o+2,c[y++]=f+o+1),f++,l+=i)}u+=t}const _=new Array(c.length);return new G(e,[[O.POSITION,new D(m,c,3,!0)],[O.NORMAL,new D(W,_,3,!0)],[O.UV0,new D(d,c,2,!0)]])}(s.material,e,s.renderExtent)}s.renderGeometry=new j(l),s.renderGeometry.localOrigin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([s.renderGeometry],b.UPDATE)}else n(),a.remove(s.material),s.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:r}=e.effectiveScaleRange;return z(t,r)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return R(t,e);const r=this.view.basemapTerrain;return r.ready?S(e,r.extent,t):R(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await c((()=>this.view.stationary),e),d(e)}};e([u()],B.prototype,"layer",void 0),e([u()],B.prototype,"suspended",void 0),e([u({readOnly:!0})],B.prototype,"fullExtentInLocalViewSpatialReference",void 0),e([u()],B.prototype,"updating",void 0),B=e([g("esri.views.3d.layers.DynamicLayerView3D")],B);const k=B,Y=x();export{k as D};