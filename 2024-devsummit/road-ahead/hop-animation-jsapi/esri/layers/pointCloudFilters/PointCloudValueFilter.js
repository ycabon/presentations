// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./PointCloudFilter".split(" "),function(b,e,d,a,l,f,g,h){var c;a=c=class extends h{constructor(k){super(k);this.mode="exclude";this.type="value";this.values=[]}clone(){return new c({field:this.field,mode:this.mode,values:e.clone(this.values)})}};b.__decorate([d.property({type:["exclude",
"include"],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"mode",void 0);b.__decorate([f.enumeration({pointCloudValueFilter:"value"})],a.prototype,"type",void 0);b.__decorate([d.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"values",void 0);return a=c=b.__decorate([g.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],a)});