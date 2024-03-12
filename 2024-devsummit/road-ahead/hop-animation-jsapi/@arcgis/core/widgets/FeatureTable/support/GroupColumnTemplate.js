/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import t from"./ColumnTemplateBase.js";import"../../../chunks/ensureType.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";let e=class extends t{constructor(s){super(s),this.columnTemplates=null,this.type="group"}};s([r({json:{write:!0}})],e.prototype,"columnTemplates",void 0),s([r({type:String,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=s([o("esri.widgets.FeatureTable.GroupColumnTemplate")],e);const p=e;export{p as default};
