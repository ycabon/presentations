import { ed as P, eI as L, e7 as J, dV as Z, eg as z, e1 as L$1, ef as O, e0 as s, e9 as k } from './_virtual_index-49b2bc11.js';
import { J as l$1 } from './arcadeUtils-03731fcc.js';
import { WhereClause as m$1 } from './WhereClause-dc0be1a8.js';
import './FeatureSetReader-c99e2aca.js';
import './centroid-15412c9b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(J(s[0]))return L$1(l$1(n,s[0],O(s[1],-1)));if(z(s[0]))return L$1(l$1(n,s[0].toArray(),O(s[1],-1)))}else if(2===s.length){if(J(s[0]))return L$1(l$1(n,s[0],O(s[1],-1)));if(z(s[0]))return L$1(l$1(n,s[0].toArray(),O(s[1],-1)));if(L(s[0]))return s[0].load().then((t=>d(m$1.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&L(s[0]))return s[0].load().then((t=>d(m$1.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))));return L$1(l$1(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return s(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return L$1(n)}catch(e){return k(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(P(o,1,1),L(o[0]))return o[0].count(i.abortSignal);if(J(o[0])||Z(o[0]))return o[0].length;if(z(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { m as registerFunctions };
