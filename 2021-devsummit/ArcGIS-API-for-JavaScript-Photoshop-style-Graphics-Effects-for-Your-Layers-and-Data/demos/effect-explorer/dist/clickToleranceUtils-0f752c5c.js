/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t,e){return "number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++);}return e/n}(t.stops):e}function n(n){const r=n&&n.renderer,s="touch"===(n&&n.event&&n.event.pointerType)?9:6;if(!r)return s;const o="visualVariables"in r?function(t,n){if(!n)return t;const r=n.filter((t=>"size"===t.type)).map((n=>{const{maxSize:r,minSize:s}=n;return (e(r,t)+e(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let t=0;t<o;t++)s+=r[t];const f=Math.floor(s/o);return Math.max(f,t)}(s,r.visualVariables):s;if("simple"===r.type)return t(o,r.symbol);if("unique-value"===r.type){let e=o;return r.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol);})),e}if("class-breaks"===r.type){let e=o;return r.classBreakInfos.forEach((n=>{e=t(e,n.symbol);})),e}return r.type,o}

export { n };
