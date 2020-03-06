// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/compilerUtils ../../../core/Error ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ./FeatureLikeLayerView3D ./LayerView3D ./support/FeatureTileFetcher3DLayerViewContext ./support/layerViewUpdatingProperties ../support/EventedSet ../../layers/FeatureLayerView ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(G,H,p,e,q,l,f,r,t,u,v,c,w,x,y,z,A,B,C,D,E,F){return function(m){function b(a){a=m.call(this,a)||this;a._controllerTotal=0;a._graphicsCoreTotal=0;a.suspendResumeExtentMode="data";return a}p(b,m);b.prototype.destroy=function(){this.fetcherContext&&(this.fetcherContext.destroy(),this.fetcherContext=null)};Object.defineProperty(b.prototype,"updatingProgressValue",{get:function(){var a=1;if(this.controller&&this.controller.updating){var d=this.controller.updatingRemaining,b=this.controller.updatingTotal;
0<b&&(this._controllerTotal=Math.max(b,this._controllerTotal),a=(b-d)/b)}var g=1;this.graphics3d&&this.graphics3d.graphicsCore&&(d=this.graphics3d.graphicsCore.updatingRemaining,b=this.graphics3d.graphicsCore.updatingTotal,0<b&&(this._graphicsCoreTotal=Math.max(b,this._graphicsCoreTotal),g=(b-d)/b));1===a&&1===g&&(this._graphicsCoreTotal=this._controllerTotal=0);return.5*(a+g)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return this.controller?
!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded):!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"asyncGraphicsUpdates",{get:function(){if(this.controller)switch(this.controller.mode){case "snapshot":return 5E3<this.controller.serviceDataCount;case "tiles":break;default:r.neverReached(this.controller.mode)}return!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){var a=this.layer,d=a.capabilities&&a.capabilities.data;
return d&&d.supportsZ?"returnZ"in a&&null!=a.returnZ?a.returnZ:d.supportsZ:!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasM",{get:function(){var a=this.layer,d=a.capabilities&&a.capabilities.data;return d&&d.supportsM?"returnM"in a&&null!=a.returnM?a.returnM:!1:!1},enumerable:!0,configurable:!0});b.prototype.fetchPopupFeatures=function(a,d){return f(this,void 0,void 0,function(){var a;return l(this,function(b){return(a=this.validateFetchPopupFeatures(d))?[2,u.reject(a)]:
[2,this.fetchClientPopupFeatures(d)]})})};b.prototype.setVisibility=function(a,d){this.graphics3d&&this.graphics3d.graphicsCore.setObjectIdVisibility(a,d)};b.prototype.createQuery=function(){return this.inherited(arguments)};b.prototype.queryFeatures=function(a,d){var b=this,g=arguments,c=function(){return b.inherited(g,[a,d])};return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(a),c):c()};b.prototype.createController=function(){return f(this,void 0,void 0,function(){var a,
b=this;return l(this,function(d){this.fetcherContext=new A.FeatureTileFetcher3DLayerViewContext({layerView:this,returnZ:this.hasZ,returnM:this.hasM});a=new x({layerView:this,context:this.fetcherContext,graphics:new C.EventedSet,extent:this.clippingExtent});this.updatingHandles.add(a,"serviceDataExtent",function(a){b.graphics3d&&(b.graphics3d.dataExtent=a)},2);this.handles.add(v.init(this,"suspended",function(b){b?a.suspend():a.resume()},!0));this.updatingHandles.add(this.graphics3d.graphicsCore,"displayFeatureLimit",
function(){return b.updateDisplayFeatureLimit(a)},2);this.handles.add(this.view.resourceController.memoryController.events.on("quality-changed",function(){return b.updateDisplayFeatureLimit()}));return[2,a]})})};b.prototype.doRefresh=function(){return f(this,void 0,void 0,function(){return l(this,function(a){!this.suspended&&this.controller&&this.controller.refetch();return[2]})})};b.prototype.getUsedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return(a?a.usedMemory:0)+(this.controller?
this.controller.memoryForUnusedFeatures:0)};b.prototype.getUnloadedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return(a?a.unprocessedMemoryEstimate:0)+(this.controller?this.controller.expectedFeatureDiff*a.usedMemoryPerGraphic:0)};b.prototype.ignoresMemoryFactor=function(){return this.controller&&this.controller.hasMaximumNumberOfFeaturesOverride};b.prototype.updateDisplayFeatureLimit=function(a){void 0===a&&(a=this.controller);if(a&&this.graphics3d&&this.graphics3d.graphicsCore){var b=
this.graphics3d.graphicsCore.displayFeatureLimit,c=this.view.resourceController.memoryController.memoryFactor;a.displayFeatureLimit=1===c?b:q({},b,{maximumNumberOfFeatures:Math.ceil(b.maximumNumberOfFeatures*c),maximumTotalNumberOfFeatures:Math.ceil(b.maximumTotalNumberOfFeatures*c),minimumTotalNumberOfFeatures:Math.ceil(b.minimumTotalNumberOfFeatures*c)})}};b.prototype._queryFeaturesMesh=function(a,b){return f(this,void 0,void 0,function(){var d,c,e,h,f,n,k,m;return l(this,function(g){switch(g.label){case 0:return[4,
this._validateQueryFeaturesMesh(a)];case 1:return g.sent(),[4,b()];case 2:d=g.sent();if(a&&a.outStatistics)return[2,d];c=this.layer.objectIdField;e=this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID;h=[];f=0;for(n=d.features;f<n.length;f++)if(k=n[f],k.geometry){if(m=e.get(k.attributes[c]))k.geometry=w.hydrateGeometry(m.graphic.geometry),h.push(k)}else h.push(k);d.features=h;return[2,d]}})})};b.prototype._validateQueryFeaturesMesh=function(a){return f(this,void 0,void 0,function(){var b,c,e,
f,h;return l(this,function(d){if(!a)return[2];b=function(a){throw new t("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '"+a+"'");};c=["quantizationParameters","geometryPrecision","maxAllowableOffset"];e=0;for(f=c;e<f.length;e++)h=f[e],null!=a[h]&&b(h);"returnM"in a&&a.returnM&&b("returnM");"returnCentroid"in a&&a.returnCentroid&&b("returnCentroid");a.outSpatialReference&&!a.outSpatialReference.equals(this.view.spatialReference)&&b("outSpatialReference");
return[2]})})};Object.defineProperty(b.prototype,"resourceInfo",{get:function(){var a=this._getResourceInfo();if(this.controller&&a.displayedFeatures){var b=this.controller.debug;a.storedFeatures=b.storedFeatures;a.totalVertices=b.totalVertices}b=(b=this.controller&&this.controller.displayFeatureLimit)&&b.maximumSymbolComplexity;a.nodes=this.controller?this.controller.tileDescriptors.length:0;a.partial=this.maximumNumberOfFeaturesExceeded;a.mode=this.controller?this.controller.mode:"n/a";a.symbolComplexity=
b?"f:"+b.primitivesPerFeature+",v:"+b.primitivesPerCoordinate:"n/a";return a},enumerable:!0,configurable:!0});e([c.property()],b.prototype,"layer",void 0);e([c.property()],b.prototype,"controller",void 0);e([c.property({readOnly:!0,dependsOn:["controller.updatingRemaining","controller.updatingTotal","graphics3d.graphicsCore.updatingRemaining","graphics3d.graphicsCore.updatingTotal"]})],b.prototype,"updatingProgressValue",null);e([c.property({aliasOf:"controller.maximumNumberOfFeatures",set:null,get:null})],
b.prototype,"maximumNumberOfFeatures",void 0);e([c.property({dependsOn:["suspended","controller.maximumNumberOfFeaturesExceeded"]})],b.prototype,"maximumNumberOfFeaturesExceeded",null);e([c.property(B.updatingProgress)],b.prototype,"updatingProgress",void 0);e([c.property({readOnly:!0,dependsOn:["controller.mode"]})],b.prototype,"asyncGraphicsUpdates",null);e([c.property({readOnly:!0})],b.prototype,"hasZ",null);e([c.property({readOnly:!0})],b.prototype,"hasM",null);e([c.property()],b.prototype,"suspendResumeExtentMode",
void 0);return b=e([c.subclass("esri.views.3d.layers.FeatureLayerView3D")],b)}(c.declared(F.RefreshableLayerView(D.FeatureLayerView(y.FeatureLikeLayerView3D(z.LayerView3D(E))))))});