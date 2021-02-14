import { u, dT as _, dC as g, dU as w } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function i(i,d=i.popupTemplate){if(!u(d))return [];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u$1,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return ["*"];const r=s?await _(i):[],m=g(i.fields,[...o,...r]);return a&&m.push(a),m&&u$1&&w(i.fields,u$1)&&-1===m.indexOf(u$1)&&m.push(u$1),m&&n&&w(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&w(i.fields,p)&&-1===m.indexOf(p)&&m.push(p);})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:u(l)&&l.defaultPopupTemplateEnabled&&u(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}

export { d, i };
