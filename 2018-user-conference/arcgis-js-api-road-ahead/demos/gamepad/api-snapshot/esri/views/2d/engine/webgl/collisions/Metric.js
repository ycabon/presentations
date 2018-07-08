// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./BoundingBox"],function(e,g,h){Object.defineProperty(g,"__esModule",{value:!0});e=function(){function b(a,b,c,d,f){void 0===d&&(d=255);void 0===f&&(f=0);this.bounds=a;this.range=b;this.index=c;this.minZoom=d;this.maxZoom=f}b.prototype.serialize=function(a){this.bounds.serialize(a);a.writeInt32(this.range.from);a.writeInt32(this.range.count);a.writeInt32(this.index);return a};b.deserialize=function(a){var e=h.default.deserialize(a),c=a.readInt32(),d=a.readInt32(),c={from:c,
count:d};a=a.readInt32();return new b(e,c,a)};return b}();g.default=e});