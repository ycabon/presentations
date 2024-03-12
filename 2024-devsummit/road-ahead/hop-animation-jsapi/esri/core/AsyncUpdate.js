// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ./Accessor ./Logger ./promiseUtils ./reactiveUtils ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(b,c,l,m,n,d,e,f){const k=a=>{a=class extends a{constructor(){super(...arguments);this._numUpdating=0}get updating(){return 0<this._numUpdating}autoUpdateAsync(g,p){const r=n.debounce(async q=>{++this._numUpdating;try{const h=await q;this.destroyed||this._set(g,h)}catch(h){m.getLogger(this).warn(`Async update of "${String(g)}" failed. Async update functions should not throw exceptions.`)}--this._numUpdating});
return d.watch(p,r,d.initial)}};c.__decorate([e.property({readOnly:!0})],a.prototype,"updating",null);c.__decorate([e.property()],a.prototype,"_numUpdating",void 0);return a=c.__decorate([f.subclass("esri.core.AsyncUpdate")],a)};b.AsyncUpdate=class extends k(l){};b.AsyncUpdate=c.__decorate([f.subclass("esri.core.AsyncUpdate")],b.AsyncUpdate);b.AsyncUpdateMixin=k;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});