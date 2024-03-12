/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import n from"../Ground.js";import{o as l,i as r,p as t}from"../core/lang.js";import{g as u}from"./unitUtils.js";function o(r){if(null==r)return null;if(r instanceof n)return i(r);const t=r.tileInfo;if(null==t)return null;const o=l(t.lods);return null==o?null:o.resolution*u(t.spatialReference)}function i(n){if(null==n)return null;const l=n.layers.items.map(e).filter(r);return t(l)??null}function e(n){return n&&"tileInfo"in n?o(n):null}export{o as a,i as g};
