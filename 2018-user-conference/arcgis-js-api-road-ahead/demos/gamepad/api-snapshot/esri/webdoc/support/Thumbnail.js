// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(e,f,h,g,k,b){Object.defineProperty(f,"__esModule",{value:!0});e=function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.url="";return a}h(a,c);d=a;a.prototype.clone=function(){return new d({url:this.url})};g([b.property({type:String,json:{write:{isRequired:!0}}})],a.prototype,"url",void 0);return a=
d=g([b.subclass("esri.webdoc.support.Thumbnail")],a);var d}(b.declared(k));f.default=e});