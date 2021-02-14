import { x as i, e, y, i as i$1, cn as a$1, az as d } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=i.getLogger("esri.tasks.support.ProjectParameters");let n=class extends a$1{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}get outSR(){return a.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference}set outSR(r){a.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=r;}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:d(t),geometries:r}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(e.transformForward=this.transformForward),e}};e([y()],n.prototype,"geometries",void 0),e([y({json:{read:{source:"outSR"}}})],n.prototype,"outSpatialReference",void 0),e([y({json:{read:!1}})],n.prototype,"outSR",null),e([y()],n.prototype,"transformation",void 0),e([y()],n.prototype,"transformForward",void 0),n=e([i$1("esri.tasks.support.ProjectParameters")],n);var p=n;

export { p };
