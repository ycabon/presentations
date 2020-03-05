// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/Collection ../core/CollectionFlattener ../core/Error ../core/lang ../core/loadAll ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/SpatialReference ./Layer ./buildingSublayers/BuildingComponentSublayer ./buildingSublayers/BuildingGroupSublayer ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./support/BuildingFilter ./support/BuildingSummaryStatistics ./support/commonProperties".split(" "),
function(M,N,O,r,c,P,Q,t,u,h,k,v,w,x,y,z,A,d,B,C,D,E,f,F,G,H,I,J,K,l,g){var m=w.getLogger("esri.layers.BuildingSceneLayer"),n=t.ofType(K),p=k.clone(f.sublayersProperty);p.json.origins["web-scene"]={type:[E],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}};return function(q){function b(a){a=q.call(this,a)||this;a.operationalLayerType="BuildingSceneLayer";a.allSublayers=new u({root:a,rootCollectionNames:["sublayers"],getChildrenFunction:function(a){return"building-group"===a.type?a.sublayers:
null}});a.sublayers=null;a.sublayerOverrides=null;a.filters=new n;a.activeFilterId=null;a.summaryStatistics=null;a.outFields=null;a.type="building-scene";return a}r(b,q);b.prototype.normalizeCtorArgs=function(a){return"string"===typeof a?{url:a}:a};b.prototype.readSublayers=function(a,b,L){var e=this;a=f.readSublayers(a,b,L);f.forEachSublayer(a,function(a){return a.layer=e});this.sublayerOverrides&&(this.applySublayerOverrides(a,this.sublayerOverrides),this.sublayerOverrides=null);return a};b.prototype.applySublayerOverrides=
function(a,b){var e=b.overrides,d=b.context;f.forEachSublayer(a,function(a){return a.read(e.get(a.id),d)})};b.prototype.readSublayerOverrides=function(a,b){for(var e=new Map,d=0;d<a.length;d++){var c=a[d];null==c||"object"!==typeof c||"number"!==typeof c.id?b.messages.push(new h("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:c})):e.set(c.id,c)}return{overrides:e,context:b}};b.prototype.writeSublayerOverrides=function(a,
b,c){var e=[];f.forEachSublayer(this.sublayers,function(a){a=a.write({},c);1<Object.keys(a).length&&e.push(a)});0<e.length&&(b.sublayers=e)};b.prototype.writeUnappliedOverrides=function(a,b){b.sublayers=[];a.overrides.forEach(function(a){b.sublayers.push(k.clone(a))})};b.prototype.write=function(a,b){a=this.inherited(arguments);b&&"web-scene"===b.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,a,b):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,a));
return a};b.prototype.read=function(a,b){this.inherited(arguments);if(b&&"web-scene"===b.origin&&null!=a&&Array.isArray(a.sublayers)){var c=this.readSublayerOverrides(a.sublayers,b);this.sublayers?this.applySublayerOverrides(this.sublayers,c):this.sublayerOverrides=c}};b.prototype.readSummaryStatistics=function(a,b){return"string"===typeof b.statisticsHRef?(a=A.join(this.parsedUrl.path,b.statisticsHRef),new l({url:a})):null};Object.defineProperty(b.prototype,"elevationInfo",{set:function(a){this._set("elevationInfo",
a);this._validateElevationInfo()},enumerable:!0,configurable:!0});b.prototype.load=function(a){var b=this,c=x.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).then(function(){return b._fetchService(c)},function(){return b._fetchService(c)});this.addResolvingPromise(a);return z.resolve(this)};b.prototype.loadAll=function(){var a=this;return v.loadAll(this,function(b){f.forEachSublayer(a.sublayers,function(a){"building-group"!==a.type&&b(a)});a.summaryStatistics&&
b(a.summaryStatistics)})};b.prototype.validateLayer=function(a){if(!a.layerType||"Building"!==a.layerType)throw new h("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:a.layerType});};b.prototype._validateElevationInfo=function(){var a=this.elevationInfo;a&&("absolute-height"!==a.mode&&m.warn(".elevationInfo\x3d","Building scene layers only support absolute-height elevation mode"),a.featureExpressionInfo&&"0"!==a.featureExpressionInfo.expression&&
m.warn(".elevationInfo\x3d","Building scene layers do not support featureExpressionInfo"))};c([d.property({type:["BuildingSceneLayer"]})],b.prototype,"operationalLayerType",void 0);c([d.property({readOnly:!0})],b.prototype,"allSublayers",void 0);c([d.property(p)],b.prototype,"sublayers",void 0);c([d.reader("service","sublayers")],b.prototype,"readSublayers",null);c([d.property({type:n,nonNullable:!0,json:{write:!0}})],b.prototype,"filters",void 0);c([d.property({type:String,json:{write:!0}})],b.prototype,
"activeFilterId",void 0);c([d.property({readOnly:!0,type:l})],b.prototype,"summaryStatistics",void 0);c([d.reader("summaryStatistics",["statisticsHRef"])],b.prototype,"readSummaryStatistics",null);c([d.property({type:[String],json:{read:!1}})],b.prototype,"outFields",void 0);c([d.property(g.readOnlyService(B))],b.prototype,"fullExtent",void 0);c([d.property({type:["show","hide","hide-children"]})],b.prototype,"listMode",void 0);c([d.property(g.readOnlyService(C))],b.prototype,"spatialReference",void 0);
c([d.property(g.elevationInfo)],b.prototype,"elevationInfo",null);c([d.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);return b=c([d.subclass("esri.layers.BuildingSceneLayer")],b)}(d.declared(I.ScaleRangeLayer(J.SceneService(F.ArcGISService(G.OperationalLayer(H.PortalLayer(y.MultiOriginJSONMixin(D))))))))});