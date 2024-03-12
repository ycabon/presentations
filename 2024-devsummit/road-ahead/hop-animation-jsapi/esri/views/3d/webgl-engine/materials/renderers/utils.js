// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/libs/gl-matrix-2/factories/vec3f64","../../../../webgl/doublePrecisionUtils"],function(f,k,l){const g=k.create(),b=new Float32Array(6);f.addObject3DStateID=function(a,c){null==a&&(a=[]);a.push(c);return a};f.encodeDoubleVec3=function(a,c,e,h,d){g[0]=a.get(c,0);g[1]=a.get(c,1);g[2]=a.get(c,2);l.encodeDoubleArray(g,b,3);e.set(d,0,b[0]);h.set(d,0,b[1]);e.set(d,1,b[2]);h.set(d,1,b[3]);e.set(d,2,b[4]);h.set(d,2,b[5])};f.removeObject3DStateID=function(a,c){if(null==
a)return null;a=a.filter(e=>e!==c);return 0===a.length?null:a};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});