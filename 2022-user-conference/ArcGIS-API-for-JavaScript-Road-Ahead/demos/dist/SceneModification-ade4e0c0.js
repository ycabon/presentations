import { B as e, C as d, bF as v, cS as r, D as n, iH as l, fL as An, ni as t, oO as Wn, y as y$1 } from './_virtual_index-9b831d4a.js';
import { w } from './persistable-564ba5e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var m;let y=m=class extends l{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!An(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new v;Wn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m({geometry:y$1(this.geometry),type:this.type})}};e([d({type:v}),w()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([d({type:["clip","mask","replace"],nonNullable:!0}),w()],y.prototype,"type",void 0),y=m=e([n("esri.layers.support.SceneModification")],y);const f=y;

export { f };
