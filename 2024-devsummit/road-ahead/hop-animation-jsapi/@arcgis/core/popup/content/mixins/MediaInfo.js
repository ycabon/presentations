/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../../core/JSONSupport.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";let e=class extends r{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}};t([o({type:String,json:{write:!0}})],e.prototype,"altText",void 0),t([o({type:String,json:{write:!0}})],e.prototype,"caption",void 0),t([o({type:String,json:{write:!0}})],e.prototype,"title",void 0),t([o({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=t([s("esri.popup.content.mixins.MediaInfo")],e);const i=e;export{i as default};