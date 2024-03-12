// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","../operations/relation","../support/RelationParameters"],function(d,f,e,g,h){d.relation=async function(b,a,c){a=h.from(a);a=g.relationToRESTParameters(a);b=e.parseUrl(b);c=e.asValidOptions({...b.query,f:"json",...a},c);return f(b.path+"/relation",c).then(({data:k})=>k.relations)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});