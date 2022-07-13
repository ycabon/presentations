import { B as e, C as d, D as n } from './_virtual_index-fc1e0009.js';
import A from './FeatureLayerView2D-c300d379.js';
import './EffectView-1b384502.js';
import './definitions-20a531fc.js';
import './LayerView2D-915c0186.js';
import './utils-9d4b373e.js';
import './Utils-073d76fd.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-4621aa9a.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-833d16dd.js';
import './alignmentUtils-d4b065e2.js';
import './schemaUtils-001ae18f.js';
import './visualVariablesUtils-cff6b693.js';
import './createSymbolSchema-6c79a99e.js';
import './CIMSymbolHelper-d0b50b9c.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-3ce2e497.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-8dbd5635.js';
import './callExpressionWithFeature-1f700441.js';
import './ExpandedCIM-1216aadf.js';
import './MD5-efff06bc.js';
import './util-1b5d3cc6.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-42893d47.js';
import './LayerView-9aad410e.js';
import './RefreshableLayerView-894e8344.js';

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
