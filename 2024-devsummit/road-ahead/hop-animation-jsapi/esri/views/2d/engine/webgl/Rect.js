// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class b{constructor(a=0,c=0,d=0,e=0){this.x=a;this.y=c;this.width=d;this.height=e}get isEmpty(){return 0>=this.width||0>=this.height}union(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.width=Math.max(this.width,a.width);this.height=Math.max(this.height,a.height)}}return b});