/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{e as s}from"../../chunks/enumeration.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import t from"./Domain.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/jsonMap.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";var a;let i=a=class extends t{constructor(r){super(r),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new a({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};r([e({json:{type:[Number],read:{source:"range",reader:(r,e)=>e.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(r,e,s){e[s]=[this.minValue||0,r]}}}})],i.prototype,"maxValue",void 0),r([e({json:{type:[Number],read:{source:"range",reader:(r,e)=>e.range?.[0]},write:{target:"range",writer(r,e,s){e[s]=[r,this.maxValue||0]}}}})],i.prototype,"minValue",void 0),r([s({range:"range"})],i.prototype,"type",void 0),i=a=r([o("esri.layers.support.RangeDomain")],i);const n=i;export{n as default};
