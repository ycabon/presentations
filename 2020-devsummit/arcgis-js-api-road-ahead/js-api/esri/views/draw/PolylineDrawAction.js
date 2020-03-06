// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./DrawAction ./input/DrawEvents ./input/Keys ../input/InputManager".split(" "),function(t,u,p,h,q,l,m,g,r,f,k,d){return function(n){function c(a){a=n.call(this,a)||this;a._cursorScreenPoint=null;a._panEnabled=!1;a._cursorVertexAdded=!1;a._popVertexOnPointerMove=!1;a._addVertexOnPointerUp=!1;a._activePointerId=
null;a._viewHandles=new q;a.mode="hybrid";a.vertices=[];a.view=null;return a}p(c,n);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};Object.defineProperty(c.prototype,"_clickEnabled",{get:function(){return-1!==["hybrid","click"].indexOf(this.mode)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_dragEnabled",{get:function(){return-1!==["hybrid","freehand"].indexOf(this.mode)},
enumerable:!0,configurable:!0});c.prototype.addVertex=function(a,b){var c=this;this.vertices.splice(b,0,a);this.history.push({vertex:a,vertexIndex:b,undo:function(){return c._undoVertexAdd(null,b)},redo:function(){return c._redoVertexAdd(null,a,b)}});this._set("redoHistory",[]);var e=new f.VertexAddEvent(this.view,null,b,this.vertices);this.emit("vertex-add",e);e.defaultPrevented&&(this._popVertexOnPointerMove=!0,this.history.pop())};c.prototype.removeVertex=function(a){var b=this,c=this.vertices.splice(a,
1)[0];this.history.push({vertex:c,vertexIndex:a,undo:function(){return b._undoVertexRemove(null,c,a)},redo:function(){return b._redoVertexRemove(null,a)}});this._set("redoHistory",[]);this.emit("vertex-remove",new f.VertexRemoveEvent(this.view,null,a,this.vertices))};c.prototype.updateVertex=function(a,b){var c=this,e=this.vertices[b];this.vertices[b]=a;this.history.push({vertex:a,vertexIndex:b,undo:function(){return c._undoVertexUpdate(null,e,b)},redo:function(){return c._redoVertexUpdate(null,a,
b)}});this._set("redoHistory",[]);this.emit("vertex-update",new f.VertexUpdateEvent(this.view,null,b,this.vertices))};c.prototype.complete=function(){this._completeDrawing()};c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("click",function(a){a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("pointer-down",function(b){a._shouldHandlePointerEvent(b)&&!a._panEnabled&&(a._activePointerId=b.pointerId,a._addVertexOnPointerUp=!0,
a._cursorScreenPoint=m.createScreenPointFromEvent(b),"touch"===b.pointerType&&a._updateCursor(b.native))},d.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(b){a._popVertexOnPointerMove&&(a.vertices.pop(),a._popVertexOnPointerMove=!1);a._cursorScreenPoint=m.createScreenPointFromEvent(b);"touch"!==b.pointerType&&a._updateCursor(b.native)},d.ViewEventPriorities.TOOL),this.view.on("pointer-drag",function(b){a._shouldHandlePointerEvent(b)&&(a._cursorScreenPoint=m.createScreenPointFromEvent(b),
a._dragEnabled&&!a._panEnabled?a._vertexAddHandler(b):a._addVertexOnPointerUp=!1)},d.ViewEventPriorities.TOOL),this.view.on("pointer-up",function(b){a._shouldHandlePointerEvent(b)&&(a._activePointerId=null,a._addVertexOnPointerUp?a._clickEnabled?a._vertexAddHandler(b):(1===a.vertices.length&&a.vertices.pop(),a._drawCompleteHandler(b)):a._updateCursor(b.native,"touch"===b.pointerType))},d.ViewEventPriorities.TOOL),this.view.on("drag",function(b){a._dragEnabled&&l.isSome(a._activePointerId)&&!a._panEnabled&&
b.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],function(a){a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("double-click",function(b){b.stopPropagation();a._drawCompleteHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],function(b){b.stopPropagation();a._drawCompleteHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("key-down",function(b){var c=b.key,e=b.repeat;c===k.KEYS.vertexAddKey&&!e&&a._cursorScreenPoint?a._vertexAddHandler(b):
c===k.KEYS.drawCompleteKey&&!e&&a._cursorScreenPoint&&1<a.vertices.length?(a._vertexAddHandler(b),a._drawCompleteHandler(b)):c!==k.KEYS.undoKey||e?c!==k.KEYS.redoKey||e?c!==k.KEYS.panKey||e||(a._panEnabled=!0):a.redo():a.undo()},d.ViewEventPriorities.TOOL),this.view.on("key-up",function(b){b.key===k.KEYS.panKey&&(a._panEnabled=!1)},d.ViewEventPriorities.TOOL)])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._addVertex=function(a,b){var c=this;this._popCursorVertex();
if(!this.isDuplicateVertex(this.vertices,a)){this.vertices.push(a);var e=this.vertices.length-1;this.history.push({vertex:a,vertexIndex:e,undo:function(){return c._undoVertexAdd(b,e)},redo:function(){return c._redoVertexAdd(b,a,e)}});this._set("redoHistory",[]);var d=new f.VertexAddEvent(this.view,b,e,this.vertices);this.emit("vertex-add",d);d.defaultPrevented&&(this._popVertexOnPointerMove=!0,this.history.pop())}};c.prototype._updateCursor=function(a,b){void 0===b&&(b=!1);this._popCursorVertex();
if(this._cursorScreenPoint){var c=null,e=null,d=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);l.isSome(d)&&(c=d.mapPoint,b||(e=this._pushCursorVertex(d.vertex)));a=new f.CursorUpdateEvent(this.view,a,e,this.vertices,c);this.emit("cursor-update",a)}};c.prototype._completeDrawing=function(a){this._activePointerId=null;this._popCursorVertex();2>this.vertices.length||(a=new f.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented||this._removeViewHandles())};
c.prototype._undoVertexAdd=function(a,b){this.vertices.splice(b,1);this.emit("undo",new f.VertexRemoveEvent(this.view,a,b,this.vertices))};c.prototype._redoVertexAdd=function(a,b,c){this.vertices.splice(c,0,b);this.emit("redo",new f.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._undoVertexRemove=function(a,b,c){this.vertices.splice(c,0,b);this.emit("undo",new f.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexRemove=function(a,b){this.vertices.splice(b,1);this.emit("redo",
new f.VertexRemoveEvent(this.view,a,b,this.vertices))};c.prototype._undoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("undo",new f.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("redo",new f.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._pushCursorVertex=function(a){this._popCursorVertex();this.vertices.push(a);this._cursorVertexAdded=!0;return this.vertices.length-1};c.prototype._popCursorVertex=
function(){this._cursorVertexAdded&&(this.vertices.pop(),this._cursorVertexAdded=!1)};c.prototype._shouldHandlePointerEvent=function(a){return("mouse"!==a.pointerType||0===a.button)&&(l.isNone(this._activePointerId)||this._activePointerId===a.pointerId)};c.prototype._vertexAddHandler=function(a){if(this._cursorVertexAdded)this._addVertex(this.vertices[this.vertices.length-1],a.native);else{var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);l.isSome(b)&&this._addVertex(b,a.native)}};c.prototype._drawCompleteHandler=
function(a){this._completeDrawing(a.native)};h([g.property({dependsOn:["mode"]})],c.prototype,"_clickEnabled",null);h([g.property({dependsOn:["mode"]})],c.prototype,"_dragEnabled",null);h([g.property({cast:function(a){return-1===["hybrid","freehand","click"].indexOf(a)?"hybrid":a}})],c.prototype,"mode",void 0);h([g.property({readOnly:!0})],c.prototype,"vertices",void 0);h([g.property()],c.prototype,"view",void 0);return c=h([g.subclass("esri.views.draw.PolylineDrawAction")],c)}(g.declared(r))});