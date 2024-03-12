// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/libs/gl-matrix-2/factories/vec3f64","./projectors"],function(d,e,f){const a=e.create();d.projectVectorToWGS84ComparableLonLat=function(g,b,c){if(null==b)return!1;b=f.getWGS84ComparableLonLatProjector(b);if(null==b)return!1;b(g,0,a,0);c!==a&&(c[0]=a[0],c[1]=a[1],2<c.length&&(c[2]=a[2]));return!0};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});