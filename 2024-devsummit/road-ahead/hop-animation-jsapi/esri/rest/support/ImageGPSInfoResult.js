// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./CameraInfo ./ImageGPSInfo".split(" "),function(b,a,c,g,h,k,d,e,f){a=class extends a.JSONSupport{constructor(){super(...arguments);this.cameras=this.images=null}};b.__decorate([c.property({type:[f],json:{write:!0}})],a.prototype,"images",void 0);b.__decorate([c.property({type:[e],json:{write:!0}})],
a.prototype,"cameras",void 0);return a=b.__decorate([d.subclass("esri.rest.support.ImageGPSInfoResult")],a)});