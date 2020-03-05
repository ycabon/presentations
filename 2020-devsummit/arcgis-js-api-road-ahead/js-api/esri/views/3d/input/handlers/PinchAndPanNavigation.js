// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../state/controllers/global/PinchAndPanController ../../state/controllers/local/PinchAndPanController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(d,e,f,g,h,k,l){Object.defineProperty(e,"__esModule",{value:!0});d=function(d){function b(a,m,b){var c=d.call(this,!0)||this;c.view=a;c.pointerAction=m;c.lastEndTimestamp=0;c.lastTimestamp=0;c.registerIncoming("drag",b,function(a){return c.handleDrag(a)});
return c}f(b,d);b.prototype.handleDrag=function(a){if("mouse"!==a.data.pointerType||l.eventMatchesMousePointerAction(a.data,this.pointerAction)){var b=a.timestamp-this.lastEndTimestamp,b=this.momentum&&this.momentum.active&&40>b;switch(a.data.action){case "start":case "update":if(b)break;this.controller&&this.controller.active?2<a.data.timestamp-this.lastTimestamp&&(this.controller.update(a.data),this.lastTimestamp=a.timestamp):this.startController(a);break;case "end":case "removed":this.endController(a,
!0);break;case "added":this.endController(a,!1),this.startController(a)}a.stopPropagation()}};b.prototype.endController=function(a,b){this.controller&&this.controller.active&&(this.lastEndTimestamp=a.timestamp,a=this.controller.end(a.data),b&&a&&(this.momentum=a,this.view.state.switchCameraController(this.momentum)));this.controller=null};b.prototype.startController=function(a){this.controller=this.createController();this.view.state.switchCameraController(this.controller);this.controller.begin(a.data);
this.lastTimestamp=a.timestamp};b.prototype.createController=function(){return this.view.state.isGlobal?new g.PinchAndPanController(this.view,this.view.sceneIntersectionHelper):new h.PinchAndPanController(this.view,this.view.sceneIntersectionHelper)};return b}(k.InputHandler);e.PinchAndPanNavigation=d});