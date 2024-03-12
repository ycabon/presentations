/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let e=class extends s{constructor(r){super(r),this.rulesTableId=null,this.rulesTableUrl=null,this.subnetworksTableId=null,this.subnetworksTableUrl=null,this.dirtyAreasLayerId=null,this.dirtyAreasLayerUrl=null}};r([o({constructOnly:!0})],e.prototype,"rulesTableId",void 0),r([o({constructOnly:!0})],e.prototype,"rulesTableUrl",void 0),r([o({constructOnly:!0})],e.prototype,"subnetworksTableId",void 0),r([o({constructOnly:!0})],e.prototype,"subnetworksTableUrl",void 0),r([o({constructOnly:!0})],e.prototype,"dirtyAreasLayerId",void 0),r([o({constructOnly:!0})],e.prototype,"dirtyAreasLayerUrl",void 0),e=r([t("esri.networks.support.NetworkSystemLayers")],e);const l=e;export{l as default};
