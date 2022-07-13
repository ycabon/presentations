import { B as e, C as d, D as n } from './_virtual_index-4b72c57d.js';
import A from './FeatureLayerView2D-aeacd367.js';
import './EffectView-0ee93c44.js';
import './enums-1f2484bf.js';
import './LayerView-a579da68.js';
import './utils-1dcda7d1.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './schemaUtils-9aaf6a24.js';
import './visualVariablesUtils-a3d3fab4.js';
import './createSymbolSchema-35c250f9.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-ee2b7de5.js';
import './quantizationUtils-994cbb23.js';
import './ExpandedCIM-72783fee.js';
import './MD5-efff06bc.js';
import './util-04e40aaf.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-967d9801.js';
import './RefreshableLayerView-f638c9df.js';

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
