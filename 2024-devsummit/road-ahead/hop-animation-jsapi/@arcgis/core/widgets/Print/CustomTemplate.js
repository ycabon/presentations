/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{a as e,f as p}from"../../chunks/layoutTemplate.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/jsonMap.js";let i=class extends s{constructor(o){super(o),this.description=null,this.format=null,this.label=null,this.layout=null,this.layoutOptions=null}};o([r()],i.prototype,"description",void 0),o([r({json:{read:e}})],i.prototype,"format",void 0),o([r()],i.prototype,"label",void 0),o([r({json:{read:p}})],i.prototype,"layout",void 0),o([r()],i.prototype,"layoutOptions",void 0),i=o([t("esri.widgets.Print.CustomTemplate")],i);const c=i;export{c as default};
