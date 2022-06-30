import { j as e, y, k as i$1, s, df as y$1 } from './_virtual_index-2683c931.js';
import Y from './FeatureLayerView2D-30b8385d.js';
import './definitions-12783a0f.js';
import './LayerView2D-e9137e52.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './clickToleranceUtils-0399fce2.js';
import './drapedUtils-fb46e175.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './popupUtils-13353587.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=i=>{let a=class extends i{initialize(){const{layer:e,view:r}=this;e.source.supportsSpatialReference(r.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})));}get availableFields(){return y$1(this.layer.fields,["*"])}};return e([y()],a.prototype,"layer",void 0),e([y({readOnly:!0})],a.prototype,"availableFields",null),a=e([i$1("esri.views.layers.OGCFeatureLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends(i(Y)){};t=e([i$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);var p=t;

export default p;
