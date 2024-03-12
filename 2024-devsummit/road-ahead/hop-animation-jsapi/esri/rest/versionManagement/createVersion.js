// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils"],function(e,f,c){e.createVersion=async function(b,d,a){b=c.parseUrl(b);d=d.toJSON();a=c.asValidOptions(b.query,{query:c.encode({...d,f:"json"}),...a,authMode:"immediate",method:"post"});({data:a}=await f(`${b.path}/create`,a));const {versionName:g,versionGuid:h,...k}=a.versionInfo;return{...k,versionIdentifier:{name:g,guid:h}}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});