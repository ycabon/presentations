// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper dojo/Deferred ../../../../geometry ../../../../renderers ../../../../symbols ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/Error ../../../../core/Handles ../../../../core/Logger ../../../../core/PooledArray ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../layers/Layer ../../../../layers/graphics/dehydratedFeatures ../../../../renderers/support/diffUtils ../../../../renderers/support/rendererConversion ../../../../symbols/support/symbolConversion ../../../../symbols/support/unitConversionUtils ./ElevationQuery ./featureExpressionInfoUtils ./Graphics3DGraphic ./Graphics3DOwner ./Graphics3DSymbolFactory ./Graphics3DWebStyleSymbol ./graphicUtils ../../lib/glMatrix ../../support/mathUtils ../../support/projectionUtils ../../support/PropertiesPool ../../webgl-engine/Stage ../../webgl-engine/lib/FloatingBoxLocalOriginFactory ../../webgl-engine/lib/Layer".split(" "),
function(C,ja,O,f,P,Q,R,D,w,x,q,S,E,T,U,V,W,A,h,F,X,Y,G,Z,aa,H,ba,I,y,ca,da,ea,fa,J,K,r,u,ga,L,ha,ia){function M(e){(e=e.elevationInfo&&e.elevationInfo.unit)&&!ba.supportsUnit(e)&&n.warn("elevationInfo.unit","'"+e+"' is not a valid unit")}C=K.vec3d;var v=new D.Point,B=C.create(),e=F.create(),n=U.getLogger("esri.views.3d.layers.graphics.Graphics3DCore"),p;(function(e){e[e.ADD=0]="ADD";e[e.REMOVE=1]="REMOVE"})(p||(p={}));q=function(q){function d(a){a=q.call(this)||this;a.propertiesPool=new ga.PropertiesPool({computedExtent:D.Extent},
a);a.computedExtent=null;a.symbolCreationContext=new da.Graphics3DSymbolCreationContext;a.graphics={};a.stageLayer=null;a.stage=null;a.graphicsDrapedIds={};a.graphicsBySymbol={};a.graphicsKeys=[];a.symbols={};a.graphicsWithoutSymbol={};a.graphicsWaitingForSymbol=new Map;a.lastFastUpdate=null;a.tilingSchemeHandle=null;a.handles=new T;a.viewSR=null;a.elevationAlignment=null;a.scaleVisibility=null;a.spatialIndex=null;a.labeling=null;a.highlights=null;a.elevationQueryService=null;a.elevationQueryView=
null;a.sharedSymbolResourcesOwnerHandle=null;a.whenGraphics3DGraphicRequests={};a.pendingUpdates=[];a.pendingAdds=new Set;a.pendingRemoves=new Set;a.symbolWarningLogged=!1;a.geometryWarningLogged=!1;a.elevationFeatureExpressionEnabled=!0;a.owner=null;a.layer=null;a.hasDraped=!1;a.graphicTransformFunc=null;return a}O(d,q);z=d;Object.defineProperty(d.prototype,"updating",{get:function(){return!!(0<this.graphicsWaitingForSymbol.size||this.needsIdleUpdate()||this.elevationAlignment&&this.elevationAlignment.updating||
this.scaleVisibility&&this.scaleVisibility.updating)},enumerable:!0,configurable:!0});d.prototype.initialize=function(){this.viewSR=this.owner.view.spatialReference};d.prototype.setup=function(a){var b=this;this._set("elevationAlignment",a.elevationAlignment);this._set("scaleVisibility",a.scaleVisibility);this._set("spatialIndex",a.spatialIndex);this._set("labeling",a.labeling);this._set("highlights",a.highlights);var c=this.owner.view;this.elevationQueryService=new I.ElevationQuery(this.viewSR,function(){return c.map.ground},
{maximumAutoTileRequests:4});this.elevationQueryView=new I.ElevationQueryView(this.viewSR,c.basemapTerrain);this.initializeStage(c,this.layer.uid);this.symbolCreationContext.sharedResources=c.sharedSymbolResources;this.sharedSymbolResourcesOwnerHandle=c.sharedSymbolResources.addGraphicsOwner(this.owner);this.symbolCreationContext.renderer=this.layer.renderer;this.symbolCreationContext.stage=this.stage;this.symbolCreationContext.streamDataSupplier=c.sharedSymbolResources.streamDataSupplier;this.symbolCreationContext.renderSpatialReference=
c.renderSpatialReference;this.symbolCreationContext.renderCoordsHelper=c.renderCoordsHelper;this.symbolCreationContext.layer=this.layer;this.symbolCreationContext.layerView=this.owner;this.symbolCreationContext.layerOrder=0;this.symbolCreationContext.localOriginFactory=z.createLocalOriginFactory();this.symbolCreationContext.elevationProvider=c.elevationProvider;M(this.layer);a=y.extractExpressionInfo(this.layer.elevationInfo,this.elevationFeatureExpressionEnabled);this.symbolCreationContext.featureExpressionInfoContext=
y.createContext(a,this.viewSR,n);c.deconflictor.addGraphicsOwner(this);this.symbolCreationContext.screenSizePerspectiveEnabled=c.screenSizePerspectiveEnabled&&this.layer.screenSizePerspectiveEnabled;this.tilingSchemeHandle=A.when(this.basemapTerrain,"tilingScheme",function(a){a.spatialReference.equals(b.symbolCreationContext.overlaySR)||(b.symbolCreationContext.overlaySR=b.basemapTerrain.spatialReference,b.recreateAllGraphics())});this.handles.add(this.owner.watch("suspended",function(){return b.suspendedChange()}));
this.handles.add(this.owner.watch("layer"in this.owner?["layer.screenSizePerspectiveEnabled,view.screenSizePerspectiveEnabled"]:"view.screenSizePerspectiveEnabled",function(){var a=c.screenSizePerspectiveEnabled&&b.layer.screenSizePerspectiveEnabled;a!==b.symbolCreationContext.screenSizePerspectiveEnabled&&(b.symbolCreationContext.screenSizePerspectiveEnabled=a,b.recreateAllGraphics())}));this.handles.add(A.on(this.owner,"loadedGraphics","change",function(a){return b.graphicsCollectionChanged(a)},
function(){b.clearSymbolsAndGraphics();b.graphicsCollectionChanged({added:b.owner.loadedGraphics.toArray(),removed:[]})}));this.validateRenderer(this.layer.renderer)};d.prototype.destroy=function(){this.owner.view.deconflictor.removeGraphicsOwner(this);this.owner.view.labeler.removeGraphicsOwner(this);this.clear();this.stage&&(this.stage.removeFromViewContent([this.stageLayer.id]),this.stage.remove(L.ModelContentType.LAYER,this.stageLayer.id),this.stage=this.stageLayer=null);this.tilingSchemeHandle&&
(this.tilingSchemeHandle.remove(),this.tilingSchemeHandle=null);this.handles.destroy();this.viewSR=this.handles=null;this._set("owner",null);for(var a in this.whenGraphics3DGraphicRequests)this.whenGraphics3DGraphicRequests[a].reject(new E("graphic:layer-destroyed","Layer has been destroyed"));this.whenGraphics3DGraphicRequests=null;this.sharedSymbolResourcesOwnerHandle&&(this.sharedSymbolResourcesOwnerHandle.remove(),this.sharedSymbolResourcesOwnerHandle=null);this.propertiesPool&&(this.propertiesPool.destroy(),
this.propertiesPool=null)};d.prototype.clear=function(){for(var a in this.graphics)this.graphics[a].destroy();this.spatialIndex&&this.spatialIndex.clear();this.graphics={};this.graphicsKeys=null;for(var b in this.symbols)(a=this.symbols[b])&&a.destroy();this.graphicsWaitingForSymbol.forEach(function(a){a.reject()});this.symbols={};this.graphicsBySymbol={};this.graphicsWithoutSymbol={};this.graphicsWaitingForSymbol.clear();this.pendingUpdates=[];this.pendingAdds.clear();this.pendingRemoves.clear();
this._set("hasDraped",!1);this.notifyChange("updating")};d.prototype.initializeStage=function(a,b){this.stage=a._stage;this.stageLayer=new ia(b,{isPickable:!this.owner.suspended},b);this.stage.add(L.ModelContentType.LAYER,this.stageLayer);this.stage.addToViewContent([this.stageLayer.id])};d.prototype.setDrawingOrder=function(a){this.symbolCreationContext.layerOrder=a;var b=new Set,c;for(c in this.symbols){var l=this.symbols[c];l&&l.setDrawOrder(a,b)}0<b.size&&this.stage.getDrapedTextureRenderer().updateRenderOrder(b)};
d.prototype.suspendedChange=function(){!0===this.owner.suspended?(this.stageLayer.isPickable=!1,this.hideAllGraphics()):!1===this.owner.suspended&&(this.stageLayer.isPickable=!0,this.updateAllGraphicsVisibility())};Object.defineProperty(d.prototype,"graphics3DGraphics",{get:function(){return this.graphics},enumerable:!0,configurable:!0});d.prototype.getGraphics3DGraphicById=function(a){return this.graphics[a]};Object.defineProperty(d.prototype,"graphics3DGraphicsKeys",{get:function(){null===this.graphicsKeys&&
(this.graphicsKeys=Object.keys(this.graphics));return this.graphicsKeys},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"labelsEnabled",{get:function(){return!(!this.labeling||!this.labeling.layerLabelsEnabled())},enumerable:!0,configurable:!0});d.prototype.updateLabelingInfo=function(){return this.labeling&&this.labeling.updateLabelingInfo()};Object.defineProperty(d.prototype,"symbolUpdateType",{get:function(){if(0<this.pendingUpdates.length)return"unknown";var a=0,b=0,c;for(c in this.symbols){var l=
this.symbols[c];if(l){l=l.getFastUpdateStatus();if(0<l.loading)return"unknown";b+=l.fast;a+=l.slow}}return 0<=b&&0===a?"fast":0<=a&&0===b?"slow":"mixed"},enumerable:!0,configurable:!0});d.prototype.needsIdleUpdate=function(){return 0<this.pendingUpdates.length?!0:!!this.lastFastUpdate&&500<performance.now()-this.lastFastUpdate};d.prototype.idleUpdate=function(a){var b=this.needsIdleUpdate();this._applyPendingUpdates(a);!a.done()&&this.lastFastUpdate&&(this.labeling&&this.labeling.updateLabelingInfo(),
this.lastFastUpdate=null);a=this.needsIdleUpdate();b!==a&&this.notifyChange("updating")};d.prototype.whenGraphics3DGraphic=function(a){var b=this.graphics[a.uid];if(b)return W.resolve(b);b=this.whenGraphics3DGraphicRequests[a.uid];b||(b=new R,this.whenGraphics3DGraphicRequests[a.uid]=b);return b.promise};d.prototype.boundsForGraphics3DGraphic=function(a,b){return Q(this,void 0,void 0,function(){var c,l,d,e,m,N,h,f,k,n,p;return P(this,function(g){switch(g.label){case 0:return c=this.owner.view.spatialReference,
l=this.owner.view.renderSpatialReference,d=this.owner.view.basemapTerrain.spatialReference,e=function(a,b,d){return u.bufferToBuffer(a,l,b,a,c,b,d)},m=function(a,b,l){return u.bufferToBuffer(a,d,b,a,c,b,l)},N=b&&b.useViewElevation?this.elevationQueryView:this.elevationQueryService,h=null,N&&(h={service:b&&b.useViewElevation?this.elevationQueryView:this.elevationQueryService,minDemResolution:b&&b.minDemResolution,minDemResolutionForPoints:this.owner.view.resolution}),[4,a.getProjectedBoundingBox(e,
m,h)];case 1:f=g.sent();if(!f)return[2,null];k=f.boundingBox;f.requiresDrapedElevation&&(n=this.symbolCreationContext.elevationProvider)&&(F.center(k,B),v.x=B[0],v.y=B[1],v.z=void 0,v.spatialReference=c,p=n.getElevation(v)||0,k[2]=Math.min(k[2],p),k[5]=Math.max(k[5],p));return[2,{boundingBox:k,screenSpaceObjects:f.screenSpaceObjects}]}})})};d.prototype.whenGraphicBounds=function(a,b){var c=this;return A.whenOnce(this.owner,"loadedGraphics").then(function(){var b=c.owner.layer&&c.owner.layer.objectIdField,
d=c.owner.loadedGraphics.find(function(c){return c===a||b&&c.attributes&&a.attributes&&c.attributes[b]===a.attributes[b]?!0:!1});if(d)return c.whenGraphics3DGraphic(d);throw new E("internal:graphic-not-part-of-view","Graphic is not part of this view");}).then(function(a){return c.boundsForGraphics3DGraphic(a,b)})};d.prototype.graphicsCollectionChanged=function(a){this.add(a.added);this.remove(a.removed)};d.prototype.graphicUpdateHandler=function(a){if("visible"===a.property){var b=this.graphics[a.graphic.uid];
b&&b.setVisibilityFlag(0,a.newValue)&&this.labeling&&(this.lastFastUpdate=performance.now(),this.owner.view.deconflictor.setDirty(),this.owner.view.labeler.setDirty())}};d.prototype.beginGraphicUpdate=function(a,b){this.graphicsWaitingForSymbol.set(a.uid,b);1===this.graphicsWaitingForSymbol.size&&this.notifyChange("updating");this._get("symbolsUpdating")||this._set("symbolsUpdating",!0)};d.prototype.endGraphicUpdate=function(a){a&&(this.graphicsWaitingForSymbol.delete(a.uid),0===this.graphicsWaitingForSymbol.size&&
this.notifyChange("updating"));this._get("symbolsUpdating")&&0===this.graphicsWaitingForSymbol.size&&(this.owner.view.flushDisplayModifications(),this._set("symbolsUpdating",!1))};d.prototype.expandComputedExtent=function(a){var b=a.spatialReference;G.computeAABB(a,e);a=this.viewSR;var c=z.tmpVec;!b.equals(a)&&u.xyzToVector(e[0],e[1],0,b,c,a)&&(e[0]=c[0],e[1]=c[1],u.xyzToVector(e[3],e[4],0,b,c,a),e[3]=c[0],e[4]=c[1]);if(r.isFinite(e[0])&&r.isFinite(e[3])&&r.isFinite(e[1])&&r.isFinite(e[4])){var b=
this.computedExtent,c=null,d=r.isFinite(e[2])&&r.isFinite(e[5]),g=d&&(!b||null==b.zmin||e[2]<b.zmin),d=d&&(!b||null==b.zmax||e[5]>b.zmax);if(b){if(e[0]<b.xmin||e[1]<b.ymin||e[3]>b.xmax||e[4]>b.ymax||g||d)c=this.propertiesPool.get("computedExtent"),c.xmin=Math.min(e[0],b.xmin),c.ymin=Math.min(e[1],b.ymin),c.xmax=Math.max(e[3],b.xmax),c.ymax=Math.max(e[4],b.ymax),c.spatialReference=a}else c=this.propertiesPool.get("computedExtent"),c.xmin=e[0],c.ymin=e[1],c.xmax=e[3],c.ymax=e[4],c.spatialReference=
a;c&&(g&&(c.zmin=e[2]),d&&(c.zmax=e[5]),this._set("computedExtent",c))}};d.prototype.updateHasDraped=function(){var a=!1,b;for(b in this.graphicsDrapedIds)if(this.graphicsDrapedIds.hasOwnProperty(b)){a=!0;break}this._set("hasDraped",a)};d.prototype.elevationInfoChange=function(){M(this.layer);var a=y.extractExpressionInfo(this.layer.elevationInfo,this.elevationFeatureExpressionEnabled);this.symbolCreationContext.featureExpressionInfoContext=y.createContext(a,this.viewSR,n);this.labelsEnabled&&this.labeling.elevationInfoChange();
this.layer.renderer!==this.symbolCreationContext.renderer&&this.rendererChange(this.layer.renderer);for(var b in this.graphicsBySymbol){var c=this.symbols[b],a=this.graphicsBySymbol[b];if(c&&c.layerPropertyChanged("elevationInfo",a))for(var d in a){var g=a[d],c=g.graphic,g=g._labelGraphics;this.elevationAlignment&&this.elevationAlignment.markGraphicElevationDirty(c.uid);for(var e=0;e<g.length;e++){var m=g[e];m.graphics3DSymbolLayer.updateGraphicElevationContext(c,m)}}else this._recreateSymbol(b)}};
d.prototype.clearSymbolsAndGraphics=function(){this.clear();this.elevationAlignment&&this.elevationAlignment.clear();this.labeling&&this.labeling.clear();this.stageLayer&&this.stageLayer.invalidateSpatialQueryAccelerator()};d.prototype.recreateAllGraphics=function(){this.clearSymbolsAndGraphics();this._set("computedExtent",null);this.symbolCreationContext.screenSizePerspectiveEnabled=this.owner.view.screenSizePerspectiveEnabled&&this.layer.screenSizePerspectiveEnabled;this.owner.loadedGraphics&&this.owner.view.basemapTerrain.tilingScheme&&
this.add(this.owner.loadedGraphics.toArray())};d.prototype._recreateSymbol=function(a){var b=this.graphicsBySymbol[a],c=[],d=[],g;for(g in b){var e=b[g];e.isDraped()&&delete this.graphicsDrapedIds[g];this.spatialIndex&&c.push(e);d.push(e.graphic);e.destroy();delete this.graphics[g];this.graphicsKeys=null}0<c.length&&this.spatialIndex.removeMany(c);this.graphicsBySymbol[a]={};(b=this.symbols[a])&&b.destroy();delete this.symbols[a];this.updateHasDraped();this.add(d)};d.prototype.add=function(a){a=this.graphicTransformFunc?
this.graphicTransformFunc(a):a;this._add(a)};d.prototype._add=function(a){if(this.owner.view.basemapTerrain&&this.owner.view.basemapTerrain.tilingScheme&&!(1>a.length)){for(var b=0;b<a.length;++b){var c=a[b].uid;this.pendingAdds.has(c)?k.add(c):this.pendingAdds.add(c)}0<k.size&&(this.pendingUpdates=this.pendingUpdates.filter(function(a){return a.type===p.REMOVE||!k.has(a.graphic.uid)}),k.clear());for(b=0;b<a.length;++b)this.pendingUpdates.push({type:p.ADD,graphic:a[b]});this.notifyChange("updating")}};
d.prototype.remove=function(a){if(!(1>a.length)){for(var b=[],c=0;c<a.length;++c){var d=a[c],g=d.uid,e=this.pendingAdds.has(g),m=this.pendingRemoves.has(g);e&&m?(this.pendingAdds.delete(g),k.add(g),b.push(d)):e?(this.pendingAdds.delete(g),k.add(g)):m||(this.pendingRemoves.add(g),b.push(d))}0<k.size&&(this.pendingUpdates=this.pendingUpdates.filter(function(a){return!k.has(a.graphic.uid)}),k.clear());for(c=0;c<b.length;++c)this.pendingUpdates.push({type:p.REMOVE,graphic:b[c]});this.notifyChange("updating")}};
d.prototype._applyPendingUpdates=function(a){var b=this;this.symbolWarningLogged=this.geometryWarningLogged=!1;for(var c=[],d=0;!a.done()&&d<this.pendingUpdates.length;){var g=this.pendingUpdates[d],e=g.graphic;++d;switch(g.type){case p.ADD:this.pendingAdds.delete(e.uid);(g=this._startAddGraphic(e))&&t.push(g);break;case p.REMOVE:this.pendingRemoves.delete(e.uid),g=this._removeGraphic(e),this.spatialIndex&&g&&c.push(g)}1E3<t.length&&(t.forEach(function(a){return b._finishAddGraphic(a)}),t.clear())}0!==
d&&(t.forEach(function(a){return b._finishAddGraphic(a)}),t.clear(),0<c.length&&this.spatialIndex.removeMany(c),this.pendingUpdates=this.pendingUpdates.slice(d),this.updateHasDraped(),this.owner.view.deconflictor.setDirty(),this.owner.view.labeler.setDirty(),this.notifyChange("updating"))};d.prototype._startAddGraphic=function(a){var b=a.geometry;if(b){var c=this.owner.getRenderingInfo&&this.owner.getRenderingInfo(a);if(c&&c.symbol){var d=this.getOrCreateGraphics3DSymbol(c.symbol,c.renderer);if(d)return c=
{graphic:a,renderingInfo:c,layer:this.layer},this.expandComputedExtent(b),this.beginGraphicUpdate(a,d),{symbolPromise:d,context:c}}else this.symbolWarningLogged||(this.symbolWarningLogged=!0,n.warn("Graphic in layer "+this.layer.id+" has no symbol and will not render"))}else this.geometryWarningLogged||(this.geometryWarningLogged=!0,n.warn("Graphic in layer "+this.layer.id+" has no geometry and will not render"));this.graphicsWithoutSymbol[a.uid]=a};d.prototype._finishAddGraphic=function(a){var b=
this;a.symbolPromise.then(function(){var c=a.context.graphic;b.createGraphics3DGraphic(a.symbolPromise,a.context);b.endGraphicUpdate(c);b.labeling&&(b.lastFastUpdate=performance.now(),b.owner.view.deconflictor.setDirty(),b.owner.view.labeler.setDirty())},function(){b.endGraphicUpdate(a.context.graphic)})};d.prototype._removeGraphic=function(a){var b=a.uid;if(a=this.graphics[b]){a.isDraped()&&delete this.graphicsDrapedIds[b];var c=a.graphics3DSymbol.symbol.id;a.destroy();delete this.graphics[b];delete this.graphicsBySymbol[c][b];
delete this.graphicsWithoutSymbol[b];this.graphicsKeys=null;this.labeling&&this.labeling.removeGraphic(a)}else(b=this.graphicsWaitingForSymbol.get(b))&&b.reject();return a};d.prototype.hasLabelingContext=function(a){if(a instanceof x.LabelSymbol3D||a instanceof x.TextSymbol){var b=this.symbolCreationContext.layer;return b.labelingInfo?b.labelingInfo.some(function(b){return b.symbol===a}):!1}return!1};d.prototype.hasValidSymbolCreationContext=function(a){return a instanceof x.LabelSymbol3D&&!this.hasLabelingContext(a)?
(n.error("LabelSymbol3D is only valid as part of a LabelClass. Using LabelSymbol3D as a renderer symbol is not supported."),!1):!0};d.prototype.createGraphics3DSymbol=function(a,b){if(!this.hasValidSymbolCreationContext(a))return null;a=H.to3D(a,!0,!1,this.hasLabelingContext(a));if(a.symbol){var c=void 0;b&&b.backgroundFillSymbol&&(b=H.to3D(b.backgroundFillSymbol,!1,!0),b.symbol&&(c=b.symbol.symbolLayers));return ea.make(a.symbol,this.symbolCreationContext,c)}a.error&&n.error(a.error.message);return null};
d.prototype.getOrCreateGraphics3DSymbol=function(a,b){var c=this,d=this.symbols[a.id];void 0===d&&(d=a instanceof x.WebStyleSymbol?new fa(a,function(a){return c.createGraphics3DSymbol(a,b)}):this.createGraphics3DSymbol(a,b),this.symbols[a.id]=d);return d};d.prototype.createGraphics3DGraphic=function(a,b){var c=b.graphic;if(!this.symbols[a.symbol.id])this.add([c]);else if(!this.graphics[c.uid]){b=a.createGraphics3DGraphic(b);this.graphics[c.uid]=b;this.graphicsKeys=null;this.graphicsBySymbol[a.symbol.id]||
(this.graphicsBySymbol[a.symbol.id]={});this.graphicsBySymbol[a.symbol.id][c.uid]=b;b.initialize(this.stageLayer,this.stage);b.isDraped()&&(this.graphicsDrapedIds[c.uid]=!0,this._set("hasDraped",!0));b.centroid=null;"point"!==c.geometry.type&&b instanceof ca&&(b.centroid=J.computeCentroid(c.geometry),b.centroid&&J.convertPointSR(b.centroid,this.viewSR));a=this.scaleVisibility&&this.scaleVisibility.scaleRangeActive();this.spatialIndex&&this.spatialIndex.add(b);this.labeling&&this.labeling.addGraphic(b);
a&&this.scaleVisibility.updateGraphicScaleVisibility(b);b.setVisibilityFlag(0,!!c.visible&&!this.owner.suspended);if(a=this.whenGraphics3DGraphicRequests[c.uid])delete this.whenGraphics3DGraphicRequests[c.uid],a.resolve(b);this.highlights&&this.highlights.graphicCreated(b)}};d.prototype.rendererChange=function(a){var b=this.symbolCreationContext.renderer;if(a!==b){this.validateRenderer(a);var c=Z.diff(b,a);this.updateUnchangedSymbolMappings(c,a,b);this.symbolCreationContext.renderer=a;c&&("complete"===
c.type?this.recreateAllGraphics():"partial"===c.type&&(this.applyRendererDiff(c,a,b)?this.volatileGraphicsUpdated():this.recreateAllGraphics()))}};d.prototype.diffHasSymbolChange=function(a){for(var b in a.diff)switch(b){case "visualVariables":break;case "defaultSymbol":break;case "uniqueValueInfos":break;case "authoringInfo":case "fieldDelimiter":delete a.diff[b];break;default:return!0}return!1};d.prototype.applySymbolSetDiff=function(a,b,c,d){a=a||[];b=b||[];d=[];for(var e=0;e<b.length;e++){var l=
b[e],m=this.graphicsBySymbol[l.id],f;for(f in m){var h=m[f],k=h.graphic,n=this.layer instanceof Y?this.layer:null;if(l!==c.defaultSymbol||c.getSymbol(G.hydrateGraphic(k,n))!==c.defaultSymbol)h.isDraped()&&delete this.graphicsDrapedIds[f],a.length||c.defaultSymbol?d.push(k):this.graphicsWithoutSymbol[f]=k,h.destroy(),this.highlights&&this.highlights.graphicDeleted(this.graphics[f]),delete m[f],delete this.graphics[f],this.graphicsKeys=null}if(void 0===m||0===Object.keys(m).length)delete this.graphicsBySymbol[l.id],
(m=this.symbols[l.id])&&m.destroy(),delete this.symbols[l.id]}if(a.length||d.length){for(f in this.graphicsWithoutSymbol)d.push(this.graphicsWithoutSymbol[f]);this.graphicsWithoutSymbol={};this.add(d)}this.updateHasDraped();this.owner.view.deconflictor.setDirty();this.owner.view.labeler.setDirty()};d.prototype.applyUniqueValueRendererDiff=function(a,b,c){var d=a.diff.defaultSymbol,e=a.diff.uniqueValueInfos;if(d||e){var f=e?e.added.map(function(a){return a.symbol}):[],h=e?e.removed.map(function(a){return a.symbol}):
[];if(e)for(var k=0;k<e.changed.length;k++)f.push(e.changed[k].newValue.symbol),h.push(e.changed[k].oldValue.symbol);d?(c.defaultSymbol&&h.push(c.defaultSymbol),b.defaultSymbol&&f.push(b.defaultSymbol)):c.defaultSymbol&&f.length&&h.push(b.defaultSymbol);this.applySymbolSetDiff(f,h,b,c);delete a.diff.defaultSymbol;delete a.diff.uniqueValueInfos;return!0}return!1};d.prototype.calculateUnchangedSymbolMapping=function(a,b,c){if(b instanceof w.UniqueValueRenderer&&c instanceof w.UniqueValueRenderer)if(!a){if(c&&
c.defaultSymbol)return[{oldId:c.defaultSymbol.id,newId:b.defaultSymbol.id}]}else if("partial"===a.type){var d=a.diff;a=d.defaultSymbol;var d=d.uniqueValueInfos,e=void 0,e=d?d.unchanged.map(function(a){return{oldId:a.oldValue.symbol.id,newId:a.newValue.symbol.id}}):c.uniqueValueInfos.map(function(a,c){return{oldId:a.symbol.id,newId:b.uniqueValueInfos[c].symbol.id}});!a&&c.defaultSymbol&&e.push({oldId:c.defaultSymbol.id,newId:b.defaultSymbol.id});return e}return[]};d.prototype.updateUnchangedSymbolMappings=
function(a,b,c){var d=0;for(a=this.calculateUnchangedSymbolMapping(a,b,c);d<a.length;d++)if(c=a[d],b=c.oldId,c=c.newId,b&&b!==c){var e=this.graphicsBySymbol[b];delete this.graphicsBySymbol[b];void 0!==e&&(this.graphicsBySymbol[c]=e);e=this.symbols[b];delete this.symbols[b];void 0!==e&&(this.symbols[c]=e,e.symbol.id=c)}};d.prototype.applyRendererDiff=function(a,b,c){if(this.diffHasSymbolChange(a))return!1;if(b instanceof w.UniqueValueRenderer&&c instanceof w.UniqueValueRenderer&&this.applyUniqueValueRendererDiff(a,
b,c)&&0===Object.keys(a.diff).length)return!0;for(var d in this.graphicsBySymbol)if((c=this.symbols[d])&&!c.applyRendererDiff(a,b,this.graphicsBySymbol[d]))return!1;return!0};d.prototype.opacityChange=function(){for(var a in this.graphicsBySymbol){var b=this.symbols[a];b&&b.layerPropertyChanged("opacity")}};d.prototype.setClippingExtent=function(a,b){var c=this.symbolCreationContext.clippingExtent,d=X.create();u.extentToBoundingRect(a,d,b)?this.symbolCreationContext.clippingExtent=[d[0],d[1],-Infinity,
d[2],d[3],Infinity]:this.symbolCreationContext.clippingExtent=null;return!S.equals(this.symbolCreationContext.clippingExtent,c)};d.prototype.forEachGraphics3DGraphic=function(a){var b=this;if(this.owner.loadedGraphics){var c=!1;this.owner.loadedGraphics.forEach(function(d){var e=b.getGraphics3DGraphicById(d.uid);e&&a(e,d)&&(c=!0)});c&&(this.owner.view.deconflictor.setDirty(),this.owner.view.labeler.setDirty())}};d.prototype.updateAllGraphicsVisibility=function(){var a=this;this.forEachGraphics3DGraphic(function(b,
c){c=b.setVisibilityFlag(0,c.visible);var d=!1;a.scaleVisibility&&(d=a.scaleVisibility.updateGraphicScaleVisibility(b));return c||d})};d.prototype.hideAllGraphics=function(){this.forEachGraphics3DGraphic(function(a){return a.setVisibilityFlag(0,!1)})};d.prototype.validateRenderer=function(a){(a=aa.validateTo3D(a))&&n.warn("Renderer for layer '"+(this.layer.title?this.layer.title+", ":"")+", id:"+this.layer.id+"' is not supported in a SceneView",a.message)};d.prototype.volatileGraphicsUpdated=function(){this.labelsEnabled&&
(this.lastFastUpdate=performance.now());this.stageLayer.invalidateSpatialQueryAccelerator();this.stageLayer.shaderTransformationChanged();this.notifyChange("updating")};d.createLocalOriginFactory=function(){return new ha(5E6,16)};d.prototype.snapshotInternals=function(){var a=this;return{graphics:Object.keys(this.graphics).sort(),symbols:Object.keys(this.symbols).sort(),graphicsBySymbol:Object.keys(this.graphicsBySymbol).sort().map(function(b){return{symbolId:b,graphics:Object.keys(a.graphicsBySymbol[b]).sort()}}),
graphicsWithoutSymbol:Object.keys(this.graphicsWithoutSymbol).sort(),graphicsDrapedIds:Object.keys(this.graphicsDrapedIds).sort(),pendingUpdates:this.pendingUpdates}};d.tmpVec=K.vec3d.create();f([h.property({readOnly:!0})],d.prototype,"computedExtent",void 0);f([h.property({readOnly:!0})],d.prototype,"elevationAlignment",void 0);f([h.property({readOnly:!0})],d.prototype,"scaleVisibility",void 0);f([h.property({readOnly:!0})],d.prototype,"spatialIndex",void 0);f([h.property({readOnly:!0})],d.prototype,
"labeling",void 0);f([h.property({readOnly:!0})],d.prototype,"highlights",void 0);f([h.property({constructOnly:!0})],d.prototype,"elevationFeatureExpressionEnabled",void 0);f([h.property({constructOnly:!0})],d.prototype,"owner",void 0);f([h.property({constructOnly:!0})],d.prototype,"layer",void 0);f([h.property({constructOnly:!0})],d.prototype,"basemapTerrain",void 0);f([h.property({readOnly:!0})],d.prototype,"hasDraped",void 0);f([h.property({constructOnly:!0})],d.prototype,"graphicTransformFunc",
void 0);f([h.property({readOnly:!0})],d.prototype,"symbolsUpdating",void 0);f([h.property({readOnly:!0,dependsOn:["elevationAlignment.updating","scaleVisibility.updating"]})],d.prototype,"updating",null);return d=z=f([h.subclass("esri.views.3d.layers.graphics.Graphics3DCore")],d);var z}(h.declared(q));var k=new Set,t=new V;return q});