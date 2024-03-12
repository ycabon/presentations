// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("./chunks/tslib.es6 ./Graphic ./core/accessorSupport/decorators/property ./core/has ./core/Logger ./core/RandomLCG ./core/accessorSupport/decorators/subclass".split(" "),function(c,a,d,f,g,h,e){a=class extends a{constructor(){super(...arguments);this.isAggregate=!0}getEffectivePopupTemplate(b){return this.popupTemplate?this.popupTemplate:(b=this.sourceLayer?.featureReduction)&&"popupTemplate"in b&&b.popupEnabled?b.popupTemplate:null}getObjectId(){return this.attributes.aggregateId}};c.__decorate([d.property({type:Boolean})],
a.prototype,"isAggregate",void 0);return a=c.__decorate([e.subclass("esri.AggregateGraphic")],a)});