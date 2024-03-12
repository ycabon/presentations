// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ./Analysis ../core/unitUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../geometry/Point".split(" "),function(b,a,e,c,h,k,l,f,d){a=class extends a{constructor(g){super(g);this.type="direct-line-measurement";this.unit=this.endPoint=this.startPoint=null}get requiredPropertiesForEditing(){return[this.startPoint,this.endPoint]}clear(){this.endPoint=this.startPoint=null}};b.__decorate([c.property({type:["direct-line-measurement"]})],
a.prototype,"type",void 0);b.__decorate([c.property({type:d})],a.prototype,"startPoint",void 0);b.__decorate([c.property({type:d})],a.prototype,"endPoint",void 0);b.__decorate([c.property({type:e.measurementLengthUnits,value:null})],a.prototype,"unit",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null);return a=b.__decorate([f.subclass("esri.analysis.DirectLineMeasurementAnalysis")],a)});