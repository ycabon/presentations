// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Evented ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/watch ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/ellipsoidUtils ../../ViewAnimation ../../ViewingMode ./Constraints ./controllers/AnimationController ./controllers/CameraController ../support/PropertiesPool ../webgl-engine/lib/Camera ../../support/RenderState".split(" "),
function(c,b,q,r,d,A,B,C,t,u,h,v,w,k,x,y,l,n,e,m){b=class extends b{constructor(){super(...arguments);this._propertiesPool=new n.PropertiesPool({camera:e.Camera},this);this._lastSeenCameraProjectionValues=new e.Camera;this.mode=m.RenderState.ANIMATING;this._cssCamera=new e.Camera;this._camera=new e.Camera;this.contentPixelRatio=this.rasterPixelRatio=1;this.events=new q;this.viewingMode=k.ViewingMode.Global;this._cameraChanged=!1;this._updateQueue=[];this._processingUpdates=!1}init(a,f){this._set("viewingMode",
a);this._set("spatialReference",f);this._set("constraints",new x.Constraints({mode:this.viewingMode}))}exit(){this.cameraController=null;this._propertiesPool.destroy();this._propertiesPool=new n.PropertiesPool({camera:e.Camera},this)}destroy(){this.cameraController=null;this._propertiesPool?.destroy();this._propertiesPool=null}createInitialCamera(){if(this.viewingMode===k.ViewingMode.Global){const a=v.getReferenceEllipsoid(this.spatialReference).radius;this.camera=new e.Camera({eye:h.fromValues(4*
a,0,0),center:h.fromValues(a,0,0),up:h.fromValues(0,0,1)})}else this.camera=new e.Camera({eye:h.fromValues(0,0,100),center:h.fromValues(0,0,0),up:h.fromValues(0,1,0)})}get animation(){return this.cameraController instanceof y.AnimationController&&null!=this.cameraController.viewAnimation?this.cameraController.viewAnimation:null}get cssCamera(){const a=this._cssCamera.copyFrom(this.camera),{height:f,width:z,pixelRatio:p}=this.camera;a.pixelRatio=1;a.height=Math.round(f/p);a.width=Math.round(z/p);return a}get camera(){return this._camera}set camera(a){a!==
g&&g.copyFrom(a);g.computeUp(this.viewingMode);this.events.emit("before-camera-change",g);a=this._camera;this._cameraProjectionChanged(this._lastSeenCameraProjectionValues,g)&&(this._lastSeenCameraProjectionValues.copyFrom(g),this.events.emit("camera-projection-changed",this._lastSeenCameraProjectionValues));if(!a.equals(g)&&(this._camera=this._propertiesPool.get("camera").copyFrom(g),this._cameraChanged=!a.almostEquals(g))){const f=u.afterDispatch(()=>{this._cameraChanged=!1;f.remove()})}}get pixelRatio(){return this.camera.pixelRatio}get alignPixelEnabled(){return this.pixelRatio===
this.rasterPixelRatio&&this.mode===m.RenderState.IDLE}get updating(){return this.mode!==m.RenderState.IDLE}get contentCamera(){return this._contentCamera??this.camera}set contentCamera(a){this._contentCamera=null!=a?a.clone():null}get fixedContentCamera(){return null!=this._contentCamera}get isGlobal(){return this.viewingMode===k.ViewingMode.Global}get isLocal(){return this.viewingMode===k.ViewingMode.Local}get navigating(){return!(!this.cameraController||!this.cameraController.isInteractive)}get stationary(){return!this._cameraChanged&&
!this.navigating}get cameraController(){return this._get("cameraController")}set cameraController(a){this.stopActiveCameraController()?(this.cameraController?.destroy(),a&&(this.removeHandles("ViewStateHandles"),this.addHandles(r.when(()=>a.state===l.State.Finished||a.state===l.State.Stopped,()=>{this._set("cameraController",null);this.updateCamera(f=>a.onControllerEnd(f))},{sync:!0,once:!0}),"ViewStateHandles"),a.onControllerStart(this.camera)),this._set("cameraController",a)):a&&(a.state=l.State.Rejected)}switchCameraController(a){this.cameraController=
a;return a.state!==l.State.Rejected}stopActiveCameraController(){return this.cameraController&&!this.cameraController.stopController()?!1:!0}updateCamera(a){this._updateQueue.push(a);this._processUpdateQueue()}_processUpdateQueue(){if(0!==this._updateQueue.length&&!this._processingUpdates){this._processingUpdates=!0;var a=this._updateQueue.shift();g.copyFrom(this._get("camera"));a(g);this.camera=g;this._processingUpdates=!1;this._processUpdateQueue()}}_cameraProjectionChanged(a,f){return a.fov!==
f.fov||a.fullViewport[0]!==f.fullViewport[0]||a.fullViewport[1]!==f.fullViewport[1]||a.fullViewport[2]!==f.fullViewport[2]||a.fullViewport[3]!==f.fullViewport[3]||a.padding[e.PaddingSide.TOP]!==f.padding[e.PaddingSide.TOP]||a.padding[e.PaddingSide.RIGHT]!==f.padding[e.PaddingSide.RIGHT]||a.padding[e.PaddingSide.BOTTOM]!==f.padding[e.PaddingSide.BOTTOM]||a.padding[e.PaddingSide.LEFT]!==f.padding[e.PaddingSide.LEFT]?!0:!1}};c.__decorate([d.property()],b.prototype,"mode",void 0);c.__decorate([d.property({readOnly:!0,
type:w})],b.prototype,"animation",null);c.__decorate([d.property({type:e.Camera})],b.prototype,"cssCamera",null);c.__decorate([d.property()],b.prototype,"_cssCamera",void 0);c.__decorate([d.property({type:e.Camera})],b.prototype,"camera",null);c.__decorate([d.property()],b.prototype,"_camera",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"pixelRatio",null);c.__decorate([d.property()],b.prototype,"rasterPixelRatio",void 0);c.__decorate([d.property()],b.prototype,"contentPixelRatio",
void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"alignPixelEnabled",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"updating",null);c.__decorate([d.property({})],b.prototype,"_contentCamera",void 0);c.__decorate([d.property({type:e.Camera})],b.prototype,"contentCamera",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"fixedContentCamera",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"constraints",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,
"events",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"isGlobal",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"isLocal",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"viewingMode",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"spatialReference",void 0);c.__decorate([d.property()],b.prototype,"navigating",null);c.__decorate([d.property()],b.prototype,"stationary",null);c.__decorate([d.property()],b.prototype,"_cameraChanged",void 0);c.__decorate([d.property()],
b.prototype,"cameraController",null);c=b=c.__decorate([t.subclass("esri.views.3d.state.ViewState")],b);const g=new e.Camera;return c});