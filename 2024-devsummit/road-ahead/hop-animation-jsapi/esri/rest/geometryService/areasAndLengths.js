// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils"],function(d,f,e){d.areasAndLengths=async function(a,b,c){a=e.parseUrl(a);b={...a.query,f:"json",...b.toJSON()};c=e.asValidOptions(b,c);return f(a.path+"/areasAndLengths",c).then(g=>g.data)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});