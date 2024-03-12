// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/factories/mat3f64","../../../../core/libs/gl-matrix-2/factories/vec2f32","../../../../core/libs/gl-matrix-2/math/mat3"],function(f,c,g,h){f.getTransformMatrix=function(a){if(null==a)return null;var d=null!=a.offset?a.offset:g.ZEROS,b=null!=a.rotation?a.rotation:0;a=null!=a.scale?a.scale:g.ONES;d=c.fromValues(1,0,0,0,1,0,d[0],d[1],1);b=c.fromValues(Math.cos(b),-Math.sin(b),0,Math.sin(b),Math.cos(b),0,0,0,1);a=c.fromValues(a[0],0,0,0,a[1],0,0,0,1);
const e=c.create();h.multiply(e,b,a);h.multiply(e,d,e);return e};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});