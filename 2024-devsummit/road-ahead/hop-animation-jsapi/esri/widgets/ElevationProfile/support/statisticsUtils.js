// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/arrayUtils","../../../core/unitUtils","./constants"],function(r,I,q,J){function u(a,b){return null==b?a:null!=a?Math.min(a,b):b}function m(a,b){return null==b?a:null!=a?Math.max(a,b):b}function v(a,b){return null!=a&&null!=b?a*b:null}class C{constructor(){this._sampleCount=this._totalElevation=this._start=0}get avgElevation(){return this._totalElevation/this._sampleCount}get isHole(){return 0===this._sampleCount}get start(){return this._start}copy(a){this._start=a._start;
this._sampleCount=a._sampleCount;this._totalElevation=a._totalElevation}reset(){this._totalElevation=this._sampleCount=this._start=0}restart(a,b){this._start=a;this._sampleCount=1;this._totalElevation=b}insert(a){++this._sampleCount;this._totalElevation+=a}}r.getBoundsInMeters=function(a){let b=null,c=null,d=null;for(const e of a){if(null==e)continue;const {statistics:h,spatialReference:l}=e;null!=h&&(a=q.getMetersPerUnitForSR(l),b=m(b,v(h.maxDistance,a)),a=q.getMetersPerVerticalUnitForSR(l),d=u(d,
v(h.minElevation,a)),c=m(c,v(h.maxElevation,a)))}return{minDistance:0,maxDistance:b??0,minElevation:d??0,maxElevation:c??0}};r.getStatistics=function(a,b){const c=a.length;if(0===c)return null;var d=a[0],e=d.sampledZ;let h=e,l=e,n=0,D=0,w=null,x=null,E=null!=e?e:0,F=0,G=0;e=null!=e?1:0;let y=0,z=0;const H=q.getMetersPerUnitForSR(b),K=q.getMetersPerVerticalUnitForSR(b),A=J.getConfig().minSlopeSampleDistance/H,L=2*A,p=new C,g=new C;b=(f,M)=>{B();p.copy(g);g.reset();0<f&&f-p.start<=L&&(f=p.start+A);
g.restart(f,M)};const B=()=>{if(!p.isHole&&!g.isHole){var f=q.convertUnit(Math.atan2((g.avgElevation-p.avgElevation)*K,(g.start-p.start)*H),"radians","degrees");0<f?(F+=f,w=m(w,f),y++):0>f&&(G-=f,x=m(x,-f),z++)}};null!=d.sampledZ&&b(d.distance,d.sampledZ);for(d=1;d<c;++d){var t=a[d-1];const f=a[d];var k=f.sampledZ;null==k?g.isHole||(B(),p.copy(g),g.reset()):(e++,E+=k,h=u(h,k),l=m(l,k),g.isHole||f.distance-g.start>=A?b(f.distance,k):g.insert(k),t=t.sampledZ,null!=t&&(k-=t,0<k?n+=k:0>k&&(D-=k)))}B();
p.copy(g);g.reset();return 0===e?null:{maxDistance:a[c-1].distance,minElevation:h,maxElevation:l,avgElevation:0===e?null:E/e,elevationGain:n,elevationLoss:D,maxPositiveSlope:w,maxNegativeSlope:x,avgPositiveSlope:0===y?null:F/y,avgNegativeSlope:0===z?null:G/z}};r.mergeStatistics=function(a){a=a.filter(I.isSome);var b=a.length;if(0===b)return null;var c=a[0];if(1===b)return c;b=c.maxDistance;let d=c.minElevation,e=c.maxElevation,h=c.maxPositiveSlope;c=c.maxNegativeSlope;for(let l=1;l<a.length;++l){const n=
a[l];b=m(b,n.maxDistance);d=u(d,n.minElevation);e=m(e,n.maxElevation);h=m(h,n.maxPositiveSlope);c=m(c,n.maxNegativeSlope)}return{maxDistance:b,minElevation:d,maxElevation:e,avgElevation:null,elevationGain:null,elevationLoss:null,maxPositiveSlope:h,maxNegativeSlope:c,avgPositiveSlope:null,avgNegativeSlope:null}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});