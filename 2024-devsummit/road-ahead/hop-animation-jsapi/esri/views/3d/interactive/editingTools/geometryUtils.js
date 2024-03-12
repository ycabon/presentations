// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/factories/vec2f64","../../../support/geometry3dUtils"],function(d,k,l){function f(a){if(null==a||"polyline"!==a.type&&"polygon"!==a.type)return 0;a="polyline"===a.type?a.paths:a.rings;for(const e of a)for(a=0;a<e.length-1;a++){const b=e[a],c=e[a+1],g=b[0]-c[0],h=b[1]-c[1];if(g*g+h*h>l.epsilon)return Math.atan2(c[1]-b[1],c[0]-b[0])}return 0}d.mainAxis=function(a){a=f(a);return k.fromValues(Math.cos(a),Math.sin(a))};d.orientation=f;Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});