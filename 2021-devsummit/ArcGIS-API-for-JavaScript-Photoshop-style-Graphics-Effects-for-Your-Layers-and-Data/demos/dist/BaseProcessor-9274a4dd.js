import { y as e, z as y, A as i, fW as d } from './_virtual:index-98fd932b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let s=class extends d{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([y({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([y({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([y({constructOnly:!0})],s.prototype,"service",void 0),e([y({dependsOn:["tileStore.tileScheme.spatialReference"]})],s.prototype,"spatialReference",null),e([y({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([y({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([i("esri.views.2d.layers.features.processors.BaseProcessor")],s);var p=s;

export { p };
