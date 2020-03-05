// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../support/LegendOptions".split(" "),function(h,k,f,e,b,g){return function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.showLegend=null;return a}f(a,c);d=a;a.prototype.clone=function(){return new d({title:this.title,showLegend:this.showLegend})};var d;e([b.property({type:Boolean,json:{write:!0}})],a.prototype,"showLegend",void 0);
return a=d=e([b.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],a)}(b.declared(g.default))});