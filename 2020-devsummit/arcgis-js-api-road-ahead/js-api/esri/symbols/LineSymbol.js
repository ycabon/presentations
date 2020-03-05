// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/screenUtils ../core/accessorSupport/decorators ./Symbol".split(" "),function(h,k,e,c,f,b,g){return function(d){function a(a){a=d.call(this,a)||this;a.type="simple-line";a.width=.75;return a}e(a,d);a.prototype.hash=function(){return this.type+"."+this.width};c([b.enumeration.serializable()({esriSLS:"simple-line"})],a.prototype,"type",void 0);c([b.property({type:Number,cast:f.toPt,json:{write:!0}})],
a.prototype,"width",void 0);return a=c([b.subclass("esri.symbols.LineSymbol")],a)}(b.declared(g))});