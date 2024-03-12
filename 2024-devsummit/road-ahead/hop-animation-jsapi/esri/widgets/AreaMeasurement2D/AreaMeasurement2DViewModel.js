// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/deprecate ../../core/Logger ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/projection ../../properties/defaultUnit ./AreaMeasurement2DTool ../support/InteractiveToolViewModel".split(" "),function(c,l,m,e,g,d,b,t,n,p,q,h,r){b=class extends r.InteractiveToolViewModel{constructor(a){super(a);this.supportedViewType="2d";
this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views."}initialize(){this.addHandles([e.watch(()=>this.view?.spatialReference,()=>this.clear()),e.watch(()=>this.unit,a=>{null!=this.tool&&(this.tool.unit=a)},e.initial),e.watch(()=>this.geodesicDistanceThreshold,a=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=a)},e.initial)])}get geodesicDistanceThreshold(){l.deprecatedProperty(m.getLogger(this),"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0});return this._get("geodesicDistanceThreshold")}set geodesicDistanceThreshold(a){l.deprecatedProperty(m.getLogger(this),
"geodesicDistanceThreshold",{version:"4.29",warnOnce:!0});this._set("geodesicDistanceThreshold",a)}get measurement(){return null!=this.tool?this.tool.measurement:null}get measurementLabel(){return null!=this.tool?this.tool.measurementLabel:null}get state(){return this.disabled||null==this.view||!h.isSupported(this.view.spatialReference)?"disabled":this.tool?.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(a){this._overrideIfSome("unit",
this._validateUnit(a))}get unitOptions(){return g.measurementAreaUnits}set unitOptions(a){this._overrideIfSome("unitOptions",this._validateUnits(a))}async start(){const a=this.view;null!=a&&(await e.whenOnce(()=>a.ready),h.isProjectionEngineRequired(a.spatialReference)&&await p.load());this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new h.AreaMeasurement2DTool({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(a){const {unitOptions:f,
defaultUnit:k}=this;return null!=a&&f.includes(a)?a:f.includes(k)?k:0<f.length?f[0]:k}_validateUnits(a){if(null==a)return[];a=a.filter(f=>g.measurementAreaUnits.includes(f));return 0===a.length?g.measurementAreaUnits.slice():a}};c.__decorate([d.property(q.defaultUnitPropertyMetadata)],b.prototype,"defaultUnit",void 0);c.__decorate([d.property()],b.prototype,"geodesicDistanceThreshold",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"measurement",null);c.__decorate([d.property({readOnly:!0})],
b.prototype,"measurementLabel",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property({type:String})],b.prototype,"unit",null);c.__decorate([d.property({type:[String]})],b.prototype,"unitOptions",null);return b=c.__decorate([n.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],b)});