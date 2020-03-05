// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool"],function(l,m,c){return function(){function a(a){this.lodInfo=a;this.spans=[]}a.prototype.release=function(){};a.prototype.forEach=function(a,c){var d=this.spans,e=this.lodInfo,g=e.level;if(0!==d.length)for(var f=0;f<d.length;f++)for(var b=d[f],h=b.row,k=b.colTo,b=b.colFrom;b<=k;b++)a.call(c,g,h,e.normalizeCol(b),e.getWorldForColumn(b))};a.pool=new c(a,!0);return a}()});