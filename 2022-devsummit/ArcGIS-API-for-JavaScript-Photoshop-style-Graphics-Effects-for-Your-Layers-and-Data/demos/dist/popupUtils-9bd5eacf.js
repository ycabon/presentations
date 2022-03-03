import { h as r, im as O, ia as y } from './_virtual_index-3ad07138.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!r(d))return [];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return ["*"];const f=n?await O(t):[],r$1=y(t.fieldsIndex,[...i,...f]);return a&&r$1.push(a),r$1&&s&&t.fieldsIndex.has(s)&&-1===r$1.indexOf(s)&&r$1.push(s),r$1&&o&&t.fieldsIndex.has(o)&&-1===r$1.indexOf(o)&&r$1.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r$1&&p&&t.fieldsIndex.has(p)&&-1===r$1.indexOf(p)&&r$1.push(p);})),r$1}function d(p,l){return p.popupTemplate?p.popupTemplate:r(l)&&l.defaultPopupTemplateEnabled&&r(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}

export { d, t };
