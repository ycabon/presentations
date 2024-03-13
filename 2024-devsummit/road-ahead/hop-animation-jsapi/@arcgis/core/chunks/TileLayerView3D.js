/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import o from"../core/Error.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{canProjectWithoutEngine as e}from"../geometry/projection.js";import{L as i}from"./LayerView3D.js";import{T as p}from"./TiledLayerView3D.js";import m from"../views/layers/LayerView.js";import{R as l}from"./RefreshableLayerView.js";import{i as j,M as a}from"./MapServiceLayerViewHelper.js";import{a as n}from"./drapedUtils.js";import"../config.js";import"./ensureType.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./tracking.js";import"../core/promiseUtils.js";import"./maybe.js";import"./SimpleObservable.js";import"./ObservableBase.js";import"./vec3f64.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/scheduling.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./LayerViewPerformanceInfo.js";import"./EllipsoidMode.js";import"./Material.js";import"./interfaces5.js";import"./basicInterfaces.js";import"./ContentObject.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"./ViewingMode.js";import"./Util.js";import"./vec2f64.js";import"./vec4.js";import"./vec4f64.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject2.js";import"./StencilUtils.js";import"./mat3.js";import"./mat3f64.js";import"./mat4f64.js";import"./mat4.js";import"./BindType.js";import"./ShaderTechniqueConfiguration.js";import"./doublePrecisionUtils.js";import"./lengthUtils.js";import"./debugFlags2.js";import"./requestImageUtils.js";import"./Texture.js";import"./VertexArrayObject.js";import"./BufferObject.js";import"./hydratedFeatures.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./dehydratedPoint.js";import"./labelUtils.js";import"./ElevationUpdateEvent.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./ElevationProvider.js";import"./unitConversionUtils.js";import"./graphicUtils.js";import"./Attribute.js";import"./Geometry.js";import"./Indices.js";import"./triangle.js";import"./plane.js";import"./quatf64.js";import"./mathUtils2.js";import"./lineSegment.js";import"./vec2f32.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./types.js";import"./DefaultBufferWriter.js";import"./HUDMaterial.js";import"./VerticalOffset.glsl.js";import"./GLTextureMaterial.js";import"./RenderPlugin.js";import"./OutputHighlight.glsl.js";import"./OrderIndependentTransparency.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./sphere.js";import"./edgeUtils.js";import"./earcut.js";import"./_commonjsHelpers.js";import"./DoubleArray.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./sizeVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./RenderGeometry.js";import"../views/3d/webgl/ManagedFBO.js";import"./IntegerPassUniform.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./RenderState.js";import"./NestedMap.js";import"./Camera.js";import"./frustum.js";import"./RibbonLineMaterial.js";import"./Octree.js";import"./floatRGBA.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./glUtil.js";import"./MemCache.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./Normals.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils3.js";import"./symbolColorUtils.js";import"./CameraSpace.glsl.js";import"./projectPointToVector.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./enums2.js";import"./utils6.js";import"./definitions.js";import"./HighlightOptions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./LRUCache.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./line.js";import"./line2.js";import"./lineStippleUtils.js";import"./projectVectorToPoint.js";import"./projectVectorToVector.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"./georeference.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces.js";import"./DefaultLayouts.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"./Intersector4.js";import"./ColorMaterial.js";import"./TriangleMaterial.js";import"./terrainUtils.js";import"./TerrainConst.js";import"./TilingScheme.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"./UpdatingHandles.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"../rest/identify.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils7.js";import"./utils8.js";import"./sublayerUtils.js";import"../rest/support/IdentifyParameters.js";import"../TimeExtent.js";import"./timeUtils.js";import"../rest/support/IdentifyResult.js";import"./popupUtils.js";let u=class extends(l(p(i(m)))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get tileInfo(){return this.layer.tileInfo}initialize(){if("web-tile"===this.layer.type){const t=this.layer.fullExtent?.spatialReference,r=this.layer.tileInfo?.spatialReference;if(null==t||null==r||!e(t,r)){const t="defaults"===this.layer.originOf("fullExtent")||null==this.layer.fullExtent?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new o("layerview:incompatible-fullextent",t)))}}j(this,this.layer)&&(this._popupHighlightHelper=new a({createFetchPopupFeaturesQueryGeometry:(t,o)=>n(t,o,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}async fetchPopupFeaturesAtLocation(t,o){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,o):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};t([r()],u.prototype,"imageFormatIsOpaque",null),t([r()],u.prototype,"hasMixedImageFormats",null),t([r()],u.prototype,"layer",void 0),t([r()],u.prototype,"tileInfo",null),u=t([s("esri.views.3d.layers.TileLayerView3D")],u);const y=u;export{y as default};