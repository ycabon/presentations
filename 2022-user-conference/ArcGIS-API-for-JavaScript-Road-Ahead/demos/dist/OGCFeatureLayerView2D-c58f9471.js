import { a as e, d, n } from './_virtual_index-64b818a8.js';
import A from './FeatureLayerView2D-de73bbbc.js';
import './utils-b2399430.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './LayerView2D-246827ac.js';
import './schemaUtils-6e8c0373.js';
import './visualVariablesUtils-f466489d.js';
import './createSymbolSchema-15811898.js';
import './CIMSymbolHelper-8a3e4339.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-fc82869e.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-15eec215.js';
import './callExpressionWithFeature-2a9f2efb.js';
import './ExpandedCIM-72fcda41.js';
import './MD5-efff06bc.js';
import './util-4c696f7e.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-0b937595.js';
import './LayerView-9b4453e0.js';
import './RefreshableLayerView-1ab1c1be.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([d()],t.prototype,"layer",void 0),e([d({readOnly:!0})],t.prototype,"availableFields",null),t=e([n("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t=class extends(o(A)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([n("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
