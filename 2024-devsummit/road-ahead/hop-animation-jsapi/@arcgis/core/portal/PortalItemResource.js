/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../core/Accessor.js";import e from"../core/Error.js";import{L as s}from"../chunks/Logger.js";import{isAbsolute as o,makeRelative as a}from"../core/urlUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import{cast as l}from"../core/accessorSupport/decorators/cast.js";import"../core/lang.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../config.js";import"../core/JSONSupport.js";import"../chunks/ensureType.js";let c=class extends r{constructor(t){super(t),this.portalItem=null}normalizeCtorArgs(t){return t?.portalItem&&t.path?{...t,path:this._normalizePath(t.path,t.portalItem)}:t}set path(t){null!=t&&o(t)?s.getLogger(this).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",t)}_castPath(t){return this._normalizePath(t,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get cdnUrl(){return this.portalItem&&this.path?`${this.portalItem.itemCdnUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(t="json",r){const s=this.cdnUrl;if(null==s)throw new e("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(s,{responseType:t,query:{token:this.portalItem.apiKey},signal:r?.signal})}async update(t,r){const{addOrUpdateResources:e}=await import("../chunks/resourceUtils.js");return await e(this.portalItem,[{resource:this,content:t,compress:r?.compress,access:r?.access}],"update",r),this}hasPath(){return null!=this.path}_normalizePath(t,r){return null==t?t:(t=t.replace(/^\/+/,""),null!=r&&o(t)&&(t=a(t,r.itemUrl)),t?.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};t([p()],c.prototype,"portalItem",void 0),t([p({type:String,value:null})],c.prototype,"path",null),t([l("path")],c.prototype,"_castPath",null),t([p({type:String,readOnly:!0})],c.prototype,"url",null),t([p({type:String,readOnly:!0})],c.prototype,"cdnUrl",null),t([p({type:String,readOnly:!0})],c.prototype,"itemRelativeUrl",null),c=t([i("esri.portal.PortalItemResource")],c);const n=c;export{n as default};
