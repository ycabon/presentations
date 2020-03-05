// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(a,b,c,d){void 0===a&&(a=0);void 0===b&&(b=0);void 0===c&&(c=0);void 0===d&&(d=0);this.x=a;this.y=b;this.width=c;this.height=d}Object.defineProperty(b.prototype,"isEmpty",{get:function(){return 0>=this.width||0>=this.height},enumerable:!0,configurable:!0});b.prototype.union=function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.width=Math.max(this.width,a.width);this.height=
Math.max(this.height,a.height)};return b}();f.default=e});