import { dX as l$1, r, B as e, C as d, D as n$1, lf as o, E as f } from './_virtual_index-9b831d4a.js';
import { _ } from './GraphicsProcessor-6d0ba1a1.js';
import { t } from './GraphicsView-d48dcc3f.js';
import './Graphics3DScaleVisibility-2c856a9f.js';
import './rendererConversion-c619220f.js';
import './optimizedFeatureQueryEngineAdapter-66a8e5a3.js';
import './centroid-3313e4f0.js';
import './Graphics3DObjectStates-f844df23.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let h=class extends(t(f)){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new n;}initialize(){this._set("processor",new _({owner:this})),this.processor.setup();}destroy(){this._set("processor",l$1(this.processor));}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){return !!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,s){return this.processor.whenGraphicBounds(r,s)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r);}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r$1,s){return r(s)?s.clientGraphics:null}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};e([d({readOnly:!0})],h.prototype,"graphics",null),e([d()],h.prototype,"loadedGraphics",null),e([d({readOnly:!0})],h.prototype,"updating",null),e([d({constructOnly:!0})],h.prototype,"view",void 0),e([d()],h.prototype,"processor",void 0),e([d({type:Boolean})],h.prototype,"slicePlaneEnabled",void 0),e([d()],h.prototype,"layer",void 0),h=e([n$1("esri.views.3d.layers.GraphicsView3D")],h);class n extends o{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid;}}const l=h;

export { l as default };
