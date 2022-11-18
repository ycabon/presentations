import { fu as ue, aO as o, g0 as u$1, bn as g, ew as o$1, g5 as v, hw as x, e1 as $, aD as s$1, ck as l } from './_virtual_index-1ea2035a.js';
import { u as u$2 } from './colorUtils-cf7dfb0b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r={readOnly:!0,get(){return ue(this.view)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e$1;!function(e){e[e.Auto=0]="Auto",e[e.Euclidean=1]="Euclidean",e[e.Geodesic=2]="Geodesic";}(e$1||(e$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$1(e,o$1){if(o(o$1,0,0,0),e.length>0){for(let r=0;r<e.length;++r)u$1(o$1,o$1,e[r]);g(o$1,o$1,1/e.length);}}function f(e,n,s,t){t.projectToRenderScreen(e,a),t.projectToRenderScreen(n,m),o$1(s,p,i$1),v(s,s);}const a=x(),i$1=a,m=x(),p=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t$1{constructor(e=null){this.spatialReference=e;}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors());}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=$(this._spatialReference,1),this._metersPerElevationUnit=$(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(o,t){const e=o.a*t;return u$2(o)>225?new l([0,0,0,e]):new l([255,255,255,e])}function e(o,r){const t=new l(o);return t.a*=r,t}function i(n=1){return e(s$1.analysisTheme.accentColor,n)}function u(n=1){return t(i(),n)}function c(n=1){return e(s$1.analysisTheme.textColor,n)}function s(n=1){return t(c(),n)}

export { c as a, c$1 as c, e$1 as e, f, i, r, s, t$1 as t, u };
