import { ac as e, ad as d, ae as i, s } from './_virtual_index-49b2bc11.js';
import D from './FeatureLayerView2D-7d3f68d7.js';
import './Container-905526e1.js';
import './drapedUtils-548aa09d.js';
import './LayerView-9194fd82.js';
import './schemaUtils-54c0b4c1.js';
import './Utils-8759b086.js';
import './Texture-7f200883.js';
import './MaterialKey-67bb5654.js';
import './visualVariablesUtils-9beed5ec.js';
import './CIMSymbolHelper-bfef80ee.js';
import './BidiEngine-1d3a0a6d.js';
import './cimSymbolUtils-634dbb78.js';
import './quantizationUtils-65d5f437.js';
import './devEnvironmentUtils-a78265ea.js';
import './MD5-a16a7511.js';
import './util-2e9ee3aa.js';
import './popupUtils-91783a27.js';
import './RefreshableLayerView-a108c313.js';

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
