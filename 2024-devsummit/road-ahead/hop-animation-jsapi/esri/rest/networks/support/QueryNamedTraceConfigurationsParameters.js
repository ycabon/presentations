// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,h,k,g){var d;a=d=class extends a.JSONSupport{static from(e){return f.ensureClass(d,e)}constructor(e){super(e);this.globalIds=[];this.creators=[];this.tags=[];this.names=[]}};b.__decorate([c.property({type:[String],json:{write:!0}})],
a.prototype,"globalIds",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"creators",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"tags",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"names",void 0);return a=d=b.__decorate([g.subclass("esri.rest.networks.support.QueryNamedTraceConfigurationsParameters")],a)});