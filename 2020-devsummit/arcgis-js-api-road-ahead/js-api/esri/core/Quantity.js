// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./unitFormatUtils","./unitUtils"],function(e,f,d,b){return function(){function a(c,a){this.measure=b.measureForUnit(a);this.value=c;this.unit=a}Object.defineProperty(a.prototype,"isBaseUnit",{get:function(){return b.isBaseUnit(this.unit)},enumerable:!0,configurable:!0});a.prototype.toUnit=function(c){return new a(b.convertUnit(this.value,this.unit,c),c)};a.prototype.toBaseUnit=function(){return this.toUnit(b.baseUnitForUnit(this.unit))};a.prototype.toDecimalString=function(a,
b){void 0===a&&(a=2);return d.formatDecimal(this.value,this.unit,a,b)};return a}()});