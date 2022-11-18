import { t2 as t, b8 as h, P as g, t as t$1, u as e, y, qD as t$2, z as n$1 } from './_virtual_index-1ea2035a.js';
import { y as yt } from './I3SMeshView3D-ae8ce576.js';
import { n } from './LayerView3D-c60482d9.js';
import { u as u$1 } from './LayerView-04d8537b.js';
import './I3SOverrides-0110e6f2.js';
import './I3SNode-0a9d5c3f.js';
import './RenderTexture-4d4fdf4e.js';
import './FeatureLayerView3D-3052d908.js';
import './FeatureLayerViewBase3D-3375fec0.js';
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
import './EventedSet-5b7e524a.js';
import './FeatureLayerView-30945c9f.js';
import './popupUtils-4fcb9e6d.js';
import './RefreshableLayerView-f32b8d34.js';
import './SceneModification-46125cf8.js';
import './persistable-2efd2972.js';
import './SceneLayerWorker-322c728c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const d=.2;let m=class extends(yt(n(u$1))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=t.WithoutRasterImage;}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??0}get lodFactor(){return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor??1}get progressiveLoadFactor(){return this.lodFactor>=1?d:1}get layerPopupEnabled(){return !1}initialize(){this.updatingHandles.add((()=>this.layer.modifications),(()=>this._loadModifications()),h),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this);}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this);}_createLayerGraphic(){const e=new g;return e.layer=this.layer,e.sourceLayer=this.layer,e}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),t$1(this.layer.modifications))return void(this._modifications=[]);const e=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange((()=>e),(()=>this._modifications=e.toArray()),h),"modifications");}};e([y()],m.prototype,"layer",void 0),e([y()],m.prototype,"i3slayer",null),e([y(t$2)],m.prototype,"updatingProgress",void 0),e([y()],m.prototype,"updatingProgressValue",null),e([y()],m.prototype,"lodFactor",null),e([y({readOnly:!0})],m.prototype,"progressiveLoadFactor",null),m=e([n$1("esri.views.3d.layers.SceneLayerView3D")],m);const u=m;

export { u as default };
