// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../utils ./utils ../support/AddressCandidate ../support/AddressToLocationsParameters".split(" "),function(h,l,f,k,m,n){function p({data:b}){if(!b)return[];const {candidates:a,spatialReference:c}=b;return a?a.map(e=>{if(e){var {extent:d,location:g}=e,q=d?k.isValidExtent(d):!0;if(k.isValidLocation(g)&&q)return d&&(d.spatialReference=c),g&&(g.spatialReference=c),m.fromJSON(e)}}):[]}h.addressToLocations=async function(b,a,c){a=n.from(a);b=f.parseUrl(b);const {address:e,...d}=
a.toJSON();a=f.encode({...b.query,...e,...d,f:"json"});c=f.asValidOptions(a,c);return l(`${b.path}/findAddressCandidates`,c).then(p)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});