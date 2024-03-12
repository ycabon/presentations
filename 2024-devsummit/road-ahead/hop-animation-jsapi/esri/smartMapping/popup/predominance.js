// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../PopupTemplate ../../core/Error ../../intl/messages ../../intl/substitute ../../popup/ExpressionInfo ../../popup/FieldInfo ./support/utils ../statistics/support/predominanceUtils".split(" "),function(w,m,x,y,l,q,r,C,t){function n(a,c){return{fieldInfo:new r({fieldName:"expression/predominant-category"}),expressionInfo:new q({name:"predominant-category",title:c.predominantCategory,expression:t.getArcadeForPredominantCategoryAlias(a)})}}function u(a,c){a=a.map(b=>b.fieldName);return{fieldInfo:new r({fieldName:"expression/predominant-value",
format:{digitSeparator:!0,places:1}}),expressionInfo:new q({name:"predominant-value",title:c.predominantCategoryValue,expression:t.getArcadeForPredominantCategoryValue(a),returnType:"number"})}}function D(a,c){a=a.map(b=>b.fieldName);return{fieldInfo:new r({fieldName:"expression/predominant-margin",format:{digitSeparator:!0,places:0}}),expressionInfo:new q({name:"predominant-margin",title:c.marginOfVictory,expression:t.getArcadeForPredominanceMargin(a),returnType:"number"})}}function v(a,c){a=a.map(b=>
b.fieldName);return{fieldInfo:new r({fieldName:"expression/predominant-strength",format:{digitSeparator:!0,places:0}}),expressionInfo:new q({name:"predominant-strength",title:c.strengthOfPredominance,expression:t.getArcadeForStrengthOfPredominance(a),returnType:"number"})}}function E(a,c){a=a.map(b=>b.fieldName);return{fieldInfo:new r({fieldName:"expression/predominant-total",format:{digitSeparator:!0,places:0}}),expressionInfo:new q({name:"predominant-total",title:c.sumOfCategories,expression:t.getArcadeForSumOfFields(a),
returnType:"number"})}}function z(a,c){const {renderer:b,fieldInfos:d}=a,f=n(d,c),e=u(d,c),g=v(d,c);a=new r({fieldName:"expression/predominant-categories-list"});var h=new q({name:"predominant-categories-list",title:c.listOfCategories,expression:t.getArcadeForOrderedFields(d)});a=new m({expressionInfos:[f.expressionInfo,e.expressionInfo,g.expressionInfo,h],fieldInfos:[f.fieldInfo,e.fieldInfo,g.fieldInfo,a],title:b.legendOptions?.title??c.competingFields,content:[{type:"text",text:l.substitute(c.predominantCategoryStrengthContent,
{expression1:`{${e.fieldInfo.fieldName}}`,expression2:`<b>{${f.fieldInfo.fieldName}}</b>`,expression3:`<b>{${g.fieldInfo.fieldName}}%</b>`})},{type:"text",text:`{${a.fieldName}}`}]});return{name:"predominant-categories-list",title:c.orderedListOfValues,value:a}}function F(a,c){const {renderer:b,fieldInfos:d}=a;a=n(d,c);const f=u(d,c),e=v(d,c);a=new m({expressionInfos:[f.expressionInfo,a.expressionInfo,e.expressionInfo],fieldInfos:[f.fieldInfo,a.fieldInfo,e.fieldInfo],title:b.legendOptions?.title??
c.competingFields,content:[{type:"text",text:l.substitute(c.predominantCategoryStrengthContent,{expression1:`{${f.fieldInfo.fieldName}}`,expression2:`<b>{${a.fieldInfo.fieldName}}</b>`,expression3:`<b>{${e.fieldInfo.fieldName}}%</b>`})},{type:"media",mediaInfos:{type:"pie-chart",value:{fields:d.map(g=>g.fieldName)}}}]});return{name:"predominant-category-chart",title:c.predominantCategoryWithChart,value:a}}function G(a,c){a=a.authoringInfo;a="predominance"===a?.type?a.fields:[];if(!a?.length)throw new x("predominance-popup:insufficient-info",
"unable to find input fields in authoringInfo");return a.map(b=>C.getFieldInfo(c,b))}async function A(a){const {layer:c,renderer:b}=a;await c.load();a=b||c.renderer;if("unique-value"!==a?.type)throw new x("predmoinance-popup:invalid-parameters","renderer.type must be 'unique-value'");const d=G(a,c);return{renderer:a,fieldInfos:d}}async function B(a){const [c,b]=await Promise.all([A(a),y.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);a=n(c.fieldInfos,b);a=new m({expressionInfos:[a.expressionInfo],
fieldInfos:[a.fieldInfo],content:l.substitute(b.predominantCategoryContent,{expression:`<b>{${a.fieldInfo.fieldName}}</b>`})});a={name:"predominant-category",title:b.predominantCategory,value:a};var {fieldInfos:d}=c;var f=n(d,b);d=u(d,b);f=new m({expressionInfos:[d.expressionInfo,f.expressionInfo],fieldInfos:[d.fieldInfo,f.fieldInfo],content:l.substitute(b.predominantCategoryValueContent,{expression1:`<b>{${f.fieldInfo.fieldName}}</b>`,expression2:`<b>{${d.fieldInfo.fieldName}}</b>`})});f={name:"predominant-category-value",
title:b.predominantCategoryValue,value:f};var {fieldInfos:e}=c;d=n(e,b);var g=u(e,b);e=D(e,b);d=new m({expressionInfos:[g.expressionInfo,d.expressionInfo,e.expressionInfo],fieldInfos:[g.fieldInfo,d.fieldInfo,e.fieldInfo],title:l.substitute(b.mostCommon,{expression:"{expression/predominant-category}"}),content:l.substitute(b.predominantCategoryValueMarginContent,{expression1:`<b>{${d.fieldInfo.fieldName}}</b>`,expression2:`<b>{${g.fieldInfo.fieldName}}</b>`,expression3:`<b>{${e.fieldInfo.fieldName}}</b>`})});
d={name:"predominant-category-value-margin",title:b.marginOfVictory,value:d};var {fieldInfos:h}=c;g=n(h,b);e=u(h,b);var k=v(h,b);h=E(h,b);g=new m({expressionInfos:[e.expressionInfo,g.expressionInfo,h.expressionInfo,k.expressionInfo],fieldInfos:[e.fieldInfo,g.fieldInfo,h.fieldInfo,k.fieldInfo],content:l.substitute(b.predominantCategoryTotalStrengthContent,{expression1:`{${e.fieldInfo.fieldName}}`,expression2:`<b>{${g.fieldInfo.fieldName}}</b>`,expression3:`<b>{${k.fieldInfo.fieldName}}%</b>`,expression4:`{${h.fieldInfo.fieldName}}`})});
g={name:"predominant-category-total-strength",title:b.predominantCategoryWithTotalAndStrength,value:g};e=z(c,b);var {fieldInfos:p}=c;k=n(p,b);h=u(p,b);p=v(p,b);k=new m({expressionInfos:[h.expressionInfo,k.expressionInfo,p.expressionInfo],fieldInfos:[h.fieldInfo,k.fieldInfo,p.fieldInfo],content:l.substitute(b.predominantCategoryStrengthContent,{expression1:`{${h.fieldInfo.fieldName}}`,expression2:`<b>{${k.fieldInfo.fieldName}}</b>`,expression3:`<b>{${p.fieldInfo.fieldName}}%</b>`})});return[a,f,d,
g,e,{name:"predominant-category-strength",title:b.strengthOfPredominance,value:k},F(c,b)]}w.getAllTemplates=B;w.getTemplates=async function(a){const [c,b]=await Promise.all([A(a),y.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),d=z(c,b);a=await B(a);return{primaryTemplate:d,secondaryTemplates:a.filter(f=>f.name!==d.name)}};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});