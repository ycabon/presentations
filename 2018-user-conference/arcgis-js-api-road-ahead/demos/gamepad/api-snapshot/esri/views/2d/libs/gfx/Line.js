// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(c,d,e,f,g){Object.defineProperty(d,"__esModule",{value:!0});c=function(c){function b(a){var b=c.call(this)||this;b.shape=f.getDefault("Line");b.rawNode=a;return b}e(b,c);b.prototype.getBoundingBox=function(){if(!this.bbox){var a=this.shape;this.bbox={x:Math.min(a.x1,a.x2),y:Math.min(a.y1,a.y2),width:Math.abs(a.x2-a.x1),height:Math.abs(a.y2-a.y1)}}return this.bbox};b.nodeType="line";return b}(g.default);
d.default=c});