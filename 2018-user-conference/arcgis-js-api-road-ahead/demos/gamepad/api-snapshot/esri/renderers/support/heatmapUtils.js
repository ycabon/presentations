// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/global"],function(x,g,t){function q(c,b,a,e,h){c=new Uint32Array(c*c);b="buffer"in b?b:new Float64Array(b);a="buffer"in a?new Uint32Array(a.buffer):new Uint32Array((new Uint8Array(a)).buffer);h=a.length/(h-e);for(var f=0;f<b.length;f++){var d=Math.floor((b[f]-e)*h);c[f]=0>d?a[0]:d<a.length?a[d]:a[a.length-1]}return c.buffer}function v(c,b){return"function"===typeof c?c:c?"string"===typeof b?function(a){return-1*+a[c]}:function(a){return+a[c]+b}:function(a){return 1}}
Object.defineProperty(g,"__esModule",{value:!0});g.generateGradient=function(){if(!("document"in t))return function(a){return null};var c=document.createElement("canvas"),b=c.getContext("2d");c.height=512;c.width=1;return function(a){var e=b.createLinearGradient(0,0,0,c.height),h=0;for(a=a.colorStops;h<a.length;h++){var f=a[h],d=f.color;e.addColorStop(f.ratio,"rgba("+d[0]+", "+d[1]+", "+d[2]+", "+d[3]+")")}b.fillStyle=e;b.fillRect(0,0,1,c.height);return b.getImageData(0,0,1,c.height).data}}();g.calculateHeatmapIntensityInfo=
function(c,b,a){var e=b.blurRadius,h=b.fieldOffset,f=b.field;b=new Float64Array(a*a);for(var d=Math.round(4.5*e),m=e*e,g=new Float64Array(2*d+1),k=0;k<=g.length;k++)g[k]=Math.exp(-Math.pow(k-d,2)/(2*m))/Math.sqrt(2*Math.PI)*(e/2);for(var e=Math.round(4.5*e),d=Number.NEGATIVE_INFINITY,n,h=v(f,h),f=0;f<c.length;f++)for(var l=c[f],m=l.geometry.x-e,k=l.geometry.y-e,q=Math.min(l.geometry.y+e,a-1),t=Math.min(l.geometry.x+e,a-1),l=+h(l.attributes),p=m,r=k;r<=q;){for(var w=g[r-k];p<=t;){n=g[p-m];var u=r*
a+p;0<=u&&(n=b[u]+=w*n*l,n>d&&(d=n));p++}r++;p=m}return{matrix:b.buffer,max:d}};g.drawHeatmap=function(c,b,a,e,h,f){var d=c.getContext("2d");d.clearRect(0,0,b,b);var g=d.getImageData(0,0,b,b);g.data.set(new Uint8ClampedArray(q(b,a,e,h,f)));d.putImageData(g,0,0);return c};g.createHeatmapImageData=q});