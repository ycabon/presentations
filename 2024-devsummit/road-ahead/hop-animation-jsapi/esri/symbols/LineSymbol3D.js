// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Collection ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./LineSymbol3DLayer ./PathSymbol3DLayer ./Symbol3D".split(" "),function(c,d,e,m,h,q,n,p,f,k,a){var b;const l=d.ofType({base:null,key:"type",typeMap:{line:f,path:k}});h=d.ofType({base:null,key:"type",typeMap:{line:f,path:k}});a=b=class extends a{constructor(g){super(g);this.symbolLayers=
new l;this.type="line-3d"}clone(){return new b({styleOrigin:e.clone(this.styleOrigin),symbolLayers:e.clone(this.symbolLayers),thumbnail:e.clone(this.thumbnail)})}static fromSimpleLineSymbol(g){return new b({symbolLayers:new d([f.fromSimpleLineSymbol(g)])})}};c.__decorate([m.property({type:l,json:{type:h}})],a.prototype,"symbolLayers",void 0);c.__decorate([n.enumeration({LineSymbol3D:"line-3d"},{readOnly:!0})],a.prototype,"type",void 0);return a=b=c.__decorate([p.subclass("esri.symbols.LineSymbol3D")],
a)});