// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../chunks/persistableUrlUtils".split(" "),function(a,b,c,f,g,l,m,n,h,k,e){var d;c=c.strict()({sphere:"sphere",cylinder:"cylinder",cube:"cube",cone:"cone",diamond:"diamond",tetrahedron:"tetrahedron",invertedCone:"inverted-cone"});
a.ObjectSymbol3DLayerResource=d=class extends f.JSONSupport{clone(){return new d({href:this.href,primitive:this.primitive})}};b.__decorate([g.property({type:String,json:{read:e.read,write:e.write}})],a.ObjectSymbol3DLayerResource.prototype,"href",void 0);b.__decorate([h.enumeration(c)],a.ObjectSymbol3DLayerResource.prototype,"primitive",void 0);a.ObjectSymbol3DLayerResource=d=b.__decorate([k.subclass("esri.symbols.support.ObjectSymbol3DLayerResource")],a.ObjectSymbol3DLayerResource);a.defaultPrimitive=
"sphere";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});