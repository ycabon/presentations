/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{d as t}from"../../../core/Accessor.js";import o from"../../../core/Evented.js";import{L as n}from"../../../chunks/Logger.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import{subclass as i}from"../../../core/accessorSupport/decorators/subclass.js";import a from"../../../webscene/SunLighting.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";import"../../../core/JSONSupport.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";var r;let c=r=class extends(o.EventedMixin(a)){constructor(e){super(e),this.cameraTrackingEnabled=!0,this.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};const t=(new Date).getFullYear(),o=new Date("March 15, "+t+" 12:00:00 UTC");this._set("defaultDate",o),this._set("date",o)}get ambientOcclusionEnabled(){return t(n.getLogger(this),"ambientOcclusionEnabled",{replacement:"ambient occlusion is automatically shown and this property has no effect",version:"4.27"}),this._get("ambientOcclusionEnabled")??!1}set ambientOcclusionEnabled(e){t(n.getLogger(this),"ambientOcclusionEnabled",{replacement:"ambient occlusion is automatically shown and this property has no effect",version:"4.27"}),this._set("ambientOcclusionEnabled",e)}get waterReflectionEnabled(){return t(n.getLogger(this),"waterReflectionEnabled",{replacement:"reflections are automatically shown and this property has no effect",version:"4.27"}),this._get("waterReflectionEnabled")??!1}set waterReflectionEnabled(e){t(n.getLogger(this),"waterReflectionEnabled",{replacement:"reflections are automatically shown and this property has no effect",version:"4.27"}),this._set("waterReflectionEnabled",e)}get defaultDate(){return new Date(this._get("defaultDate").getTime())}static fromWebsceneLighting(e){return new r(e.cloneConstructProperties())}set defaultDate(e){const t=this._get("date")===this._get("defaultDate");e=new Date(e.getTime()),this._set("defaultDate",e),t&&this._set("date",e)}set date(e){null!=e&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(e.getTime())))}autoUpdate(e,t){const o=r.calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=t.hours,this.positionTimezoneInfo.minutes=t.minutes,this.positionTimezoneInfo.seconds=t.seconds;let n=null;null!=e&&(this.positionTimezoneInfo.autoUpdated=!0,isNaN(e.getTime())?(n=this.defaultDate.getTime(),this._set("date",this.defaultDate)):(n=this.date&&this.date.getTime(),this._set("date",new Date(e.getTime()))));const s=r.calculateTimezoneOffset(this.positionTimezoneInfo);if(o!==s&&(l.target=this,l.timezoneOffset=s,this.emit("timezone-will-change",l),l.target=null),null!=e)return isNaN(e.getTime())||n!==e.getTime()}clone(){const e=this._get("date")===this._get("defaultDate"),t=new r({...this.cloneConstructProperties(),defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled});return e&&t._set("date",t._get("defaultDate")),t.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated,t.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours,t.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes,t.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds,t}cloneWithWebsceneLighting(e){const t=this.clone();return null!=e.date&&(t.date=e.date),t.directShadowsEnabled=e.directShadowsEnabled,t.displayUTCOffset=e.displayUTCOffset,t}cloneNonPersistentConstructProperties(){return{cameraTrackingEnabled:this.cameraTrackingEnabled}}};e([s({type:Boolean})],c.prototype,"cameraTrackingEnabled",void 0),e([s({type:Boolean})],c.prototype,"ambientOcclusionEnabled",null),e([s({type:Boolean})],c.prototype,"waterReflectionEnabled",null),e([s({type:Date})],c.prototype,"defaultDate",null),e([s({type:Date})],c.prototype,"date",null),c=r=e([i("esri.views.3d.environment.SunLighting")],c),function(e){e.calculateTimezoneOffset=function({hours:e,minutes:t,seconds:o}){return Math.round(e+t/60+o/3600)}}(c||(c={}));const l={target:null,timezoneOffset:0},u=c;export{u as default};