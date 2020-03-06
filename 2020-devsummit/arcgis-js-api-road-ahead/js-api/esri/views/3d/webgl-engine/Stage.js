// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ./lib/AutoDisposable ./lib/GeometryRecord ./lighting/Lightsources ./parts/Model ./parts/RenderView".split(" "),function(l,m,e,r,t,u,c,n,g,p,v,h,w,x){function q(c){return"function"===typeof c.addParentStage&&"function"===typeof c.removeParentStage}
Object.defineProperty(m,"__esModule",{value:!0});l=function(k){function a(){var b=null!==k&&k.apply(this,arguments)||this;b.model=new w.Model;b._viewContent=[];b._mainLightDirection=g.vec3f64.fromValues(0,1,0);return b}r(a,k);f=a;a.prototype.initialize=function(){this._set("renderView",new x.RenderView(this.container,this,this.options));this.setLighting({lights:[new h.MainLight(g.vec3f64.fromValues(.7,.7,.7)),new h.AmbientLight(g.vec3f64.fromValues(.3,.3,.3))],groundLightingFactor:.5,globalFactor:.5})};
a.prototype.destroy=function(){v.pool.prune(0);this.dispose()};Object.defineProperty(a.prototype,"dirty",{get:function(){return this.model.getDirtySet().hasDirtyGeometryRecords()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"mainLightDirection",{get:function(){return this._mainLightDirection},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"lighting",{get:function(){return this._lighting},enumerable:!0,configurable:!0});a.prototype.setLighting=function(b){n.vec3.set(this._mainLightDirection,
0,0,0);for(var a=0,d=b.lights;a<d.length;a++){var c=d[a];if(c instanceof h.MainLight){n.vec3.negate(this._mainLightDirection,c.direction);break}}this._lighting=b;this.renderView.setNeedsRender()};a.prototype.forceAllAnimations=function(b){this.getAll(3).forEach(function(a){u.applySome(a.animation,function(a){return a.forceTime(b)})});this.renderView.setNeedsRender()};a.prototype.add=function(b,a){this.model.add(b,a);q(a)&&a.addParentStage(this);this.renderView.setNeedsRender()};a.prototype.remove=
function(b,a){this.renderView.setNeedsRender();b=this.model.remove(b,a);q(b)&&b.removeParentStage(this);return b};a.prototype.notifyDirty=function(b,a,d){this.model.notifyDirty(b,a,d);this.renderView.setNeedsRender()};a.prototype.processDirty=function(){var b=this.model.getDirtySet();if(b.hasDirtyGeometryRecords()){f.DebugSettings.logDirtySet&&console.log("Dirty set: "+this.model.getDirtySet().formatDebugInfo(!1));var a=b.commitLayers(this._viewContent);0<a[0].length+a[1].length+a[2].length&&this.renderView.modify(a[0],
a[1],a[2]);f.DebugSettings.logDirtySet&&(console.log("RGs add: "+a[0].map(function(b){return b.uniqueName})),console.log("RGs remove: "+a[1].map(function(b){return b.uniqueName})));b.commit();this.renderView.setNeedsRender()}};a.prototype.processDirtyLayer=function(b){b=this.model.getDirtySet().commitLayers([b]);0<b[0].length+b[1].length+b[2].length&&this.renderView.modify(b[0],b[1],b[2]);this.renderView.setNeedsRender()};a.prototype.getContent=function(b,a){return this.model.get(b,a)};a.prototype.getAll=
function(b){return this.model.getAll(b)};a.prototype.getCount=function(b){return this.model.getAll(b).size};a.prototype.getCamera=function(){return this.renderView.getCamera()};a.prototype.setCamera=function(b){this.renderView.setCamera(b)};a.prototype.getLayers=function(){return this.model.getAll(0)};a.prototype.getViewContent=function(){return this._viewContent.slice(0)};a.prototype.addToViewContent=function(b){for(var a=[],d=0;d<b.length;d++)-1===this._viewContent.indexOf(b[d])&&a.push(b[d]);0<
b.length&&(this.processDirty(),b=this.model.getDirtySet().getResidentRenderGeometriesFilteredByLayers(a),this.renderView.modify(b,[],[]),this._viewContent.push.apply(this._viewContent,a))};a.prototype.removeFromViewContent=function(a){this.processDirty();for(var b=this.model.getDirtySet(),d=this._viewContent,c=[],e=0;e<a.length;e++){var f=d.indexOf(a[e]);-1<f&&(d[f]=d[d.length-1],d.pop(),c.push(a[e]))}a=b.getResidentRenderGeometriesFilteredByLayers(c);this.renderView.modify([],a,[])};a.prototype.addRenderPlugin=
function(a,c){"intersect"in c&&this.sceneIntersectionHelper.addIntersectionHandler(c);this.renderView.renderPlugins.add(a,c)};a.prototype.removeRenderPlugin=function(a){"intersect"in a&&this.sceneIntersectionHelper.removeIntersectionHandler(a);this.renderView.renderPlugins.remove(a)};a.prototype.getContentDebugStrings=function(a){return this.model.formatDebugInfo(a)};var f;a.DebugSettings={endFrameContentValidation:!1,logDirtySet:!1};e([c.property({constructOnly:!0})],a.prototype,"options",void 0);
e([c.property({constructOnly:!0})],a.prototype,"sceneIntersectionHelper",void 0);e([c.property({constructOnly:!0})],a.prototype,"viewingMode",void 0);e([c.property({constructOnly:!0})],a.prototype,"container",void 0);e([p.autoDispose(),c.property()],a.prototype,"renderView",void 0);return a=f=e([c.subclass("esri.views.3d.webgl-engine.Stage")],a)}(c.declared(p.AutoDisposableMixin(t)));m.Stage=l});