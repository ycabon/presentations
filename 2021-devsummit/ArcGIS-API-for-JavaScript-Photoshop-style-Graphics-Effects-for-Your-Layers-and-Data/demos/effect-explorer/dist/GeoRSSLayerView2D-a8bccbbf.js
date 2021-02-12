import { U, w as f, d8 as g$1, cy as E, cP as n, df as M, dg as u$1, a2 as d, dh as n$1, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-a323da6b.js';
import { Q } from './GraphicsView2D-2d165f43.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-c0611e45.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-dcbb2c5b.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-ea321f1e.js';
import './RenderingContext-d31ba1e0.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d3a1727d.js';
import './VertexBuffer-4c2c0271.js';
import './CircularArray-99513797.js';
import './TurboLine-21fa90f1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-3c223b17.js';
import './TileContainer-e5b4ea06.js';
import './WGLContainer-f415d29f.js';
import './VertexArrayObject-b943938d.js';
import './ShaderCompiler-833038a1.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-c1444bb2.js';
import './FeatureSetReader-4c248b92.js';
import './centroid-6105d00e.js';
import './graphicsUtils-9af6492a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let g=class extends(l(p)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return f(i).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),s=new(E.ofType(n))(r.features);let o;if(this._graphicsViewMap[r.geometryType])o=this._graphicsViewMap[r.geometryType],o.graphics.addMany(s);else {const i=e.layerDefinition.drawingInfo,p=e.popupInfo?M.fromJSON(e.popupInfo):null,a=u$1(i.renderer);o=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a}),this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,p),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(o),this.container.addChild(o.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new n$1({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new n$1({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new n$1({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};g=e([i("esri.views.2d.layers.GeoRSSLayerView2D")],g);var u=g;

export default u;
