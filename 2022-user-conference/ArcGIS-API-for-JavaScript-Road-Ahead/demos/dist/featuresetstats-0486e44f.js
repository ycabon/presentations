import { V, P, Y, w, E, t, e, am as l$1, y as v } from './arcadeUtils-cbca72a3.js';
import { qO as f$1 } from './_virtual_index-1ea2035a.js';
import './number-2aae57c3.js';
import './hash-da85b7aa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function f(n,t,r,i,f,d){if(1===i.length){if(Y(i[0]))return l$1(n,i[0],v(i[1],-1));if(E(i[0]))return l$1(n,i[0].toArray(),v(i[1],-1))}else if(2===i.length){if(Y(i[0]))return l$1(n,i[0],v(i[1],-1));if(E(i[0]))return l$1(n,i[0].toArray(),v(i[1],-1));if(P(i[0])){const r=await i[0].load(),e=await l(f$1.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,v(i[2],1e3),t.abortSignal)}}else if(3===i.length&&P(i[0])){const r=await i[0].load(),e=await l(f$1.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,v(i[2],1e3),t.abortSignal)}return l$1(n,i,-1)}async function l(n,t,r){const e=n.getVariables();if(e.length>0){const a=[];for(let n=0;n<e.length;n++){const i={name:e[n]};a.push(await t.evaluateIdentifier(r,i));}const i={};for(let n=0;n<e.length;n++)i[e[n]]=a[n];return n.parameters=i,n}return n}function d(c){"async"===c.mode&&(c.functions.stdev=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("stdev",t,r,e,n,c)))},c.functions.variance=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("variance",t,r,e,n,c)))},c.functions.average=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("mean",t,r,e,n,c)))},c.functions.mean=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("mean",t,r,e,n,c)))},c.functions.sum=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("sum",t,r,e,n,c)))},c.functions.min=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("min",t,r,e,n,c)))},c.functions.max=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("max",t,r,e,n,c)))},c.functions.count=function(u,o){return c.standardFunctionAsync(u,o,((c,f,l)=>{if(V(l,1,1,u,o),P(l[0]))return l[0].count(c.abortSignal);if(Y(l[0])||w(l[0]))return l[0].length;if(E(l[0]))return l[0].length();throw new t(u,e.InvalidParameter,o)}))});}

export { d as registerFunctions };
