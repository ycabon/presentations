/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import{I as t}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import p from"./SearchLayerField.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/fieldType.js";var c;let n=c=class extends s{constructor(r){super(r),this.field=null,this.id=null,this.subLayer=null}clone(){return new c(o({field:this.field,id:this.id,subLayer:this.subLayer}))}};r([e({type:p,json:{write:{isRequired:!0}}})],n.prototype,"field",void 0),r([e({type:String,json:{write:{isRequired:!0}}})],n.prototype,"id",void 0),r([e({type:t,json:{write:!0}})],n.prototype,"subLayer",void 0),n=c=r([i("esri.webdoc.applicationProperties.SearchLayer")],n);const m=n;export{m as default};
