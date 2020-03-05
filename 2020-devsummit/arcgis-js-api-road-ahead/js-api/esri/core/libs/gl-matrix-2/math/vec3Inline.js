// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,d){Object.defineProperty(d,"__esModule",{value:!0});d.add=function(c,a,b){c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2]};d.subtract=function(c,a,b){c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2]};d.scale=function(c,a,b){c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b};d.normalize=function(c,a){var b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2];0<b&&(b=1/Math.sqrt(b),c[0]=a[0]*b,c[1]=a[1]*b,c[2]=a[2]*b)};d.cross=function(c,a,b){c[0]=a[1]*b[2]-a[2]*b[1];c[1]=a[2]*b[0]-a[0]*b[2];c[2]=a[0]*
b[1]-a[1]*b[0]}});