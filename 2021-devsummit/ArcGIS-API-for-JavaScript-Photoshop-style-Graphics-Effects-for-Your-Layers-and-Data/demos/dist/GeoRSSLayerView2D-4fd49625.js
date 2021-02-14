import { U, E as f, d8 as g$1, cE as E, cH as n, ew as M, ex as u$1, a9 as d, ey as n$1, y as e, A as i } from './_virtual:index-a8a6346c.js';
import { l, p } from './LayerView2D-8aafe765.js';
import { Q } from './GraphicsView2D-3a00af16.js';
import './Container-a6b532ef.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-edd05277.js';
import './json-dc26b8a4.js';
import './quickselect-ee4d9e32.js';
import './shapingUtils-5ac9a0a4.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-69892482.js';
import './MaterialKey-486107c6.js';
import './visualVariablesUtils-77b655f5.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-a89becb5.js';
import './VertexBuffer-7d673970.js';
import './CircularArray-6f9308dc.js';
import './TurboLine-427f7a08.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-e2d97937.js';
import './TileContainer-188fa94d.js';
import './WGLContainer-2078c1c1.js';
import './ShaderCompiler-90eb78ca.js';
import './Program-0bb30dd1.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-b46a79ef.js';
import './FeatureSetReader-430f5a63.js';
import './centroid-6105d00e.js';
import './graphicsUtils-e8bda91b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let g=class extends(l(p)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return f(i).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),s=new(E.ofType(n))(r.features);let o;if(this._graphicsViewMap[r.geometryType])o=this._graphicsViewMap[r.geometryType],o.graphics.addMany(s);else {const i=e.layerDefinition.drawingInfo,p=e.popupInfo?M.fromJSON(e.popupInfo):null,a=u$1(i.renderer);o=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a}),this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,p),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(o),this.container.addChild(o.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new n$1({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new n$1({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new n$1({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};g=e([i("esri.views.2d.layers.GeoRSSLayerView2D")],g);var u=g;

export default u;
