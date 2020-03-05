// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/date ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(h,k,e,c,f,g,b){return function(d){function a(a){a=d.call(this,a)||this;a.digitSeparator=!1;a.format=null;a.places=null;return a}e(a,d);c([b.property()],a.prototype,"digitSeparator",void 0);c([b.property({json:{read:{source:"dateFormat",reader:f.fromJSON}}})],a.prototype,"format",void 0);c([b.property()],
a.prototype,"places",void 0);return a=c([b.subclass("esri.widgets.FeatureForm.Format")],a)}(b.declared(g.JSONSupport))});