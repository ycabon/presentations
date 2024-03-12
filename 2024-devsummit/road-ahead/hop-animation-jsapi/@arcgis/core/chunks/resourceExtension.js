/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{getPathExtension as i}from"../core/urlUtils.js";function p(p){return t[function(p){return"json"===p.type?"application/json":"blob"===p.type?p.blob.type:function(p){const t=i(p);return a[t]||n}(p.url)}(p)]||o}const t={},n="text/plain",o=t[n],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const i in a)t[a[i]]=i;export{p as g};
