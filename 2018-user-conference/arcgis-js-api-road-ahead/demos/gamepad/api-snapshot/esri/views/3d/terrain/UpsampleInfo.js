// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool","../lib/glMatrix"],function(h,k,e,f){var g=f.vec2d;return function(){function a(a,b,c,d){this.scale=0;this.tile=null;this.offset=g.create();void 0!==a&&this.init(a,b,c,d)}a.prototype.init=function(a,b,c,d){this.tile=a;this.offset[0]=b;this.offset[1]=c;this.scale=d};a.prototype.dispose=function(){this.tile=null;this.offset[0]=0;this.scale=this.offset[1]=0};a.Pool=new e(a);return a}()});