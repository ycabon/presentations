// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Collection ../../../core/Logger ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/sql ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ./LayerView2D ../../layers/LayerView".split(" "),function(n,p,q,r,l,t,h,y,z,u,v,w){const f=Symbol();h=class extends v.LayerView2DMixin(w){constructor(){super(...arguments);this.layerViews=new p;this._debouncedUpdate=r.debounce(async()=>
{const {layer:a,parent:{footprintLayerView:c}}=this;let g=[];if(c){var d=this._createQuery();({features:d}=await c.queryFeatures(d));this.suspended||(g=d.map(k=>a.acquireLayer(k)))}this.removeHandles(f);this.addHandles(g,f)})}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0}),l.when(()=>!1===this.parent.footprintLayerView?.dataUpdating,()=>this._updateLayers()),l.watch(()=>[this.layer.maximumVisibleSublayers,
this.suspended,this.parent.footprintLayerView?.filter],()=>this._updateLayers())])}detach(){this.container.removeAllChildren();this.removeHandles(f)}update(a){}moveStart(){}viewChange(){}moveEnd(){}isUpdating(){return this.layerViews.some(a=>a.updating)}_updateStageChildren(){this.container.removeAllChildren();this.layerViews.forEach((a,c)=>this.container.addChildAt(a.container,c))}_updateLayers(){this.suspended?this.removeHandles(f):this._updatingHandles.addPromise(this._debouncedUpdate().catch(a=>
{q.getLogger(this).error(a)}))}_createQuery(){const {parent:{footprintLayerView:a},layer:{maximumVisibleSublayers:c,parent:{itemTypeField:g,itemSourceField:d,objectIdField:k,orderBy:x}}}=this;var e=`${g} <> 'Scene Service'`;const b=a.createQuery();b.returnGeometry=!1;b.num=c;b.outFields=[k,d];b.where=t.sqlAnd(b.where,e);e=x?.find(m=>m.field&&!m.valueExpression);e?.field&&(b.orderByFields=[`${e.field} ${"descending"===e.order?"DESC":"ASC"}`]);return b}};return h=n.__decorate([u.subclass("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],
h)});