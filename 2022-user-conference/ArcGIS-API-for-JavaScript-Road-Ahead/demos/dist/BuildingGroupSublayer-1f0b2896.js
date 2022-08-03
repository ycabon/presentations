import { B as e, C as d$1, D as n, j, ni as t, nj as i } from './_virtual_index-9b831d4a.js';
import { U, n as n$1 } from './BuildingComponentSublayer-7f5f29be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var a;const p={type:j,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l}}},read:!1}};function l(r,o,t$1){if(r&&Array.isArray(r))return new j(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t$1),o}t$1&&t$1.messages&&r&&t$1.messages.push(new t("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t$1}));})))}let c=a=class extends n$1{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return i(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c:U}e([d$1({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),e([d$1(p)],c.prototype,"sublayers",void 0),c=a=e([n("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=p,r.readSublayers=l,r.forEachSublayer=e;}(c||(c={}));const d=c;

export { d };
