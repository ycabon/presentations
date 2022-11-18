import { u as e$1, y, w5 as c, z as n, ju as l, a as f, nK as s, nL as i, U } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[];}};e$1([y({type:[c],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],a.prototype,"namedTraceConfigurations",void 0),a=e$1([n("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function e(e,n,i$1){const g=f(e),l=n.toJSON();n.globalIds&&n.globalIds.length>0&&(l.globalIds=JSON.stringify(n.globalIds)),n.creators&&n.creators.length>0&&(l.creators=JSON.stringify(n.creators)),n.tags&&n.tags.length>0&&(l.tags=JSON.stringify(n.tags)),n.names&&n.names.length>0&&(l.names=JSON.stringify(n.names));const f$1={...l,f:"json"},m=s({...g.query,...f$1}),u=i(m,{...i$1,method:"post"}),c=`${g.path}/traceConfigurations/query`,{data:p$1}=await U(c,u);if(!p$1)return null;return p.fromJSON(p$1)}

export { e as queryNamedTraceConfigurations };
