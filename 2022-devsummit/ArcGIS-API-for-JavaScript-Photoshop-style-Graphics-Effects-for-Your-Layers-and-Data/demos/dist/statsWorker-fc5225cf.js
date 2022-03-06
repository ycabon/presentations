import { fj as a$1, b3 as k } from './_virtual_index-49b2bc11.js';
import { T, s as s$1, m, c, V, g, h, y, D, z } from './utils-af32d0af.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=null;async function a(e,t){if(!t)return [];const i=e.field,o=e.valueExpression,a=e.normalizationType,f=e.normalizationField,c=e.normalizationTotal,u=[],d=e.viewInfoParams;let p=null,m=null;if(o){if(!s){const{arcadeUtils:e}=await a$1();s=e;}p=s.createFunction(o),m=d&&s.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new k(d.spatialReference)});}return t.forEach((e=>{const t=e.attributes;let n;if(o){const t=s.createExecContext(e,m);n=s.executeFunction(p,t);}else t&&(n=t[i]);if(a&&isFinite(n)){const e=t&&parseFloat(t[f]);n=T(n,a,e,c);}u.push(n);})),u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function u(l){const{attribute:t,features:r}=l,{normalizationType:s,normalizationField:m$1,minValue:u,maxValue:d,fieldType:f}=t,p=await a({field:t.field,valueExpression:t.valueExpression,normalizationType:s,normalizationField:m$1,normalizationTotal:t.normalizationTotal,viewInfoParams:t.viewInfoParams},r),v=s$1({normalizationType:s,normalizationField:m$1,minValue:u,maxValue:d}),z={value:.5,fieldType:f},c$1="esriFieldTypeString"===f?m({values:p,supportsNullCount:v,percentileParams:z}):c({values:p,minValue:u,maxValue:d,useSampleStdDev:!s,supportsNullCount:v,percentileParams:z});return V(c$1,"esriFieldTypeDate"===f)}async function d(i){const{attribute:n,features:e}=i,o=await a({field:n.field,valueExpression:n.valueExpression,viewInfoParams:n.viewInfoParams},e),r=g(o);return h(r,n.domain,n.returnAllCodedValues)}async function f(i){const{attribute:n,features:e}=i,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:m,classificationMethod:u}=n,d=await a({field:o,valueExpression:n.valueExpression,normalizationType:l,normalizationField:t,normalizationTotal:m,viewInfoParams:n.viewInfoParams},e),f=y(d,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:m,classificationMethod:u,standardDeviationInterval:n.standardDeviationInterval,numClasses:n.numClasses,minValue:n.minValue,maxValue:n.maxValue});return D(f,u)}async function p(i){const{attribute:n,features:e}=i,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s}=n,u=await a({field:o,valueExpression:n.valueExpression,normalizationType:l,normalizationField:t,normalizationTotal:r,viewInfoParams:n.viewInfoParams},e);return z(u,{field:o,normalizationType:l,normalizationField:t,normalizationTotal:r,classificationMethod:s,standardDeviationInterval:n.standardDeviationInterval,numBins:n.numBins,minValue:n.minValue,maxValue:n.maxValue})}

export { f as classBreaks, p as histogram, u as summaryStatistics, d as uniqueValues };
