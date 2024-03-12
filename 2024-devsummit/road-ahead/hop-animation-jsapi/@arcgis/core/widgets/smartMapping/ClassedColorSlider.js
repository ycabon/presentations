/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import r from"../../renderers/support/ClassBreakInfo.js";import{SmartMappingSliderBase as i}from"./SmartMappingSliderBase.js";import e from"./ClassedColorSlider/ClassedColorSliderViewModel.js";import{g as p}from"../../chunks/globalCss.js";import{l as m}from"../../chunks/legacyIcon.js";import"../../chunks/widgetUtils.js";import{m as l}from"../../chunks/messageBundle.js";import{t as n}from"../../chunks/jsxFactory.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/commonProperties.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../Histogram.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../Slider/SliderViewModel.js";import"./support/utils.js";import"../../renderers/support/utils.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/utils9.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"./SmartMappingSliderViewModel.js";var a;const j="esri-classed-color-slider",c={base:j,widgetIcon:m.edit,rampElement:`${j}__ramp`,sliderContainer:`${j}__slider-container`,histogramContainer:`${j}__histogram-container`,track:`${j}--interactive-track`};let u=a=class extends i{constructor(s,o){super(s,o),this.messages=null,this.viewModel=new e,this._bgFillId=`${this.id}-bg-fill`,this._rampFillId=`${this.id}-linear-gradient`}get breaks(){return this.viewModel.breaks}set breaks(s){this.viewModel.breaks=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}static fromRendererResult(s,o){const{renderer:{classBreakInfos:t}}=s,r=t.map((s=>{const o=s.symbol.color;return{min:s.minValue,max:s.maxValue,color:o}}));return new a({breaks:r,histogramConfig:{bins:o?o.bins:[]}})}updateClassBreakInfos(s){const o=this.breaks;if(o.length===s.length)return s.map(((s,t)=>{const i=s.symbol;return i.color=o[t].color,new r({minValue:o[t].min,maxValue:o[t].max,symbol:i})}));console.error(`Number of input breakInfos must match number of slider breaks: ${o.length}`)}updateFromRendererResult(s,o){const{renderer:{classBreakInfos:t}}=s,r=t.map((s=>{const o=s.symbol.color;return{min:s.minValue,max:s.maxValue,color:o}}));this.set({breaks:r}),o?.bins&&(this.histogramConfig.bins=o.bins)}render(){const{state:s,label:o,visibleElements:t}=this,r="disabled"===s,i=this.classes(c.base,p.widget,p.panel,{[p.disabled]:r,[c.track]:!!t.interactiveTrack});return n("div",{"aria-label":o,class:i},r?null:this.renderContent(this._renderRamp(),c.sliderContainer,c.histogramContainer))}_renderRamp(){const{_bgFillId:s,_rampFillId:o,viewModel:t}=this,r=t.getStopInfo();return n("div",{class:c.rampElement},n("svg",{xmlns:"http://www.w3.org/2000/svg"},n("defs",null,this.renderRampFillDefinition(o,r),this.renderBackgroundFillDefinition(s)),n("rect",{fill:`url(#${s})`,height:"100%",width:"100%",x:"0",y:"0"}),n("rect",{fill:`url(#${o})`,height:"100%",width:"100%",x:"0",y:"0"})))}};s([o()],u.prototype,"breaks",null),s([o()],u.prototype,"label",null),s([o(),l("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")],u.prototype,"messages",void 0),s([o()],u.prototype,"viewModel",void 0),u=a=s([t("esri.widgets.smartMapping.ClassedColorSlider")],u);const h=u;export{h as default};
