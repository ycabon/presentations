// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,g,h,k,e){var d;a=d=class extends a.JSONSupport{constructor(f){super(f);this.name=this.expression=null;this.returnType="boolean";this.title=null}clone(){return new d({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"expression",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:["boolean","date","number","string"],json:{write:!0}})],a.prototype,"returnType",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);return a=d=b.__decorate([e.subclass("esri.form.ExpressionInfo")],a)});