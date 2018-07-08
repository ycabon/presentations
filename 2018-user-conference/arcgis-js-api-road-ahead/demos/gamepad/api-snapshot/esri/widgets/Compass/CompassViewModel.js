// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../support/GoTo".split(" "),function(q,r,h,d,k,l,m,n,e,c,p){var f=m.getLogger("esri.widgets.CompassViewModel");return function(g){function b(a){a=g.call(this,a)||this;a._handles=new l;a._eventType=a._getDeviceOrientationEventType();a.canUseHeading=!1;a.orientation=
{x:0,y:0,z:0};a.view=null;a._updateForCamera=a._updateForCamera.bind(a);a._updateForRotation=a._updateForRotation.bind(a);a._updateRotationWatcher=a._updateRotationWatcher.bind(a);a._updateViewHeading=a._updateViewHeading.bind(a);a._checkHeadingSupport=a._checkHeadingSupport.bind(a);a._canUseHeading();return a}h(b,g);b.prototype.initialize=function(){this._handles.add(e.init(this,"view",this._updateRotationWatcher))};b.prototype.destroy=function(){this._removeCheckHeadingListener();this._removeOrientationListener();
this._handles.destroy();this.view=this._handles=null};Object.defineProperty(b.prototype,"activeMode",{get:function(){var a=this._get("activeMode");return a?a:(a=this.modes)?a[0]:"none"},set:function(a){this.stopMode();this._override("activeMode",a);void 0===a&&this._clearOverride("activeMode")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canShowNorth",{get:function(){var a=this.get("view.spatialReference");return a&&(a.isWebMercator||a.isWGS84)},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"modes",{get:function(){return this._get("modes")||["reset"]},set:function(a){this._set("modes",a);void 0===a&&this._clearOverride("modes")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?this.canShowNorth?"compass":"rotation":"disabled"},enumerable:!0,configurable:!0});b.prototype.previousMode=function(){var a=this.modes;2>a.length||(a=a.indexOf(this.activeMode),this._paginateMode(a-1))};b.prototype.nextMode=
function(){var a=this.modes;2>a.length||(a=a.indexOf(this.activeMode),this._paginateMode(a+1))};b.prototype.startMode=function(){var a=this.activeMode;"reset"===a&&this.reset();"device-orientation"===a&&(this._removeOrientationListener(),this._addOrientationListener())};b.prototype.stopMode=function(){"device-orientation"===this.activeMode&&this._removeOrientationListener()};b.prototype.reset=function(){if(this.get("view.ready")){var a={};"2d"===this.view.type?a.rotation=0:a.heading=0;this.callGoTo({target:a})}};
b.prototype._getDeviceOrientationEventType=function(){if("ondeviceorientationabsolute"in window)return"deviceorientationabsolute";if("ondeviceorientation"in window)return"deviceorientation"};b.prototype._paginateMode=function(a){var b=this.modes;this.activeMode=b[(a+b.length)%b.length]};b.prototype._supportsHeading=function(a){var b=a.absolute,c=a.alpha;return"number"===typeof a.webkitCompassHeading||!!b&&"number"===typeof c};b.prototype._getHeading=function(a){var b=a.alpha,c=a.webkitCompassHeading;
if(c)return c;if(a.absolute&&"number"===typeof b)return b};b.prototype._removeCheckHeadingListener=function(){var a=this._eventType;a&&window.removeEventListener(a,this._checkHeadingSupport)};b.prototype._checkHeadingSupport=function(a){this._supportsHeading(a)&&this._set("canUseHeading",!0);this._removeCheckHeadingListener()};b.prototype._canUseHeading=function(){var a=this,b=this._eventType;b&&(window.addEventListener(b,this._checkHeadingSupport),n.after(500).then(function(){a._removeCheckHeadingListener()}))};
b.prototype._getHeadingAdjustment=function(a,b){if("orientation"in window){b=window.orientation;if("number"!==typeof b)return a;a+=b;return 360<a?a-360:0>a?a+360:a}return a};b.prototype._updateViewHeading=function(a){var b=this.view,c=this._getHeading(a);!b||!b.stationary||"number"!==typeof c||0>c||360<c||(a=this._getHeadingAdjustment(c,a),"3d"===b.type&&(c=b.camera.clone(),c.heading=a,b.camera=c),"2d"===b.type&&(b.rotation=a))};b.prototype._removeOrientationListener=function(){this.canUseHeading&&
window.removeEventListener(this._eventType,this._updateViewHeading)};b.prototype._addOrientationListener=function(){var a=this._eventType,b=this.canShowNorth;this.canUseHeading?b?window.addEventListener(a,this._updateViewHeading):f.warn("device-orientation mode requires 'canShowNorth' to be true"):f.warn("The deviceorientation event is not supported in this browser")};b.prototype._updateForRotation=function(a){void 0!==a&&null!==a&&(this.orientation={z:a})};b.prototype._updateForCamera=function(a){a&&
(this.orientation={x:0,y:0,z:-a.heading})};b.prototype._updateRotationWatcher=function(a){this._handles.removeAll();a&&("2d"===a.type?this._handles.add(e.init(this,"view.rotation",this._updateForRotation)):this._handles.add(e.init(this,"view.camera",this._updateForCamera)))};d([c.property({dependsOn:["modes"]})],b.prototype,"activeMode",null);d([c.property({dependsOn:["view.spatialReference.isWebMercator","view.spatialReference.wkid"],readOnly:!0})],b.prototype,"canShowNorth",null);d([c.property({readOnly:!0})],
b.prototype,"canUseHeading",void 0);d([c.property({dependsOn:["canUseHeading"]})],b.prototype,"modes",null);d([c.property()],b.prototype,"orientation",void 0);d([c.property({dependsOn:["view.ready","canShowNorth"],readOnly:!0})],b.prototype,"state",null);d([c.property()],b.prototype,"view",void 0);d([c.property()],b.prototype,"previousMode",null);d([c.property()],b.prototype,"nextMode",null);d([c.property()],b.prototype,"startMode",null);d([c.property()],b.prototype,"stopMode",null);d([c.property()],
b.prototype,"reset",null);return b=d([c.subclass("esri.widgets.CompassViewModel")],b)}(c.declared(k,p))});