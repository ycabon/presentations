// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./BaseFunctionArguments".split(" "),function(c,e,f,a,n,g,h,k){var d;a=d=class extends k{constructor(){super(...arguments);this.rasters=[]}writeRasters(l,m){m.rasters=l.map(b=>"number"===typeof b||"string"===typeof b?b:b.toJSON())}clone(){return new d({rasters:e.clone(this.rasters)})}};
c.__decorate([f.property({json:{write:!0}})],a.prototype,"rasters",void 0);c.__decorate([h.writer("rasters")],a.prototype,"writeRasters",null);return a=d=c.__decorate([g.subclass("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")],a)});