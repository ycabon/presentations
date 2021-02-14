import { U, f as f$1, O as O$1 } from './index.js';
import { J, l as k, Z, F, E, aj as i, M as O } from './arcadeUtils-7be8b594.js';
import { WhereClause as f } from './WhereClause-739ff1ff.js';
import './number-eae8634d.js';
import './FeatureSetReader-0f850cde.js';
import './centroid-6105d00e.js';
import './_commonjsHelpers-34398bae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(t,r,e,o,l,m){if(1===o.length){if(Z(o[0]))return U(i(t,o[0],O(o[1],-1)));if(E(o[0]))return U(i(t,o[0].toArray(),O(o[1],-1)))}else if(2===o.length){if(Z(o[0]))return U(i(t,o[0],O(o[1],-1)));if(E(o[0]))return U(i(t,o[0].toArray(),O(o[1],-1)));if(k(o[0]))return o[0].load().then((n=>d(f.create(o[1],n.getFieldsIndex()),m,l).then((n=>o[0].calculateStatistic(t,n,O(o[2],1e3),r.abortSignal)))))}else if(3===o.length&&k(o[0]))return o[0].load().then((n=>d(f.create(o[1],n.getFieldsIndex()),m,l).then((n=>o[0].calculateStatistic(t,n,O(o[2],1e3),r.abortSignal)))));return U(i(t,o,-1))}function d(e,u,i){try{const r=e.getVariables();if(r.length>0){const n=[];for(let t=0;t<r.length;t++){const e={name:r[t]};n.push(u.evaluateIdentifier(i,e));}return f$1(n).then((n=>{const t={};for(let e=0;e<r.length;e++)t[r[e]]=n[e];return e.parameters=t,e}))}return U(e)}catch(n){return O$1(n)}}function m(n){"async"===n.mode&&(n.functions.stdev=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("stdev",r,0,u,t,n)}))},n.functions.variance=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("variance",r,0,u,t,n)}))},n.functions.average=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("mean",r,0,u,t,n)}))},n.functions.mean=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("mean",r,0,u,t,n)}))},n.functions.sum=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("sum",r,0,u,t,n)}))},n.functions.min=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("min",r,0,u,t,n)}))},n.functions.max=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("max",r,0,u,t,n)}))},n.functions.count=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(J(r,1,1),k(r[0]))return r[0].count(n.abortSignal);if(Z(r[0])||F(r[0]))return r[0].length;if(E(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { m as registerFunctions };
