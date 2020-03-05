// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators ../../geometry/Polygon ../../geometry/SpatialReference ../../geometry/support/jsonUtils".split(" "),function(r,t,d,h,k,l,m,b,n,f,p){var q=new l.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(g){function c(a){a=g.call(this,a)||this;
a.bufferSpatialReference=null;a.distances=null;a.geodesic=!1;a.geometries=null;a.outSpatialReference=null;a.unionResults=!1;a.unit=null;return a}h(c,g);c.prototype.toJSON=function(){var a={unit:q.toJSON(this.unit),unionResults:this.unionResults,geodesic:this.geodesic},c=this.distances,b=this.outSpatialReference,d=this.bufferSpatialReference,e=this.geometries;if(e&&0<e.length){var f=e.map(function(a){a="extent"===a.type?n.fromExtent(a):a;return a.toJSON()}),g="extent"===e[0].type?"esriGeometryPolygon":
p.getJsonType(e[0]);a.geometries=JSON.stringify({geometryType:g,geometries:f});a.inSR=e[0].spatialReference.wkid?e[0].spatialReference.wkid:JSON.stringify(e[0].spatialReference.toJSON())}c&&(a.distances=c.join(","));b&&(a.outSR=b.wkid?b.wkid:JSON.stringify(b.toJSON()));d&&(a.bufferSR=d.wkid?d.wkid:JSON.stringify(d.toJSON()));return a};d([b.property({type:f,json:{write:!0}})],c.prototype,"bufferSpatialReference",void 0);d([b.property({type:[Number],json:{write:!0}})],c.prototype,"distances",void 0);
d([b.property({type:Boolean,json:{write:!0}})],c.prototype,"geodesic",void 0);d([b.property({types:[k.geometryTypes],json:{write:!0}})],c.prototype,"geometries",void 0);d([b.property({type:f,json:{write:!0}})],c.prototype,"outSpatialReference",void 0);d([b.property({type:Boolean,json:{write:!0}})],c.prototype,"unionResults",void 0);d([b.property({type:String,json:{write:!0}})],c.prototype,"unit",void 0);return c=d([b.subclass("esri.tasks.support.BufferParameters")],c)}(b.declared(m.JSONSupport))});