import { B as e, C as d, D as n } from './_virtual_index-a68dd1ed.js';
import A from './FeatureLayerView2D-8462cd88.js';
import './EffectView-f0c56014.js';
import './definitions-20a531fc.js';
import './LayerView2D-5e78fc62.js';
import './utils-65fe22dc.js';
import './Utils-13ecd570.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-6d086a89.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-c720612c.js';
import './alignmentUtils-d4b065e2.js';
import './schemaUtils-b5b76e05.js';
import './visualVariablesUtils-2b7ff03c.js';
import './createSymbolSchema-b0736342.js';
import './CIMSymbolHelper-207e14e1.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-86b5337e.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-cdc9ead8.js';
import './callExpressionWithFeature-61b951a0.js';
import './ExpandedCIM-ab130668.js';
import './MD5-efff06bc.js';
import './util-d93141bf.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-f156b80b.js';
import './LayerView-c3f47c16.js';
import './RefreshableLayerView-7acfc04f.js';

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
