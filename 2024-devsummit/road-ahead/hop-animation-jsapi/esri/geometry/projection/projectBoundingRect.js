// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/vec3f64","./projectBuffer","../support/aaBoundingRect","../support/spatialReferenceUtils"],function(f,h,g,k,l){const a=h.create();f.projectBoundingRect=function(b,d,c,e){if(null==b)return!1;if(l.equals(d,e))return k.copy(c,b),!0;a[0]=b[0];a[1]=b[1];a[2]=0;if(!g.projectBuffer(a,d,0,a,e,0,1))return!1;c[0]=a[0];c[1]=a[1];a[0]=b[2];a[1]=b[3];a[2]=0;if(!g.projectBuffer(a,d,0,a,e,0,1))return!1;c[2]=a[0];c[3]=a[1];return!0};Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});