// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Error ../core/lang ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/scheduling ../core/accessorSupport/decorators ./Layer ./mixins/PortalLayer".split(" "),function(q,r,f,c,g,h,k,l,m,d,n,p){return function(e){function b(a){a=e.call(this,a)||this;a.resourceInfo=null;a.type="unsupported";return a}f(b,e);b.prototype.initialize=function(){var a=this;this.addResolvingPromise(l.create(function(b,
d){m.schedule(function(){var b=a.resourceInfo&&(a.resourceInfo.layerType||a.resourceInfo.type),c="Unsupported layer type";b&&(c+=" "+b);d(new g("layer:unsupported-layer-type",c,{layerType:b}))})}))};b.prototype.read=function(a,b){var c={resourceInfo:a};null!=a.id&&(c.id=a.id);null!=a.title&&(c.title=a.title);this.inherited(arguments,[c,b])};b.prototype.write=function(a){return h.mixin(a||{},this.resourceInfo,{id:this.id})};c([d.property({readOnly:!0})],b.prototype,"resourceInfo",void 0);c([d.property({type:["show",
"hide"]})],b.prototype,"listMode",void 0);c([d.property({json:{read:!1},readOnly:!0,value:"unsupported"})],b.prototype,"type",void 0);return b=c([d.subclass("esri.layers.UnsupportedLayer")],b)}(d.declared(p.PortalLayer(k.MultiOriginJSONMixin(n))))});