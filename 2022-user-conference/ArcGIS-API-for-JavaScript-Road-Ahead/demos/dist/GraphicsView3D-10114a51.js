import { es as s, m as r, u as e, y, m3 as o, z as n$1, A as m } from './_virtual_index-1ea2035a.js';
import { A } from './GraphicsProcessor-e793170d.js';
import { t } from './GraphicsView-fce768d1.js';
import './Graphics3DScaleVisibility-0e954b85.js';
import './rendererConversion-e2907b4c.js';
import './optimizedFeatureQueryEngineAdapter-fcb7e44b.js';
import './centroid-205dc6cf.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let h=class extends(t(m)){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new n;}initialize(){this._set("processor",new A({owner:this}));}destroy(){this._set("processor",s(this.processor));}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){return !!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,e){return this.processor.whenGraphicBounds(r,e)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r);}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r$1,e){return r(e)?e.clientGraphics:null}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};e([y({readOnly:!0})],h.prototype,"graphics",null),e([y()],h.prototype,"loadedGraphics",null),e([y({readOnly:!0})],h.prototype,"updating",null),e([y({constructOnly:!0})],h.prototype,"view",void 0),e([y()],h.prototype,"processor",void 0),e([y({type:Boolean})],h.prototype,"slicePlaneEnabled",void 0),e([y()],h.prototype,"layer",void 0),h=e([n$1("esri.views.3d.layers.GraphicsView3D")],h);class n extends o{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid;}}const l=h;

export { l as default };
