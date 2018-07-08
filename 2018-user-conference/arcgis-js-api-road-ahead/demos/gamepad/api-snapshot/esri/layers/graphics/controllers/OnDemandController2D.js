// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Error ../../../core/Evented ../../../core/Handles ../../../core/Logger ../../../core/Promise ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../geometry/support/aaBoundingRect ./support/TileSet ../../support/GraphicsManager ../../support/TileInfo ../../../views/2d/tiling/TileInfoView ../../../views/2d/tiling/TileKey ../../../views/2d/tiling/TileQueue ../../../views/2d/tiling/TileStrategy".split(" "),
function(G,H,n,h,p,q,r,t,u,v,k,f,w,x,y,z,A,B,C,D){var E=u.getLogger("esri.views.2d.layers.MapImageLayerView2D"),F=function(){function f(){this.key=new B(0,0,0,0)}f.prototype.dispose=function(){};return f}();return function(l){function c(a){var b=l.call(this)||this;b._handles=new t;b._pendingQueries=new Map;b._tileRequests=new Map;b.layer=a.layer;b.layerView=a.layerView;b.graphics=a.graphics;b._tileInfo=z.create({spatialReference:b.layerView.view.spatialReference,size:512});b._tileInfoView=new A(b._tileInfo);
b._tileQueue=new C({tileInfoView:b._tileInfoView,process:function(a){return b._fetchTile(a)}});b._tileSet=new x({layer:b.layer,tileInfo:b._tileInfo});b._graphicsManager=new y({graphics:b.graphics,objectIdField:b.layer.objectIdField});b._tileStrategy=new D({cachePolicy:"purge",acquireTile:function(a){return b._acquireTile(a)},releaseTile:function(a){return b._releaseTile(a)},tileInfoView:b._tileInfoView});b._handles.add([b.layer.watch("outFields",function(a,e){a&&e?-1===e.indexOf("*")&&(a.sort(),e.sort(),
JSON.stringify(a)!==JSON.stringify(e)&&b.refresh()):b.refresh()}),b.layer.watch("definitionExpression, historicMoment",function(){return b.refresh()}),b.layer.on("edits",function(a){return b._editsHandler(a)})],"layer");return b}n(c,l);c.prototype.destroy=function(){var a=this;this._pendingQueries.forEach(function(a){a.isFulfilled()||a.cancel()});this._tileStrategy.tiles.forEach(function(b){return a._releaseTile(b)});this._handles.destroy();this._graphicsManager.destroy();this._tileStrategy.destroy();
this._tileQueue.clear();this._tileRequests.clear()};Object.defineProperty(c.prototype,"graphics",{set:function(a){var b=this,d=this._get("graphics");d!==a&&(this._handles.remove("graphics"),d&&d.forEach(function(a){a.layer=null;a.sourceLayer=null}),a&&(a.forEach(function(a){a.layer=b.layer;a.sourceLayer=b.layer}),this._handles.add([a.on("after-add",function(a){a.item.layer=b.layer;a.item.sourceLayer=b.layer}),a.on("after-remove",function(a){a.item.layer=null;a.item.sourceLayer=null})],"graphics")),
this._set("graphics",a))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"updating",{get:function(){return 0<this._tileQueue.length||this.get("_graphicsManager.updating")},enumerable:!0,configurable:!0});c.prototype.update=function(a){var b=this;this._tileQueue.pause();this._tileQueue.state=a.state;this._tileStrategy.update(a);var d=this.layer.objectIdField,e=new Map;a=this._tileStrategy.tiles.reduce(function(a,g){if(g.featureSet){var c=b._graphicsManager.findIntent(g.intentId);
g.featureSet.features.forEach(function(b){b&&b.attributes&&(e.set(b.attributes[d],c),a.push(b))})}return a},[]);this._graphicsManager.update(a,e);this._tileQueue.resume();this.notifyChange("updating")};c.prototype.refresh=function(){var a=this;this._tileQueue.reset();this._tileStrategy.tiles.forEach(function(b){var d=a._graphicsManager.createIntentToAdd();a.notifyChange("updating");var e=a._tileSet.fetch(b.key).then(function(e){b.intentId=d;b.featureSet=e;a._graphicsManager.add(b.featureSet.features,
b.intentId);return b});e.always(function(){a._graphicsManager.removeIntent(d);a.notifyChange("updating")});return e});this.notifyChange("updating")};c.prototype._acquireTile=function(a){var b=this,d=new F;d.key.set(a);a=this._tileQueue.push(d.key).then(function(a){d.attached=!0;d.featureSet=a.featureSet;d.intentId=a.intentId;b._graphicsManager.removeIntent(d.intentId);b.layerView.requestUpdate()});this._tileRequests.set(d,a);this.notifyChange("updating");return d};c.prototype._releaseTile=function(a){if(this._tileRequests.has(a)){var b=
this._tileRequests.get(a);b.isFulfilled()||b.cancel();this._tileRequests.delete(a);this.layerView.requestUpdate()}};c.prototype._fetchTile=function(a){var b=this,d=this._graphicsManager.createIntentToAdd();a=this._tileSet.fetch(a).then(function(a){for(var b=Date.now(),e=0,c=a.features;e<c.length;e++)c[e]._ts=b;return{featureSet:a,intentId:d}});a.catch(function(a){b._graphicsManager.removeIntent(d);if(a&&"cancel"===a.dojoType)return k.reject(a);a=new q("ondemandcontroller2d:tile-request-failed","Failed to query for features",
{error:a});E.error(a);return k.reject(a)});return a};c.prototype._editsHandler=function(a){var b=this,d=function(a){return a.objectId},e=a.deletedFeatures.map(d);this._graphicsManager.delete(e);a=a.addedFeatures.concat(a.updatedFeatures).map(d);if(a.length){d=this.layer.createQuery();d.objectIds=a;d.outSpatialReference=this._tileInfo.spatialReference;var c=this._graphicsManager.createIntentToAdd(a);a=this.layer.queryFeatures(d);this._pendingQueries.set(c,a);this.notifyChange("updating");a.then(function(a){return b._refetchHandler(a,
c)}).always(function(){b._graphicsManager.removeIntent(c);b._pendingQueries.delete(c);b.notifyChange("updating")})}};c.prototype._refetchHandler=function(a,b){var d=this,c=a.features;if(c){var f=this._tileInfo.spatialReference;a=function(a){var b=w.toExtent(a.key.extent,f);c.forEach(function(c){c.geometry&&b.intersects(c.geometry)&&d._addFeatureToTile(c,a)})};for(var g=0,m=this._tileStrategy.tiles;g<m.length;g++)a(m[g]);this._graphicsManager.add(c,b)}};c.prototype._addFeatureToTile=function(a,b){var c=
b.featureSet.features||[],e=this.layer.objectIdField,f=a.attributes&&a.attributes[e],g;c.some(function(a){(a.attributes&&a.attributes[e])===f&&(g=a);return!!g});g?(g.geometry=a.geometry,g.attributes=a.attributes):c.push(a);b.featureSet.features=c};h([f.property()],c.prototype,"graphics",null);h([f.property()],c.prototype,"layer",void 0);h([f.property()],c.prototype,"layerView",void 0);h([f.property()],c.prototype,"updating",null);return c=h([f.subclass("esri.layers.graphics.controllers.OnDemandController2D")],
c)}(f.declared(p,v,r))});