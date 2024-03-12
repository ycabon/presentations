// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./AnalysisView3D ./Slice/SliceController ./Slice/SliceTool ./Slice/SliceVisualization ../../analysis/analysisViewUtils".split(" "),function(b,a,e,c,n,p,q,g,h,k,l,m,f){a=class extends h.AnalysisView3D(a){constructor(d){super(d);this.type="slice-view-3d";this.plane=
this.analysisController=this.analysisVisualization=this.tool=this.analysis=null;this.active=!0}initialize(){this.analysisVisualization=new m.SliceVisualization({view:this.view,analysis:this.analysis,analysisViewData:this});this.analysisController=new k.SliceController({view:this.view,analysis:this.analysis,analysisViewData:this});this.addHandles(f.connectAnalysisViewToTool(this,l))}destroy(){f.removeAnalysisViewTool(this);this.analysisVisualization=e.destroyMaybe(this.analysisVisualization);this.analysisController=
e.destroyMaybe(this.analysisController)}get showGrid(){return this.analysisVisualization?.showGrid??!1}set showGrid(d){this.analysisVisualization&&(this.analysisVisualization.showGrid=d)}get editable(){return!this.analysisVisualization.preview}set editable(d){this.analysisVisualization.preview=!d}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController,tool:this.tool}}};b.__decorate([c.property({readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({constructOnly:!0,
nonNullable:!0})],a.prototype,"analysis",void 0);b.__decorate([c.property()],a.prototype,"tool",void 0);b.__decorate([c.property()],a.prototype,"plane",void 0);b.__decorate([c.property()],a.prototype,"active",void 0);b.__decorate([c.property()],a.prototype,"showGrid",null);b.__decorate([c.property()],a.prototype,"editable",null);return a=b.__decorate([g.subclass("esri.views.3d.analysis.SliceAnalysisView3D")],a)});