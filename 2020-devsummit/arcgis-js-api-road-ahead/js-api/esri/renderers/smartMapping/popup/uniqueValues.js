// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../../../PopupTemplate ./support/utils".split(" "),function(q,d,e,k,l,n,f){function p(b){return k(this,void 0,void 0,function(){return e(this,function(c){switch(c.label){case 0:return[4,b.layer.load()];case 1:return c.sent(),[2,b]}})})}function m(b,c,a){void 0===a&&(a="divide");a=f.getFieldAndExpressionInfos({renderer:b,layer:c,normFieldExpressionTemplate:a});b=a.fieldInfos;
a=a.expressionInfos;return new n({content:f.getContentFromFieldInfos(c,{fieldInfos:b,expressionInfos:a}),fieldInfos:b,expressionInfos:a})}Object.defineProperty(d,"__esModule",{value:!0});d.getTemplates=function(b){return k(this,void 0,void 0,function(){var c,a,g,d,h;return e(this,function(e){switch(e.label){case 0:return[4,p(b)];case 1:return c=e.sent(),a=c.renderer,g=c.layer,d={name:"unique-values",title:l.uniqueValues,value:m(a,g)},h=[],f.hasNormalizedField(a)&&h.push({name:"unique-values-percent",
title:l.uniqueValuesNormFieldAsPercent,value:m(a,g,"percentage")}),[2,{primaryTemplate:d,secondaryTemplates:h}]}})})}});