import { eo as ue, aL as o, fd as u, bj as g, e0 as o$1, fi as v, gY as x, dy as $ } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r={readOnly:!0,get(){return ue(this.view)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Auto=0]="Auto",e[e.Euclidean=1]="Euclidean",e[e.Geodesic=2]="Geodesic";}(e||(e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(e,o$1){if(o(o$1,0,0,0),e.length>0){for(let r=0;r<e.length;++r)u(o$1,o$1,e[r]);g(o$1,o$1,1/e.length);}}function f(e,n,s,t){t.projectToRenderScreen(e,a),t.projectToRenderScreen(n,m),o$1(s,p,i),v(s,s);}const a=x(),i=a,m=x(),p=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(e=null){this.spatialReference=e;}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors());}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=$(this._spatialReference,1),this._metersPerElevationUnit=$(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit;}}

export { c, e, f, r, t };
