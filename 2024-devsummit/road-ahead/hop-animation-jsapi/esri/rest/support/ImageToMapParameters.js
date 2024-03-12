// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ../../geometry/SpatialReference".split(" "),function(b,g,a,h,c,p,q,r,k,l,e,m){a=class extends a.ClonableMixin(h.JSONSupport){constructor(){super(...arguments);this.outSpatialReference=this.rasterId=
this.geometry=null;this.depthOffset=0;this.adjust=!1}writeGeometry(d,f,n){null!=d&&(f.geometryType=e.getJsonType(d),f[n]={...d.toJSON(),spatialReference:void 0})}};b.__decorate([c.property({types:g.geometryTypes,json:{read:e.fromJSON,write:!0}})],a.prototype,"geometry",void 0);b.__decorate([l.writer("geometry")],a.prototype,"writeGeometry",null);b.__decorate([c.property({json:{write:!0}})],a.prototype,"rasterId",void 0);b.__decorate([c.property({type:m,json:{name:"outSR",write:!0}})],a.prototype,
"outSpatialReference",void 0);b.__decorate([c.property({json:{name:"options.DOff",write:!0}})],a.prototype,"depthOffset",void 0);b.__decorate([c.property({json:{name:"options.Adjust",write:!0}})],a.prototype,"adjust",void 0);return a=b.__decorate([k.subclass("esri.rest.support.ImageToMapParameters")],a)});