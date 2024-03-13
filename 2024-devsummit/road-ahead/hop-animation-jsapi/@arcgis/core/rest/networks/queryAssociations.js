/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import s from"../../request.js";import{a as t}from"../../chunks/typeUtils2.js";import{p as o,e as r,a as e}from"../../chunks/utils7.js";import i from"./support/QueryAssociationsResult.js";import"../../config.js";import"../../core/lang.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../chunks/Logger.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/jsonMap.js";import"./support/Association.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"./support/NetworkElement.js";async function p(p,m,n){const c=o(p),u=function(s){const{returnDeletes:o,elements:r,gdbVersion:e,moment:i}=s.toJSON();return{returnDeletes:o,elements:JSON.stringify(r.map((s=>({globalId:s.globalId,networkSourceId:s.networkSourceId,terminalId:s.terminalId})))),types:JSON.stringify(s.types.map((s=>t.toJSON(s)))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:e,moment:i}}(m),j={...u,f:"json"},a=r({...c.query,...j}),l=e(a,{...n,method:"post"}),h=`${c.path}/associations/query`,{data:k}=await s(h,l);return i.fromJSON(k)}export{p as queryAssociations};