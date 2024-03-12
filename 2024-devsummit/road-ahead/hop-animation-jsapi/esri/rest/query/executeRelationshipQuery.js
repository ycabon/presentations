// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/queryRelatedRecords","../support/FeatureSet","../support/RelationshipQuery"],function(c,f,g,n,h){c.executeRelationshipQuery=async function(a,b,d){b=h.from(b);a=f.parseUrl(a);return g.executeRelationshipQuery(a,b,d).then(e=>{const k=e.data,l={};Object.keys(k).forEach(m=>l[m]=n.fromJSON(k[m]));return l})};c.executeRelationshipQueryForCount=async function(a,b,d){b=h.from(b);a=f.parseUrl(a);return g.executeRelationshipQueryForCount(a,b,{...d}).then(e=>e.data)};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});