/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{clone as r}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import p from"./AlgorithmicColorRamp.js";import i from"./ColorRamp.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";var m;let c=m=class extends i{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new m({colorRamps:r(this.colorRamps)})}};o([s({type:[p],json:{write:!0}})],c.prototype,"colorRamps",void 0),o([s({type:["multipart"]})],c.prototype,"type",void 0),c=m=o([t("esri.rest.support.MultipartColorRamp")],c);const e=c;export{e as default};
