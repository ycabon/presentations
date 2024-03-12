// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/GeometryCursor","../CIMCursor","../CurveHelper"],function(h,k,l,m){class g{static local(){null===g.instance&&(g.instance=new g);return g.instance}execute(b,a,c,e,f){return new n(b,a,c)}}g.instance=null;class n extends l.PathEffectCursor{constructor(b,a,c){super(b,!0,!0);this._curveHelper=new m.CurveHelper;this._beginCut=(void 0!==a.beginCut?a.beginCut:1)*c;this._endCut=(void 0!==a.endCut?a.endCut:1)*c;this._middleCut=(void 0!==a.middleCut?a.middleCut:0)*c;this._invert=
void 0!==a.invert?a.invert:!1;0>this._beginCut&&(this._beginCut=0);0>this._endCut&&(this._endCut=0);0>this._middleCut&&(this._middleCut=0)}processPath(b){const {_beginCut:a,_endCut:c,_middleCut:e}=this,f=b.pathLength(),d=k.GeometryCursor.createEmptyOptimizedCIM("esriGeometryPolyline");if(!this._invert)if(0===a&&0===c&&0===e)for(d.startPath();b.nextPoint();)d.pushXY(b.x,b.y);else a+c+e<f&&(0===e?this._curveHelper.appendSubCurve(d,b,a,f-c):(this._curveHelper.appendSubCurve(d,b,a,.5*(f-e)),this._curveHelper.appendSubCurve(d,
b,.5*(f+e),f-c)));else if(0!==a||0!==c||0!==e)if(a+c+e>=f)for(d.startPath();b.nextPoint();)d.pushXY(b.x,b.y);else this._curveHelper.appendSubCurve(d,b,0,a),this._curveHelper.appendSubCurve(d,b,.5*(f-e),.5*(f+e)),this._curveHelper.appendSubCurve(d,b,f-c,c);return 0===d.totalSize?null:d}}h.EffectCut=g;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});