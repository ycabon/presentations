// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,c,g,h,k,e){a=class extends a.ClonableMixin(d.JSONSupport){constructor(f){super(f);this.sensorTrail=this.sensorLocation=this.lineOfSight=this.frameOutline=this.frameCenter=null}};b.__decorate([c.property({type:Boolean})],a.prototype,"frameCenter",void 0);
b.__decorate([c.property({type:Boolean})],a.prototype,"frameOutline",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"lineOfSight",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"sensorLocation",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"sensorTrail",void 0);return a=b.__decorate([e.subclass("esri.layers.support.TelemetryDisplay")],a)});