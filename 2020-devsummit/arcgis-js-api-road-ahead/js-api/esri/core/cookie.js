// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,b){Object.defineProperty(b,"__esModule",{value:!0});b.writeCookie=function(c,e,a){void 0===a&&(a={});var d=a.expires;if("number"===typeof d){var f=new Date;f.setTime(f.getTime()+864E5*d);d=a.expires=f}"string"!==typeof d&&(a.expires=d.toUTCString());c=c+"\x3d"+encodeURIComponent(e);for(var b in a)c+="; "+b,e=a[b],!0!==e&&(c+="\x3d"+e);document.cookie=c}});