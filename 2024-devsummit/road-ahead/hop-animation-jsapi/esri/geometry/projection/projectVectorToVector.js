// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../projection","../SpatialReference","./projectPointToVector","../../layers/graphics/dehydratedPoint"],function(e,k,l,m,n){function h(a,b,f,c,g){if(null==b||null==c||2>a.length)return!1;d.x=a[0];d.y=a[1];d.z=a[2];d.spatialReference=b;return m.projectPointToVector(d,f,c,g)}const d=n.makeDehydratedPoint(0,0,0,l.WGS84);e.projectVectorToVector=h;e.projectVectorToVectorAsync=async function(a,b,f,c,g,p){await k.initializeProjection(b,c,null,p);return h(a,b,f,c,g)};Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});