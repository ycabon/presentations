// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./Util"],function(e){return{testIntervals:function(){var a=this.mergeIntervals([[0,1],[1,2]]);e.assert(JSON.stringify(a)===JSON.stringify([[0,2]]));a=this.mergeIntervals([[0,1],[0,2]]);e.assert(JSON.stringify(a)===JSON.stringify([[0,2]]));a=this.mergeIntervals([[0,1],[0,3]]);e.assert(JSON.stringify(a)===JSON.stringify([[0,3]]));a=this.mergeIntervals([[2,5],[0,1],[0,3],[7,17]]);e.assert(JSON.stringify(a)===JSON.stringify([[0,5],[7,17]]));a=this.mergeIntervals([[0,0],[1,1],[4,4],[5,5]]);e.assert(JSON.stringify(a)===
JSON.stringify([[0,1],[4,5]]));a=this.invertIntervals([[0,1],[1,2]],10);e.assert(JSON.stringify(a)===JSON.stringify([[3,10]]));a=this.invertIntervals([[0,1],[8,10]],10);e.assert(JSON.stringify(a)===JSON.stringify([[2,7]]));a=this.invertIntervals([[1,5],[7,9]],10);e.assert(JSON.stringify(a)===JSON.stringify([[0,0],[6,6],[10,10]]));a=this.invertIntervals([[0,0],[1,1],[4,4],[5,5]],10);e.assert(JSON.stringify(a)===JSON.stringify([[2,3],[6,10]]));a=this.invertIntervals([[0,0],[1,1],[2,4],[5,10]],10);e.assert(JSON.stringify(a)===
JSON.stringify([]));a=this.intersectIntervals([[0,0],[1,1],[2,4],[5,10]],[0,10]);e.assert(JSON.stringify(a)===JSON.stringify([[0,0],[1,1],[2,4],[5,10]]));a=this.intersectIntervals([[0,0],[1,1],[2,4],[5,10]],[0,3]);e.assert(JSON.stringify(a)===JSON.stringify([[0,0],[1,1],[2,3]]));a=this.intersectIntervals([[1,1],[2,4]],[0,10]);e.assert(JSON.stringify(a)===JSON.stringify([[1,1],[2,4]]));a=this.intersectIntervals([[0,0],[1,1],[2,4],[5,10]],[1,3]);e.assert(JSON.stringify(a)===JSON.stringify([[1,1],[2,
3]]));a=this.intersectIntervals([[0,0],[1,1],[2,4],[5,10]],[4,10]);e.assert(JSON.stringify(a)===JSON.stringify([[4,4],[5,10]]))},copyIntervals:function(a){for(var c=[],b=0;b<a.length;b++){var d=a[b];c.push([d[0],d[1]])}return c},convertFaceToIndexRange:function(a,c){for(var b=0;b<a.length;b++){var d=a[b];d[0]*=c;d[1]=d[1]*c+(c-1)}},sortIntervals:function(a){return a.sort(function(a,b){return a[0]==b[0]?a[1]>b[1]?1:a[1]<b[1]?-1:0:a[0]>b[0]?1:a[0]<b[0]?-1:0})},intersectIntervals:function(a,c){if(0>=
a.length)return[];for(var b=[],d=0;d<a.length;d++){var f=a[d];f[1]<c[0]||f[0]>c[1]||(f=[f[0],f[1]],f[0]<c[0]&&(f[0]=c[0]),f[1]>c[1]&&(f[1]=c[1]),b.push(f))}return b},mergeIntervals:function(a){if(0>=a.length)return[];var c=[];a=this.sortIntervals(a);c.push(a[0]);for(var b=1;b<a.length;b++){var d=c[c.length-1];d[1]+1<a[b][0]?c.push(a[b]):d[1]<a[b][1]&&(d[1]=a[b][1],c.pop(),c.push(d))}return c},invertIntervals:function(a,c){for(var b=[],d=0,f=0;f<a.length;f++){var e=a[f];e[0]>d&&b.push([d,e[0]-1]);
d=e[1]+1}d<=c&&b.push([d,c]);return b},offsetIntervals:function(a,c){for(var b=[],d=0;d<a.length;d++){var e=a[d];b.push([e[0]+c,e[1]+c])}return b}}});