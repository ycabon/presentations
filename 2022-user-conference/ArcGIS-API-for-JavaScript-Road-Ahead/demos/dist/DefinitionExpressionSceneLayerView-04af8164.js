import { u as e, y, z as n$1, $ as s, qO as f, qP as fe } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n="updating";function t$1(n){return "updating"===n?null:n}function u(n){return "updating"===n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=t=>{let a=class extends t{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=r=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&s.getLogger(this.declaredClass).error("Error while evaluating definitionExpression: "+r),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&s.getLogger(this.declaredClass).error("Further errors are ignored");};}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const r=f.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!r.isStandardized)return s.getLogger(this.declaredClass).error("definitionExpression is using non standard function"),null;const i=[],s$1=r.fieldNames;return fe(s$1,this.i3slayer.fields,{missingFields:i}),i.length>0?(s.getLogger(this.declaredClass).error(`definitionExpression references unknown fields: ${i.join(", ")}`),null):(this._definitionExpressionErrors=0,r)}catch(r){return s.getLogger(this.declaredClass).error("Failed to parse definitionExpression: "+r),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(r,e){try{return r.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(r){if(!this.parsedDefinitionExpression)return r;const e=this.i3slayer.definitionExpression,i=r.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return e([y()],a.prototype,"i3slayer",void 0),e([y({readOnly:!0})],a.prototype,"parsedDefinitionExpression",null),e([y({readOnly:!0})],a.prototype,"definitionExpressionFields",null),a=e([n$1("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],a),a};

export { t$1 as a, n, t, u };
