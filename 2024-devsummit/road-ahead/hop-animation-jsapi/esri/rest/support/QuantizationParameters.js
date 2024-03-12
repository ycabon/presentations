// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ../../geometry/Extent".split(" "),function(b,d,f,a,g,c,m,n,h,k){var e;d=new f.JSONMap({upperLeft:"upper-left",lowerLeft:"lower-left"});a=e=class extends a.JSONSupport{constructor(l){super(l);this.extent=null;this.mode="view";this.originPosition="upper-left";this.tolerance=
1}clone(){return new e(g.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};b.__decorate([c.property({type:k,json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],a.prototype,"extent",void 0);b.__decorate([c.property({type:["view","edit"],json:{write:!0}})],a.prototype,"mode",void 0);b.__decorate([c.property({type:String,json:{read:d.read,write:d.write}})],a.prototype,"originPosition",void 0);b.__decorate([c.property({type:Number,
json:{write:{overridePolicy(){return{enabled:"view"===this.mode}}}}})],a.prototype,"tolerance",void 0);return a=e=b.__decorate([h.subclass("esri.rest.support.QuantizationParameters")],a)});