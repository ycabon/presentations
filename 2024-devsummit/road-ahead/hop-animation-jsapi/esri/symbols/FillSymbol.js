// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./SimpleLineSymbol ./Symbol".split(" "),function(b,c,a,h,k,d,e,f){a=class extends f{constructor(g){super(g);this.type=this.outline=null}hash(){return`${this.type}.${this.outline&&this.outline.hash()}`}};b.__decorate([c.property({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":e}},json:{default:null,write:!0}})],
a.prototype,"outline",void 0);b.__decorate([c.property({type:["simple-fill","picture-fill"],readOnly:!0})],a.prototype,"type",void 0);return a=b.__decorate([d.subclass("esri.symbols.FillSymbol")],a)});