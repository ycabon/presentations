// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/Logger ../../../core/maybe ../../../core/ReactiveSet ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/sql/WhereClause ../../../layers/support/FeatureFilter ../../../layers/support/floorFilterUtils ../../../rest/support/Query ../../../support/featureFlags ./I3SMeshView3D ./II3SMeshView3D ./LayerView3D ./i3s/featureEditing ./i3s/I3SGeometryUtil ./i3s/I3SMeshViewFilter ./i3s/I3SNode ./i3s/I3SOverrides ./i3s/I3SQueryEngine ./i3s/I3SQueryFeatureAdapter ./i3s/I3SQueryFeatureStore ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/PopupSceneLayerView ./support/SceneLayerViewRequiredFields ./support/TemporalSceneLayerView ../support/updatingProperties ../../layers/SceneLayerView ../../layers/support/popupUtils ../../support/Scheduler".split(" "),
function(f,u,v,w,x,q,g,m,T,y,z,A,B,n,p,e,C,D,l,E,r,t,F,G,H,I,k,J,K,L,M,N,O,P,Q,R){m=K.defineFieldProperties();e=class extends e.I3SMeshView3D(N.TemporalSceneLayerView(J.DefinitionExpressionSceneLayerView(L.PopupSceneLayerView(D.LayerView3D(P))))){constructor(){super(...arguments);this.type="scene-layer-3d";this._setVisibilityHiddenObjectIds=new x;this.progressiveLoadFactor=1;this._elevationContext="scene";this._isIntegratedMesh=!1;this._supportsLabeling=!0;this._pendingEditsQueue=Promise.resolve();
this._interactiveEditingSessions=new Map;this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(a,b){return a.url===this.layer.url&&this.i3sOverrides.isEmpty?a.load(b).then(()=>{k.checkRecyclable(this.layer,a,this.i3sOverrides);this.layer=a;this.i3sOverrides.destroy();this.i3sOverrides=new F.I3SOverrides({view:this.view,layer:a,memoryController:this.view.resourceController?.memoryController});this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){return this.layer.popupEnabled&&
Q.hasPopupTemplate(this.layer,this.view.popup?.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(a){this._set("filter",r.I3SMeshViewFilter.checkSupport(a)?a:null)}get viewFilter(){const a=this.mergedFilter,b=this.layerFilter;if(null==a&&null==b)return null;const c=this._get("viewFilter");if(null==c)return new r.I3SMeshViewFilter({layerFilter:b,viewFilter:a,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:d=>this._loadAsyncModule(d),addSqlFilter:(d,h)=>this.addSqlFilter(d,
h,this.logError),addTimeFilter:(d,h)=>this.addTimeFilter(d,h)});c.viewFilter=a;c.layerFilter=b;return c}get requiredFields(){return this._fieldsHelper?.requiredFields??[]}get _floorFilterClause(){const a=B.getFloorFilterClause(this);return null!=a?z.WhereClause.create(a,this.layer.fieldsIndex):null}get _excludeObjectIdsSorted(){const a=this.layer.excludeObjectIds.toArray();return a.length?a.sort((b,c)=>b-c):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?
Array.from(this._setVisibilityHiddenObjectIds).sort((a,b)=>a-b):null}get lodFactor(){return this.view?.qualitySettings?.sceneService?.object?.lodFactor??1}get lodCrossfadeUncoveredDuration(){return this.view?.qualitySettings?.fadeDuration??0}get updatingProgressValue(){return this._controller?.updatingProgress??0}initialize(){this._fieldsHelper=new M.SceneLayerViewRequiredFields({layerView:this});this._updatingHandles.add(()=>this.layer.rangeInfos,b=>this._rangeInfosChanged(b),q.initial);this._updatingHandles.add(()=>
this.layer.renderer,b=>this._updatingHandles.addPromise(this._rendererChange(b)),q.initial);const a=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,a);this._updatingHandles.add(()=>this.mergedFilter,a);this._updatingHandles.add(()=>this._floorFilterClause,a);this._updatingHandles.add(()=>this._excludeObjectIdsSorted,a);this._updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,a);this._updatingHandles.add(()=>this.viewFilter?.sortedObjectIds,a);this._updatingHandles.add(()=>
this.viewFilter?.parsedWhereClause,a);this._updatingHandles.add(()=>this.getTimeFilterDependencies(),a);this._updatingHandles.add(()=>[this.viewFilter?.parsedGeometry,this.mergedFilter?.spatialRelationship,this.layer.filter?.spatialRelationship],()=>this._geometryFilterChange());p.sceneLayerEditingEnabled()&&this.i3sOverrides.is3DOFL&&this._updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,a);this.addHandles(this.layer.on("apply-edits",b=>this._updatingHandles.addPromise(b.result)));
this.addHandles(this.layer.on("edits",b=>{const c=this._pendingEditsQueue.then(()=>this._handleEdits(b)).then();this._pendingEditsQueue=c;this._updatingHandles.addPromise(c)}))}destroy(){this._fieldsHelper=w.destroyMaybe(this._fieldsHelper)}_rangeInfosChanged(a){null!=a&&0<a.length&&v.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const a={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};
return this.mergedFilter?.createQuery(a)??new n(a)}queryExtent(a,b){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(a),b?.signal)}queryFeatureCount(a,b){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(a),b?.signal)}queryFeatures(a,b){return this._ensureQueryEngine().executeQuery(this._ensureQuery(a),b?.signal).then(c=>{if(!c?.features)return c;const d=this.layer;for(const h of c.features)h.layer=d,h.sourceLayer=d;return c})}queryObjectIds(a,b){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(a),
b?.signal)}_ensureQueryEngine(){this._queryEngine||(this._queryEngine=this._createQueryEngine());return this._queryEngine}_createQueryEngine(){const a=E.createGetFeatureExtent(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new G.I3SQueryEngine({layerView:this,priority:R.TaskPriority.FEATURE_QUERY_ENGINE,spatialIndex:new I.I3SQueryFeatureStore({featureAdapter:new H.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??
[],getFeatureExtent:a}),forAllFeatures:(b,c)=>this._forAllFeatures((d,h,S)=>b({id:d,index:h,meta:S}),c,C.ForAllFeaturesMode.QUERYABLE),getFeatureExtent:a,sourceSpatialReference:k.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(a){const b=this._highlights;if(a instanceof n){const {set:c,handle:d}=b.acquireSet();this.queryObjectIds(a).then(h=>b.setFeatureIds(c,h));return d}return super.highlight(a)}createInteractiveEditSession(a){return l.createInteractiveEditSession(this._attributeEditingContext,
a)}_createLayerGraphic(a){a=new u(null,null,a);a.layer=this.layer;a.sourceLayer=this.layer;return a}getFilters(){const a=super.getFilters();p.sceneLayerEditingEnabled()&&this.i3sOverrides.is3DOFL&&0<this.i3sOverrides.sortedGeometryChangedObjectIds.length&&a.push((d,h)=>{0<=h.node.index&&k.objectIdFilter(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,d)});const b=this._setVisibilityHiddenObjectIdsSorted;null!=b&&a.push(d=>k.objectIdFilter(b,!1,d));const c=this._excludeObjectIdsSorted;null!=c&&
a.push(d=>k.objectIdFilter(c,!1,d));this._floorFilterClause&&this.addSqlFilter(a,this._floorFilterClause,this.logError);this.addSqlFilter(a,this.parsedDefinitionExpression,this.logError);null!=this.viewFilter&&this.viewFilter.addFilters(a,this.view,this._controller.crsIndex,this._collection);return a}setVisibility(a,b){b?this._setVisibilityHiddenObjectIds.delete(a):this._setVisibilityHiddenObjectIds.add(a)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||null!=this.viewFilter&&this.viewFilter.updating||
null!=this.i3sOverrides&&this.i3sOverrides.updating}_ensureQuery(a){return this._addDefinitionExpressionToQuery(null==a?this.createQuery():n.from(a))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:a=>this._forAllNodes(b=>null!=b?a(b.node,b.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,
getAttributeData:a=>this.getAttributeData(a),setAttributeData:(a,b)=>this.setAttributeData(a,b),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(a){const b=p.sceneLayerEditingEnabled(),c=this._attributeEditingContext;a=await l.normalizeEditResultsEvent(c,a);b&&l.processGeometryEdits(c,a);l.processAttributeEdits(c,a)}get hasGeometryFilter(){return null!=this.viewFilter?.parsedGeometry}computeNodeFiltering(a){const b=this.viewFilter;return null==b||!this.view.spatialReference||b.isMBSGeometryVisible(a,
this.view.spatialReference,this._controller.crsIndex)?t.NodeFilterImpact.Unmodified:t.NodeFilterImpact.Culled}};f.__decorate([g.property()],e.prototype,"i3slayer",null);f.__decorate([g.property(O.updatingProgress)],e.prototype,"updatingProgress",void 0);f.__decorate([g.property({type:A})],e.prototype,"filter",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"viewFilter",null);f.__decorate([g.property(m.requiredFields)],e.prototype,"requiredFields",null);f.__decorate([g.property(m.availableFields)],
e.prototype,"availableFields",void 0);f.__decorate([g.property()],e.prototype,"_fieldsHelper",void 0);f.__decorate([g.property()],e.prototype,"_floorFilterClause",null);f.__decorate([g.property()],e.prototype,"_excludeObjectIdsSorted",null);f.__decorate([g.property()],e.prototype,"_setVisibilityHiddenObjectIds",void 0);f.__decorate([g.property()],e.prototype,"_setVisibilityHiddenObjectIdsSorted",null);f.__decorate([g.property()],e.prototype,"lodFactor",null);f.__decorate([g.property()],e.prototype,
"updatingProgressValue",null);return e=f.__decorate([y.subclass("esri.views.3d.layers.SceneLayerView3D")],e)});