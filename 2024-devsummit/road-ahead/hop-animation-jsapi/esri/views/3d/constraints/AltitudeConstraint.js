// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Clonable ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../state/Constraints".split(" "),function(a,b,e,c,g,h,k,f,d){a.AltitudeConstraint=class extends e.Clonable{constructor(){super(...arguments);this.min=d.earthAltitudeConstraint.min;this.max=d.earthAltitudeConstraint.max}};b.__decorate([c.property({type:Number})],a.AltitudeConstraint.prototype,
"min",void 0);b.__decorate([c.property({type:Number})],a.AltitudeConstraint.prototype,"max",void 0);a.AltitudeConstraint=b.__decorate([f.subclass("esri.views.3d.constraints.AltitudeConstraint")],a.AltitudeConstraint);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});