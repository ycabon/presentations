// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/Evented ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/libs/gl-matrix-2/factories/vec3f64 ./AnalysisView3D ./LineOfSight/LineOfSightController ./LineOfSight/LineOfSightTool ./LineOfSight/LineOfSightVisualization ../../analysis/analysisViewUtils".split(" "),
function(b,a,k,l,f,c,u,v,w,m,n,p,q,r,t,g){a=class extends p.AnalysisView3D(l.EventedMixin(a)){constructor(d){super(d);this.type="line-of-sight-view-3d";this.tool=this.analysis=null;this.computations=new k;this.elevationAlignedObserver=null;this.observerEngineLocation=n.create();this.cursorTarget=null;this.editable=!0}initialize(){const d=this.view,e=this.analysis;this._analysisController=new q.LineOfSightController({analysis:e,analysisViewData:this,view:d});this._analysisVisualization=new t.LineOfSightVisualization({analysis:e,
analysisViewData:this,view:d,isDecoration:!this.parent});this.addHandles([this._analysisController.on("result-changed",h=>{h.target!==this.cursorTarget&&this.emit("result-changed",h)}),g.connectAnalysisViewToTool(this,r.LineOfSightTool)])}destroy(){g.removeAnalysisViewTool(this);this._analysisController=f.destroyMaybe(this._analysisController);this._analysisVisualization=f.destroyMaybe(this._analysisVisualization)}get results(){return this.computations.map(d=>d.result)}get priority(){return this._analysisController.priority}set priority(d){this._analysisController.priority=
d}get updating(){return null!=this._analysisController&&this._analysisController.updating||null!=this._analysisVisualization&&this._analysisVisualization.updating}getResultForTarget(d){return this.computations.find(e=>e.target===d)?.result}get testInfo(){return{visualization:this._analysisVisualization,controller:this._analysisController}}};b.__decorate([c.property({readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({constructOnly:!0,nonNullable:!0})],a.prototype,"analysis",void 0);
b.__decorate([c.property()],a.prototype,"tool",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"results",null);b.__decorate([c.property()],a.prototype,"priority",null);b.__decorate([c.property()],a.prototype,"computations",void 0);b.__decorate([c.property()],a.prototype,"elevationAlignedObserver",void 0);b.__decorate([c.property()],a.prototype,"observerEngineLocation",void 0);b.__decorate([c.property()],a.prototype,"cursorTarget",void 0);b.__decorate([c.property()],a.prototype,"updating",
null);b.__decorate([c.property()],a.prototype,"editable",void 0);b.__decorate([c.property()],a.prototype,"_analysisController",void 0);b.__decorate([c.property()],a.prototype,"_analysisVisualization",void 0);return a=b.__decorate([m.subclass("esri.views.3d.analysis.LineOfSightAnalysisView3D")],a)});