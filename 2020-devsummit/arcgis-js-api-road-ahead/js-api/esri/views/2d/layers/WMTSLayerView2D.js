// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/support/webMercatorUtils ./BitmapTileLayerView2D ./LayerView2D ../tiling/TileInfoView ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),function(z,A,m,g,k,l,n,e,p,q,r,t,u,v,
w,x){var y=[102113,102100,3857,3785,900913];return function(h){function a(){var b=null!==h&&h.apply(this,arguments)||this;b._handles=new n;b._tileStrategy=null;b._fetchQueue=null;b._tileRequests=new Map;b.layer=null;return b}m(a,h);Object.defineProperty(a.prototype,"tileMatrixSet",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var b=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);if(!b)return null;this.layer.activeLayer.tileMatrixSetId=
b.id;return b},enumerable:!0,configurable:!0});a.prototype.hitTest=function(){return null};a.prototype.update=function(b){this._fetchQueue.pause();this._fetchQueue.state=b.state;this._tileStrategy.update(b);this._fetchQueue.resume();this.notifyChange("updating")};a.prototype.attach=function(){var b=this,c=this.layer.activeLayer,a=this.tileMatrixSet;if(a){var d=a.tileInfo.spatialReference,c=c.fullExtent&&c.fullExtent.clone();d.isWebMercator?c=p.geographicToWebMercator(c):d.isWGS84||(c=a.fullExtent);
this._tileInfoView=new t(a.tileInfo,c);this._fetchQueue=new u({tileInfoView:this._tileInfoView,process:function(c){return b.fetchTile(c)}});this._tileStrategy=new v({cachePolicy:"keep",acquireTile:function(c){return b.acquireTile(c)},releaseTile:function(c){return b.releaseTile(c)},tileInfoView:this._tileInfoView});this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return b._refresh()}));this.inherited(arguments)}};a.prototype.detach=function(){this.inherited(arguments);
this._handles.removeAll();this._tileStrategy.destroy();this._fetchQueue.clear();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};a.prototype.moveStart=function(){this.requestUpdate()};a.prototype.viewChange=function(){this.requestUpdate()};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.doRefresh=function(){return l(this,void 0,void 0,function(){return k(this,function(b){if(this.updateRequested||this.suspended)return[2];this._refresh();return[2]})})};a.prototype.isUpdating=
function(){return 0<this._fetchQueue.length};a.prototype.acquireTile=function(b){var c=this,a,d=this._bitmapView.createTile(b),f=d.bitmap;a=this._tileInfoView.getTileCoords([0,0],d.key);f.x=a[0];f.y=a[1];f.resolution=this._tileInfoView.getTileResolution(d.key);a=this._tileInfoView.tileInfo.size;f.width=a[0];f.height=a[1];this._tileInfoView.getTileCoords(f,d.key);var e={id:b.id,fulfilled:!1,promise:this._fetchQueue.push(d.key).then(function(b){d.bitmap.source=b;d.once("attach",function(){return c.requestUpdate()});
c._bitmapView.addChild(d)}).catch(function(){d.bitmap.source=null;d.once("attach",function(){return c.requestUpdate()});c._bitmapView.addChild(d)})};e.promise.then(function(){return e.fulfilled=!0},function(){return e.fulfilled=!0});this._tileRequests.set(d,e);this.requestUpdate();return d};a.prototype.releaseTile=function(b){var a=this._tileRequests.get(b);a.fulfilled||this._fetchQueue.abort(a.id);this._tileRequests.delete(b);this._bitmapView.removeChild(b);this.requestUpdate()};a.prototype.fetchTile=
function(b){return l(this,void 0,void 0,function(){return k(this,function(a){return[2,this.layer.fetchTile(b.level,b.row,b.col)]})})};a.prototype.canResume=function(){var b=this.inherited(arguments);return b?null!==this.tileMatrixSet:b};a.prototype._refresh=function(){var b=this;this._fetchQueue.reset();this._tileStrategy.tiles.forEach(function(a){if(a.bitmap.source){a.bitmap.source=null;var c={id:a.key.id,fulfilled:!1,promise:b._fetchQueue.push(a.key).then(function(c){a.bitmap.source=c;a.requestRender();
b.notifyChange("updating")})};c.promise.then(function(){return c.fulfilled=!0},function(){return c.fulfilled=!0});b._tileRequests.set(a,c)}});this.notifyChange("updating")};a.prototype._getTileMatrixSetBySpatialReference=function(a){var b=this.view.spatialReference,e=a.tileMatrixSets.find(function(a){return a.tileInfo.spatialReference.wkid===b.wkid});!e&&b.isWebMercator&&(e=a.tileMatrixSets.find(function(a){return-1<y.indexOf(a.tileInfo.spatialReference.wkid)}));return e};g([e.property({dependsOn:["tileMatrixSet"]})],
a.prototype,"suspended",void 0);g([e.property({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],a.prototype,"tileMatrixSet",null);return a=g([e.subclass("esri.views.2d.layers.WMTSLayerView2D")],a)}(e.declared(x.RefreshableLayerView(q.BitmapTileLayerView2D(r.LayerView2D(w)))))});