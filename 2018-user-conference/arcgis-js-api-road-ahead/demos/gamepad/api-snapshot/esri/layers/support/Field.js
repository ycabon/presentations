// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./domains ./fieldType".split(" "),function(l,m,h,c,k,b,d,f){return function(g){function a(a){a=g.call(this)||this;a.alias=null;a.domain=null;a.editable=!1;a.length=-1;a.name=null;a.nullable=!0;a.type=null;return a}h(a,g);e=a;a.prototype.readDomain=function(a){var b=a&&a.type;return"range"===b?d.RangeDomain.fromJSON(a):"codedValue"===b?d.CodedValueDomain.fromJSON(a):
null};a.prototype.clone=function(){return new e({alias:this.alias,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})};c([b.property({type:String,json:{write:!0}})],a.prototype,"alias",void 0);c([b.property({types:d.types,json:{write:!0}})],a.prototype,"domain",void 0);c([b.reader("domain")],a.prototype,"readDomain",null);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"editable",void 0);c([b.property({type:Number,
json:{write:!0}})],a.prototype,"length",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c([b.property({type:Boolean,json:{write:!0}})],a.prototype,"nullable",void 0);c([b.property({type:String,json:{read:f.kebabDict.read,write:f.kebabDict.write}})],a.prototype,"type",void 0);return a=e=c([b.subclass("esri.layers.support.Field")],a);var e}(b.declared(k))});