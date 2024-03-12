/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{ignoreAbortErrors as o,debounce as s,isAbortError as r}from"../../core/promiseUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import p from"../support/GeolocationPositioning.js";import"../../chunks/handleUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/geolocationUtils.js";import"../../chunks/project.js";import"../../chunks/utils7.js";import"../../chunks/utils8.js";import"../../rest/support/ProjectParameters.js";import"../support/GoTo.js";let m=class extends p{constructor(t){super(t),this._watchId=void 0,this._trackStartingTimeoutId=void 0,this._settingPosition=null,this._trackController=null,this.error=void 0,this.positionFilterFunction=null}destroy(){this._stopTracking()}get state(){return this._geolocationUsable?this.view&&!this.view.ready?"disabled":this._settingPosition||void 0!==this._trackStartingTimeoutId?"waiting":this.tracking?"tracking":null!=this.error?"error":"ready":"feature-unsupported"}get tracking(){return void 0!==this._watchId}start(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._startTracking()}stop(){"disabled"!==this.state&&"feature-unsupported"!==this.state&&this._stopTracking()}_stopWatchingPosition(){void 0!==this._watchId&&(navigator.geolocation.clearWatch(this._watchId),this._watchId=void 0)}_stopTracking(){this._abortTrack(),this._clearWaitingTimer(),this._stopWatchingPosition(),this._clearGraphic()}_startTracking(){this._stopTracking();const t=s((async t=>{this._abortTrack();const o=new AbortController;this._trackController=o;const{timestamp:s,coords:i}=t,e={timestamp:s,coords:{...i}};this.error=void 0;try{if("function"==typeof this.positionFilterFunction&&!this.positionFilterFunction.call(null,{position:e}))return;if(await this.updatePosition(t,o),this._trackController!==o)return;this._clearWaitingTimer(),this._addGraphic(),this.emit("track",{position:t}),this._trackController=null}catch(t){if(r(t))return;throw this._trackController=null,this._emitError(t),this._clearWaitingTimer(),t}}),0);this._watchId=navigator.geolocation.watchPosition((s=>{this._settingPosition=t(s).catch(o)}),this._handleWatchPositionError.bind(this),this.geolocationOptions??void 0),this._trackStartingTimeoutId=setTimeout((()=>{this._trackStartingTimeoutId=void 0}),15e3)}_handleWatchPositionError(t){t.code===t.PERMISSION_DENIED&&this._stopTracking(),this._emitError(t)}_abortTrack(){this._trackController?.abort(),this._trackController=null}_clearWaitingTimer(){clearTimeout(this._trackStartingTimeoutId),this._trackStartingTimeoutId=void 0,this._settingPosition=null}_emitError(t){this.error=t,this.emit("track-error",{error:t})}};t([i()],m.prototype,"_watchId",void 0),t([i()],m.prototype,"_trackStartingTimeoutId",void 0),t([i()],m.prototype,"_settingPosition",void 0),t([i()],m.prototype,"error",void 0),t([i()],m.prototype,"positionFilterFunction",void 0),t([i({readOnly:!0})],m.prototype,"state",null),t([i({readOnly:!0})],m.prototype,"tracking",null),t([i()],m.prototype,"start",null),t([i()],m.prototype,"stop",null),m=t([e("esri.widgets.Track.TrackViewModel")],m);const n=m;export{n as default};
