// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../handleUtils","./tracking/ObservationHandle"],function(f,h,k){class l{constructor(){this._observers=null;this.destroyed=!1}observe(a){if(this.destroyed||a.destroyed)return m;null==this._observers&&(this._observers=[]);const b=this._observers;let c=!1,d=!1;const n=b.length;for(let e=0;e<n;++e){const g=b[e];if(g.destroyed)d=!0;else if(g===a){c=!0;break}}c||(b.push(a),d&&this._removeDestroyedObservers());return new k.ObservationHandle(b,a)}_removeDestroyedObservers(){const a=this._observers;
if(a&&0!==a.length){var b=a.length,c=0;for(let d=0;d<b;++d){for(;d+c<b;)if(a[d+c].destroyed)++c;else break;if(0<c)if(d+c<b)a[d]=a[d+c];else break}a.length=b-c}}destroy(){if(!this.destroyed){this.destroyed=!0;var a=this._observers;if(null!=a){for(const b of a)b.onCommitted();this._observers=null}}}}const m=h.makeHandle();f.ObservableBase=l;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});