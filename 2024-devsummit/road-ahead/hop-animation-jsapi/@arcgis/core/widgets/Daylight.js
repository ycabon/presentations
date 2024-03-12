/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{L as t}from"../chunks/Logger.js";import{watch as e,syncAndInitial as o,when as i,sync as r}from"../core/reactiveUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import l,{l as m}from"./Widget.js";import{l as a}from"../chunks/legacyIcon.js";import c,{S as u,o as h}from"./Daylight/DaylightViewModel.js";import j from"../core/Accessor.js";import d from"./Slider.js";import{T as k}from"../chunks/TimezonePicker.js";import{o as y}from"../chunks/widgetUtils.js";import{t as g,a as b}from"../chunks/jsxFactory.js";import v from"./support/DatePicker.js";import{g as w}from"../chunks/globalCss.js";import{H as S}from"../chunks/Heading.js";import{m as f}from"../chunks/messageBundle.js";import"../config.js";import"../chunks/asyncUtils.js";import"../chunks/maybe.js";import"../core/promiseUtils.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../core/Collection.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/timeUtils.js";import"../views/SceneView.js";import"../Camera.js";import"../CameraLayout.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/support/webMercatorUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Viewpoint.js";import"../chunks/screenUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/GraphicsCollection.js";import"../Graphic.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../geometry/HeightModelInfo.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/projectBoundingRect.js";import"../chunks/projectPointToVector.js";import"../chunks/boundedPlane.js";import"../chunks/plane.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/vec4f64.js";import"../chunks/mathUtils2.js";import"../chunks/mat4.js";import"../chunks/lineSegment.js";import"../chunks/RenderCoordsHelper.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/projectVectorToPoint.js";import"../chunks/projectVectorToVector.js";import"../chunks/dehydratedPoint.js";import"../chunks/sphere.js";import"../chunks/vec4.js";import"../chunks/ElevationProvider.js";import"../chunks/ViewingMode.js";import"../chunks/scaleUtils.js";import"../chunks/layerUtils2.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"../chunks/loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"../chunks/writeUtils.js";import"../Ground.js";import"../chunks/compilerUtils.js";import"../chunks/CollectionFlattener.js";import"../chunks/editableLayers.js";import"../chunks/infoFor3D.js";import"../chunks/basemapUtils.js";import"../chunks/utils3.js";import"../chunks/collectionUtils2.js";import"../support/LayersMixin.js";import"../layers/Layer.js";import"../support/TablesMixin.js";import"../TimeExtent.js";import"../chunks/UpdatingHandles.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../chunks/ReactiveMap.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../views/Theme.js";import"../chunks/InputManager.js";import"../chunks/PropertiesPool.js";import"../core/signal.js";import"../chunks/ViewEvents.js";import"../chunks/IViewEvents.js";import"../chunks/interfaces2.js";import"../chunks/screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../chunks/heightModelInfoUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/projectionUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"../views/GroundView.js";import"../chunks/cameraUtils.js";import"../chunks/Intersector2.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/orientedBoundingBox.js";import"../chunks/quat.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/Attribute.js";import"../chunks/earthUtils.js";import"../chunks/spatialReferenceSupport.js";import"../layers/support/ElevationSampler.js";import"../chunks/TerrainConst.js";import"../chunks/TilingScheme.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"../chunks/TileKey.js";import"../views/PopupView.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"../chunks/weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../chunks/lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"../chunks/projectPointToWGS84ComparableLonLat.js";import"../chunks/projectVectorToWGS84ComparableLonLat.js";import"../chunks/colorUtils2.js";import"../chunks/vec2.js";import"../chunks/IntegerPassUniform.js";import"../chunks/interfaces5.js";import"../chunks/VertexAttribute.js";import"../chunks/StencilUtils.js";import"../chunks/basicInterfaces.js";import"../chunks/BindType.js";import"../chunks/ShaderTechniqueConfiguration.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/debugFlags2.js";import"../chunks/Material.js";import"../chunks/ContentObject.js";import"../chunks/Util.js";import"../chunks/requestImageUtils.js";import"../chunks/enums.js";import"../chunks/Texture.js";import"../chunks/RenderGeometry.js";import"../views/3d/webgl/ManagedFBO.js";import"../chunks/axisAngleDegrees.js";import"../chunks/RenderState.js";import"../chunks/RenderPlugin.js";import"../chunks/NestedMap.js";import"../chunks/Camera.js";import"../chunks/frustum.js";import"../chunks/Geometry.js";import"../chunks/Indices.js";import"../chunks/triangle.js";import"../chunks/RibbonLineMaterial.js";import"../chunks/Octree.js";import"../chunks/InterleavedLayout.js";import"../chunks/BufferView.js";import"../chunks/types.js";import"../chunks/OrderIndependentTransparency.js";import"../chunks/floatRGBA.js";import"../chunks/VertexArrayObject2.js";import"../chunks/VertexArrayObject.js";import"../chunks/Intersector.js";import"../chunks/glUtil.js";import"../chunks/VertexElementDescriptor.js";import"../chunks/MemCache.js";import"../chunks/BufferObject.js";import"../chunks/Scheduler.js";import"../chunks/debugFlags.js";import"../chunks/EllipsoidMode.js";import"../chunks/hydratedFeatures.js";import"../chunks/labelUtils.js";import"../chunks/ElevationUpdateEvent.js";import"../chunks/ElevationContext.js";import"../chunks/unitConversionUtils.js";import"../chunks/graphicUtils.js";import"../chunks/vec2f32.js";import"../chunks/DefaultBufferWriter.js";import"../chunks/HUDMaterial.js";import"../chunks/VerticalOffset.glsl.js";import"../chunks/GLTextureMaterial.js";import"../chunks/OutputHighlight.glsl.js";import"../chunks/dehydratedFeatures.js";import"../chunks/quantizationUtils.js";import"../chunks/featureConversionUtils.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/OptimizedGeometry.js";import"../chunks/edgeUtils.js";import"../chunks/earcut.js";import"../chunks/_commonjsHelpers.js";import"../chunks/DoubleArray.js";import"../chunks/vec32.js";import"../chunks/SnappingCandidate.js";import"../chunks/visualVariableUtils.js";import"../chunks/sizeVariableUtils.js";import"../chunks/triangulationUtils.js";import"../chunks/deduplicate.js";import"../chunks/Normals.js";import"../chunks/objectResourceUtils.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/DefaultMaterial_COLOR_GAMMA.js";import"../chunks/Version.js";import"../chunks/resourceUtils3.js";import"../chunks/symbolColorUtils.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/CIMSymbolHelper.js";import"../chunks/BidiEngine.js";import"../chunks/fontUtils.js";import"../chunks/GeometryUtils.js";import"../chunks/enums2.js";import"../chunks/utils6.js";import"../chunks/definitions.js";import"../chunks/HighlightOptions.js";import"../chunks/shapingUtils.js";import"../chunks/mat2d.js";import"../chunks/mat2df32.js";import"../chunks/Rect.js";import"../chunks/BoundingBox.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/OverrideHelper.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils9.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/LRUCache.js";import"../chunks/GeometryUtil.js";import"../chunks/vec3f32.js";import"../chunks/line.js";import"../chunks/line2.js";import"../chunks/lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"../chunks/imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../chunks/meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../chunks/georeference.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"../chunks/interfaces.js";import"../chunks/DefaultLayouts.js";import"../chunks/styleUtils.js";import"../chunks/webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"../chunks/Intersector4.js";import"../chunks/ColorMaterial.js";import"../chunks/TriangleMaterial.js";import"../chunks/FramebufferObject.js";import"../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import"../chunks/WebGLRequirements.js";import"../chunks/capabilities.js";import"../chunks/ray.js";import"../chunks/viewpointUtils.js";import"../chunks/ZoomMomentumEstimator.js";import"../chunks/FeatureTileDescriptor3D.js";import"../chunks/hitTest.js";import"../chunks/LayerConstants.js";import"../chunks/intersectorUtilsConversions.js";import"../chunks/Intersector3.js";import"../chunks/ElevationRange.js";import"../chunks/geometryServiceUtils.js";import"../chunks/project.js";import"../chunks/utils7.js";import"../chunks/utils8.js";import"../rest/support/ProjectParameters.js";import"../chunks/hitTestSelectUtils.js";import"../chunks/terrainUtils.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../chunks/ByteSizeUnit.js";import"../chunks/LayerViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../chunks/layerContainerType.js";import"../chunks/ElevationQueryTileCache.js";import"../chunks/LercDecoder.js";import"../chunks/WorkerHandle.js";import"../chunks/RenderableTile.js";import"../chunks/mat3f32.js";import"../chunks/enums3.js";import"../chunks/TileStrategy.js";import"../chunks/TileKey2.js";import"../chunks/QueueProcessor.js";import"../chunks/config.js";import"../chunks/TiledDisplayObject.js";import"../chunks/DisplayObject.js";import"../chunks/ElevationSamplerData.js";import"../chunks/rasterUtils.js";import"../views/2d/ViewState.js";import"../chunks/mat2df64.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/StyleDefinition.js";import"../chunks/resources.js";import"../chunks/edgeProcessing.js";import"../chunks/EdgeWorkerHandle.js";import"../chunks/workerHelper.js";import"../chunks/testSVGPremultipliedAlpha.js";import"../chunks/RenderingContext.js";import"../chunks/ProgramCache.js";import"../chunks/Program.js";import"../chunks/layerViewUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../chunks/themeUtils.js";import"./Attribution.js";import"./Attribution/AttributionViewModel.js";import"../chunks/accessibleHandler.js";import"./Compass.js";import"./Compass/CompassViewModel.js";import"../chunks/utils18.js";import"./support/GoTo.js";import"./NavigationToggle.js";import"./NavigationToggle/NavigationToggleViewModel.js";import"./Zoom.js";import"./Zoom/ZoomViewModel.js";import"./Slider/SliderViewModel.js";import"./support/DatePickerViewModel.js";import"./support/DateTimeElementViewModel.js";import"../chunks/timeWidgetUtils.js";import"../chunks/Popover.js";const C="esri-daylight",M=`${C}__container`,P="esri-slider",_={base:C,widgetIcon:a.environmentSettings,datePickerCalendarToggle:"esri-date-picker__calendar-toggle",dayContainer:`${M} ${C}__day-container`,dateContainer:`${M} ${C}__date-container`,containerDisabled:`${M}--disabled`,slider:P,sliderShadowOff:`${P}--shadow-off`,sliderShadowOn:`${P}--shadow-on`,sliderAmPmOn:`${P}--ampm-on`,sliderDateOff:`${P}--date-off`,sliderDateOn:`${P}--date-on`,playPauseButton:`${C}__play-pause-button`,seasonPicker:`${C}__season-picker`,panelError:`${C}__panel--error`,sunLightingCheckbox:`${C}__sun-lighting-checkbox`,shadowsCheckbox:`${C}__shadows-checkbox`};let U=class extends j{constructor(s){super(s),this.header=!0,this.playButtons=!0,this.datePicker=!0,this.timezone=!0,this.sunLightingToggle=!0,this.shadowsToggle=!0}};s([n({type:Boolean,nonNullable:!0})],U.prototype,"header",void 0),s([n({type:Boolean,nonNullable:!0})],U.prototype,"playButtons",void 0),s([n({type:Boolean,nonNullable:!0})],U.prototype,"datePicker",void 0),s([n({type:Boolean,nonNullable:!0})],U.prototype,"timezone",void 0),s([n({type:Boolean,nonNullable:!0})],U.prototype,"sunLightingToggle",void 0),s([n({type:Boolean,nonNullable:!0})],U.prototype,"shadowsToggle",void 0),U=s([p("esri.widgets.Daylight.VisibleElements")],U);const T=U,D="esri-slider-with-dropdown",L=`${D}__box`,x=`${D}__box--drop-down-on`,O=`${D}__box--drop-down-off`;let V=class extends d{constructor(s,t){super(s,t),this.viewModel=new u,this.showDropDown=!0,this._labelWidth=0,this._onLabelAfterCreate=s=>{const t="label-size-observer";this.removeHandles(t),this.addHandles(y(s,(({contentRect:s})=>{this._labelWidth=s.width})),t)},this._getLabelStyles=()=>{if(!this.trackElement)return;const s=this._trackWidth,t=this._labelWidth/2,e=this.getCurrentPosition(),o=e-t,i=e+t;let r=-t;return o<0?r+=-o:i>s&&(r+=s-i),{left:`${r}px`}},this._onTimezoneChange=s=>{this.viewModel.utcOffset=s},this._onTimezonePickerOpen=()=>{this.viewModel.timezonePickerOpen=!0},this._onTimezonePickerClose=()=>{this.viewModel.timezonePickerOpen=!1}}renderThumbLabel(s){const{showDropDown:t,viewModel:e}=this;return g("div",{afterCreate:this._onLabelAfterCreate,class:this.classes({[L]:!0,"esri-slider__label":!0,[x]:t,[O]:!t}),key:"thumb-label",styles:this._getLabelStyles()},super.renderThumbLabel(s),t?g(k,{open:e.timezonePickerOpen,value:e.utcOffset,onChange:this._onTimezoneChange,onClose:this._onTimezonePickerClose,onOpen:this._onTimezonePickerOpen}):null)}};s([n()],V.prototype,"viewModel",void 0),s([n()],V.prototype,"showDropDown",void 0),s([n()],V.prototype,"_labelWidth",void 0),V=s([p("esri.widgets.Daylight.support.SliderWithDropdown")],V);const I=V,E=/(.*)\s(.*)/,B="date",R="esri.widgets.Daylight";let A=class extends l{constructor(s,t){super(s,t),this.headingLevel=3,this.iconClass=_.widgetIcon,this.icon=null,this.viewModel=new c,this.visibleElements=new T,this.dateOrSeason=B,this._timeSlider=new I({viewModel:this.viewModel.timeSliderViewModel,steps:this.timeSliderSteps,labelInputsEnabled:!1,visibleElements:{labels:!0},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:this._onPrimaryTickCreated.bind(this)},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:this._onSecondaryTickCreated.bind(this)}]}),this._datePicker=new v({viewModel:this.viewModel.datePickerViewModel,commitOnMonthChange:!0}),this._onPlayDayClick=()=>{this.viewModel.toggleDayPlaying()},this._onYearPlayClick=()=>{this.viewModel.toggleYearPlaying()},this._onSeasonChange=s=>{this.viewModel.currentSeason=s.target.value},this._onSunLightingCheckboxChange=()=>{this.viewModel.toggleSunLightingEnabled()},this._onShadowCheckboxChange=()=>{this.viewModel.toggleDirectShadowsEnabled()}}get label(){return this.messages?.title??""}set label(s){this._overrideIfSome("label",s)}get playSpeedMultiplier(){return this.viewModel.playSpeedMultiplier}set playSpeedMultiplier(s){this.viewModel.playSpeedMultiplier=s}get timeSliderSteps(){return this._timeSlider?.steps??5}set timeSliderSteps(s){this._timeSlider.steps=s}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}get test(){return{datePicker:this._datePicker}}get _useAmPm(){const s=this._timeSlider.viewModel.getLabelForValue(0,"tick");return null!=s&&E.test(s)}postInitialize(){this.viewModel.isSupported&&this.addHandles([e((()=>this.viewModel.datePickerViewModel),(s=>this._datePicker.viewModel=s),o),e((()=>this.viewModel.timeSliderViewModel),(s=>this._timeSlider.viewModel=s),o),e((()=>this.visibleElements?.timezone),(s=>this._timeSlider.showDropDown=s),o),e((()=>!this.viewModel.sunLightingEnabled),(s=>{this._datePicker.disabled=s,this._timeSlider.disabled=s}),o),i((()=>!this.visible),(()=>this._datePicker?.close(!1)),r)])}destroy(){this._datePicker.destroy(),this._timeSlider.destroy()}render(){const{messages:s,viewModel:t,visibleElements:e}=this,o=t.isSupported;return g("div",{class:this.classes(_.base,w.widget)},o?g(b,null,e.header?g(S,{level:this.headingLevel},s.title):null,this._renderTimeOptions(),e.datePicker?this._renderDateOrSeason():null,e.sunLightingToggle?this._renderSunLightingToggle():null,e.shadowsToggle?this._renderShadowsToggle():null):g("div",{class:_.panelError,key:"unsupported"},g("p",null,s.unsupported)))}loadDependencies(){return m({button:()=>import("../chunks/calcite-button.js"),checkbox:()=>import("../chunks/calcite-checkbox.js"),label:()=>import("../chunks/calcite-label.js"),option:()=>import("../chunks/calcite-option.js"),select:()=>import("../chunks/calcite-select.js")})}_renderTimeOptions(){const{viewModel:s,visibleElements:t,messages:e}=this,{directShadowsEnabled:o,dayPlaying:i}=s,r=!s.sunLightingEnabled;return g("div",{class:this.classes(_.dayContainer,{[_.sliderShadowOn]:o,[_.sliderShadowOff]:!o,[_.sliderDateOn]:t.datePicker,[_.sliderDateOff]:!t.datePicker,[_.sliderAmPmOn]:this._useAmPm,[_.containerDisabled]:r}),key:"daylight-time-options"},this._timeSlider.render(),t.playButtons?this._renderPlayPauseButton({playing:i,disabled:r,label:e.playDay,onClick:this._onPlayDayClick}):null)}_renderDateOptions(){const{viewModel:s,visibleElements:t,messages:e}=this,{yearPlaying:o}=s,i=!s.sunLightingEnabled;return g("div",{class:this.classes(_.dateContainer,i&&_.containerDisabled),key:"daylight-date"},this._datePicker.render(),t.playButtons?this._renderPlayPauseButton({playing:o,disabled:i,label:e.playYear,onClick:this._onYearPlayClick}):null)}_renderPlayPauseButton({playing:s,disabled:t,label:e,onClick:o}){return g("calcite-button",{appearance:"solid",class:_.playPauseButton,disabled:t,iconStart:s?"pause-f":"play-f",label:e,onclick:o,round:!0,title:e,type:"button"})}_renderSeasonSelect(){const{messages:s,viewModel:t}=this,e=!t.sunLightingEnabled;return g("calcite-select",{class:this.classes(_.seasonPicker),disabled:e,label:s.season,onCalciteSelectChange:this._onSeasonChange},h.map((e=>g("calcite-option",{selected:t.currentSeason===e,value:e},s[e]))))}_renderDateOrSeason(){return"date"===this.dateOrSeason?this._renderDateOptions():this._renderSeasonSelect()}_renderSunLightingToggle(){const s=this.messages?.sunLightingToggle;return g("calcite-label",{key:"date-time-toggle",layout:"inline",scale:"s",title:s?.tooltip},g("calcite-checkbox",{checked:this.viewModel.sunLightingEnabled,class:_.sunLightingCheckbox,onCalciteCheckboxChange:this._onSunLightingCheckboxChange}),s?.label)}_renderShadowsToggle(){const s=this.messages.shadowsToggle;return g("calcite-label",{key:"shadow-toggle",layout:"inline",scale:"s",title:s?.tooltip},g("calcite-checkbox",{checked:this.viewModel.directShadowsEnabled,class:_.shadowsCheckbox,onCalciteCheckboxChange:this._onShadowCheckboxChange}),s.label)}_onPrimaryTickCreated(s,t,e){t.classList.add(...F,w.primaryTick),e.classList.add(...F,w.primaryTickLabel),e.onclick=t.onclick=this._makeGoToTime(s);const o=e.textContent,i=null!=o&&E.exec(o);i&&(e.innerHTML=`${i[1]}<br><div class=${w.primaryTickAmPm}>${i[2]}</div>`)}_onSecondaryTickCreated(s,t){t.classList.add(...F,w.secondaryTick),t.onclick=this._makeGoToTime(s)}_makeGoToTime(s){return()=>{this.viewModel.timeSliderPosition=s}}};s([n(),f("esri/widgets/Daylight/t9n/Daylight")],A.prototype,"messages",void 0),s([n(),f("esri/widgets/support/t9n/timezone")],A.prototype,"timezoneMessages",void 0),s([n()],A.prototype,"headingLevel",void 0),s([n()],A.prototype,"iconClass",void 0),s([n()],A.prototype,"icon",void 0),s([n()],A.prototype,"label",null),s([n()],A.prototype,"playSpeedMultiplier",null),s([n()],A.prototype,"timeSliderSteps",null),s([n()],A.prototype,"view",null),s([n({type:c})],A.prototype,"viewModel",void 0),s([n({type:T,nonNullable:!0})],A.prototype,"visibleElements",void 0),s([n({cast:s=>"season"===s||"date"===s?s:(t.getLogger(R).warn(`"${s}" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "${B}".`),B)})],A.prototype,"dateOrSeason",void 0),s([n()],A.prototype,"_timeSlider",void 0),s([n()],A.prototype,"_useAmPm",null),s([n()],A.prototype,"_datePicker",void 0),A=s([p(R)],A);const F=[w.interactive,w.anchor],z=A;export{z as default};
