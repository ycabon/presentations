// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,d,h,k,l,e,f){a=class extends a.ClonableMixin(c.JSONSupport){constructor(g){super(g);this.type="georeferenced";this.origin=null}};b.__decorate([e.enumeration({georeferenced:"georeferenced"},{readOnly:!0})],
a.prototype,"type",void 0);b.__decorate([d.property({type:[Number],nonNullable:!1,json:{write:!0}})],a.prototype,"origin",void 0);return a=b.__decorate([f.subclass("esri.geometry.support.MeshGeoreferencedVertexSpace")],a)});