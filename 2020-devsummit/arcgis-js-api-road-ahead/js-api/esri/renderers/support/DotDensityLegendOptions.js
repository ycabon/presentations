// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/decorateHelper ../../core/tsSupport/declareExtendsHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(h,k,e,f,g,b){return function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.unit=null;return a}f(a,c);d=a;a.prototype.clone=function(){return new d({unit:this.unit})};var d;e([b.property({type:String,json:{write:!0}})],a.prototype,"unit",void 0);return a=d=e([b.subclass("esri.renderers.support.DotDensityLegendOptions")],
a)}(b.declared(g.JSONSupport))});