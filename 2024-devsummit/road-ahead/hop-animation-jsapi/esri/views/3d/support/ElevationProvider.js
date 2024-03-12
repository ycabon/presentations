// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/graphics/dehydratedFeatureUtils"],function(d,g){function f(b){return"array"in b}class h{constructor(b,a=null,c=0){this.array=b;this.spatialReference=a;this.offset=c}}d.SamplePosition=h;d.getElevationAtPoint=function(b,a,c="ground"){if(g.isDehydratedPoint(a))return b.getElevation(a.x,a.y,a.z||0,a.spatialReference,c);if(f(a)){let e=a.offset;return b.getElevation(a.array[e++],a.array[e++],a.array[e]||0,a.spatialReference??b.spatialReference,c)}return b.getElevation(a[0],
a[1],a[2]||0,b.spatialReference,c)};d.isSamplePosition=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});