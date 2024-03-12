/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import s from"../Color.js";import{Clonable as e}from"../core/Clonable.js";import{JSONSupportMixin as r}from"../core/JSONSupport.js";import{t,p as i}from"../chunks/screenUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import{I as n}from"../chunks/ensureType.js";import"../core/lang.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/Logger.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";let l=class extends(r(e)){constructor(o){super(o),this.type="simple",this.color=new s("black"),this.lineSize=2,this.fontSize=10,this.textColor=new s("black"),this.textBackgroundColor=new s([255,255,255,.6])}};o([p({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),o([p({type:s,nonNullable:!0,json:{type:[n],write:{isRequired:!0}}})],l.prototype,"color",void 0),o([p({type:Number,cast:t,nonNullable:!0,range:{min:i(1)},json:{write:{isRequired:!0}}})],l.prototype,"lineSize",void 0),o([p({type:Number,cast:t,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"fontSize",void 0),o([p({type:s,nonNullable:!0,json:{type:[n],write:{isRequired:!0}}})],l.prototype,"textColor",void 0),o([p({type:s,nonNullable:!0,json:{type:[n],write:{isRequired:!0}}})],l.prototype,"textBackgroundColor",void 0),l=o([c("esri.analysis.DimensionSimpleStyle")],l);const m=l;export{m as default};
