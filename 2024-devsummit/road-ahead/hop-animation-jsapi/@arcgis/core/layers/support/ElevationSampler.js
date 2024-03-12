/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../../geometry.js";import"../../core/lang.js";import{m as t}from"../../chunks/handleUtils.js";import{L as e}from"../../chunks/Logger.js";import{g as s}from"../../chunks/unitUtils.js";import{t as o,g as n,c as i}from"../../chunks/aaBoundingRect.js";import{project as r}from"../../geometry/support/webMercatorUtils.js";import a from"../../geometry/Point.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";const l=()=>e.getLogger("esri.layers.support.ElevationSampler");class m{queryElevation(t){return u(t.clone(),this)}on(){return t()}projectIfRequired(t,e){return h(t,e)}}class c extends m{get spatialReference(){return this.extent.spatialReference}constructor(t,e,n){super(),this.tile=t,this.noDataValue=n;const i=t.tile.extent;this.extent=o(i,e.spatialReference),this.extent.zmin=t.zmin,this.extent.zmax=t.zmax,this._aaExtent=i;const r=s(e.spatialReference),a=e.lodAt(t.tile.level).resolution*r;this.demResolution={min:a,max:a}}contains(t){const e=this.projectIfRequired(t,this.spatialReference);return null!=e&&this.containsAt(e.x,e.y)}containsAt(t,e){return n(this._aaExtent,t,e)}elevationAt(t,e){if(!this.containsAt(t,e)){const s=this.extent,o=`${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`;return l().warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler extent (${o})`),this.noDataValue}return this.tile.sample(t,e)??this.noDataValue}}class p extends m{get spatialReference(){return this.extent.spatialReference}constructor(t,e,s){let n;super(),"number"==typeof e?(this.noDataValue=e,n=null):(n=e,this.noDataValue=s),this.samplers=n?t.map((t=>new c(t,n,this.noDataValue))):t;const r=this.samplers[0];if(r){this.extent=r.extent.clone();const{min:t,max:e}=r.demResolution;this.demResolution={min:t,max:e};for(let t=1;t<this.samplers.length;t++){const e=this.samplers[t];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=o(i(),n.spatialReference),this.demResolution={min:0,max:0}}elevationAt(t,e){let s,o=!1;for(const n of this.samplers)if(n.containsAt(t,e)&&(o=!0,s=n.elevationAt(t,e),s!==n.noDataValue))return s;return null!=s?s:(o||l().warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler`),this.noDataValue)}}function u(t,e){const s=h(t,e.spatialReference);if(!s)return null;switch(t.type){case"point":!function(t,e,s){t.z=s.elevationAt(e.x,e.y)}(t,s,e);break;case"polyline":!function(t,e,s){j.spatialReference=e.spatialReference;const o=t.hasM&&!t.hasZ;for(let n=0;n<t.paths.length;n++){const i=t.paths[n],r=e.paths[n];for(let t=0;t<i.length;t++){const e=i[t],n=r[t];j.x=n[0],j.y=n[1],o&&(e[3]=e[2]),e[2]=s.elevationAt(j.x,j.y)}}t.hasZ=!0}(t,s,e);break;case"multipoint":!function(t,e,s){j.spatialReference=e.spatialReference;const o=t.hasM&&!t.hasZ;for(let n=0;n<t.points.length;n++){const i=t.points[n],r=e.points[n];j.x=r[0],j.y=r[1],o&&(i[3]=i[2]),i[2]=s.elevationAt(j.x,j.y)}t.hasZ=!0}(t,s,e)}return t}function h(t,e){if(null==t)return null;const s=t.spatialReference;if(s.equals(e))return t;const o=r(t,e);return o||l().error(`Cannot project geometry spatial reference (wkid:${s.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),o}const j=new a;export{m as ElevationSamplerBase,p as MultiTileElevationSampler,c as TileElevationSampler,u as updateGeometryElevation};
