import { as as u, U, w as f, q as e, r as i } from './index.js';
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
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
