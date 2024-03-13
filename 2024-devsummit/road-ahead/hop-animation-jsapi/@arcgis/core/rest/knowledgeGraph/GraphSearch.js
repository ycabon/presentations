/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let t=class extends s{constructor(r){super(r),this.searchQuery="",this.typeCategoryFilter="both"}};r([o()],t.prototype,"searchQuery",void 0),r([o()],t.prototype,"typeCategoryFilter",void 0),t=r([e("esri.rest.knowledgeGraph.GraphSearch")],t);const c=t;export{c as default};