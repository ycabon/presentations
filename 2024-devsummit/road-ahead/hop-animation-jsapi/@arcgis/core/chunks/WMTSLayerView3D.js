/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import o from"../core/Collection.js";import{L as r}from"./Logger.js";import{whenOnce as s}from"../core/reactiveUtils.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{m as p}from"./layerUtils2.js";import{L as m}from"./LayerView3D.js";import{T as l}from"./TiledLayerView3D.js";import a from"../views/layers/LayerView.js";import{R as j}from"./RefreshableLayerView.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./asyncUtils.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../request.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./jsonMap.js";import"./unitUtils.js";import"./assets.js";import"./reader.js";import"./writer.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./LayerViewPerformanceInfo.js";import"./EllipsoidMode.js";import"./Material.js";import"./vec3f64.js";import"./interfaces5.js";import"./basicInterfaces.js";import"./ContentObject.js";import"./VertexAttribute.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./ViewingMode.js";import"./Util.js";import"./vec2f64.js";import"./vec4.js";import"./vec4f64.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject2.js";import"./StencilUtils.js";import"./mat3.js";import"./mat3f64.js";import"./mat4f64.js";import"./mat4.js";import"./BindType.js";import"./ShaderTechniqueConfiguration.js";import"./doublePrecisionUtils.js";import"./lengthUtils.js";import"./debugFlags2.js";import"./requestImageUtils.js";import"./Texture.js";import"./VertexArrayObject.js";import"./BufferObject.js";import"./hydratedFeatures.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./dehydratedPoint.js";import"./labelUtils.js";import"./ElevationUpdateEvent.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./ElevationProvider.js";import"./unitConversionUtils.js";import"./graphicUtils.js";import"../geometry/projection.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Attribute.js";import"./Geometry.js";import"./Indices.js";import"./triangle.js";import"./plane.js";import"./quatf64.js";import"./mathUtils2.js";import"./lineSegment.js";import"./vec2f32.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./types.js";import"./DefaultBufferWriter.js";import"./HUDMaterial.js";import"./VerticalOffset.glsl.js";import"./GLTextureMaterial.js";import"./RenderPlugin.js";import"./OutputHighlight.glsl.js";import"./OrderIndependentTransparency.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./sphere.js";import"./edgeUtils.js";import"./earcut.js";import"./_commonjsHelpers.js";import"./DoubleArray.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./sizeVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./RenderGeometry.js";import"../views/3d/webgl/ManagedFBO.js";import"./IntegerPassUniform.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./RenderState.js";import"./NestedMap.js";import"./Camera.js";import"./frustum.js";import"./RibbonLineMaterial.js";import"./Octree.js";import"./floatRGBA.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./glUtil.js";import"./MemCache.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./Normals.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils3.js";import"./symbolColorUtils.js";import"./CameraSpace.glsl.js";import"./projectPointToVector.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./enums2.js";import"./utils6.js";import"./definitions.js";import"./HighlightOptions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./LRUCache.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./line.js";import"./line2.js";import"./lineStippleUtils.js";import"./projectVectorToPoint.js";import"./projectVectorToVector.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"./georeference.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces.js";import"./DefaultLayouts.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./Intersector4.js";import"./ColorMaterial.js";import"./TriangleMaterial.js";import"./terrainUtils.js";import"./TerrainConst.js";import"./TilingScheme.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"./UpdatingHandles.js";let n=class extends(j(l(m(a)))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet((t=>this._getTileInfoSupportError(t.tileInfo,t.fullExtent)));const t=s((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const t=this._getCompatibleTileInfoMatrixSet((t=>this._getTileInfoError(t.tileInfo,t.fullExtent)));null!=t&&(null!==t.id&&this.layer.activeLayer.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),t.tileInfo&&(this.tileInfo=t.tileInfo),this.layer.fullExtent=t.fullExtent)}));this.addResolvingPromise(t),this.when((()=>this._postInitialize()))}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return null!=t&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add((()=>this.layer?.activeLayer?.styleId),(()=>this.refresh())),this._updatingHandles.add((()=>this.layer?.activeLayer),(t=>{const o=this._getCompatibleTileInfoMatrixSet((t=>this._getTileInfoError(t.tileInfo,t.fullExtent)),!0);o&&null!=o.id&&t.tileMatrixSetId!==o.id&&(this.layer.activeLayer.tileMatrixSetId=o.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileInfoMatrixSet(t,s=!1){const e=p(this.layer);if(null!=e){if(o.isCollection(e)){const o=e.find((o=>{const e=t(o);return null!=e&&(s?r.getLogger(this).error("The selected tile matrix set is not compatible with the view",e):this.addResolvingPromise(Promise.reject(e))),null==e}));return o}const i=t(e);return null!=i&&(s?r.getLogger(this).error("The selected tile matrix set is not compatible with the view",i):this.addResolvingPromise(Promise.reject(i))),e}return null}_getTileInfoError(t,o){return this._getTileInfoSupportError(t,o)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};t([e({readOnly:!0})],n.prototype,"hasMixedImageFormats",null),t([e()],n.prototype,"layer",void 0),t([e()],n.prototype,"suspended",void 0),t([e()],n.prototype,"tileInfo",void 0),n=t([i("esri.views.3d.layers.WMTSLayerView3d")],n);const c=n;export{c as default};