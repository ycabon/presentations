/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{e}from"../../../chunks/enumeration.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";import"../../../chunks/jsonMap.js";var c;let p=c=class extends r{constructor(o){super(o),this.type="cloudy",this.cloudCover=.5}clone(){return new c({cloudCover:this.cloudCover})}};o([e({cloudy:"cloudy"})],p.prototype,"type",void 0),o([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],p.prototype,"cloudCover",void 0),p=c=o([t("esri.views.3d.environment.CloudyWeather")],p);const i=p;export{i as default};
