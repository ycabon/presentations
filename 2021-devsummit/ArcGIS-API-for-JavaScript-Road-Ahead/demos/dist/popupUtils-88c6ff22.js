import { r, dy as D, df as y, dz as h } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(i,d=i.popupTemplate){if(!r(d))return [];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return ["*"];const r$1=s?await D(i):[],m=y(i.fields,[...o,...r$1]);return a&&m.push(a),m&&u&&h(i.fields,u)&&-1===m.indexOf(u)&&m.push(u),m&&n&&h(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&h(i.fields,p)&&-1===m.indexOf(p)&&m.push(p);})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:r(l)&&l.defaultPopupTemplateEnabled&&r(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}

export { d, i };
