// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Error ../core/Promise ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass".split(" "),function(b,g,a,e,d,k,l,m,h){a=class extends a.EsriPromise{constructor(c){super(c);this.state="running";this._resolver=this.target=null}initialize(){this._resolver=e.createResolver();this.addResolvingPromise(this._resolver.promise)}get done(){return"finished"===this.state||"stopped"===
this.state}stop(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._resolver?.reject(new g("ViewAnimation stopped")))}finish(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._resolver?.resolve())}update(c,f){f||=e.isPromiseLike(c)?"waiting-for-target":"running";this._set("target",c);this._set("state",f)}};b.__decorate([d.property({readOnly:!0})],a.prototype,"done",null);b.__decorate([d.property({readOnly:!0,type:String})],a.prototype,
"state",void 0);b.__decorate([d.property()],a.prototype,"target",void 0);a=b.__decorate([h.subclass("esri.views.ViewAnimation")],a);(a||={}).State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"};return a});