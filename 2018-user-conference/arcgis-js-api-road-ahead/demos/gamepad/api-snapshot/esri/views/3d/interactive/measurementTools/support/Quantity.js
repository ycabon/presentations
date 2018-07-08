// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./unitUtils"],function(e,f,b){return function(){function a(c,a){this.measure=b.measureForUnit(a);this.value=c;this.unit=a}Object.defineProperty(a.prototype,"isBaseUnit",{get:function(){return b.isBaseUnit(this.unit)},enumerable:!0,configurable:!0});a.prototype.toUnit=function(c){return new a(b.convertUnit(this.value,this.unit,c),c)};a.prototype.toBaseUnit=function(){return this.toUnit(b.baseUnitForUnit(this.unit))};a.prototype.toDecimalString=function(a,d){void 0===a&&
(a=2);return b.formatDecimal(this.value,this.unit,a,d)};return a}()});