// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,e,d,g,h,k,f){a=class extends a{constructor(c){super(c);this.navigationMode="pan";this.view=null}initialize(){this.addHandles(e.when(()=>this.view?.inputManager,()=>this._setNavigationMode()))}destroy(){this.view=null}get state(){return this.view?.ready&&
"3d"===this.view?.type?"ready":"disabled"}toggle(){"disabled"!==this.state&&(this.navigationMode="pan"!==this.navigationMode?"pan":"rotate",this._setNavigationMode())}_setNavigationMode(){const c=this.view?.inputManager;c&&(c.primaryDragAction="pan"===this.navigationMode?"pan":"rotate")}};b.__decorate([d.property({readOnly:!0})],a.prototype,"state",null);b.__decorate([d.property()],a.prototype,"navigationMode",void 0);b.__decorate([d.property()],a.prototype,"view",void 0);return a=b.__decorate([f.subclass("esri.widgets.NavigationToggleViewModel")],
a)});