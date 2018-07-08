// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/urlUtils ../../core/accessorSupport/decorators".split(" "),function(b,c,g,e,h,f,d){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}g(a,b);c=a;a.prototype.readHref=function(a,b,c){return a?f.read(a,c):b.dataURI};a.prototype.writeHref=function(a,b,c,d){a&&(f.isDataProtocol(a)?b.dataURI=a:(b.href=
f.write(a,d),f.isAbsolute(b.href)&&(b.href=f.normalize(b.href))))};a.prototype.clone=function(){return new c({href:this.href,primitive:this.primitive})};e([d.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],a.prototype,"href",void 0);e([d.reader("href")],a.prototype,"readHref",null);e([d.writer("href",{href:{type:String},dataURI:{type:String}})],a.prototype,"writeHref",null);e([d.property({type:String,json:{write:!0}})],a.prototype,"primitive",void 0);return a=c=e([d.subclass("esri.symbols.support.IconSymbol3DLayerResource")],
a);var c}(d.declared(h));c.IconSymbol3DLayerResource=b;c.default=b});