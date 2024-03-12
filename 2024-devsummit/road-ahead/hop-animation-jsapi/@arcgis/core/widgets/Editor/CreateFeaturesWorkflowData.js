/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import s from"../../core/Collection.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";let i=class extends r{constructor(o){super(o),this.creationInfo=null,this.editableItem=null,this.parent=null,this.pendingFeatures=new s,this.viewModel=null,this.upload=null}};o([e()],i.prototype,"creationInfo",void 0),o([e()],i.prototype,"editableItem",void 0),o([e()],i.prototype,"parent",void 0),o([e()],i.prototype,"viewModel",void 0),o([e()],i.prototype,"upload",void 0),i=o([t("esri.widgets.Editor.CreateFeaturesWorkflowData")],i);export{i as CreateFeaturesWorkflowData};
