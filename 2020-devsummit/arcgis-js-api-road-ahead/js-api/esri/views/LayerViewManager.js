// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/Error ../core/HandleOwner ../core/Logger ../core/promiseUtils ../core/scheduling ../core/watchUtils ../core/accessorSupport/decorators ./support/WatchUpdatingTracking".split(" "),function(t,u,v,p,w,x,q,y,z,k,A,B,m,C){Object.defineProperty(u,"__esModule",{value:!0});var D=z.getLogger("esri.views.LayerViewManager"),r=new Map;r.set("view.map.basemap.baseLayers",
"view.basemapView.baseLayerViews");r.set("view.map.ground.layers","view.groundView.layerViews");r.set("view.map.layers","view.layerViews");r.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews");var E=function(){function l(c,b,a){var d=this;this.layer=c;this.view=b;this.layerViewImporter=a;this._controller=k.createAbortController();this._deferred=k.createDeferred();this.done=this._started=!1;k.onAbort(this._controller.signal,function(){var a=new q("cancelled:layerview-create",
"layerview creation cancelled",{layer:c});d._deferred.reject(a)})}Object.defineProperty(l.prototype,"promise",{get:function(){return this._deferred.promise},enumerable:!0,configurable:!0});l.prototype.destroy=function(){this._controller.abort();var c=this.layerView;if(c){var b=this.layer,a=this.view;c.destroy();b.emit("layerview-destroy",{view:a,layerView:c});a.emit("layerview-destroy",{layer:b,layerView:c});this.done=!0;this.layerViewImporter=this.view=this.layerView=this.layer=null;c.layer=null;
c.parent=null;c.view=null}};l.prototype.start=function(){return x(this,void 0,void 0,function(){var c,b,a,d,e,h,n,f;return w(this,function(g){switch(g.label){case 0:if(this._started)return[2];this._started=!0;c=this;b=c._controller.signal;a=c.layer;d=c.view;this._map=d.map;g.label=1;case 1:return g.trys.push([1,10,,11]),[4,a.load({signal:b})];case 2:return g.sent(),"prefetchResources"in a?[4,a.prefetchResources({signal:b})]:[3,4];case 3:g.sent(),g.label=4;case 4:return e=void 0,a.createLayerView?
[4,a.createLayerView(d,{signal:b})]:[3,6];case 5:return e=g.sent(),[3,8];case 6:if(!this.layerViewImporter.hasLayerViewModule(a))throw new q("layer:view-not-supported","No layerview implementation was found");return[4,this.layerViewImporter.importLayerView(a)];case 7:h=g.sent(),k.throwIfAborted(b),e="default"in h?new h.default({layer:a,view:d}):new h({layer:a,view:d}),g.label=8;case 8:return k.throwIfAborted(b),[4,e.when()];case 9:g.sent();n=this._map&&this._map.allLayers.includes(a);if(!n||b.aborted)return e.destroy(),
e.layer=e.parent=e.view=null,this.done=!0,n?[2]:[2,this._deferred.reject(new q("view:no-layerview-for-layer","The layer has been removed from the map",{layer:a}))];this.layerView=e;a.emit("layerview-create",{view:d,layerView:e});d.emit("layerview-create",{layer:a,layerView:e});this.done=!0;this._deferred.resolve(e);return[3,11];case 10:return f=g.sent(),a.emit("layerview-create-error",{view:d,error:f}),d.emit("layerview-create-error",{layer:a,error:f}),this.done=!0,this._deferred.reject(new q("layerview:create-error",
"layerview creation failed",{layer:a,error:f})),[3,11];case 11:return[2]}})})};return l}();t=function(l){function c(b){var a=l.call(this,b)||this;a._layerLayerViewInfoMap=new Map;a._watchUpdatingTracking=new C.WatchUpdatingTracking;a.view=null;a._preloadLayerViewModules=function(){var b=a.view,c=a.get("view.map.allLayers");b&&c&&c.forEach(function(b){a.layerViewImporter.hasLayerViewModule(b)&&a.layerViewImporter.importLayerView(b)})};a._reschedule=function(){a.handles.remove("reschedule");a.handles.add(A.schedule(a._doWork),
"reschedule");a.notifyChange("updating")};a._doWork=function(){var b=a.get("view.map");a._map!==b&&(a.clear(),a._map=b);if(a.handles.has("reschedule")){a.handles.remove("reschedule");a.handles.remove("collection-change");var c=b&&b.allLayers;if(c){c.forEach(a._createLayerView,a);a._refreshCollections();var h=[];a._layerLayerViewInfoMap.forEach(function(a,b){c.includes(b)||h.push(a)});for(b=0;b<h.length;b++){var n=h[b];a._layerLayerViewInfoMap.delete(n.layer);n.destroy()}a.handles.add(a._watchUpdatingTracking.addOnCollectionChange(c,
a._reschedule),"collection-change");a.notifyChange("updating")}}};a.handles.add([B.on(a,"view.map.allLayers","change",a._preloadLayerViewModules,a._preloadLayerViewModules),a.watch(["view.map.basemap","view.map.ground","view.map.layers","view.ready"],a._reschedule,!0)]);return a}v(c,l);c.prototype.initialize=function(){this._preloadLayerViewModules()};c.prototype.destroy=function(){this.clear();this._watchUpdatingTracking.destroy();this._map=this.view=null};Object.defineProperty(c.prototype,"updating",
{get:function(){if(this.handles.has("reschedule")||this._watchUpdatingTracking.updating)return!0;var b=!0;this._layerLayerViewInfoMap.forEach(function(a){return b=b&&a.done});return!b},enumerable:!0,configurable:!0});c.prototype.clear=function(){this.destroyed||(this._layerLayerViewInfoMap.forEach(function(b){return b.destroy()}),this._layerLayerViewInfoMap.clear(),this._refreshCollections())};c.prototype.whenLayerView=function(b){this._reschedule();this._doWork();return this._layerLayerViewInfoMap.has(b)?
this._layerLayerViewInfoMap.get(b).promise:k.reject(new q("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:b}))};c.prototype._refreshCollections=function(){var b=this;r.forEach(function(a,c){b._populateLayerViewsOwners(b.get(c),b.get(a),b.view)})};c.prototype._populateLayerViewsOwners=function(b,a,c){var e=this;if(b&&a){var d=0;b.forEach(function(b){var f=e._layerLayerViewInfoMap.get(b);f&&f.layerView&&(f=f.layerView,f.layer=b,f.parent=c,a.getItemAt(d)!==f&&a.splice(d,
0,f),b.layers&&e._populateLayerViewsOwners(b.layers,f.layerViews,f),d+=1)});d<a.length&&a.splice(d,a.length)}else a&&a.removeAll()};c.prototype._createLayerView=function(b){var a=this;if(this._layerLayerViewInfoMap.has(b))this.view.ready&&this._layerLayerViewInfoMap.get(b).start();else{b.load().catch(function(){});this.layerViewImporter.hasLayerViewModule(b)&&this.layerViewImporter.importLayerView(b);var c=new E(b,this.view,this.layerViewImporter);c.promise.then(function(){a._refreshCollections();
a.notifyChange("updating")},function(c){c&&(k.isAbortError(c)||"cancelled:layerview-create"===c.name)||D.error("Failed to create view for layer '"+b.title+", id:"+b.id+"' of type '"+b.type+"'.",{error:c});a._refreshCollections();a.notifyChange("updating")});this._layerLayerViewInfoMap.set(b,c);this.view.ready&&c.start()}this.notifyChange("updating")};p([m.property({readOnly:!0})],c.prototype,"_watchUpdatingTracking",void 0);p([m.property()],c.prototype,"layerViewImporter",void 0);p([m.property({readOnly:!0,
dependsOn:["_watchUpdatingTracking.updating"]})],c.prototype,"updating",null);p([m.property()],c.prototype,"view",void 0);return c=p([m.subclass("esri.views.LayerViewManager")],c)}(m.declared(y.HandleOwner));u.default=t});