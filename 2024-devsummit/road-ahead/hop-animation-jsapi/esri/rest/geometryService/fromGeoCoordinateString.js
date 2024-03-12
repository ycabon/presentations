// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/spatialReferenceUtils","../utils","./units"],function(e,g,h,f,k){e.fromGeoCoordinateString=async function(c,a,d){const b={};b.sr=null!=a.sr&&"object"===typeof a.sr?h.srToRESTValue(a.sr):a.sr;b.strings=JSON.stringify(a.strings);b.conversionType=k.conversionTypeKebabDict.toJSON(a.conversionType||"mgrs");b.conversionMode=a.conversionMode;c=f.parseUrl(c);d=f.asValidOptions({...c.query,f:"json",...b},d);return g(c.path+"/fromGeoCoordinateString",
d).then(({data:l})=>l.coordinates)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});