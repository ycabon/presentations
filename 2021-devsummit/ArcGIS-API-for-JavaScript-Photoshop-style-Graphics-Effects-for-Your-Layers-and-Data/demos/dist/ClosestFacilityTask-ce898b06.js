import { y as e, z as y, ao as w, d6 as e$1, cZ as f$1, b0 as x, cH as n, A as i, d7 as a, d8 as g, a_ as y$1, C as u, cF as P, U, L, d9 as i$1 } from './_virtual:index-325c676c.js';
import { c as c$1, n as n$1, e as e$2 } from './NAMessage-a1591491.js';
import { c } from './DirectionsFeatureSet-47e978e5.js';
import './GPMessage-5211b572.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function d(r){return g.fromJSON(r).features.map((r=>r.geometry))}let f=class extends a{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return d(r)}readIncidents(r){return d(r)}readPointBarriers(r,e){return d(e.barriers)}readPolylineBarriers(r){return d(r)}readPolygonBarriers(r){return d(r)}readRoutes(r){return function(r){return r.features.map((o=>{const t=y$1.fromJSON(r.spatialReference),s=n.fromJSON(o);return u(s.geometry)&&(s.geometry.spatialReference=t),s}))}(r)}};e([y({type:[c]})],f.prototype,"directions",void 0),e([y({type:[w]})],f.prototype,"facilities",void 0),e([e$1("facilities")],f.prototype,"readFacilities",null),e([y({type:[w]})],f.prototype,"incidents",void 0),e([e$1("incidents")],f.prototype,"readIncidents",null),e([y({type:[c$1]})],f.prototype,"messages",void 0),e([y({type:[w]})],f.prototype,"pointBarriers",void 0),e([e$1("pointBarriers",["barriers"])],f.prototype,"readPointBarriers",null),e([y({type:[f$1]})],f.prototype,"polylineBarriers",void 0),e([e$1("polylineBarriers")],f.prototype,"readPolylineBarriers",null),e([y({type:[x]})],f.prototype,"polygonBarriers",void 0),e([e$1("polygonBarriers")],f.prototype,"readPolygonBarriers",null),e([y({type:[n]})],f.prototype,"routes",void 0),e([e$1("routes")],f.prototype,"readRoutes",null),f=e([i("esri.tasks.support.ClosestFacilitySolveResult")],f);var j=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=e$2({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let p=class extends(n$1(i$1)){constructor(e){super(e),this.url=null;}solve(e,r){const t=[],a=[],n={},c={};return e.incidents&&e.incidents.features&&this._collectGeometries(e.incidents.features,a,"incidents.features",n),e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,a,"facilities.features",n),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",n),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",n),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",n),P(a).then((e=>{for(const r in n){const s=n[r];t.push(r),c[r]=e.slice(s[0],s[1]);}return this._isInputGeometryZAware(c,t)?this.getServiceDescription():U({dontCheck:!0})})).then((s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(c,t);for(const r in c)c[r].forEach(((t,s)=>{e.get(r)[s].geometry=t;}));let o={query:{...this.parsedUrl.query,f:"json",...l.toQueryParams(e)}};return (this.requestOptions||r)&&(o={...this.requestOptions,...r,...o}),L(`${this.parsedUrl.path}/solveClosestFacility`,o)})).then((e=>j.fromJSON(e.data)))}_collectGeometries(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry);}));}};e([y()],p.prototype,"url",void 0),p=e([i("esri.tasks.ClosestFacilityTask")],p);var m=p;

export default m;