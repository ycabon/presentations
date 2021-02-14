import { aA as u, U, E as f, y as e, A as i } from './_virtual:index-98fd932b.js';
import { l, p } from './LayerView2D-5a333780.js';
import { Q } from './GraphicsView2D-7c3a090e.js';
import './Container-0b4cc106.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-fab7ade3.js';
import './json-dc26b8a4.js';
import './quickselect-5613a511.js';
import './shapingUtils-feccb4cc.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-b3a85d6f.js';
import './MaterialKey-30b5ebd6.js';
import './visualVariablesUtils-fbf9edb4.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-3a9114bd.js';
import './VertexBuffer-6fad06b5.js';
import './CircularArray-13b39bf2.js';
import './TurboLine-e0aaeb31.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-ae27a45f.js';
import './TileContainer-ee6a69b0.js';
import './WGLContainer-3b24848e.js';
import './ShaderCompiler-d9930b79.js';
import './Program-96d8e234.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-b45efe82.js';
import './FeatureSetReader-59741c5e.js';
import './centroid-6105d00e.js';
import './graphicsUtils-cf79bcb3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
