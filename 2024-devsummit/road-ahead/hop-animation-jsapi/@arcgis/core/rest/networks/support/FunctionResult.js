/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";let e=class extends t{constructor(r){super(r),this.functionType=null,this.networkAttributeName=null,this.result=null}};r([s({type:["add","subtract","average","count","min","max"],json:{write:!0},readOnly:!0})],e.prototype,"functionType",void 0),r([s({type:String,json:{write:!0},readOnly:!0})],e.prototype,"networkAttributeName",void 0),r([s({type:Number,json:{write:!0},readOnly:!0})],e.prototype,"result",void 0),e=r([o("esri.rest.networks.support.FunctionResult")],e);const i=e;export{i as default};
