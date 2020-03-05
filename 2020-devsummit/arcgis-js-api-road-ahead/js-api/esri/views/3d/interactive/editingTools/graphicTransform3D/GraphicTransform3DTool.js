// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/math/common ../../../../../support/elevationInfoUtils ../../manipulatorUtils ../manipulatorUtils ../visualElementUtils ./GraphicScaleRotateTransform ../manipulations/config ../manipulations/MoveManipulation ../../../layers/graphics/GraphicState ../../../../interactive/InteractiveToolBase".split(" "),
function(f,g,d,l,z,A,m,n,p,e,c,q,r,t,h,u,v,w,k,x,y){Object.defineProperty(g,"__esModule",{value:!0});f=function(f){function b(a){a=f.call(this,a)||this;a.enableZ=!0;a.enableRotation=!0;a.enableScaling=!0;a.type="transform-3d";a.handles=new n;a.scaleRotate=null;return a}l(b,f);b.prototype.initialize=function(){var a=this;this.graphicState=new x.GraphicState({graphic:this.graphic});this.moveManipulation=new k.MoveManipulation({tool:this,view:this.view,snapToScene:this.snapToScene,xyAvailable:!0,xyAxisAvailable:!0,
zAvailable:this.enableZ&&h.canMoveZ(this.graphic),radius:k.MoveManipulation.radiusForSymbol(this.graphic.symbol)});this.moveManipulation.forEachManipulator(function(b){return a.handles.add(b.events.on("immediate-click",function(a){return a.stopPropagation()}))});this.moveManipulation.elevationInfo=r.getGraphicEffectiveElevationInfo(this.graphic);this.moveManipulation.createGraphicDragPipeline(this.graphicState,function(b){var c={graphic:b.graphic,dxScreen:b.dxScreen,dyScreen:b.dyScreen};switch(b.action){case "start":a.emit("graphic-translate-start",
c);break;case "update":a.emit("graphic-translate",c);break;case "end":a.emit("graphic-translate-stop",c)}});this.moveManipulation.angle=this.symbolRotationAngle;if(this.enableScaling||this.enableRotation)this.scaleRotate=new v.GraphicScaleRotateTransform({tool:this,mode:this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate"}),this.handles.add(this.scaleRotate.events.on("scale-changed",function(){return a.onScaleChanged()}));this.handles.add([u.createVisualElements({view:this.view,
graphic:this.graphic,forEachManipulator:function(b){return a.forEachManipulator(b)},onManipulatorsChanged:function(){return p.makeHandle()}}),this.graphic.watch("symbol",function(){return a.updateMoveAngle()}),this.graphicState.on("changed",function(){return a.onGeometryChanged()}),this.hideManipulatorsForGraphicState(),this.view.watch("scale",function(){return a.updateMoveAngle()})]);this.handles.add(this.view.trackGraphicState(this.graphicState));this.onGeometryChanged()};b.prototype.forEachManipulator=
function(a){this.moveManipulation.forEachManipulator(a);e.isSome(this.scaleRotate)&&this.scaleRotate.forEachManipulator(a)};b.prototype.hideManipulatorsForGraphicState=function(){var a=this;return this.graphicState.watch("displaying",function(b){a.forEachManipulator(function(a){return a.available=b});a.moveManipulation.zManipulation.available=b&&a.enableZ&&h.canMoveZ(a.graphic)})};b.prototype.destroy=function(){this.handles.destroy();this.moveManipulation.destroy();e.isSome(this.scaleRotate)&&(this.scaleRotate.destroy(),
this.scaleRotate=null);this._set("view",null);this._set("graphic",null)};Object.defineProperty(b.prototype,"snapToScene",{set:function(a){this.moveManipulation&&(this.moveManipulation.snapToScene=a);this._set("snapToScene",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"symbolRotationAngle",{get:function(){var a=this.graphic.symbol;return a?(a=a.symbolLayers.find(function(a){return"object"===a.type}),q.toRadian(-(a&&a.heading||0))):0},enumerable:!0,configurable:!0});b.prototype.reset=
function(){};b.prototype.onDetach=function(){e.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()};b.prototype.onHide=function(){e.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()};b.prototype.onScaleChanged=function(){if(!e.isNone(this.scaleRotate)){var a=this.scaleRotate.getScale();this.moveManipulation.displayScale=a}};b.prototype.updateMoveAngle=function(){this.moveManipulation.angle="local"===this.view.viewingMode||this.view.scale<w.ALIGN_ARROWS_SCALE_THRESHOLD?
this.symbolRotationAngle:0};b.prototype.onGeometryChanged=function(){t.placeAtGraphic(this.view,this.moveManipulation,this.graphic)};Object.defineProperty(b.prototype,"test",{get:function(){return{discManipulator:this.moveManipulation.xyManipulation.test.discManipulator,ringManipulator:e.isSome(this.scaleRotate)?this.scaleRotate.test.ringManipulator:null,arrowManipulators:this.moveManipulation.xyAxisManipulation.test.arrowManipulators}},enumerable:!0,configurable:!0});d([c.property({constructOnly:!0,
nonNullable:!0})],b.prototype,"view",void 0);d([c.property({constructOnly:!0,nonNullable:!0})],b.prototype,"graphic",void 0);d([c.property({constructOnly:!0,nonNullable:!0})],b.prototype,"enableZ",void 0);d([c.property()],b.prototype,"enableRotation",void 0);d([c.property()],b.prototype,"enableScaling",void 0);d([c.property({value:!1})],b.prototype,"snapToScene",null);d([c.property({readOnly:!0})],b.prototype,"type",void 0);return b=d([c.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransform3DTool")],
b)}(c.declared(m.EventedMixin(y.InteractiveToolBase)));g.GraphicTransform3DTool=f});