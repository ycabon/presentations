import { t, n2 as C, n3 as T, m as r } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function d(l,d=l.popupTemplate){if(t(d))return [];const s=await d.getRequiredFields(l.fieldsIndex),{lastEditInfoEnabled:i}=d,{objectIdField:n,typeIdField:u,globalIdField:a,relationships:o}=l;if(s.includes("*"))return ["*"];const r=i?await C(l):[],f=T(l.fieldsIndex,[...s,...r]);return u&&f.push(u),f&&n&&l.fieldsIndex.has(n)&&!f.includes(n)&&f.push(n),f&&a&&l.fieldsIndex.has(a)&&!f.includes(a)&&f.push(a),o&&o.forEach((e=>{const{keyField:p}=e;f&&p&&l.fieldsIndex.has(p)&&!f.includes(p)&&f.push(p);})),f}function s(e,p){return e.popupTemplate?e.popupTemplate:r(p)&&p.defaultPopupTemplateEnabled&&r(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}

export { d, s };
