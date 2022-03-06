import { db as o, dc as u, cU as v, dd as d, de as c$1, df as p$1, C, dN as f, dg as o$1, ac as e$1, ae as i, dh as l$1 } from './_virtual_index-49b2bc11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=o$1({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function l(r,l,m){const c=[],f$1=[],y={},B={},b=o(r),{path:g}=b;l.stops&&l.stops.features&&u(l.stops.features,f$1,"stops.features",y),l.pointBarriers&&l.pointBarriers.features&&u(l.pointBarriers.features,f$1,"pointBarriers.features",y),l.polylineBarriers&&l.polylineBarriers.features&&u(l.polylineBarriers.features,f$1,"polylineBarriers.features",y),l.polygonBarriers&&l.polygonBarriers.features&&u(l.polygonBarriers.features,f$1,"polygonBarriers.features",y);const A=await v(f$1);for(const e in y){const r=y[e];c.push(e),B[e]=A.slice(r[0],r[1]);}if(d(B,c)){let e=null;try{e=await c$1(g,l.apiKey,m);}catch{}e&&!e.hasZ&&p$1(B,c);}for(const e in B)B[e].forEach(((r,t)=>{l.get(e)[t].geometry=r;}));const d$1={...m,query:{...b.query,...p.toQueryParams(l),f:"json"}},h=g.endsWith("/solve")?g:`${g}/solve`,j=await C(h,d$1);return f(j)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends l$1{constructor(s){super(s);}solve(s,r){return l(this.url,s,r)}};e=e$1([i("esri.tasks.RouteTask")],e);const c=e;

export { c as default };
