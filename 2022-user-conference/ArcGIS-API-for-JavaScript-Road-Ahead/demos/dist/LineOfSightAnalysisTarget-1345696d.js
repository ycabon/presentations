import { t as t$1, r8 as u$2, iF as i, E as f$2, eL as w, B as e, C as d, bg as b, gu as x, D as n$1, qN as l$2 } from './_virtual_index-9b831d4a.js';
import { w as w$1 } from './persistable-564ba5e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(e,t){return l$1(e)===l$1(t)}function l$1(t){if(t$1(t))return null;const l=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${l}-${r}`}const r={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u$1}}}};function n(t,l){t$1(t)||null==t.layer?.objectIdField||null==t.attributes||(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]});}function u$1(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f$1=class extends(u$2(i(f$2))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d({type:b}),w$1()],f$1.prototype,"position",void 0),e([d({type:x}),w$1()],f$1.prototype,"elevationInfo",void 0),e([d(r)],f$1.prototype,"feature",void 0),f$1=e([n$1("esri.analysis.LineOfSightAnalysisObserver")],f$1);const u=f$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends(u$2(l$2)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d({type:b}),w$1()],l.prototype,"position",void 0),e([d({type:x}),w$1()],l.prototype,"elevationInfo",void 0),e([d(r)],l.prototype,"feature",void 0),l=e([n$1("esri.analysis.LineOfSightAnalysisTarget")],l);const f=l;

export { f, l$1 as l, u };
