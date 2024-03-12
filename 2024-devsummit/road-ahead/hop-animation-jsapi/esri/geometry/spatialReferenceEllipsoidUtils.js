// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./ellipsoidUtils","./SpatialReference","./support/spatialReferenceUtils"],function(a,b,d,e){const h=new d(b.SphericalECEFSpatialReferenceLike),f=new d(b.SphericalPCPFMarsLike),g=new d(b.SphericalPCPFMoonLike);b=new d(b.WGS84ECEFSpatialReferenceLike);a.SphericalECEFSpatialReference=h;a.SphericalPCPFMars=f;a.SphericalPCPFMoon=g;a.WGS84ECEFSpatialReference=b;a.getSphericalPCPF=function(c){return c&&(e.isMars(c)||e.equals(c,f))?f:c&&(e.isMoon(c)||e.equals(c,g))?g:h};Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});