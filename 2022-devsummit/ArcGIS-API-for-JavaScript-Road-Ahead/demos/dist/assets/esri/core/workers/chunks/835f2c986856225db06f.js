self.webpackChunkRemoteClient([52],{138:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(3),r(6),r(16)),a=r(20),n=r(24),i=(r(37),r(38),r(26));let l=class extends i.a{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?Object(n.J)(e):null}_encode(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=this._encode(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}};Object(s.a)([Object(o.b)({readOnly:!0})],l.prototype,"parsedUrl",null),Object(s.a)([Object(o.b)()],l.prototype,"requestOptions",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"url",void 0),l=Object(s.a)([Object(a.a)("esri.tasks.Task")],l);var c=l;t.a=c},271:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(3),r(6),r(16)),a=r(60),n=r(20),i=(r(24),r(37),r(38),r(56));const l=new a.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends i.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(n.a)("esri.tasks.support.GPMessage")],c);var u=c;t.a=u},289:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(3),r(6),r(16)),a=r(60),n=r(20),i=(r(24),r(37),r(38),r(271));const l=new a.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends i.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(n.a)("esri.tasks.support.NAMessage")],c);var u=c;t.a=u},306:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(0)),a=(r(3),r(6),r(16)),n=r(58),i=r(20),l=(r(24),r(37),r(38),r(61)),c=r(69),u=r(62),p=r(106),d=(r(64),r(77)),f=r(91);let y=class extends f.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach(e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)});const r=l.a.fromJSON(t.spatialReference);return e.map(e=>{const t=d.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(o.n)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map(t=>{const r=new d.a({geometry:new c.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r}),t})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:e})=>Object(o.n)(e)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,a=0;const n=[];let i,l,c,u,p,d,f,y,b=0,O=0,v=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[b],32)){b=2;const e=parseInt(p[b],32);b++,d=parseInt(p[b],32),b++,1&e&&(O=p.indexOf("|")+1,f=parseInt(p[O],32),O++),2&e&&(v=p.indexOf("|",O)+1,y=parseInt(p[v],32),v++)}else d=parseInt(p[b],32),b++;for(;b<p.length&&"|"!==p[b];){i=parseInt(p[b],32)+r,b++,r=i,l=parseInt(p[b],32)+s,b++,s=l;const e=[i/d,l/d];O&&(u=parseInt(p[O],32)+o,O++,o=u,e.push(u/f)),v&&(c=parseInt(p[v],32)+a,v++,a=c,e.push(c/y)),n.push(e)}return{paths:[n],hasZ:O>0,hasM:v>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach(e=>{e.paths.forEach(e=>{r=r.concat(e)})});const s=[];let o=[0,0];return r.forEach(e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)}),new p.a({paths:[s]},t)}};Object(s.a)([Object(a.b)({type:u.a,json:{read:{source:"summary.envelope"}}})],y.prototype,"extent",void 0),Object(s.a)([Object(a.b)()],y.prototype,"features",void 0),Object(s.a)([Object(n.a)("features")],y.prototype,"readFeatures",null),Object(s.a)([Object(a.b)()],y.prototype,"geometryType",void 0),Object(s.a)([Object(a.b)({readOnly:!0})],y.prototype,"mergedGeometry",null),Object(s.a)([Object(a.b)()],y.prototype,"routeId",void 0),Object(s.a)([Object(a.b)()],y.prototype,"routeName",void 0),Object(s.a)([Object(a.b)({value:null,readOnly:!0})],y.prototype,"strings",null),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalDriveTime"}}})],y.prototype,"totalDriveTime",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalLength"}}})],y.prototype,"totalLength",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalTime"}}})],y.prototype,"totalTime",void 0),y=Object(s.a)([Object(i.a)("esri.tasks.support.DirectionsFeatureSet")],y);var b=y;t.a=b},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]},this),r}}function o(e){return new s(e)}},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(14),o=(r(4),r(10)),a=r(0),n=(r(3),r(6),r(16),r(20)),i=r(17),l=r(24),c=(r(37),r(38),r(55)),u=r(138);const p=e=>{let t=class extends e{async getServiceDescription(e){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription(e)),this._serviceDescriptionPromise}async _fetchServiceDescription(e){if(!this.url||!this.parsedUrl)throw new i.a("network-service:missing-url","Url to Network service is missing");const t=this.url,{data:r}=await Object(c.default)(t,{query:{f:"json",token:e}});r.supportedTravelModes||(r.supportedTravelModes=[]);for(let e=0;e<r.supportedTravelModes.length;e++)r.supportedTravelModes[e].id||(r.supportedTravelModes[e].id=r.supportedTravelModes[e].itemId);const s=r.currentVersion>=10.4?async function(e,t){try{const{data:{supportedTravelModes:r,defaultTravelMode:s}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json",token:t}});return{supportedTravelModes:r,defaultTravelMode:s}}catch(e){throw new i.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(t,e):async function(e,t){const{data:r}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json",token:t}});if(!r||!r.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=r.owningSystemUrl;const{data:s}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json",token:t}}),a=Object(o.b)("helperServices.routingUtilities.url",s);if(!a)return{supportedTravelModes:[],defaultTravelMode:null};const n=Object(l.J)(e),i=/\/solveClosestFacility$/.test(n.path)?"Route":/\/solveClosestFacility$/.test(n.path)?"ClosestFacility":"ServiceAreas",u=await Object(c.default)(a+("/"===a[a.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i,token:t}}),p=[];let d=null;if(u&&u.data&&u.data.results&&u.data.results.length){const e=u.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);p.push(t)}}else"defaultTravelMode"===t.paramName&&(d=t.value)}return{supportedTravelModes:p,defaultTravelMode:d}}(t,e),{defaultTravelMode:a,supportedTravelModes:n}=await s;return r.defaultTravelMode=a,r.supportedTravelModes=n,r}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.h)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(n.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(p(u.a)){};d=Object(s.a)([Object(n.a)("esri.tasks.mixins.NAServiceDescription")],d)},361:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return M})),r.d(t,"c",(function(){return S})),r.d(t,"d",(function(){return w})),r.d(t,"e",(function(){return B}));var s=r(10),o=r(0),a=r(17),n=r(55),i=r(67),l=r(14),c=(r(4),r(3),r(6),r(16)),u=r(58),p=r(20),d=(r(24),r(37),r(38),r(56)),f=r(77),y=r(91),b=r(289),O=r(306);let v=class extends d.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l.a)([Object(c.b)({type:O.a,json:{write:!0}})],v.prototype,"directions",void 0),Object(l.a)([Object(c.b)({type:f.a,json:{write:!0}})],v.prototype,"route",void 0),Object(l.a)([Object(c.b)({type:String,json:{write:!0}})],v.prototype,"routeName",void 0),Object(l.a)([Object(c.b)({type:[f.a],json:{write:!0}})],v.prototype,"stops",void 0),v=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResult")],v);var j=v;function h(e){return e&&y.default.fromJSON(e).features.map(e=>e)}let g=class extends d.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return h(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return h(e)}readPolygonBarriers(e){return h(e)}};Object(l.a)([Object(c.b)({aliasOf:"pointBarriers"})],g.prototype,"barriers",void 0),Object(l.a)([Object(c.b)({type:[b.a]})],g.prototype,"messages",void 0),Object(l.a)([Object(c.b)({type:[f.a]})],g.prototype,"pointBarriers",void 0),Object(l.a)([Object(u.a)("pointBarriers",["barriers","pointBarriers"])],g.prototype,"readPointBarriers",null),Object(l.a)([Object(c.b)({type:[f.a]})],g.prototype,"polylineBarriers",void 0),Object(l.a)([Object(u.a)("polylineBarriers")],g.prototype,"readPolylineBarriers",null),Object(l.a)([Object(c.b)({type:[f.a]})],g.prototype,"polygonBarriers",void 0),Object(l.a)([Object(u.a)("polygonBarriers")],g.prototype,"readPolygonBarriers",null),Object(l.a)([Object(c.b)({type:[j]})],g.prototype,"routeResults",void 0),g=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResultsContainer")],g);var m=g;function T(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}function M(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function w(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:n=[],spatialReference:i=null}={},barriers:l,polygonBarriers:c,polylineBarriers:u,messages:p}=e.data,d="esri.tasks.RouteTask.NULL_ROUTE_NAME";let f,y,b=!0;const O=o&&a||n&&i||l&&l.spatialReference||c&&c.spatialReference||u&&u.spatialReference;s.forEach(e=>{t.push(f=e.routeName),r[f]={directions:e}}),o.forEach(e=>{-1===t.indexOf(f=e.attributes.Name)&&(t.push(f),r[f]={}),e.geometry&&(e.geometry.spatialReference=O),r[f].route=e}),n.forEach(e=>{y=e.attributes,-1===t.indexOf(f=y.RouteName||d)&&(t.push(f),r[f]={}),f!==d&&(b=!1),e.geometry&&(e.geometry.spatialReference=O),null==r[f].stops&&(r[f].stops=[]),r[f].stops.push(e)}),n.length>0&&!0===b&&(r[t[0]].stops=r[d].stops,delete r[d],t.splice(t.indexOf(d),1));const v=t.map(e=>(r[e].routeName=e===d?null:e,r[e]));return m.fromJSON({routeResults:v,pointBarriers:l,polygonBarriers:c,polylineBarriers:u,messages:p})}function B(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.h)(e)&&e.hasZ)return!0}return!1}async function S(e){if(!e)throw new a.a("network-service:missing-url","Url to Network service is missing");const{data:t}=await Object(n.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(n.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new a.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(n.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(n.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),o=Object(s.b)("helperServices.routingUtilities.url",r);if(!o)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(i.c)(e),l=/\/solve$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",c=await Object(n.default)(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:l}}),u=[];let p=null;if(c&&c.data&&c.data.results&&c.data.results.length){const e=c.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:o,supportedTravelModes:l}=await r;return t.defaultTravelMode=o,t.supportedTravelModes=l,t}},642:function(e,t,r){"use strict";r.r(t);var s=r(14),o=(r(4),r(3),r(6),r(16)),a=r(20),n=(r(24),r(37),r(38),r(138)),i=r(55),l=r(227),c=r(67),u=r(346),p=r(361),d=r(0),f=r(58),y=r(56),b=r(61),O=r(69),v=r(116),j=r(106),h=r(65),g=(r(64),r(77)),m=r(289);function T(e){return e.features.map(t=>{const r=b.a.fromJSON(e.spatialReference),s=g.a.fromJSON(t);return Object(d.n)(s.geometry).spatialReference=r,s})}function M(e){return e.features.map(t=>(t.geometry.spatialReference=e.spatialReference,Object(h.a)(t.geometry)))}let w=class extends y.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return M(e)}readPointBarriers(e,t){return M(t.barriers)}readPolylineBarriers(e){return M(e)}readPolygonBarriers(e){return M(e)}readIncidents(e,t){return T(t.saPolylines)}readServiceAreaPolygons(e,t){return T(t.saPolygons)}};Object(s.a)([Object(o.b)({type:[O.a]})],w.prototype,"facilities",void 0),Object(s.a)([Object(f.a)("facilities")],w.prototype,"readFacilities",null),Object(s.a)([Object(o.b)({type:[m.a]})],w.prototype,"messages",void 0),Object(s.a)([Object(o.b)({type:[O.a]})],w.prototype,"pointBarriers",void 0),Object(s.a)([Object(f.a)("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),Object(s.a)([Object(o.b)({type:[j.a]})],w.prototype,"polylineBarriers",void 0),Object(s.a)([Object(f.a)("polylineBarriers")],w.prototype,"readPolylineBarriers",null),Object(s.a)([Object(o.b)({type:[v.a]})],w.prototype,"polygonBarriers",void 0),Object(s.a)([Object(f.a)("polygonBarriers")],w.prototype,"readPolygonBarriers",null),Object(s.a)([Object(o.b)({type:[g.a]})],w.prototype,"serviceAreaPolylines",void 0),Object(s.a)([Object(f.a)("serviceAreaPolylines",["saPolylines"])],w.prototype,"readIncidents",null),Object(s.a)([Object(o.b)({type:[g.a]})],w.prototype,"serviceAreaPolygons",void 0),Object(s.a)([Object(f.a)("serviceAreaPolygons",["saPolygons"])],w.prototype,"readServiceAreaPolygons",null),w=Object(s.a)([Object(a.a)("esri.tasks.support.ServiceAreaSolveResult")],w);var B=w;const S=Object(u.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});var N=r(347);let P=class extends(Object(N.a)(n.a)){constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],o=[],a={},n={},u=Object(c.c)(e);return t.facilities&&t.facilities.features&&Object(p.a)(t.facilities.features,o,"facilities.features",a),t.pointBarriers&&t.pointBarriers.features&&Object(p.a)(t.pointBarriers.features,o,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&Object(p.a)(t.polylineBarriers.features,o,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&Object(p.a)(t.polygonBarriers.features,o,"polygonBarriers.features",a),Object(l.a)(o).then(e=>{for(const t in a){const r=a[t];s.push(t),n[t]=e.slice(r[0],r[1])}return Object(p.e)(n,s)?Object(p.c)(u.path).catch(()=>({dontCheck:!0})):Promise.resolve({dontCheck:!0})}).then(e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(p.b)(n,s);for(const e in n)n[e].forEach((r,s)=>{t.get(e)[s].geometry=r});let o={query:{...u.query,f:"json",...S.toQueryParams(t)}};return r&&(o={...r,...o}),Object(i.default)(u.path+"/solveServiceArea",o)}).then(e=>B.fromJSON(e.data))}(this.url,e,t)}};Object(s.a)([Object(o.b)()],P.prototype,"url",void 0),P=Object(s.a)([Object(a.a)("esri.tasks.ServiceAreaTask")],P);var k=P;t.default=k},67:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}));var s=r(24);function o(e,t){let r={query:e};return t&&(r={...t,...r},r.query={...r.query,...t.query}),r}function a(e){return"string"==typeof e?Object(s.J)(e):e}function n(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=n(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}}});