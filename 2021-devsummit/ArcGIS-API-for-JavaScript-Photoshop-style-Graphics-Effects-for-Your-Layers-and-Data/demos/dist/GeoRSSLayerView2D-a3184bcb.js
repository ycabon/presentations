import { U, E as f, d8 as g$1, cE as E, cH as n, ew as M, ex as u$1, a9 as d, ey as n$1, y as e, A as i } from './_virtual:index-3cfe80ed.js';
import { l, p } from './LayerView2D-57e1d9b0.js';
import { Q } from './GraphicsView2D-07823d1d.js';
import './Container-77c0b40a.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-b01f8cd7.js';
import './json-dc26b8a4.js';
import './quickselect-e027054e.js';
import './shapingUtils-82073fb7.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-7b430d1d.js';
import './MaterialKey-493fae21.js';
import './visualVariablesUtils-4bf7ba0e.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-31964d6f.js';
import './VertexBuffer-e387e241.js';
import './CircularArray-11b719a7.js';
import './TurboLine-66db23ef.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-c61e0fae.js';
import './TileContainer-657d3bf9.js';
import './WGLContainer-1770bca0.js';
import './ShaderCompiler-0e5c709a.js';
import './Program-57fde19e.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-421a40e7.js';
import './FeatureSetReader-2ac4bb8f.js';
import './centroid-6105d00e.js';
import './graphicsUtils-33fd835c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let g=class extends(l(p)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return f(i).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),s=new(E.ofType(n))(r.features);let o;if(this._graphicsViewMap[r.geometryType])o=this._graphicsViewMap[r.geometryType],o.graphics.addMany(s);else {const i=e.layerDefinition.drawingInfo,p=e.popupInfo?M.fromJSON(e.popupInfo):null,a=u$1(i.renderer);o=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a}),this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,p),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(o),this.container.addChild(o.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new n$1({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new n$1({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new n$1({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};g=e([i("esri.views.2d.layers.GeoRSSLayerView2D")],g);var u=g;

export default u;
