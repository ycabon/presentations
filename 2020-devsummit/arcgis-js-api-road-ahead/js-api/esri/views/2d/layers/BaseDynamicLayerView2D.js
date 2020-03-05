// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators ./BitmapLayerView2D ./LayerView2D ./support/ExportStrategy ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),function(t,u,e,c,f,g,h,k,b,l,m,n,p,q){var r=h.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");
return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}e(a,d);a.prototype.hitTest=function(){return null};a.prototype.update=function(a){this.strategy.update(a).catch(function(a){k.isAbortError(a)||r.error(a)});this.notifyChange("updating")};a.prototype.attach=function(){this.strategy=new n({container:this.container,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})};a.prototype.detach=function(){this.strategy.destroy();this.strategy=
null;this.container.removeAllChildren()};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.fetchBitmapData=function(a,b,c){return this.layer.fetchImage(a,b,c,{timestamp:this.refreshTimestamp})};a.prototype.doRefresh=function(){return g(this,void 0,void 0,function(){return f(this,function(a){this.requestUpdate();return[2]})})};a.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};
c([b.property()],a.prototype,"strategy",void 0);c([b.property({dependsOn:["strategy.updating"]})],a.prototype,"updating",void 0);return a=c([b.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],a)}(b.declared(q.RefreshableLayerView(l.BitmapLayerView2D(m.LayerView2D(p)))))});