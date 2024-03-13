// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/deprecate ../../../core/Evented ../../../core/Logger ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../webscene/SunLighting".split(" "),function(d,g,c,h,f,q,r,n,p){var e;c=e=class extends c.EventedMixin(p){constructor(a){super(a);this.cameraTrackingEnabled=!0;this.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};a=(new Date).getFullYear();
a=new Date("March 15, "+a+" 12:00:00 UTC");this._set("defaultDate",a);this._set("date",a)}get ambientOcclusionEnabled(){g.deprecatedProperty(h.getLogger(this),"ambientOcclusionEnabled",{replacement:"ambient occlusion is automatically shown and this property has no effect",version:"4.27"});return this._get("ambientOcclusionEnabled")??!1}set ambientOcclusionEnabled(a){g.deprecatedProperty(h.getLogger(this),"ambientOcclusionEnabled",{replacement:"ambient occlusion is automatically shown and this property has no effect",
version:"4.27"});this._set("ambientOcclusionEnabled",a)}get waterReflectionEnabled(){g.deprecatedProperty(h.getLogger(this),"waterReflectionEnabled",{replacement:"reflections are automatically shown and this property has no effect",version:"4.27"});return this._get("waterReflectionEnabled")??!1}set waterReflectionEnabled(a){g.deprecatedProperty(h.getLogger(this),"waterReflectionEnabled",{replacement:"reflections are automatically shown and this property has no effect",version:"4.27"});this._set("waterReflectionEnabled",
a)}get defaultDate(){return new Date(this._get("defaultDate").getTime())}static fromWebsceneLighting(a){return new e(a.cloneConstructProperties())}set defaultDate(a){const b=this._get("date")===this._get("defaultDate");a=new Date(a.getTime());this._set("defaultDate",a);b&&this._set("date",a)}set date(a){null!=a&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(a.getTime())))}autoUpdate(a,b){const m=e.calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=
b.hours;this.positionTimezoneInfo.minutes=b.minutes;this.positionTimezoneInfo.seconds=b.seconds;b=null;null!=a&&(this.positionTimezoneInfo.autoUpdated=!0,isNaN(a.getTime())?(b=this.defaultDate.getTime(),this._set("date",this.defaultDate)):(b=this.date&&this.date.getTime(),this._set("date",new Date(a.getTime()))));const k=e.calculateTimezoneOffset(this.positionTimezoneInfo);m!==k&&(l.target=this,l.timezoneOffset=k,this.emit("timezone-will-change",l),l.target=null);if(null!=a)return isNaN(a.getTime())||
b!==a.getTime()}clone(){const a=this._get("date")===this._get("defaultDate"),b=new e({...this.cloneConstructProperties(),defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled});a&&b._set("date",b._get("defaultDate"));b.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated;b.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours;b.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes;b.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds;
return b}cloneWithWebsceneLighting(a){const b=this.clone();null!=a.date&&(b.date=a.date);b.directShadowsEnabled=a.directShadowsEnabled;b.displayUTCOffset=a.displayUTCOffset;return b}cloneNonPersistentConstructProperties(){return{cameraTrackingEnabled:this.cameraTrackingEnabled}}};d.__decorate([f.property({type:Boolean})],c.prototype,"cameraTrackingEnabled",void 0);d.__decorate([f.property({type:Boolean})],c.prototype,"ambientOcclusionEnabled",null);d.__decorate([f.property({type:Boolean})],c.prototype,
"waterReflectionEnabled",null);d.__decorate([f.property({type:Date})],c.prototype,"defaultDate",null);d.__decorate([f.property({type:Date})],c.prototype,"date",null);c=e=d.__decorate([n.subclass("esri.views.3d.environment.SunLighting")],c);(function(a){a.calculateTimezoneOffset=function({hours:b,minutes:m,seconds:k}){return Math.round(b+m/60+k/3600)}})(c||={});const l={target:null,timezoneOffset:0};return c});