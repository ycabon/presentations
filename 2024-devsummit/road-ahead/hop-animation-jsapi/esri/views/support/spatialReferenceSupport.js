// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/support/SupportedGCSWkids","../ViewingMode"],function(c,b,e){c.isSpatialReferenceSupported=function(a,d){return null==a?!1:null==d?!0:d===e.ViewingMode.Local?a.isGeographic?a.isWGS84||a.wkid===b.SupportedGCSWkids.CGCS2000:!0:a.isWebMercator||a.isWGS84||a.wkid===b.SupportedGCSWkids.CGCS2000||a.wkid===b.SupportedGCSWkids.GCSMARS2000||a.wkid===b.SupportedGCSWkids.GCSMARS2000_SPHERE||a.wkid===b.SupportedGCSWkids.GCSMOON2000};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});