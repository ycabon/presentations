// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer".split(" "),function(b,a,c,m,n,p,g,h,k){function e(d){d=Number(d);return isNaN(d)?void 0:d}var f;a=f=class extends a.JSONSupport{constructor(){super(...arguments);this.productName=this.cloudCover=this.acquisitionDate=
void 0;this.sensorName=null;this.sunElevation=this.sunAzimuth=this.sensorElevation=this.sensorAzimuth=void 0}readAcquisitionDate(d){return new Date(d)}writeAcquisitionDate(d,l){l.AcquisitionDate=d.getTime()}clone(){return new f({acquisitionDate:this.acquisitionDate,cloudCover:this.cloudCover,productName:this.productName,sensorName:this.sensorName,sensorAzimuth:this.sensorAzimuth,sensorElevation:this.sensorElevation,sunAzimuth:this.sunAzimuth,sunElevation:this.sunElevation})}};b.__decorate([c.property({json:{name:"AcquisitionDate",
write:!0}})],a.prototype,"acquisitionDate",void 0);b.__decorate([g.reader("acquisitionDate")],a.prototype,"readAcquisitionDate",null);b.__decorate([k.writer("acquisitionDate")],a.prototype,"writeAcquisitionDate",null);b.__decorate([c.property({json:{name:"CloudCover",read:{reader:e},write:!0}})],a.prototype,"cloudCover",void 0);b.__decorate([c.property({json:{name:"ProductName",write:!0}})],a.prototype,"productName",void 0);b.__decorate([c.property({json:{name:"SensorName",write:!0}})],a.prototype,
"sensorName",void 0);b.__decorate([c.property({json:{name:"SensorAzimuth",read:{reader:e},write:!0}})],a.prototype,"sensorAzimuth",void 0);b.__decorate([c.property({json:{name:"SensorElevation",read:{reader:e},write:!0}})],a.prototype,"sensorElevation",void 0);b.__decorate([c.property({json:{name:"SunAzimuth",read:{reader:e},write:!0}})],a.prototype,"sunAzimuth",void 0);b.__decorate([c.property({json:{name:"SunElevation",read:{reader:e},write:!0}})],a.prototype,"sunElevation",void 0);return a=f=b.__decorate([h.subclass("esri.layers.support.RasterSensorInfo")],
a)});