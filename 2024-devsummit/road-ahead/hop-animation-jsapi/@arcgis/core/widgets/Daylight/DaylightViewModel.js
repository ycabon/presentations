/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{m as i}from"../../chunks/handleUtils.js";import{L as e}from"../../chunks/Logger.js";import{r as o}from"../../chunks/maybe.js";import{when as r,initial as n,watch as p,on as m,syncAndInitial as l}from"../../core/reactiveUtils.js";import{schedule as a}from"../../core/scheduling.js";import{b as u,d as c,e as h,i as j,r as g,o as d}from"../../chunks/timeUtils.js";import{property as y}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as k}from"../../core/accessorSupport/decorators/subclass.js";import f from"../../views/SceneView.js";import b from"../../views/3d/environment/SunLighting.js";import S from"../../views/3d/environment/VirtualLighting.js";import{p as U}from"../../chunks/earthUtils.js";import w from"../Slider/SliderViewModel.js";import v from"../support/DatePickerViewModel.js";import{f as T,a as D}from"../../chunks/timeWidgetUtils.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../Camera.js";import"../../CameraLayout.js";import"../../core/Clonable.js";import"../../chunks/Cyclical.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../core/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../Viewpoint.js";import"../../chunks/domUtils.js";import"../../chunks/screenUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../intl.js";import"../../chunks/messages.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../geometry/HeightModelInfo.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/projectBoundingRect.js";import"../../chunks/projectPointToVector.js";import"../../chunks/boundedPlane.js";import"../../chunks/plane.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/mat4.js";import"../../chunks/lineSegment.js";import"../../chunks/RenderCoordsHelper.js";import"../../chunks/spatialReferenceEllipsoidUtils.js";import"../../chunks/projectVectorToPoint.js";import"../../chunks/projectVectorToVector.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/sphere.js";import"../../chunks/vec4.js";import"../../chunks/ElevationProvider.js";import"../../chunks/ViewingMode.js";import"../../chunks/scaleUtils.js";import"../../chunks/layerUtils2.js";import"../../views/View.js";import"../../Map.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../Ground.js";import"../../chunks/compilerUtils.js";import"../../chunks/CollectionFlattener.js";import"../../chunks/editableLayers.js";import"../../chunks/infoFor3D.js";import"../../chunks/basemapUtils.js";import"../../chunks/utils3.js";import"../../chunks/collectionUtils2.js";import"../../support/LayersMixin.js";import"../../layers/Layer.js";import"../../support/TablesMixin.js";import"../../TimeExtent.js";import"../../chunks/UpdatingHandles.js";import"../../views/BasemapView.js";import"../../views/Magnifier.js";import"../../chunks/ReactiveMap.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../views/Theme.js";import"../../chunks/InputManager.js";import"../../chunks/PropertiesPool.js";import"../../core/signal.js";import"../../chunks/ViewEvents.js";import"../../chunks/IViewEvents.js";import"../../chunks/interfaces2.js";import"../../chunks/screenUtils2.js";import"../../views/input/Input.js";import"../../views/input/gamepad/GamepadSettings.js";import"../../views/input/gamepad/GamepadInputDevice.js";import"../../views/navigation/Navigation.js";import"../../views/navigation/gamepad/GamepadSettings.js";import"../../chunks/heightModelInfoUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/projectionUtils.js";import"../../views/BreakpointsOwner.js";import"../../views/DOMContainer.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../views/GroundView.js";import"../../chunks/cameraUtils.js";import"../../chunks/Intersector2.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/mat3.js";import"../../chunks/orientedBoundingBox.js";import"../../chunks/quat.js";import"../../chunks/computeTranslationToOriginAndRotation.js";import"../../chunks/Attribute.js";import"../../chunks/spatialReferenceSupport.js";import"../../layers/support/ElevationSampler.js";import"../../chunks/TerrainConst.js";import"../../chunks/TilingScheme.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../chunks/TileKey.js";import"../../views/PopupView.js";import"../../views/ViewAnimation.js";import"../../webscene/Environment.js";import"../../views/3d/environment/SunnyWeather.js";import"../../chunks/weather.js";import"../../views/3d/environment/CloudyWeather.js";import"../../views/3d/environment/FoggyWeather.js";import"../../views/3d/environment/RainyWeather.js";import"../../views/3d/environment/SnowyWeather.js";import"../../chunks/lightingTypes.js";import"../../webscene/SunLighting.js";import"../../webscene/VirtualLighting.js";import"../../webscene/background/Background.js";import"../../webscene/background/ColorBackground.js";import"../../chunks/projectPointToWGS84ComparableLonLat.js";import"../../chunks/projectVectorToWGS84ComparableLonLat.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec2.js";import"../../chunks/IntegerPassUniform.js";import"../../chunks/interfaces5.js";import"../../chunks/VertexAttribute.js";import"../../chunks/StencilUtils.js";import"../../chunks/basicInterfaces.js";import"../../chunks/BindType.js";import"../../chunks/ShaderTechniqueConfiguration.js";import"../../chunks/doublePrecisionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/debugFlags2.js";import"../../chunks/Material.js";import"../../chunks/ContentObject.js";import"../../chunks/Util.js";import"../../chunks/requestImageUtils.js";import"../../chunks/enums.js";import"../../chunks/Texture.js";import"../../chunks/RenderGeometry.js";import"../../views/3d/webgl/ManagedFBO.js";import"../../chunks/axisAngleDegrees.js";import"../../chunks/RenderState.js";import"../../chunks/RenderPlugin.js";import"../../chunks/NestedMap.js";import"../../chunks/Camera.js";import"../../chunks/frustum.js";import"../../chunks/Geometry.js";import"../../chunks/Indices.js";import"../../chunks/triangle.js";import"../../chunks/RibbonLineMaterial.js";import"../../chunks/Octree.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/BufferView.js";import"../../chunks/types.js";import"../../chunks/OrderIndependentTransparency.js";import"../../chunks/floatRGBA.js";import"../../chunks/VertexArrayObject2.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/Intersector.js";import"../../chunks/glUtil.js";import"../../chunks/VertexElementDescriptor.js";import"../../chunks/MemCache.js";import"../../chunks/BufferObject.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/EllipsoidMode.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/labelUtils.js";import"../../chunks/ElevationUpdateEvent.js";import"../../chunks/ElevationContext.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/graphicUtils.js";import"../../chunks/vec2f32.js";import"../../chunks/DefaultBufferWriter.js";import"../../chunks/HUDMaterial.js";import"../../chunks/VerticalOffset.glsl.js";import"../../chunks/GLTextureMaterial.js";import"../../chunks/OutputHighlight.glsl.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/quantizationUtils.js";import"../../chunks/featureConversionUtils.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/edgeUtils.js";import"../../chunks/earcut.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/DoubleArray.js";import"../../chunks/vec32.js";import"../../chunks/SnappingCandidate.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/triangulationUtils.js";import"../../chunks/deduplicate.js";import"../../chunks/Normals.js";import"../../chunks/objectResourceUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/DefaultMaterial_COLOR_GAMMA.js";import"../../chunks/Version.js";import"../../chunks/resourceUtils3.js";import"../../chunks/symbolColorUtils.js";import"../../chunks/CameraSpace.glsl.js";import"../../chunks/CIMSymbolHelper.js";import"../../chunks/BidiEngine.js";import"../../chunks/fontUtils.js";import"../../chunks/GeometryUtils.js";import"../../chunks/enums2.js";import"../../chunks/utils6.js";import"../../chunks/definitions.js";import"../../chunks/HighlightOptions.js";import"../../chunks/shapingUtils.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df32.js";import"../../chunks/Rect.js";import"../../chunks/BoundingBox.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/OverrideHelper.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils9.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/LRUCache.js";import"../../chunks/GeometryUtil.js";import"../../chunks/vec3f32.js";import"../../chunks/line.js";import"../../chunks/line2.js";import"../../chunks/lineStippleUtils.js";import"../../geometry/support/MeshComponent.js";import"../../geometry/support/MeshMaterial.js";import"../../geometry/support/MeshTexture.js";import"../../chunks/imageUtils.js";import"../../geometry/support/MeshTextureTransform.js";import"../../geometry/support/MeshMaterialMetallicRoughness.js";import"../../chunks/meshVertexSpaceUtils.js";import"../../geometry/support/MeshGeoreferencedVertexSpace.js";import"../../chunks/georeference.js";import"../../geometry/support/MeshLocalVertexSpace.js";import"../../geometry/support/MeshTransform.js";import"../../chunks/interfaces.js";import"../../chunks/DefaultLayouts.js";import"../../chunks/styleUtils.js";import"../../chunks/webStyleSymbolUtils.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/Intersector4.js";import"../../chunks/ColorMaterial.js";import"../../chunks/TriangleMaterial.js";import"../../chunks/FramebufferObject.js";import"../../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import"../../chunks/WebGLRequirements.js";import"../../chunks/capabilities.js";import"../../chunks/ray.js";import"../../chunks/viewpointUtils.js";import"../../chunks/ZoomMomentumEstimator.js";import"../../chunks/FeatureTileDescriptor3D.js";import"../../chunks/hitTest.js";import"../../chunks/LayerConstants.js";import"../../chunks/intersectorUtilsConversions.js";import"../../chunks/Intersector3.js";import"../../chunks/ElevationRange.js";import"../../chunks/geometryServiceUtils.js";import"../../chunks/project.js";import"../../chunks/utils7.js";import"../../chunks/utils8.js";import"../../rest/support/ProjectParameters.js";import"../../chunks/hitTestSelectUtils.js";import"../../chunks/terrainUtils.js";import"../../views/3d/support/SceneViewPerformanceInfo.js";import"../../chunks/ByteSizeUnit.js";import"../../chunks/LayerViewPerformanceInfo.js";import"../../views/3d/support/LayerPerformanceInfo.js";import"../../layers/mixins/RefreshableLayer.js";import"../../chunks/layerContainerType.js";import"../../chunks/ElevationQueryTileCache.js";import"../../chunks/LercDecoder.js";import"../../chunks/WorkerHandle.js";import"../../chunks/RenderableTile.js";import"../../chunks/mat3f32.js";import"../../chunks/enums3.js";import"../../chunks/TileStrategy.js";import"../../chunks/TileKey2.js";import"../../chunks/QueueProcessor.js";import"../../chunks/config.js";import"../../chunks/TiledDisplayObject.js";import"../../chunks/DisplayObject.js";import"../../chunks/ElevationSamplerData.js";import"../../chunks/rasterUtils.js";import"../../views/2d/ViewState.js";import"../../chunks/mat2df64.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/StyleDefinition.js";import"../../chunks/resources.js";import"../../chunks/edgeProcessing.js";import"../../chunks/EdgeWorkerHandle.js";import"../../chunks/workerHelper.js";import"../../chunks/testSVGPremultipliedAlpha.js";import"../../chunks/RenderingContext.js";import"../../chunks/ProgramCache.js";import"../../chunks/Program.js";import"../../chunks/layerViewUtils.js";import"../../views/ui/DefaultUI.js";import"../../views/ui/UI.js";import"../../chunks/themeUtils.js";import"../Attribution.js";import"../Widget.js";import"../../chunks/uuid.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/legacyIcon.js";import"../Attribution/AttributionViewModel.js";import"../../chunks/globalCss.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/jsxFactory.js";import"../Compass.js";import"../Compass/CompassViewModel.js";import"../../chunks/utils18.js";import"../support/GoTo.js";import"../NavigationToggle.js";import"../NavigationToggle/NavigationToggleViewModel.js";import"../Zoom.js";import"../Zoom/ZoomViewModel.js";import"../support/DateTimeElementViewModel.js";var _;!function(t){t[t.NORTHERN=0]="NORTHERN",t[t.SOUTHERN=1]="SOUTHERN"}(_||(_={}));const M={spring:{dayOfMonth:20,month:2},summer:{dayOfMonth:21,month:5},fall:{dayOfMonth:23,month:8},winter:{dayOfMonth:21,month:11}},C=["spring","summer","fall","winter"];function P(t,s,i){const e=L(s,i),{dayOfMonth:o,month:r}=M[e],n=new Date(t.getTime());return n.setMonth(r,o),n}function L(t,s){return s===_.NORTHERN?t:function(t){const s=C.indexOf(t);return C[(s+2)%4]}(t)}let O=class extends w{constructor(){super(...arguments),this.utcOffset=null,this.timezonePickerOpen=!1}};t([y()],O.prototype,"utcOffset",void 0),t([y()],O.prototype,"timezonePickerOpen",void 0),O=t([k("esri.widgets.Daylight.support.SliderWithDropdownViewModel")],O);const E="esri.widgets.Daylight.DaylightViewModel";let V=class extends s{constructor(t){super(t),this.view=null,this.datePickerViewModel=new v,this.timeSliderViewModel=new O({min:0,max:1439,values:[0],labelFormatFunction:T,inputFormatFunction:T}),this.lightingUpdateInterval=200,this._oldLighting=null,this.playSpeedMultiplier=1,this._lastTime=null,this._sunrise=null,this._sunset=null,this._cachedLightingDateUTC=new Date(0),this._cachedDisplayUTCOffset=0,this._firstInteraction=!0,this._lastLightingUpdate=0,this._lightingUpdateHandle=null}initialize(){this.addHandles([r((()=>this.view),(t=>t.when((()=>this._updateLighting()))),n),p((()=>{const t=this._lighting;return"sun"===t?.type?I(t):null}),(t=>this._scheduleLightingUpdate(t))),m((()=>this._lighting),"timezone-will-change",(t=>this._timezoneWillChange(t)),{onListenerAdd:()=>this._timezoneWillChange(null)}),p((()=>!0===this.view?.stationary),(()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()}),n),p((()=>{const t=this.timeSliderViewModel;return{vm:t,state:t.state,sliderPosition:this.timeSliderPosition}}),(({vm:t,state:s,sliderPosition:i})=>{"ready"===s&&t.setValue(0,i)})),p((()=>this.timeSliderViewModel?.utcOffset),(t=>{null!=t&&(this.utcOffset=t)})),p((()=>({utcOffset:this.utcOffset,sliderViewModel:this.timeSliderViewModel})),(({utcOffset:t,sliderViewModel:s})=>{s&&(s.utcOffset=t)}),l),p((()=>this.timeSliderViewModel.timezonePickerOpen),(()=>this.stopPlaying())),p((()=>this.timeSliderViewModel.values),(t=>this._setTimeSliderPosition(t?.[0]??0,{forceLightingUpdate:!1}))),p((()=>this.datePickerViewModel.value),(t=>{this.dayPlaying=!1,this.localDate=t})),p((()=>this.localDate),(t=>{this.datePickerViewModel.value.valueOf()!==t.getTime()&&this.datePickerViewModel.set("value",t)}))])}destroy(){this._cancelLightingUpdate(),this.view=null}get isSupported(){return null==this.view||"3d"===this.view.type}get utcOffset(){return this._cachedDisplayUTCOffset}set utcOffset(t){t!==this.utcOffset&&null!=this._lighting&&"virtual"!==this._lighting.type&&(this._lighting.displayUTCOffset=t,this._updateLighting())}get localDate(){return h(this._lightingDateDisplay)}set localDate(t){j(t)&&t.getTime()!==this.localDate.getTime()&&(this._lightingDateDisplay=g(this._lightingDateDisplay,t))}get timeSliderPosition(){var t;return t=this._lightingDateDisplay,c(t,"minutes")}set timeSliderPosition(t){this._setTimeSliderPosition(t,{forceLightingUpdate:!0})}_setTimeSliderPosition(t,s){var i;Math.abs(t-this.timeSliderPosition)<=1/60||(this.stopPlaying(),this._enableDirectShadowsIfFirstInteraction(),s.forceLightingUpdate&&(this._cancelLightingUpdate(),this._updateLighting()),this._lightingDateDisplay=(i=this._lightingDateDisplay,u(i,t,"minutes")))}_timezoneFromCamera(t,s){if(null==s||!t.cameraTrackingEnabled)return 0;const i=U([s.longitude,s.latitude]);return null==i?0:Math.round(i.hours+i.minutes/60+i.seconds/3600)}get directShadowsEnabled(){return this._lighting?.directShadowsEnabled??!1}set directShadowsEnabled(t){const s=this._lighting;s&&(s.directShadowsEnabled=t)}get sunLightingEnabled(){return"sun"===this._lightingType}set sunLightingEnabled(t){const s=this._environment;if(t===this._get("sunLightingEnabled")||null==s)return;const i=s.lighting,e=this._oldLighting;this._oldLighting=i;const o={directShadowsEnabled:i.directShadowsEnabled,cameraTrackingEnabled:i.cameraTrackingEnabled},r=t?"sun":"virtual";let n;n=null!=e&&e.type===r?e:t?new b:new S,n.set(o),s.lighting=n,t||(this.stopPlaying(),this.timeSliderViewModel.timezonePickerOpen=!1)}set playingState(t){this.playingState!==t&&(this._set("playingState",t),"none"!==t&&this.sunLightingEnabled&&(this._updateSunriseAndSunset(),this._lastTime=Date.now(),this._play(),this._enableDirectShadowsIfFirstInteraction()))}get dayPlaying(){return"day"===this.playingState}set dayPlaying(t){t?this.playingState="day":this.dayPlaying&&(this.playingState="none")}get yearPlaying(){return"year"===this.playingState}set yearPlaying(t){t?this.playingState="year":this.yearPlaying&&(this.playingState="none")}get currentSeason(){return t=this.localDate,s=this._currentHemisphere,L(function(t){const s=t.getTime(),i=P(t,"spring",_.NORTHERN).getTime(),e=P(t,"summer",_.NORTHERN).getTime(),o=P(t,"fall",_.NORTHERN).getTime(),r=P(t,"winter",_.NORTHERN).getTime();return s>=i&&s<e?"spring":s>=e&&s<o?"summer":s>=o&&s<r?"fall":"winter"}(t),s);var t,s}set currentSeason(t){this.stopPlaying();const s=L(t,this._currentHemisphere);this.localDate=P(this.localDate,s,_.NORTHERN)}get _currentHemisphere(){const t=this.view?.camera?.position?.latitude;return null==t||t>=0?_.NORTHERN:_.SOUTHERN}get _environment(){return this.view?.environment}get _lighting(){return this._environment?.lighting}get _lightingType(){return this._lighting?.type}get _lightingDateDisplay(){return d(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset,"hours")}set _lightingDateDisplay(t){const s=this._lighting;if(null==s||!this.sunLightingEnabled||"virtual"===s.type||!j(t))return;const i=I(s),e=d(t,-this._cachedDisplayUTCOffset,"hours");e.getTime()!==i.getTime()&&(s.date=e,this._updateLighting())}stopPlaying(){this.playingState="none"}toggleDayPlaying(){this.dayPlaying=!this.dayPlaying}toggleYearPlaying(){this.yearPlaying=!this.yearPlaying}toggleSunLightingEnabled(){this.stopPlaying(),this.sunLightingEnabled=!this.sunLightingEnabled}toggleDirectShadowsEnabled(){this.stopPlaying(),this.directShadowsEnabled=!this.directShadowsEnabled}_enableDirectShadowsIfFirstInteraction(){this._firstInteraction&&(this._firstInteraction=!1,this.directShadowsEnabled=!0)}_updateLighting(t){const s=Date.now();this._lastLightingUpdate=s;const{view:i}=this,e=this._lighting;if(null==i||null==e||"virtual"===e.type)return;t??=I(e);const o=e.displayUTCOffset,r=null!==o?o:this._timezoneFromCamera(e,i.camera?.position);this._cachedLightingDateUTC.getTime()!==t.getTime()&&(this._cachedLightingDateUTC=new Date(t.getTime())),this._cachedDisplayUTCOffset!==r&&(this._cachedDisplayUTCOffset=r)}_timezoneWillChange(t){const s=this._lighting;if(null==s||"virtual"===s.type||!s.cameraTrackingEnabled)return;let i;if(t)i=t.timezoneOffset;else{if(null!=s.displayUTCOffset)return;i=b.calculateTimezoneOffset(s.positionTimezoneInfo)}s.displayUTCOffset=i,this._scheduleLightingUpdate()}_scheduleLightingUpdate(t){if(t&&(this._lightingUpdateHandle=o(this._lightingUpdateHandle),!j(t)))return;if(this._lightingUpdateHandle)return;const s=Date.now()-this._lastLightingUpdate,e=this.lightingUpdateInterval-s;let r=null;const n=()=>{this._updateLighting(t),this._lightingUpdateHandle===r&&(this._lightingUpdateHandle=null)};if(e<=0)this._lightingUpdateHandle=r=a(n);else{const t=setTimeout(n,e);this._lightingUpdateHandle=r=i((()=>clearTimeout(t)))}}_cancelLightingUpdate(){this._lightingUpdateHandle=o(this._lightingUpdateHandle)}_play(){const t=this._lighting;if(null==t||!this.sunLightingEnabled||"virtual"===t.type)return;const s=I(t);if(this.dayPlaying||this.yearPlaying){const i=Date.now()-(this._lastTime??0);if(this.dayPlaying){this._lastTime=Date.now();const e=function(t,s,i){const e=12e5,o=3e5,r=18e5,n=2e5;if(null==t||null==s||isNaN(t.getTime())&&isNaN(s.getTime()))return o;const p=i.getTime(),m=t.getTime(),l=s.getTime(),a=m-36e5,u=m+36e5,c=l-48e5,h=l+24e5;let j=o;return p>=a&&p<=u?j=p-a<=e?r-(p-a)/e*16e5:u-p<=6e5?o-(u-p)/e*2*1e5:n:p>=c&&p<=h?j=p-c<=6e5?o-(p-c)/e*2*1e5:h-p<=e?r-(h-p)/e*16e5:n:(p<m||p>l)&&(j=r),j}(this._sunrise,this._sunset,s)*this.playSpeedMultiplier/100*i;if(e>0){let i=new Date(s.getTime()+e);const o=t.displayUTCOffset??0;if(((i.getUTCHours()+o)%24+24)%24<((s.getUTCHours()+o)%24+24)%24){const t=864e5;i=new Date(s.getTime()+e-t)}t.date=i}}else if(i>1e3){this._lastTime=Date.now();const i=(s.getUTCMonth()+1)%12,e=new Date(s.getTime());e.setUTCMonth(i),t.date=e}requestAnimationFrame((()=>this._play()))}}_updateSunriseAndSunset(){const t=this._lighting;if(null==t||"virtual"===t.type||!this.sunLightingEnabled)return;const s=this.view?.camera?.position;if(null==s)return;const{latitude:i,longitude:e}=s,{date:o,displayUTCOffset:r}=t,n=D(o,i,e,r??0);n&&(this._sunrise=new Date(n.sunrise),this._sunset=new Date(n.sunset))}};function I(t){return j(t.date)||(e.getLogger(E).warn("Invalid date. Reverting to the current date/time."),t.date=new Date),t.date}t([y({type:f})],V.prototype,"view",void 0),t([y({type:v,nonNullable:!0})],V.prototype,"datePickerViewModel",void 0),t([y({type:O,nonNullable:!0})],V.prototype,"timeSliderViewModel",void 0),t([y()],V.prototype,"isSupported",null),t([y()],V.prototype,"lightingUpdateInterval",void 0),t([y()],V.prototype,"utcOffset",null),t([y()],V.prototype,"localDate",null),t([y()],V.prototype,"timeSliderPosition",null),t([y()],V.prototype,"directShadowsEnabled",null),t([y()],V.prototype,"sunLightingEnabled",null),t([y({type:["none","day","year"],value:"none"})],V.prototype,"playingState",null),t([y()],V.prototype,"dayPlaying",null),t([y()],V.prototype,"yearPlaying",null),t([y()],V.prototype,"playSpeedMultiplier",void 0),t([y()],V.prototype,"currentSeason",null),t([y()],V.prototype,"_lastTime",void 0),t([y()],V.prototype,"_sunrise",void 0),t([y()],V.prototype,"_sunset",void 0),t([y()],V.prototype,"_cachedLightingDateUTC",void 0),t([y()],V.prototype,"_cachedDisplayUTCOffset",void 0),t([y()],V.prototype,"_firstInteraction",void 0),t([y()],V.prototype,"_currentHemisphere",null),t([y()],V.prototype,"_environment",null),t([y()],V.prototype,"_lighting",null),t([y()],V.prototype,"_lightingType",null),t([y()],V.prototype,"_lightingDateDisplay",null),V=t([k(E)],V);const R=V;export{O as S,R as default,C as o};
