import { pH as t, b4 as h$1, g, t as t$1, B as e, C as d, n1 as t$2, D as n$1 } from './_virtual_index-9b831d4a.js';
import { p as pt } from './I3SMeshView3D-64bd86c7.js';
import { n } from './LayerView3D-b7813df6.js';
import { u } from './LayerView-e26ca8f9.js';
import './I3SAttributeOverrides-7cacace0.js';
import './I3SNode-8ddf3624.js';
import './SceneModification-ade4e0c0.js';
import './persistable-564ba5e4.js';
import './Graphics3DScaleVisibility-2c856a9f.js';
import './rendererConversion-c619220f.js';
import './optimizedFeatureQueryEngineAdapter-66a8e5a3.js';
import './centroid-3313e4f0.js';
import './SceneLayerWorker-6e3509b0.js';
import './attributeUtils-cf3c0bd5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l=.2;let m=class extends(pt(n(u))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this.lodFactor=1,this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=t.WithoutRasterImage;}get progressiveLoadFactor(){return this.lodFactor>=1?l:1}initialize(){this.updatingHandles.add((()=>this.layer.modifications),(()=>this._loadModifications()),h$1),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this);}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this);}_createLayerGraphic(){const r=new g;return r.layer=this.layer,r.sourceLayer=this.layer,r}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),t$1(this.layer.modifications))return void(this._modifications=[]);const r=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange((()=>r),(()=>this._modifications=r.toArray()),h$1),"modifications");}};e([d()],m.prototype,"layer",void 0),e([d({aliasOf:"layer"})],m.prototype,"i3slayer",void 0),e([d(t$2)],m.prototype,"updatingProgress",void 0),e([d({readOnly:!0,aliasOf:"_controller.updatingProgress"})],m.prototype,"updatingProgressValue",void 0),e([d({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],m.prototype,"lodFactor",void 0),e([d({readOnly:!0})],m.prototype,"progressiveLoadFactor",null),m=e([n$1("esri.views.3d.layers.SceneLayerView3D")],m);const h=m;

export { h as default };
