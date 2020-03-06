// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/paramHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(k,l,g,d,m,h,c){return function(f){function b(a){a=f.call(this,a)||this;a.id=null;a.title=null;a.description=null;a.legendUrl=null;return a}g(b,f);e=b;b.prototype.clone=function(){var a=new e;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("id")&&
(a.id=this.id);this.hasOwnProperty("isDefault")&&(a.isDefault=this.isDefault);this.hasOwnProperty("keywords")&&(a.keywords=this.keywords&&this.keywords.slice());this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl);this.hasOwnProperty("title")&&(a.title=this.title);return a};var e;d([c.property({json:{read:{source:"id"}}})],b.prototype,"id",void 0);d([c.property({json:{read:{source:"title"}}})],b.prototype,"title",void 0);d([c.property({json:{read:{source:"abstract"}}})],b.prototype,"description",
void 0);d([c.property({json:{read:{source:"legendUrl"}}})],b.prototype,"legendUrl",void 0);d([c.property({json:{read:{source:"isDefault"}}})],b.prototype,"isDefault",void 0);d([c.property({json:{read:{source:"keywords"}}})],b.prototype,"keywords",void 0);return b=e=d([c.subclass("esri.layer.support.WMTSStyle")],b)}(c.declared(h.JSONSupport))});