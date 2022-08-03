import { bh as f, dX as l$1, r, gc as i, B as e, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { n } from './LayerView3D-b7813df6.js';
import { _ } from './GraphicsProcessor-6d0ba1a1.js';
import { l } from './projectExtentUtils-f9a0a9e9.js';
import { u as u$1 } from './LayerView-e26ca8f9.js';
import './Graphics3DScaleVisibility-2c856a9f.js';
import './rendererConversion-c619220f.js';
import './optimizedFeatureQueryEngineAdapter-66a8e5a3.js';
import './centroid-3313e4f0.js';
import './Graphics3DObjectStates-f844df23.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends(n(u$1)){constructor(){super(...arguments),this.type="graphics-3d",this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null;}initialize(){this._set("processor",new _({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.setup()),this.handles.add(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise(l(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.handles.add(f((()=>this.view?.basemapTerrain?.ready),(()=>()=>this.notifyChange("updating")),{once:!0}));}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",l$1(this.processor));}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}async fetchPopupFeatures(e,s){return r(s)?s.clientGraphics:null}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,s){return this.processor.whenGraphicBounds(e,s)}computeAttachmentOrigin(e,s){return this.processor?.computeAttachmentOrigin(e,s)}getSymbolLayerSize(e,s){return this.processor.getSymbolLayerSize(e,s)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||i.SYNC}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}isUpdating(){return !(!this.processor?.updating&&(this.layer.internal||this.view?.basemapTerrain?.ready))}get performanceInfo(){return {displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.processor?.elevationAlignment.updating??!1,visibilityFrustum:!this.processor?.frustumVisibilitySuspended??!1}}};e([d()],u.prototype,"loadedGraphics",null),e([d({readOnly:!0})],u.prototype,"legendEnabled",null),e([d()],u.prototype,"layer",void 0),e([d({readOnly:!0})],u.prototype,"processor",void 0),e([d({type:Boolean})],u.prototype,"slicePlaneEnabled",void 0),u=e([n$1("esri.views.3d.layers.GraphicsLayerView3D")],u);const h=u;

export { h as default };
