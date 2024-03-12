// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/vec3f64","../projection","./projectBuffer"],function(f,k,g,l){function h(a,b,c,d){if(g.canProjectWithoutEngine(a.spatialReference,c))return e[0]=a.x,e[1]=a.y,e[2]=a.z??d??0,l.projectBuffer(e,a.spatialReference,0,b,c,0,1);a=g.tryProjectWithZConversion(a,c);if(!a)return!1;b[0]=a?.x;b[1]=a?.y;b[2]=a?.z??d??0;return!0}const e=k.create();f.projectPointToVector=h;f.projectPointToVectorAsync=async function(a,b,c,d,m){await g.initializeProjection(a.spatialReference,
c,null,m);return h(a,b,c,d)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});