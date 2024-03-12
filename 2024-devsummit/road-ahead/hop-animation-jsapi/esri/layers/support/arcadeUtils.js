// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(h){function k(a,c){const d=[];if(!a)return d;"valueExpression"in a&&a.valueExpression&&d.push({expression:a.valueExpression,title:a.valueExpressionTitle,profileInfo:{name:"visualization",context:`${a.type}-renderer`,source:c}});if("visualVariables"in a&&a.visualVariables){var b=a.visualVariables.filter(({valueExpression:e})=>e&&"$view.scale"!==e).map(({valueExpression:e,valueExpressionTitle:f,type:g})=>({expression:e,title:f,profileInfo:{name:"visualization",context:`${g}-variable`,
source:c}}));d.push(...b)}"attributes"in a&&a.attributes&&(b=a?.attributes.filter(({valueExpression:e})=>e).map(({valueExpression:e,valueExpressionTitle:f})=>({expression:e,title:f,profileInfo:{name:"visualization",context:`${a.type}-renderer`,source:c}})),d.push(...b));return d}function l(a,c){const d=[];if(a?.expressionInfos){const b=a?.expressionInfos.map(({title:e,name:f,expression:g,returnType:n})=>({title:e,name:f,expression:g,profileInfo:{name:"layer"===c?"popup":"feature-reduction-popup",
context:"popup-template",returnType:n,source:c}}));d.push(...b)}a?.content&&Array.isArray(a.content)&&(a=a?.content.filter(({type:b})=>"expression"===b).map(({expressionInfo:b})=>({title:b.title,expression:b.expression,profileInfo:{name:"layer"===c?"popup-element":"feature-reduction-popup-element",context:"popup-expression-content",returnType:b.returnType,source:c}})),d.push(...a));return d}function p(a){const c=[];a&&(a=a.filter(({valueExpression:d})=>d).map(({valueExpression:d})=>({expression:d,
profileInfo:{name:"feature-z",context:"order-by",source:"layer"}})),c.push(...a));return c}function q(a){const c=[];a?.expressionInfos&&(a=a?.expressionInfos.map(({title:d,name:b,expression:e,returnType:f})=>({title:d,name:b,expression:e,profileInfo:{name:"boolean"===f?"form-constraint":"form-calculation",context:"form-template",returnType:f,source:"layer"}})),c.push(...a));return c}function m(a,c){const d=[];a&&(a=a.filter(({labelExpressionInfo:b})=>b?.expression).map(({labelExpressionInfo:b})=>
({expression:b?.expression,title:b?.title,profileInfo:{name:"labeling",context:"label-class",source:c}})),d.push(...a));return d}h.getExpressionsFromLayer=function(a){const c=[...m(a.labelingInfo,"layer"),...l(a.popupTemplate,"layer"),...k(a.renderer,"layer")];if("elevationInfo"in a){var d=c.push,b=a.elevationInfo;const e=[];b?.featureExpressionInfo?.expression&&e.push({expression:b?.featureExpressionInfo?.expression,profileInfo:{name:"feature-z",context:"elevation-info",source:"layer"}});d.call(c,
...e)}"featureReduction"in a&&(d=c.push,b=a.featureReduction,b=[...l(b?.popupTemplate,"feature-reduction"),...m(b?.labelingInfo,"feature-reduction"),...k(b?.renderer,"feature-reduction")],d.call(c,...b));"orderBy"in a&&c.push(...p(a.orderBy));"formTemplate"in a&&c.push(...q(a.formTemplate));return c};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});