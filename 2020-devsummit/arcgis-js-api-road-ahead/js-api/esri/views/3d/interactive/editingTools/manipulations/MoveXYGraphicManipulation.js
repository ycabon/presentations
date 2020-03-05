// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/extendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/Handles ../../../../../core/maybe ../manipulatorDragUtils ./Manipulation ./moveUtils ../../../../interactive/GraphicManipulator".split(" "),function(d,e,r,g,t,u,v,l,m,f,n,p,q){Object.defineProperty(e,"__esModule",{value:!0});d=function(d){function c(a){var b=
d.call(this)||this;b._handles=new l;b._view=a.view;b._tool=a.tool;b._graphicState=a.graphicState;b._createManipulator();b.forEachManipulator(function(a){return b._tool.manipulators.add(a)});return b}g(c,d);c.prototype.destroy=function(){var a=this;this._handles.destroy();this.forEachManipulator(function(b){a._tool.manipulators.remove(b);b.destroy()});this._graphicState=this._manipulator=this._view=this._tool=null};c.prototype.forEachManipulator=function(a){a(this._manipulator,1)};c.prototype.createGraphicDragPipeline=
function(a){var b=this;return p.createGraphicMoveDragPipeline(this._graphicState,a,function(a){return b.createDragPipeline(a)})};c.prototype.createDragPipeline=function(a){var b=this._view,c=this._graphicState.graphic,d=m.isSome(c.geometry)?c.geometry.spatialReference:null;return f.createManipulatorDragEventPipeline(this._manipulator,function(e,h,g,k){h=h.next(f.screenToMapXYForGraphic(k,b,c,d)).next(f.addMapDelta()).next(f.addScreenDelta());a(e,h,g,k)})};c.prototype._createManipulator=function(){this._manipulator=
new q.GraphicManipulator({graphic:this._graphicState.graphic,view:this._view,selectable:!0,cursor:"move"})};return c}(n.Manipulation);e.MoveXYGraphicManipulation=d});