// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../request ../core/accessorSupport/get ../geometry/support/normalizeUtils ./networkService ./utils ./route/utils ./support/FeatureSet ./support/RouteSolveResult".split(" "),function(x,A,B,C,p,D,E,u,F){function G(l){const {barriers:c,directionLines:f,directionPoints:m,directions:g,messages:d,polygonBarriers:q,polylineBarriers:v,routes:h,stops:n,traversedEdges:w,traversedJunctions:y,traversedTurns:H}=l,z=b=>{var a=k.find(e=>e.routeName===b);if(null!=a)return a;a={routeId:k.length+1,
routeName:b};k.push(a);return a},t=b=>{var a=k.find(e=>e.routeId===b);if(null!=a)return a;a={routeId:b,routeName:null};k.push(a);return a},k=[];h?.features.forEach((b,a)=>{b.geometry.spatialReference=h.spatialReference??void 0;k.push({routeId:a+1,routeName:b.attributes.Name,route:b})});g?.forEach(b=>{const {routeName:a}=b;z(a).directions=b});const I=(n?.features.every(b=>null==b.attributes.RouteName)??!1)&&0<k.length?k[0].routeName:null;n?.features.forEach(b=>{if(b.geometry){var a;(a=b.geometry).spatialReference??
(a.spatialReference=n.spatialReference??void 0)}a=z(I??b.attributes.RouteName);a.stops??(a.stops=[]);a.stops.push(b)});f?.features.forEach(b=>{const a=t(b.attributes.RouteID),{geometryType:e,spatialReference:r}=f;a.directionLines??(a.directionLines={features:[],geometryType:e,spatialReference:r});a.directionLines.features.push(b)});m?.features.forEach(b=>{const a=t(b.attributes.RouteID),{geometryType:e,spatialReference:r}=m;a.directionPoints??(a.directionPoints={features:[],geometryType:e,spatialReference:r});
a.directionPoints.features.push(b)});w?.features.forEach(b=>{const a=t(b.attributes.RouteID),{geometryType:e,spatialReference:r}=w;a.traversedEdges??(a.traversedEdges={features:[],geometryType:e,spatialReference:r});a.traversedEdges.features.push(b)});y?.features.forEach(b=>{const a=t(b.attributes.RouteID),{geometryType:e,spatialReference:r}=y;a.traversedJunctions??(a.traversedJunctions={features:[],geometryType:e,spatialReference:r});a.traversedJunctions.features.push(b)});H?.features.forEach(b=>
{const a=t(b.attributes.RouteID);a.traversedTurns??(a.traversedTurns={features:[]});a.traversedTurns.features.push(b)});return F.fromJSON({routeResults:k,barriers:c,polygonBarriers:q,polylineBarriers:v,messages:d})}x.solve=async function(l,c,f){var m=[],g=[],d={};const q={},v=D.parseUrl(l);({path:l}=v);c.stops instanceof u&&p.collectGeometries(c.stops.features,g,"stops.features",d);c.pointBarriers instanceof u&&p.collectGeometries(c.pointBarriers.features,g,"pointBarriers.features",d);c.polylineBarriers instanceof
u&&p.collectGeometries(c.polylineBarriers.features,g,"polylineBarriers.features",d);c.polygonBarriers instanceof u&&p.collectGeometries(c.polygonBarriers.features,g,"polygonBarriers.features",d);g=await C.normalizeCentralMeridian(g);for(const h in d){const n=d[h];m.push(h);q[h]=g.slice(n[0],n[1])}if(p.isInputGeometryZAware(q,m)){d=null;try{d=await p.fetchServiceDescription(l,c.apiKey,f)}catch{}d&&!d.hasZ&&p.dropZValuesOffInputGeometry(q,m)}for(const h in q)q[h].forEach((n,w)=>{B.get(c,h)[w].geometry=
n});f={...f,query:{...v.query,...E.routeParametersToQueryParameters(c),f:"json"}};m=l.endsWith("/solve")?l:`${l}/solve`;({data:f}=await A(m,f));return G(f)};Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});