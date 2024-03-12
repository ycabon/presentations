// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/clock ../../../../core/handleUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/vectorStacks ./lengthDimensionManipulatorUtils ./LengthDimensionSubTool ./settings ../../../interactive/AnalysisToolBase ../../../interactive/keybindings ../../../interactive/ToolIntersector ../../../support/screenUtils ../../../../geometry/Point".split(" "),
function(b,c,y,m,h,n,f,d,z,A,B,p,q,k,r,t,u,l,v,w,x){var g;(function(a){a.Ready="ready";a.Creating="creating";a.Created="created"})(g||={});b.DimensionTool=class extends u.AnalysisToolBase{constructor(a){super(a);this.removeIncompleteOnCancel=this.automaticManipulatorSelection=!1;this._pointerMoveTimerMs=t.pointerMoveTimeoutMs;this._prevPointerMoveTimeout=null}initialize(){this._intersector=v.newToolIntersector(this.view.state.viewingMode);this._lengthDimensionSubTool=new r.LengthDimensionSubTool({analysis:this.analysis,
analysisViewData:this.analysisViewData,manipulators:this.manipulators,parentTool:this,view:this.view});this.addHandles([h.destroyHandle(this._lengthDimensionSubTool),h.makeHandle(()=>this._clearPointerMoveTimeout()),f.watch(()=>this.state,a=>{a===g.Created&&this.finishToolCreation()},f.syncAndInitial),f.when(()=>this.firstGrabbedManipulator,a=>{this.selectedDimension=a.metadata},f.syncAndInitial),f.watch(()=>this.selectedDimension,()=>this._resetPointerMoveTimeout(),f.syncAndInitial)])}get state(){return this.analysis.dimensions.some(a=>
"length"===a.type)?null!=this._activeSubTool?g.Creating:g.Created:g.Ready}get updating(){return this._lengthDimensionSubTool.updating}get cursor(){return this.active?"crosshair":null}get selectedDimension(){return this.analysisViewData.selectedDimension}set selectedDimension(a){this.analysisViewData.selectedDimension=a}onInputEvent(a){switch(a.type){case "immediate-click":this._clickHandler(a);break;case "immediate-double-click":this._doubleClickHandler(a);break;case "pointer-move":this._pointerMoveHandler(a);
break;case "key-down":l.sketchKeys.cancel===a.key?null!=this._activeSubTool&&this._activeSubTool.removeStaged()?a.stopPropagation():this.active||(this.selectedDimension=null):l.sketchKeys.delete.includes(a.key)&&this._deleteKeyHandler()}}onActivate(){this._activeSubTool=this._lengthDimensionSubTool}onDeactivate(){null!=this._activeSubTool&&(this._activeSubTool.onDeactivate(),this._activeSubTool=null)}onShow(){this._resetPointerMoveTimeout()}onManipulatorSelectionChanged(){this._lengthDimensionSubTool.onManipulatorSelectionChanged()}onHide(){this.selectedDimension=
null}_clickHandler(a){if(this.hasFocusedManipulators)a.stopPropagation();else if(null!=this._activeSubTool){var e=this._intersectScreen(a);null!=e&&(this.selectedDimension=this._activeSubTool.onClick({mapPoint:e,pointerType:a.pointerType}),a.stopPropagation())}}_doubleClickHandler(a){this.active&&(this.view.activeTool=null,a.stopPropagation())}_pointerMoveHandler(a){this._resetPointerMoveTimeout();if(null!=this._activeSubTool&&!this.hasFocusedManipulators){var e=this._intersectScreen(a);if(null!=
e)this._activeSubTool.onPointerMove({mapPoint:e,pointerType:a.pointerType})}}_deleteKeyHandler(){null!=this._activeSubTool&&this._activeSubTool.removeStaged();this._removeSelected()}_intersectScreen(a){a=w.createScreenPointArrayFromEvent(a);this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector);a=this._intersector.results.min;const e=q.sv3d.get();return a.getIntersectionPoint(e)?this.view.renderCoordsHelper.fromRenderCoords(e,new x({spatialReference:this.view.spatialReference})):
null}_removeSelected(){null!=this.selectedDimension&&(this.analysis.dimensions.remove(this.selectedDimension),this.selectedDimension=null)}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=n.removeMaybe(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout();this.manipulators.forEach(a=>a.manipulator.state|=k.DidPointerMoveRecentlyFlag);this._prevPointerMoveTimeout=m.clock.setTimeout(()=>{this.manipulators.forEach(a=>a.manipulator.state&=~k.DidPointerMoveRecentlyFlag)},
this._pointerMoveTimerMs)}get testInfo(){return{...this._lengthDimensionSubTool.testInfo,setManipulatorAutoHideDelay:a=>{this._pointerMoveTimerMs=a;this._resetPointerMoveTimeout()}}}};c.__decorate([d.property({constructOnly:!0})],b.DimensionTool.prototype,"view",void 0);c.__decorate([d.property({constructOnly:!0})],b.DimensionTool.prototype,"analysis",void 0);c.__decorate([d.property({readOnly:!0})],b.DimensionTool.prototype,"state",null);c.__decorate([d.property({readOnly:!0})],b.DimensionTool.prototype,
"updating",null);c.__decorate([d.property({readOnly:!0})],b.DimensionTool.prototype,"cursor",null);c.__decorate([d.property({constructOnly:!0})],b.DimensionTool.prototype,"analysisViewData",void 0);c.__decorate([d.property()],b.DimensionTool.prototype,"selectedDimension",null);c.__decorate([d.property()],b.DimensionTool.prototype,"automaticManipulatorSelection",void 0);c.__decorate([d.property()],b.DimensionTool.prototype,"_activeSubTool",void 0);c.__decorate([d.property()],b.DimensionTool.prototype,
"_lengthDimensionSubTool",void 0);b.DimensionTool=c.__decorate([p.subclass("esri.views.3d.analysis.Dimension.DimensionTool")],b.DimensionTool);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});