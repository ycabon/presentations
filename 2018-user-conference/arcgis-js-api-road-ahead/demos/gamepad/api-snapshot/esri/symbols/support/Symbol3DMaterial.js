// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./materialUtils".split(" "),function(a,b,f,e,g,d,h){Object.defineProperty(b,"__esModule",{value:!0});a=function(a){function c(){return null!==a&&a.apply(this,arguments)||this}f(c,a);b=c;c.prototype.clone=function(){return new b({color:this.color?this.color.clone():null})};e([d.property(h.colorAndTransparencyProperty)],c.prototype,"color",
void 0);return c=b=e([d.subclass("esri.symbols.support.Symbol3DMaterial")],c);var b}(d.declared(g));b.Symbol3DMaterial=a;b.default=a});