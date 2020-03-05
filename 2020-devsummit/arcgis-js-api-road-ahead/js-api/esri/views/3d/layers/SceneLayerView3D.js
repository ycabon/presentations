// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../geometry ../../../Graphic ../../../core/arrayUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../core/unitUtils ../../../core/accessorSupport/decorators ../../../core/sql/WhereClause ../../../geometry/projection ../../../geometry/support/aaBoundingBox ../../../geometry/support/webMercatorUtils ../../../layers/support/fieldUtils ../../../tasks/support/Query ./I3SMeshView3D ./LayerView3D ./i3s/I3SGeometryUtil ./i3s/I3SQueryEngine ./i3s/I3SQueryFeatureAdapter ./i3s/I3SQueryFeatureStore ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/layerViewUpdatingProperties ./support/PopupSceneLayerView ../support/projectionUtils ../../layers/LayerView ../../layers/support/FeatureFilter ../../support/Scheduler".split(" "),
function(Z,aa,ba,D,g,E,F,t,G,H,I,l,J,K,L,e,M,q,r,u,v,w,N,O,m,P,Q,R,z,S,T,U,V,A,W,X,Y){var n=I.getLogger("esri.views.3d.layers.SceneLayerView3D"),B=T.defineFieldProperties(),C=[0,0,0,0];return function(x){function a(){var b=null!==x&&x.apply(this,arguments)||this;b._queryEngine=null;b.lodFactor=1;b.progressiveLoadFactor=1;b._elevationContext="scene";b._isIntegratedMesh=!1;b._supportsLabeling=!0;b._asyncModuleLoading=0;b._projectionEngineLoaded=!1;return b}D(a,x);Object.defineProperty(a.prototype,"filter",
{set:function(b){if(l.isNone(b))this._set("filter",null);else{var c=["contains","intersects","disjoint"];b.timeExtent?(n.warn("Filters with a timeExtent are not supported for mesh scene layers"),b=null):b.spatialRelationship&&-1===c.indexOf(b.spatialRelationship)&&(n.warn("Filters with spatialRelationship other than "+c.join(", ")+" are not supported for mesh scene layers"),b=null);this._set("filter",b)}},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedFilterWhereClause",
{get:function(){var b=l.isSome(this.filter)?this.filter.where:null;if(!b)return null;try{return M.WhereClause.create(b,this.layer.fieldsIndex)}catch(c){n.error("Failed to parse filter where clause: "+c)}return null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"filterSpatialRelationship",{get:function(){return l.isSome(this.filter)?this.filter.spatialRelationship:"intersects"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"parsedFilterGeometry",{get:function(){var b=
this;if(l.isNone(this.filter)||!this._geometryEngine)return null;var c=this.filter,d=c.geometry,a=c.distance,k=c.units,c=this.filterSpatialRelationship;if(!a)return m.processFilterGeometry(d,c);k=k||L.getUnitString(d.spatialReference);if(d.spatialReference.isWGS84)return d=this._geometryEngine.geodesicBuffer(d,a,k),m.processFilterGeometry(d,c);if(u.canProject(d,t.SpatialReference.WGS84))return d=u.project(this._geometryEngine.geodesicBuffer(u.project(d,t.SpatialReference.WGS84),a,k),d.spatialReference),
m.processFilterGeometry(d,c);if(!q.isSupported())return n.error("Filter by geodesic buffer (distance) unsupported due to lack of projection support."),null;if(!this._projectionEngineLoaded&&(this._loadAsyncModule(q.load()).then(function(){b._set("_projectionEngineLoaded",!0)}),!this._projectionEngineLoaded))return null;var f=null;try{f=q.project(d,t.SpatialReference.WGS84)}catch(p){}if(f)try{f=q.project(this._geometryEngine.geodesicBuffer(f,a,k),d.spatialReference)}catch(p){f=null}f||n.error("Filter by geodesic buffer (distance) unsupported, failed to project input geometry ("+
d.spatialReference.wkid+") to WGS84.");return m.processFilterGeometry(f,c)},enumerable:!0,configurable:!0});a.prototype.initialize=function(){for(var b=this,c=0,a=["layer.renderer","layer.labelingInfo","layer.labelsVisible","definitionExpressionFields","filter"];c<a.length;c++){var h=a[c];this.updatingHandles.add(this,h,function(){return b.updatingHandles.addPromise(b._updateRequiredFields())})}this._updateRequiredFields();this.updatingHandles.add(this.layer,"rangeInfos",function(a){return b._rangeInfosChanged(a)},
2);this.updatingHandles.add(this.layer,"renderer",function(a){return b.updatingHandles.addPromise(b._rendererChange(a))},2);c=0;for(a=["parsedDefinitionExpression","layer.objectIdFilter","filter","parsedFilterWhereClause","parsedFilterGeometry"];c<a.length;c++)h=a[c],this.updatingHandles.add(this,h,function(){return b._filterChange()})};a.prototype.destroy=function(){};a.prototype._updateRequiredFields=function(){return F(this,void 0,void 0,function(){var b,a,d,h,k,f,p,e,g,m,y;return E(this,function(c){switch(c.label){case 0:return b=
this,d=a=b.layer,h=d.fields,k=d.renderer,f=b.definitionExpressionFields,p=new Set,[4,J.eachAlways([k?k.collectRequiredFields(p,h):null,v.collectLabelingFields(p,a),l.isSome(this.filter)?v.collectFilterFields(p,a,this.filter):null])];case 1:e=c.sent();g=0;for(m=e;g<m.length;g++)y=m[g],y.error&&n.error(y.error);v.collectFields(p,h,f);this._set("requiredFields",K.valuesOfSet(p).sort());return[2]}})})};a.prototype._rangeInfosChanged=function(b){null!=b&&0<b.length&&n.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};
a.prototype.createQuery=function(){var b={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return l.isSome(this.filter)?this.filter.createQuery(b):new w(b)};a.prototype.queryExtent=function(b){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(b))};a.prototype.queryFeatureCount=function(b){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(b))};a.prototype.queryFeatures=function(b){return this._ensureQueryEngine().executeQuery(this._ensureQuery(b))};
a.prototype.queryObjectIds=function(b){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(b))};a.prototype._ensureQueryEngine=function(){this._queryEngine||(this._queryEngine=this._createQueryEngine());return this._queryEngine};a.prototype._createQueryEngine=function(){var b=this,a=this._createGetFeatureExtent();return new P.default({layerView:this,task:Y.Task.FEATURE_QUERY_ENGINE,spatialIndex:new R.default({featureAdapter:new Q.I3SQueryFeatureAdapter({objectIdField:this.layer.objectIdField,
attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:a}),forAllFeatures:function(a,c){return b._forAllFeatures(function(b,c,d){return a({id:b,index:c,meta:d})},c,2)},getFeatureExtent:a,sourceSpatialReference:z.getIndexCrs(this.layer),viewSpatialReference:this.view.spatialReference})})};a.prototype._createGetFeatureExtent=function(){var b=this,a=new Float64Array(24),d=this.view.renderSpatialReference,h=this.view.spatialReference;return function(c){if(!c.meta.featureExtents){var f=
new Float64Array(6*c.meta.featureIds.length);c.meta.featureExtents=f;for(var k=0;k<f.length;k+=6)f[k]=Number.POSITIVE_INFINITY}f=new Float64Array(c.meta.featureExtents.buffer,6*c.index*Float64Array.BYTES_PER_ELEMENT,6);return f[0]===Number.POSITIVE_INFINITY?(m.boundingBoxCornerPoints(c.index,b._collection,c.meta.objectHandle,a),A.bufferToBuffer(a,d,0,a,h,0,8)?r.expandWithBuffer(r.NEGATIVE_INFINITY,a,0,8,f):r.set(f,r.ZERO)):f}};a.prototype.highlight=function(b){var a=this._highlights;if(b instanceof
w){var d=a.acquireSet(),h=d.set,d=d.handle;this.queryObjectIds(b).then(function(b){return a.setFeatureIds(h,b)});return d}return this.inherited(arguments)};a.prototype._createLayerGraphic=function(b){b=new G(null,null,b);b.layer=this.layer;b.sourceLayer=this.layer;return b};a.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};a.prototype.isUpdating=function(){return this.updatingMeshView3D||0<this._asyncModuleLoading};a.prototype.getFilters=
function(){var b=this,a=this.inherited(arguments);if(this.layer.objectIdFilter){var d=new Float64Array(this.layer.objectIdFilter.ids),h="include"===this.layer.objectIdFilter.method;d.sort();a.push(function(a){return b._objectIdFilter(d,h,a)})}this.addSqlFilter(a,this.parsedDefinitionExpression,this.definitionExpressionFields,this.logError);if(l.isSome(this.filter)){var k=this.parsedFilterGeometry;l.isSome(k)&&a.push(function(a,c){return b._geometryFilter(a,c,k,b.filterSpatialRelationship)});if(this.filter.objectIds){var f=
new Float64Array(this.filter.objectIds);f.sort();a.push(function(a){return b._objectIdFilter(f,!0,a)})}}l.isSome(this.parsedFilterWhereClause)&&this.addSqlFilter(a,this.parsedFilterWhereClause,this.parsedFilterWhereClause.fieldNames,this.logError);return a};a.prototype._geometryFilter=function(a,c,d,h){var b=d[0].spatialReference||this.view.spatialReference;if(A.mbsToMbs(c.node.mbs,this._controller.crsIndex,C,b))for(var f=m.acquireMaskFilterContext(h,this.view,b,this._collection,c.objectHandle),g=
m.computeMaskNodeMBS(C,f),b=function(b){if(0===a.length)return{value:void 0};switch(m.testMaskWithGeometry(b,g,h)){case 1:return a.length=0,{value:void 0};case 0:return"continue"}z.filterInPlace(a,c.featureIds,function(a){return m.filterWithMask(b,a,f)})},e=0;e<d.length;e++){var l=b(d[e]);if("object"===typeof l)return l.value}else n.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter")};a.prototype._filterChange=function(){var a=this;l.isSome(this.filter)&&
this.filter.geometry&&!this._geometryEngine?this._loadAsyncModule(m.loadGeometryEngine()).then(function(b){a.destroyed||(a._set("_geometryEngine",b),a._applyFilters(!0))}):this.inherited(arguments)};a.prototype._loadAsyncModule=function(a){var b=this;this._set("_asyncModuleLoading",this._asyncModuleLoading+1);var d=function(){return b._set("_asyncModuleLoading",b._asyncModuleLoading-1)};return a.then(function(a){d();return a},function(a){d();throw a;})};a.prototype._objectIdFilter=function(a,c,d){for(var b=
0,e=0;b<d.length;)0<=H.binaryIndexOf(a,d[b])===c&&(d[e]=d[b],e++),b++;d.length=e};a.prototype._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(l.isNone(a)?this.createQuery():w.from(a))};g([e.property()],a.prototype,"layer",void 0);g([e.property({dependsOn:["updatingMeshView3D","_asyncModuleLoading"]})],a.prototype,"updating",void 0);g([e.property({dependsOn:["_controller.rootNodeVisible"]})],a.prototype,"suspended",void 0);g([e.property(U.updatingProgress)],a.prototype,"updatingProgress",
void 0);g([e.property({type:X})],a.prototype,"filter",null);g([e.property({readOnly:!0,dependsOn:["filter.where"]})],a.prototype,"parsedFilterWhereClause",null);g([e.property({readOnly:!0,dependsOn:["filter.spatialRelationship"]})],a.prototype,"filterSpatialRelationship",null);g([e.property({readOnly:!0,dependsOn:"filter.geometry filter.distance filter.units filterSpatialRelationship _geometryEngine _projectionEngineLoaded".split(" ")})],a.prototype,"parsedFilterGeometry",null);g([e.property(B.requiredFields)],
a.prototype,"requiredFields",void 0);g([e.property(B.availableFields)],a.prototype,"availableFields",void 0);g([e.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],a.prototype,"lodFactor",void 0);g([e.property({readOnly:!0,aliasOf:"_controller.updatingProgress"})],a.prototype,"updatingProgressValue",void 0);g([e.property({readOnly:!0})],a.prototype,"_asyncModuleLoading",void 0);g([e.property({readOnly:!0})],a.prototype,"_geometryEngine",void 0);g([e.property({readOnly:!0})],
a.prototype,"_projectionEngineLoaded",void 0);return a=g([e.subclass("esri.views.3d.layers.SceneLayerView3D")],a)}(e.declared(N.I3SMeshView3D(S.DefinitionExpressionSceneLayerView(V.PopupSceneLayerView(O.LayerView3D(W))))))});