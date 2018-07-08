// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Identifiable ../../core/accessorSupport/decorators ./MeshColor".split(" "),function(k,l,f,c,g,b,h){return function(e){function a(a){a=e.call(this)||this;a.type="image";a.url=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({url:this.url})};c([b.property()],a.prototype,"type",void 0);c([b.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"url",
void 0);return a=d=c([b.subclass("esri.geometry.support.ImageMeshColor")],a);var d}(b.declared(h.default,g))});