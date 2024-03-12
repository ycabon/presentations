/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import t from"./MediaInfo.js";import e from"../support/ChartMediaInfoValue.js";import"../../../chunks/ensureType.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../support/ChartMediaInfoValueSeries.js";let p=class extends t{constructor(r){super(r),this.type=null,this.value=null}};r([o({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),r([o({type:e,json:{write:!0}})],p.prototype,"value",void 0),p=r([s("esri.popup.content.mixins.ChartMediaInfo")],p);const i=p;export{i as default};
