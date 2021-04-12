import { A as t, s, c0 as w, c1 as a } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(o=null,i){if(t.geometryServiceUrl){return new((await import('./GeometryService-0ea5f555.js')).default)({url:t.geometryServiceUrl})}if(!o)throw new s("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||w.getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new((await import('./GeometryService-0ea5f555.js')).default)({url:n.helperServices.geometry.url})}throw new s("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a$1){const l=await i(n,a$1),s$1=new a;s$1.geometries=[e],s$1.outSpatialReference=t;const c=await l.project(s$1,{signal:a$1});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new s("internal:geometry-service-projection-failed")}

export { i as create, n as projectGeometry };
