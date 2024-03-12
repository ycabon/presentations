// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../ViewingMode ./I3SUtil ./Intersector ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils".split(" "),function(v,A,w,B,C,x,D){function E(a,d,c,f=0){f=a[3]+f;const l=d[0]-a[0],h=d[1]-a[1];a=d[2]-a[2];d=c[0];const k=c[1];c=c[2];const e=d*l+k*h+c*a;return 0<=e*e-(d*d+k*k+c*c)*(l*l+h*h+a*a-f*f)}class F{constructor(a){this.type=x.IntersectorType.I3S;this._needVerticalOffset=!1;this.layerUid=a.layerUid;this.sublayerUid=
a.sublayerUid;this._collection=a.collection;this._traverseNodeHierarchy=a.traverseNodeHierarchy;this.slicePlaneEnabled=a.slicePlaneEnabled;this.isGround=a.isGround}updateElevationAlignState(a,d){this._needVerticalOffset=a&&d===A.ViewingMode.Global}intersect(a,d,c,f,l,h){const k=h??!1,e=a.results,G=a.options.store===x.StoreResults.ALL,r=a.ray.direction,m=a.tolerance;let y=b=>b,t=b=>b;const n=D.getVerticalOffsetI3S(a.verticalOffset??(this._needVerticalOffset?0:null));null!=a.verticalOffset&&null!=n&&
(y=b=>n.applyToMbs(b),t=b=>n.applyToObb(b));this._traverseNodeHierarchy((b,z)=>{if(0===b.childrenLoaded)return!1;const u=w.isValidObb(b.serviceObbInRenderSR)?b.serviceObbInRenderSR:null;if(u&&!t(u).intersectRay(c,r,m))return!1;!z||!u&&w.isValidMbs(b.serviceMbsInRenderSR)&&!E(y(b.serviceMbsInRenderSR),c,r,m)||null!=b.geometryObbInRenderSR&&!t(b.geometryObbInRenderSR).intersectRay(c,r,m)||this._collection.intersect(z,c,f,m,n,(H,g,I,J)=>{if(!(0>g||null!=d&&!d(c,f,g))){var q=p=>{const K=new B.I3sTarget(this.layerUid,
this.sublayerUid,b.index,H,J);p.set(this.type,K,g,I)};this.isGround&&(null==e.ground.dist||g<e.ground.dist)&&q(e.ground);if(!a.options.isFiltered&&((null==e.min.dist||g<e.min.dist)&&q(e.min),(null==e.max.dist||g>e.max.dist)&&q(e.max),G)){const p=C.newIntersectorResult(a.ray);q(p);a.results.all.push(p)}}},k);return!0})}}v.I3SIntersectionHandler=F;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});