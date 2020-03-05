// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(k,l,e,c,f,g,b){var h=new f.default({inherited:"inherited",codedValue:"coded-value",range:"range"});return function(d){function a(a){a=d.call(this,a)||this;a.name=null;a.type=null;return a}e(a,d);c([b.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c([b.enumeration.serializable()(h)],
a.prototype,"type",void 0);return a=c([b.subclass("esri.layers.support.Domain")],a)}(b.declared(g.JSONSupport))});