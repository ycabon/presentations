// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/vec32","../../../core/libs/gl-matrix-2/factories/vec3f64","../../../geometry/support/frustum"],function(k,e,f,c){function g(a,b,d){a.origin=b;a.endpoint=d;e.direction(a.direction,b,d)}class h{get planes(){return this.frustum}get points(){return this._points}get mutablePoints(){return this._points}get direction(){return this._direction}get origin(){return this._origin}constructor(a){this.renderCoordsHelper=a;this.frustum=c.create();this._points=c.createPoints();this.lines=
Array(12);this._origin=f.create();this._direction=f.create();this._altitude=null;for(a=0;12>a;a++)this.lines[a]={origin:null,direction:f.create(),endpoint:null}}update(a){c.fromMatrix(a.viewMatrix,a.projectionMatrix,this.frustum,this._points);e.copy(this._origin,a.eye);e.copy(this._direction,a.viewForward);this._altitude=this.renderCoordsHelper.getAltitude(this._origin);this._updateLines()}updatePoints(a){for(let b=0;b<this._points.length;b++)e.copy(this._points[b],a[b]);c.computePlanes(this.frustum,
this._points);this._updateLines()}get altitude(){return this._altitude}intersectsSphere(a){return c.intersectsSphere(this.frustum,a)}intersectsRay(a){return c.intersectsRay(this.frustum,a)}intersectsLineSegment(a,b){return c.intersectsLineSegment(this.frustum,a,b)}intersectsPoint(a){return c.intersectsPoint(this.frustum,a)}_updateLines(){const a=this._points;for(let b=0;4>b;b++){const d=b+4;g(this.lines[b],a[b],a[d]);g(this.lines[b+4],a[b],3===b?a[0]:a[b+1]);g(this.lines[b+8],a[d],3===b?a[4]:a[d+
1])}}}h.planePointIndices=c.planePointIndices;h.nearFarLineIndices=[[c.PointIndex.NEAR_BOTTOM_LEFT,c.PointIndex.FAR_BOTTOM_LEFT],[c.PointIndex.NEAR_BOTTOM_RIGHT,c.PointIndex.FAR_BOTTOM_RIGHT],[c.PointIndex.NEAR_TOP_RIGHT,c.PointIndex.FAR_TOP_RIGHT],[c.PointIndex.NEAR_TOP_LEFT,c.PointIndex.FAR_TOP_LEFT]];k.Frustum=h;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});