// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../config ../request ../symbols ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/commonProperties ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/support/jsonUtils".split(" "),
function(C,D,f,g,d,h,k,l,m,n,p,q,r,c,t,u,v,w,x,y,z,A,B){return function(e){function a(b,a){b=e.call(this,b)||this;b.description=null;b.title=null;b.lineSymbol=null;b.pointSymbol=null;b.polygonSymbol=null;b.outSpatialReference=null;b.url=null;b.type="geo-rss";return b}g(a,e);a.prototype.normalizeCtorArgs=function(b,a){return"string"===typeof b?f({url:b},a):b};a.prototype.readFeatureCollections=function(b,a){a.featureCollection.layers.forEach(function(a){(a=a.layerDefinition.drawingInfo.renderer.symbol)&&
"esriSFS"===a.type&&a.outline&&-1!==a.outline.style.indexOf("esriSFS")&&(a.outline.style="esriSLSSolid")});return a.featureCollection.layers};a.prototype.load=function(a){var b=this,c=p.isSome(a)?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},a).then(function(){return b._fetchService(c)},function(){return b._fetchService(c)}));return r.resolve(this)};a.prototype._fetchService=function(a){return k(this,
void 0,void 0,function(){var b;return h(this,function(c){switch(c.label){case 0:return[4,m(l.geoRSSServiceUrl,{query:{url:this.url,refresh:this.loaded?!0:void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:a})];case 1:return b=c.sent().data,this.read(b,{origin:"service"}),[2]}})})};d([c.property()],a.prototype,"description",void 0);d([c.property()],a.prototype,"title",void 0);d([c.property()],a.prototype,"featureCollections",void 0);d([c.reader("service",
"featureCollections",["featureCollection.layers"])],a.prototype,"readFeatureCollections",null);d([c.property({type:A})],a.prototype,"lineSymbol",void 0);d([c.property({type:["show","hide"]})],a.prototype,"listMode",void 0);d([c.property({types:n.symbolTypes,json:{read:B.read}})],a.prototype,"pointSymbol",void 0);d([c.property({type:z})],a.prototype,"polygonSymbol",void 0);d([c.property()],a.prototype,"outSpatialReference",void 0);d([c.property(y.url)],a.prototype,"url",void 0);d([c.property({readOnly:!0,
json:{read:!1},value:"geo-rss"})],a.prototype,"type",void 0);return a=d([c.subclass("esri.layers.GeoRSSLayer")],a)}(c.declared(w.RefreshableLayer(u.OperationalLayer(v.PortalLayer(x.ScaleRangeLayer(q.MultiOriginJSONMixin(t)))))))});