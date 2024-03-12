// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/libs/gl-matrix-2/factories/vec2f64"],function(a,b){class c{constructor(){this.offset=b.create();this.scale=0;this.tile=null}init(d,e,f,g){this.tile=d;this.offset[0]=e;this.offset[1]=f;this.scale=g}dispose(){this.tile=null;this.offset[0]=0;this.scale=this.offset[1]=0}}a.UpsampleInfo=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});