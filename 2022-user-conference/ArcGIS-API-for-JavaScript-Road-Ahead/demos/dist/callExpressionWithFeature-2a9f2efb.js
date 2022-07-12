import { C as s$1, s as s$2, cn as q, co as C, cp as B, cq as v } from './_virtual_index-64b818a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s(e,t,o,n,a){const s=e.referencesGeometry()&&a?u(t,n,a):t,i=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:i})}catch(c){return s$1.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function u(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;i.has(r)||i.set(r,c(r));const s=i.get(r)(e.geometry,o,n,a);return {...e,geometry:s}}function c(s){const i={};switch(s){case"esriGeometryPoint":return (e,r,t,o)=>v(r,i,e,t,o);case"esriGeometryPolygon":return (e,r,t,o)=>B(r,i,e,t,o);case"esriGeometryPolyline":return (e,r,t,n)=>C(r,i,e,t,n);case"esriGeometryMultipoint":return (e,r,o,n)=>q(r,i,e,o,n);default:return s$1.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s$2("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}

export { s };
