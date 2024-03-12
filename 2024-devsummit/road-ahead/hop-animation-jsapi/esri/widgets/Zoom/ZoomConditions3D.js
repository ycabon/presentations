// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,e,f,g,d){a=class extends a{get canZoomIn(){return!!this.view.ready}get canZoomOut(){return!!this.view.ready}};b.__decorate([c.property({readOnly:!0})],a.prototype,"canZoomIn",null);b.__decorate([c.property({readOnly:!0})],a.prototype,"canZoomOut",null);b.__decorate([c.property()],
a.prototype,"view",void 0);return a=b.__decorate([d.subclass("esri.widgets.Zoom.ZoomConditions3D")],a)});