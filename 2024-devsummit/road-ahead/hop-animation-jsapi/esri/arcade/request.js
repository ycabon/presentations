// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../request"],function(f,d){f.serviceRequest=async function(a,b,g,h,e=null){if(null!==e){e=await e.getToken();a=a+="?token\x3d"+e;if("get"===h.toLowerCase())return d(a,{responseType:"json",query:b});if(b)for(const c in b)a=a.includes("?")?a+"\x26":a+"?",a+=encodeURIComponent(c)+"\x3d"+encodeURIComponent(b[c]);return d(a,{method:"post",query:g,responseType:"json"})}if("get"===h.toLowerCase())return d(a,{responseType:"json",query:b});if(b)for(const c in b)a=a.includes("?")?a+"\x26":
a+"?",a+=encodeURIComponent(c)+"\x3d"+encodeURIComponent(b[c]);return await d(a,{method:"post",responseType:"json",query:g})};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});