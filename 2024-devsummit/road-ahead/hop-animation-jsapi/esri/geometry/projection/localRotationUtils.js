// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/math/mat4"],function(d,h){function g(b,c,a){const e=Math.sin(b);b=Math.cos(b);const f=Math.sin(c);c=Math.cos(c);a[0]=-e;a[4]=-f*b;a[8]=c*b;a[12]=0;a[1]=b;a[5]=-f*e;a[9]=c*e;a[13]=0;a[2]=0;a[6]=c;a[10]=f;a[14]=0;a[3]=0;a[7]=0;a[11]=0;a[15]=1;return a}d.computeENUToSphericalPCPFLocalRotation=g;d.computeSphericalPCPFToENULocalRotation=function(b,c,a){g(b,c,a);h.transpose(a,a);return a};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});