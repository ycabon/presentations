import { U, E as f, d8 as g$1, cE as E, cH as n, ew as M, ex as u$1, a9 as d, ey as n$1, y as e, A as i } from './_virtual:index-1982596a.js';
import { l, p } from './LayerView2D-650a20fa.js';
import { Q } from './GraphicsView2D-529b81eb.js';
import './Container-5f0afd2d.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-00a9c519.js';
import './json-dc26b8a4.js';
import './quickselect-09389b48.js';
import './shapingUtils-426b1f2c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-86534e09.js';
import './MaterialKey-e4d75cc1.js';
import './visualVariablesUtils-9d9ec070.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-023c6781.js';
import './VertexBuffer-ee5a6553.js';
import './CircularArray-c3928fdf.js';
import './TurboLine-605e6be5.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-9565bd8a.js';
import './TileContainer-3521582d.js';
import './WGLContainer-c81de169.js';
import './ShaderCompiler-a1cbc8fc.js';
import './Program-cb13ad60.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-8ec45f04.js';
import './FeatureSetReader-c9109446.js';
import './centroid-6105d00e.js';
import './graphicsUtils-e5e1146f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let g=class extends(l(p)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return f(i).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),s=new(E.ofType(n))(r.features);let o;if(this._graphicsViewMap[r.geometryType])o=this._graphicsViewMap[r.geometryType],o.graphics.addMany(s);else {const i=e.layerDefinition.drawingInfo,p=e.popupInfo?M.fromJSON(e.popupInfo):null,a=u$1(i.renderer);o=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a}),this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,p),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(o),this.container.addChild(o.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new n$1({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new n$1({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new n$1({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};g=e([i("esri.views.2d.layers.GeoRSSLayerView2D")],g);var u=g;

export default u;
