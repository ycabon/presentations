// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./DrawAction ./input/DrawEvents ./input/Keys ./support/createUtils ../input/InputManager".split(" "),function(t,u,n,k,p,e,f,g,q,l,h,r,d){return function(m){function c(a){a=m.call(this,a)||this;a._isDragging=!1;a._panEnabled=!1;a._cursorScreenPoint=null;a._viewHandles=new p;a._cursorVertexAdded=!1;a._activePointerId=
null;a.mode="freehand";a.vertices=[];a.view=null;a.viewAlignedCoordinateSystem=null;return a}n(c,m);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};c.prototype.complete=function(){this._completeDrawing()};c.prototype._addViewHandles=function(){this._removeViewHandles();"click"===this.mode?this._viewHandles.add(this._getClickModeViewHandles()):this._viewHandles.add(this._getDragModeViewHandles())};
c.prototype._getDragModeViewHandles=function(){var a=this;return[this.view.on("click",function(b){b.stopPropagation();if(b.mapPoint&&!a._panEnabled){var c=a.getCoordsFromScreenPoint(b.screenPoint);e.isSome(c)&&(a._set("vertices",[c]),a._drawCompleteHandler(b))}},d.ViewEventPriorities.TOOL),this.view.on("pointer-down",function(b){a._shouldHandlePointerEvent(b)&&!a._panEnabled&&(a._cursorScreenPoint=f.createScreenPointFromEvent(b),a._set("vertices",[]),a._activePointerId=b.pointerId,a._vertexAddHandler(b),
a._isDragging=!1,"touch"===b.pointerType&&a._cursorUpdateHandler(b))},d.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(b){a._cursorScreenPoint=f.createScreenPointFromEvent(b);e.isNone(a._activePointerId)&&"touch"!==b.pointerType&&0===a.vertices.length&&a._cursorUpdateHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("pointer-drag",function(b){a._shouldHandlePointerEvent(b)&&(a._isDragging=!0,a._cursorScreenPoint=f.createScreenPointFromEvent(b),a._cursorUpdateHandler(b))},d.ViewEventPriorities.TOOL),
this.view.on("pointer-up",function(b){a._shouldHandlePointerEvent(b)&&(a._activePointerId=null,a._popCursorVertex(),a._isDragging&&!a._panEnabled&&(a._vertexAddHandler(b),a._drawCompleteHandler(b)),a._isDragging=!1)},d.ViewEventPriorities.TOOL),this.view.on("key-down",function(b){b.key===h.KEYS.drawCompleteKey&&a._cursorScreenPoint?a._drawCompleteHandler(b):b.key===h.KEYS.panKey&&(a._panEnabled=!0)},d.ViewEventPriorities.TOOL),this.view.on("key-up",function(b){b.key===h.KEYS.panKey&&(a._panEnabled=
!1)},d.ViewEventPriorities.TOOL),this.view.on("drag",function(b){e.isSome(a._activePointerId)&&b.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],function(a){a.stopPropagation()},d.ViewEventPriorities.TOOL)]};c.prototype._getClickModeViewHandles=function(){var a=this;return[this.view.on("click",function(a){a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("pointer-down",function(b){a._cursorScreenPoint=f.createScreenPointFromEvent(b);a._activePointerId=b.pointerId;
a._isDragging=!1;"touch"===b.pointerType&&a._cursorUpdateHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(b){a._cursorScreenPoint=f.createScreenPointFromEvent(b);e.isNone(a._activePointerId)&&"touch"!==b.pointerType&&a._cursorUpdateHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("pointer-drag",function(b){a._shouldHandlePointerEvent(b)&&(a._isDragging=!0)},d.ViewEventPriorities.TOOL),this.view.on("pointer-up",function(b){a._shouldHandlePointerEvent(b)&&(a._activePointerId=
null,a._isDragging||a._vertexAddHandler(b),2!==a.vertices.length||a._isDragging||a._drawCompleteHandler(b),a._isDragging=!1)},d.ViewEventPriorities.TOOL),this.view.on("key-down",function(b){b.key===h.KEYS.vertexAddKey&&a._cursorScreenPoint&&(a._vertexAddHandler(b),2===a.vertices.length&&a._drawCompleteHandler(b));b.key===h.KEYS.drawCompleteKey&&a._cursorScreenPoint&&2===a.vertices.length&&a._drawCompleteHandler(b)},d.ViewEventPriorities.TOOL)]};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};
c.prototype._addVertex=function(a,b){this._popCursorVertex();this.isDuplicateVertex(this.vertices,a)||(this.vertices.push(a),1===this.vertices.length&&(this.viewAlignedCoordinateSystem=r.createViewAlignedCoordinateSystem(this.view,this.vertices[0])),a=this.vertices.indexOf(a),b=new l.VertexAddEvent(this.view,b,a,this.vertices),this.emit("vertex-add",b))};c.prototype._updateCursor=function(a,b){var c=null;e.isSome(a)&&(c=this._pushCursorVertex(a));a=new l.CursorUpdateEvent(this.view,b,c,this.vertices);
this.emit("cursor-update",a)};c.prototype._completeDrawing=function(a){this._activePointerId=null;this._popCursorVertex();this._isDragging=!1;this._cursorScreenPoint=null;1>this.vertices.length||(a=new l.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented||this._removeViewHandles())};c.prototype._pushCursorVertex=function(a){this._popCursorVertex();this.vertices.push(a);this._cursorVertexAdded=!0;return this.vertices.length-1};c.prototype._popCursorVertex=function(){this._cursorVertexAdded&&
(this.vertices.pop(),this._cursorVertexAdded=!1)};c.prototype._shouldHandlePointerEvent=function(a){return("mouse"!==a.pointerType||0===a.button)&&(e.isNone(this._activePointerId)||this._activePointerId===a.pointerId)};c.prototype._vertexAddHandler=function(a){var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);e.isSome(b)&&this._addVertex(b,a.native)};c.prototype._cursorUpdateHandler=function(a){var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);this._updateCursor(b,a.native)};
c.prototype._drawCompleteHandler=function(a){this._completeDrawing(a.native)};k([g.property({cast:function(a){return-1===["freehand","click"].indexOf(a)?"freehand":a}})],c.prototype,"mode",void 0);k([g.property({readOnly:!0})],c.prototype,"vertices",void 0);k([g.property()],c.prototype,"view",void 0);return c=k([g.subclass("esri/views/2d/engine/markup/SegmentDrawAction")],c)}(g.declared(q))});