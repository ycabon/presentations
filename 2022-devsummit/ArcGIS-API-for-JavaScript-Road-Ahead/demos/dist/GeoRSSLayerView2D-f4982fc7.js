import { ca as g$1, b$ as L, c8 as n, dA as M, dB as c, N as d, bo as m, j as e, k as i$1 } from './_virtual_index-2683c931.js';
import { l, d as d$1 } from './LayerView2D-e9137e52.js';
import { e as et } from './BaseGraphicContainer-d9ecea3a.js';
import { i } from './GraphicContainer-e41c0016.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-4b43760e.js';
import './ComputedAttributeStorage-bb926dc8.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-52efe4a8.js';
import './tileUtils-a3c95651.js';
import './TurboLine-b4d64355.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-46b123b8.js';
import './FeatureContainer-3f732927.js';
import './TileContainer-f32af6bf.js';
import './WGLContainer-0b2e4b10.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let y=class extends(l(d$1)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Promise.resolve(null);const s=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Promise.all(s).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),t=new(L.ofType(n))(r.features);let p;if(this._graphicsViewMap[r.geometryType])p=this._graphicsViewMap[r.geometryType],p.graphics.addMany(t);else {const s=e.layerDefinition.drawingInfo,o=e.popupInfo?M.fromJSON(e.popupInfo):null,l=c(s.renderer);p=new et({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:t,renderer:l,container:new i(this.view.featuresTilingScheme)}),this._graphicsViewMap[r.geometryType]=p,this._popupTemplates.set(p,o),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=l.symbol):this.layer.lineSymbol=l.symbol:this.layer.polygonSymbol=l.symbol,this.graphicsViews.push(p),this.container.addChild(p.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};y=e([i$1("esri.views.2d.layers.GeoRSSLayerView2D")],y);var g=y;

export default g;
