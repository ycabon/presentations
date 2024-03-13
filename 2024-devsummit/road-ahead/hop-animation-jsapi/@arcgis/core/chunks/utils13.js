/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as e}from"../core/lang.js";import{throwIfAborted as n}from"../core/promiseUtils.js";import t,{C as l}from"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import i from"../layers/support/Field.js";import{isTimeOnlyField as a,isStringField as o}from"../layers/support/fieldUtils.js";import r from"../rest/support/StatisticDefinition.js";import{noDominantCategoryField as s}from"../smartMapping/statistics/support/predominanceUtils.js";import{g as u,a as c,m}from"./utils10.js";import{a as f,i as p,c as d,g}from"./utils2.js";import{a as y,i as v,p as h,s as x}from"./utils11.js";const F=/_value$/i,w=Math.LOG10E,E={SECOND:1e3,MINUTE:6e4,HOUR:36e5},S=10;function T(e){return e.map((e=>e.toJSON()))}function V(e,n){const t=[],l=e.layer,i="featureReduction"in l?l.featureReduction:null,a="binning"===i?.type,o=null!=i&&"fields"in i?i.fields?.map((e=>e.name?.toLowerCase())).filter(Boolean):[];if(!a||!n)return t;for(const e of n)o.includes(e.toLowerCase())||t.push(e);return t}function z(e,n,t){const l=[];if(n)for(const i of n){const n=e.getField(i);n&&t&&"availableFields"in t&&!t.availableFields?.includes(n.name)&&l.push(n.name)}return l}function $(e,n){const t=e&&e.features;if(0===t?.length)return{avg:null,count:0,max:null,median:null,min:null,nullcount:0,stddev:null,sum:null,variance:null};const l=t?.[0]?.attributes,i={};for(const e in l)i[e.replace(F,"").toLowerCase()]=l[e];return null!=i.totalcount&&i.totalcount>=i.count&&(i.nullcount=i.totalcount-i.count),delete i.totalcount,i.min===i.max&&null!=i.min&&null==i.stddev&&(i.stddev=i.variance=0),n&&(["min","max","avg","stddev","sum","variance"].forEach((e=>{null!=i[e]&&(i[e]=Math.ceil(i[e]))})),i.min===i.max&&null!=i.min&&(i.avg=i.min,i.stddev=i.variance=0)),i}function q(e){const n=[],t=e.classBreaks,l=t[0].minValue,i=t[t.length-1].maxValue;t.forEach((e=>{n.push([e.minValue,e.maxValue])}));const a={field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,normalizationTotal:e.normalizationTotal,layer:e.layer};return{min:l,max:i,intervals:n,sqlExpr:C(a),excludeZerosExpr:e.where,normTotal:e.normalizationTotal}}function C(e){const{field:n,normalizationType:t,normalizationField:l,normalizationTotal:i,layer:a}=e,o=f(a,n);let r=n;return"percent-of-total"===t?r=`((${o?d(n):n} / ${i}) * 100)`:"log"===t?r=`(log(${n}) * ${w})`:"field"===t?r=`(${o?d(n):n} / ${l})`:"natural-log"===t?r=`(log(${o?d(n):n}))`:"square-root"===t&&(r=`(power(${o?d(n):n}, 0.5))`),r}function b(e,n){let t;if(n=n.toLowerCase(),e)for(const l in e)if(l.toLowerCase()!==n){t=e[l];break}return t}function j(e,n){let t;if(n=n.toLowerCase(),e)for(const l in e)if(l.toLowerCase()===n){t=e[l];break}return t}function O(e,n,t,l,i){const a={},o="countOFExpr";e&&e.features&&e.features.forEach((e=>{const n=e.attributes,t=b(n,o),l=j(n,o);null!=t&&null!=l&&0!==t&&(a[t]=l)}));const r=[];return y(n,t,l).forEach(((e,n)=>{const t=(n+1).toString();r.push({minValue:e[0],maxValue:e[1],count:a.hasOwnProperty(t)?a[t]:0})})),{bins:r,minValue:n,maxValue:t,normalizationTotal:i}}function L(e,t){const l=e&&e.features,{field:i,field2:a,field3:o,fieldDelimiter:r,layer:s,view:u,signal:c,labels:m}=t,f=`countOF${i&&a?"Expr":i||"Expr"}`,p={};let d=!1;if(l.forEach((e=>{const n=e.attributes,t=j(n,f);let l=i?j(n,i):b(n,f),s=a?j(n,a):null,u=o?j(n,o):null;null===l&&0===t&&(d=!0),(null==l||"string"==typeof l&&""===l.trim())&&(l=null),a&&(null==s||"string"==typeof s&&""===s.trim())&&(s=null),o&&(null==u||"string"==typeof u&&""===u.trim())&&(u=null);let c=l;a&&(c=`${h(c)}${r}${h(s)}`,o&&(c=`${c}${r}${h(u)}`)),null==p[c]?p[c]={count:t,data:c}:p[c].count=p[c].count+t})),i&&d){const e=i+" is NULL";return s.queryFeatureCount({whereClause:e,view:u,signal:c}).then((e=>(e=e||0,p.null.count=p.null.count+e,R(p,m)))).catch((()=>(n(c),R(p,m))))}return Promise.resolve(R(p,m))}function R(e,n){if(n)for(const t in e)e[t].label=n[t];return{count:e}}async function D(e,n,i){const a=e?i.getField(e):null,o=a?i.getFieldDomain(a.name):null;if(o)return o;const{uniqueValueInfos:r}=await i.uniqueValues({field:e,sqlWhere:n.sqlWhere,features:n.features,useFeaturesInView:n.useFeaturesInView,view:n.view,signal:n.signal}),s=r.map((e=>new l({code:e.value})));return new t({codedValues:s})}async function I(e,n){if(!e.returnAllCodedValues)return[];const{field:t,field2:l,field3:i}=e;if(t&&!l){const e=t?n.getField(t):null,l=e?n.getFieldDomain(e.name):null;return l?[l]:[]}const a=[];return t&&(a.push(D(t,e,n)),l&&(a.push(D(l,e,n)),i&&a.push(D(i,e,n)))),Promise.all(a)}function N(e){return{viewingMode:"2d"===e.type?"map":e.viewingMode,scale:e.scale,spatialReference:e.spatialReference?.toJSON()}}function M(e,n){const t=new Set(e.map((e=>e.value))),l=n.filter((e=>!t.has(e)));for(const n of l)e.push({value:n,count:0});e.sort(((e,t)=>n.indexOf(e.value)-n.indexOf(t.value)));for(const n of e)n.value===s&&(n.value=null);return{predominantCategoryInfos:e}}function U(n){const t="featureReduction"in n?n.featureReduction:null;return((null!=t&&"fields"in t?t.fields:null)??[]).map((e=>{const t=function(e,n){switch(e.statisticType){case"avg":case"avg_angle":return"double";case"count":return"integer";case"min":case"max":case"sum":return e.onStatisticField?n.get(e.onStatisticField)?.type??null:e.onStatisticExpression?"string"===e.onStatisticExpression.returnType?null:"double":null;case"mode":return e.onStatisticField?n.get(e.onStatisticField)?.type??null:e.onStatisticExpression?"string"===e.onStatisticExpression.returnType?"string":"double":null;default:return null}}(e,n.fieldsIndex);return t?new i({type:t,name:e.name,alias:e.alias}):null})).filter(e)}function B(e,n){return p(n)?(t=e,l=n?.name,g(t,new Date(0),l,"milliseconds").sqlExpression):a(n)?function(e){return e?d(["HOUR","MINUTE","SECOND"].map((n=>`(${function(e,n){return`EXTRACT(${n} FROM ${e}) * ${E[n]}`}(e,n)})`)).join(" + ")):null}(n?.name):null;var t,l}function P(e,n,t){const{field:l,normalizationType:i,normalizationField:a,normalizationTotal:s,minValue:f,maxValue:p,filter:d}=n,g=e.supportsSQLExpression?B(e,t)||n.sqlExpression:null,y=C({field:l,normalizationType:i,normalizationField:a,normalizationTotal:s,layer:e}),h=g||y,F=h?u(h,f,p):null,w=c({field:l,normalizationField:a,normalizationType:i}),E=m(n.sqlWhere,w),S=m(E,F),T=v({normalizationField:a,normalizationType:i,sqlExpression:g,supportsSQLExpression:e.supportsSQLExpression,minValue:f,maxValue:p}),V=o(e.getField(l??void 0)),z=x.filter((e=>"nullcount"===e?T:!V||"count"===e)),$=e.createQuery();return $.where=m($.where,S),$.sqlFormat=g?"standard":null,$.outStatistics=z.map((n=>{const t=new r;let l=null,i=null,a=`${n}_value`;return"variance"===n?(l="var",i=h):"nullcount"===n?(l="count",i=e.objectIdField,a="totalcount_value"):"median"===n?(l="percentile-continuous",i=h,t.statisticParameters={value:.5}):(l=n,i=h),t.statisticType=l,t.onStatisticField=i,t.outStatisticFieldName=a,t})),Q($,d),$}function Q(e,n){n&&(e.geometry=n.geometry,e.spatialRelationship=n.spatialRelationship)}function k(e,n){const{field:t,field2:l,field3:i,sqlExpression:a}=n,o=!(!t||!l),r=e.createQuery();return r.where=m(r.where,n.sqlWhere),r.sqlFormat=a?"standard":null,r.outStatistics=[W(o?null:t,o?"1":a)].filter(Boolean),r.groupByFieldsForStatistics=[t||a,l,i].filter(Boolean),Q(r,n.filter),r}function W(e,n){const t="countOF"+(e||"Expr"),l=new r;return l.statisticType="count",l.onStatisticField=n?"1":e,l.outStatisticFieldName=t,l}function _(e,n,t,l=10,i,a,o){const{min:r,max:s,normTotal:u,excludeZerosExpr:c}=n,f=n.intervals||y(r,s,l),p=n.sqlExpr||t;return function(e,n,t,l,i,a,o){const r=[],s=n.length;for(let e=0;e<s;e++){const i=m(l,m(t+" >= "+n[e][0],null!==n[e][1]?t+(e===s-1?" <= ":" < ")+n[e][1]:""));r.push(i)}return Promise.allSettled(r.map((n=>e.queryFeatureCount({whereClause:n,view:i,filter:a,signal:o}))))}(e,f,p,c,i,a,o).then((e=>({bins:e.map(((e,n)=>({minValue:f[n][0],maxValue:f[n][1],count:"fulfilled"===e.status?e.value:0}))),minValue:r,maxValue:s,normalizationTotal:u})))}export{P as a,$ as b,N as c,z as d,T as e,k as f,U as g,L as h,_ as i,I as j,M as k,B as l,C as m,S as n,O as o,q as p,V as q,Q as u};