// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./TilePerLayerInfo"],function(k,l,g){return function(){function d(a,b,c){this.lij=a;this._pool=b;this.layerInfo=Array(2);this.parent=null;for(a=0;2>a;a++)if(b=c[a],0<b){this.layerInfo[a]=[];for(var e=0;e<b;++e)this.layerInfo[a][e]=g.TilePerLayerInfo.makeEmptyLayerInfo(a,this._pool)}}d.prototype.hasDataAvailable=function(a,b,c){return(b=this.layerInfo[c][b].tilemap)?"unavailable"!==b.getAvailability(a.lij[1],a.lij[2]):!0};d.prototype.modifyLayers=function(a,b,c){a=this.layerInfo[c];
for(var e=b.length,d=Array(e),f=0;f<e;f++){var h=b[f];d[f]=-1<h?a[h]:g.TilePerLayerInfo.makeEmptyLayerInfo(c,this._pool)}this.layerInfo[c]=d};return d}()});