import { cb as L, U, cc as r, j as e, k as i$1, cd as p$2 } from './_virtual_index-634cbc09.js';
import { l, u, d, n, i, o, b as u$1 } from './NAServiceDescription-f907dcbe.js';
import './GPMessage-e38eaf41.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$1=o({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});async function m(s,m,l$1){const c=[],f=[],y={},B={},h=r(s);return m.stops&&m.stops.features&&l(m.stops.features,f,"stops.features",y),m.pointBarriers&&m.pointBarriers.features&&l(m.pointBarriers.features,f,"pointBarriers.features",y),m.polylineBarriers&&m.polylineBarriers.features&&l(m.polylineBarriers.features,f,"polylineBarriers.features",y),m.polygonBarriers&&m.polygonBarriers.features&&l(m.polygonBarriers.features,f,"polygonBarriers.features",y),L(f).then((e=>{for(const r in y){const t=y[r];c.push(r),B[r]=e.slice(t[0],t[1]);}return u(B,c)?d(h.path):Promise.resolve({dontCheck:!0})})).then((r=>{("dontCheck"in r?r.dontCheck:r.hasZ)||n(B,c);for(const e in B)B[e].forEach(((r,t)=>{m.get(e)[t].geometry=r;}));const t={...l$1,query:{...h.query,...p$1.toQueryParams(m),f:"json"}},{path:s}=h,o="/solve",i=s.endsWith(o)?s:s+o;return U(i,t)})).then((e=>i(e)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends(u$1(p$2)){constructor(r){super(r);}solve(r,s){return m(this.url,r,s)}};p=e([i$1("esri.tasks.RouteTask")],p);var c=p;

export default c;
