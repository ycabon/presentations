// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,f,c,e,k,l,g){e=new d.JSONMap({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"});d=new d.JSONMap({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});
a=class extends a.ClonableMixin(f.JSONSupport){constructor(h){super(h);this.role=this.relationshipTableId=this.relatedTableId=this.name=this.keyFieldInRelationshipTable=this.keyField=this.id=this.composite=this.cardinality=null}};b.__decorate([c.property({json:{read:e.read,write:e.write}})],a.prototype,"cardinality",void 0);b.__decorate([c.property({json:{read:!0,write:!0}})],a.prototype,"composite",void 0);b.__decorate([c.property({json:{read:!0,write:!0}})],a.prototype,"id",void 0);b.__decorate([c.property({json:{read:!0,
write:!0}})],a.prototype,"keyField",void 0);b.__decorate([c.property({json:{read:!0,write:!0}})],a.prototype,"keyFieldInRelationshipTable",void 0);b.__decorate([c.property({json:{read:!0,write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({json:{read:!0,write:!0}})],a.prototype,"relatedTableId",void 0);b.__decorate([c.property({json:{read:!0,write:!0}})],a.prototype,"relationshipTableId",void 0);b.__decorate([c.property({json:{read:d.read,write:d.write}})],a.prototype,"role",void 0);
return a=b.__decorate([g.subclass("esri.layers.support.Relationship")],a)});