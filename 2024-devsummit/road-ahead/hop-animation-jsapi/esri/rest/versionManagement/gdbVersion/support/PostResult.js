// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/JSONSupport ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass".split(" "),function(c,a,d,g,h,k,e){a=class extends a.JSONSupport{constructor(b){super(b);this.moment=null;this.success=!1}};c.__decorate([d.property({type:Date,json:{type:Number,write:{writer:(b,f)=>{f.moment=b?b.getTime():null}}}})],a.prototype,"moment",void 0);
c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"success",void 0);return a=c.__decorate([e.subclass("esri.rest.versionManagement.gdbVersion.support.PostResult")],a)});