/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{geometryTypes as s}from"../../geometry.js";import{ClonableMixin as o}from"../../core/Clonable.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{w as p}from"../../chunks/writer.js";import{getJsonType as m,fromJSON as c}from"../../geometry/support/jsonUtils.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/promiseUtils.js";import"../../chunks/handleUtils.js";import"../../chunks/maybe.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";let n=class extends(o(t)){constructor(){super(...arguments),this.geometry=null,this.rasterId=null,this.visibleOnly=!1}writeGeometry(r,s,o){null!=r&&(s.geometryType=m(r),s[o]=JSON.stringify(r))}};r([e({types:s,json:{read:c,write:!0}})],n.prototype,"geometry",void 0),r([p("geometry")],n.prototype,"writeGeometry",null),r([e({json:{write:!0}})],n.prototype,"rasterId",void 0),r([e({json:{name:"options.VisibleOnly",write:!0}})],n.prototype,"visibleOnly",void 0),n=r([i("esri.rest.support.MapToImageParameters")],n);const j=n;export{j as default};