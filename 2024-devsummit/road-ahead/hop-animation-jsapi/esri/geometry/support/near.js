// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry","../../core/libs/gl-matrix-2/math/vec2","./coordsUtils","../Point"],function(e,q,l,m,n){e.nearestCoordinate=function(a,b){const {spatialReference:p}=b;b=[b.x,b.y];let d=Number.POSITIVE_INFINITY,f=0,g=0;const c=[0,0];a="extent"===a.type?[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]:a.rings;for(const h of a)for(a=0;a<h.length-1;a++){m.projectPointOnLine(c,b,h,a);const k=l.distance(b,c);k<d&&(d=k,f=c[0],g=c[1])}return{coordinate:new n({x:f,
y:g,spatialReference:p}),distance:d}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});