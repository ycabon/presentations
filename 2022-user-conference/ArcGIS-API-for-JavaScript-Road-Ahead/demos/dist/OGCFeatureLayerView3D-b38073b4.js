import { s, B as e, C as d, D as n } from './_virtual_index-9b831d4a.js';
import { v } from './FeatureLayerViewBase3D-e94d7cd8.js';
import { o } from './OGCFeatureLayerView-f490e2d2.js';
import './FeatureLikeLayerView3D-74367ab7.js';
import './dehydratedFeatureComparison-dbb61b6e.js';
import './Graphics3DFeatureProcessor-54aa608f.js';
import './Graphics3DScaleVisibility-2c856a9f.js';
import './rendererConversion-c619220f.js';
import './optimizedFeatureQueryEngineAdapter-66a8e5a3.js';
import './centroid-3313e4f0.js';
import './Graphics3DObjectStates-f844df23.js';
import './attributeUtils-cf3c0bd5.js';
import './floorFilterUtils-776aae8e.js';
import './QueryEngine-12d30a72.js';
import './QueryEngineCapabilities-140b3c8f.js';
import './timeSupport-a77eca3d.js';
import './FeatureStore-9335c4fa.js';
import './heatmapTextureUtils-0da3eb14.js';
import './projectExtentUtils-f9a0a9e9.js';
import './LayerView3D-b7813df6.js';
import './EventedSet-4ccd5299.js';
import './FeatureLayerView-473ed4b0.js';
import './popupUtils-c1e7b664.js';
import './LayerView-e26ca8f9.js';
import './RefreshableLayerView-18d98912.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends(o(v)){constructor(){super(...arguments),this.type="ogc-feature-3d";}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})));}};e([d()],i.prototype,"layer",void 0),i=e([n("esri.views.3d.layers.OGCFeatureLayerView3D")],i);const p=i;

export { p as default };
