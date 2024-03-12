// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../Color ../geometry ../Viewpoint ../core/Accessor ../core/Evented ../core/Promise ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../layers/support/ExtentAndRotationGeoreference ../layers/support/MediaElementView ../layers/support/VideoElement ./DOMContainer ./2d/viewpointUtils ./2d/ViewStateManager ./2d/engine/webgl/Overlay ./2d/engine/webgl/OverlayContainer ../geometry/SpatialReference ../geometry/Extent".split(" "),
function(p,f,l,L,x,y,d,z,k,h,M,N,O,q,r,A,B,C,D,E,F,G,H,I){async function J(){const [,{Stage:a}]=await Promise.all([new Promise((b,c)=>p(["./2d/webglDeps"],b,c)),new Promise((b,c)=>p(["./2d/mapViewDeps"],b,c))]);t=a}function u(a,b){const [c,e]=a,[m,n]=b;a=m/n;b=e*a;const g=c/a;return 1<=c/e?1<=a?b<=c?[b,e]:[c,g]:g<=e?[c,g]:[b,e]:1<=a?g<=e?[c,g]:[b,e]:b<=c?[b,e]:[c,g]}function v(a,b){b=a&&D.extentToScale(a,b);return new x({targetGeometry:a.center,scale:b})}function w(a){return new I({xmin:0,ymin:0,
xmax:a[0],ymax:a[1],spatialReference:{wkid:0}})}const K=new l("#000");let t;l=class extends y{};l=f.__decorate([q.subclass("Base")],l);d=class extends C.DOMContainer(d.EventedMixin(z.EsriPromiseMixin(l))){constructor(a){super(a);this.stateManager=new E.ViewStateManager;this._isValid=!1;this.layer=null;this.ready=!1;this.addHandles([k.watch(()=>this.preconditionsReady,b=>{b?this._startup():this._teardown()}),k.watch(()=>this.layer,()=>this.addResolvingPromise(k.whenOnce(()=>this.ready)),k.initial)])}initialize(){this.addResolvingPromise(Promise.all([J()]).then(()=>
{this._isValid=!0;return k.whenOnce(()=>this.ready)}))}destroy(){this._teardown()}get state(){return this.stateManager.state}get preconditionsReady(){return!(!this._isValid||0===this.width||0===this.height||0===this.videoWidth||0===this.videoHeight)}get videoHeight(){return this.layer?.videoHeight||0}get videoWidth(){return this.layer?.videoWidth||0}_startup(){if(this.layer){var a=u(this.size,[this.videoWidth,this.videoHeight]),b=w(a);a=v(b,a);this._mediaElementView=new A.MediaElementView({element:new B({video:this.layer.videoElement,
georeference:new r({extent:b}),autoplay:!1}),spatialReference:new H({wkid:0})});this.stateManager.startup(a,this.size,a.targetGeometry.spatialReference);var c=new t(this.surface,{renderingOptions:{samplingMode:"dynamic",edgeLabelsVisible:!0,labelsAnimationTime:125,labelCollisionsEnabled:!0},backgroundColor:K});this.stage=c;this.addHandles([k.watch(()=>this.state.id,()=>c.state=this.state,k.syncAndInitial),this.on("resize",({width:e,height:m})=>{if(this._mediaElementView){const n=u([e,m],[this.videoWidth,
this.videoHeight]),g=w(n);this._mediaElementView.element.georeference=new r({extent:g});this.stateManager.viewpoint=v(g,n);this.stateManager.resize(e,m)}})],"video-view");b=new F(this._mediaElementView);this.overlayContainer=new G;this.overlayContainer.addChild(b);this.stage.addChild(this.overlayContainer);this._set("ready",!0)}}_teardown(){this.stage.destroy();this._mediaElementView=this.stage=null;this.overlayContainer.removeAllChildren();this.overlayContainer=null;this.removeHandles("video-view");
this._set("ready",!1);this.stateManager.teardown()}};f.__decorate([h.property()],d.prototype,"stateManager",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"state",null);f.__decorate([h.property()],d.prototype,"_isValid",void 0);f.__decorate([h.property()],d.prototype,"layer",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"preconditionsReady",null);f.__decorate([h.property({readOnly:!0})],d.prototype,"ready",void 0);f.__decorate([h.property({readOnly:!0})],d.prototype,"videoHeight",
null);f.__decorate([h.property({readOnly:!0})],d.prototype,"videoWidth",null);return d=f.__decorate([q.subclass("esri.views.VideoView")],d)});