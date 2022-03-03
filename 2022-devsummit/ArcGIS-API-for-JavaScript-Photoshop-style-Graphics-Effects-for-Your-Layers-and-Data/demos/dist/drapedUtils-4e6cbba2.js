import { c_ as M, h as r$1, cN as H } from './_virtual_index-3ad07138.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++);}return e/n}function n(t,n){return "number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return (n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol);})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol);})),e}return n.type,o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new M){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=r$1(o)&&!o.equals(a.spatialReference)?H(o)/H(a.spatialReference):n*i;}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new M;

export { a, s };
