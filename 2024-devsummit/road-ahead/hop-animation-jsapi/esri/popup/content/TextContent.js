// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./Content".split(" "),function(b,d,a,h,k,e,f){var c;a=c=class extends f{constructor(g){super(g);this.text=null;this.type="text"}clone(){return new c({text:this.text})}};b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"text",void 0);b.__decorate([d.property({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],
a.prototype,"type",void 0);return a=c=b.__decorate([e.subclass("esri.popup.content.TextContent")],a)});