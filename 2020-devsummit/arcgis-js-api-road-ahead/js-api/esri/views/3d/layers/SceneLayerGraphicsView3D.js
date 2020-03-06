// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../Graphic ../../../core/arrayUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/contains ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/controllers/I3SOnDemandController ../../../layers/support/fieldUtils ../../../renderers/support/renderingInfoUtils ../../../tasks/operations/zscale ../../../tasks/support/Query ./LayerView3D ./graphics/Graphics3DFeatureLikeLayerView ./graphics/QueryEngine ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/layerViewUpdatingProperties ./support/PopupSceneLayerView ../../3d/support/debugFlags ../support/GraphicsMap ../support/orientedBoundingBox ../support/projectionUtils ../../layers/LayerView ../../layers/support/FeatureFilter ../../support/Scheduler @dojo/framework/shim/Promise".split(" "),
function(T,B,U,g,n,k,V,L,W,X,E,F,t,Y,e,Z,M,aa,ba,K,ca,x,N,da,O,ea,fa,ga,y,ha,ia,ja,ka,z,la,ma,G,na,oa,pa){function P(e,b){for(var a=0;a<e.length;a++)for(var c=0,r=e[a].graphics;c<r.length;c++){var f=r[c];f.attributes||(f.attributes={});if(b&&b.loadedAttributes)for(var l=0,Q=b.loadedAttributes;l<Q.length;l++){var h=Q[l].name;b.attributeData[h]&&(f.attributes[h]=y.getCachedAttributeValue(b.attributeData[h],a))}}}var C=X.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),R=ia.defineFieldProperties();
B=function(u){function b(){var a=null!==u&&u.apply(this,arguments)||this;a._nodesAddedToStage=new Map;a.drapeSourceType=1;a._queryEngine=null;a._memCache=null;a.loadedGraphics=new la.GraphicsMap;a.progressiveLoadFactor=1;a.supportsHeightUnitConversion=!0;a._coordinatesOutsideExtentErrors=0;a._maxCoordinatesOutsideExtentErrors=20;return a}U(b,u);b.prototype.initialize=function(){var a=this,c=this.layer;y.checkSpatialReferences(c,this.view.spatialReference,this.view.viewingMode);for(var b=0,f=["layer.renderer",
"layer.labelingInfo","layer.labelsVisible","definitionExpressionFields","filter"];b<f.length;b++)this.updatingHandles.add(this,f[b],function(){return a._updateRequiredFields()});this.updatingHandles.add(c,"rangeInfos",function(c){return a._rangeInfosChanged(c)},2);this.updatingHandles.add(c,"renderer",function(c,b){return a._rendererChange(c,b)});this.updatingHandles.add(this,"layer.objectIdFilter",function(){return a._filterChange()});this.updatingHandles.add(this,"parsedDefinitionExpression",function(){return a._filterChange()});
this.handles.add(Y.init(z,"I3S_TREE_SHOW_TILES",function(c){if(c&&!a._treeDebugger){var b=a._controller.crsIndex;(new Promise(function(a,c){T(["./support/I3STreeDebugger"],a,c)})).then(function(c){c=c.I3STreeDebugger;!a._treeDebugger&&z.I3S_TREE_SHOW_TILES&&(a._treeDebugger=new c({lv:a,view:a.view,nodeSR:b}))})}else c||!a._treeDebugger||z.I3S_TREE_SHOW_TILES||(a._treeDebugger.destroy(),a._treeDebugger=null)}));this._updateRequiredFields();this._set("graphics3d",new fa({owner:this,layer:c,preferredUpdatePolicy:1,
scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,suspendResumeExtentMode:"data",dataExtent:c.fullExtent,updateClippingExtent:function(c){return a._updateClippingExtent(c)}}));if(this.graphics3d.elevationAlignment)this.graphics3d.elevationAlignment.events.on("invalidate-elevation",function(c){return a._invalidateElevation(c.extent,c.spatialReference)});this.supportsHeightUnitConversion&&
(this._verticalScale=da.getGeometryZScaler("point",c.spatialReference,this.view.spatialReference));this.addResolvingPromise(this.graphics3d.setup());this._memCache=this.view.resourceController.memoryController.getMemCache(c.uid);this._controller=new ca({layerView:this,scaleVisibilityEnabled:!1});this.when(function(){a._queryEngine=new ga.default({layerView:a,task:pa.Task.FEATURE_QUERY_ENGINE});a.updatingHandles.add(a,"maximumNumberOfFeatures",function(c){return a._controller.featureTarget=c},2);a.updatingHandles.add(a,
"suspended",function(c){c&&a._removeAllNodeData()})})};b.prototype.destroy=function(){this._treeDebugger&&(this._treeDebugger.destroy(),this._treeDebugger=null);this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));this._controller&&(this._controller.destroy(),this._controller=null);this._queryEngine&&(this._queryEngine.destroy(),this._queryEngine=null);this._memCache.destroy();this._nodesAddedToStage=this._memCache=null};Object.defineProperty(b.prototype,"maximumNumberOfFeatures",
{get:function(){var a=this.graphics3d&&this.graphics3d.graphicsCore&&this.graphics3d.graphicsCore.displayFeatureLimit;return a?a.maximumNumberOfFeatures:0},set:function(a){null!=a?(this._override("maximumNumberOfFeatures",a),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return this.suspended?!1:!!this._controller&&
!this._controller.leafsReached},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasM",{get:function(){return!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){return!0},enumerable:!0,configurable:!0});b.prototype.notifyGraphicUpdate=function(a,c){this.graphics3d.graphicsCore.notifyGraphicUpdate(a,c)};b.prototype.whenGraphicAttributes=function(a,c){return k(this,void 0,void 0,function(){var b,f=this;return n(this,function(r){b=function(a){for(var c=
new Map,b=[],r=0;r<a.length;r++){var d=a[r],l=f._findGraphicNodeAndIndex(d),e=c.get(l.node);e||(e={node:l.node,indices:[],graphics:[]},b.push(e));e.indices.push(l.index);e.graphics.push(d)}return b};return[2,y.whenGraphicAttributes(this.layer,a,this._getObjectIdField(),c,b,{populateObjectId:!0})]})})};b.prototype.getGraphicFromGraphicUid=function(a){if(!this.loadedGraphics)return null;var c=K.hydrateGraphic(this.loadedGraphics.find(function(c){return c.uid===a}),this.layer),b=this._getObjectIdField();
if(!c||!c.attributes||!c.attributes[b])return null;c.layer=this.layer;c.sourceLayer=this.layer;return c};b.prototype.whenGraphicBounds=function(a,c){return this.graphics3d.graphicsCore.whenGraphicBounds(a,c)};b.prototype.computeAttachmentOrigin=function(a,c){return this.graphics3d.graphicsCore.computeAttachmentOrigin(a,c)};b.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};b.prototype.isUpdating=function(){return!!(this._controller&&
this._controller.updating||this.graphics3d&&this.graphics3d.updating)};b.prototype.getRenderingInfo=function(a,c,b){(a=N.getRenderingInfo(a,{renderer:c,arcade:b}))&&a.color&&(c=a.color,c[0]/=255,c[1]/=255,c[2]/=255);return a};b.prototype.getRenderingInfoAsync=function(a,c,b,f){return k(this,void 0,void 0,function(){return n(this,function(r){return[2,N.getRenderingInfoAsync(a,V({renderer:c,arcade:b},f))]})})};Object.defineProperty(b.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},
enumerable:!0,configurable:!0});b.prototype._findGraphicNodeAndIndex=function(a){a=a.attributes[this.layer.objectIdField];for(var c=0,b=W.keysOfMap(this._nodesAddedToStage);c<b.length;c++){var f=this._nodesAddedToStage.get(b[c]),l=this._findGraphicIndex(f.bundle,a);if(0<=l)return{node:f.node,index:l}}return null};b.prototype._findGraphicIndex=function(a,c){for(var b=0;b<a.length;b++)for(var f=0,l=a[b].featureIds;f<l.length;f++)if(l[f]===c)return b;return-1};b.prototype.highlight=function(a){return this.graphics3d.highlight(a,
this.layer.objectIdField)};b.prototype.addNodeData=function(a,c){if(this._nodesAddedToStage.has(a.index))C.error("I3S node "+a.id+" already added");else{var b=c.allGeometryData,f=c.attributeDataInfo;c=this._controller.crsIndex;var l=this._controller.crsVertex,e=this.view.spatialReference,h=[0,0,0],g=this._getObjectIdField(),m=[],d;if(d=this.layer.fullExtent)d=this.layer.fullExtent.clone(),d.xmin-=.5,d.ymin-=.5,d.xmax+=.5,d.ymax+=.5,d.hasZ&&(d.zmin-=.5,d.zmax+=.5),d.hasM&&(d.mmin-=.5,d.mmax+=.5);var p=
d;d=[];for(var A=[],n=0;n<b.length;n++){var k=b[n],t=k.featureDataPosition,H=t.length,x=k.geometries||[qa[H]],y=k.featureIds;p&&!ba.extentContainsCoords3D(p,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&C.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&C.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++);for(var D=
0;D<x.length;D++){var v=x[D];if("points"===v.params.type){var I=[],w=y[D<y.length?D:0],z={};null!=w&&(z[g]=w);var w=null==w?L.generateUID():w,u=void 0;"Embedded"===v.type&&(u=v.params.vertexAttributes.position);for(v=0;v<u.length;v+=H){for(var q=0;q<H;q++)h[q]=t[q]+u[v+q];q=3===H;a.obb||A.push(h[0],h[1],q?h[2]:0);G.bufferToBuffer(h,l,0,J,e,0,1);var q=K.makeDehydratedPoint(J[0],J[1],q?J[2]:void 0,e),B=this.loadedGraphics.get(w);E.isSome(B)?I.push(B):I.push({objectId:w,uid:L.generateUID(),geometry:q,
attributes:z,visible:!0})}d.push.apply(d,I);m.push({featureIds:k.featureIds,graphics:I})}}}a.numFeatures=d.length;this._updateNodeMemory(a);b={bundle:m,attributeInfo:f,node:a};P(b.bundle,b.attributeInfo);0<A.length&&(f=c.isGeographic?this.view.renderSpatialReference:c,G.bufferToBuffer(A,l,0,A,f,0,A.length/3),a.obb=ma.compute({data:A,size:3,offsetIdx:0,strideIdx:3}),c.isGeographic&&G.vectorToVector(a.obb.center,f,a.obb.center,c),this._controller.updateVisibility(a.index));if(!this._controller.isGeometryVisible(a))return this._cacheNodeData(b),
F.resolve();if(this._verticalScale)for(c=0;c<d.length;c++)this._verticalScale(d[c].geometry);this._nodesAddedToStage.set(a.index,b);this.loadedGraphics.addMany(d);this._filterNode(b);this._treeDebugger&&this._treeDebugger.update();return F.resolve()}};b.prototype.isNodeLoaded=function(a){return this._nodesAddedToStage.has(a)};b.prototype._updateNodeMemory=function(a){a.memory=4096+a.numFeatures*this.graphics3d.graphicsCore.usedMemoryPerGraphic};b.prototype._cacheNodeData=function(a){var c=a.bundle.reduce(function(a,
c){return c.graphics.reduce(function(a,c){return K.estimateSize(c)+a},512+8*c.featureIds.length+a)},1024);this._memCache.put(this._getMemCacheKey(a.node),a,c)};b.prototype._getMemCacheKey=function(a){return""+a.index};b.prototype._removeAllNodeData=function(){var a=this;this._nodesAddedToStage.forEach(function(c){c&&(a._updateNodeMemory(c.node),a._cacheNodeData(c))});this._nodesAddedToStage.clear();this._treeDebugger&&this._treeDebugger.update();this.loadedGraphics.clear()};b.prototype.removeNodeData=
function(a,c){for(;0<a.length&&!c.done;){var b=a.pop();if(b=this._removeNodeStageData(b))this._updateNodeMemory(b.node),this._cacheNodeData(b);c.madeProgress()}};b.prototype._removeNodeStageData=function(a){var c=this._nodesAddedToStage.get(a);if(!c)return null;for(var b=0,f=c.bundle;b<f.length;b++)this.loadedGraphics.removeMany(f[b].graphics);this._nodesAddedToStage.delete(a);this._treeDebugger&&this._treeDebugger.update();return c};b.prototype.loadCachedNodeData=function(a){return F.resolve(this._memCache.pop(this._getMemCacheKey(a)))};
b.prototype.addCachedNodeData=function(a,c,b){if(this._nodesAddedToStage.has(a.index))C.error("I3S node "+a.id+" already added");else{for(var f=0,e=c.bundle;f<e.length;f++)this.loadedGraphics.addMany(e[f].graphics);this._nodesAddedToStage.set(a.index,c);this._updateNodeMemory(a);this.setAttributeData(a.index,b);this._filterNode(c);this._treeDebugger&&this._treeDebugger.update();return F.resolve()}};b.prototype.getLoadedNodeIds=function(){var a=[];this._nodesAddedToStage.forEach(function(c){return a.push(c.node.id)});
return a.sort()};b.prototype.getLoadedNodes=function(){var a=[];this._nodesAddedToStage.forEach(function(c){return a.push(c.node)});return a};b.prototype.getLoadedNodeIndices=function(a){this._nodesAddedToStage.forEach(function(c,b){return a.push(b)})};b.prototype.getLoadedAttributes=function(a){if((a=this._nodesAddedToStage.get(a))&&a.attributeInfo)return a.attributeInfo.loadedAttributes};b.prototype.getAttributeData=function(a){if((a=this._nodesAddedToStage.get(a))&&a.attributeInfo)return a.attributeInfo.attributeData};
b.prototype.setAttributeData=function(a,c){if(a=this._nodesAddedToStage.get(a))a.attributeInfo=c,P(a.bundle,c),this._filterNode(a),this.graphics3d.graphicsCore.labelsEnabled&&(c=a.bundle.map(function(a){return a.graphics.length&&a.graphics[0].uid}),this.graphics3d.graphicsCore.updateLabelingInfo(c))};b.prototype._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);return!1};b.prototype._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};
b.prototype._rendererChange=function(a,c){return k(this,void 0,void 0,function(){var b,f,e,g;return n(this,function(h){switch(h.label){case 0:return b=this.layer.fields,f=new Set,a?[4,a.collectRequiredFields(f,b)]:[3,2];case 1:return h.sent(),e=t.valuesOfSet(f).sort(),[3,3];case 2:e=[],h.label=3;case 3:return f.clear(),c?[4,c.collectRequiredFields(f,b)]:[3,5];case 4:return h.sent(),g=t.valuesOfSet(f).sort(),[3,6];case 5:g=[],h.label=6;case 6:if(e.length===g.length&&e.every(function(a,c){return e[c]===
g[c]}))return[2];this._reloadAllNodes();return[2]}})})};b.prototype._rangeInfosChanged=function(a){null!=a&&0<a.length&&C.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};b.prototype._filterChange=function(){var a=this;this._nodesAddedToStage.forEach(function(c){return a._filterNode(c)})};b.prototype._reloadAllNodes=function(){this._removeAllNodeData();this._controller&&this._controller.restartNodeLoading()};b.prototype._filterNode=
function(a){var c=this._getObjectIdField(),b=null;if(this.layer.objectIdFilter)var f=this.layer.objectIdFilter.ids,e="include"===this.layer.objectIdFilter.method,b=function(a){return 0<=f.indexOf(a)===e};var g=this.parsedDefinitionExpression,h=0;for(a=a.bundle;h<a.length;h++)for(var k=0,m=a[h].graphics;k<m.length;k++){var d=m[k],n=d.visible;b&&!b(d.attributes[c])?d.visible=!1:d.visible=g?this._evaluateClause(g,d):!0;n!==d.visible&&(p.graphic=d,p.property="visible",p.oldValue=n,p.newValue=d.visible,
this.graphics3d.graphicsCore.graphicUpdateHandler(p))}};b.prototype._updateRequiredFields=function(){return k(this,void 0,void 0,function(){var a,c,b,e,g,k,h,p,m;return n(this,function(d){switch(d.label){case 0:return a=this,b=c=a.layer,e=b.fields,g=b.renderer,k=b.labelsVisible,h=a.filter,p=a.definitionExpressionFields,m=new Set,g?[4,g.collectRequiredFields(m,e)]:[3,2];case 1:d.sent(),d.label=2;case 2:return k?[4,x.collectLabelingFields(m,c)]:[3,4];case 3:d.sent(),d.label=4;case 4:return E.isSome(h)?
[4,x.collectFilterFields(m,c,h)]:[3,6];case 5:d.sent(),d.label=6;case 6:return x.collectFields(m,e,p),this._set("requiredFields",t.valuesOfSet(m).sort()),[2]}})})};b.prototype._invalidateElevation=function(a,b){var c=this._controller.crsIndex;G.boundingRectToBoundingRect(a,b,S,c);a=ra;M.fromRect(a,S);a[2]=-Infinity;a[5]=Infinity;this._controller.updateElevationChanged(a,c)};b.prototype.createQuery=function(){var a={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};
return E.isSome(this.filter)?this.filter.createQuery(a):new O(a)};b.prototype.queryFeatures=function(a,b){return this._queryEngine.executeQuery(this._ensureQuery(a),b&&b.signal)};b.prototype.queryObjectIds=function(a,b){return this._queryEngine.executeQueryForIds(this._ensureQuery(a),b&&b.signal)};b.prototype.queryFeatureCount=function(a,b){return this._queryEngine.executeQueryForCount(this._ensureQuery(a),b&&b.signal)};b.prototype.queryExtent=function(a,b){return this._queryEngine.executeQueryForExtent(this._ensureQuery(a),
b&&b.signal)};b.prototype._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(E.isNone(a)?this.createQuery():O.from(a))};b.prototype.getUsedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return a?a.usedMemory:0};b.prototype.getUnloadedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return.8*((this._controller?this._controller.unloadedMemoryEstimate:0)+(a?a.unprocessedMemoryEstimate:0))};b.prototype.ignoresMemoryFactor=function(){return this._controller&&
this._controller.fixedFeatureTarget};b.prototype.getNumberOfNodes=function(){return this._nodesAddedToStage.size};b.prototype.getNumberOfFeatures=function(){return this.loadedGraphics.length};Object.defineProperty(b.prototype,"resourceInfo",{get:function(){var a={displayedFeatures:this.loadedGraphics.length,maxFeatures:this.maximumNumberOfFeatures,totalFeatures:-1,nodes:this.getNumberOfNodes(),core:this.graphics3d.graphicsCore.resourceInfo};this._controller&&this._controller.updateStats(a);return a},
enumerable:!0,configurable:!0});g([e.property()],b.prototype,"graphics3d",void 0);g([e.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],b.prototype,"hasDraped",void 0);g([e.property({type:oa})],b.prototype,"filter",void 0);g([e.property()],b.prototype,"loadedGraphics",void 0);g([e.property()],b.prototype,"layer",void 0);g([e.property()],b.prototype,"_controller",void 0);g([e.property({dependsOn:["_controller.updating","graphics3d.updating"]})],b.prototype,"updating",void 0);g([e.property({dependsOn:["_controller.rootNodeVisible"]})],
b.prototype,"suspended",void 0);g([e.property(ja.updatingProgress)],b.prototype,"updatingProgress",void 0);g([e.property({aliasOf:"_controller.updatingProgress"})],b.prototype,"updatingProgressValue",void 0);g([e.property(R.requiredFields)],b.prototype,"requiredFields",void 0);g([e.property(R.availableFields)],b.prototype,"availableFields",void 0);g([e.property({type:Number,dependsOn:["graphics3d.graphicsCore.displayFeatureLimit"]})],b.prototype,"maximumNumberOfFeatures",null);g([e.property({readOnly:!0,
dependsOn:["suspended","_controller.leafsReached"]})],b.prototype,"maximumNumberOfFeaturesExceeded",null);g([e.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],b.prototype,"lodFactor",void 0);g([e.property({readOnly:!0})],b.prototype,"hasM",null);g([e.property({readOnly:!0})],b.prototype,"hasZ",null);return b=g([e.subclass("esri.views.3d.layers.SceneLayerGraphicsView3D")],b)}(e.declared(ha.DefinitionExpressionSceneLayerView(ka.PopupSceneLayerView(ea.LayerView3D(na)))));
var qa={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},J=Z.vec3f64.create(),p={graphic:null,property:null,oldValue:null,newValue:null},ra=M.create(),S=aa.create();return B});