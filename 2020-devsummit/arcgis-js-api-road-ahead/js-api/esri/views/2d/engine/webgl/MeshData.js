// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){return function(){function a(){this.vertexData=new Map;this.vertexCount=0;this.indexData=[]}a.prototype.clear=function(){this.vertexData.clear();this.vertexCount=0;this.indexData=[]};a.prototype.update=function(a,c,d){for(var b in a)this.vertexData.set(b,a[b]);for(b in this.vertexData)null===a[b]&&this.vertexData.delete(b);this.vertexCount=c;this.indexData=d};return a}()});