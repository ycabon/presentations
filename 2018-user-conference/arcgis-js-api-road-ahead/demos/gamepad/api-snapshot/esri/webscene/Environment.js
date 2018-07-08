// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators ./Lighting".split(" "),function(k,l,g,e,h,c,b){return function(f){function a(a){a=f.call(this,a)||this;a.lighting=new b;return a}g(a,f);d=a;a.prototype.clone=function(){return new d({lighting:b.prototype.clone.call(this.lighting)})};a.sanitizeJSON=function(a){return{lighting:a.lighting?b.sanitizeJSON(a.lighting):(new b).toJSON()}};e([c.property({type:b,
json:{write:!0}})],a.prototype,"lighting",void 0);return a=d=e([c.subclass("esri.webscene.Environment")],a);var d}(c.declared(h))});