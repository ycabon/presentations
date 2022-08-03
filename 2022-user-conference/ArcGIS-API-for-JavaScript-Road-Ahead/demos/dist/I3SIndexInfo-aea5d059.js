import { r, h as L, s } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n(n,t,s$1,a,i,d){let l=null;if(r(s$1)){const o=`${n}/nodepages/`,t=o+Math.floor(s$1.rootIndex/s$1.nodesPerPage);try{return {type:"page",rootPage:(await L(t,{query:{f:"json",token:a},responseType:"json",signal:d})).data,rootIndex:s$1.rootIndex,pageSize:s$1.nodesPerPage,lodMetric:s$1.lodSelectionMetricType,urlPrefix:o}}catch(f){r(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,f),l=f;}}if(!t)return null;const p=`${n}/nodes/`,c=p+(t&&t.split("/").pop());try{return {type:"node",rootNode:(await L(c,{query:{f:"json",token:a},responseType:"json",signal:d})).data,urlPrefix:p}}catch(f){throw new s("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:f,url:c})}}

export { n };
