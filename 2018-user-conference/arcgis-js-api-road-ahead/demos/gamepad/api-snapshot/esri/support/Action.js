// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Identifiable ../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){return function(e){function a(a){a=e.call(this)||this;a.className=null;a.temporary=!1;a.image=null;a.id=null;a.title=null;a.visible=!0;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({className:this.className,image:this.image,id:this.id,title:this.title,visible:this.visible})};c([b.property()],
a.prototype,"className",void 0);c([b.property()],a.prototype,"temporary",void 0);c([b.property()],a.prototype,"image",void 0);c([b.property()],a.prototype,"id",void 0);c([b.property()],a.prototype,"title",void 0);c([b.property()],a.prototype,"visible",void 0);return a=d=c([b.subclass("esri.support.Action")],a);var d}(b.declared(g,h))});