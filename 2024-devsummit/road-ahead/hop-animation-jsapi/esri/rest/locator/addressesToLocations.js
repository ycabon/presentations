// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","../support/AddressCandidate","../support/AddressesToLocationsParameters"],function(e,h,d,k,l){function m(b){({data:b}=b);if(!b)return[];const {locations:a,spatialReference:c}=b;return a?a.map(f=>{const {location:g}=f;g&&(g.spatialReference=c);return k.fromJSON(f)}):[]}e.addressesToLocations=async function(b,a,c){a=l.from(a);b=d.parseUrl(b);a={...a.toJSON?.(),f:"json"};a=d.encode({...b.query,...a});c=d.asValidOptions(a,c);return h(`${b.path}/geocodeAddresses`,
c).then(m)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});