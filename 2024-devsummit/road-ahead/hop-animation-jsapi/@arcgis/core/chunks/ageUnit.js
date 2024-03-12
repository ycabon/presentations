/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import i from"../smartMapping/statistics/summaryStatisticsForAge.js";import{supportedAgeUnits as s}from"../smartMapping/statistics/support/ageUtils.js";import{u as a}from"./utils2.js";async function n(n){const r="days",o={...n,unit:r},u=await i(o);if(null==u.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");const c=function(t){const i=Math.abs(t.avg);let n=null;return s.some((t=>{const s=a[t];return i>2*s&&(n=t),!!n})),n}({...u,avg:u.avg});if(c===r)return{unit:c,statistics:u};o.unit=c;const e=await i(o);if(null==e.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:c,statistics:e}}export{n as a};
