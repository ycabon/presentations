import { ac as e, ad as d, ae as i, s } from './_virtual_index-3ad07138.js';
import D from './FeatureLayerView2D-96f788fe.js';
import './Container-0ea8b7c2.js';
import './drapedUtils-4e6cbba2.js';
import './LayerView-ccf9971d.js';
import './schemaUtils-05c05689.js';
import './Utils-ba2d87f4.js';
import './Texture-970325f3.js';
import './MaterialKey-8a7bcdbb.js';
import './visualVariablesUtils-b2bf8e17.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './popupUtils-9bd5eacf.js';
import './RefreshableLayerView-cd718d73.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1=a=>{let o=class extends a{initialize(){const{layer:e,view:s$1}=this;e.source.supportsSpatialReference(s$1.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([d()],o.prototype,"layer",void 0),e([d({readOnly:!0})],o.prototype,"availableFields",null),o=e([i("esri.views.layers.OGCFeatureLayerView")],o),o};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends(a$1(D)){};t=e([i("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
