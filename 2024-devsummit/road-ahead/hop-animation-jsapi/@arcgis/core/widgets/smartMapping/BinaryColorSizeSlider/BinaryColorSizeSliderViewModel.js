/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import r from"../SizeSlider/SizeSliderViewModel.js";import"../../../chunks/ensureType.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/tracking.js";import"../SmartMappingPrimaryHandleSliderViewModel.js";import"../SmartMappingSliderViewModel.js";import"../../Slider/SliderViewModel.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../support/utils.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/date.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/timeZoneUtils.js";import"../../../chunks/datetime.js";import"../../../intl.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/assets.js";import"../../../renderers/support/utils.js";import"../../../layers/support/fieldUtils.js";import"../../../core/sql.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/numberUtils.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../chunks/utils2.js";import"../../../chunks/basemapUtils.js";import"../../../Basemap.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/collectionUtils.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../portal/Portal.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalItem.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/persistableUrlUtils.js";import"../../../support/BasemapStyle.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils2.js";import"../../../chunks/utils3.js";import"../../../chunks/screenUtils.js";import"../../../chunks/mat4.js";import"../../../chunks/utils9.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../chunks/enumeration.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils4.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils5.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/Symbol3D.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../core/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../core/reactiveUtils.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../chunks/jsonUtils.js";import"../../../chunks/parser.js";import"../../../chunks/_commonjsHelpers.js";import"../../../symbols/support/cimSymbolUtils.js";import"../../../chunks/utils6.js";import"../../../chunks/LRUCache.js";import"../../../chunks/MemCache.js";import"../../../renderers/support/HeatmapColorStop.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";let i=class extends r{constructor(s){super(s),this.primaryHandleEnabled=!0}getGradientStopInfo(s,o){if(!this.stops?.length)return[];const{min:t,max:r,stops:i}=this,p=[o,o,o,s,s],e=[],m=r-t;return i.forEach(((s,o)=>{const t=p[o],l=(r-s.value)/m,n=0===o?l:(r-i[o-1].value)/m;e.push({offset:n,color:t},{offset:l,color:t})})),e}};s([o({readOnly:!0})],i.prototype,"primaryHandleEnabled",void 0),i=s([t("esri.widgets.smartMapping.SizeSlider.BinaryColorSizeSliderViewModel")],i);const p=i;export{p as default};
