// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../FieldInfo ./Content".split(" "),function(b,f,c,a,p,g,h,k,l){var e;a=e=class extends l{constructor(d){super(d);this.title=this.fieldInfos=this.description=this.attributes=null;this.type="fields"}writeFieldInfos(d,m){m.fieldInfos=d&&d.map(n=>n.toJSON())}clone(){return new e(f.clone({attributes:this.attributes,
description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};b.__decorate([c.property({type:Object,json:{write:!0}})],a.prototype,"attributes",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:[k]})],a.prototype,"fieldInfos",void 0);b.__decorate([h.writer("fieldInfos")],a.prototype,"writeFieldInfos",null);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);b.__decorate([c.property({type:["fields"],
readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=e=b.__decorate([g.subclass("esri.popup.content.FieldsContent")],a)});