// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/screenUtils ../../state/controllers/global/ZoomController ../../state/controllers/local/ZoomController ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(a,f,g,h,k,l,m,n){Object.defineProperty(f,"__esModule",{value:!0});a=function(a){function e(p,b,d){var c=a.call(this,!0)||this;c.view=p;c.pointerAction=b;c.registerIncoming("drag",d,function(b){return c.handleDrag(b)});return c}g(e,a);e.prototype.handleDrag=
function(a){var b=a.data;if(!(1<b.pointers.size)&&n.eventMatchesMousePointerAction(a.data,this.pointerAction)){var d=h.createScreenPointArray(b.center.x,b.center.y);switch(b.action){case "start":this.cameraController&&(this.cameraController.end(),this.cameraController=null);this.cameraController=this.view.state.isGlobal?new k.ZoomController(this.view,this.view.sceneIntersectionHelper):new l.ZoomController(this.view,this.view.sceneIntersectionHelper);this.view.state.switchCameraController(this.cameraController);
this.cameraController.begin(d);break;case "update":this.cameraController&&this.cameraController.update(d);break;case "end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}a.stopPropagation()}};return e}(m.InputHandler);f.DragZoom=a});