// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Symbol3DLayer".split(" "),function(h,k,f,c,b,g){return function(e){function a(a){a=e.call(this)||this;a.material=null;a.type="path";a.size=void 0;return a}f(a,e);d=a;a.prototype.readSize=function(a,b){return a||b.width||0};a.prototype.clone=function(){return new d({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&
this.material.clone(),size:this.size})};c([b.property()],a.prototype,"material",void 0);c([b.property()],a.prototype,"type",void 0);c([b.property({type:Number,json:{write:{enabled:!0,target:{size:{type:Number},width:{type:Number}}}}})],a.prototype,"size",void 0);c([b.reader("size",["size","width"])],a.prototype,"readSize",null);return a=d=c([b.subclass("esri.symbols.PathSymbol3DLayer")],a);var d}(b.declared(g))});