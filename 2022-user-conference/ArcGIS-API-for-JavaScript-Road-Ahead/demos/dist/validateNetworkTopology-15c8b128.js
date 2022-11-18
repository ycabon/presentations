import { u as e, y, z as n, ju as l, a as f, nK as s$1, nL as i, U } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let s=class extends l{constructor(e){super(e),this.moment=null,this.fullUpdate=!1,this.validateErrorsCreated=!1,this.dirtyAreaCount=null,this.exceededTransferLimit=null,this.serviceEdits=null;}};e([y({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.moment=e?e.getTime():null;}}}})],s.prototype,"moment",void 0),e([y({type:Boolean,json:{write:!0}})],s.prototype,"fullUpdate",void 0),e([y({type:Boolean,json:{write:!0}})],s.prototype,"validateErrorsCreated",void 0),e([y({type:Number,json:{write:!0}})],s.prototype,"dirtyAreaCount",void 0),e([y({type:Boolean,json:{write:!0}})],s.prototype,"exceededTransferLimit",void 0),e([y({type:[Object],json:{write:!0}})],s.prototype,"serviceEdits",void 0),s=e([n("esri.rest.networks.support.ValidateNetworkTopologyResult")],s);const p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function a(a,s,d){const n=f(a),l=s.toJSON();s.validationSet&&(l.validationSet=JSON.stringify(s.validationSet));const p$1={...l,f:"json"},u=s$1({...n.query,...p$1}),m=i(u,{...d,method:"post"}),f$1=`${n.path}/validateNetworkTopology`,{data:c}=await U(f$1,m);if(!c)return null;const v=p.fromJSON(c);return v.serviceEdits=v.serviceEdits.map((t=>({layerId:t.id,editedFeatures:t.editedFeatures}))),v}

export { a as validateNetworkTopology };
