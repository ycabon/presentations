/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import e from"./ImageInspectionInfo.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/CameraInfoMixin.js";let i=class extends r{constructor(){super(...arguments),this.images=null}};s([o({type:[e],json:{write:!0}})],i.prototype,"images",void 0),i=s([t("esri.rest.support.FindImagesResult")],i);const p=i;export{p as default};
