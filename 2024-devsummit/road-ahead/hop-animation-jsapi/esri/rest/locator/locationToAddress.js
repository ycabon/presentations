// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","../support/AddressCandidate","../support/LocationToAddressParameters"],function(e,f,d,g,h){function k({data:b}){if(b){var {address:a,location:c}=b;return g.fromJSON({address:a?.Match_addr||"",attributes:a||{},location:c,score:100})}}e.locationToAddress=async function(b,a,c){a=h.from(a);b=d.parseUrl(b);a={...a.toJSON(),f:"json"};a=d.encode({...b.query,...a});c=d.asValidOptions(a,c);return f(`${b.path}/reverseGeocode`,c).then(k)};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});