import { of as u$3, fZ as i, b6 as s, ap as f$3, G as r$1, a as e, d as d$1, n as n$2, O as t$1, dZ as w, aw as b, ff as x$1, oi as l$3, cA as j$1, jm as t$2, l as l$4, dn as w$2, i_ as n$3, ad as o, e as e$1, i2 as u$4, oj as un, hT as h, ok as m, eZ as i$1, jV as c$1, jX as O, ij as b$1 } from './_virtual_index-64b818a8.js';
import { w as w$1 } from './persistable-bf5ee59a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n$1=0,l$2=class extends(u$3(i(s(f$3)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${n$1++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(r$1(t))switch(t.type){case"line-of-sight":t.removeAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(r$1)}};e([d$1({type:String,constructOnly:!0,clonable:!1})],l$2.prototype,"id",void 0),e([d$1({type:String})],l$2.prototype,"title",void 0),e([d$1({constructOnly:!0})],l$2.prototype,"type",void 0),e([d$1({clonable:!1,value:null})],l$2.prototype,"parent",null),e([d$1({readOnly:!0})],l$2.prototype,"isEditable",null),e([d$1({readOnly:!0})],l$2.prototype,"requiredPropertiesForEditing",void 0),e([d$1({readOnly:!0})],l$2.prototype,"nonEditableMessage",void 0),l$2=e([n$2("esri.analysis.Analysis")],l$2);const c=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(e,t){return l$1(e)===l$1(t)}function l$1(t){if(t$1(t))return null;const l=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${l}-${r}`}const r={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u$2}}}};function n(t,l){t$1(t)||null==t.layer?.objectIdField||null==t.attributes||(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]});}function u$2(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f$2=class extends(u$3(i(f$3))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d$1({type:b}),w$1()],f$2.prototype,"position",void 0),e([d$1({type:x$1}),w$1()],f$2.prototype,"elevationInfo",void 0),e([d$1(r)],f$2.prototype,"feature",void 0),f$2=e([n$2("esri.analysis.LineOfSightAnalysisObserver")],f$2);const u$1=f$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends(u$3(l$3)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d$1({type:b}),w$1()],l.prototype,"position",void 0),e([d$1({type:x$1}),w$1()],l.prototype,"elevationInfo",void 0),e([d$1(r)],l.prototype,"feature",void 0),l=e([n$2("esri.analysis.LineOfSightAnalysisTarget")],l);const f$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const j=j$1.ofType(f$1);let x=class extends c{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing.";}initialize(){this.addHandles(l$4((()=>this._computeExtent()),(e=>{(t$1(e)||t$1(e.pending))&&this._set("extent",r$1(e)?e.extent:null);}),w$2));}get targets(){return this._get("targets")||new j}set targets(e){this._set("targets",n$3(e,this.targets,j));}get spatialReference(){return r$1(this.observer)&&r$1(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return [o(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return r$1(e)?e$1(e.pending):null}_computeExtent(){const e=this.spatialReference;if(t$1(this.observer)||t$1(this.observer.position)||t$1(e))return null;const t=e=>"absolute-height"===i$1(e.position,e.elevationInfo),o=this.observer.position,r=u$4(o.x,o.y,o.z,o.x,o.y,o.z);for(const i of this.targets)if(r$1(i.position)){const t=un(i.position,e);if(r$1(t.pending))return {pending:t.pending,extent:null};if(r$1(t.geometry)){const{x:e,y:o,z:s}=t.geometry;h(r,[e,o,s]);}}const s=m(r,e);return t(this.observer)&&this.targets.every(t)||(s.zmin=null,s.zmax=null),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll();}};e([d$1({type:["line-of-sight"]})],x.prototype,"type",void 0),e([d$1({type:u$1,json:{read:!0,write:!0}})],x.prototype,"observer",void 0),e([d$1({cast:t$2,type:j,nonNullable:!0,json:{read:!0,write:!0}})],x.prototype,"targets",null),e([d$1({value:null,readOnly:!0})],x.prototype,"extent",void 0),e([d$1({readOnly:!0})],x.prototype,"spatialReference",null),e([d$1({readOnly:!0})],x.prototype,"requiredPropertiesForEditing",null),e([d$1({readOnly:!0})],x.prototype,"nonEditableMessage",void 0),x=e([n$2("esri.analysis.LineOfSightAnalysis")],x);const E=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const d=j$1.ofType(f$1);let u=class extends(c$1(O(b$1))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new E,this.opacity=1;}initialize(){this.addHandles(l$4((()=>this.analysis),((e,t)=>{r$1(t)&&t.parent===this&&(t.parent=null),r$1(e)&&(e.parent=this);}),w$2));}async load(){return r$1(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return o(this.analysis,(e=>e.observer))}set observer(e){o(this.analysis,(t=>t.observer=e));}get targets(){return r$1(this.analysis)?this.analysis.targets:null}set targets(e){o(this.analysis,(t=>t.targets=e));}get fullExtent(){return r$1(this.analysis)?this.analysis.extent:null}get spatialReference(){return r$1(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new E);}};e([d$1({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),e([d$1({type:["LineOfSightLayer"]})],u.prototype,"operationalLayerType",void 0),e([d$1({type:u$1,json:{read:!0,write:{ignoreOrigin:!0}}})],u.prototype,"observer",null),e([d$1({type:d,json:{read:!0,write:{ignoreOrigin:!0}}})],u.prototype,"targets",null),e([d$1({nonNullable:!0,json:{read:!1,write:!1}})],u.prototype,"analysis",void 0),e([d$1({readOnly:!0})],u.prototype,"fullExtent",null),e([d$1({readOnly:!0})],u.prototype,"spatialReference",null),e([d$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),e([d$1({type:["show","hide"]})],u.prototype,"listMode",void 0),u=e([n$2("esri.layers.LineOfSightLayer")],u);const f=u;

export { f as default };
