// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Graphic ../../../request ../../../core/Collection ../../../core/Handles ../../../core/promiseUtils ../../../core/scheduling ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../geometry/support/webMercatorUtils ../../../layers/support/kmlUtils ../engine ./LayerView2D ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),
function(F,G,u,g,v,w,x,y,r,z,h,A,B,f,C,t,l,m,D,n,E){var p=r.ofType(x);return function(q){function b(){var a=null!==q&&q.apply(this,arguments)||this;a._handles=new z;a._bitmapIndex=new Map;a._mapImageContainer=new m.BitmapContainer(a.clips);a._featuresMap=new Map;a.allVisiblePoints=new p;a.allVisiblePolylines=new p;a.allVisiblePolygons=new p;a.allVisibleMapImages=new r;a.container=new m.Container;return a}u(b,q);b.prototype.hitTest=function(a,d){var c=this;if(this.suspended||!this._pointsView&&!this._polylinesView&&
!this._polygonsView)return h.resolve(null);a=[this._pointsView.hitTest(a,d),this._polylinesView.hitTest(a,d),this._polygonsView.hitTest(a,d)];return h.all(a).then(function(a){return a.filter(function(a){a&&(a.layer=c.layer,a.sourceLayer=c.layer);return!!a})[0]||null})};b.prototype.update=function(a){this._polygonsView&&this._polygonsView.update(a);this._polylinesView&&this._polylinesView.update(a);this._pointsView&&this._pointsView.update(a)};b.prototype.attach=function(){var a=this;this._handles.add([this.allVisibleMapImages.on("change",
function(d){d.added.forEach(function(c){return a._addMapImage(c)});d.removed.forEach(function(c){return a._removeMapImage(c)})}),this.clips.on("change",function(){a._polygonsView.container.setClips(a.clips);a._polylinesView.container.setClips(a.clips);a._pointsView.container.setClips(a.clips);a._mapImageContainer.setClips(a.clips)})]);this.container.addChild(this._mapImageContainer);this._polygonsView=new n.default({view:this.view,graphics:this.allVisiblePolygons});this.container.addChild(this._polygonsView.container);
this._polylinesView=new n.default({view:this.view,graphics:this.allVisiblePolylines});this.container.addChild(this._polylinesView.container);this._pointsView=new n.default({view:this.view,graphics:this.allVisiblePoints});this.container.addChild(this._pointsView.container);this.watch("layer.visibleSublayers",function(){return a._refreshCollections()});this._fetchingPromise=this._fetchService().then(function(){a._fetchingPromise=null;a.notifyChange("updating")});this._polygonsView.container.setClips(this.clips);
this._polylinesView.container.setClips(this.clips);this._pointsView.container.setClips(this.clips);this._mapImageContainer.setClips(this.clips)};b.prototype.detach=function(){this._handles.removeAll();this._mapImageContainer.removeAllChildren();this.container.removeAllChildren();this._bitmapIndex.clear();this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null);this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null);this._pointsView&&(this._pointsView.destroy(),
this._pointsView=null)};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};b.prototype.moveEnd=function(){this.requestUpdate()};b.prototype.isUpdating=function(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating};b.prototype._addMapImage=function(a){var d=this;this.view.spatialReference.isWGS84&&y(a.href,{responseType:"image"}).then(function(c){c=c.data;var b=C.fromJSON(a.extent);
t.canProject(b,d.view.spatialReference)&&(b=t.project(b,d.view.spatialReference));var e=new m.Bitmap(c);e.x=b.xmin;e.y=b.ymax;e.resolution=b.width/c.naturalWidth;e.rotation=a.rotation;d._mapImageContainer.addChild(e);d._bitmapIndex.set(a,e)})};b.prototype._fetchService=function(){var a=this;this._handles.remove("refresh-collections");return this._getParsedKML().then(function(b){return a._fetchSublayerService(a.layer,b)})};b.prototype._fetchSublayerService=function(a,b){var c=this;a=a.sublayers;if(!a||
0===a.length)return h.resolve();var d=[];a.forEach(function(a){var e=B.whenTrueOnce(a,"visible").then(function(){return a.load()}).then(function(){return c._getGraphicsForSublayer(a,b)}).then(function(b){return h.create(function(d){a.networkLink?d():(c._featuresMap.set(a,b),c._handles.add(A.schedule(function(){c._refreshCollections();d()}),"refresh-collections"))})}).then(function(){return c._fetchSublayerService(a,a.sourceJSON||b)});a.visible&&d.push(e)});return h.all(d).then(function(){})};b.prototype._getParsedKML=
function(){return l.fetchService(this.layer.url,this.view.spatialReference,this.layer.refreshInterval).then(function(a){return l.parseKML(a.data)})};b.prototype._getGraphicsForSublayer=function(a,b){return w(this,void 0,void 0,function(){var c,d,e,f,g,h;return v(this,function(k){switch(k.label){case 0:c=null;d=b.sublayers.some(function(b){c=b;return b.id===a.id});if(!d)return[2,null];e={};return(f=c.points)?[4,l.getGraphics(c.points)]:[3,2];case 1:f=k.sent(),k.label=2;case 2:return e.points=f,(g=
c.polylines)?[4,l.getGraphics(c.polylines)]:[3,4];case 3:g=k.sent(),k.label=4;case 4:return e.polylines=g,(h=c.polygons)?[4,l.getGraphics(c.polygons)]:[3,6];case 5:h=k.sent(),k.label=6;case 6:return[2,(e.polygons=h,e.mapImages=c.mapImages,e)]}})})};b.prototype._refreshCollections=function(){var a=this,b=this.get("layer.visibleSublayers");this.allVisiblePoints.removeAll();this.allVisiblePolylines.removeAll();this.allVisiblePolygons.removeAll();this.allVisibleMapImages.removeAll();b&&b.length&&b.forEach(function(b){if(b=
a._featuresMap.get(b))a.allVisiblePoints.addMany(b.points),a.allVisiblePolylines.addMany(b.polylines),a.allVisiblePolygons.addMany(b.polygons),a.allVisibleMapImages.addMany(b.mapImages)})};b.prototype._removeMapImage=function(a){var b=this._bitmapIndex.get(a);b&&(this._mapImageContainer.removeChild(b),this._bitmapIndex.delete(a))};g([f.property()],b.prototype,"_pointsView",void 0);g([f.property()],b.prototype,"_polylinesView",void 0);g([f.property()],b.prototype,"_polygonsView",void 0);g([f.property()],
b.prototype,"_fetchingPromise",void 0);g([f.property({dependsOn:["_fetchingPromise","_pointsView.updating","_polygonsView.updating","_polylinesView.updating"]})],b.prototype,"updating",void 0);return b=g([f.subclass("esri.views.2d.layers.KMLLayerView2D")],b)}(f.declared(D.LayerView2D(E)))});