// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ./Content ../support/RelatedRecordsInfoFieldOrder".split(" "),function(b,a,c,d,k,l,e,f,g){a=class extends a.ClonableMixin(f){constructor(h){super(h);this.displayCount=this.description=null;this.displayType="list";this.title=this.relationshipId=this.orderByFields=null;this.type="relationship"}};
b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({type:Number,json:{type:d.Integer,write:!0}})],a.prototype,"displayCount",void 0);b.__decorate([c.property({type:["list"],json:{write:!0}})],a.prototype,"displayType",void 0);b.__decorate([c.property({type:[g],json:{write:!0}})],a.prototype,"orderByFields",void 0);b.__decorate([c.property({type:Number,json:{type:d.Integer,write:!0}})],a.prototype,"relationshipId",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"title",void 0);b.__decorate([c.property({type:["relationship"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=b.__decorate([e.subclass("esri.popup.content.RelationshipContent")],a)});