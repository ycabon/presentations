// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators ./GamepadInputDevice".split(" "),function(k,l,f,c,g,d,b,h){return function(e){function a(){var a=e.call(this)||this;a.devices=new d;a.enabledFocusMode="document";return a}f(a,e);c([b.property({type:d.ofType(h),readOnly:!0})],a.prototype,"devices",void 0);c([b.property({type:["document","view","none"]})],
a.prototype,"enabledFocusMode",void 0);return a=c([b.subclass("esri.views.input.gamepad.GamepadSettings")],a)}(b.declared(g))});