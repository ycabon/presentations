// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,d,c,f,g,h,e){a.RangeInfo=class extends d.JSONSupport{constructor(){super(...arguments);this.fullRangeExtent=this.currentRangeExtent=this.field=this.name=null;this.type="rangeInfo"}};b.__decorate([c.property({type:String,json:{read:!0,write:!0}})],a.RangeInfo.prototype,
"name",void 0);b.__decorate([c.property({type:String,json:{read:!0,write:!0}})],a.RangeInfo.prototype,"field",void 0);b.__decorate([c.property({type:[Number],json:{read:!0,write:!0}})],a.RangeInfo.prototype,"currentRangeExtent",void 0);b.__decorate([c.property({type:[Number],json:{read:!0,write:!0}})],a.RangeInfo.prototype,"fullRangeExtent",void 0);b.__decorate([c.property({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],a.RangeInfo.prototype,"type",void 0);a.RangeInfo=b.__decorate([e.subclass("esri.layers.support.RangeInfo")],
a.RangeInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});