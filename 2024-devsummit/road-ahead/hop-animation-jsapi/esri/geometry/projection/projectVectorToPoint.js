// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/vec3f64","../projection","./projectVectorToVector"],function(d,g,h,k){function f(e,b,a){if(!k.projectVectorToVector(e,b,c,a.spatialReference))return!1;a.x=c[0];a.y=c[1];a.z=c[2];return!0}const c=g.create();d.projectVectorToPoint=f;d.projectVectorToPointAsync=async function(e,b,a,l){await h.initializeProjection(b,a.spatialReference,null,l);return f(e,b,a)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});