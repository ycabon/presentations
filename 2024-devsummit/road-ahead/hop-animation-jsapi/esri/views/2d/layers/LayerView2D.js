// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/scaleUtils ../engine/Container ../support/HighlightOptions ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),function(k,
e,l,m,n,c,f,y,z,A,p,q,r,t,u,v,w){const h=l.ofType({key:"type",base:null,typeMap:{rect:u,path:w,geometry:v}});k.LayerView2DMixin=d=>{d=class extends d{constructor(){super(...arguments);this.attached=!1;this.clips=new h;this.lastUpdateId=-1;this.visibleAtCurrentScale=this.updateRequested=this.moving=!1;this.highlightOptions=null}initialize(){const b=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&b&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n("layerview:spatial-reference-incompatible",
"The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new r.Container),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([c.watch(()=>this.suspended,a=>{this.container&&(this.container.visible=!a)},c.syncAndInitial),c.watch(()=>this.updateSuspended,a=>{this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},c.syncAndInitial),c.watch(()=>this.layer?.opacity??
1,a=>{this.container&&(this.container.opacity=a)},c.syncAndInitial),c.watch(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},c.syncAndInitial),c.watch(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},c.syncAndInitial),c.watch(()=>this.highlightOptions,a=>this.container.highlightOptions=a,c.syncAndInitial),c.on(()=>this.clips,"change",()=>{this.container&&(this.container.clips=
this.clips)},c.syncAndInitial),c.watch(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:a})=>{a=null!=a?this.isVisibleAtScale(a):!1;a!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",a)},c.syncAndInitial)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach();
this.updateRequested=!1}get spatialReferenceSupported(){const b=this.view?.spatialReference;return null==b||this.supportsSpatialReference(b)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&
(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(b){const a=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!a)return!0;const {minScale:g,maxScale:x}=a;return q.isInScaleRange(b,g,x)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(b){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",
b),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(b)))}hitTest(b,a){return Promise.resolve(null)}supportsSpatialReference(b){return!0}canResume(){return this.spatialReferenceSupported?super.canResume()?this.visibleAtCurrentScale:!1:!1}getSuspendInfo(){const b=super.getSuspendInfo(),a=!this.spatialReferenceSupported,g=this.visibleAtCurrentScale;a&&(b.spatialReferenceNotSupported=a);g&&(b.outsideScaleRange=g);return b}addAttachHandles(b){this.addHandles(b,"attach")}};
e.__decorate([f.property()],d.prototype,"attached",void 0);e.__decorate([f.property({type:h,set(b){b=m.referenceSetter(b,this._get("clips"),h);this._set("clips",b)}})],d.prototype,"clips",void 0);e.__decorate([f.property()],d.prototype,"container",void 0);e.__decorate([f.property()],d.prototype,"moving",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"spatialReferenceSupported",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"updateParameters",void 0);e.__decorate([f.property()],
d.prototype,"updateRequested",void 0);e.__decorate([f.property()],d.prototype,"updateSuspended",null);e.__decorate([f.property()],d.prototype,"updating",null);e.__decorate([f.property()],d.prototype,"view",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"visibleAtCurrentScale",void 0);e.__decorate([f.property({type:t})],d.prototype,"highlightOptions",void 0);return d=e.__decorate([p.subclass("esri.views.2d.layers.LayerView2D")],d)};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});