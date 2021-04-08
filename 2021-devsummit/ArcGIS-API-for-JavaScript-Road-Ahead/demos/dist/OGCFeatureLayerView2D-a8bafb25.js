import { j as e, y, k as i$1, s, df as y$1 } from './_virtual_index-634cbc09.js';
import Y from './FeatureLayerView2D-f462b31c.js';
import './definitions-12783a0f.js';
import './LayerView2D-9976179f.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './clickToleranceUtils-0399fce2.js';
import './drapedUtils-302ab53b.js';
import './schemaUtils-35ff841b.js';
import './MD5-a554c7d9.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './MaterialKey-202e82ff.js';
import './visualVariablesUtils-07a6daab.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './popupUtils-88c6ff22.js';

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
