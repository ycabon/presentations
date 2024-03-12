// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./lang","./accessorSupport/tracking","./accessorSupport/tracking/SimpleObservable"],function(c,d,e,f){class g{constructor(a,b){this._observable=new f.SimpleObservable;this._value=a;this._equalityFunction=b}get value(){e.trackAccess(this._observable);return this._value}set value(a){this._equalityFunction(a,this._value)||(this._value=a,this._observable.notify())}mutate(a){a(this._value);this._observable.notify()}}c.signal=function(a,b=d.equalsShallow){return new g(a,b)};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});