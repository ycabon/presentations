/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import{ClonableMixin as s}from"../core/Clonable.js";import{c as o}from"../chunks/Cyclical.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{e as i}from"../chunks/maybe.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import{cast as p}from"../core/accessorSupport/decorators/cast.js";import"../core/lang.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{f as n}from"../chunks/ensureType.js";import{p as c}from"../chunks/persistable.js";import l from"../geometry/Point.js";import"../geometry/Extent.js";import"../chunks/Logger.js";import"../config.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../chunks/handleUtils.js";import"../chunks/writer.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/MD5.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/uuid.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";let u=class extends(s(r)){constructor(t){super(t),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(t){return this.heading===t.heading&&this.tilt===t.tilt&&i(this.position,t.position)&&this.width===t.width&&this.height===t.height}};t([e({readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),t([e({type:l}),c()],u.prototype,"position",void 0),t([e({type:Number,nonNullable:!0,range:{min:0,max:360}}),c(),p((t=>o.normalize(n(t),0,!0)))],u.prototype,"heading",void 0),t([e({type:Number,nonNullable:!0,range:{min:0,max:360}}),c(),p((t=>o.normalize(n(t),0,!0)))],u.prototype,"tilt",void 0),t([e({type:Number,nonNullable:!0}),c()],u.prototype,"width",void 0),t([e({type:Number,nonNullable:!0}),c()],u.prototype,"height",void 0),u=t([m("esri.analysis.SlicePlane")],u);const h=u;export{h as default};
