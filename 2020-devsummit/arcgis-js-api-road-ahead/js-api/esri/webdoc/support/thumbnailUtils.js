// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,d){Object.defineProperty(d,"__esModule",{value:!0});var e={width:600,height:400};d.getOptimalThumbnailSize=function(c,a){a=a||e;var b=a.width;a=a.height;var d=b/a;1.5>d?a=b/1.5:1.5<d&&(b=1.5*a);b>c.width&&(a*=c.width/b,b=c.width);a>c.height&&(b*=c.height/a,a=c.height);return{width:Math.round(b),height:Math.round(a)}}});