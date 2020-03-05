// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(l,m,g,d,n,e,h,k,b){return function(f){function a(a){a=f.call(this,a)||this;a.color=new e([0,0,0,1]);return a}g(a,f);c=a;a.prototype.clone=function(){return new c(k.clone({color:this.color}))};var c;d([b.property({type:e,json:{write:!0}})],a.prototype,"color",
void 0);return a=c=d([b.subclass("esri.webmap.background.ColorBackground")],a)}(b.declared(h.JSONSupport))});