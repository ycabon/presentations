// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/factories/vec3f64".split(" "),function(b,a,c,d,k,l,m,e,f,g){a=class extends a.ClonableMixin(c.JSONSupport){constructor(h){super(h);this.type="local";this.origin=g.create()}};b.__decorate([e.enumeration({local:"local"},
{readOnly:!0})],a.prototype,"type",void 0);b.__decorate([d.property({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"origin",void 0);return a=b.__decorate([f.subclass("esri.geometry.support.MeshLocalVertexSpace")],a)});