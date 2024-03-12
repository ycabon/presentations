/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{i as s}from"../../core/lang.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{e}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as p}from"../../geometry/support/jsonUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";let m=class extends o{constructor(t){super(t),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};t([r({type:Number,json:{write:!0}})],m.prototype,"bevelRatio",void 0),t([r({json:{read:{reader:t=>t?t.map((t=>p(t))).filter(s):null},write:{writer:(t,s)=>{s.geometries=t?.map((t=>t.toJSON()))??null}}}})],m.prototype,"geometries",void 0),t([r({type:Number,json:{write:!0}})],m.prototype,"offsetDistance",void 0),t([r({type:String,json:{write:!0}})],m.prototype,"offsetHow",void 0),t([r({type:String,json:{write:!0}})],m.prototype,"offsetUnit",void 0),m=t([i("esri.rest.support.OffsetParameters")],m),m.from=e(m);const n=m;export{n as default};
