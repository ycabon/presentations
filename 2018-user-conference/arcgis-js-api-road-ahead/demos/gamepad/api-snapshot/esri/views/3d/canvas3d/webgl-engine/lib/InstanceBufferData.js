// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./Util"],function(n){return function(e,g){g=void 0===g?4*e:n.nextHighestPowerOfTwo(g*e);var c=new Float32Array(g),p=new Float32Array(e),h=0,f=[],d=0,m={},l=Array(g);this.prepareFree=function(a){f.length+=a};this.free=function(a){a=m[a];null!=a&&(f[d++]=a,l[a]=void 0)};this.prepareAllocate=function(a){a-=d;0<a&&this._resizeArray((h+a)*e)};this.allocate=function(a){var b;b=0<d?f[--d]:h++;m[a]=b;l[b]=a;return b};this.getSlot=function(a){return m[a]};this.getOffset=function(a){return a*e};this.getArray=
function(){return c};this.fill=function(a,b,d){c.set(d,a*e+b)};this.compact=function(){if(0<d){f.length=d;for(f.sort(function(a,b){return a-b});0<d&&f[d-1]===h;)d--,h--;for(;0<d;){d--;var a=h-1,b=f[d],k=a*e,g=b*e;c.set(c.subarray(k,k+e),g);c.set(p,k);k=l[a];l[a]=void 0;l[b]=k;m[k]=b;h--}}this._resizeArray(h*e);f.length=0;return c};this._resizeArray=function(a){var b;if(a>c.length){for(b=c.length||1;b<a;)b*=2;a=new Float32Array(b);a.set(c);c=a}else if(a<=c.length/2){b=c.length;for(a*=2;b>=a;)b/=2;
a=new Float32Array(b);a.set(c.subarray(0,b));c=a}}}});