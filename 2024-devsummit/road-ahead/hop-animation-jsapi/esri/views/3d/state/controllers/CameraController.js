// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass".split(" "),function(a,c,e,d,g,h,k,f){a.State=void 0;(function(b){b[b.Ready=0]="Ready";b[b.Rejected=1]="Rejected";b[b.Running=2]="Running";b[b.Stopped=3]="Stopped";b[b.Finished=4]="Finished"})(a.State||(a.State={}));a.CameraController=class extends e{constructor(b){super(b);
this.state=a.State.Ready}get active(){return this.state===a.State.Running}get isInteractive(){return!1}get canStop(){return!1}stopController(){return this.canStop?(this.state=a.State.Stopped,!0):!1}finishController(){this.state=a.State.Finished}get steppingFinished(){return!1}};c.__decorate([d.property({constructOnly:!0})],a.CameraController.prototype,"view",void 0);c.__decorate([d.property({readOnly:!0})],a.CameraController.prototype,"active",null);c.__decorate([d.property()],a.CameraController.prototype,
"state",void 0);c.__decorate([d.property({readOnly:!0})],a.CameraController.prototype,"isInteractive",null);a.CameraController=c.__decorate([f.subclass("esri.views.3d.state.controllers.CameraController")],a.CameraController);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});