// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){const l=Math.PI/180;g.getBBox=function(a,b,c,f){const [d,e]=b,[h,k]=f;b=.5*c;a[0]=d-b*h;a[1]=e-b*k;a[2]=d+b*h;a[3]=e+b*k;return a};g.getOuterSize=function(a,b){var c=b.rotation*l;const f=Math.abs(Math.cos(c));c=Math.abs(Math.sin(c));const [d,e]=b.size;a[0]=Math.round(e*c+d*f);a[1]=Math.round(e*f+d*c);return a};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});