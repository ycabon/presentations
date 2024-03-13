/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import t from"../Color.js";import{J as s}from"../chunks/jsonMap.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{t as i}from"../chunks/screenUtils.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import{VisualVariablesMixin as l}from"./mixins/VisualVariablesMixin.js";import n from"./support/AuthoringInfo.js";import{L as a}from"../chunks/LegendOptions.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/ensureType.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"./visualVariables/ColorVariable.js";import"./visualVariables/VisualVariable.js";import"./visualVariables/support/ColorStop.js";import"./visualVariables/OpacityVariable.js";import"./visualVariables/support/OpacityStop.js";import"../chunks/opacityUtils.js";import"./visualVariables/RotationVariable.js";import"./visualVariables/SizeVariable.js";import"./visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"./support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";var j;const u=new s({flow_from:"flow-from",flow_to:"flow-to"});let c=j=class extends(l(r)){constructor(o){super(o),this.density=.8,this.color=new t([255,255,255,1]),this.maxPathLength=200,this.trailWidth=1.5,this.flowSpeed=10,this.trailLength=100,this.smoothing=0,this.flowRepresentation="flow-from",this.type="flow",this.authoringInfo=null,this.legendOptions=null,this.trailCap="butt",this.background="none"}clone(){const{density:o,maxPathLength:t,trailWidth:s,flowSpeed:r,trailLength:i,smoothing:p,flowRepresentation:e,trailCap:m,background:l}=this,n=this.color.clone(),a=(this.visualVariables||[]).map((o=>o.clone())),u=this.authoringInfo?.clone(),c=this.legendOptions?.clone();return new j({density:o,color:n,maxPathLength:t,trailWidth:s,flowSpeed:r,trailLength:i,trailCap:m,background:l,smoothing:p,flowRepresentation:e,visualVariables:a,authoringInfo:u,legendOptions:c})}getSymbol(o,t){}async getSymbolAsync(o,t){}getSymbols(){return[]}};o([p({type:Number,json:{write:!0}})],c.prototype,"density",void 0),o([p({type:t,json:{write:{allowNull:!0}}})],c.prototype,"color",void 0),o([p({type:Number,cast:i,json:{write:!0}})],c.prototype,"maxPathLength",void 0),o([p({type:Number,cast:i,json:{write:!0}})],c.prototype,"trailWidth",void 0),o([p({type:Number,json:{write:!0}})],c.prototype,"flowSpeed",void 0),o([p({type:Number,json:{write:!0}})],c.prototype,"trailLength",void 0),o([p({type:Number,cast:i,json:{write:!1}})],c.prototype,"smoothing",void 0),o([p({type:u.apiValues,json:{type:u.jsonValues,read:{reader:u.read},write:{writer:u.write}}})],c.prototype,"flowRepresentation",void 0),o([e({flowRenderer:"flow"})],c.prototype,"type",void 0),o([p({type:n,json:{write:!0}})],c.prototype,"authoringInfo",void 0),o([p({type:a,json:{write:!0}})],c.prototype,"legendOptions",void 0),o([p({type:String,json:{write:!0}})],c.prototype,"trailCap",void 0),o([p({type:String,json:{write:!0}})],c.prototype,"background",void 0),c=j=o([m("esri.renderers.FlowRenderer")],c);const y=c;export{y as default};