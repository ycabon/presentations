/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{D as e}from"./DynamicLayerView3D.js";import"../config.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"./asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/reactiveUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./RenderGeometry.js";import"./mat4.js";import"./ViewingMode.js";import"./debugFlags2.js";import"../views/3d/webgl/ManagedFBO.js";import"./enums.js";import"./StencilUtils.js";import"./basicInterfaces.js";import"./mat3.js";import"./mat3f64.js";import"./mat4f64.js";import"./BindType.js";import"./interfaces5.js";import"./ShaderTechniqueConfiguration.js";import"./VertexAttribute.js";import"./doublePrecisionUtils.js";import"./lengthUtils.js";import"./Material.js";import"./ContentObject.js";import"./aaBoundingBox.js";import"./Util.js";import"./vec2f64.js";import"./vec4.js";import"./vec4f64.js";import"./requestImageUtils.js";import"./Texture.js";import"./IntegerPassUniform.js";import"./compilerUtils.js";import"./axisAngleDegrees.js";import"./quat.js";import"./quatf64.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"./enumeration.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./RenderState.js";import"./RenderPlugin.js";import"./NestedMap.js";import"./Camera.js";import"./screenUtils.js";import"./vec2.js";import"./frustum.js";import"./plane.js";import"./Axis.js";import"./mathUtils2.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./Attribute.js";import"./Geometry.js";import"./Indices.js";import"./triangle.js";import"./lineSegment.js";import"./RibbonLineMaterial.js";import"./sphere.js";import"./Octree.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./OrderIndependentTransparency.js";import"./floatRGBA.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./computeTranslationToOriginAndRotation.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"./MemCache.js";import"./BufferObject.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./LayerView3D.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./DoubleArray.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./project.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./utils7.js";import"./utils8.js";import"../rest/support/ProjectParameters.js";import"./ImageMaterial.js";import"./GLTextureMaterial.js";import"./DefaultBufferWriter.js";import"./DefaultLayouts.js";import"./TriangleMaterial.js";import"./OutputHighlight.glsl.js";import"../views/layers/LayerView.js";import"../core/Identifiable.js";import"./UpdatingHandles.js";import"./RefreshableLayerView.js";import"./layerViewUtils.js";let o=class extends e{constructor(){super(...arguments),this.type="base-dynamic-3d"}};o=t([r("esri.views.3d.layers.BaseDynamicLayerView3D")],o);const s=o;export{s as default};