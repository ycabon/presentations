// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ../Graphic ../core/Logger ../core/accessorSupport/ensureType ../core/RandomLCG ../core/has ../core/Error ../core/accessorSupport/decorators/shared ../core/accessorSupport/decorators/subclass ../core/support/OwningCollection".split(" "),function(b,c,d,k,e,l,m,n,f,g,h){b.GraphicsCollection=class extends h.OwningCollection{_own(a){a.layer&&"remove"in a.layer&&a.layer!==this.owner&&a.layer.remove(a);a.layer=this.owner}_release(a){a.layer===this.owner&&(a.layer=null)}};
c.__decorate([f.shared({Type:d,ensureType:e.ensureType(d)})],b.GraphicsCollection.prototype,"itemType",void 0);b.GraphicsCollection=c.__decorate([g.subclass("esri.support.GraphicsCollection")],b.GraphicsCollection);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});