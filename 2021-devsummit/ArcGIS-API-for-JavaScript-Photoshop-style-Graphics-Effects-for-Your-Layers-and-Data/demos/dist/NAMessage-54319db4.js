import { y as e$1, A as i$1, p as s, L, da as t$1, db as U, C as u, d9 as i$2, bA as t$2, z as y } from './_virtual:index-98fd932b.js';
import { a } from './GPMessage-08e342d2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t={}){this._options=t;}toQueryParams(t){if(!t)return null;const e=t.toJSON(),o={};return Object.keys(e).forEach((t=>{const n=this._options[t];if(n){const r="boolean"!=typeof n&&n.name?n.name:t,s="boolean"!=typeof n&&n.getter?n.getter(e):e[t];null!=s&&(o[r]=(t=>{if(!Array.isArray(t))return !1;const[e]=t;return "number"==typeof e||"string"==typeof e})(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s);}else o[t]=e[t];}),this),o}}function e(e){return new t(e)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=l=>{let n=class extends l{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new s("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await L(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const s$1=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:r,defaultTravelMode:t}}=await L(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return {supportedTravelModes:r,defaultTravelMode:t}}catch(e){throw new s("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await L(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return {supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:s}=await L(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),o=t$1("helperServices.routingUtilities.url",s);if(!o)return {supportedTravelModes:[],defaultTravelMode:null};const l=U(e),n=/\/solveClosestFacility$/.test(l.path)?"Route":/\/solveClosestFacility$/.test(l.path)?"ClosestFacility":"ServiceAreas",c=await L(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n}}),u=[];let p=null;if(c&&c.data&&c.data.results&&c.data.results.length){const e=c.data.results;for(const r of e)if("supportedTravelModes"===r.paramName){if(r.value&&r.value.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);u.push(r);}}else "defaultTravelMode"===r.paramName&&(p=r.value);}return {supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:l,supportedTravelModes:n}=await s$1;return t.defaultTravelMode=l,t.supportedTravelModes=n,t}_isInputGeometryZAware(e,r){for(let s=0;s<r.length;s++){const o=e[r[s]];if(o&&o.length)for(const e of o)if(u(e)&&e.hasZ)return !0}return !1}_dropZValuesOffInputGeometry(e,r){for(let t=0;t<r.length;t++){const s=e[r[t]];if(s&&s.length)for(const e of s)e.z=void 0;}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");}};return n=e$1([i$1("esri.tasks.mixins.NAServiceDescription")],n),n};let c=class extends(n(i$2)){};c=e$1([i$1("esri.tasks.mixins.NAServiceDescription")],c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=new t$2({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let i=class extends a{constructor(r){super(r),this.type=null;}};e$1([y({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=e$1([i$1("esri.tasks.support.NAMessage")],i);var c$1=i;

export { c$1 as c, e, n };
