import { ac as e, ad as d$1, am as j$1, d5 as o, d6 as m, c2 as v, cV as h, ae as i, d7 as a$1, dJ as g$1, h as r, cS as d$2, b3 as k, bL as e$1, d9 as o$1, cU as v$1, C, da as l$1 } from './_virtual_index-3ad07138.js';
import { a, u, d as d$3, b as c$1, p as p$1, o as o$2 } from './networkService-6fa7bb0e.js';
import './GPMessage-c0195e20.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const t=k.fromJSON(r.spatialReference),s=h.fromJSON(o);return e$1(s.geometry).spatialReference=t,s}))}function g(r$1){return g$1(r$1.features.map((e=>(r(e.geometry)&&(e.geometry.spatialReference=r$1.spatialReference),d$2(e.geometry)))))}let P=class extends a$1{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return g(r)}readPointBarriers(r,e){return g(e.barriers)}readPolylineBarriers(r){return g(r)}readPolygonBarriers(r){return g(r)}readIncidents(r,e){return d(e.saPolylines)}readServiceAreaPolygons(r,e){return d(e.saPolygons)}};e([d$1({type:[j$1]})],P.prototype,"facilities",void 0),e([o("facilities")],P.prototype,"readFacilities",null),e([d$1({type:[a]})],P.prototype,"messages",void 0),e([d$1({type:[j$1]})],P.prototype,"pointBarriers",void 0),e([o("pointBarriers",["barriers"])],P.prototype,"readPointBarriers",null),e([d$1({type:[m]})],P.prototype,"polylineBarriers",void 0),e([o("polylineBarriers")],P.prototype,"readPolylineBarriers",null),e([d$1({type:[v]})],P.prototype,"polygonBarriers",void 0),e([o("polygonBarriers")],P.prototype,"readPolygonBarriers",null),e([d$1({type:[h]})],P.prototype,"serviceAreaPolylines",void 0),e([o("serviceAreaPolylines",["saPolylines"])],P.prototype,"readIncidents",null),e([d$1({type:[h]})],P.prototype,"serviceAreaPolygons",void 0),e([o("serviceAreaPolygons",["saPolygons"])],P.prototype,"readServiceAreaPolygons",null),P=e([i("esri.rest.support.ServiceAreaSolveResult")],P);const j=P;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=o$2({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function f(e,f,p){const c=[],m=[],y={},B={},g=o$1(e),{path:S}=g;f.facilities&&f.facilities.features&&u(f.facilities.features,m,"facilities.features",y),f.pointBarriers&&f.pointBarriers.features&&u(f.pointBarriers.features,m,"pointBarriers.features",y),f.polylineBarriers&&f.polylineBarriers.features&&u(f.polylineBarriers.features,m,"polylineBarriers.features",y),f.polygonBarriers&&f.polygonBarriers.features&&u(f.polygonBarriers.features,m,"polygonBarriers.features",y);const j$1=await v$1(m);for(const r in y){const e=y[r];c.push(r),B[r]=j$1.slice(e[0],e[1]);}if(d$3(B,c)){let r=null;try{r=await c$1(S,f.apiKey,p);}catch{}r&&!r.hasZ&&p$1(B,c);}for(const r in B)B[r].forEach(((e,t)=>{f.get(r)[t].geometry=e;}));const b={...p,query:{...g.query,...l.toQueryParams(f),f:"json"}},{data:v}=await C(`${S}/solveServiceArea`,b);return j.fromJSON(v)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends l$1{constructor(r){super(r),this.url=null;}solve(r,s){return f(this.url,r,s)}};e([d$1()],c.prototype,"url",void 0),c=e([i("esri.tasks.ServiceAreaTask")],c);const p=c;

export { p as default };
