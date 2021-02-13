import { i, h as s$1, ax as t$1, d0 as R, w as f, bi as c, a as u } from './index.js';
import { W, Y, n } from './timeSupport-678267ac.js';
import { d } from './FeatureStore2D-9c4cb3a2.js';
import './quantizationUtils-70355d31.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './_commonjsHelpers-34398bae.js';
import './aaBoundingBox-32a1a9ca.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=i.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(e,s){const n=await import('./WhereClause-6984e364.js');try{const o=n.WhereClause.create(e,s);if(!o.isStandardized){const e=new s$1("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(e);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(r){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const _=i.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");class FeatureFilter{constructor(t){this._geometryBounds=t$1(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,1);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(1&this._idToVisibility.get(r)),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?3:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return R.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await W(t,null,e);await f([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await Y(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i;}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=n(this._serviceInfo.timeInfo,t.timeExtent,d);else {const e=new s$1("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);_.error(e);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(e){return !u(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{1&e||(this._idToVisibility.set(i,1),t.push(i));})),t}}

export default FeatureFilter;
