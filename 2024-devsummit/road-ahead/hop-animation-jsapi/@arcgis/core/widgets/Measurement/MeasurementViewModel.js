/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{C as e,D as o}from"../../chunks/unitUtils.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{d as p}from"../../chunks/defaultUnit.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/ensureType.js";import"../../chunks/getDefaultUnitForView.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";let a=class extends r{constructor(t){super(t),this.activeTool=null,this.activeViewModel=null,this.view=null}get areaUnit(){return this.defaultUnit}set areaUnit(t){this._overrideIfSome("areaUnit",t)}get linearUnit(){return this.defaultUnit}set linearUnit(t){this._overrideIfSome("linearUnit",t)}get state(){const{activeViewModel:t}=this;return t?t.state:"disabled"}};t([s({type:["area","distance","direct-line"]})],a.prototype,"activeTool",void 0),t([s()],a.prototype,"activeViewModel",void 0),t([s({type:e})],a.prototype,"areaUnit",null),t([s(p)],a.prototype,"defaultUnit",void 0),t([s({type:o})],a.prototype,"linearUnit",null),t([s({readOnly:!0})],a.prototype,"state",null),t([s()],a.prototype,"view",void 0),a=t([i("esri.widgets.Measurement.MeasurementViewModel")],a);const l=a;export{l as default};
