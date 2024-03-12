// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../Color"],function(c,q){function e(a,b){return{kind:"array",itemType:a,n:b}}function r(a){if("array"===a.kind){const b=r(a.itemType);return"number"===typeof a.n?`array<${b}, ${a.n}>`:"value"===a.itemType.kind?"array":`array<${b}>`}return a.kind}function t(a){if(null===a)return f;if("string"===typeof a)return g;if("boolean"===typeof a)return h;if("number"===typeof a)return k;if(a instanceof q)return l;if(Array.isArray(a)){let b;for(const m of a){const u=t(m);if(!b)b=
u;else if(b!==u){b=d;break}}return e(b||d,a.length)}return"object"===typeof a?n:d}function p(a,b){if("array"===b.kind)return"array"===a.kind&&(0===a.n&&"value"===a.itemType.kind||p(a.itemType,b.itemType))&&("number"!==typeof b.n||b.n===a.n);if("value"===b.kind)for(const m of v)if(p(a,m))return!0;return b.kind===a.kind}const f={kind:"null"},k={kind:"number"},g={kind:"string"},h={kind:"boolean"},l={kind:"color"},n={kind:"object"},d={kind:"value"},v=[f,k,g,h,l,n,e(d)];c.arrayType=e;c.booleanType=h;c.colorType=
l;c.getType=t;c.matchType=p;c.nullType=f;c.numberType=k;c.objectType=n;c.stringType=g;c.typeToString=r;c.valueToString=function(a){if(null===a)return"";const b=typeof a;return"string"===b?a:"number"===b||"boolean"===b?String(a):a instanceof q?a.toString():JSON.stringify(a)};c.valueType=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});