import { B as e, C as d, D as n, eI as d$1 } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let s=class extends d$1{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([d({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([d({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([d({constructOnly:!0})],s.prototype,"service",void 0),e([d()],s.prototype,"spatialReference",null),e([d({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([d({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([n("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;

export { p };
