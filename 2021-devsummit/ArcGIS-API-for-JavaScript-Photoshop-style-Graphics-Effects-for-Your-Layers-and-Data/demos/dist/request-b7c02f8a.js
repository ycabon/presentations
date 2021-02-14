import { dt as e, p as s$1 } from './_virtual:index-a8a6346c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let t;function s(s,o={}){let n=o.responseType;n?"json"!==n&&"text"!==n&&"blob"!==n&&"array-buffer"!==n&&(n="text"):n="json";const a=o&&o.signal;return delete o.signal,e.invokeStaticMessage("request",{url:s,options:o},{signal:a}).then((e=>{const a=e.data;let l,i,u,c;if(a&&!("json"!==n&&"text"!==n&&"blob"!==n||(l=new Blob([a]),"json"!==n&&"text"!==n||(t||(t=new FileReaderSync),i=t.readAsText(l),"json"!==n)))){try{u=JSON.parse(i||null);}catch(e){const t={...e,url:s,requestOptions:o};throw new s$1("request:server",e.message,t)}if(u.error){const e={...u.error,url:s,requestOptions:o};throw new s$1("request:server",u.error.message,e)}}switch(n){case"json":c=u;break;case"text":c=i;break;case"blob":c=l;break;default:c=a;}return {data:c,requestOptions:o,ssl:e.ssl,url:s}}))}

export { s as execute };
