// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,e,f,h,k,g){var c;a=c=class extends a.JSONSupport{static from(d){return f.ensureClass(c,d)}constructor(d){super(d);this.ownerFilter=null;this.includeHidden=!1}};b.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"ownerFilter",
void 0);b.__decorate([e.property({type:Boolean,json:{write:!0}})],a.prototype,"includeHidden",void 0);return a=c=b.__decorate([g.subclass("esri.rest.versionManagement.support.GetVersionInfosParameters")],a)});