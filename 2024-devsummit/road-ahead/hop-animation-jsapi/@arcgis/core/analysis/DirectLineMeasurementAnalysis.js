/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{A as r}from"../chunks/Analysis.js";import{D as s}from"../chunks/unitUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"../geometry/Point.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../core/Clonable.js";import"../chunks/ensureType.js";import"../core/Identifiable.js";import"../core/JSONSupport.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";let p=class extends r{constructor(t){super(t),this.type="direct-line-measurement",this.startPoint=null,this.endPoint=null,this.unit=null}get requiredPropertiesForEditing(){return[this.startPoint,this.endPoint]}clear(){this.startPoint=null,this.endPoint=null}};t([o({type:["direct-line-measurement"]})],p.prototype,"type",void 0),t([o({type:i})],p.prototype,"startPoint",void 0),t([o({type:i})],p.prototype,"endPoint",void 0),t([o({type:s,value:null})],p.prototype,"unit",void 0),t([o({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([e("esri.analysis.DirectLineMeasurementAnalysis")],p);const n=p;export{n as default};
