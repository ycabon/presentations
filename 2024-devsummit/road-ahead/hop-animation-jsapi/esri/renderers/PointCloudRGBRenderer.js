// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./PointCloudRenderer".split(" "),function(b,d,e,a,l,f,g,h){var c;a=c=class extends h{constructor(k){super(k);this.type="point-cloud-rgb";this.field=null}clone(){return new c({...this.cloneProperties(),field:d.clone(this.field)})}};b.__decorate([f.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],
a.prototype,"type",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);return a=c=b.__decorate([g.subclass("esri.renderers.PointCloudRGBRenderer")],a)});