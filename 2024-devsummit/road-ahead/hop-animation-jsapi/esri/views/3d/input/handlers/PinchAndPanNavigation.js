// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../state/controllers/global/PinchAndPanController","../../state/controllers/local/PinchAndPanController","../../../input/InputHandler","../../../input/handlers/support"],function(c,d,e,f,g){class h extends f.InputHandler{constructor(a,b,k){super(!0);this._view=a;this.pointerAction=b;this._lastTimestamp=this._lastEndTimestamp=0;this.registerIncoming("drag",k,l=>this._handleDrag(l))}_handleDrag(a){if("mouse"!==a.data.pointerType||g.eventMatchesMousePointerAction(a.data,this.pointerAction)){var b=
a.timestamp-this._lastEndTimestamp;b=this._momentum&&this._momentum.active&&40>b;switch(a.data.action){case "start":case "update":if(b)break;this._controller&&this._controller.active?2<a.data.timestamp-this._lastTimestamp&&(this._controller.update(a.data),this._lastTimestamp=a.timestamp):this._startController(a);break;case "end":case "removed":this._endController(a,!0);break;case "added":this._endController(a,!1),this._startController(a)}a.stopPropagation()}}_endController(a,b){this._controller&&
this._controller.active&&(this._lastEndTimestamp=a.timestamp,a=this._controller.end(a.data),b&&a&&(this._momentum=a,this._view.state.switchCameraController(this._momentum)));this._controller=null}_startController(a){this._controller=this._createController();this._view.state.switchCameraController(this._controller);this._controller.begin(a.data);this._lastTimestamp=a.timestamp}_createController(){return this._view.state.isGlobal?new d.PinchAndPanController({view:this._view}):new e.PinchAndPanController({view:this._view})}}
c.PinchAndPanNavigation=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});