// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../geometry ../Viewpoint ../core/Error ../core/Logger ../core/now ../core/promiseUtils ../core/screenUtils ../core/watchUtils ../core/accessorSupport/decorators ../geometry/support/webMercatorUtils ../layers/support/TileInfo ./PopupView ./View ./ViewAnimation ./2d/AnimationManager ./2d/FrameTask ./2d/layerViewModuleImportUtils ./2d/MapViewConstraints ./2d/PaddedViewState ./2d/tiling ./2d/viewpointUtils ./2d/support/Timeline".split(" "),
function(M,N,n,A,e,f,r,u,B,v,p,C,D,d,t,E,F,G,H,I,J,w,x,K,L,h,y){var k=B.getLogger("esri.views.MapView");return function(z){function b(a){var c=z.call(this,a)||this;c._stationaryTimer=null;c.frameTask=new J.default(c);c.featuresTilingScheme=null;c.fullOpacity=1;c.initialExtent=null;c.labelManager=null;c.renderingOptions={samplingMode:"dynamic",edgeLabelsVisible:!0,labelsAnimationTime:125,labelCollisionsEnabled:!0};c.resizeAlign="center";c.timeline=new y.Timeline;c.type="2d";c.constraints=new x;c.padding=
{top:0,right:0,bottom:0,left:0};var b=c.handles,q=function(){return c.notifyChange("updating")};b.add([c.watch("viewpoint",function(){c._lastStationaryEventTimestamp=v();c._flipStationary(160)},!0),c.on("resize",function(a){return c._resizeHandler(a)}),c.watch("animationManager.animation",function(a){c.animation=a}),c.allLayerViews.on("change",function(){q();b.remove("map-view-base-layerViewsUpdating");b.add(c.allLayerViews.map(function(a){return a.watch("updating",q)}),"map-view-base-layerViewsUpdating")})],
"map-view-base");return c}A(b,z);b.prototype.destroy=function(){this.destroyed||(this._set("preconditionsReady",!1),this._gotoTask=this.frameTask=null)};Object.defineProperty(b.prototype,"animation",{set:function(a){var c=this,b=this._get("animation");a!==b&&(b&&b.stop(),!a||a.isFulfilled()?this._set("animation",null):(this._set("animation",a),this.frameTask.animationInProgress=!0,b=function(){a===c._get("animation")&&(c._set("animation",null),c.frameTask.requestFrame());c.frameTask.animationInProgress=
!1},a.when(b,b)))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"center",{get:function(){if(!this.ready)return this._get("center");var a=this.content.center;return new f.Point({x:a[0],y:a[1],spatialReference:this.content.spatialReference})},set:function(a){if(null!=a)if(this._normalizeInput(a))if(this.ready){var c=this.viewpoint;h.centerAt(c,c,a);this.viewpoint=c}else this._set("center",a),this.notifyChange("initialExtentRequired");else k.error("#center","incompatible spatialReference "+
JSON.stringify(a.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"constraints",{set:function(a){var c=this,b=this._get("constraints");b&&(this.handles.remove("map-view-base-constraints"),b.destroy());this._set("constraints",a);a&&(a.view=this,this.ready&&(this.state.viewpoint=a.fit(this.content.viewpoint)),this.handles.add(a.on("update",function(){c.ready&&c.state&&(c.state.viewpoint=a.fit(c.content.viewpoint))}),
"map-view-base-constraints"))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"extent",{get:function(){return this.ready?this.content.extent.clone():this._get("extent")},set:function(a){if(null!=a){var c=this._normalizeInput(a);c?c.width&&c.height?this.ready?(a=this.viewpoint,h.setExtent(a,a,c,this.size,{constraints:this.constraints}),this.viewpoint=a):(this._set("extent",c),this._set("center",null),this._set("viewpoint",null),this._set("scale",0),this._set("zoom",-1),this.notifyChange("initialExtentRequired")):
k.error("#extent","invalid extent size"):k.error("#center","incompatible spatialReference "+JSON.stringify(a.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference))}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"initialExtentRequired",{get:function(){var a=this.extent,c=this.center,b=this.scale,q=this.viewpoint,d=this.zoom;return this.get("map.initialViewProperties.viewpoint")||a||c&&(0!==b||-1!==d)||q?!1:!0},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"padding",{get:function(){return this.ready?this.state.padding:this._get("padding")},set:function(a){this.ready?(this.state.padding=a,this._set("padding",this.state.padding)):this._set("padding",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"resolution",{get:function(){return this.state?this.state.resolution:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"rotation",{get:function(){return this.ready?this.content.rotation:
this._get("rotation")},set:function(a){if(!isNaN(a))if(this.ready){var c=this.viewpoint;h.rotateTo(c,c,a);this.viewpoint=c}else this._set("rotation",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"scale",{get:function(){return this.ready?this.content.scale:this._get("scale")},set:function(a){if(a&&!isNaN(a))if(this.ready){var c=this.viewpoint;h.scaleTo(c,c,a);this.viewpoint=c}else{this._set("scale",a);this._set("zoom",-1);if(a=this._get("extent"))this._set("extent",null),this._set("center",
a.center);this.notifyChange("initialExtentRequired")}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"stationary",{get:function(){return!this.animation&&!this.navigating&&!this._get("resizing")&&!this._stationaryTimer},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return!this.destroyed&&(!0===this.get("layerViewManager.updating")||!0===this.get("labelManager.updating")||!0===this.get("graphicsView.updating")||this.allLayerViews.some(function(a){return!a.destroyed&&
!("layerViews"in a)&&a.attached&&!0===a.updating}))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewpoint",{get:function(){if(!this.ready)return this._get("viewpoint");var a=this.content;return a&&a.viewpoint.clone()},set:function(a){if(null!=a){var c=this._normalizeInput(a);c?this.ready?(a=new r({targetGeometry:new f.Point,scale:0,rotation:0}),h.copy(a,c),this.constraints.constrain(a,this.content.viewpoint),this.state.viewpoint=a,this.frameTask.requestFrame(),this._set("viewpoint",
a)):(this._set("viewpoint",c),this._set("extent",null),this._set("center",null),this._set("zoom",-1),this._set("scale",0),this.notifyChange("initialExtentRequired")):!a.scale||isNaN(a.scale)?k.error("#viewpoint","invalid scale value of "+a.scale):a.targetGeometry?k.error("#viewpoint","incompatible spatialReference "+JSON.stringify(a.targetGeometry.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference)):k.error("#viewpoint","geometry not defined")}},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"zoom",{get:function(){return this.ready?this.constraints.scaleToZoom(this.scale):this._get("zoom")},set:function(a){if(null!=a){if(!this.ready){this.notifyChange("initialExtentRequired");this._set("zoom",a);this._set("scale",0);var c=this._get("extent");c&&(this._set("extent",null),this._set("center",c.center))}this.constraints.effectiveLODs&&(c=this.viewpoint,h.scaleTo(c,c,this.constraints.zoomToScale(a)),this.viewpoint=c,this._set("zoom",this.constraints.scaleToZoom(this.scale)))}},
enumerable:!0,configurable:!0});b.prototype.goTo=function(a,c){var b=this;if(a)return D.whenTrueOnce(this,"ready",c&&c.signal).then(function(){b.animation&&(b.animation=null);var g=n({animate:!0},c),d=h.createAsync(a,b);b._gotoTask={};return g.animate?b._gotoAnimated(d,g):b._gotoImmediate(d,g)});k.error("#goTo()","target cannot be null or undefined")};b.prototype.hitTest=function(a){return p.reject("Should be implemented by subclasses")};b.prototype.popupHitTest=function(a){var c=this;return this.hitTest(a).then(function(b){return n({},
b,{mapPoint:c.toMap(a)})})};b.prototype.toMap=function(a){if(!this.ready)return null;a=this.state.toMap([0,0],[a.x,a.y]);return new f.Point({x:a[0],y:a[1],spatialReference:this.spatialReference})};b.prototype.isTileInfoRequired=function(){return!0};b.prototype.toScreen=function(a){if(!this.ready)return null;a=this._normalizeInput(a);a=[a.x,a.y];a=this.state.toScreen(a,a);return C.createScreenPoint(a[0],a[1])};b.prototype.pixelSizeAt=function(a,c){if(!this.ready)return NaN;a&&null!=a.x&&(c=a.y,a=a.x);
return this.content.pixelSizeAt([a,c])};b.prototype.requestLayerViewUpdate=function(a){this.ready&&this.frameTask.requestLayerViewUpdate(a)};b.prototype.requestUpdate=function(a){this.ready&&this.frameTask.requestUpdate(a)};b.prototype.getDefaultSpatialReference=function(){return this.get("map.initialViewProperties.spatialReference")||this.get("defaultsFromMap.spatialReference")||null};b.prototype.isSpatialReferenceSupported=function(a,c){return c||this._get("ready")?!0:null!==this._getDefaultViewpoint()};
b.prototype.importLayerView=function(a){return w.layerView2DImporter.importLayerView(a)};b.prototype.hasLayerViewModule=function(a){return w.layerView2DImporter.hasLayerViewModule(a)};b.prototype._createOrReplaceAnimation=function(a){if(!this.animation||this.animation.done)this.animation=new H;this.animation.update(a);return this.animation};b.prototype._cancellableGoTo=function(a,c,b){var g=this,d=b.then(function(){a===g._gotoTask&&(g.animation=null)}).catch(function(b){a===g._gotoTask&&(g.animation=
null,c.done||(c.stop(),g.frameTask.animationInProgress=!1));throw b;}),e=p.create(function(a){return a(d)},function(){a!==g._gotoTask||c.done||(c.stop(),g.frameTask.animationInProgress=!1)});c.when().catch(function(){a===g._gotoTask&&e.cancel&&e.cancel()});return e};b.prototype._gotoImmediate=function(a,c){var b=this,d=this._gotoTask,e=this._createOrReplaceAnimation(a);a=a.then(function(a){p.throwIfAborted(c);if(d!==b._gotoTask)throw new u("view:goto-interrupted","Goto was interrupted");b.viewpoint=
e.target=a;e.finish()});return this._cancellableGoTo(d,e,a)};b.prototype._gotoAnimated=function(a,c){var b=this,d=this._gotoTask,e=this._createOrReplaceAnimation(a);a=a.then(function(a){if(d!==b._gotoTask)throw new u("view:goto-interrupted","Goto was interrupted");e.update(a);b.animationManager.animate(e,b.viewpoint,c);return e.when().then(function(){},function(){})});return this._cancellableGoTo(d,e,a)};b.prototype._resizeHandler=function(a){var c=this.state;if(c){var b=this.content.viewpoint,d=
this.content.size.concat();c.size=[a.width,a.height];h.resize(b,b,d,this.content.size,this.resizeAlign);b=this.constraints.constrain(b,null);this.state.viewpoint=b}};b.prototype._startup=function(){var a=this._getDefaultViewpoint();this.constraints.view=this;this.constraints.fit(a);this._set("animationManager",new I.default({view:this}));this._set("state",new K({padding:this._get("padding"),size:this.size,viewpoint:a}));this._set("content",this.state.content);this._set("featuresTilingScheme",new L.TileInfoView(E.create({spatialReference:this.spatialReference,
size:512})));this._set("ready",!0);this.frameTask&&this.frameTask.start()};b.prototype._teardown=function(){this.frameTask&&this.frameTask.stop();this._set("ready",!1);this._stationaryTimer&&(clearTimeout(this._stationaryTimer),this._stationaryTimer=null,this.notifyChange("stationary"));var a=this._get("content"),c=a.center,b=a.spatialReference,c=new f.Point({x:c[0],y:c[1],spatialReference:b});this._set("viewpoint",null);this._set("extent",null);this._set("center",c);this._set("zoom",-1);this._set("rotation",
a.rotation);this._set("scale",a.scale);this._set("spatialReference",b);this.constraints.view=null;this.animationManager.destroy();this._set("animationManager",null);this._set("state",null);this._set("content",null);this.animation=null};b.prototype._flipStationary=function(a){var c=this;return null!==this._stationaryTimer?this._stationaryTimer:this._stationaryTimer=setTimeout(function(){c._stationaryTimer=null;var a=v()-c._lastStationaryEventTimestamp;160>a?c._stationaryTimer=c._flipStationary(a):
c.notifyChange("stationary")},a)};b.prototype._normalizeInput=function(a,c){void 0===c&&(c=this.spatialReference);var b=a&&a.targetGeometry||a;return c?b?c.equals(b.spatialReference)?a:t.canProject(b,c)?a&&"esri.Viewpoint"===a.declaredClass?(a.targetGeometry=t.project(b,c),a):t.project(b,c):null:null:a};b.prototype._getDefaultViewpoint=function(){var a=this.constraints,b=this._get("zoom"),d=this._get("scale"),e=this._normalizeInput(this._get("center")),f=this._normalizeInput(this._get("extent")),
k=this._get("rotation"),l=this._normalizeInput(this._get("viewpoint"));a.effectiveLODs?-1!==b&&(d=a.zoomToScale(b)):b=-1;var n=null,p=null,b=0,a=l&&l.rotation,m=l&&l.targetGeometry;m&&("extent"===m.type?n=m:"point"===m.type&&(p=m,b=l.scale));l=this._normalizeInput(this.get("map.initialViewProperties.viewpoint.targetGeometry.extent"));m=this._normalizeInput(this.initialExtent);f=f||n||l||m;e=e||p||f&&f.center;d=d||b||f&&h.extentToScale(f,this.size);return e&&d?new r({targetGeometry:e,scale:d,rotation:k||
a||0}):null};e([d.property()],b.prototype,"animation",null);e([d.property({readOnly:!0})],b.prototype,"animationManager",void 0);e([d.property({value:null,type:f.Point,dependsOn:["content.viewpoint","ready"]})],b.prototype,"center",null);e([d.property({type:x})],b.prototype,"constraints",null);e([d.property({readOnly:!0})],b.prototype,"content",void 0);e([d.property({value:null,type:f.Extent,dependsOn:["content.viewpoint","ready"]})],b.prototype,"extent",null);e([d.property({readOnly:!0})],b.prototype,
"featuresTilingScheme",void 0);e([d.property()],b.prototype,"fullOpacity",void 0);e([d.property({type:f.Extent})],b.prototype,"initialExtent",void 0);e([d.property({dependsOn:["map.initialViewProperties?.viewpoint"]})],b.prototype,"initialExtentRequired",null);e([d.property()],b.prototype,"labelManager",void 0);e([d.property({value:{top:0,right:0,bottom:0,left:0},cast:function(a){return n({top:0,right:0,bottom:0,left:0},a)}})],b.prototype,"padding",null);e([d.property({type:Object})],b.prototype,
"renderingOptions",void 0);e([d.property()],b.prototype,"resizeAlign",void 0);e([d.property({readOnly:!0,dependsOn:["content.viewpoint"]})],b.prototype,"resolution",null);e([d.property({value:0,type:Number,dependsOn:["content.viewpoint","ready"]})],b.prototype,"rotation",null);e([d.property({value:0,type:Number,dependsOn:["content.viewpoint","ready"]})],b.prototype,"scale",null);e([d.property({type:f.SpatialReference,dependsOn:["map.initialViewProperties?.spatialReference","defaultsFromMap.isSpatialReferenceDone"]})],
b.prototype,"spatialReference",void 0);e([d.property({readOnly:!0})],b.prototype,"state",void 0);e([d.property()],b.prototype,"stationary",null);e([d.property({type:y.Timeline,readOnly:!0})],b.prototype,"timeline",void 0);e([d.property({readOnly:!0})],b.prototype,"type",void 0);e([d.property({readOnly:!0,dependsOn:["layerViewManager.updating","labelManager.updating","graphicsView?.updating"]})],b.prototype,"updating",null);e([d.property({value:null,type:r,dependsOn:["content.viewpoint","ready"]})],
b.prototype,"viewpoint",null);e([d.property({value:-1,dependsOn:["scale"]})],b.prototype,"zoom",null);return b=e([d.subclass("esri.views.MapViewBase")],b)}(d.declared(F.PopupView(G)))});