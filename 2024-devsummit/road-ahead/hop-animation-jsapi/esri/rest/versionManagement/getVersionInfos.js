// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils"],function(e,f,c){e.getVersionInfos=async function(b,d,a){b=c.parseUrl(b);d=d.toJSON();a=c.asValidOptions(b.query,{query:c.encode({...d,f:"json"}),...a});({data:a}=await f(`${b.path}/versionInfos`,a));return a.versions.map(g=>{const {versionName:h,versionGuid:k,...l}=g;return{...l,versionIdentifier:{name:h,guid:k}}})};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});