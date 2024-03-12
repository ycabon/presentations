// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../webdoc/applicationProperties/Viewing".split(" "),function(c,a,d,h,k,l,e,f){var b;a=b=class extends a.JSONSupport{constructor(g){super(g);this.viewing=null}clone(){return new b({viewing:this.viewing?this.viewing.clone():null})}};c.__decorate([d.property({type:f,json:{write:!0}})],a.prototype,"viewing",void 0);return a=
b=c.__decorate([e.subclass("esri.webscene.ApplicationProperties")],a)});