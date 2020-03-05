// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators ../webdoc/applicationProperties/Viewing".split(" "),function(k,l,f,d,g,b,h){return function(e){function a(a){a=e.call(this,a)||this;a.viewing=null;return a}f(a,e);c=a;a.prototype.clone=function(){return new c({viewing:this.viewing?this.viewing.clone():null})};var c;d([b.property({type:h,json:{write:!0}})],a.prototype,"viewing",void 0);return a=c=d([b.subclass("esri.webscene.ApplicationProperties")],
a)}(b.declared(g.JSONSupport))});