// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.arrayBufferToBase64=function(a){a=new Uint8Array(a);let c="";for(let b=0;b<a.length;b++)c+=String.fromCharCode(a[b]);return btoa(c)};d.base64ToArrayBuffer=function(a){a=atob(a);const c=new Uint8Array(a.length);for(let b=0;b<a.length;b++)c[b]=a.charCodeAt(b);return c.buffer};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});