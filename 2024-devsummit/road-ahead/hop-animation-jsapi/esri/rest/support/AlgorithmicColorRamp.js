// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./ColorRamp".split(" "),function(b,e,f,c,g,h,k,a){var d;a=d=class extends a{constructor(l){super(l);this.toColor=this.fromColor=this.algorithm=null;this.type="algorithmic"}clone(){return new d({fromColor:f.clone(this.fromColor),toColor:f.clone(this.toColor),algorithm:this.algorithm})}};
b.__decorate([h.enumeration({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],a.prototype,"algorithm",void 0);b.__decorate([c.property({type:e,json:{type:[g.Integer],write:!0}})],a.prototype,"fromColor",void 0);b.__decorate([c.property({type:e,json:{type:[g.Integer],write:!0}})],a.prototype,"toColor",void 0);b.__decorate([c.property({type:["algorithmic"]})],a.prototype,"type",void 0);return a=d=b.__decorate([k.subclass("esri.rest.support.AlgorithmicColorRamp")],
a)});