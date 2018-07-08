// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./Search".split(" "),function(k,l,f,d,g,b,h){return function(e){function a(a){a=e.call(this,a)||this;a.search=null;return a}f(a,e);c=a;a.prototype.clone=function(){return new c({search:this.search?this.search.clone():null})};d([b.property({type:h,json:{write:!0}})],a.prototype,"search",void 0);return a=c=d([b.subclass("esri.webscene.applicationProperties.Viewing")],
a);var c}(b.declared(g))});