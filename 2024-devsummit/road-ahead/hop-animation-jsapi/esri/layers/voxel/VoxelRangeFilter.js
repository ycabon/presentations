// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,c,f,g,h,e){a=class extends a.ClonableMixin(d.JSONSupport){constructor(){super(...arguments);this.enabled=!1;this.range=null}};b.__decorate([c.property({type:Boolean,json:{default:!1,write:!0}})],a.prototype,"enabled",void 0);b.__decorate([c.property({type:[Number],
json:{write:!0}})],a.prototype,"range",void 0);return a=b.__decorate([e.subclass("esri.layers.voxel.VoxelRangeFilter")],a)});