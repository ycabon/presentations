import { u as e, y as y$1, z as n, e9 as j, mU as t, mV as i } from './_virtual_index-1ea2035a.js';
import { n as n$1, M } from './BuildingComponentSublayer-b40946d4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var a;const l={type:j,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:p}}},read:!1}};function p(r,o,t$1){if(r&&Array.isArray(r))return new j(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t$1),o}return t$1&&t$1.messages&&r&&t$1.messages.push(new t("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t$1})),null})))}let c=a=class extends n$1{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return i(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c:M}e([y$1({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),e([y$1(l)],c.prototype,"sublayers",void 0),c=a=e([n("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=l,r.readSublayers=p,r.forEachSublayer=e;}(c||(c={}));const d=c;

export { d };
