import { u as e, y, z as n, m as r, e9 as j, aw as a$1, b7 as l, eX as w, E as s, bD as j$1, es as s$1, gh as p, t, dk as p$1 } from './_virtual_index-1ea2035a.js';
import { n as n$1 } from './LayerView3D-c60482d9.js';
import { u as u$1 } from './LayerView-04d8537b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a=a=>{let n$1=class extends a{constructor(...e){super(...e),this.layer=null;}get interactive(){return !!r(this.analysisView)&&this.analysisView.interactive}set interactive(e){r(this.analysisView)&&(this.analysisView.interactive=e);}get results(){return r(this.analysisView)?this.analysisView.results:new j}get selectedDimension(){return r(this.analysisView)?this.analysisView.selectedDimension:null}set selectedDimension(e){r(this.analysisView)&&(this.analysisView.selectedDimension=e);}async createLengthDimensions(e){if(!r(this.analysisView))throw a$1();await this.analysisView.createLengthDimensions(e);}};return e([y()],n$1.prototype,"layer",void 0),e([y()],n$1.prototype,"interactive",null),e([y({readOnly:!0})],n$1.prototype,"results",null),e([y()],n$1.prototype,"selectedDimension",null),e([y()],n$1.prototype,"analysisView",void 0),n$1=e([n("esri.views.layers.DimensionLayerView")],n$1),n$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const V="analysis-view-handles";let u=class extends(n$1(a(u$1))){constructor(s){super(s),this.type="dimension-3d",this._analysisModule=null;}initialize(){this.handles.add(l((()=>this.layer.source),(s=>{this._destroyAnalysisView(),r(s)&&this._createAnalysisView(s);}),w),V);}destroy(){this.handles.remove(V),this._destroyAnalysisView();}isUpdating(){return r(this._createAnalysisViewTask)||r(this.analysisView)&&this.analysisView.updating}async whenAnalysisView(){if(r(this.analysisView))return this.analysisView;if(r(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new s("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(s){const e=j$1((async i=>(this.analysisView=await this._createAnalysisViewPromise(s,i),this._createAnalysisViewTask===e&&(this._createAnalysisViewTask=null),this.analysisView)));this.addResolvingPromise(e.promise),this._createAnalysisViewTask=e;}_destroyAnalysisView(){this.analysisView=s$1(this.analysisView),this._createAnalysisViewTask=p(this._createAnalysisViewTask);}async _createAnalysisViewPromise(s,i){let e=this._analysisModule;if(t(e)){const s=await this._loadAnalysisModule();this._analysisModule=s,e=s;}const a=new e.default({analysis:s,view:this.view,parent:this});if(await a.when(),p$1(i))throw a.destroy(),a$1();return a}_loadAnalysisModule(){return import('./DimensionAnalysisView3D-6e6a3605.js')}};e([y()],u.prototype,"type",void 0),e([y()],u.prototype,"analysisView",void 0),e([y()],u.prototype,"_createAnalysisViewTask",void 0),u=e([n("esri.views.3d.layers.DimensionLayerView3D")],u);const _=u;

export { _ as default };
