// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/PooledArray ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../state/helpers/SceneIntersectionHelper ./lib/ChangeSet ./lib/UpdatePolicy ./lib/WebGLLayer ./parts/Model ./parts/RenderView ../../support/Scheduler ../../support/Yield".split(" "),function(c,e,q,r,t,f,y,z,A,u,l,m,h,n,v,
w,g,x){c.Stage=class extends q{constructor(a){super(a);this._model=new v.Model;this._layers=new r;this._asyncChangeSet=new m.ChangeSet;this._syncChangeSet=new m.ChangeSet;this._layerSyncSet=new Set}initialize(){this._set("renderView",new w.RenderView(this));this._frameTask=this.view.resourceController.scheduler.registerTask(g.TaskPriority.STAGE,this);this.addHandles(this._frameTask)}destroy(){this.renderView.destroy()}get viewingMode(){return this.view.state.viewingMode}get updating(){return this.running||
this.renderView.updating||this._frameTask.updating}get renderer(){return this.renderView?.renderer}add(a){this._model.add(a);n.isWebGLLayer(a)&&this._addLayer(a);this.renderView.requestRender()}remove(a){null!=a&&!this.destroyed&&this._model.remove(a)&&(n.isWebGLLayer(a)&&this._removeLayer(a),this.renderView.requestRender())}addMany(a){null!=a&&(this._model.addMany(a),this.renderView.requestRender())}removeMany(a){null!=a&&(this._model?.removeMany(a),this.renderView?.requestRender())}forEachOfType(a,
b){this._model.forEachOfType(a,b)}handleEvent(a,b){this.destroyed||(this._model.dirtySet[a](b),this.renderView.requestRender())}get running(){return this._model.dirtySet.dirty||!this._asyncChangeSet.empty}runTask(a){this._frameTask.processQueue(a);this._commit(a);if(!a.hasProgressed)return x.Yield}_commit(a){const b=this._model.dirtySet;this._asyncChangeSet.empty||a.done||(this.renderer.modify(this._asyncChangeSet,a),this.renderView.requestRender(),a.madeProgress());this._layers.forAll(d=>{if(!a.done){var p=
this._layerSyncSet.has(d.id)||d.updatePolicy===h.UpdatePolicy.SYNC,k=p?this._syncChangeSet:this._asyncChangeSet;b.commitLayer(d.id,k);this._layerSyncSet.delete(d.id);k.empty||(this.renderer.modify(k,p?g.noBudget:a),this.renderView.requestRender(),a.madeProgress())}});this._syncChangeSet.empty||(this.renderer.modify(this._syncChangeSet,g.noBudget),this.renderView.requestRender(),a.madeProgress());this._layers.forAll(d=>{a.done||this._layerSyncSet.has(d.id)||d.updatePolicy!==h.UpdatePolicy.ASYNC||(b.commitLayer(d.id,
this._asyncChangeSet),this._asyncChangeSet.empty||(this.renderer.modify(this._asyncChangeSet,a),this.renderView.requestRender(),a.madeProgress()))});this._layerSyncSet.clear();this.notifyChange("running")}commitSyncLayers(){const a=this._model.dirtySet;this._layers.forAll(b=>{this._layerSyncSet.has(b.id)||b.updatePolicy===h.UpdatePolicy.SYNC?(a.commitLayer(b.id,this._syncChangeSet),this._layerSyncSet.delete(b.id)):a.commitSyncUpdates(b.id,this._syncChangeSet)});for(const b of this._layerSyncSet)a.commitLayer(b,
this._syncChangeSet);this._layerSyncSet.clear();this._syncChangeSet.empty||(this.renderer.modify(this._syncChangeSet,g.noBudget),this.renderView.requestRender())}_commitLayer(a){this._model.dirtySet.commitLayer(a.id,this._syncChangeSet);this._layerSyncSet.delete(a.id);this._syncChangeSet.empty||(this.renderer.modify(this._syncChangeSet,g.noBudget),this.renderView.requestRender())}schedule(a,b){return this._frameTask.schedule(a,b)}reschedule(a,b){return this._frameTask.reschedule(a,b)}syncLayer(a){this._layerSyncSet.add(a);
this.renderView.requestRender()}getObject(a){return this._model.getObject(a)}get layers(){return this._layers}_addLayer(a){this._layers.includes(a)||this._layers.push(a)}_removeLayer(a){this._commitLayer(a);null!=this._layers.removeUnordered(a)&&(this._model.dirtySet.getResidentRenderGeometries(a.id,this._syncChangeSet.removes),this.renderer.modify(this._syncChangeSet,g.noBudget))}addRenderPlugin(a,b){b=this.renderer.plugins.add(a,b);const d=()=>{l.isIntersectionHandler(a)&&this.view.sceneIntersectionHelper.addIntersectionHandler(a)};
if(t.isPromiseLike(b))return b.then(d);d()}removeRenderPlugin(a){this.destroyed||(l.isIntersectionHandler(a)&&this.view.sceneIntersectionHelper.removeIntersectionHandler(a),this.renderer.plugins.remove(a))}get performanceInfo(){return this._model.getStats()}get test(){const a=this;return{getCount(b){return a._model.test.content.filter(d=>d.type===b).length},model:a._model}}};c.Stage.DebugSettings={endFrameContentValidation:!1};e.__decorate([f.property({constructOnly:!0})],c.Stage.prototype,"view",
void 0);e.__decorate([f.property({constructOnly:!0})],c.Stage.prototype,"options",void 0);e.__decorate([f.property({readOnly:!0})],c.Stage.prototype,"viewingMode",null);e.__decorate([f.property({constructOnly:!0})],c.Stage.prototype,"container",void 0);e.__decorate([f.property({readOnly:!0})],c.Stage.prototype,"updating",null);e.__decorate([f.property({constructOnly:!0})],c.Stage.prototype,"_model",void 0);e.__decorate([f.property()],c.Stage.prototype,"renderView",void 0);e.__decorate([f.property({readOnly:!0})],
c.Stage.prototype,"renderer",null);e.__decorate([f.property({readOnly:!0})],c.Stage.prototype,"running",null);c.Stage=e.__decorate([u.subclass("esri.views.3d.webgl-engine.Stage")],c.Stage);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});