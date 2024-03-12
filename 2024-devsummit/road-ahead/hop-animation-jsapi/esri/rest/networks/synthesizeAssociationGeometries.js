// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","./support/AssociationGeometriesResult"],function(f,k,d,l){f.synthesizeAssociationGeometries=async function(c,g,a){c=d.parseUrl(c);var e={...g.toJSON(),f:"json"};e=d.encode({...c.query,...e});a?a.method="post":a={method:"post"};a=d.asValidOptions(e,a);return k(`${c.path}/synthesizeAssociationGeometries`,a).then(b=>{var h=g.outSpatialReference;({data:b}=b);b=l.fromJSON(b);if(h)for(const m of b.associations)m.geometry.spatialReference=h.clone();return b})};
Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});