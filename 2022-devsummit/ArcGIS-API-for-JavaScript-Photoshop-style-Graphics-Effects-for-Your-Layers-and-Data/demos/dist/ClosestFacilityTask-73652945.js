import { ac as e, ad as d$1, d5 as c$2, am as j$1, d6 as o, d7 as a, d8 as m, c2 as v, cV as h, ae as i, d9 as a$1, da as g$1, b3 as k, h as r, db as o$1, dc as u, cU as v$1, dd as d$2, de as c$3, df as p$1, C, dg as o$2, dh as l$1 } from './_virtual_index-49b2bc11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r$1){return r$1.features.map((o=>{const s=k.fromJSON(r$1.spatialReference),i=h.fromJSON(o);return r(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return g$1.fromJSON(r).features.map((r=>r.geometry))}let j=class extends a$1{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null;}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};e([d$1({type:[c$2]})],j.prototype,"directions",void 0),e([d$1({type:[j$1]})],j.prototype,"facilities",void 0),e([o("facilities")],j.prototype,"readFacilities",null),e([d$1({type:[j$1]})],j.prototype,"incidents",void 0),e([o("incidents")],j.prototype,"readIncidents",null),e([d$1({type:[a]})],j.prototype,"messages",void 0),e([d$1({type:[j$1]})],j.prototype,"pointBarriers",void 0),e([o("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),e([d$1({type:[m]})],j.prototype,"polylineBarriers",void 0),e([o("polylineBarriers")],j.prototype,"readPolylineBarriers",null),e([d$1({type:[v]})],j.prototype,"polygonBarriers",void 0),e([o("polygonBarriers")],j.prototype,"readPolygonBarriers",null),e([d$1({type:[h]})],j.prototype,"routes",void 0),e([o("routes")],j.prototype,"readRoutes",null),j=e([i("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=o$2({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});async function c$1(r,c,m){const f=[],p=[],y={},B={},d=o$1(r),{path:b}=d;c.incidents&&c.incidents.features&&u(c.incidents.features,p,"incidents.features",y),c.facilities&&c.facilities.features&&u(c.facilities.features,p,"facilities.features",y),c.pointBarriers&&c.pointBarriers.features&&u(c.pointBarriers.features,p,"pointBarriers.features",y),c.polylineBarriers&&c.polylineBarriers.features&&u(c.polylineBarriers.features,p,"polylineBarriers.features",y),c.polygonBarriers&&c.polygonBarriers.features&&u(c.polygonBarriers.features,p,"polygonBarriers.features",y);const g$1=await v$1(p);for(const e in y){const r=y[e];f.push(e),B[e]=g$1.slice(r[0],r[1]);}if(d$2(B,f)){let e=null;try{e=await c$3(b,c.apiKey,m);}catch{}e&&!e.hasZ&&p$1(B,f);}for(const e in B)B[e].forEach(((r,t)=>{c.get(e)[t].geometry=r;}));const A={...m,query:{...d.query,...l.toQueryParams(c),f:"json"}},{data:j}=await C(`${b}/solveClosestFacility`,A);return g.fromJSON(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends l$1{constructor(s){super(s),this.url=null;}solve(s,r){return c$1(this.url,s,r)}};e([d$1()],c.prototype,"url",void 0),c=e([i("esri.tasks.ClosestFacilityTask")],c);const p=c;

export { p as default };
