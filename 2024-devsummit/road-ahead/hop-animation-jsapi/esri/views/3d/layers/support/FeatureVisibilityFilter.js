// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/asyncUtils ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/support/UpdatingHandles ../../../../layers/support/FeatureFilter ../../../../layers/support/floorFilterUtils ../graphics/QueryEngine ../../../support/Scheduler ../../../support/Yield".split(" "),
function(a,b,k,l,m,h,n,p,d,y,z,q,r,t,u,v,w,x){a.FeatureVisibilityFilter=class extends k{constructor(e){super(e);this._queryEngine=this._frameTask=this._updateTask=null;this._updateRequested=!0;this._updatingHandles=new r.UpdatingHandles;this._updateVisibility=async g=>{if(null==this._compositedFeatureFilter&&null==this._sceneFilter||0===this.context.getFeatureCount())return this._frameTask.schedule(()=>this.clear(),g);try{const c=await this._queryEngine.executeQueryForIdSet(this._compositedFeatureFilter,
this._sceneFilter,g);return this._frameTask.schedule(()=>{this.context.updateFeatureVisibilities(f=>c.has(f))},g)}catch(c){return n.throwIfAbortError(c),m.getLogger(this).warn(`FeatureFilter query failed: ${c}`,{error:c}),this._frameTask.schedule(()=>{this.context.setAllFeaturesVisibility(!0)},g)}}}initialize(){const e=w.TaskPriority.FILTER_VISIBILITY,{layer:g,view:c}=this._layerView,{featureStore:f}=this.context;this._queryEngine=new v.QueryEngine({context:{spatialReference:c.spatialReference,layer:g,
scheduler:c.resourceController.scheduler,featureStore:f,hasM:"hasM"in this._layerView?this._layerView.hasM:!1,hasZ:"hasZ"in this._layerView?this._layerView.hasZ:!1},priority:e});this._frameTask=this._layerView.view.resourceController.scheduler.registerTask(e,this);this._updatingHandles.add(()=>[this._compositedFeatureFilter,this._sceneFilter],()=>this.reapply(),p.initial)}destroy(){this._updateRequested=!1;this._updatingHandles.destroy();this.clear();this._updateTask=h.abortMaybe(this._updateTask);
this._frameTask=h.removeMaybe(this._frameTask);this._queryEngine=h.destroyMaybe(this._queryEngine);this._set("context",null)}get updating(){return this.running||this._updatingHandles.updating||null!=this._updateTask&&!this._updateTask.finished}get running(){return this._updateRequested||this._frameTask.updating}get defaultVisibility(){return null==this._compositedFeatureFilter&&null==this._sceneFilter}get _featureFilter(){return"filter"in this._layerView?this._layerView.filter:null}get _sceneFilter(){return"layerFilter"in
this._layerView?this._layerView.layerFilter:null}get _floorFilter(){return u.getFloorFilterClause(this._layerView)}get _timeExtent(){return"timeExtent"in this._layerView?this._layerView.timeExtent:null}get _compositedFeatureFilter(){const {_featureFilter:e,_timeExtent:g,_floorFilter:c}=this;if(null==g&&null==c)return e;const f=null!=e?e.clone():new t;null!=g&&(f.timeExtent=null!=f.timeExtent?f.timeExtent.intersection(g):g);null!=c&&(f.where=null==f.where||""===f.where?c:`(${f.where}) AND (${c})`);
return f}get _layerView(){return this.context.layerView}reapply(){this._updateRequested=!0}clear(){this._queryEngine.clear();this.context.clearFeaturesVisibility()}runTask(e){this._updateRequested&&(this._updateTask=h.abortMaybe(this._updateTask),this._updateTask=l.createTask(this._updateVisibility),this._updateRequested=!1,e.madeProgress());this._frameTask.processQueue(e);if(!e.hasProgressed)return x.Yield}};b.__decorate([d.property({constructOnly:!0})],a.FeatureVisibilityFilter.prototype,"context",
void 0);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"updating",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"running",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"defaultVisibility",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_featureFilter",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_sceneFilter",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_floorFilter",
null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_timeExtent",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_compositedFeatureFilter",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_layerView",null);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_updateTask",void 0);b.__decorate([d.property()],a.FeatureVisibilityFilter.prototype,"_updateRequested",void 0);a.FeatureVisibilityFilter=b.__decorate([q.subclass("esri.views.3d.layers.support.FeatureVisibilityFilter")],
a.FeatureVisibilityFilter);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});