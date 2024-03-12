// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this._gain=a}update(a){this.filteredValue=void 0!==this.filteredValue?(1-this._gain)*this.filteredValue+this._gain*a:a}reset(){this.filteredValue=void 0}get hasFilteredValue(){return void 0!==this.filteredValue}}b.FilteredValue=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});