import { U, w as f, d8 as g$1, cy as E, cP as n, df as M, dg as u$1, a2 as d, dh as n$1, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-6ede9be6.js';
import { Q } from './GraphicsView2D-39601e9d.js';
import './Container-b4547994.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-ddb4fcaf.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-c82ac36b.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-0554c7ed.js';
import './RenderingContext-241e9091.js';
import './MaterialKey-d72dbce5.js';
import './visualVariablesUtils-3c8e051e.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d9343cae.js';
import './VertexBuffer-b718e8e5.js';
import './CircularArray-2f6052f3.js';
import './TurboLine-d752dfc1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-c6438626.js';
import './TileContainer-36df6f3f.js';
import './WGLContainer-ac96ee47.js';
import './VertexArrayObject-63d80198.js';
import './ShaderCompiler-2ec9968a.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-a5e3dd53.js';
import './FeatureSetReader-c0c1a4be.js';
import './centroid-6105d00e.js';
import './graphicsUtils-3a5c35b2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let g=class extends(l(p)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return f(i).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const r=g$1.fromJSON(e.featureSet),s=new(E.ofType(n))(r.features);let o;if(this._graphicsViewMap[r.geometryType])o=this._graphicsViewMap[r.geometryType],o.graphics.addMany(s);else {const i=e.layerDefinition.drawingInfo,p=e.popupInfo?M.fromJSON(e.popupInfo):null,a=u$1(i.renderer);o=new Q({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a}),this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,p),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(o),this.container.addChild(o.container);}})),this.handles.add([d(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new n$1({symbol:e});})),d(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new n$1({symbol:e});})),d(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new n$1({symbol:e});}))]);}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};g=e([i("esri.views.2d.layers.GeoRSSLayerView2D")],g);var u=g;

export default u;
