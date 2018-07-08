// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){var d=h({inherited:"inherited",codedValue:"coded-value",range:"range"});return function(e){function a(a){a=e.call(this,a)||this;a.name=null;a.type=null;return a}f(a,e);c([b.property({json:{write:!0}})],a.prototype,"name",void 0);c([b.property({json:{read:d.read,write:d.write}})],
a.prototype,"type",void 0);return a=c([b.subclass("esri.layers.support.Domain")],a)}(b.declared(g))});