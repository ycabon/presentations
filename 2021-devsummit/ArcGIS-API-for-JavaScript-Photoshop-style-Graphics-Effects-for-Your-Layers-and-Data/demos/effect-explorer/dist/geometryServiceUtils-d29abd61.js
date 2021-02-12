import { G as s, h as s$1, cB as C, cC as p } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function i(o=null,i){if(s.geometryServiceUrl){return new((await import('./GeometryService-6c1329af.js')).default)({url:s.geometryServiceUrl})}if(!o)throw new s$1("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||C.getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new((await import('./GeometryService-6c1329af.js')).default)({url:n.helperServices.geometry.url})}throw new s$1("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a){const l=await i(n,a),s=new p;s.geometries=[e],s.outSpatialReference=t;const c=await l.project(s,{signal:a});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new s$1("internal:geometry-service-projection-failed")}

export { i as create, n as projectGeometry };
