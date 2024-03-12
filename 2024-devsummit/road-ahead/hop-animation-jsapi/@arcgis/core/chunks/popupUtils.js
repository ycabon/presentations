/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{getFeatureEditFields as e,fixFields as l}from"../layers/support/fieldUtils.js";async function n(n,p=n.popupTemplate){if(null==p)return[];const u=await p.getRequiredFields(n.fieldsIndex),{lastEditInfoEnabled:t}=p,{objectIdField:d,typeIdField:s,globalIdField:a,relationships:i}=n;if(u.includes("*"))return["*"];const o=t?e(n):[],f=l(n.fieldsIndex,[...u,...o]);return s&&f.push(s),f&&d&&n.fieldsIndex?.has(d)&&!f.includes(d)&&f.push(d),f&&a&&n.fieldsIndex?.has(a)&&!f.includes(a)&&f.push(a),i&&i.forEach((e=>{const{keyField:l}=e;f&&l&&n.fieldsIndex?.has(l)&&!f.includes(l)&&f.push(l)})),f}function p(e,l){return e.popupTemplate?e.popupTemplate:null!=l&&l.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function u(e,l){return null!=p(e,{defaultPopupTemplateEnabled:l})}export{p as a,n as g,u as h};
