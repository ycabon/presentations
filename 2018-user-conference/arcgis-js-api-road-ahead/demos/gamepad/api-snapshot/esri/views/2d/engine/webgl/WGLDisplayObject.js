// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./WGLDisplayRecord","./util/serializationUtils"],function(h,k,g,d){return function(){function b(a){this.displayRecords=[];this.id=a}b.prototype.serialize=function(a){a.writeInt32(this.id);d.serializeList(a,this.displayRecords);return a};b.deserialize=function(a,c){c=c.store;var e=a.readInt32(),f=new b(e);f.displayRecords=d.deserializeList(a,g,{id:e,store:c});return f};return b}()});