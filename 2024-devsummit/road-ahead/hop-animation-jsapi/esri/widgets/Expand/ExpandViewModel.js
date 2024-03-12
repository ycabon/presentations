// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(d,b,f,e,k,l,m,h){b=class extends b{constructor(a){super(a);this.group=this._viewpointHandle=null}initialize(){this.addHandles(f.on(()=>this.view?.ui,"expand",a=>{({target:a}=a);a&&a!==this&&a.expanded&&a.group&&a.group===this.group&&this._collapse()}))}destroy(){this.view=
this._viewpointHandle=null}set autoCollapse(a){this._set("autoCollapse",a);this._watchViewpoint()}set expanded(a){a=!!a;this._set("expanded",a);const c=this.view?.ui;c&&c.emit("expand",{target:this});this._viewpointHandleChange(a)}get state(){return this.view?.ready?"ready":"disabled"}set view(a){this._get("view")!==a&&(this._set("view",a),a&&f.when(()=>a.ready,()=>{this.view===a&&this._watchViewpoint()},{once:!0,initial:!0}))}_viewpointHandleChange(a){this._viewpointHandle&&(a?f.when(()=>this.view?.stationary,
()=>this._viewpointHandle?.resume(),{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){this.removeHandles("viewpoint");this._viewpointHandle=null;const {autoCollapse:a,view:c}=this;if(c&&a){var g=f.pausable(()=>"3d"===c.type?c.camera:c.viewpoint,()=>this._collapse());this.addHandles(g,"viewpoint");this._viewpointHandle=g}}_collapse(){this.expanded=!1}};d.__decorate([e.property({value:!1})],b.prototype,"autoCollapse",null);d.__decorate([e.property({value:!1})],b.prototype,"expanded",
null);d.__decorate([e.property()],b.prototype,"group",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);d.__decorate([e.property({value:null})],b.prototype,"view",null);return b=d.__decorate([h.subclass("esri.widgets.Expand.ExpandViewModel")],b)});