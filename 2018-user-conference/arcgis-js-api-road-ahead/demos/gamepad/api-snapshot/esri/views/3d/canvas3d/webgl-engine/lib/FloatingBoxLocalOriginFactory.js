// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./gl-matrix"],function(e){var h=e.vec3d,a=h.create();return function(f,k){var b=[];this.getOrigin=function(d){for(var e=b.length,c,l=!1,m=Number.MAX_VALUE,g=0;g<e;g++){var n=b[g];h.subtract(d,n.vec3,a);a[0]=Math.abs(a[0]);a[1]=Math.abs(a[1]);a[2]=Math.abs(a[2]);var p=a[0]+a[1]+a[2];p<m&&(c=n,m=p,l=a[0]<f&&a[1]<f&&a[2]<f)}l||c&&null!=k&&!(b.length<k)||(c={vec3:[d[0],d[1],d[2]],id:"fb_"+b.length},b.push(c));return c}}});