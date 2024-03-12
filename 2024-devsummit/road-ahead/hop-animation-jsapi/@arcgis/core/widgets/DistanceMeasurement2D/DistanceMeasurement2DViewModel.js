/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{d as s}from"../../core/Accessor.js";import{L as e}from"../../chunks/Logger.js";import{watch as o,initial as i,whenOnce as r}from"../../core/reactiveUtils.js";import{l as n,D as p}from"../../chunks/unitUtils.js";import{property as m}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{project as l,load as c}from"../../geometry/projection.js";import{d as u}from"../../chunks/defaultUnit.js";import"../../geometry.js";import h from"../../Graphic.js";import"../../intl.js";import"../../symbols.js";import{e as j,m as d,B as y}from"../../chunks/colorUtils2.js";import{d as k}from"../../chunks/maybe.js";import{f as g,c as f,a as v}from"../../chunks/unitFormatUtils.js";import{geodesicLength as b,geodesicDensify as S,planarLength as w}from"../../geometry/geometryEngine.js";import{isSupported as _,geodesicLengths as D,geodesicDensify as L}from"../../geometry/support/geodesicUtils.js";import U from"../../layers/GraphicsLayer.js";import{V as M}from"../../chunks/ViewingMode.js";import C from"../../views/draw/Draw.js";import{I as T,c as x,s as I,d as P}from"../../chunks/InteractiveToolBase.js";import{G as A}from"../../chunks/GraphicManipulator.js";import{f as O}from"../../chunks/messages.js";import{o as R}from"../../chunks/locale.js";import E from"../../geometry/Point.js";import V from"../../symbols/CIMSymbol.js";import F from"../../symbols/TextSymbol.js";import G from"../../symbols/Font.js";import B from"../../symbols/SimpleMarkerSymbol.js";import z from"../../geometry/Polyline.js";import H from"../../geometry/SpatialReference.js";import{I as W}from"../../chunks/InteractiveToolViewModel.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/vec3f64.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/getDefaultUnitForView.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../chunks/date.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/ByteSizeUnit.js";import"../../chunks/Cyclical.js";import"../../chunks/quantityUtils.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/hydrated.js";import"../../chunks/GraphicsCollection.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../views/draw/MultipointDrawAction.js";import"../../views/draw/DrawAction.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums2.js";import"../../chunks/normalizedPoint.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/Settings.js";import"../../chunks/SnappingVisualizer.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/plane.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingContext.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/RenderState.js";import"../../chunks/DrawEvents.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../chunks/PropertiesPool.js";import"../../chunks/keybindings.js";import"../../chunks/screenUtils2.js";import"../../views/draw/PointDrawAction.js";import"../../chunks/DrawTool.js";import"../../chunks/drawSurfaces.js";import"../../chunks/diffUtils.js";import"../../chunks/UpdatingHandles.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../chunks/snappingUtils.js";import"../../chunks/sphere.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../views/interactive/sketch/SketchLabelOptions.js";import"../../chunks/SnappingDragPipelineStep.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/projectVectorToVector.js";import"../../chunks/projectPointToVector.js";import"../../chunks/angularMeasurementUtils.js";import"../../chunks/meshVertexSpaceUtils.js";import"../../geometry/support/MeshGeoreferencedVertexSpace.js";import"../../chunks/vec32.js";import"../../chunks/interfaces.js";import"../../chunks/drawUtils.js";import"../../chunks/interfaces2.js";import"../../views/draw/PolygonDrawAction.js";import"../../views/draw/PolylineDrawAction.js";import"../../views/draw/SegmentDrawAction.js";import"../../chunks/surfaceCoordinateSystems.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df64.js";import"../../chunks/quat.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/drapedUtils.js";const q=1e5;let N=class extends T{constructor(t){super(t),this._drawActive=!1,this._measurementLayer=new U({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new U({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=null,this.measurement=null,this.measurementLabel=null}initialize(){O("esri/core/t9n/Units").then((t=>{this.messages=t})),this.addHandles(R((async()=>{this.messages=await O("esri/core/t9n/Units")})));const t=this.view;this._draw=new C({view:t}),t.map.addMany([this._measurementLayer,this._manipulatorLayer]),t.focus(),this.addHandles([o((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updatePolylines()}),i),o((()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor]),(()=>{if(!this._vertices.length)return;const t=this._vertices.map((({coord:t})=>t));for(const{handle:t}of this._vertices)t.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(t)}))])}destroy(){const{map:t}=this.view;this._draw.view=null,this._draw=k(this._draw),t.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=k(this._measurementLayer),this._manipulatorLayer=k(this._manipulatorLayer),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(t){this._set("editable",t),t||this._draw.reset()}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}_resetVertices(){for(const{handle:t}of this._vertices)t.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const t=this._draw.create("polyline",{mode:"click"});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(t=>this._updateSketch(t.vertices))),t.on("draw-complete",(()=>{this._stopSketch()}))}_stopSketch(){this.manipulators.forEach((({manipulator:t})=>{t.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(t){const{spatialReference:s}=this.view;for(;this._vertices.length>t.length;){const{handle:t,manipulator:s}=this._vertices.pop();t.remove(),this.manipulators.remove(s)}for(let e=this._vertices.length;e<t.length;e++){const[o,i]=t[e],r=Q(new E({x:o,y:i,spatialReference:s}),this.view,this._manipulatorLayer);this.manipulators.add(r);const n=x(r,((t,s)=>{s.next(I(this.view)).next(P(t.graphic,M.Local)).next((()=>{const s=t.graphic.geometry;this._vertices[e].coord=[s.x,s.y],this._updatePolylines()}))}));this._vertices.push({manipulator:r,coord:[o,i],handle:n})}const e=this._vertices.length-1,o=this._vertices[e],[i,r]=t[e];o.coord[0]===i&&o.coord[1]===r||(o.coord=[i,r],o.manipulator.graphic.geometry=new E({x:i,y:r,spatialReference:s}));const n=this._drawActive?this._vertices[e].manipulator:null;this.manipulators.forEach((({manipulator:t})=>{t.interactive=null==n||t!==n})),this._updatePolylines()}_updatePolylines(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const t=this._vertices.map((({coord:t})=>t)),{measurement:s,drawing:e,original:o}=function(t,s,e){const o=new z({paths:[t],spatialReference:s});let i,r;if(s.isGeographic)if(_(s))i=D([o],"meters")[0],r=L(o,q);else{const t=l(o,H.WGS84),e=L(t,q);i=D([t],"meters")[0],r=l(e,s)}else if(s.isWebMercator)i=b(o,"meters"),r=S(o,q,"meters");else{const t=w(o,"meters");if(null!=e&&t>=e){const t=l(o,H.WGS84),e=L(t,q);i=D([t],"meters")[0],r=l(e,s)}else i=t,r=o}return{measurement:{geometry:r,length:i},original:o,drawing:r}}(t,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",s);const i=function(t,s,e){if(!s||!t)return"";switch(e){case"metric":return v(t,s.length,"meters");case"imperial":return f(t,s.length,"meters");default:return g(t,n(s.length,"meters",e),e)}}(this.messages,s,this.unit);let r,p;this._set("measurementLabel",i);const{graphics:m}=this._measurementLayer,a=2===m.length,{effectiveTheme:c}=this.view;a?(r=m.at(0),p=m.at(1)):(r=new h({symbol:new V({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:3.5,color:j(c.accentColor).toArray()},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:5,color:c.accentColor.toArray()}]}}})}),p=new h({symbol:new F({color:c.textColor,haloColor:d(j(c.textColor,y.Low),.5),haloSize:2,font:new G({size:14,family:"sans-serif"})})}),m.removeAll(),m.addMany([r,p])),r.geometry=e,p.geometry=o.extent?.center,p.symbol.text=i}};function Q(t,s,e){const o=d(s.effectiveTheme.accentColor,.5),i={type:"simple-line",width:0},r=new B({style:"circle",color:o,size:8,outline:i}),n=new B({style:"circle",color:o,size:12,outline:i}),p=new h({geometry:t,symbol:r});return new A({view:s,layer:e,graphic:p,focusedSymbol:n})}t([m()],N.prototype,"_drawActive",void 0),t([m({readOnly:!0})],N.prototype,"cursor",null),t([m({value:!0})],N.prototype,"editable",null),t([m({type:Number})],N.prototype,"geodesicDistanceThreshold",void 0),t([m({readOnly:!0})],N.prototype,"measurement",void 0),t([m({readOnly:!0})],N.prototype,"measurementLabel",void 0),t([m()],N.prototype,"messages",void 0),t([m()],N.prototype,"unit",void 0),t([m({constructOnly:!0})],N.prototype,"view",void 0),N=t([a("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],N);let J=class extends W{constructor(t){super(t),this.supportedViewType="2d",this.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([o((()=>this.view?.spatialReference),(()=>this.clear())),o((()=>this.unit),(t=>{null!=this.tool&&(this.tool.unit=t)}),i),o((()=>this.geodesicDistanceThreshold),(t=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=t)}),i)])}get geodesicDistanceThreshold(){return s(e.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(t){s(e.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0}),this._set("geodesicDistanceThreshold",t)}get measurement(){return null!=this.tool?this.tool.measurement:null}get measurementLabel(){return null!=this.tool?this.tool.measurementLabel:null}get state(){return this.disabled||null==this.view||(t=this.view?.spatialReference,null==t)?"disabled":null!=this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready";var t}get unit(){return this._validateUnit(this.defaultUnit)}set unit(t){this._overrideIfSome("unit",this._validateUnit(t))}get unitOptions(){return p}set unitOptions(t){this._overrideIfSome("unitOptions",this._validateUnits(t))}async start(){const t=this.view;null!=t&&(await r((()=>t.ready)),function(t){if(!t)return!1;const{isGeographic:s,isWebMercator:e,isWGS84:o}=t;return s&&!o&&!_(t)||!s&&!e}(t.spatialReference)&&await c()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new N({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(t){const{unitOptions:s,defaultUnit:e}=this;return null!=t&&s.includes(t)?t:s.includes(e)?e:s.length>0?s[0]:e}_validateUnits(t){if(null==t)return[];const s=t.filter((t=>p.includes(t)));return 0===s.length?p.slice():s}};t([m(u)],J.prototype,"defaultUnit",void 0),t([m()],J.prototype,"geodesicDistanceThreshold",null),t([m({readOnly:!0})],J.prototype,"measurement",null),t([m({readOnly:!0})],J.prototype,"measurementLabel",null),t([m({readOnly:!0})],J.prototype,"state",null),t([m({type:String})],J.prototype,"unit",null),t([m({type:[String]})],J.prototype,"unitOptions",null),J=t([a("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],J);const Z=J;export{Z as default};
