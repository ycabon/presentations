/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as n,v as e,x as t}from"./unitUtils.js";function o(o,r,i){if(null==r||null==i||i.vcsWkid||n(r,i)||e(r)||e(i))return null;const s=t(r)/t(i);if(1===s)return null;switch(o){case"point":case"esriGeometryPoint":return n=>{return e=n,t=s,void(null!=e?.z&&(e.z*=t));var e,t};case"polyline":case"esriGeometryPolyline":return n=>function(n,e){if(n)for(const t of n.paths)for(const n of t)n.length>2&&(n[2]*=e)}(n,s);case"polygon":case"esriGeometryPolygon":return n=>function(n,e){if(n)for(const t of n.rings)for(const n of t)n.length>2&&(n[2]*=e)}(n,s);case"multipoint":case"esriGeometryMultipoint":return n=>function(n,e){if(n)for(const t of n.points)t.length>2&&(t[2]*=e)}(n,s);case"extent":case"esriGeometryEnvelope":return n=>{return t=s,void((e=n)&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t));var e,t};default:return null}}export{o as g};
