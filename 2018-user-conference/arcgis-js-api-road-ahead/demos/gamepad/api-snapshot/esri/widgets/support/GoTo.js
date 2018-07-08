// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators".split(" "),function(h,k,f,d,g,c){return function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.goToOverride=null;b.view=null;return b}f(a,e);a.prototype.callGoTo=function(b){var a=this.view;return this.goToOverride?this.goToOverride(a,b):a.goTo(b.target,b.options)};d([c.property()],a.prototype,"goToOverride",void 0);d([c.property()],
a.prototype,"view",void 0);return a=d([c.subclass("esri.widgets.support.GoTo")],a)}(c.declared(g))});