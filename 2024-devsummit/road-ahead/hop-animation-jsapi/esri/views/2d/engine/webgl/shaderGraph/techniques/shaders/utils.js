// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../highlightReasons","../../graph/glsl","./constants"],function(d,h,b,k){function e(a,c){c=b.float(2**c);return b.mod(b.floor(a.divide(c)),b.float(2))}d.cross2=function(a,c){return a.x.multiply(c.y).subtract(c.x.multiply(a.y))};d.getBit=e;d.getBitBool=function(a,c){return b.greaterThan(e(a,c),b.float(.5))};d.getFilterBit=function(a,c){return e(a,c+h.highlightReasons.length)};d.getHighlightBit=function(a,c){return e(a,c)};d.isNan=function(a){return b.equal(a,b.float(k.nanMagicNumber))};
d.max4=function(a){return b.max(b.max(b.max(a.x,a.y),a.z),a.w)};d.norm=function(a){return b.divide(a,b.float(255))};d.rand=function(a){const c=b.float(12.9898),f=b.float(78.233),g=b.float(43758.5453);a=b.dot(a,b.vec2(c,f));a=b.mod(a,b.float(3.14));return b.fract(b.sin(a).multiply(g))};d.rgba2float=function(a){const c=b.vec4(.99609375,255/65536,255/16777216,255/4294967296);return b.dot(a,c)};d.unpackDisplayIdTexel=function(a){const c=e(a.z,7),f=b.float(1).subtract(c),g=a.xyz.subtract(b.vec3(0,0,b.float(128)));
return f.multiply(a).add(c.multiply(g))};d.uvToClip=function(a){return a.multiply(2).subtract(1)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});