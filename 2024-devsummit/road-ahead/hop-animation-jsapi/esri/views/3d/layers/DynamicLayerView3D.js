// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/asyncUtils ../../../core/handleUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/Extent ../../../geometry/support/aaBoundingRect ./interfaces ./LayerView3D ./support/overlayImageUtils ./support/projectExtentUtils ../support/debugFlags ../terrain/interfaces ../webgl-engine/lib/ModelDirtyTypes ../webgl-engine/lib/RenderGeometry ../webgl-engine/lib/Texture ../webgl-engine/lib/UpdatePolicy ../webgl-engine/materials/ImageMaterial ../../layers/LayerView ../../layers/RefreshableLayerView ../../support/layerViewUtils ../../webgl/enums".split(" "),
function(m,x,B,q,y,h,C,r,n,S,D,z,k,E,F,u,G,H,t,v,I,J,K,L,M,N,O,A){n=class extends N(F.LayerView3D(M)){constructor(){super(...arguments);this.drapeSourceType=E.DrapeSourceType.RasterImage;this.updatePolicy=K.UpdatePolicy.SYNC;this.maximumDataResolution=this.fullExtentInLocalViewSpatialReference=null;this._images=[];this._extents=[];this._overlays=[];this.updateWhenStationary=!0;this._drapeSourceRenderer=null;this.refreshDebounced=h.debounce(async a=>{this.destroyed||await this._doRefresh(a).catch(b=>
{h.isAbortError(b)||q.getLogger(this).error(b)})},2E3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);this.addHandles(B.makeHandle(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)));this.addResolvingPromise(G.toViewIfLocal(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a)));this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler());this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>
{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{}));this._isScaleRangeLayer()&&this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,b){this._spatialReference=b;a.forEach((d,e)=>{this._overlays[e]=d;this._updateImageExtent(d,e)})}_updateImageExtent(a,b){const d=this._clippedExtent(a.extent,P);if(null!=d){var e=u.computeImageExportSize(a.extent,d,a.resolution);a=a.pixelRatio*this.view.state.pixelRatio;
var {layer:c}=this;if("imageMaxWidth"in c&&null!=c.imageMaxWidth||"imageMaxHeight"in c&&null!=c.imageMaxHeight){var f=c.imageMaxWidth;c=c.imageMaxHeight;if(e.width>f){const g=f/e.width;e.height=Math.floor(e.height*g);e.width=f;a*=g}e.height>c&&(f=c/e.height,e.width=Math.floor(e.width*f),e.height=c,a*=f)}f=this._extents[b];f&&k.equals(f.extent,d)&&this._imageSizeEquals(d,f.imageSize,e)||(this._extents[b]={extent:k.create(d),imageSize:e,pixelRatio:a},this.suspended||this._fetch(b).catch(g=>{h.isAbortError(g)||
q.getLogger(this).error(g)}))}}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(!this.suspended){var b=[];for(let d=0;d<this._extents.length;d++)this._extents[d]&&b.push(this._fetch(d,a));await Promise.allSettled(b)}}canResume(){if(!super.canResume())return!1;var a=this.layer;if(this._isScaleRangeActive()){const {minScale:b,maxScale:d}=a.effectiveScaleRange;a=this.view.scale;if(a<d||0<b&&a>b)return!1}return!0}async processResult(a,
b,d){if(b instanceof HTMLImageElement||b instanceof HTMLCanvasElement)a.image=b}findExtentInfoAt(a){for(const b of this._extents){const d=b.extent;if((new z(d[0],d[1],d[2],d[3],this._spatialReference)).contains(a))return b}return null}getFetchOptions(){}async redraw(a,b){await x.forEach(this._images,async(d,e)=>{d&&(await a(d,b),await this._createStageObjects(e,d.image,b))})}_imageSizeEquals(a,b,d){if(!this.maximumDataResolution)return!1;const e=k.width(a)/this.maximumDataResolution.x;a=k.height(a)/
this.maximumDataResolution.y;a=Math.abs(a/b.height-a/d.height);const c=H.debugFlags.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return Math.abs(e/b.width-e/d.width)<=c&&a<=c}async _fetch(a,b){if(!this.suspended){var d=this._extents[a],e=d.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:k.create(e)});var c=this._images[a];c.loadingAbortController=y.abortMaybe(c.loadingAbortController);
var f=new z(e[0],e[1],e[2],e[3],this._spatialReference);if(0===f.width||0===f.height)this._clearImage(a);else{var g=new AbortController;c.loadingAbortController=g;h.onAbort(b,()=>g.abort());var p=g.signal,w=this._waitFetchReady(p).then(async()=>{const l={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:p},{height:Q,width:R}=d.imageSize;return this.layer.fetchImage(f,R,Q,l)}).then(l=>{if(h.isAborted(p))throw q.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),
h.createAbortError();return this.processResult(c,l)}).then(()=>{k.copy(c.renderExtent,e)});c.loadingPromise=w;await this._updatingHandles.addPromise(w.then(async()=>{h.throwIfAborted(p);await this._createStageObjects(a,c.image,p)}).catch(l=>{l&&!h.isAbortError(l)&&q.getLogger(this).error(l);throw l;}).finally(()=>{w===c.loadingPromise&&(c.loadingPromise=null,c.loadingAbortController=null)}))}}}_clearImage(a){if(a=this._images[a]){null!=a.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([a.renderGeometry],
v.DirtyOperation.UPDATE),a.renderGeometry=null);const b=this.view._stage,d=a.texture;d?.unload();b.remove(d);a.texture=null;b.remove(a.material);a.material=null;a.loadingAbortController=y.abortMaybe(a.loadingAbortController);a.loadingPromise=null;a.image=null;a.pixelData=null}}async _createStageObjects(a,b,d){const e=this.view._stage,c=this._images[a];var f=()=>{c.texture?.unload();e.remove(c.texture);c.texture=null;c.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([c.renderGeometry],
v.DirtyOperation.UPDATE),c.renderGeometry=null)};if(b){const g=new J.Texture(b,{width:b.width,height:b.height,preMultiplyAlpha:!0,wrap:{s:A.TextureWrapMode.CLAMP_TO_EDGE,t:A.TextureWrapMode.CLAMP_TO_EDGE}});await x.result(this._images[a===t.OverlayIndex.INNER?t.OverlayIndex.OUTER:t.OverlayIndex.INNER].loadingPromise);h.throwIfAborted(d);f();await e.schedule(()=>g.load(e.renderView.renderingContext),d);e.add(g);c.texture=g;null==c.material?(c.material=new L.ImageMaterial({transparent:!0,textureId:g.id}),
e.add(c.material)):c.material.setParameters({textureId:g.id});if(a===t.OverlayIndex.INNER)f=u.createGeometryForExtent(c.material,c.renderExtent);else{b=this._images[0].renderExtent;if(!b){f();return}f=u.createOuterImageGeometry(c.material,b,c.renderExtent)}c.renderGeometry=new I.RenderGeometry(f);c.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin;this._drapeSourceRenderer.addGeometries([c.renderGeometry],v.DirtyOperation.UPDATE)}else f(),e.remove(c.material),c.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in
this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const {minScale:b,maxScale:d}=a.effectiveScaleRange;return O.isScaleRangeActive(b,d)}_clippedExtent(a,b){if("local"!==this.view.viewingMode)return k.copy(b,a);const d=this.view.basemapTerrain;return d.ready?k.intersection(a,d.extent,b):k.copy(b,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await C.whenOnce(()=>this.view.stationary,a);h.throwIfAborted(a)}};
m.__decorate([r.property()],n.prototype,"layer",void 0);m.__decorate([r.property()],n.prototype,"suspended",void 0);m.__decorate([r.property({readOnly:!0})],n.prototype,"fullExtentInLocalViewSpatialReference",void 0);m.__decorate([r.property()],n.prototype,"updating",void 0);m=n=m.__decorate([D.subclass("esri.views.3d.layers.DynamicLayerView3D")],n);const P=k.create();return m});