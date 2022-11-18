import { u as e, y, z as n, sS as a, E as s, m as r, gz as An } from './_virtual_index-1ea2035a.js';
import { j } from './FeatureLayerViewBase3D-3375fec0.js';
import './FeatureLikeLayerView3D-7a4659f7.js';
import './dehydratedFeatureComparison-73cd17db.js';
import './queryForSymbologySnapping-52a25749.js';
import './hash-da85b7aa.js';
import './Graphics3DScaleVisibility-0e954b85.js';
import './rendererConversion-e2907b4c.js';
import './optimizedFeatureQueryEngineAdapter-fcb7e44b.js';
import './centroid-205dc6cf.js';
import './floorFilterUtils-776aae8e.js';
import './QueryEngine-c226e0c5.js';
import './QueryEngineCapabilities-45006836.js';
import './timeSupport-eac99e81.js';
import './FeatureStore-6d86d70a.js';
import './heatmapTextureUtils-076ceaf2.js';
import './projectExtentUtils-572728ae.js';
import './LayerView3D-c60482d9.js';
import './EventedSet-5b7e524a.js';
import './FeatureLayerView-30945c9f.js';
import './popupUtils-4fcb9e6d.js';
import './LayerView-04d8537b.js';
import './RefreshableLayerView-f32b8d34.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends j{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=a();}initialize(){"capabilities"in this.layer&&this.layer.capabilities.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new s("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:this.layer}))),r(this.layer.infoFor3D)&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new s("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`)))),"mesh"!==this.layer.geometryType||An(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")));}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};e([y({constructOnly:!0})],l.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),e([y()],l.prototype,"layer",void 0),l=e([n("esri.views.3d.layers.FeatureLayerView3D")],l);const c=l;

export { c as default };
