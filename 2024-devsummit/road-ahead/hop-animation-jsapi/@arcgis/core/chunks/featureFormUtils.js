/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{substitute as e}from"../intl.js";import{i as t}from"../core/lang.js";import{n}from"./compilerUtils.js";import{t as a,r}from"./Logger.js";import{isTimeOnlyField as o,g as i,a as s,D as l,NumericRangeValidationError as u,TypeValidationError as p}from"../layers/support/fieldUtils.js";import{i as m}from"./utils2.js";const d=e=>"field"===e?.type,c=e=>"group"===e?.type,f=e=>"relationship"===e?.type,y=e=>!c(e)&&null!=e.group,b=e=>null!=e&&"label"in e&&"description"in e,T=e=>"field"===e.type,g=e=>"group"===e.type,x=e=>"relationship"===e.type,O=e=>e.reduce(((e,t)=>c(t)?[...e,...t.inputs]:[...e,t]),[]),E=e=>O(e).filter(d),v=e=>O(e).filter(f),j=e=>null!=e&&(V(e,"combo-box")||V(e,"radio-buttons")),V=(e,t)=>null!=e&&e.input?.type===t,h=e=>null!=e&&(V(e,"text-box")||V(e,"text-area")),L=({domain:e,inputType:t="text-box",dataType:n})=>"number"===n&&"text-box"===t&&(!e||"coded-value"!==e.type),N=e=>"items"in e,_={typeFieldName:null,types:[]};function A(e){const{attributes:n,fieldsIndex:o,label:i,timeZone:s}=e;if(!n||"object"!=typeof n)return i;const l=Object.keys(n).filter((e=>a(i,e))),u=l.map((e=>n[e])),p=l.map((e=>o.get(e))).filter(t);return function(e,t){return r(r(e,(e=>`{${e.toLowerCase()}}`)),Object.fromEntries(Object.entries(t).map((([e,t])=>[e.toLowerCase(),t]))))}(i,I({values:u,fields:p,timeZone:s}))}function I(e){const{fields:t,values:n}=e,a=e.timeZone??void 0,r=t.map(((e,t)=>{let r=n[t];if(e.domain&&"coded-value"===e.domain.type){const t=e.domain.codedValues.find((e=>e.code===r));t?.name&&(r=t.name)}return(m(e)||o(e))&&(r=i(e,r,{timeZone:a,...s(e)})),[e.name,r]}));return Object.fromEntries(r)}const R=e=>e?"subtype-sublayer"===e.type?{typeFieldName:e.parent?.subtypeField,types:e.parent?.subtypes??[]}:"types"in e&&e.types?{typeFieldName:e.typeIdField,types:e.types.map((({id:e,name:t,domains:n})=>({code:e,name:t,domains:n})))}:_:_,U=(e,t)=>{if(!e)return!0;const{operations:n}=e;switch(t){case"INSERT":return n.supportsAdd;case"UPDATE":case"DELETE":return n.supportsUpdate;default:return!0}};var D;!function(e){e.TOO_SHORT="length-validation-error::too-short"}(D||(D={}));const F={type:"number"},w={type:"number",intlOptions:{notation:"scientific"}};function Z(e){return e>=1e7||e<=-1e7}const C=(t,n,a)=>{const{dataType:r,error:o,minLength:i,value:m,required:d}=t,c=n?.validationErrors;if(!c||!o)return null;if(d&&null===m)return c.cannotBeNull;if(o===l.VALUE_OUT_OF_RANGE||o===u.OUT_OF_RANGE){const{field:o,range:i}=t,l={type:"date",intlOptions:{timeZone:"date"===o.type&&a?a:void 0,...s(o)}},u=function(e,{validationErrors:t}){return null!=e.max&&null!=e.min?t.outsideRange:null!=e.max?t.outsideRangeMax:t.outsideRangeMin}(i,n);return e(u,i,{format:{max:"date"===r?l:null!=i.max&&Z(i.max)?w:F,min:"date"===r?l:null!=i.min&&Z(i.min)?w:F}})}return o===l.INVALID_CODED_VALUE?c.invalidCodedValue:o===p.INVALID_TYPE?c.invalidType:o===D.TOO_SHORT?e(c.tooShort,{min:i}):null},S=e=>{if(!e)return;const t=e.layer,n=t&&"geometryType"in t?t.geometryType:void 0,a=e.geometry?.type;return"polyline"===a||"polyline"===n?"line":a||n||"table"},k=e=>{const t=[];if(e.formTemplate){const{description:n,title:r}=e.formTemplate;e.fields?.forEach((e=>{const o=r&&a(r,e.name),i=n&&a(n,e.name);(o||i)&&t.push(e.name)}))}return t};function q(e,t){const n=t??("formTemplate"in e&&e.formTemplate);return!!n&&(n.elements?.filter(T)??[]).some((({fieldName:t})=>!e.fieldsIndex.get(t)))}function G(e,t){return null==e||t.onValue!==e&&t.offValue!==e}function H(e,t){switch(t.objectType){case"any":return!0;case"null":return null==e;case"code":return e===t.codedValue?.code;case"range":return null!=e&&null!=t.minValue&&null!=t.maxValue&&+e>=t.minValue&&+e<=t.maxValue;default:return n(t.objectType),!1}}export{D as L,h as a,j as b,d as c,I as d,U as e,q as f,R as g,b as h,V as i,k as j,c as k,f as l,y as m,C as n,S as o,A as p,L as q,N as r,E as s,v as t,g as u,G as v,T as w,x,H as y};