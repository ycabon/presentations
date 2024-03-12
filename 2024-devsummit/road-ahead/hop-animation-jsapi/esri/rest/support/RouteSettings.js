// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./networkEnums ./TravelMode".split(" "),function(b,a,c,p,q,r,g,h,k,f,l){a=class extends a.JSONSupport{constructor(d){super(d);this.travelMode=this.timeWindowsAreUTC=this.startTimeIsUTC=this.preserveLastStop=this.preserveFirstStop=
this.findBestSequence=this.directionsLanguage=this.accumulateAttributes=null}readAccumulateAttributes(d){return null==d?null:d.map(e=>f.impedanceAttributeNameJsonMap.fromJSON(e))}writeAccumulateAttributes(d,e,m){d?.length&&(e[m]=d.map(n=>f.impedanceAttributeNameJsonMap.toJSON(n)))}};b.__decorate([c.property({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],a.prototype,"accumulateAttributes",void 0);b.__decorate([g.reader("accumulateAttributes")],a.prototype,"readAccumulateAttributes",
null);b.__decorate([k.writer("accumulateAttributes")],a.prototype,"writeAccumulateAttributes",null);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"directionsLanguage",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"findBestSequence",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"preserveFirstStop",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"preserveLastStop",void 0);b.__decorate([c.property({type:Boolean,
json:{write:!0}})],a.prototype,"startTimeIsUTC",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"timeWindowsAreUTC",void 0);b.__decorate([c.property({type:l,json:{write:!0}})],a.prototype,"travelMode",void 0);return a=b.__decorate([h.subclass("esri.layers.support.RouteSettings")],a)});