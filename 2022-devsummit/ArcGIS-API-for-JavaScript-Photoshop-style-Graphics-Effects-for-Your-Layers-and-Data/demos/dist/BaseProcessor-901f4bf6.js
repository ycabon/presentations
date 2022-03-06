import { ac as e, ad as d, ae as i, gL as d$1 } from './_virtual_index-49b2bc11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends d$1{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([d({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([d({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([d({constructOnly:!0})],s.prototype,"service",void 0),e([d()],s.prototype,"spatialReference",null),e([d({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([d({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([i("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;

export { p };
