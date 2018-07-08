// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./ActionBase".split(" "),function(h,k,f,d,b,g){return function(e){function a(a){a=e.call(this)||this;a.image=null;a.type="button";return a}f(a,e);c=a;a.prototype.clone=function(){return new c({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})};var c;d([b.property()],
a.prototype,"image",void 0);return a=c=d([b.subclass("esri.support.Action.ActionButton")],a)}(b.declared(g))});