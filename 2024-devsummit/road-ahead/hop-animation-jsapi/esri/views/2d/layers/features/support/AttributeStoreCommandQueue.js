// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/tslib.es6","../../../../../core/accessorSupport/decorators/property","../../support/UpdateTracking2D","../../../../support/QueueProcessor"],function(c,e,f,g,h){class d{constructor(a){this._updateTracking=new g.UpdateTracking2D({debugName:"AttributeStoreCommandQueue"});this._queueProcessor=new h.QueueProcessor({concurrency:1,process:a.process})}destroy(){this._updateTracking.destroy();this.clear()}get updateTracking(){return this._updateTracking}clear(){this._queueProcessor.clear()}async push(a){return this._updateTracking.addPromise(this._doPush(a))}async _doPush(a){const b=
this._queueProcessor,k=b.last();switch(a.type){case "update":return k?.type===a.type?b.lastPromise():b.push(a);case "initialize":return b.push(a)}}}e.__decorate([f.property()],d.prototype,"process",void 0);c.AttributeStoreCommmandQueue=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});