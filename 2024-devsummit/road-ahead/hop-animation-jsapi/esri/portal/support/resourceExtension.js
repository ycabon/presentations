// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/urlUtils"],function(d,e){const b={},f=b["text/plain"],c={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const a in c)b[c[a]]=a;d.getResourceContentExtension=function(a){"json"===a.type?a="application/json":"blob"===a.type?a=a.blob.type:
(a=e.getPathExtension(a.url),a=c[a]||"text/plain");return b[a]||f};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});