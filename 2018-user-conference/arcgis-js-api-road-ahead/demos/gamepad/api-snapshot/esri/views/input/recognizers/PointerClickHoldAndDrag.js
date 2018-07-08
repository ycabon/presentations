// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(k,g,l,m,n){Object.defineProperty(g,"__esModule",{value:!0});g.DefaultParameters={maximumClickDelay:300,movementUntilMouseDrag:1.5,movementUntilTouchDrag:6,holdDelay:500};k=function(h){function f(c,b,d,e){void 0===c&&(c=g.DefaultParameters.maximumClickDelay);void 0===b&&(b=g.DefaultParameters.movementUntilMouseDrag);void 0===d&&(d=g.DefaultParameters.movementUntilTouchDrag);void 0===e&&(e=g.DefaultParameters.holdDelay);
var a=h.call(this,!1)||this;a.maximumClickDelay=c;a.movementUntilMouseDrag=b;a.movementUntilTouchDrag=d;a.holdDelay=e;a._pointerState=new Map;a._pointerDrag=a.registerOutgoing("pointer-drag");a._immediateClick=a.registerOutgoing("immediate-click");a._pointerHold=a.registerOutgoing("hold");a.registerIncoming("pointer-down",a._handlePointerDown.bind(a));a.registerIncoming("pointer-up",a._handlePointerUpOrLost.bind(a));a.registerIncoming("pointer-capture-lost",a._handlePointerUpOrLost.bind(a));a._moveHandle=
a.registerIncoming("pointer-move",a._handlePointerMove.bind(a));a._moveHandle.pause();return a}l(f,h);f.prototype.onUninstall=function(){this._pointerState.forEach(function(c){0!==c.holdTimeout&&(clearTimeout(c.holdTimeout),c.holdTimeout=0)});h.prototype.onUninstall.call(this)};f.prototype._handlePointerDown=function(c){var b=this,d=c.data,e=d.native.pointerId,a=0;0===this._pointerState.size&&(a=setTimeout(function(){var a=b._pointerState.get(e);a&&(a.isDragging||(b._pointerHold.emit(a.previousEvent,
void 0,c.modifiers),a.holdEmitted=!0),a.holdTimeout=0)},this.holdDelay));a={startEvent:d,previousEvent:d,startTimestamp:c.timestamp,isDragging:!1,downButton:d.native.button,holdTimeout:a,modifiers:new Set};this._pointerState.set(e,a);this.startCapturingPointer(d.native);this._moveHandle.resume();1<this._pointerState.size&&this.startDragging(c)};f.prototype._createPointerDragData=function(c,b,d){return{action:c,startEvent:b.startEvent,previousEvent:b.previousEvent,currentEvent:d}};f.prototype._handlePointerMove=
function(c){var b=c.data,d=this._pointerState.get(b.native.pointerId);d&&(d.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",d,b),void 0,d.modifiers):n.euclideanDistance(b,d.startEvent)>("touch"===b.native.pointerType?this.movementUntilTouchDrag:this.movementUntilMouseDrag)&&this.startDragging(c),d.previousEvent=b)};f.prototype.startDragging=function(c){var b=this,d=c.data,e=d.native.pointerId;this._pointerState.forEach(function(a){0!==a.holdTimeout&&(clearTimeout(a.holdTimeout),
a.holdTimeout=0);a.isDragging||(a.modifiers=c.modifiers,a.isDragging=!0,e===a.startEvent.native.pointerId?b._pointerDrag.emit(b._createPointerDragData("start",a,d)):b._pointerDrag.emit(b._createPointerDragData("start",a,a.previousEvent),c.timestamp))})};f.prototype._handlePointerUpOrLost=function(c){var b=c.data,d=b.native.pointerId,e=this._pointerState.get(d);e&&(0!==e.holdTimeout&&clearTimeout(e.holdTimeout),e.isDragging?this._pointerDrag.emit(this._createPointerDragData("end",e,b),void 0,e.modifiers):
e.downButton===b.native.button&&c.timestamp-e.startTimestamp<=this.maximumClickDelay&&!e.holdEmitted&&this._immediateClick.emit(b),this._pointerState.delete(d),this.stopCapturingPointer(b.native),0===this._pointerState.size&&this._moveHandle.pause())};return f}(m.InputHandler);g.PointerClickHoldAndDrag=k});