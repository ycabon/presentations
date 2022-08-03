import { B as e, C as d, D as n, pG as r, s, fL as An } from './_virtual_index-9b831d4a.js';
import { v } from './FeatureLayerViewBase3D-e94d7cd8.js';
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
let p=class extends v{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=r();}initialize(){"capabilities"in this.layer&&this.layer.capabilities.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new s("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:this.layer}))),this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new s("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),"mesh"!==this.layer.geometryType||An(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")));}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};e([d({constructOnly:!0})],p.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),e([d()],p.prototype,"layer",void 0),p=e([n("esri.views.3d.layers.FeatureLayerView3D")],p);const l=p;

export { l as default };
