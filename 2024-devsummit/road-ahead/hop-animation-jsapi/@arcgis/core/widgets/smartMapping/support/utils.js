/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import s from"../../../Color.js";import{f as o}from"../../../chunks/date.js";import{formatNumber as t}from"../../../intl.js";import{timelineDateFormatOptions as r}from"../../../renderers/support/utils.js";import i from"../../../renderers/visualVariables/SizeVariable.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/ensureType.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/handleUtils.js";import"../../../chunks/timeZoneUtils.js";import"../../../chunks/datetime.js";import"../../../chunks/messages.js";import"../../../core/Error.js";import"../../../core/promiseUtils.js";import"../../../chunks/maybe.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/tslib.es6.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/tracking.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../chunks/assets.js";import"../../../layers/support/fieldUtils.js";import"../../../core/sql.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/numberUtils.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../chunks/utils2.js";import"../../../chunks/basemapUtils.js";import"../../../Basemap.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/collectionUtils.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../portal/Portal.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalItem.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/persistableUrlUtils.js";import"../../../support/BasemapStyle.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils2.js";import"../../../chunks/utils3.js";import"../../../chunks/screenUtils.js";import"../../../chunks/mat4.js";import"../../../chunks/utils9.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../chunks/enumeration.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils4.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils5.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/Symbol3D.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../core/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../core/reactiveUtils.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../chunks/jsonUtils.js";import"../../../chunks/parser.js";import"../../../chunks/_commonjsHelpers.js";import"../../../symbols/support/cimSymbolUtils.js";import"../../../chunks/utils6.js";import"../../../chunks/LRUCache.js";import"../../../chunks/MemCache.js";import"../../../renderers/support/HeatmapColorStop.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";function p(s){return o(new Date(s),r)}function e(s){const o=Math.floor(Math.log10(Math.abs(s)))+1,r=o<4||o>6?4:o,i=Math.abs(s)>=1e6?"compact":"standard";return t(s,{notation:i,minimumSignificantDigits:2,maximumSignificantDigits:r})}function m(s,o,t){if(null==o||null==s)return[];const r=[];for(let i=-1*t;i<=t;i++)0!==i&&r.push(o+i*s);return r}function n(s){const{max:o,min:t,padding:r,pathHeight:i,pathWidth:p,stops:e}=s,m=o-t;let n,l=`M0 0 L${p} 0 `;const a=3===e.length?[e[0],e[1],e[2]]:[e[0],e[2],e[4]],u=Math.min.apply(Math,a.map((s=>s.size))),j=Math.max(Math.abs(a[0].size-a[1].size),Math.abs(a[2].size-a[1].size));return a.reverse(),a.forEach((({size:s,value:o},e)=>{const a=Math.round((s-u)/j*100)/100,c=Math.round(i-(o-t)/m*i);n=a*p,0===n&&(n=r*p),0===e&&(l+=`L${n} 0 `),l+=`L${n} ${c} `})),l+=`L${n} ${i} L0 ${i} L0 0 Z`,l}function l(s){const{bottomValue:o,bottomWidth:t,max:r,min:i,pathHeight:p,pathWidth:e,topValue:m,topWidth:n}=s,l=n*e,a=t*e,u=r-i,j=Math.round(p-(o-i)/u*p);return`M${l} 0 L${l} ${Math.round(p-(m-i)/u*p)} L${a} ${j} L${a} ${p} L0 ${p} L0 0 Z`}function a(s){let o=s.maxSize,t=s.minSize;return o instanceof i&&(o=o.stops[0].size),t instanceof i&&(t=t.stops[0].size),[o,t]}function u(s,o,t){const r=t.length-1;if(r<0)return[];const i=t[0],p=t[r]-i,e=o-s,m=[];for(let o=1;o<r;o++){const r=(t[o]-i)/p*e+s;m.push({index:o,value:r})}return m.unshift({index:0,value:s}),m.push({index:r,value:o}),m}function j(o){return o instanceof s?o.toCss(!0):s.fromString(o??"").toCss(!0)}export{p as formatDateLabel,e as formatNumberLabel,m as getDeviationValues,n as getDynamicPathForSizeStops,j as getFillFromColor,l as getPathForSizeStops,a as getSizesFromVariable,u as getStopChanges};
