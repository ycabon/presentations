// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./TextInput".split(" "),function(c,d,a,h,k,e,f){var b;a=b=class extends f{constructor(g){super(g);this.type="barcode-scanner"}clone(){return new b({maxLength:this.maxLength,minLength:this.minLength})}};c.__decorate([d.property({type:["barcode-scanner"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);
return a=b=c.__decorate([e.subclass("esri.form.elements.inputs.BarcodeScannerInput")],a)});