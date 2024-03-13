/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let o=class extends s{constructor(r){super(r),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};r([e({type:String,json:{write:!0}})],o.prototype,"facilityIdField",void 0),r([e({type:String,json:{write:!0}})],o.prototype,"layerId",void 0),r([e({type:String,json:{write:!0}})],o.prototype,"nameField",void 0),r([e({type:String,json:{write:!0}})],o.prototype,"siteIdField",void 0),r([e({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"sublayerId",void 0),o=r([t("esri.layers.support.FacilityLayerInfo")],o);const i=o;export{i as default};