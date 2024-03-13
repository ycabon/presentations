// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function f(){}class g{constructor(a){this._accessed=[];this._handles=[];this._observerObject=new h(a);e.register(this,new WeakRef(this._observerObject),this)}destroy(){e.unregister(this._observerObject);this._accessed.length=0;this._observerObject?.destroy();this.clear()}onObservableAccessed(a){const b=this._accessed;b.includes(a)||b.push(a)}onTrackingEnd(){const a=this._handles,b=this._accessed,k=this._observerObject;for(let c=0;c<b.length;++c)a.push(b[c].observe(k));
b.length=0}clear(){const a=this._handles;for(let b=0;b<a.length;++b)a[b].remove();a.length=0}}class h{constructor(a){this._notify=a;this._invalidCount=0;this.destroyed=!1}onInvalidated(){this._invalidCount++}onCommitted(){if(!this.destroyed){var a=this._invalidCount;1===a?(this._invalidCount=0,this._notify()):this._invalidCount=0<a?a-1:0}}destroy(){this.destroyed=!0;this._notify=f}}const e=new FinalizationRegistry(a=>{a.deref()?.destroy()});d.SimpleTrackingTarget=g;Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});