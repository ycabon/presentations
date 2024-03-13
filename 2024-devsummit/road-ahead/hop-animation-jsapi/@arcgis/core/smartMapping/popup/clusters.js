/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import s from"../../PopupTemplate.js";import t from"../../core/Error.js";import{f as o}from"../../chunks/messages.js";import{substitute as r}from"../../intl.js";import{numericTypes as e}from"../../layers/support/fieldUtils.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/content/FieldsContent.js";import"../../popup/content/MediaContent.js";import"../../popup/content/RelationshipContent.js";import i from"../../popup/content/TextContent.js";import p from"../../popup/ExpressionInfo.js";import n from"../../popup/FieldInfo.js";import m from"../../popup/support/FieldInfoFormat.js";import{a as l,b as a}from"../../chunks/utils15.js";import{a as u,b as c,g as j,c as y}from"../../chunks/clusterUtils2.js";import{i as h}from"../../chunks/clusterUtils.js";import"../../chunks/tslib.es6.js";import"../../core/Clonable.js";import"../../core/Accessor.js";import"../../core/lang.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../popup/content.js";import"../../popup/ElementExpressionInfo.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../core/sql.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../renderers/support/utils.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/utils9.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils6.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/utils13.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../chunks/fieldType.js";import"../../rest/support/StatisticDefinition.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/utils10.js";import"../../chunks/timeUtils.js";import"../../chunks/quantizationUtils.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/utils11.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/MD5.js";import"../../layers/support/AggregateField.js";import"../../layers/support/ExpressionInfo.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";function d(s){const{fieldName:t,label:o,type:r}=s,i=null!=r&&e.includes(r),p=new n({fieldName:t,label:o,visible:!0,format:i?{places:"integer"===r||"small-integer"===r?0:2,digitSeparator:!0}:null});return"date"===r&&(p.format=new m({dateFormat:"short-date-short-time"})),p}function b(s,t){const o=s?t.getField(s):null;return null!=o?o.alias||o.name:void 0}function f(s,t,o){const{attributeInfo:e,statisticType:i}=t,{field:p,normalizationField:n}=e;let m,l="";if("avg"===i?m=n?o.clusters.avgNormFieldLabel:o.clusters.avgFieldLabel:"type"===i&&(m=o.clusters.predominantFieldLabel),m){const t=e.valueExpression?e.valueExpressionTitle:b(p,s),o=n&&b(n,s);l=r(m,{fieldLabel:t||"",normFieldLabel:o||""})}return l}function k(s,t,o,e){const{attributeInfo:i,statisticType:p}=t,{field:n,normalizationField:m}=i;let l,a="";if("avg"===p?l=m?e.clusters.avgNormFieldSummary:e.clusters.avgFieldSummary:"type"===p&&(l=e.clusters.predominantFieldSummary),l){const t=i.valueExpression?i.valueExpressionTitle:b(n,s),e=m&&b(m,s);a=r(l,{fieldLabel:t||"",normFieldLabel:e||"",fieldValue:"{"+o+"}"})}return a}function S(s){return{fieldInfo:d({fieldName:y,label:s.clusters.numFeatures,type:"integer"}),fieldSummary:new i({text:r(s.clusters.countSummary,{count:`{${y}}`})})}}async function g(s){const{layer:o,renderer:r}=s;await o.load();const e=r||o.renderer;if(!h(e))throw new t("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:o,renderer:e}}async function I(t){const[{renderer:r,layer:e},n]=await Promise.all([g(t),o("esri/smartMapping/t9n/smartMapping")]),m=await async function(s,t,o){if(!h(t))return null;const r=u(s,t),e=o.clusters.predominantNoneValue,n="unique-value"===t.type?t.uniqueValueInfos??[]:[],{fieldInfo:m,fieldSummary:l}=S(o),a=[l],y=[m],b=[];for(const t of r){const{statisticType:r,attributeInfo:m}=t,l=c(m,r),u=f(s,t,o);if("avg"===r)a.push(new i({text:k(s,t,l,o)})),y.push(d({fieldName:l,label:u,type:"double"}));else if("type"===r){const r=`expression/${l}`;a.push(new i({text:k(s,t,r,o)})),b.push(new p({name:l,title:u,returnType:"string",expression:j(n,l,e)})),y.push(d({fieldName:r}))}}return{fieldInfos:y,expressionInfos:b,content:a}}(e,r,n);if(null==m)return null;const y={name:"clusters",title:n.clusters.templateTitle,value:new s({fieldInfos:m.fieldInfos,expressionInfos:m.expressionInfos,content:m.content,title:n.clusters.clusterPopupTitle})},b=[],I=e.featureReduction,U=I&&"renderer"in I?I.renderer:null;if("pie-chart"===U?.type){const t=await async function(s,t,o){if(!h(t))return null;const{fieldInfo:r,fieldSummary:e}=S(o),i=[e],p=[r],n=[],{fieldInfos:m,expressionInfos:u}=await l({renderer:t,layer:s,isFeatureReduction:!0}),c=await a(s,{fieldInfos:m,expressionInfos:u},!0);return i.push(...c),p.push(...m),n.push(...u),{fieldInfos:p,expressionInfos:n,content:i}}(e,U,n);null!=t&&b.push({name:"clusters-pie-chart",title:"clusters-pie-chart",value:new s({fieldInfos:t.fieldInfos,expressionInfos:t.expressionInfos,content:t.content,title:n.clusters.clusterPopupTitle})})}return{primaryTemplate:y,secondaryTemplates:b}}export{I as getTemplates};