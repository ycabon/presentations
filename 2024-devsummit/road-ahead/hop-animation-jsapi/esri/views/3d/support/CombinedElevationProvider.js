// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Evented ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/SpatialReference ../../../geometry/support/spatialReferenceUtils ../layers/graphics/ElevationQuery ./ElevationRange".split(" "),function(g,l,t,u,v,w,p,A,B,C,x,y,q,z,r){function h(a,b,c,f,
d,e,m){for(const n of b)b=n.getElevation(c,f,d,e,m),null!=b&&(a=null!=a?Math.max(b,a):b);return a}g.CombinedElevationProvider=class extends u.EventedMixin(t){get spatialReference(){return this.view?.basemapTerrain?.spatialReference}constructor(a){super(a);this._im=[];this._ground=[];this._scene=[];this.lastElevationQuery=null;this._cacheEnabled=!1}destroy(){this._cachedQuery=v.destroyMaybe(this._cachedQuery)}enableCache(a){a||(this.lastElevationQuery=null);this._cacheEnabled=a}getElevation(a,b,c,
f,d){if(this._cacheEnabled&&null!=this.lastElevationQuery){var e=this.lastElevationQuery;if(a===e.x&&b===e.y&&c===e.z&&q.equals(f,e.spatialReference)&&d===e.queryContext)return e.result}e=h(null,this._im,a,b,c,f,d);null==e&&(e=h(e,this._ground,a,b,c,f,d));"scene"===d&&(e=h(e,this._scene,a,b,c,f,d));this._cacheEnabled&&(this.lastElevationQuery={x:a,y:b,z:c,spatialReference:f,queryContext:d,result:e});return e}getSphereElevationBounds(a,b){const c=new r.ElevationRange,f=d=>{d.getSphereElevationBounds&&
(d=d.getSphereElevationBounds(a,b),null!=d&&c.expandElevationRangeValues(d.elevationRangeMin,d.elevationRangeMax))};for(const d of[this._im,this._ground,this._scene])d.forEach(f);return c}getRootElevationBounds(){const a=new r.ElevationRange;for(const b of[this._im,this._ground,this._scene])b.forEach(c=>{c.getRootElevationBounds&&(c=c.getRootElevationBounds(),null!=c&&a.expandElevationRangeValues(c.elevationRangeMin,c.elevationRangeMax))});return a}async queryElevation(a,b,c,f,d,e=null,m=0){const n=
this._getElevationQuery(f);try{const k=await n.queryElevation(a,b,e,m);return"scene"===d?h(k,this._scene,a,b,c,f,d):k}catch(k){return w.throwIfAbortError(k),this.getElevation(a,b,c,f,d)}}register(a,b){this.addHandles(b.on("elevation-change",c=>this.emit("elevation-change",c)),b);this._providersFromContext(a).push(b)}unregister(a){this.removeHandles(a);for(const b of[this._im,this._ground,this._scene]){const c=b.indexOf(a);-1<c&&b.splice(c,1)}}_providersFromContext(a){switch(a){case "ground":return this._ground;
case "im":return this._im;case "scene":return this._scene}}_getElevationQuery(a=this.view.spatialReference){const b=this._cachedQuery;if(null!=b&&q.equals(a,b.spatialReference))return b;b?.destroy({completeTasks:!0});const {wkid:c,wkt:f,wkt2:d,latestWkid:e}=a;return this._cachedQuery=a=new z.ElevationQuery(this.view.resourceController.scheduler,new y({wkid:c,wkt:f,wkt2:d,latestWkid:e}),()=>this.view.map?.ground,{maximumAutoTileRequests:4})}};l.__decorate([p.property({constructOnly:!0})],g.CombinedElevationProvider.prototype,
"view",void 0);l.__decorate([p.property()],g.CombinedElevationProvider.prototype,"spatialReference",null);g.CombinedElevationProvider=l.__decorate([x.subclass("esri.views.3d.support.CombinedElevationProvider")],g.CombinedElevationProvider);Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});