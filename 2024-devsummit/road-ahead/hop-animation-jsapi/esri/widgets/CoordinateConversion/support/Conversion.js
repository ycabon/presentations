// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a{constructor(e){super(e);this.format=null;this.position={coordinate:null,location:null}}get displayCoordinate(){return this.format?.getDisplayCoordinate(this.position?.coordinate)}};b.__decorate([c.property({readOnly:!0})],a.prototype,
"displayCoordinate",null);b.__decorate([c.property()],a.prototype,"format",void 0);b.__decorate([c.property()],a.prototype,"position",void 0);return a=b.__decorate([d.subclass("esri.widgets.CoordinateConversion.support.Conversion")],a)});