import { $ as s$1, E as s$2, bI as u, x, yy as J, bZ as c, t as t$1 } from './_virtual_index-1ea2035a.js';
import { v, n } from './timeSupport-eac99e81.js';
import { u as u$1 } from './FeatureStore2D-9daac755.js';
import './CircularArray-61b6424e.js';
import './ComputedAttributeStorage-5652149f.js';
import './centroid-205dc6cf.js';
import './definitions-a784b44f.js';
import './visualVariablesUtils-e0de182e.js';
import './Utils-7b2ac961.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './enums-4e1a5b11.js';
import './visualVariablesUtils-933d57c8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await import('./_virtual_index-1ea2035a.js').then(function (n) { return n.zk; });try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new s$2("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=1,_=2;class p{constructor(t){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,m);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&m),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?m|_:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return x.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await J(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await v(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(i){if(this.timeExtent=this._timeOperator=null,i&&i.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=i.timeExtent,this._timeOperator=n(this._serviceInfo.timeInfo,i.timeExtent,u$1);else {const s=new s$2("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",i.timeExtent);s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return !!t$1(this._timeOperator)||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&m||(this._idToVisibility.set(i,m),t.push(i));})),t}}

export { p as default };
