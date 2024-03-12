// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../ObservableBase"],function(b,d){class e extends d.ObservableBase{notify(){var a=this._observers;if(a&&0<a.length){a=a.slice();for(const c of a)c.onInvalidated(),c.onCommitted()}}}b.SimpleObservable=e;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});