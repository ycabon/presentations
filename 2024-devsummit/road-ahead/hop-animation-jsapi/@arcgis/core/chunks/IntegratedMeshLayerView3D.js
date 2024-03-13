/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import t from"../Graphic.js";import{h as o}from"../core/lang.js";import{initial as s}from"../core/reactiveUtils.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{I as p}from"./I3SMeshView3D.js";import{a as m}from"./RenderGeometry.js";import{L as a}from"./LayerView3D.js";import{u as l}from"./EllipsoidMode.js";import j from"../views/layers/LayerView.js";import"../geometry.js";import"./ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./ByteSizeUnit.js";import"./mat3.js";import"./mat3f64.js";import"./mat4.js";import"./mat4f64.js";import"./quatf64.js";import"./vec4.js";import"./vec4f64.js";import"./UpdatingHandles.js";import"./LayerElevationProvider.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./RenderTexture.js";import"./sphere.js";import"./plane.js";import"./vec2f64.js";import"./mathUtils2.js";import"./ElevationRange.js";import"./ElevationUpdateEvent.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./ElevationProvider.js";import"./VertexAttribute.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./hydratedFeatures.js";import"./dehydratedPoint.js";import"./graphicUtils.js";import"../geometry/projection.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Attribute.js";import"./ContentObject.js";import"./Geometry.js";import"./Indices.js";import"./basicInterfaces.js";import"./Util.js";import"./triangle.js";import"./lineSegment.js";import"./doublePrecisionUtils.js";import"./vec2f32.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./types.js";import"./StencilUtils.js";import"./BindType.js";import"./interfaces5.js";import"./ShaderTechniqueConfiguration.js";import"./debugFlags2.js";import"./Material.js";import"./ViewingMode.js";import"./requestImageUtils.js";import"./enums.js";import"./Texture.js";import"./DefaultBufferWriter.js";import"./HUDMaterial.js";import"./VerticalOffset.glsl.js";import"./GLTextureMaterial.js";import"./RenderPlugin.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./OutputHighlight.glsl.js";import"./OrderIndependentTransparency.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./edgeUtils.js";import"./earcut.js";import"./_commonjsHelpers.js";import"./DoubleArray.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./sizeVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./IntegerPassUniform.js";import"./Normals.js";import"./RibbonLineMaterial.js";import"./Octree.js";import"./frustum.js";import"./floatRGBA.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./quat.js";import"./resourceUtils3.js";import"./NestedMap.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./symbolColorUtils.js";import"../views/3d/webgl/ManagedFBO.js";import"./CameraSpace.glsl.js";import"./RenderState.js";import"./projectPointToVector.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./enums2.js";import"./utils6.js";import"./definitions.js";import"./HighlightOptions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./LRUCache.js";import"./MemCache.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./line.js";import"./line2.js";import"./lineStippleUtils.js";import"./projectVectorToPoint.js";import"./projectVectorToVector.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"./georeference.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./axisAngleDegrees.js";import"./interfaces.js";import"./DefaultLayouts.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"./Camera.js";import"./Intersector2.js";import"./boundedPlane.js";import"./BufferObject.js";import"./Intersector4.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./ColorMaterial.js";import"./TriangleMaterial.js";import"./LayerConstants.js";import"./I3SOverrides.js";import"./uuid.js";import"./I3SNode.js";import"./I3SUtil.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./I3SBinaryReader.js";import"./layerViewUtils.js";import"./ReactiveSet.js";import"./featureQueryAll.js";import"./meshFeatureSet.js";import"../geometry/Mesh.js";import"./External.js";import"./infoFor3D.js";import"../rest/support/FeatureSet.js";import"./FeatureLayerView3D.js";import"./FeatureLayerViewBase3D.js";import"./FeatureLikeLayerView3D.js";import"./arcgisLayerUrl.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils7.js";import"./utils8.js";import"../rest/support/ProjectParameters.js";import"./ReactiveMap.js";import"./dehydratedFeatureComparison.js";import"./TilingScheme.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"./queryForSymbologySnapping.js";import"./elevationInfoUtils.js";import"./hash.js";import"./diffUtils.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./Graphics3DObjectStates.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../renderers/support/jsonUtils.js";import"../layers/Layer.js";import"./rendererConversion.js";import"./basemapUtils.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./PooledRBush.js";import"./quickselect.js";import"./PropertiesPool.js";import"./popupUtils.js";import"../layers/support/FeatureFilter.js";import"./floorFilterUtils.js";import"./QueryEngine.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./timeSupport.js";import"./projectionSupport.js";import"./json.js";import"./QueryEngineCapabilities.js";import"./utils10.js";import"./utils2.js";import"./utils11.js";import"./generateRendererUtils.js";import"./scaleUtils.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./FramebufferObject.js";import"./heatmapTextureUtils.js";import"./LayerViewPerformanceInfo.js";import"./projectExtentUtils.js";import"./query.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./queryZScale.js";import"./WorkerHandle.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./commonProperties2.js";import"./layerContainerType.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"../layers/support/FeatureEffect.js";import"./RefreshableLayerView.js";import"./labelUtils.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./Intersector.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"../layers/support/SceneModification.js";import"./persistable.js";import"./MD5.js";import"./multiOriginJSONSupportUtils.js";import"./resourceExtension.js";import"./SceneLayerWorker.js";import"./Intersector3.js";let n=class extends(p(a(j))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=o("enable-feature:im-shading"),this.drapeTargetType=m.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??0}get lodFactor(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}get progressiveLoadFactor(){return this.lodFactor>=1?.2:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add((()=>this.layer.modifications),(()=>this._loadModifications()),s),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const r=new t;return r.layer=this.layer,r.sourceLayer=this.layer,r}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),null==this.layer.modifications)return void(this._modifications=[]);const r=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange((()=>r),(()=>this._modifications=r.toArray()),s),"modifications")}};r([e()],n.prototype,"layer",void 0),r([e()],n.prototype,"i3slayer",null),r([e(l)],n.prototype,"updatingProgress",void 0),r([e()],n.prototype,"updatingProgressValue",null),r([e()],n.prototype,"lodFactor",null),r([e({readOnly:!0})],n.prototype,"progressiveLoadFactor",null),n=r([i("esri.views.3d.layers.SceneLayerView3D")],n);const u=n;export{u as default};