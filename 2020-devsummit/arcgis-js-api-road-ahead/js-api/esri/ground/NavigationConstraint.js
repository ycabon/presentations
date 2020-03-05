// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(b,e,g,f,h,c){Object.defineProperty(e,"__esModule",{value:!0});b=function(b){function a(a){a=b.call(this,a)||this;a.type="none";return a}g(a,b);d=a;a.prototype.clone=function(){return new d({type:this.type})};var d;f([c.enumeration.serializable()({none:"none",stayAbove:"stay-above"})],a.prototype,"type",void 0);return a=d=f([c.subclass("esri.ground.NavigationConstraint")],
a)}(c.declared(h.JSONSupport));e.NavigationConstraint=b});