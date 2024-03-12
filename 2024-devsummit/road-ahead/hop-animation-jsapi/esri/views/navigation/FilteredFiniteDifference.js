// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this._gain=a;this.filteredDelta=this.lastValue=void 0}update(a){if(this.hasLastValue()){const d=this.computeDelta(a);this._updateDelta(d)}this.lastValue=a}reset(){this.filteredDelta=this.lastValue=void 0}hasLastValue(){return void 0!==this.lastValue}hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(a){return void 0===this.lastValue?NaN:a-this.lastValue}_updateDelta(a){this.filteredDelta=void 0!==this.filteredDelta?(1-this._gain)*
this.filteredDelta+this._gain*a:a}}b.FilteredFiniteDifference=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});