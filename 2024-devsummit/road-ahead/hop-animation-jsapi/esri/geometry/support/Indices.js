// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/typedArrayUtil"],function(e,c){function p(a){let b=!0;for(const d of a){if(65536<=d)return c.isArray(a)?new Uint32Array(a):a;256<=d&&(b=!1)}return b?new Uint8Array(a):new Uint16Array(a)}function k(a){if(1===a)return l;if(a<c.nativeArrayMaxSize)return Array.from(new Uint16Array(h.buffer,0,a));if(a<h.length)return new Uint16Array(h.buffer,0,a);if(a>f.length){f=new Uint32Array(Math.max(2*f.length,a));for(let b=0;b<f.length;b++)f[b]=b}return new Uint32Array(f.buffer,0,a)}
function m(a){if(1===a)return l;if(a<c.nativeArrayMaxSize)return Array(a).fill(0);a>g.length&&(g=new Uint8Array(Math.max(2*g.length,a)));return new Uint8Array(g.buffer,0,a)}let f=(()=>{const a=new Uint32Array(131072);for(let b=0;b<a.length;++b)a[b]=b;return a})();const l=[0],h=(()=>{const a=new Uint16Array(65536);for(let b=0;b<a.length;++b)a[b]=b;return a})();let g=new Uint8Array(65536);e.compactIndices=function(a){if(c.isArray(a)){if(a.length<c.nativeArrayMaxSize)return a}else if(a.length<c.nativeArrayMaxSize)return Array.from(a);
let b=!0,d=!0;a.some((n,q)=>{b=b&&0===n;d=d&&n===q;return!b&&!d});return b?m(a.length):d?k(a.length):c.isArray(a)||a.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?p(a):a};e.getContinuousIndexArray=k;e.getZeroIndexArray=m;e.newIndexArray=function(a){return a<=c.nativeArrayMaxSize?Array(a):65536>=a?new Uint16Array(a):new Uint32Array(a)};e.newIntArray=function(a){return a<=c.nativeArrayMaxSize?Array(a):new Uint32Array(a)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});