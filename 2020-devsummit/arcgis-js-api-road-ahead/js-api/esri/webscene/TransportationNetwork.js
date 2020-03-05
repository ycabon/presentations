// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(h,k,f,c,g,b){return function(e){function a(a){return e.call(this,a)||this}f(a,e);d=a;a.prototype.clone=function(){return new d({name:this.name,path:this.path,title:this.title})};var d;c([b.property({json:{write:!0}})],a.prototype,"name",void 0);c([b.property({json:{write:!0}})],a.prototype,"path",void 0);c([b.property({json:{write:!0}})],
a.prototype,"title",void 0);return a=d=c([b.subclass("esri.webscene.TransportationNetwork")],a)}(b.declared(g.JSONSupport))});