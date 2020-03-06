// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Evented ../../core/accessorSupport/decorators ../../layers/support/LOD ./constraints/RotationConstraint ./constraints/ZoomConstraint".split(" "),function(l,m,g,c,h,b,k,e,f){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.lods=null;a.minScale=0;a.maxScale=0;a.minZoom=-1;a.maxZoom=-1;a.rotationEnabled=!0;a.snapToZoom=!0;return a}g(a,d);a.prototype.initialize=
function(){this.watch("_zoom, _rotation",this.emit.bind(this,"update"),!0)};a.prototype.destroy=function(){this.view=null;this._set("_zoom",null);this._set("_rotation",null)};Object.defineProperty(a.prototype,"_rotation",{get:function(){return new e({rotationEnabled:this.rotationEnabled})},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_defaultLODs",{get:function(){var a=this.get("view.defaultsFromMap.tileInfo"),b=this.get("view.spatialReference");return a&&b&&a.spatialReference.equals(b)?
a.lods:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_zoom",{get:function(){return new f({lods:this.lods||this._defaultLODs,minZoom:this.minZoom,maxZoom:this.maxZoom,minScale:this.minScale,maxScale:this.maxScale,snapToZoom:this.snapToZoom})},enumerable:!0,configurable:!0});a.prototype.canZoomInTo=function(a){var b=this.effectiveMaxScale;return 0===b||a>=b};a.prototype.canZoomOutTo=function(a){var b=this.effectiveMinScale;return 0===b||a<=b};a.prototype.constrain=function(a,
b){this._zoom.constrain(a,b);this._rotation.constrain(a,b);return a};a.prototype.fit=function(a){return this._zoom.fit(a)};a.prototype.zoomToScale=function(a){return this._zoom.zoomToScale(a)};a.prototype.scaleToZoom=function(a){return this._zoom.scaleToZoom(a)};a.prototype.snapScale=function(a){return this._zoom.snapToClosestScale(a)};a.prototype.snapToNextScale=function(a){return this._zoom.snapToNextScale(a)};a.prototype.snapToPreviousScale=function(a){return this._zoom.snapToPreviousScale(a)};
c([b.property({readOnly:!0,aliasOf:"_zoom.effectiveLODs"})],a.prototype,"effectiveLODs",void 0);c([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMinScale"})],a.prototype,"effectiveMinScale",void 0);c([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxScale"})],a.prototype,"effectiveMaxScale",void 0);c([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMinZoom"})],a.prototype,"effectiveMinZoom",void 0);c([b.property({readOnly:!0,aliasOf:"_zoom.effectiveMaxZoom"})],a.prototype,"effectiveMaxZoom",void 0);
c([b.property({type:[k]})],a.prototype,"lods",void 0);c([b.property()],a.prototype,"minScale",void 0);c([b.property()],a.prototype,"maxScale",void 0);c([b.property()],a.prototype,"minZoom",void 0);c([b.property()],a.prototype,"maxZoom",void 0);c([b.property()],a.prototype,"rotationEnabled",void 0);c([b.property()],a.prototype,"snapToZoom",void 0);c([b.property()],a.prototype,"view",void 0);c([b.property({type:e,dependsOn:["rotationEnabled"]})],a.prototype,"_rotation",null);c([b.property({dependsOn:["view.spatialReference",
"view.defaultsFromMap.tileInfo"]})],a.prototype,"_defaultLODs",null);c([b.property({readOnly:!0,type:f,dependsOn:"lods minZoom maxZoom minScale maxScale snapToZoom _defaultLODs".split(" ")})],a.prototype,"_zoom",null);return a=c([b.subclass("esri.views.2d.MapViewConstraints")],a)}(b.declared(h.EventedAccessor))});