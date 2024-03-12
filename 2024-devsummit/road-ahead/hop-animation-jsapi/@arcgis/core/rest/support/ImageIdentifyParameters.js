/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../TimeExtent.js";import{d as r}from"../../core/Accessor.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{L as i}from"../../chunks/Logger.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{subclass as u}from"../../core/accessorSupport/decorators/subclass.js";import{w as p}from"../../chunks/writer.js";import m from"../../geometry/Point.js";import{getJsonType as l}from"../../geometry/support/jsonUtils.js";import a from"../../layers/support/MosaicRule.js";import c from"../../layers/support/RasterFunction.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/reader.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../layers/support/DimensionalDefinition.js";import"../../chunks/enumeration.js";var j;let y=j=class extends s{constructor(){super(...arguments),this.geometry=null,this.rasterFunctions=null,this.pixelSize=null,this.returnGeometry=!0,this.returnCatalogItems=!0,this.returnPixelValues=!0,this.maxItemCount=null,this.timeExtent=null,this.raster=void 0,this.viewId=void 0,this.processAsMultidimensional=!1}writeGeometry(t,e,r){null!=t&&(e.geometryType=l(t),e[r]=JSON.stringify(t.toJSON()))}set mosaicRule(t){let e=t;e?.mosaicMethod&&(e=a.fromJSON({...e.toJSON(),mosaicMethod:e.mosaicMethod,mosaicOperation:e.mosaicOperation})),this._set("mosaicRule",e)}writeMosaicRule(t,e,r){null!=t&&(e[r]=JSON.stringify(t.toJSON()))}get renderingRule(){return r(i.getLogger(this),"renderingRule",{replacement:"rasterFunction",version:"4.27",warnOnce:!0}),this._get("rasterFunction")}set renderingRule(t){r(i.getLogger(this),"renderingRule",{replacement:"rasterFunction",version:"4.27",warnOnce:!0}),this._set("rasterFunction",t)}get renderingRules(){return r(i.getLogger(this),"renderingRules",{replacement:"rasterFunctions",version:"4.27",warnOnce:!0}),this._get("rasterFunctions")}set renderingRules(t){r(i.getLogger(this),"renderingRules",{replacement:"rasterFunctions",version:"4.27",warnOnce:!0}),this._set("rasterFunctions",t)}set rasterFunction(t){let e=t;e?.rasterFunction&&(e=c.fromJSON({...e.toJSON(),rasterFunction:e.rasterFunction,rasterFunctionArguments:e.rasterFunctionArguments})),this._set("rasterFunction",e)}writeRasterFunction(t,e,r){null!=t&&(e[r]=JSON.stringify(t.toJSON())),t.rasterFunctionDefinition&&(e[r]=JSON.stringify(t.rasterFunctionDefinition))}writeRasterFunctions(t,e,r){null!=t&&(e[r]=JSON.stringify(t.map((t=>t.rasterFunctionDefinition||t.toJSON()))))}writePixelSize(t,e,r){null!=t&&(e[r]=JSON.stringify(t))}writeTimeExtent(t,e,r){if(null!=t){const s=null!=t.start?t.start.getTime():null,o=null!=t.end?t.end.getTime():null;e[r]=null!=s?null!=o?`${s},${o}`:`${s}`:null}}clone(){return new j(o({geometry:this.geometry,mosaicRule:this.mosaicRule,rasterFunction:this.rasterFunction,rasterFunctions:this.rasterFunctions,pixelSize:this.pixelSize,returnGeometry:this.returnGeometry,returnCatalogItems:this.returnCatalogItems,returnPixelValues:this.returnPixelValues,maxItemCount:this.maxItemCount,processAsMultidimensional:this.processAsMultidimensional,raster:this.raster,viewId:this.viewId,timeExtent:this.timeExtent}))}};t([n({json:{write:!0}})],y.prototype,"geometry",void 0),t([p("geometry")],y.prototype,"writeGeometry",null),t([n({type:a,json:{write:!0}})],y.prototype,"mosaicRule",null),t([p("mosaicRule")],y.prototype,"writeMosaicRule",null),t([n({type:c})],y.prototype,"renderingRule",null),t([n({type:[c]})],y.prototype,"renderingRules",null),t([n({type:c,json:{write:!0,name:"renderingRule"}})],y.prototype,"rasterFunction",null),t([p("rasterFunction")],y.prototype,"writeRasterFunction",null),t([n({type:[c],json:{write:!0,name:"renderingRules"}})],y.prototype,"rasterFunctions",void 0),t([p("rasterFunctions")],y.prototype,"writeRasterFunctions",null),t([n({type:m,json:{write:!0}})],y.prototype,"pixelSize",void 0),t([p("pixelSize")],y.prototype,"writePixelSize",null),t([n({type:Boolean,json:{write:!0}})],y.prototype,"returnGeometry",void 0),t([n({type:Boolean,json:{write:!0}})],y.prototype,"returnCatalogItems",void 0),t([n({type:Boolean,json:{write:!0}})],y.prototype,"returnPixelValues",void 0),t([n({type:Number,json:{write:!0}})],y.prototype,"maxItemCount",void 0),t([n({type:e,json:{write:{target:"time"}}})],y.prototype,"timeExtent",void 0),t([p("timeExtent")],y.prototype,"writeTimeExtent",null),t([n({json:{write:!0}})],y.prototype,"raster",void 0),t([n({json:{write:!0}})],y.prototype,"viewId",void 0),t([n({type:Boolean,json:{write:!0}})],y.prototype,"processAsMultidimensional",void 0),y=j=t([u("esri.rest.support.ImageIdentifyParameters")],y);const h=y;export{h as default};
