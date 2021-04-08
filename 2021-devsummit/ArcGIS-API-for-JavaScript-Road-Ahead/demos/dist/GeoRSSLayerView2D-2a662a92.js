import { ca as g$1, b$ as L, c8 as n, dA as M, dB as c, N as d, bo as m, j as e, k as i$1 } from './_virtual_index-634cbc09.js';
import { l, d as d$1 } from './LayerView2D-9976179f.js';
import { e as et } from './BaseGraphicContainer-2d3f7320.js';
import { i } from './GraphicContainer-c6966ce5.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-35ff841b.js';
import './MD5-a554c7d9.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './MaterialKey-202e82ff.js';
import './visualVariablesUtils-07a6daab.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-eed1b518.js';
import './ComputedAttributeStorage-ba368d24.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-261c974c.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-de638f89.js';
import './tileUtils-5cb6bf04.js';
import './TurboLine-6581f402.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-3c89c245.js';
import './FeatureContainer-0b3bbe85.js';
import './TileContainer-243d7e79.js';
import './WGLContainer-9f4143c6.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let y=class extends(l(d$1)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),t=new(L.ofType(n))(r.features);let p;if(this._graphicsViewMap[r.geometryType])p=this._graphicsViewMap[r.geometryType],p.graphics.addMany(t);else {const s=e.layerDefinition.drawingInfo,o=e.popupInfo?M.fromJSON(e.popupInfo):null,l=c(s.renderer);p=new et({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:t,renderer:l,container:new i(this.view.featuresTilingScheme)}),this._graphicsViewMap[r.geometryType]=p,this._popupTemplates.set(p,o),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=l.symbol):this.layer.lineSymbol=l.symbol:this.layer.polygonSymbol=l.symbol,this.graphicsViews.push(p),this.container.addChild(p.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};y=e([i$1("esri.views.2d.layers.GeoRSSLayerView2D")],y);var g=y;

export default g;
