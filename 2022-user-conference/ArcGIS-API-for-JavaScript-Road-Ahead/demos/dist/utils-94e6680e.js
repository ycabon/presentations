import { bB as r, aL as e$1, m as r$1, aX as C, aF as u, cj as u$1, ck as l$1, E as s$2 } from './_virtual_index-1ea2035a.js';
import { a } from './EffectView-de5a8347.js';
import { E, S } from './enums-4e1a5b11.js';
import { U } from './MaterialKey-8672cbbb.js';
import { b as a$1 } from './Utils-7b2ac961.js';
import { r as r$2, s as s$1 } from './definitions-a784b44f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i extends r{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null;}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender();}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e));}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new a),this._effectView.effect=e,this.requestRender());}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender());}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t);}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender());}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0;}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1);}beforeRender(e){super.beforeRender(e);for(const t of this.children)t.beforeRender(e);}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e);}_createTransforms(){return {dvs:e$1()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e;}onDetach(){super.onDetach();for(const e of this.children)e.stage=null;}renderChildren(e){for(const t of this.children)t.processRender(e);}createRenderParams(e){return {...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e{static getStorageSpec(t){return null}static createOrUpdateRendererSchema(e,r){return r$1(e)&&"default"===e.type?e:{type:"default"}}static getVariation(t){return {}}static getVariationHash(t){return 0}}e.type="default",e.programSpec=null;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n$1 extends e{static getStorageSpec({attributes:e}){return {visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return {type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(r,a){const{attributes:n,dotValue:i,referenceScale:d,dotSize:l,dotBlendingEnabled:s,seed:c,backgroundColor:u}=a,m=r$1(r)&&"dot-density"===r.type?r:this._createRendererSchema();m.dotValue=i,m.dotSize=l,m.dotScale=d,m.dotBlending=s,m.seed=c;const{colors:g,activeDots:p,backgroundColor:y}=m;for(let e=0;e<r$2;e++){const o=e>=n.length?null:n[e].color;a$1(g,o,4*e);}for(let e=0;e<8;e++)p[e]=e<a.attributes.length?1:0;return a$1(y,u),m}static getVariation(e){return {ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}}n$1.type="dot-density",n$1.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:C.SHORT},{location:1,name:"a_id",count:3,type:C.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:C.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:C.FLOAT}]}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n extends e{static getStorageSpec({field:e,valueExpression:t}){return {visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return {type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(a,i){const{radius:n,minDensity:s,maxDensity:o,referenceScale:c,field:l,valueExpression:m,colorStops:p}=i,d=o-s,u$2=l||m?1:0,y=p.map((({color:e,ratio:t})=>`${t}:${e.toString()}`)).join();let h,S=!0;return r$1(a)&&"heatmap"===a.type?(h=a,S=y!==a.gradientHash):h=this._createRendererSchema(),h.radius=u(n),h.minDensity=s,h.densityRange=d,h.referenceScale=c,h.isFieldActive=u$2,S&&(h.gradient=u$1(p),h.gradientHash=y),h}}n.type="heatmap",n.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:C.SHORT},{location:1,name:"a_vertexOffset",count:2,type:C.SHORT},{location:4,name:"a_id",count:4,type:C.UNSIGNED_BYTE}]}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class l extends e{static getStorageSpec({attributes:e}){return {visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return {type:"pie-chart",colors:new Float32Array(4*s$1),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(n,i){const{attributes:l,defaultColor:s,holePercentage:c,othersCategory:m,outline:u$1}=i,d=r$1(n)&&"pie-chart"===n.type?n:this._createRendererSchema();for(let t=0;t<s$1;t++){const o=t>=l.length?new l$1([0,0,0,0]):l[t].color;a$1(d.colors,o,4*t);}return a$1(d.defaultColor,s),a$1(d.othersColor,m?.color),a$1(d.outlineColor,u$1?.color),d.outlineWidth=u(u$1?.width||0),d.holePercentage=c,d.sectorThreshold=m?.threshold||0,d.numberOfFields=l.length,d}static getVariation(e){return {numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}l.type="pie-chart",l.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:C.SHORT},{location:1,name:"a_vertexOffset",count:2,type:C.SHORT},{location:2,name:"a_texCoords",count:2,type:C.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:C.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:C.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:C.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:C.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:C.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:C.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s(r,t){if(r.type!==t)throw new s$2("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${t}" but found type "${r.type}"`)}function c(e$1){switch(e$1?.type){case"dot-density":return n$1;case"heatmap":return n;case"pie-chart":return l;default:return e}}function p(e$1){const{geometryType:s,symbologyType:c}=U.load(e$1);switch(s){case E.FILL:if(c===S.DOT_DENSITY)return n$1;break;case E.MARKER:switch(c){case S.HEATMAP:return n;case S.PIE_CHART:return l}}return e}

export { c, e, i, p, s };
