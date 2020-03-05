// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ../../../renderers/support/renderingInfoUtils ../../../tasks/support/Query ./graphics/Graphics3DFeatureLikeLayerView ./graphics/QueryEngine ./support/projectExtentUtils ../../support/Scheduler".split(" "),
function(A,f,q,e,h,k,l,m,g,n,r,d,t,u,p,v,w,x,y,z){Object.defineProperty(f,"__esModule",{value:!0});f.FeatureLikeLayerView3D=function(f){return function(f){function c(){var a=null!==f&&f.apply(this,arguments)||this;a.controller=null;a.asyncGraphicsUpdates=!1;a.suspendResumeExtentMode="computed";a.slicePlaneEnabled=!1;a.drapeSourceType=1;a.fullExtentInLocalViewSpatialReference=null;a.suspendResumeExtent=null;a._controllerCreated=!1;a.clippingExtent=null;a.supportsHeightUnitConversion=!0;a.pendingController=
null;a.queryEngine=null;return a}q(c,f);c.prototype.initialize=function(){var a=this,b=this.layer;"isTable"in b&&b.isTable?this.addResolvingPromise(n.reject(new m("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:b}))):(this._set("graphics3d",new w({owner:this,layer:b,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,preferredUpdatePolicy:this.asyncGraphicsUpdates?
1:0,suspendResumeExtentMode:this.suspendResumeExtentMode,updateClippingExtent:function(b){return a.updateClippingExtent(b)}})),this.updatingHandles.add(this,"asyncGraphicsUpdates",function(b){a.graphics3d.graphicsCore.preferredUpdatePolicy=b?1:0}),this.updatingHandles.add(this,"suspendResumeExtentMode",function(b){a.graphics3d.suspendResumeExtentMode=b}),this.addResolvingPromise(this.graphics3d.setup().then(function(){return a.validateGeometryType()}).then(function(){return a.queryEngine=new x.default({layerView:a,
task:z.Task.FEATURE_QUERY_ENGINE})}).then(function(){return y.toViewIfLocal(a)}).then(function(b){return a.fullExtentInLocalViewSpatialReference=b}).then(function(){return a.initializeController()})),this.notifyChange("updating"))};c.prototype.destroy=function(){this.destroyPendingController();this.controller&&(this.controller.destroy(),this.controller=null);this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));this.queryEngine&&(this.queryEngine.destroy(),this.queryEngine=null);
this.loadedGraphics=null};c.prototype.destroyPendingController=function(){this.pendingController&&(this.pendingController.destroy(),this.pendingController=null)};c.prototype.notifyGraphicUpdate=function(a,b){this.graphics3d.graphicsCore.notifyGraphicUpdate(a,b)};c.prototype.getRenderingInfo=function(a,b,c){(a=p.getRenderingInfo(a,{renderer:b,arcade:c}))&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};c.prototype.getRenderingInfoAsync=function(a,b,c,d){return k(this,void 0,void 0,function(){return h(this,
function(e){return[2,p.getRenderingInfoAsync(a,l({renderer:b,arcade:c},d))]})})};c.prototype.getGraphicFromGraphicUid=function(a){var b=this,c=null;this.loadedGraphics&&this.loadedGraphics.forEach(function(d){d.uid===a&&(c=t.hydrateGraphic(d,b.layer))});return c};Object.defineProperty(c.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphics:null},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"graphics3DGraphicsByObjectID",
{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"symbolUpdateType",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.symbolUpdateType:null},enumerable:!0,configurable:!0});c.prototype.whenGraphicBounds=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.whenGraphicBounds(a,b):null};c.prototype.computeAttachmentOrigin=function(a,b){return this.graphics3d?
this.graphics3d.graphicsCore.computeAttachmentOrigin(a,b):null};c.prototype.getSymbolLayerSize=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.getSymbolLayerSize(a,b):null};c.prototype.queryFeatures=function(a,b){return this.queryEngine.executeQuery(this._ensureQuery(a),g.get(b,"signal"))};c.prototype.queryObjectIds=function(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),g.get(b,"signal"))};c.prototype.queryFeatureCount=function(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),
g.get(b,"signal"))};c.prototype.queryExtent=function(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),g.get(b,"signal"))};c.prototype._ensureQuery=function(a){return g.isNone(a)?this.createQuery():v.from(a)};c.prototype.highlight=function(a){return this.graphics3d.highlight(a,this.layer.objectIdField)};c.prototype.canResume=function(){return!this.inherited(arguments)||this.graphics3d&&this.graphics3d.suspended?!1:!0};c.prototype.getSuspendInfo=function(){var a=this.inherited(arguments);
return this.graphics3d?l({},a,this.graphics3d.suspendInfo):a};c.prototype.isUpdating=function(){return!this.graphics3d||this.graphics3d.destroyed?!1:!(!(!this._controllerCreated||this.controller&&this.controller.updating)&&this.view.basemapTerrain&&this.view.basemapTerrain.ready&&!this.graphics3d.updating)};c.prototype.initializeController=function(){return k(this,void 0,void 0,function(){var a;return h(this,function(b){switch(b.label){case 0:return[4,this.createController()];case 1:return this.pendingController=
a=b.sent(),[4,a.when()];case 2:return b.sent(),this.setControllerWhenInitialized(a),[2]}})})};c.prototype.setControllerWhenInitialized=function(a){return k(this,void 0,void 0,function(){return h(this,function(b){switch(b.label){case 0:return b.trys.push([0,2,,3]),[4,this.when()];case 1:return b.sent(),[3,3];case 2:return b.sent(),[3,3];case 3:return this._controllerCreated=!0,this.notifyChange("updating"),this.isResolved()?[4,r.whenTrueOnce(this.view,"basemapTerrain.ready")]:(this.destroyPendingController(),
[2]);case 4:return b.sent(),this.pendingController=null,this.controller=a,this.loadedGraphics=a.graphics,this.notifyChange("updating"),[2]}})})};c.prototype.updateClippingExtent=function(a){this.clippingExtent=a;if(!this.controller)return!1;switch(this.controller.type){case "stream":return!1;case "feature-tile-3d":return this.controller.extent=a,!0}};c.prototype.validateGeometryType=function(){switch(this.layer.geometryType){case "multipatch":case "multipoint":return n.reject(new m("featurelayerview3d:unsupported-geometry-type",
"Unsupported geometry type ${geometryType}",{geometryType:this.layer.geometryType}))}};c.prototype._getResourceInfo=function(){var a=this.controller&&this.controller instanceof u?this.controller:null;return{displayedFeatures:this.loadedGraphics.length,maxFeatures:a?a.maximumNumberOfFeatures:-1,totalFeatures:a?a.serviceDataCount:-1,nodes:0,core:this.graphics3d.graphicsCore.resourceInfo,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.graphics3d.frustumVisibility.suspended,
visibilityScale:!this.graphics3d.scaleVisibility.suspended}};Object.defineProperty(c.prototype,"resourceInfo",{get:function(){return this._getResourceInfo()},enumerable:!0,configurable:!0});e([d.property()],c.prototype,"loadedGraphics",void 0);e([d.property({dependsOn:["graphics3d.suspended"]})],c.prototype,"suspended",void 0);e([d.property({dependsOn:["graphics3d.updating","controller.updating"]})],c.prototype,"updating",void 0);e([d.property()],c.prototype,"controller",void 0);e([d.property()],
c.prototype,"graphics3d",void 0);e([d.property({readOnly:!0})],c.prototype,"asyncGraphicsUpdates",void 0);e([d.property({readOnly:!0})],c.prototype,"suspendResumeExtentMode",void 0);e([d.property({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0);e([d.property({readOnly:!0,dependsOn:["graphics3d.suspendInfo"]})],c.prototype,"suspendInfo",void 0);e([d.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],c.prototype,"hasDraped",void 0);return c=e([d.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],
c)}(d.declared(f))}});