/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as s}from"../../core/Clonable.js";import{J as r}from"../../chunks/jsonMap.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import p from"./ExpressionInfo.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";const c=new r({deviceLocation:"device-location"});let n=class extends(s(e)){constructor(o){super(o),this.filterExpression=null,this.type="device-location"}};o([t({type:p,json:{write:!0}})],n.prototype,"filterExpression",void 0),o([t({type:c.apiValues,readOnly:!0,json:{type:c.jsonValues,read:c.read,write:c.write}})],n.prototype,"type",void 0),n=o([i("esri.webdoc.geotriggersInfo.DeviceLocationFeed")],n);const a=n;export{a as default};
