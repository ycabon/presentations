// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/libs/gl-matrix-2/vec2f64"],function(e,f,b){return function(){function a(){this.offset=b.vec2f64.create();this.scale=0;this.tile=null}a.prototype.init=function(a,b,c,d){this.tile=a;this.offset[0]=b;this.offset[1]=c;this.scale=d};a.prototype.dispose=function(){this.tile=null;this.offset[0]=0;this.scale=this.offset[1]=0};return a}()});