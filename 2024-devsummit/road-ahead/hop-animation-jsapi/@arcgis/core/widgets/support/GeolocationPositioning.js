/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../Graphic.js";import s from"../../core/Accessor.js";import e from"../../core/Error.js";import i from"../../core/Evented.js";import{throwIfAborted as r,isAbortError as p}from"../../core/promiseUtils.js";import{watch as n,initial as m}from"../../core/reactiveUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import c from"../../symbols/CIMSymbol.js";import{s as y,p as u}from"../../chunks/geolocationUtils.js";import{GoToMixin as j}from"./GoTo.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/project.js";import"../../chunks/utils7.js";import"../../chunks/utils8.js";import"../../rest/support/ProjectParameters.js";const h={type:"CIMPictureMarker",primitiveName:"headingOverride",enable:!0,anchorPoint:{x:0,y:-.5},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:36,billboardMode3D:"FaceNearPlane",invertBackfaceTexture:!0,scaleX:1,textureFilter:"Picture",url:"data:image/png;base64,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"},d=new c({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:14,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[8.5,0],[7.02,.13],[5.59,.51],[4.25,1.14],[3.04,1.99],[1.99,3.04],[1.14,4.25],[.51,5.59],[.13,7.02],[0,8.5],[.13,9.98],[.51,11.41],[1.14,12.75],[1.99,13.96],[3.04,15.01],[4.25,15.86],[5.59,16.49],[7.02,16.87],[8.5,17],[9.98,16.87],[11.41,16.49],[12.75,15.86],[13.96,15.01],[15.01,13.96],[15.86,12.75],[16.49,11.41],[16.87,9.98],[17,8.5],[16.87,7.02],[16.49,5.59],[15.86,4.25],[15.01,3.04],[13.96,1.99],[12.75,1.14],[11.41,.51],[9.98,.13],[8.5,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Round",joinStyle:"Round",lineStyle3D:"Strip",miterLimit:10,width:2,color:[255,255,255,255]},{type:"CIMSolidFill",enable:!0,color:[0,122,194,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",dominantSizeAxis3D:"Y",size:16,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[8.5,0],[7.02,.13],[5.59,.51],[4.25,1.14],[3.04,1.99],[1.99,3.04],[1.14,4.25],[.51,5.59],[.13,7.02],[0,8.5],[.13,9.98],[.51,11.41],[1.14,12.75],[1.99,13.96],[3.04,15.01],[4.25,15.86],[5.59,16.49],[7.02,16.87],[8.5,17],[9.98,16.87],[11.41,16.49],[12.75,15.86],[13.96,15.01],[15.01,13.96],[15.86,12.75],[16.49,11.41],[16.87,9.98],[17,8.5],[16.87,7.02],[16.49,5.59],[15.86,4.25],[15.01,3.04],[13.96,1.99],[12.75,1.14],[11.41,.51],[9.98,.13],[8.5,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Round",joinStyle:"Round",lineStyle3D:"Strip",miterLimit:10,width:0,color:[255,255,255,255]},{type:"CIMSolidFill",enable:!0,color:[0,0,0,66]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,offsetX:0,offsetY:-1},h],angleAlignment:"Map"},primitiveOverrides:[{type:"CIMPrimitiveOverride",primitiveName:"headingOverride",propertyName:"Rotation",valueExpressionInfo:{type:"CIMExpressionInfo",title:"Rotation override",expression:"360 - $feature.heading",returnType:"Default"}},{type:"CIMPrimitiveOverride",primitiveName:"headingOverride",propertyName:"TintColor",valueExpressionInfo:{type:"CIMExpressionInfo",title:"TintColor override",expression:"IIF(IsEmpty($feature.heading), [255, 255, 255, 0], [255, 255, 255, 1])",returnType:"Default"}}]}});let b=class extends(j(i.EventedMixin(s))){constructor(){super(...arguments),this._geolocationUsable=!0,this.geolocationOptions=null,this.goToLocationEnabled=!0,this.graphic=new t({symbol:d}),this.scale=null,this.rotationEnabled=!0,this.view=null}initialize(){y()||(this._geolocationUsable=!1),this.addHandles([n((()=>this.view?.type),(()=>this._handleViewTypeChange()),m)])}destroy(){this._clearGraphic(),this.view=null}_clearGraphic(){const{view:o,graphic:t}=this;o&&t&&o.graphics.remove(t)}_addGraphic(){const{view:o,graphic:t}=this;o?.graphics&&t&&!o.graphics.includes(t)&&o.graphics.push(t)}_handleViewTypeChange(){h.enable="2d"===this.view?.type}_getScaleWithinConstraints(o,t){if(!t)return o;if("2d"===t.type){const{effectiveMaxScale:s,effectiveMinScale:e}=t.constraints;return Math.min(e,Math.max(s,o))}return o}_getScale(o){const{scale:t}=this,s="number"==typeof t?t:2500;return this._getScaleWithinConstraints(s,o)}_getHeading(o,t){const s=t?.spatialReference,e=s?.isWebMercator||s?.isGeographic,i=o.coords?.heading;return!e||"number"!=typeof i||isNaN(i)||i<0||i>360?null:i}_addHeading(o){const{heading:t,target:s,view:e}=o;e&&null!==t&&("3d"!==e.type?"2d"===e.type&&(s.rotation=360-t):s.heading=t)}async _animatePoint(o,t,s,e){const{view:i}=this;if(!this.goToLocationEnabled||!i)return;const p={target:o,scale:t};this.rotationEnabled&&this._addHeading({heading:s,target:p,view:i});const n={signal:e.signal};r(n),await this.callGoTo({target:p,options:n})}async updatePosition(o,t){try{const s=this.view,e=await u({position:o,view:s},{signal:t.signal}),{graphic:i}=this,{timestamp:r,coords:p}=o,{accuracy:n,altitude:m,altitudeAccuracy:a,latitude:l,longitude:c,speed:y}=p,j=this._getHeading(o,s),h={timestamp:r,accuracy:n,altitude:m,altitudeAccuracy:a,heading:j,latitude:l,longitude:c,speed:y};i&&(i.geometry=e,i.attributes=h);const d=this._getScale(s);await this._animatePoint(e,d,j,t)}catch(o){if(!p(o))throw new e("geolocation-positioning:invalid-point","Cannot position invalid point",{error:o})}return o}};o([a()],b.prototype,"_geolocationUsable",void 0),o([a()],b.prototype,"geolocationOptions",void 0),o([a()],b.prototype,"goToLocationEnabled",void 0),o([a({type:t,nonNullable:!0})],b.prototype,"graphic",void 0),o([a()],b.prototype,"scale",void 0),o([a()],b.prototype,"rotationEnabled",void 0),o([a()],b.prototype,"view",void 0),b=o([l("esri.widgets.support.GeolocationPositioning")],b);const g=b;export{g as default};