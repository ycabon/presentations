// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators"],function(h,a,g,f,d){Object.defineProperty(a,"__esModule",{value:!0});a.GoToMixin=function(a){return function(a){function c(){for(var b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];b=a.apply(this,b)||this;b.goToOverride=null;b.view=null;return b}g(c,a);c.prototype.callGoTo=function(b){var a=this.view;return this.goToOverride?this.goToOverride(a,b):
a.goTo(b.target,b.options)};f([d.property()],c.prototype,"goToOverride",void 0);f([d.property()],c.prototype,"view",void 0);return c=f([d.subclass("esri.widgets.support.GoTo")],c)}(d.declared(a))}});