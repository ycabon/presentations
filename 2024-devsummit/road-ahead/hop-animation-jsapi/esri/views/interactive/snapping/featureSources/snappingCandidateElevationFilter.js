// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has"],function(p,x){function q(b){return 1>=b.distance}function r(b,a,{x:d,y:c,z:l}){const {start:e,end:m,target:f}=b;if(!b.draped){const k=m.x-e.x;var g=m.y-e.y,h=m.z-e.z;const n=Math.min(1,Math.max(0,((a.x-e.x)*k+(a.y-e.y)*g+h*(a.z-e.z))/(k*k+g*g+h*h)));g=e.y+g*n;h=e.z+h*n;f.x=e.x+k*n;f.y=g;f.z=h}d=(a.x-f.x)/d;c=(a.y-f.y)/c;a=(a.z-f.z)/l;b.distance=Math.sqrt(d*d+c*c+a*a)}function t(b,a,{x:d,y:c,z:l}){const {target:e}=b;d=(a.x-e.x)/d;c=(a.y-e.y)/c;a=(a.z-e.z)/
l;b.distance=Math.sqrt(d*d+c*c+a*a)}function u(b,a){return b.distance-a.distance}class v{filter(b,a){return a}notifyElevationSourceChange(){}}class w{filter(b,a){const {point:d,distance:c}=b;({z:b}=d);if(null==b||0===a.length)return a;b="number"===typeof c?{x:c,y:c,z:c}:c;a=this._updateCandidatesTo3D(a,d,b).filter(q);a.sort(u);return a}_updateCandidatesTo3D(b,a,d){for(const c of b)switch(c.type){case "edge":r(c,a,d);continue;case "vertex":t(c,a,d)}return b}}p.getSnappingCandidateElevationFilter=function(b=
!1){return b?new w:new v};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});