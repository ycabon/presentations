/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as s}from"../../geometry.js";import o from"../../TimeExtent.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{e as m}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{w as n}from"../../chunks/writer.js";import{getJsonType as c,fromJSON as j}from"../../geometry/support/jsonUtils.js";import{s as u}from"../../chunks/spatialRelationships.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/promiseUtils.js";import"../../chunks/handleUtils.js";import"../../chunks/maybe.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";let a=class extends(r(e)){constructor(){super(...arguments),this.geometry=null,this.objectIds=null,this.spatialRelationship="intersects",this.timeExtent=null,this.where=null}writeGeometry(t,s,o){null!=t&&(s.geometryType=c(t),s[o]=JSON.stringify(t.toJSON()))}};t([i({types:s,json:{read:j,write:!0}})],a.prototype,"geometry",void 0),t([n("geometry")],a.prototype,"writeGeometry",null),t([i({json:{write:!0}})],a.prototype,"objectIds",void 0),t([m(u,{ignoreUnknown:!1,name:"spatialRel"})],a.prototype,"spatialRelationship",void 0),t([i({type:o,json:{name:"time",write:!0}})],a.prototype,"timeExtent",void 0),t([i({type:String,json:{write:!0}})],a.prototype,"where",void 0),a=t([p("esri.rest.support.ImageGPSInfoParameters")],a);const l=a;export{l as default};
