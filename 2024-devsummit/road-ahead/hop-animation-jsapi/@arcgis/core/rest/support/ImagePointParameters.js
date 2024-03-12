/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{geometryTypes as t}from"../../geometry.js";import{clone as s}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../chunks/writer.js";import{getJsonType as p,fromJSON as m}from"../../geometry/support/jsonUtils.js";import{measureOperationJSONMap as n,BaseImageMeasureParameters as c}from"./BaseImageMeasureParameters.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../layers/support/MosaicRule.js";import"../../layers/support/DimensionalDefinition.js";import"../../layers/support/RasterFunction.js";import"../../chunks/enumeration.js";var a;let u=a=class extends c{constructor(){super(...arguments),this.type="point",this.geometry=null,this.is3D=!1}writeGeometry(r,t,s){null!=r&&(t.geometryType=p(r),t[s]=r.toJSON())}get measureOperation(){const{is3D:r,geometry:t}=this;return"point"===t.type?r?"point-3D":"point":r?"centroid-3D":"centroid"}clone(){return new a(s({geometry:this.geometry,is3D:this.is3D,mosaicRule:this.mosaicRule,pixelSize:this.pixelSize,raster:this.raster}))}};r([o({types:t,json:{name:"fromGeometry",read:m}})],u.prototype,"geometry",void 0),r([i("geometry")],u.prototype,"writeGeometry",null),r([o({type:n.apiValues,json:{read:n.read,write:n.write}})],u.prototype,"measureOperation",null),r([o({json:{read:!0}})],u.prototype,"is3D",void 0),u=a=r([e("esri.rest.support.ImagePointParameters")],u);const j=u;export{j as default};
