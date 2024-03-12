// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/DoubleArray","../../layers/graphics/elevationAlignmentUtils"],function(f,g,k){f.geometryToRenderInfo=function(d,b,l,m,n){const a=g.newDoubleArray(3*d.length),h=g.newDoubleArray(a.length);d.forEach((c,e)=>{a[3*e]=c[0];a[3*e+1]=c[1];a[3*e+2]=2<c.length?c[2]:0});b=k.applyPerVertexElevationAlignment(a,b,0,h,0,a,0,a.length/3,l,m,n);return{numVertices:d.length,position:a,mapPositions:h,projectionSuccess:null!=b,sampledElevation:b}};Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});