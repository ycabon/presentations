// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../Basemap ../Viewpoint ../core/asyncUtils ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../core/libs/gl-matrix-2/vec3 ../core/libs/gl-matrix-2/vec3f64 ../layers/Layer ../support/basemapUtils ../views/3d/environment/SceneViewLighting ../views/3d/support/mathUtils ../webdoc/support/Thumbnail ./Environment ./Lighting ./support/Description ./support/SlideGround ./support/SlideVisibleLayer ./support/Title".split(" "),
function(U,V,w,G,g,n,h,H,I,J,x,K,L,M,k,f,r,y,t,N,z,O,P,l,A,Q,q,B,C,m){function D(e){if("building-scene"===e.type||"map-image"===e.type)return e.allSublayers}function E(e){if(e=D(e))return e.filter(function(b){return b.visible}).map(function(b){return b.id}).toArray()}function R(e,b){e=b-e;e>F&&(e-=u);e<-F&&(e+=u);return e}var S=0,v=x.ofType(C.default),T=M.getLogger("esri.webscene.Slide"),u=86400,F=43200;return function(e){function b(a){a=e.call(this,a)||this;a._applyToController=null;a.id=Date.now().toString(16)+
"-slide-"+S++;a.title=new m.default;a.description=new q.default;a.thumbnail=new l.default;a.viewpoint=null;a.basemap=null;a.ground=null;a.environment=new A;a.visibleLayers=new v;return a}G(b,e);b.prototype.castTitle=function(a){return"string"===typeof a?new m.default({text:a}):r.ensureType(m.default,a)};b.prototype.castDescription=function(a){return"string"===typeof a?new q.default({text:a}):r.ensureType(q.default,a)};b.prototype.castThumbnail=function(a){return"string"===typeof a?new l.default({url:a}):
r.ensureType(l.default,a)};b.prototype.castBasemap=function(a){return z.ensureType(a)};Object.defineProperty(b.prototype,"visibleLayers",{set:function(a){this._set("visibleLayers",K.referenceSetter(a,this._get("visibleLayers"),v))},enumerable:!0,configurable:!0});b.prototype.castVisibleLayers=function(a){return a&&"function"===typeof a.map?a.map(function(a){if("string"===typeof a)return{id:a};if(a instanceof N){var c=E(a);return{id:a.id,sublayerIds:c}}if(a.id)return{id:a.id,sublayerIds:a.sublayerIds};
T.warn('Invalid visible layer, expected { id }, Layer or "id"');return a}):null};b.prototype.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||
null})};b.prototype._updateVisibleLayersFrom=function(a){var b=this,c=[];return k.eachAlways(this._allLayers(a.map).map(function(b){return a.whenLayerView(b).then(function(a){if(a.visible){var d=E(b);c.push(new C.default({id:a.layer.id,sublayerIds:d}))}})}).toArray()).then(function(){b.visibleLayers.removeAll();b.visibleLayers.addMany(c)})};b.prototype.updateFrom=function(a,b){var c=this;b={screenshot:w({format:"jpeg",quality:80,width:120,height:75,disableSlice:!0},b&&b.screenshot)};return a.when(function(){c.viewpoint=
a.viewpoint.clone();c.environment.lighting=Q.prototype.clone.apply(a.environment.lighting);c.basemap=a.map.basemap&&a.map.basemap.clone()||null;c.ground=a.map.ground?B.default.fromGround(a.map.ground):null;return c._updateVisibleLayersFrom(a)}).then(function(){return a.takeScreenshot(b.screenshot)}).then(function(a){c.thumbnail=new l.default({url:a.dataUrl});return c})};b.prototype.applyTo=function(a,b){return h(this,void 0,void 0,function(){var c,p,d;return n(this,function(e){this._applyToController&&
this._applyToController.abort();this._applyToController=c=k.createAbortController();k.onAbortOrThrow(b,function(){return c.abort()});p=w({animate:!0},b,{signal:this._applyToController.signal});d=k.createDeferred(function(){return c.abort()});this._applyTo(a,p,c).then(d.resolve,d.reject);return[2,d.promise]})})};b.prototype._applyTo=function(a,b,c){return h(this,void 0,void 0,function(){var d,e=this;return n(this,function(p){switch(p.label){case 0:return[4,J.result(function(){return h(e,void 0,void 0,
function(){return n(this,function(c){switch(c.label){case 0:return[4,this._applyBasemap(a,b)];case 1:return c.sent(),this._applyLayerVisibility(a),this._applyGround(a),[4,this._applyViewpoint(a,b)];case 2:return c.sent(),[2]}})})}())];case 1:d=p.sent();this._applyToController===c&&(this._applyToController=null);if(!1===d.ok)throw d.error;return[2,this]}})})};b.prototype._applyBasemap=function(a,b){return h(this,void 0,void 0,function(){var c;return n(this,function(d){switch(d.label){case 0:if(!this.basemap)return[3,
5];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,this.basemap.load(b)];case 2:return d.sent(),[3,4];case 3:c=d.sent();if(k.isAbortError(c))throw c;return[3,4];case 4:a.map.basemap=z.clonePreservingTiledLayers(this.basemap,a.map.basemap),d.label=5;case 5:return[2]}})})};b.prototype._applyGround=function(a){this.ground&&(a.map.ground=this.ground.cloneAndApplyTo(a.map.ground))};b.prototype._allLayers=function(a){var b=new x;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};b.prototype._collectLayers=
function(a,b){var c=this;a.layers.forEach(function(a){b.add(a);a.layers&&c._collectLayers(a,b)})};b.prototype._applyLayerVisibility=function(a){var b=this;this.visibleLayers&&this._allLayers(a.map).forEach(function(a){var c=b.visibleLayers.find(function(b){return b.id===a.id});a.visible=null!=c;var d=c&&c.sublayerIds,c=D(a);d&&c&&c.forEach(function(a){return a.visible=0<=d.indexOf(a.id)})})};b.prototype._applyViewpoint=function(a,b){return h(this,void 0,void 0,function(){return n(this,function(c){switch(c.label){case 0:if(!this.viewpoint||
b.ignoreViewpoint)return[3,5];this.viewpoint.camera.fov=a.camera.fov;return b.animate?this.get("environment.lighting.date")?[4,this._animateToLighting(a,b)]:[3,2]:[3,4];case 1:return c.sent(),[2];case 2:return a.environment.lighting=this.environment.lighting.clone(),[4,a.goTo(this.viewpoint,b)];case 3:c.sent(),c.label=4;case 4:return a.viewpoint=this.viewpoint,a.environment.lighting=this.environment.lighting.clone(),[3,6];case 5:a.environment.lighting=this.environment.lighting.clone(),c.label=6;case 6:return[2]}})})};
b.prototype._animateToLighting=function(a,b){return h(this,void 0,void 0,function(){var c,d,e,f=this;return n(this,function(g){c=null;"global"===a.viewingMode&&(c=this._animateLightingWithCamera(a));a.environment.lighting.cameraTrackingEnabled=!1;a.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);d=a.goTo(this.viewpoint,b);k.ignoreAbortErrors(d.then(function(){a.environment.lighting=
f.environment.lighting.clone()}));e=function(){c&&c.remove();a.environment.lighting.cameraTrackingEnabled=!0};return[2,d.then(function(){a.environment.lighting=O.default.fromWebsceneLighting(f.environment.lighting);e()},function(a){e();throw a;})]})})};b.prototype._getTime=function(a){var b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]};b.prototype._setTime=function(a,b,c){a.setTime(b);a.setUTCHours(c/3600);a.setUTCMinutes(c%3600/60);a.setUTCSeconds(c%3600%
60);return a};b.prototype._animateLightingWithCamera=function(a){var b=this,c=this._getTime(new Date(a.environment.lighting.date.toString())),e=c[0],f=c[1],c=this._getTime(this.environment.lighting.date),g=c[0],n=R(f,c[1]),h=a.renderCoordsHelper,k=t.vec3f64.create();h.toRenderCoords(a.camera.position,k);var l=t.vec3f64.create();h.toRenderCoords(this.viewpoint.camera.position,l);var m=t.vec3f64.create(),q=new Date;return a.watch("camera",function(c){h.toRenderCoords(c.position,m);var d=y.vec3.squaredDistance(k,
m),p=y.vec3.squaredDistance(l,m);c=0;0!==d+p&&(c=d/(d+p));d=e+(g-e)*c;c=P.moduloPositive(f+n*c,u);a.environment.lighting.date=b._setTime(q,d,c)})};b.createFrom=function(a,b){return(new this).updateFrom(a,b)};g([f.property({type:String,json:{write:{isRequired:!0}}})],b.prototype,"id",void 0);g([f.property({type:m.default,json:{default:function(){return new m.default({text:""})},write:{isRequired:!0}}})],b.prototype,"title",void 0);g([f.cast("title")],b.prototype,"castTitle",null);g([f.property({type:q.default,
json:{write:{overridePolicy:function(a){return{enabled:!(!a||!a.text)}}}}})],b.prototype,"description",void 0);g([f.cast("description")],b.prototype,"castDescription",null);g([f.property({type:l.default,json:{default:function(){return new l.default({url:""})},write:{isRequired:!0}}})],b.prototype,"thumbnail",void 0);g([f.cast("thumbnail")],b.prototype,"castThumbnail",null);g([f.property({type:I,nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"viewpoint",void 0);g([f.property({type:H,json:{read:{source:"baseMap"},
write:{target:"baseMap"}}})],b.prototype,"basemap",void 0);g([f.cast("basemap")],b.prototype,"castBasemap",null);g([f.property({type:B.default,json:{write:!0}})],b.prototype,"ground",void 0);g([f.property({type:v,json:{write:{isRequired:!0}}})],b.prototype,"visibleLayers",null);g([f.cast("visibleLayers")],b.prototype,"castVisibleLayers",null);g([f.property({type:A,json:{write:!0}})],b.prototype,"environment",void 0);return b=g([f.subclass("esri.webscene.Slide")],b)}(f.declared(L.JSONSupport))});