import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-c83abcff.js';
import { Q } from './GraphicsView2D-b87bd606.js';
import './Container-a572c1be.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-2a0a111f.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-2fb51fbb.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-da242892.js';
import './RenderingContext-4825733b.js';
import './MaterialKey-cf85a3bf.js';
import './visualVariablesUtils-668828f1.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-30e10c88.js';
import './VertexBuffer-ecefd038.js';
import './CircularArray-ff522544.js';
import './TurboLine-395b367b.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-666d48ab.js';
import './TileContainer-a66e3510.js';
import './WGLContainer-4d4d589d.js';
import './VertexArrayObject-aa888e2f.js';
import './ShaderCompiler-815c0eca.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-f39e3f3f.js';
import './FeatureSetReader-e8fad45e.js';
import './centroid-6105d00e.js';
import './graphicsUtils-039d2ab9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
