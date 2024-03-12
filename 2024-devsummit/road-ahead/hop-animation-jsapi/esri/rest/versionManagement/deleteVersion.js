// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/Error","../utils","./gdbVersion/serverVersionUtils"],function(d,g,h,e,k){const c=new Map;d.deleteVersion=async function(a,f,b){c.has(a)||await k.addServerVersion(c,a);if(11.1>=(c.get(a)?.serverVersion??0))throw new h("deleteVersion:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");a=e.parseUrl(a);f=f.toJSON();b=e.asValidOptions(a.query,{query:e.encode({...f,f:"json"}),...b,authMode:"immediate",method:"post"});({data:b}=
await g(`${a.path}/delete`,b));return b.success};d.serverVersionCacheMap=c;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});