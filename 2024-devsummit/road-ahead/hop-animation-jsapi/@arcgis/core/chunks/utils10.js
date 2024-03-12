/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../core/Error.js";import{a as n}from"./screenUtils.js";import{m as t}from"./timeUtils.js";import s from"../geometry/SpatialReference.js";import{q as i}from"./quantizationUtils.js";import{d as r,j as o}from"./unitUtils.js";import{isTimeOnlyField as l,l as a,isNumericField as u,numericTypes as f}from"../layers/support/fieldUtils.js";import{c as m,e as c}from"./heatmapUtils.js";import{i as d}from"./utils2.js";import{p,g as h}from"./utils11.js";import $ from"../geometry/Point.js";let y=null;const g=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function I(e,n,t,s){const l=r(t)?o(t):null,a=l?Math.round((l.valid[1]-l.valid[0])/n.scale[0]):null;return e.map((e=>{const t=new $(e.geometry);return i(n,t,t,t.hasZ,t.hasM),e.geometry=l?function(e,n,t){return e.x<0?e.x+=n:e.x>t&&(e.x-=n),e}(t,a??0,s[0]):t,e}))}function j(e,t=18,s,i,r){const o=new Float64Array(i*r);t=Math.round(n(t));let l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const u=m(s);for(const{geometry:n,attributes:s}of e){const{x:e,y:f}=n,m=Math.max(0,e-t),d=Math.max(0,f-t),p=Math.min(r,f+t),h=Math.min(i,e+t),$=+u(s);for(let n=d;n<p;n++)for(let s=m;s<h;s++){const r=n*i+s,u=c(s-e,n-f,t)*$,m=o[r]+=u;l=Math.min(l,m),a=Math.max(a,m)}}return{min:l,max:a}}function x(e){const n=g.exec(e);if(!n)return null;const{hh:s,mm:i,ss:r,ms:o}=n.groups;return Number(s)*t.hours+Number(i)*t.minutes+Number(r)*t.seconds+Number(o||0)}async function w(e,n,t=!0){if(!n)return[];const{field:i,field2:r,field3:o,fieldDelimiter:u,fieldInfos:f,timeZone:m}=e,c=i&&f?.find((e=>e.name.toLowerCase()===i.toLowerCase())),$=!!c&&l(c),g=!!c&&d(c),I=e.valueExpression,j=e.normalizationType,w=e.normalizationField,b=e.normalizationTotal,F=[],N=e.viewInfoParams;let v=null,E=null;if(I){if(!y){const{arcadeUtils:e}=await a();y=e}y.hasGeometryOperations(I)&&await y.enableGeometryOperations(),v=y.createFunction(I),E=N?y.getViewInfo({viewingMode:N.viewingMode,scale:N.scale,spatialReference:new s(N.spatialReference)}):null}const M=e.fieldInfos,U=n[0]&&"declaredClass"in n[0]&&"esri.Graphic"===n[0].declaredClass||!M?null:{fields:M};return n.forEach((e=>{const n=e.attributes;let s;if(I){const n=U?{...e,layer:U}:e,t=y.createExecContext(n,E,m);s=y.executeFunction(v,t)}else n&&(s=n[i],r?(s=`${p(s)}${u}${p(n[r])}`,o&&(s=`${s}${u}${p(n[o])}`)):"string"==typeof s&&t&&(g?s=s?new Date(s).getTime():null:$&&(s=s?x(s):null)));if(j&&"number"==typeof s&&isFinite(s)){const e=n&&parseFloat(n[w]);s=h(s,j,e,b)}F.push(s)})),F}function b(e){const n=e.field,t=e.normalizationType,s=e.normalizationField;let i;return"field"===t?i="(NOT "+s+" = 0)":"log"!==t&&"natural-log"!==t&&"square-root"!==t||(i=`(${n} > 0)`),i}function F(e,n,t){const s=null!=n?e+" >= "+n:"",i=null!=t?e+" <= "+t:"";let r="";return r=s&&i?E(s,i):s||i,r?"("+r+")":""}function N(n,t,s,i){let r;return t?t.name!==n.objectIdField&&i.includes(t.type)||(r=new e(s,"'field' should be one of these types: "+i.join(","))):r=new e(s,"'field' is not defined in the layer schema"),r}function v(n,t,s){let i;return t?t.name!==n.objectIdField&&u(t)||(i=new e(s,"'field' should be one of these numeric types: "+f.join(","))):i=new e(s,"'field' is not defined in the layer schema"),i}function E(e,n){let t=null!=e?e:"";return null!=n&&n&&(t=t?"("+t+") AND ("+n+")":n),t}function M(n,t){if(n&&"intersects"!==n.spatialRelationship)return new e(t,"Only 'intersects' spatialRelationship is supported for featureFilter")}function U(n,t,s){const i=function(e){const n=e.layer;return e.fields.filter((e=>!n.getField(e)))}({layer:n,fields:t});if(i.length)return new e(s,"Unknown fields: "+i.join(", ")+". You can only use fields defined in the layer schema");const r=function(e){const n=e.layer;return e.fields.filter((e=>{const t=n.getFieldUsageInfo(e);return!t||!t.supportsStatistics}))}({layer:n,fields:t});return r.length?new e(s,"Unsupported fields: "+r.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function T(e,n,t){const s=[],i=[],r=[],o=[],l=[];e.forEach(((e,n)=>{const a=e.field?"field":"expression",u=e.field||e.valueExpression;e.field?(l.push(u),i.push(`var ${a}${n} = Number($feature["${u}"]);`)):(s.push(`function getValueForExpr${n}() {\n  ${u} \n}`),i.push(`var ${a}${n} = Number(getValueForExpr${n}());`)),t||r.push(`${a}${n} = IIf(${a}${n} < 0, 0, ${a}${n});`),o.push(`${a}${n}`)}));let a="return sum;";const u=s.length?null:l.reduce(((e,n)=>`${e} + ${n}`));let f=null;return n||t?n?t||(a="return IIf(sum >= 0, sum, null);",u&&(f=`(( ${u} ) >= 0)`)):(a="return IIf(sum != 0, sum, null);",u&&(f=`(( ${u} ) <> 0)`)):(a="return IIf(sum > 0, sum, null);",u&&(f=`(( ${u} ) > 0)`)),{valueExpression:[s.length?s.join("\n"):"",i.join("\n"),r.join("\n"),`var sum = ${o.join(" + ")};`,a].filter(Boolean).join("\n\n"),sqlExpression:u,sqlWhere:f}}export{b as a,w as b,j as c,v as d,M as e,N as f,F as g,T as h,E as m,I as q,x as t,U as v};
