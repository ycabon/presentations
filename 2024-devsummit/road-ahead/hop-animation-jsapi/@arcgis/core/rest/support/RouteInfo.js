/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../Graphic.js";import s from"../../PopupTemplate.js";import{symbolTypes as o}from"../../symbols.js";import{ClonableMixin as i}from"../../core/Clonable.js";import{JSONSupport as l}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{r as a}from"../../chunks/reader.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import p from"../../geometry/Polyline.js";import{a as m,g as u,t as b,f as d}from"../../chunks/utils12.js";import{w as y}from"../../chunks/writer.js";import{i as c}from"../../chunks/networkEnums.js";import j from"./TravelMode.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";let T=class extends l{constructor(t){super(t),this.accumulateAttributes=null,this.directionsLanguage=null,this.findBestSequence=null,this.preserveFirstStop=null,this.preserveLastStop=null,this.startTimeIsUTC=null,this.timeWindowsAreUTC=null,this.travelMode=null}readAccumulateAttributes(t){return null==t?null:t.map((t=>c.fromJSON(t)))}writeAccumulateAttributes(t,e,s){t?.length&&(e[s]=t.map((t=>c.toJSON(t))))}};t([r({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],T.prototype,"accumulateAttributes",void 0),t([a("accumulateAttributes")],T.prototype,"readAccumulateAttributes",null),t([y("accumulateAttributes")],T.prototype,"writeAccumulateAttributes",null),t([r({type:String,json:{write:!0}})],T.prototype,"directionsLanguage",void 0),t([r({type:Boolean,json:{write:!0}})],T.prototype,"findBestSequence",void 0),t([r({type:Boolean,json:{write:!0}})],T.prototype,"preserveFirstStop",void 0),t([r({type:Boolean,json:{write:!0}})],T.prototype,"preserveLastStop",void 0),t([r({type:Boolean,json:{write:!0}})],T.prototype,"startTimeIsUTC",void 0),t([r({type:Boolean,json:{write:!0}})],T.prototype,"timeWindowsAreUTC",void 0),t([r({type:j,json:{write:!0}})],T.prototype,"travelMode",void 0),T=t([n("esri.layers.support.RouteSettings")],T);const h=T;var f;let S=f=class extends(i(l)){constructor(t){super(t),this.analysisSettings=null,this.endTime=null,this.endTimeOffset=null,this.firstStopId=null,this.geometry=null,this.lastStopId=null,this.messages=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.startTime=null,this.startTimeOffset=null,this.stopCount=null,this.symbol=null,this.totalCosts=null,this.totalDistance=null,this.totalDuration=null,this.totalLateDuration=null,this.totalViolations=null,this.totalWait=null,this.totalWaitDuration=null,this.type="route-info",this.version="1.0.0"}readEndTime(t,e){return null!=e.attributes.EndTimeUTC?new Date(e.attributes.EndTimeUTC):null}readEndTimeOffset(t,e){return m(e.attributes.EndTime,e.attributes.EndTimeUTC)}readStartTime(t,e){return null!=e.attributes.StartTimeUTC?new Date(e.attributes.StartTimeUTC):null}readStartTimeOffset(t,e){return m(e.attributes.StartTime,e.attributes.StartTimeUTC)}readTotalCosts(t,e){return u(e.attributes,"Total_")}readTotalViolations(t,e){return u(e.attributes,"TotalViolation_")}readTotalWait(t,e){return u(e.attributes,"TotalWait_")}static fromGraphic(t){return new f({analysisSettings:null!=t.attributes.AnalysisSettings?h.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:null!=t.attributes.EndTime?new Date(t.attributes.EndTime):null,endTimeOffset:t.attributes.EndUTCOffset??null,geometry:t.geometry,messages:null!=t.attributes.Messages?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,startTime:null!=t.attributes.StartTime?new Date(t.attributes.StartTime):null,startTimeOffset:t.attributes.StartUTCOffset??null,symbol:t.symbol,totalCosts:null!=t.attributes.TotalCosts?b(JSON.parse(t.attributes.TotalCosts)):null,totalDistance:t.attributes.TotalMeters??null,totalDuration:t.attributes.TotalMinutes??null,totalLateDuration:t.attributes.TotalLateMinutes??null,totalWaitDuration:t.attributes.TotalWaitMinutes??null,version:t.attributes.Version})}toGraphic(){const t={ObjectID:this.objectId,AnalysisSettings:null!=this.analysisSettings?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:null!=this.endTime?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:null!=this.messages?JSON.stringify(this.messages):null,RouteName:this.name,StartTime:null!=this.startTime?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:null!=this.totalCosts?JSON.stringify(d(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:this.version};return new e({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};S.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"EndUTCOffset",alias:"End Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"Messages",alias:"Analysis Messages",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:1024,editable:!0,nullable:!0,visible:!0,domain:null},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"StartUTCOffset",alias:"Start Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Version",alias:"Version",type:"esriFieldTypeString",length:16,editable:!0,nullable:!0,visible:!0,domain:null}],S.popupInfo={title:"Route Details",fieldInfos:[{fieldName:"RouteName",label:"Route Name",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"TotalMinutes",label:"Total Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalMeters",label:"Total Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalLateMinutes",label:"Total Late Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalWaitMinutes",label:"Total Wait Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TotalCosts",label:"Total Costs",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"StartTime",label:"Start Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"StartUTCOffset",label:"Start Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"EndTime",label:"End Time",isEditable:!1,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"EndUTCOffset",label:"End Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Messages",label:"Analysis Messages",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"AnalysisSettings",isEditable:!1,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"Version",label:"Version",isEditable:!1,tooltip:"",visible:!0,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([r()],S.prototype,"analysisSettings",void 0),t([r()],S.prototype,"endTime",void 0),t([a("endTime",["attributes.EndTimeUTC"])],S.prototype,"readEndTime",null),t([r()],S.prototype,"endTimeOffset",void 0),t([a("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],S.prototype,"readEndTimeOffset",null),t([r({json:{read:{source:"attributes.FirstStopID"}}})],S.prototype,"firstStopId",void 0),t([r({type:p})],S.prototype,"geometry",void 0),t([r({json:{read:{source:"attributes.LastStopID"}}})],S.prototype,"lastStopId",void 0),t([r()],S.prototype,"messages",void 0),t([r({json:{read:{source:"attributes.Name"}}})],S.prototype,"name",void 0),t([r({json:{read:{source:"attributes.ObjectID"}}})],S.prototype,"objectId",void 0),t([r({type:s})],S.prototype,"popupTemplate",void 0),t([r()],S.prototype,"startTime",void 0),t([a("startTime",["attributes.StartTimeUTC"])],S.prototype,"readStartTime",null),t([r()],S.prototype,"startTimeOffset",void 0),t([a("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],S.prototype,"readStartTimeOffset",null),t([r({json:{read:{source:"attributes.StopCount"}}})],S.prototype,"stopCount",void 0),t([r({types:o})],S.prototype,"symbol",void 0),t([r()],S.prototype,"totalCosts",void 0),t([a("totalCosts",["attributes"])],S.prototype,"readTotalCosts",null),t([r()],S.prototype,"totalDistance",void 0),t([r()],S.prototype,"totalDuration",void 0),t([r()],S.prototype,"totalLateDuration",void 0),t([r()],S.prototype,"totalViolations",void 0),t([a("totalViolations",["attributes"])],S.prototype,"readTotalViolations",null),t([r()],S.prototype,"totalWait",void 0),t([a("totalWait",["attributes"])],S.prototype,"readTotalWait",null),t([r()],S.prototype,"totalWaitDuration",void 0),t([r({readOnly:!0,json:{read:!1}})],S.prototype,"type",void 0),t([r()],S.prototype,"version",void 0),S=f=t([n("esri.rest.support.RouteInfo")],S);const g=S;export{h as R,g as default};
