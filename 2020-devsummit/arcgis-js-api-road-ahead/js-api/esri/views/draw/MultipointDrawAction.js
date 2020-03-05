// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./DrawAction ./input/DrawEvents ./input/Keys ../input/InputManager".split(" "),function(r,t,n,h,p,k,l,f,q,e,g,d){return function(m){function c(a){a=m.call(this,a)||this;a._cursorMoved=!1;a._cursorScreenPoint=null;a._dragEnabled=!0;a._pointerDownEvent=null;a._viewHandles=new p;a.vertices=[];a.view=null;
return a}n(c,m);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};c.prototype.addVertex=function(a,b){var c=this;isNaN(b)?(b=this.vertices.length,this.vertices.push(a)):this.vertices.splice(b,0,a);this.history.push({vertex:a,vertexIndex:b,undo:function(){return c._undoVertexAdd(null,b)},redo:function(){return c._redoVertexAdd(null,a,b)}});this._set("redoHistory",[]);var d=new e.VertexAddEvent(this.view,
null,b,this.vertices);this.emit("vertex-add",d);d.defaultPrevented&&(this._cursorMoved=!0,this.history.pop())};c.prototype.removeVertex=function(a){var b=this,c=this.vertices.splice(a,1)[0];this.history.push({vertex:c,vertexIndex:a,undo:function(){return b._undoVertexRemove(null,c,a)},redo:function(){return b._redoVertexRemove(null,a)}});this._set("redoHistory",[]);this.emit("vertex-remove",new e.VertexRemoveEvent(this.view,null,a,this.vertices))};c.prototype.updateVertex=function(a,b){var c=this,
d=this.vertices[b];this.vertices[b]=a;this.history.push({vertex:a,vertexIndex:b,undo:function(){return c._undoVertexUpdate(null,d,b)},redo:function(){return c._redoVertexUpdate(null,a,b)}});this._set("redoHistory",[]);this.emit("vertex-update",new e.VertexUpdateEvent(this.view,null,b,this.vertices))};c.prototype.complete=function(){this._completeDrawing()};c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("click",function(a){a.stopPropagation()},
d.ViewEventPriorities.TOOL),this.view.on("pointer-down",function(b){a._cursorMoved&&a.vertices.pop();a._pointerDownEvent=b;a._cursorMoved=!1;a._cursorScreenPoint=l.createScreenPointFromEvent(b)},d.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(b){a._cursorMoved&&a.vertices.pop();a._cursorMoved=!0;a._cursorScreenPoint=l.createScreenPointFromEvent(b);a._cursorUpdateHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("pointer-up",function(b){a._pointerDownEvent&&(a._cursorMoved?(a.vertices.pop(),
a._cursorMoved=!1):(a._pointerDownEvent=null,a._vertexAddHandler(b)))},d.ViewEventPriorities.TOOL),this.view.on("drag",function(b){a._dragEnabled&&a._pointerDownEvent&&b.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],function(a){a.stopPropagation()},d.ViewEventPriorities.TOOL),this.view.on("double-click",function(b){b.stopPropagation();a._drawCompleteHandler(b)},d.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],function(b){b.stopPropagation();a._drawCompleteHandler(b)},
d.ViewEventPriorities.TOOL),this.view.on("key-down",function(b){b.key===g.KEYS.vertexAddKey&&!b.repeat&&a._cursorScreenPoint?(a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1),a._vertexAddHandler(b)):b.key===g.KEYS.drawCompleteKey&&!b.repeat&&a._cursorScreenPoint?(a._cursorMoved&&(a.vertices.pop(),a._cursorMoved=!1),a._vertexAddHandler(b),a._drawCompleteHandler(b)):b.key!==g.KEYS.undoKey||b.repeat?b.key!==g.KEYS.redoKey||b.repeat||a.redo():a.undo()},d.ViewEventPriorities.TOOL)])};c.prototype._removeViewHandles=
function(){this._viewHandles.removeAll()};c.prototype._addVertex=function(a,b){var c=this;this.vertices.push(a);var d=this.vertices.indexOf(a);this.history.push({vertex:a,vertexIndex:d,undo:function(){return c._undoVertexAdd(b,d)},redo:function(){return c._redoVertexAdd(b,a,d)}});this._set("redoHistory",[]);var f=new e.VertexAddEvent(this.view,b,d,this.vertices);this.emit("vertex-add",f);f.defaultPrevented&&(this._cursorMoved=!0,this.history.pop())};c.prototype._updateCursor=function(a,b){this.vertices.push(a);
a=this.vertices.indexOf(a);b=new e.CursorUpdateEvent(this.view,b,a,this.vertices);this.emit("cursor-update",b)};c.prototype._completeDrawing=function(a){this._cursorMoved=!1;this._pointerDownEvent=null;1>this.vertices.length||(a=new e.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented?this._cursorMoved=!0:this._removeViewHandles())};c.prototype._undoVertexAdd=function(a,b){this.vertices.splice(b,1);this.emit("undo",new e.VertexRemoveEvent(this.view,a,b,this.vertices))};
c.prototype._redoVertexAdd=function(a,b,c){this.vertices.splice(c,0,b);this.emit("redo",new e.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._undoVertexRemove=function(a,b,c){this.vertices.splice(c,0,b);this.emit("undo",new e.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexRemove=function(a,b){this.vertices.splice(b,1);this.emit("redo",new e.VertexRemoveEvent(this.view,a,b,this.vertices))};c.prototype._undoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("undo",
new e.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("redo",new e.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._vertexAddHandler=function(a){var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);k.isSome(b)&&this._addVertex(b,a.native)};c.prototype._cursorUpdateHandler=function(a){var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);k.isSome(b)&&this._updateCursor(b,a.native)};c.prototype._drawCompleteHandler=
function(a){this._completeDrawing(a.native)};h([f.property({readOnly:!0})],c.prototype,"vertices",void 0);h([f.property()],c.prototype,"view",void 0);return c=h([f.subclass("esri.views.draw.MultipointDrawAction")],c)}(f.declared(q))});