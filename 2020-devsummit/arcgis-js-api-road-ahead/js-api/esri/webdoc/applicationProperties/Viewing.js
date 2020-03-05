// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./Search".split(" "),function(l,m,f,d,g,h,b,k){return function(e){function a(a){a=e.call(this,a)||this;a.search=null;return a}f(a,e);c=a;a.prototype.clone=function(){return new c(h.clone({search:this.search}))};var c;d([b.property({type:k,json:{write:!0}})],a.prototype,"search",void 0);return a=c=d([b.subclass("esri.webdoc.applicationProperties.Viewing")],
a)}(b.declared(g.JSONSupport))});