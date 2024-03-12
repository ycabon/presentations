// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass".split(" "),function(c,d,a,e,f,k,l,g){var b;a=b=class extends a.JSONSupport{constructor(h){super(h);this.color=new d([0,0,0,1])}clone(){return new b(e.clone({color:this.color}))}};c.__decorate([f.property({type:d,json:{write:!0}})],a.prototype,"color",void 0);return a=b=c.__decorate([g.subclass("esri.webmap.background.ColorBackground")],
a)});