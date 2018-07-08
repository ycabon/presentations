// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./Color ./core/Collection ./core/collectionUtils ./core/Error ./core/JSONSupport ./core/Loadable ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators ./layers/Layer ./layers/support/types ./webdoc/support/opacityUtils".split(" "),function(g,C,m,t,f,u,v,n,w,x,y,z,h,d,A,B,p){var k=v.ofType(A),q=z.getLogger("esri.Ground");return function(r){function c(a){var b=r.call(this)||
this;b.opacity=1;b.surfaceDefaultColor=null;b.layers=new k;b.layers.on("after-add",function(a){a=a.item;a.parent&&a.parent!==b&&"remove"in a.parent&&a.parent.remove(a);a.parent=b;B.isOfType(a,["elevation","base-elevation"])||q.error("Layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")});b.layers.on("after-remove",function(a){a.item.parent=null});return b}t(c,r);l=c;c.prototype.initialize=
function(){this.when().catch(function(a){q.error("#load()","Failed to load ground",a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};c.prototype.normalizeCtorArgs=function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a=m({},a),delete a.resourceInfo);return a};Object.defineProperty(c.prototype,"layers",{set:function(a){this._set("layers",n.referenceSetter(a,this._get("layers"),k))},enumerable:!0,configurable:!0});c.prototype.writeLayers=function(a,
b,c,e){var d=[];a&&(e=m({},e,{layerContainerType:"ground"}),a.forEach(function(a){if(a.write){var b={};a.write(b,e)&&d.push(b)}else e&&e.messages&&e.messages.push(new w("layer:unsupported","Layers ("+a.title+", "+a.id+") of type '"+a.declaredClass+"' cannot be persisted in the ground",{layer:a}))}));b.layers=d};c.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this.when()};c.prototype.queryElevation=function(a,b){var c=this;return h.create(function(a){return g(["./layers/support/ElevationQuery"],
a)}).then(function(e){e=new e.ElevationQuery;var d=c.layers.filter(function(a){return"elevation"===a.type}).toArray();return e.queryAll(d,a,b)})};c.prototype.createElevationSampler=function(a,b){var c=this;return h.create(function(a){return g(["./layers/support/ElevationQuery"],a)}).then(function(e){e=new e.ElevationQuery;var d=c.layers.filter(function(a){return"elevation"===a.type}).toArray();return e.createSamplerAll(d,a,b)})};c.prototype.clone=function(){var a={resourceInfo:this.resourceInfo,opacity:this.opacity,
layers:this.layers.slice()};this.loaded&&(a.loadStatus="loaded");return new l(a)};c.prototype.read=function(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});return this.inherited(arguments)};c.prototype._loadFromSource=function(){var a=this.resourceInfo;return a?this._loadLayersFromJSON(a.data,a.context):h.resolve(null)};c.prototype._loadLayersFromJSON=function(a,b){var c=this,e=b&&b.origin||"web-scene",d=b&&b.portal||null,f=b&&b.url||null;return h.create(function(a){return g(["./portal/support/layersCreator"],
a)}).then(function(b){var g=[];a.layers&&Array.isArray(a.layers)&&g.push.apply(g,b.populateOperationalLayers(c.layers,a.layers,{context:{origin:e,url:f,portal:d,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}));return h.eachAlways(g)}).then(function(){})};f([d.property({type:k,json:{read:!1}}),d.cast(n.castForReferenceSetter)],c.prototype,"layers",null);f([d.writer("layers")],c.prototype,"writeLayers",null);f([d.property({readOnly:!0})],c.prototype,"resourceInfo",
void 0);f([d.property({type:Number,json:{read:{reader:p.transparencyToOpacity,source:"transparency"},write:{enabled:!1,writer:function(a,b){b.transparency=p.opacityToTransparency(a)},target:"transparency"}}})],c.prototype,"opacity",void 0);f([d.property({type:u,json:{write:!1}})],c.prototype,"surfaceDefaultColor",void 0);return c=l=f([d.subclass("esri.Ground")],c);var l}(d.declared(x,y))});