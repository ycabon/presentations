// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./TileKey"],function(h,k){function e(a,b){const c=new Set;for(const d of a instanceof Set?a.values():a.keys())b.has(d)||c.add(d);return c}class l{constructor(a){this.version=a}}class m{constructor(a){this._subscriptions=new Map;this._visible=new Set;this._paused=new Set;this._version=0;this._config=a}destroy(){}get _coverageSet(){const a=this._coverage?Array.from(this._coverage.keys()).map(b=>b.id):[];return new Set(a)}suspend(){this._suspendedOverage=this._coverage;this._coverage=
null;this._updateSubscriptions()}resume(){null==this._coverage&&(this._coverage=this._suspendedOverage,this._suspendedOverage=null,this._updateSubscriptions())}update(a){this._version+=1%Number.MAX_SAFE_INTEGER;this._updateCoverage(a);this._updateSubscriptions();return new Set(this._visible)}_updateCoverage(a){this._coverage=this._config.tileInfoView.getTileCoverage(a.state,0,!0,"closest")}_updateSubscriptions(){var a=this._coverageSet;const b=this._updateVisibility();var c=e(b,a);const d=e(this._subscriptions,
b),g=e(a,this._subscriptions);a=e(d,a);c=e(c,a);c=e(c,this._paused);this._visible=b;for(const f of g.values())this._subscriptions.set(f,new l(this._version));for(const f of c.values())this._paused.add(f);for(const f of a.values())this._subscriptions.delete(f),this._paused.delete(f);(g.size||a.size||c.size)&&this._sendUpdateSubscriptions(g,a,c)}_sendUpdateSubscriptions(a,b,c){a=Array.from(a.values()).map(d=>({tileId:d,version:this._subscriptions.get(d).version}));this._config.updateSubscriptions({subscribe:a,
unsubscribe:Array.from(b.values()),pause:Array.from(c.values()),tileInfoJSON:this._config.tileInfoView.tileInfo.toJSON()})}_updateVisibility(){const a=new Set;if(!this._coverage)return a;for(const b of this._coverage.keys())this._config.isDone(b)?a.add(b.id):this._addVisibleParent(a,b)||this._addVisibleChildren(a,b)||a.add(b.id);return a}_addVisibleParent(a,b){let c=!1;for(const d of this._visible.values())(new k(d)).containsChild(b)&&(a.add(d),c=!0);return c}_addVisibleChildren(a,b){let c=!1;for(const d of this._visible.values()){const g=
new k(d);b.containsChild(g)&&(a.add(d),c=!0)}return c}}h.FeatureTileSubscriptionManager=m;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});