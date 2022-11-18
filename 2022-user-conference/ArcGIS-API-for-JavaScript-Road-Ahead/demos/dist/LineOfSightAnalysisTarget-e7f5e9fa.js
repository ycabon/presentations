import { t as t$1, n6 as u$2, jq as i, f0 as y, u as e, y as y$1, bk as w, g$ as x, z as n$1, A as m$1, n7 as l$1 } from './_virtual_index-1ea2035a.js';
import { g } from './persistable-2efd2972.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(e,t){return l(e)===l(t)}function l(t){if(t$1(t))return null;const l=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${l}-${r}`}const r={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u$1}}}};function n(t,l){t$1(t)||null==t.layer?.objectIdField||null==t.attributes||(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]});}function u$1(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f$1=class extends(u$2(i(m$1))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return y(this.position,o.position)&&y(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([y$1({type:w}),g()],f$1.prototype,"position",void 0),e([y$1({type:x}),g()],f$1.prototype,"elevationInfo",void 0),e([y$1(r)],f$1.prototype,"feature",void 0),f$1=e([n$1("esri.analysis.LineOfSightAnalysisObserver")],f$1);const u=f$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(u$2(l$1)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return y(this.position,o.position)&&y(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([y$1({type:w}),g()],m.prototype,"position",void 0),e([y$1({type:x}),g()],m.prototype,"elevationInfo",void 0),e([y$1(r)],m.prototype,"feature",void 0),m=e([n$1("esri.analysis.LineOfSightAnalysisTarget")],m);const f=m;

export { f, l, u };
