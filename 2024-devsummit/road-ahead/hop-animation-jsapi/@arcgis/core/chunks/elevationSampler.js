/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{open as t}from"../core/workers/workers.js";import{c as r}from"./vec3f64.js";import{A as o}from"./plane.js";import{i as e}from"./triangle.js";import s from"./ElevationSamplerWorker.js";import{ElevationSamplerBase as i}from"../layers/support/ElevationSampler.js";import"../core/Error.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../core/promiseUtils.js";import"./handleUtils.js";import"./maybe.js";import"../core/workers/Connection.js";import"./Queue.js";import"./tracking.js";import"./utils.js";import"./SimpleObservable.js";import"./ObservableBase.js";import"../core/workers/RemoteClient.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"../core/scheduling.js";import"../request.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./assets.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./Axis.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./vec4f64.js";import"./mathUtils2.js";import"./lineSegment.js";import"./PooledRBush.js";import"./quickselect.js";import"./_commonjsHelpers.js";import"./meshVertexSpaceUtils.js";import"./mat4.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../core/Clonable.js";import"./enumeration.js";import"./vec32.js";import"./georeference.js";import"./mat3.js";import"../geometry/projection.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./spatialReferenceEllipsoidUtils.js";import"./computeTranslationToOriginAndRotation.js";import"./DoubleArray.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./quat.js";import"./vec4.js";import"./axisAngleDegrees.js";import"./BufferView.js";import"./vec2.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";async function m(r,o){const e=await(++a,c&&(clearTimeout(c),c=0),n||(n=t("ElevationSamplerWorker").catch((()=>null)),n)),s=await j.createIndex(r,e);return function(t){--a,null!=t&&0===a&&(c=setTimeout((()=>{t.close(),n=null,c=0}),l))}(e),new p(r,s,o)}class p extends i{constructor(t,r,o){super(),this._rindex=r,this.demResolution={min:0,max:0},this.spatialReference=t.spatialReference.clone(),this.extent=t.extent.clone(),this.noDataValue=o?.noDataValue||0}elevationAt(t,r){let s=Number.NEGATIVE_INFINITY;return o([t,r,0],[0,0,-1],u),this._rindex.search({minX:t,maxX:t,minY:r,maxY:r},(t=>{e(t,u,g)&&g[2]>s&&(s=g[2])})),s===Number.NEGATIVE_INFINITY?this.noDataValue:s}}const j=new s;let a=0,n=null,c=0;const l=1e4,u=o([0,0,0],[0,0,-1]),g=r();export{m as create};