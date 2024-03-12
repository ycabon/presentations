/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{h as o}from"../../chunks/handleUtils.js";import{m as s}from"../../chunks/memoize.js";import{watch as t}from"../../core/reactiveUtils.js";import{x as i}from"../../chunks/unitUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import c from"./ElevationProfileLine.js";import{g as u}from"../../chunks/elevationQuerySourceUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/uuid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/vec4f64.js";import"../../chunks/Material.js";import"../../chunks/interfaces5.js";import"../../chunks/basicInterfaces.js";import"../../chunks/ContentObject.js";import"../../chunks/VertexAttribute.js";import"../../chunks/aaBoundingBox.js";import"../../geometry/Extent.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/ViewingMode.js";import"../../chunks/Util.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4.js";import"../../Ground.js";import"../../chunks/collectionUtils.js";import"../../chunks/compilerUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/enumeration.js";import"../../chunks/opacityUtils.js";let m=class extends c{constructor(e){super(e),this.type="ground",this.color=new r("#ff7f00"),this.viewVisualizationEnabled=!0,this.numSamplesForPreview=50,this.numSamplesPerChunk=1e3,this._getQueryElevationDependencies=s(((e,r)=>({ground:e,groundLayers:r})))}get available(){const e=this._ground;return null!=e&&e.layers.some((e=>e.visible))}get minDemResolution(){return u(this._ground)}get _queryElevationDependencies(){return this._getQueryElevationDependencies(this._ground,this._groundLayers)}get _ground(){return this._viewModel?.view?.map?.ground}get _groundLayers(){return this._ground?.layers?.toArray()??[]}async queryElevation(e,r){const o=this._queryElevationDependencies;if(null==o)throw new Error("ElevationProfileLineGround: no dependencies");const{ground:s}=o;if(null==s)throw new Error("No ground configured in the view");const t=await s.queryElevation(e,r),n=i(e.spatialReference),p=i(s.layers.at(0).spatialReference);if(n!==p){const e=t.geometry;e.points=e.points.map((([e,o,s])=>[e,o,s===r.noDataValue?s:s*p/n]))}return t}attach(e){return o([super.attach(e),t((()=>this._queryElevationDependencies),(()=>this._onChange()))])}};e([n({type:r,nonNullable:!0})],m.prototype,"color",void 0),e([n()],m.prototype,"viewVisualizationEnabled",void 0),e([n()],m.prototype,"available",null),e([n({readOnly:!0})],m.prototype,"minDemResolution",null),e([n()],m.prototype,"_queryElevationDependencies",null),e([n()],m.prototype,"_ground",null),e([n()],m.prototype,"_groundLayers",null),m=e([p("esri.widgets.ElevationProfile.ElevationProfileLineGround")],m);const a=m;export{a as default};
