// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../support/fieldUtils ../support/TimeInfo ../../portal/timeUnitKebabDictionary".split(" "),function(f,c,h,g,e,q,r,t,k,l,m,n,p){f.TemporalLayer=a=>{a=class extends a{constructor(){super(...arguments);this.timeOffset=this.timeExtent=null;
this.useViewTime=!0}readOffset(d,b){b=b.timeInfo.exportOptions;if(!b)return null;d=b.timeOffset;b=p.timeUnitKebabDictionary.fromJSON(b.timeOffsetUnits);return d&&b?new g({value:d,unit:b}):null}set timeInfo(d){m.fixTimeInfoFields(d,this.fieldsIndex);this._set("timeInfo",d)}};c.__decorate([e.property({type:h,json:{write:!1}})],a.prototype,"timeExtent",void 0);c.__decorate([e.property({type:g})],a.prototype,"timeOffset",void 0);c.__decorate([k.reader("service","timeOffset",["timeInfo.exportOptions"])],
a.prototype,"readOffset",null);c.__decorate([e.property({value:null,type:n,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"timeInfo",null);c.__decorate([e.property({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"useViewTime",void 0);return a=c.__decorate([l.subclass("esri.layers.mixins.TemporalLayer")],a)};Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});