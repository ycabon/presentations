// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./utils ../support/GoTo".split(" "),function(d,b,c,e,k,l,m,f,g,h){b=class extends h.GoToMixin(b){constructor(a){super(a);this.orientation={x:0,y:0,z:0};this.view=null;this._updateForCamera=this._updateForCamera.bind(this);this._updateForRotation=this._updateForRotation.bind(this);
this._updateRotationWatcher=this._updateRotationWatcher.bind(this)}initialize(){this.addHandles(c.watch(()=>this.view,this._updateRotationWatcher,c.initial))}destroy(){this.view=null}get canShowNorth(){return g.canShowNorth(this.view)}get state(){return!this.view?.ready||"2d"===this.view.type&&!this.view.constraints.rotationEnabled?"disabled":this.canShowNorth?"compass":"rotation"}reset(){if(this.view?.ready){var a={};"2d"===this.view?.type?a.rotation=0:a.heading=0;this.callGoTo({target:a})}}_updateForRotation(a){void 0!==
a&&null!==a&&(this.orientation={z:a})}_updateForCamera(a){a&&(this.orientation={x:0,y:0,z:-a.heading})}_updateRotationWatcher(a){this.removeAllHandles();a&&this.addHandles("2d"===a.type?c.watch(()=>a?.rotation,this._updateForRotation,c.initial):c.watch(()=>a?.camera,this._updateForCamera,c.initial))}};d.__decorate([e.property({readOnly:!0})],b.prototype,"canShowNorth",null);d.__decorate([e.property()],b.prototype,"orientation",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);
d.__decorate([e.property()],b.prototype,"view",void 0);return b=d.__decorate([f.subclass("esri.widgets.CompassViewModel")],b)});