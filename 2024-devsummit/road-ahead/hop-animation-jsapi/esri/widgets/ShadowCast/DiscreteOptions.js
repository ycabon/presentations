// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(c,e,a,f,g,b,d,l,m,n,h){a=class extends a{constructor(){super({});this.color=new e([50,50,50,.7]);this.intervalOptions=new f([b.convertTime(15,"minutes","milliseconds"),b.convertTime(30,"minutes","milliseconds"),
b.convertTime(1,"hours","milliseconds"),b.convertTime(2,"hours","milliseconds"),b.convertTime(3,"hours","milliseconds")]);this.interval=this.intervalOptions.at(0)}set intervalOptions(k){this._set("intervalOptions",g.referenceSetter(k,this._get("intervalOptions")))}};c.__decorate([d.property({type:e})],a.prototype,"color",void 0);c.__decorate([d.property()],a.prototype,"interval",void 0);c.__decorate([d.property({type:f})],a.prototype,"intervalOptions",null);return a=c.__decorate([h.subclass("esri.widgets.ShadowCast.DiscreteOptions")],
a)});