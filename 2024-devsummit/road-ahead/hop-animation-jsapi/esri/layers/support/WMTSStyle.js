// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(c,a,d,g,h,k,f){var e;a=e=class extends a.JSONSupport{constructor(b){super(b);this.legendUrl=this.description=this.title=this.id=null}clone(){const b=new e;this.hasOwnProperty("description")&&(b.description=this.description);this.hasOwnProperty("id")&&(b.id=this.id);this.hasOwnProperty("isDefault")&&
(b.isDefault=this.isDefault);this.hasOwnProperty("keywords")&&(b.keywords=this.keywords&&this.keywords.slice());this.hasOwnProperty("legendUrl")&&(b.legendUrl=this.legendUrl);this.hasOwnProperty("title")&&(b.title=this.title);return b}};c.__decorate([d.property({json:{read:{source:"id"}}})],a.prototype,"id",void 0);c.__decorate([d.property({json:{read:{source:"title"}}})],a.prototype,"title",void 0);c.__decorate([d.property({json:{read:{source:"abstract"}}})],a.prototype,"description",void 0);c.__decorate([d.property({json:{read:{source:"legendUrl"}}})],
a.prototype,"legendUrl",void 0);c.__decorate([d.property({json:{read:{source:"isDefault"}}})],a.prototype,"isDefault",void 0);c.__decorate([d.property({json:{read:{source:"keywords"}}})],a.prototype,"keywords",void 0);return a=e=c.__decorate([f.subclass("esri.layer.support.WMTSStyle")],a)});