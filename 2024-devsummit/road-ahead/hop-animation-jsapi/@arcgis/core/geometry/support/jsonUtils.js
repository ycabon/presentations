/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import r from"../Extent.js";import o from"../Geometry.js";import t from"../Multipoint.js";import s from"../Point.js";import i from"../Polygon.js";import e from"../Polyline.js";import"../../chunks/tslib.es6.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../SpatialReference.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"./webMercatorUtils.js";import"../../chunks/reader.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";function n(r){return void 0!==r.xmin&&void 0!==r.ymin&&void 0!==r.xmax&&void 0!==r.ymax}function m(r){return void 0!==r.points}function c(r){return void 0!==r.x&&void 0!==r.y}function p(r){return void 0!==r.paths}function u(r){return void 0!==r.rings}function j(r){return void 0!==r.vertexAttributes}function l(j){return null==j?null:j instanceof o?j:c(j)?s.fromJSON(j):p(j)?e.fromJSON(j):u(j)?i.fromJSON(j):m(j)?t.fromJSON(j):n(j)?r.fromJSON(j):null}function a(r){return r?c(r)?"esriGeometryPoint":p(r)?"esriGeometryPolyline":u(r)?"esriGeometryPolygon":n(r)?"esriGeometryEnvelope":m(r)?"esriGeometryMultipoint":null:null}const h={esriGeometryPoint:s,esriGeometryPolyline:e,esriGeometryPolygon:i,esriGeometryEnvelope:r,esriGeometryMultipoint:t};function k(r){return r&&h[r]||null}export{l as fromJSON,k as getGeometryType,a as getJsonType,n as isExtent,j as isMesh,m as isMultipoint,c as isPoint,u as isPolygon,p as isPolyline};
